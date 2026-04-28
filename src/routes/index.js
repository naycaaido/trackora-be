import { Router } from "express";
import { authRoutes } from "./auth.routes.js";
import { vehiclesRoutes } from "./vehicles.routes.js";
import { alertsRoutes } from "./alerts.routes.js";
import { maintenanceRoutes } from "./maintenance.routes.js";
import { dashboardRoutes } from "./dashboard.routes.js";

export function createApiRouter(controllers, authenticateRequest) {
  const router = Router();

  router.use("/auth", authRoutes(controllers.authController));
  router.use(authenticateRequest);

  router.use("/vehicles", vehiclesRoutes(controllers.vehiclesController));
  router.use("/alerts", alertsRoutes(controllers.alertsController));
  router.use(
    "/maintenance",
    maintenanceRoutes(controllers.maintenanceController),
  );
  router.use("/dashboard", dashboardRoutes(controllers.dashboardController));

  return router;
}
