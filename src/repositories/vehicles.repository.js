export function createVehiclesRepository(prisma) {
  const findMany = (filters) => {
    const where = {};

    if (filters.search) {
      where.OR = [
        { vehicleCode: { contains: filters.search, mode: "insensitive" } },
        { name: { contains: filters.search, mode: "insensitive" } },
        { location: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    if (filters.status && filters.status !== "all") {
      where.status = filters.status;
    }

    if (filters.type && filters.type !== "all") {
      where.type = filters.type;
    }

    if (filters.risk && filters.risk !== "all") {
      where.downtimeRisk = filters.risk;
    }

    return prisma.vehicle.findMany({
      where,
      include: {
        repeatedIssues: true,
      },
      orderBy: { vehicleCode: "asc" },
    });
  };

  const findByIdWithHistory = (id) =>
    prisma.vehicle.findUnique({
      where: { id },
      include: {
        maintenanceReports: {
          orderBy: { date: "desc" },
        },
      },
    });

  return {
    findMany,
    findByIdWithHistory,
  };
}
