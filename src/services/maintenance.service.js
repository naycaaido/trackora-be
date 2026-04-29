import { HttpError } from "../lib/errors.js";
import { toDateOnlyString } from "../lib/date.js";

export function createMaintenanceService(maintenanceRepository) {
  const createMaintenanceReport = async (payload) => {
    const reportInput = {
      vehicleId: payload.vehicleId,
      component: payload.component,
      issue: payload.issue,
      severity: payload.severity,
      ...(payload.notes ? { note: payload.notes } : {}),
    };

    const report =
      await maintenanceRepository.createWithSideEffects(reportInput);

    if (!report) {
      throw new HttpError(404, "Vehicle not found");
    }

    return {
      id: report.id,
      vehicleId: report.vehicleId,
      component: report.component,
      issue: report.issue,
      severity: report.severity,
      date: toDateOnlyString(report.date),
      technician: report.technician,
      note: report.note,
    };
  };

  return {
    createMaintenanceReport,
  };
}
