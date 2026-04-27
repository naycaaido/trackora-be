import { Router } from "express";
import type { AlertsController } from "../controllers/alerts.controller.js";

export function alertsRoutes(controller: AlertsController): Router {
  const router = Router();

  router.get("/", controller.getAlerts);

  return router;
}
