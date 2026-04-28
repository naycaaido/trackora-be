import { Router } from "express";
import { validateRequest } from "../middlewares/validate-request.js";
import { parseCreateMaintenanceReportPayload } from "../validators/maintenance.validator.js";

export function maintenanceRoutes(controller) {
  const router = Router();

  router.post(
    "/",
    validateRequest(parseCreateMaintenanceReportPayload),
    controller.createMaintenanceReport,
  );

  return router;
}
