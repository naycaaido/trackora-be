import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.alert.deleteMany();
  await prisma.maintenanceReport.deleteMany();
  await prisma.vehicleRepeatedIssue.deleteMany();
  await prisma.vehicle.deleteMany();

  await prisma.vehicle.createMany({
    data: [
      {
        id: "v001",
        vehicleCode: "TRK-001",
        name: "Isuzu Giga FVZ",
        type: "Truck",
        location: "Jakarta",
        status: "warning",
        healthScore: 74,
        downtimeRisk: "medium",
        lastMaintenanceDate: new Date("2026-03-10"),
        nextMaintenanceDate: new Date("2026-05-02"),
        mileage: 124000,
        operatingHours: 8900,
        issueCount: 6,
        recommendation: "Check cooling system and schedule oil flush",
      },
      {
        id: "v002",
        vehicleCode: "EXC-002",
        name: "Komatsu PC210",
        type: "Excavator",
        location: "Bandung",
        status: "healthy",
        healthScore: 85,
        downtimeRisk: "low",
        lastMaintenanceDate: new Date("2026-04-02"),
        nextMaintenanceDate: new Date("2026-05-20"),
        mileage: 54000,
        operatingHours: 4200,
        issueCount: 2,
        recommendation: "Routine preventive maintenance",
      },
      {
        id: "v003",
        vehicleCode: "BLD-003",
        name: "CAT D8T",
        type: "Bulldozer",
        location: "Surabaya",
        status: "critical",
        healthScore: 54,
        downtimeRisk: "high",
        lastMaintenanceDate: new Date("2026-03-25"),
        nextMaintenanceDate: new Date("2026-04-30"),
        mileage: 81000,
        operatingHours: 10200,
        issueCount: 10,
        recommendation: "Immediate inspection for hydraulic leak",
      },
    ],
  });

  await prisma.vehicleRepeatedIssue.createMany({
    data: [
      { vehicleId: "v001", issue: "Overheating", frequency: 2 },
      { vehicleId: "v003", issue: "Hydraulic leak", frequency: 4 },
    ],
  });

  await prisma.maintenanceReport.createMany({
    data: [
      {
        id: "mh001",
        vehicleId: "v001",
        date: new Date("2026-03-10"),
        component: "Mesin",
        issue: "Overheating",
        severity: "high",
        technician: "Budi Santoso",
        note: "Suhu mesin melebihi batas",
        actionTaken: "Flush coolant",
      },
      {
        id: "mh002",
        vehicleId: "v003",
        date: new Date("2026-03-25"),
        component: "Hydraulic",
        issue: "Hydraulic leak",
        severity: "critical",
        technician: "Dian Pratama",
        note: "Kebocoran berulang pada seal utama",
        actionTaken: "Seal replacement",
      },
    ],
  });

  await prisma.alert.createMany({
    data: [
      {
        id: "al001",
        vehicleId: "v003",
        type: "critical_risk",
        riskLevel: "high",
        message: "Vehicle BLD-003 has critical operational risk",
        recommendation: "Immediate inspection required",
        isActive: true,
      },
      {
        id: "al002",
        vehicleId: "v003",
        type: "repeated_issue",
        riskLevel: "high",
        message: "Repeated issue detected on BLD-003: Hydraulic leak",
        recommendation: "Perform root cause analysis",
        isActive: true,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
