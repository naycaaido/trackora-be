import express from "express";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { createAlertsController } from "./controllers/alerts.controller.js";
import { createDashboardController } from "./controllers/dashboard.controller.js";
import { createMaintenanceController } from "./controllers/maintenance.controller.js";
import { createVehiclesController } from "./controllers/vehicles.controller.js";
import { createAlertsRepository } from "./repositories/alerts.repository.js";
import { createDashboardRepository } from "./repositories/dashboard.repository.js";
import { createMaintenanceRepository } from "./repositories/maintenance.repository.js";
import { createVehiclesRepository } from "./repositories/vehicles.repository.js";
import { createAlertsService } from "./services/alerts.service.js";
import { createDashboardService } from "./services/dashboard.service.js";
import { createMaintenanceService } from "./services/maintenance.service.js";
import { createVehiclesService } from "./services/vehicles.service.js";
import { alertsRoutes } from "./routes/alerts.routes.js";
import { dashboardRoutes } from "./routes/dashboard.routes.js";
import { maintenanceRoutes } from "./routes/maintenance.routes.js";
import { vehiclesRoutes } from "./routes/vehicles.routes.js";

export function createApp() {
  const app = express();

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", env.corsOrigin);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }
    next();
  });

  app.use(express.json());

  const dashboardRepository = createDashboardRepository(prisma);
  const vehiclesRepository = createVehiclesRepository(prisma);
  const maintenanceRepository = createMaintenanceRepository(prisma);
  const alertsRepository = createAlertsRepository(prisma);

  const dashboardService = createDashboardService(dashboardRepository);
  const vehiclesService = createVehiclesService(vehiclesRepository);
  const maintenanceService = createMaintenanceService(maintenanceRepository);
  const alertsService = createAlertsService(alertsRepository);

  const dashboardController = createDashboardController(dashboardService);
  const vehiclesController = createVehiclesController(vehiclesService);
  const maintenanceController = createMaintenanceController(maintenanceService);
  const alertsController = createAlertsController(alertsService);

  app.get("/", (req, res) => {
    void req;
    res.json({ message: "Trackora backend is running" });
  });

  app.use("/api/dashboard", dashboardRoutes(dashboardController));
  app.use("/api/vehicles", vehiclesRoutes(vehiclesController));
  app.use("/api/maintenance-reports", maintenanceRoutes(maintenanceController));
  app.use("/api/alerts", alertsRoutes(alertsController));

  app.use(errorHandler);

  return app;
}
