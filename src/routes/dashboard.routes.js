import { Router } from "express";

export function dashboardRoutes(controller) {
  const router = Router();

  router.get("/summary", controller.getSummary);
  router.get("/charts", controller.getCharts);

  return router;
}
