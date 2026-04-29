import { Router } from "express";

export function vehiclesRoutes(controller) {
  const router = Router();

  router.get("/", controller.getVehicles);
  router.get("/:id", controller.getVehicleById);

  return router;
}
