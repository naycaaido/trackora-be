import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import { createVehiclesRepository } from "./repositories/vehicles.repository.js";
import { createAlertsRepository } from "./repositories/alerts.repository.js";
import { createDashboardRepository } from "./repositories/dashboard.repository.js";
import { createMaintenanceRepository } from "./repositories/maintenance.repository.js";
import { createVehiclesService } from "./services/vehicles.service.js";
import { createAlertsService } from "./services/alerts.service.js";
import { createDashboardService } from "./services/dashboard.service.js";
import { createMaintenanceService } from "./services/maintenance.service.js";
import { createVehiclesController } from "./controllers/vehicles.controller.js";
import { createAlertsController } from "./controllers/alerts.controller.js";
import { createDashboardController } from "./controllers/dashboard.controller.js";
import { createMaintenanceController } from "./controllers/maintenance.controller.js";
import { createApiRouter } from "./routes/index.js";
import { notFoundHandler } from "./middlewares/not-found.js";
import { errorHandler } from "./middlewares/error-handler.js";

function buildControllers() {
  const vehiclesRepository = createVehiclesRepository(prisma);
  const alertsRepository = createAlertsRepository(prisma);
  const dashboardRepository = createDashboardRepository(prisma);
  const maintenanceRepository = createMaintenanceRepository(prisma);

  const vehiclesService = createVehiclesService(vehiclesRepository);
  const alertsService = createAlertsService(alertsRepository);
  const dashboardService = createDashboardService(dashboardRepository);
  const maintenanceService = createMaintenanceService(maintenanceRepository);

  return {
    vehiclesController: createVehiclesController(vehiclesService),
    alertsController: createAlertsController(alertsService),
    dashboardController: createDashboardController(dashboardService),
    maintenanceController: createMaintenanceController(maintenanceService),
  };
}

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.allowedOrigins,
      credentials: true,
    }),
  );
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "success",
      message: "Service is healthy",
      data: null,
    });
  });

  const controllers = buildControllers();
  app.use("/api", createApiRouter(controllers));

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
