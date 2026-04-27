import type { Request, Response } from "express";
import { HttpError } from "../lib/errors.js";
import type { VehicleFilters } from "../repositories/vehicles.repository.js";
import type { VehiclesService } from "../services/vehicles.service.js";

export function createVehiclesController(vehiclesService: VehiclesService) {
  const getVehicles = async (req: Request, res: Response): Promise<void> => {
    const filters: VehicleFilters = {};
    const validStatus = ["healthy", "warning", "critical", "all"] as const;
    const validRisk = ["low", "medium", "high", "all"] as const;

    if (typeof req.query.search === "string") {
      filters.search = req.query.search;
    }
    if (typeof req.query.status === "string" && validStatus.includes(req.query.status as (typeof validStatus)[number])) {
      filters.status = req.query.status as (typeof validStatus)[number];
    }
    if (typeof req.query.type === "string") {
      filters.type = req.query.type;
    }
    if (typeof req.query.risk === "string" && validRisk.includes(req.query.risk as (typeof validRisk)[number])) {
      filters.risk = req.query.risk as (typeof validRisk)[number];
    }

    const vehicles = await vehiclesService.getVehicles(filters);
    res.json(vehicles);
  };

  const getVehicleById = async (req: Request, res: Response): Promise<void> => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!id) {
      throw new HttpError(400, "Vehicle id is required");
    }
    const vehicle = await vehiclesService.getVehicleById(id);
    res.json(vehicle);
  };

  return {
    getVehicles,
    getVehicleById,
  };
}

export type VehiclesController = ReturnType<typeof createVehiclesController>;
