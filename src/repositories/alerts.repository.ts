import type { PrismaClient } from "@prisma/client";

export function createAlertsRepository(prisma: PrismaClient) {
  const findActiveAlerts = () =>
    prisma.alert.findMany({
      where: { isActive: true },
      include: { vehicle: true },
      orderBy: [{ riskLevel: "desc" }, { createdAt: "desc" }],
    });

  return {
    findActiveAlerts,
  };
}

export type AlertsRepository = ReturnType<typeof createAlertsRepository>;
