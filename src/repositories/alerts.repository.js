export function createAlertsRepository(prisma) {
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
