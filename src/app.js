import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import { createVehiclesRepository } from "./repositories/vehicles.repository.js";
import { createAlertsRepository } from "./repositories/alerts.repository.js";
import { createDashboardRepository } from "./repositories/dashboard.repository.js";
import { createMaintenanceRepository } from "./repositories/maintenance.repository.js";
import { createAuthRepository } from "./repositories/auth.repository.js";
import { createVehiclesService } from "./services/vehicles.service.js";
import { createAlertsService } from "./services/alerts.service.js";
import { createDashboardService } from "./services/dashboard.service.js";
import { createMaintenanceService } from "./services/maintenance.service.js";
import { createAuthService } from "./services/auth.service.js";
import { createVehiclesController } from "./controllers/vehicles.controller.js";
import { createAlertsController } from "./controllers/alerts.controller.js";
import { createDashboardController } from "./controllers/dashboard.controller.js";
import { createMaintenanceController } from "./controllers/maintenance.controller.js";
import { createAuthController } from "./controllers/auth.controller.js";
import { createApiRouter } from "./routes/index.js";
import { parseExpiresInToMs } from "./lib/auth-token.js";
import { createAuthenticateMiddleware } from "./middlewares/authenticate.js";
import { notFoundHandler } from "./middlewares/not-found.js";
import { errorHandler } from "./middlewares/error-handler.js";

function buildControllers() {
  const vehiclesRepository = createVehiclesRepository(prisma);
  const alertsRepository = createAlertsRepository(prisma);
  const dashboardRepository = createDashboardRepository(prisma);
  const maintenanceRepository = createMaintenanceRepository(prisma);
  const authRepository = createAuthRepository(prisma);

  const vehiclesService = createVehiclesService(vehiclesRepository);
  const alertsService = createAlertsService(alertsRepository);
  const dashboardService = createDashboardService(dashboardRepository);
  const maintenanceService = createMaintenanceService(maintenanceRepository);
  const authService = createAuthService(authRepository, {
    accessTokenSecret: env.authAccessTokenSecret,
    refreshTokenSecret: env.authRefreshTokenSecret,
    accessTokenExpiresIn: env.authAccessTokenExpiresIn,
    refreshTokenExpiresIn: env.authRefreshTokenExpiresIn,
  });

  const refreshCookieOptions = {
    httpOnly: true,
    secure: env.authCookieSecure,
    sameSite: env.authCookieSameSite,
    path: "/api/auth",
    maxAge: parseExpiresInToMs(env.authRefreshTokenExpiresIn),
    ...(env.authCookieDomain ? { domain: env.authCookieDomain } : {}),
  };

  return {
    vehiclesController: createVehiclesController(vehiclesService),
    alertsController: createAlertsController(alertsService),
    dashboardController: createDashboardController(dashboardService),
    maintenanceController: createMaintenanceController(maintenanceService),
    authController: createAuthController(authService, {
      name: env.authRefreshCookieName,
      options: refreshCookieOptions,
    }),
    authenticateRequest: createAuthenticateMiddleware(authService),
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
  app.use(cookieParser());

  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "success",
      message: "Service is healthy",
      data: null,
    });
  });

  const controllers = buildControllers();
  app.use(
    "/api",
    createApiRouter(controllers, controllers.authenticateRequest),
  );

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
