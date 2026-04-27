import { Router } from "express";
import type { MaintenanceController } from "../controllers/maintenance.controller.js";
import { validateRequest } from "../middlewares/validate-request.js";
import { parseCreateMaintenanceReportPayload } from "../validators/maintenance.validator.js";

export function maintenanceRoutes(controller: MaintenanceController): Router {
  const router = Router();

  router.post("/", validateRequest(parseCreateMaintenanceReportPayload), controller.createMaintenanceReport);

  return router;
}
