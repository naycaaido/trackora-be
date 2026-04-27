import type { Request, Response } from "express";
import type { MaintenanceService } from "../services/maintenance.service.js";
import type { CreateMaintenanceReportPayload } from "../validators/maintenance.validator.js";

export function createMaintenanceController(maintenanceService: MaintenanceService) {
  const createMaintenanceReport = async (req: Request, res: Response): Promise<void> => {
    const payload = req.body as CreateMaintenanceReportPayload;
    const report = await maintenanceService.createMaintenanceReport(payload);
    res.status(201).json(report);
  };

  return {
    createMaintenanceReport,
  };
}

export type MaintenanceController = ReturnType<typeof createMaintenanceController>;
