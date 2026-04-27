import type { PrismaClient } from "@prisma/client";
import { addDays, startOfToday } from "../lib/date.js";

export function createDashboardRepository(prisma: PrismaClient) {
  const countVehiclesByStatus = () =>
    prisma.vehicle.groupBy({
      by: ["status"],
      _count: { _all: true },
    });

  const countTotalVehicles = () => prisma.vehicle.count();

  const countDueSoonVehicles = () => {
    const today = startOfToday();
    const inSevenDays = addDays(today, 7);

    return prisma.vehicle.count({
      where: {
        nextMaintenanceDate: {
          gte: today,
          lte: inSevenDays,
        },
      },
    });
  };

  const countHighRiskVehicles = () =>
    prisma.vehicle.count({
      where: { downtimeRisk: "high" },
    });

  const getMonthlyIssueTrend = (limitMonths: number) => {
    const today = startOfToday();
    const from = new Date(today.getFullYear(), today.getMonth() - (limitMonths - 1), 1);

    return prisma.maintenanceReport.findMany({
      where: { date: { gte: from } },
      select: { date: true },
      orderBy: { date: "asc" },
    });
  };

  const getComponentDistribution = () =>
    prisma.maintenanceReport.groupBy({
      by: ["component"],
      _count: { _all: true },
    });

  return {
    countVehiclesByStatus,
    countTotalVehicles,
    countDueSoonVehicles,
    countHighRiskVehicles,
    getMonthlyIssueTrend,
    getComponentDistribution,
  };
}

export type DashboardRepository = ReturnType<typeof createDashboardRepository>;
