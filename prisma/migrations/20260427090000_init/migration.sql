-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('healthy', 'warning', 'critical');

-- CreateEnum
CREATE TYPE "RiskLevel" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "SeverityLevel" AS ENUM ('low', 'medium', 'high', 'critical');

-- CreateEnum
CREATE TYPE "AlertType" AS ENUM ('critical_risk', 'maintenance_due', 'repeated_issue');

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "vehicle_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" "VehicleStatus" NOT NULL DEFAULT 'healthy',
    "health_score" INTEGER NOT NULL DEFAULT 100,
    "downtime_risk" "RiskLevel" NOT NULL DEFAULT 'low',
    "last_maintenance_date" DATE,
    "next_maintenance_date" DATE,
    "mileage" INTEGER NOT NULL DEFAULT 0,
    "operating_hours" INTEGER NOT NULL DEFAULT 0,
    "issue_count" INTEGER NOT NULL DEFAULT 0,
    "recommendation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maintenance_reports" (
    "id" TEXT NOT NULL,
    "vehicle_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "component" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "severity" "SeverityLevel" NOT NULL,
    "technician" TEXT NOT NULL,
    "note" TEXT,
    "action_taken" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "maintenance_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "vehicle_id" TEXT NOT NULL,
    "type" "AlertType" NOT NULL,
    "risk_level" "RiskLevel" NOT NULL,
    "message" TEXT NOT NULL,
    "predicted_next_maintenance" DATE,
    "recommendation" TEXT,
    "days_until_maintenance" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_repeated_issues" (
    "vehicle_id" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "vehicle_repeated_issues_pkey" PRIMARY KEY ("vehicle_id","issue")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vehicle_code_key" ON "vehicles"("vehicle_code");

-- CreateIndex
CREATE INDEX "idx_vehicles_status" ON "vehicles"("status");

-- CreateIndex
CREATE INDEX "idx_vehicles_type" ON "vehicles"("type");

-- CreateIndex
CREATE INDEX "idx_vehicles_downtime_risk" ON "vehicles"("downtime_risk");

-- CreateIndex
CREATE INDEX "idx_reports_vehicle_date" ON "maintenance_reports"("vehicle_id", "date" DESC);

-- CreateIndex
CREATE INDEX "idx_alerts_active_risk" ON "alerts"("is_active", "risk_level");

-- AddForeignKey
ALTER TABLE "maintenance_reports" ADD CONSTRAINT "maintenance_reports_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_repeated_issues" ADD CONSTRAINT "vehicle_repeated_issues_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

