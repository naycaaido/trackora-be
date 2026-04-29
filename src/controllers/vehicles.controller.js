import { HttpError } from "../lib/errors.js";

export function createVehiclesController(vehiclesService) {
  const getVehicles = async (req, res) => {
    const filters = {};
    const validStatus = ["healthy", "warning", "critical", "all"];
    const validRisk = ["low", "medium", "high", "all"];

    if (typeof req.query.search === "string") {
      filters.search = req.query.search;
    }
    if (
      typeof req.query.status === "string" &&
      validStatus.includes(req.query.status)
    ) {
      filters.status = req.query.status;
    }
    if (typeof req.query.type === "string") {
      filters.type = req.query.type;
    }
    if (
      typeof req.query.risk === "string" &&
      validRisk.includes(req.query.risk)
    ) {
      filters.risk = req.query.risk;
    }

    const vehicles = await vehiclesService.getVehicles(filters);
    res.status(200).json({
      status: "success",
      message: "Vehicles fetched successfully",
      data: vehicles,
    });
  };

  const getVehicleById = async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!id) {
      throw new HttpError(400, "Vehicle id is required");
    }
    const vehicle = await vehiclesService.getVehicleById(id);
    res.status(200).json({
      status: "success",
      message: "Vehicle fetched successfully",
      data: vehicle,
    });
  };

  return {
    getVehicles,
    getVehicleById,
  };
}
