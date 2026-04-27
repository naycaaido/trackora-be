import type { Prisma, PrismaClient, SeverityLevel } from "@prisma/client";

export type CreateMaintenanceReportInput = {
  vehicleId: string;
  component: string;
  issue: string;
  severity: SeverityLevel;
  note?: string;
};

export function createMaintenanceRepository(prisma: PrismaClient) {
  const createWithSideEffects = (input: CreateMaintenanceReportInput) =>
    prisma.$transaction(async (tx) => {
      const vehicle = await tx.vehicle.findUnique({
        where: { id: input.vehicleId },
      });

      if (!vehicle) {
        return null;
      }

      const now = new Date();
      const reportId = `mh${Date.now()}`;

      const report = await tx.maintenanceReport.create({
        data: {
          id: reportId,
          vehicleId: input.vehicleId,
          date: now,
          component: input.component,
          issue: input.issue,
          severity: input.severity,
          technician: "Teknisi Demo",
          note: input.note ?? null,
        },
      });

      const penaltyBySeverity: Record<SeverityLevel, number> = {
        low: 2,
        medium: 5,
        high: 10,
        critical: 20,
      };

      const updatedHealthScore = Math.max(0, vehicle.healthScore - penaltyBySeverity[input.severity]);
      const updatedStatus = updatedHealthScore >= 80 ? "healthy" : updatedHealthScore >= 60 ? "warning" : "critical";

      await tx.vehicle.update({
        where: { id: input.vehicleId },
        data: {
          issueCount: { increment: 1 },
          healthScore: updatedHealthScore,
          status: updatedStatus,
          lastMaintenanceDate: now,
        },
      });

      await tx.vehicleRepeatedIssue.upsert({
        where: {
          vehicleId_issue: {
            vehicleId: input.vehicleId,
            issue: input.issue,
          },
        },
        create: {
          vehicleId: input.vehicleId,
          issue: input.issue,
          frequency: 1,
        },
        update: {
          frequency: { increment: 1 },
        },
      });

      await tx.alert.updateMany({
        where: { vehicleId: input.vehicleId, isActive: true },
        data: { isActive: false },
      });

      const repeatedIssue = await tx.vehicleRepeatedIssue.findUnique({
        where: {
          vehicleId_issue: {
            vehicleId: input.vehicleId,
            issue: input.issue,
          },
        },
      });

      const refreshedVehicle = await tx.vehicle.findUniqueOrThrow({
        where: { id: input.vehicleId },
      });

      const newAlerts: Prisma.AlertCreateManyInput[] = [];

      if (refreshedVehicle.status === "critical" || refreshedVehicle.downtimeRisk === "high") {
        newAlerts.push({
          id: `alrt-cr-${Date.now()}`,
          vehicleId: refreshedVehicle.id,
          type: "critical_risk",
          riskLevel: "high",
          message: `Vehicle ${refreshedVehicle.vehicleCode} has critical operational risk`,
          recommendation: refreshedVehicle.recommendation ?? "Prioritize immediate inspection",
          isActive: true,
        });
      }

      if (refreshedVehicle.nextMaintenanceDate) {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dueDate = new Date(
          refreshedVehicle.nextMaintenanceDate.getFullYear(),
          refreshedVehicle.nextMaintenanceDate.getMonth(),
          refreshedVehicle.nextMaintenanceDate.getDate(),
        );
        const daysUntilMaintenance = Math.floor((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        if (daysUntilMaintenance <= 7) {
          const riskLevel = daysUntilMaintenance <= 1 ? "high" : daysUntilMaintenance <= 3 ? "medium" : "low";
          newAlerts.push({
            id: `alrt-md-${Date.now()}`,
            vehicleId: refreshedVehicle.id,
            type: "maintenance_due",
            riskLevel,
            message: `Maintenance due for ${refreshedVehicle.vehicleCode} in ${Math.max(daysUntilMaintenance, 0)} day(s)`,
            predictedNextMaintenance: refreshedVehicle.nextMaintenanceDate,
            recommendation: "Schedule maintenance visit",
            daysUntilMaintenance,
            isActive: true,
          });
        }
      }

      if ((repeatedIssue?.frequency ?? 0) >= 3) {
        newAlerts.push({
          id: `alrt-ri-${Date.now()}`,
          vehicleId: refreshedVehicle.id,
          type: "repeated_issue",
          riskLevel: refreshedVehicle.downtimeRisk,
          message: `Repeated issue detected on ${refreshedVehicle.vehicleCode}: ${input.issue}`,
          recommendation: "Perform root cause analysis",
          isActive: true,
        });
      }

      if (newAlerts.length > 0) {
        await tx.alert.createMany({ data: newAlerts });
      }

      return report;
    });

  return {
    createWithSideEffects,
  };
}

export type MaintenanceRepository = ReturnType<typeof createMaintenanceRepository>;
