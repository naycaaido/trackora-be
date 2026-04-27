import { Router } from "express";
import type { VehiclesController } from "../controllers/vehicles.controller.js";

export function vehiclesRoutes(controller: VehiclesController): Router {
  const router = Router();

  router.get("/", controller.getVehicles);
  router.get("/:id", controller.getVehicleById);

  return router;
}
