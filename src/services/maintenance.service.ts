import type { SeverityLevel } from "@prisma/client";
import { HttpError } from "../lib/errors.js";
import { toDateOnlyString } from "../lib/date.js";
import type { CreateMaintenanceReportPayload } from "../validators/maintenance.validator.js";
import type { MaintenanceRepository } from "../repositories/maintenance.repository.js";

export function createMaintenanceService(maintenanceRepository: MaintenanceRepository) {
  const createMaintenanceReport = async (payload: CreateMaintenanceReportPayload) => {
    const reportInput = {
      vehicleId: payload.vehicleId,
      component: payload.component,
      issue: payload.issue,
      severity: payload.severity as SeverityLevel,
      ...(payload.notes ? { note: payload.notes } : {}),
    };

    const report = await maintenanceRepository.createWithSideEffects(reportInput);

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

export type MaintenanceService = ReturnType<typeof createMaintenanceService>;
