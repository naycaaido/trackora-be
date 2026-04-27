import { Router } from "express";
import type { DashboardController } from "../controllers/dashboard.controller.js";

export function dashboardRoutes(controller: DashboardController): Router {
  const router = Router();

  router.get("/summary", controller.getSummary);
  router.get("/charts", controller.getCharts);

  return router;
}
