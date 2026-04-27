import type { Request, Response } from "express";
import type { DashboardService } from "../services/dashboard.service.js";

export function createDashboardController(dashboardService: DashboardService) {
  const getSummary = async (req: Request, res: Response): Promise<void> => {
    void req;
    const data = await dashboardService.getSummary();
    res.json(data);
  };

  const getCharts = async (req: Request, res: Response): Promise<void> => {
    void req;
    const data = await dashboardService.getCharts();
    res.json(data);
  };

  return {
    getSummary,
    getCharts,
  };
}

export type DashboardController = ReturnType<typeof createDashboardController>;
