import { HttpError } from "../lib/errors.js";
import { toDateOnlyString } from "../lib/date.js";

export function createVehiclesService(vehiclesRepository) {
  const getVehicles = async (filters) => {
    const vehicles = await vehiclesRepository.findMany(filters);

    return vehicles.map((vehicle) => ({
      id: vehicle.id,
      vehicleCode: vehicle.vehicleCode,
      name: vehicle.name,
      type: vehicle.type,
      location: vehicle.location,
      status: vehicle.status,
      healthScore: vehicle.healthScore,
      downtimeRisk: vehicle.downtimeRisk,
      lastMaintenanceDate: toDateOnlyString(vehicle.lastMaintenanceDate),
      nextMaintenanceDate: toDateOnlyString(vehicle.nextMaintenanceDate),
      mileage: vehicle.mileage,
      operatingHours: vehicle.operatingHours,
      issueCount: vehicle.issueCount,
      repeatedIssues: vehicle.repeatedIssues.map((item) => item.issue),
      recommendation: vehicle.recommendation,
    }));
  };

  const getVehicleById = async (id) => {
    const vehicle = await vehiclesRepository.findByIdWithHistory(id);
    if (!vehicle) {
      throw new HttpError(404, "Vehicle not found");
    }

    return {
      id: vehicle.id,
      vehicleCode: vehicle.vehicleCode,
      name: vehicle.name,
      maintenanceHistory: vehicle.maintenanceReports.map((report) => ({
        id: report.id,
        vehicleId: report.vehicleId,
        date: toDateOnlyString(report.date) ?? "",
        component: report.component,
        issue: report.issue,
        severity: report.severity,
        technician: report.technician,
        note: report.note,
        actionTaken: report.actionTaken,
      })),
    };
  };

  return {
    getVehicles,
    getVehicleById,
  };
}
