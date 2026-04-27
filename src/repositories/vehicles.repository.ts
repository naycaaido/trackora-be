import type { Prisma, PrismaClient } from "@prisma/client";

export type VehicleFilters = {
  search?: string;
  status?: "healthy" | "warning" | "critical" | "all";
  type?: string;
  risk?: "low" | "medium" | "high" | "all";
};

export function createVehiclesRepository(prisma: PrismaClient) {
  const findMany = (filters: VehicleFilters) => {
    const where: Prisma.VehicleWhereInput = {};

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

  const findByIdWithHistory = (id: string) =>
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

export type VehiclesRepository = ReturnType<typeof createVehiclesRepository>;
