import { Router } from "express";

export function alertsRoutes(controller) {
  const router = Router();

  router.get("/", controller.getAlerts);

  return router;
}
