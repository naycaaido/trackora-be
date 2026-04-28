import { Router } from "express";
import { vehiclesRoutes } from "./vehicles.routes.js";
import { alertsRoutes } from "./alerts.routes.js";
import { maintenanceRoutes } from "./maintenance.routes.js";
import { dashboardRoutes } from "./dashboard.routes.js";

export function createApiRouter(controllers) {
  const router = Router();

  router.use("/vehicles", vehiclesRoutes(controllers.vehiclesController));
  router.use("/alerts", alertsRoutes(controllers.alertsController));
  router.use(
    "/maintenance",
    maintenanceRoutes(controllers.maintenanceController),
  );
  router.use("/dashboard", dashboardRoutes(controllers.dashboardController));

  return router;
}
