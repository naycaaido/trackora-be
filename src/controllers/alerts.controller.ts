import type { Request, Response } from "express";
import type { AlertsService } from "../services/alerts.service.js";

export function createAlertsController(alertsService: AlertsService) {
  const getAlerts = async (req: Request, res: Response): Promise<void> => {
    void req;
    const alerts = await alertsService.getAlerts();
    res.json(alerts);
  };

  return {
    getAlerts,
  };
}

export type AlertsController = ReturnType<typeof createAlertsController>;
