import type { VehicleStatus } from "@prisma/client";
import type { DashboardRepository } from "../repositories/dashboard.repository.js";

const STATUS_ORDER: VehicleStatus[] = ["healthy", "warning", "critical"];

function monthLabel(date: Date): string {
  return date.toLocaleString("en-US", { month: "short" });
}

export function createDashboardService(dashboardRepository: DashboardRepository) {
  const getSummary = async () => {
    const [totalVehicles, groupedByStatus, dueSoon, highRisk] = await Promise.all([
      dashboardRepository.countTotalVehicles(),
      dashboardRepository.countVehiclesByStatus(),
      dashboardRepository.countDueSoonVehicles(),
      dashboardRepository.countHighRiskVehicles(),
    ]);

    const statusCountMap = new Map(groupedByStatus.map((item) => [item.status, item._count._all]));

    return {
      totalVehicles,
      healthy: statusCountMap.get("healthy") ?? 0,
      warning: statusCountMap.get("warning") ?? 0,
      critical: statusCountMap.get("critical") ?? 0,
      dueSoon,
      highRisk,
    };
  };

  const getCharts = async () => {
    const [trendRows, componentRows, statusRows] = await Promise.all([
      dashboardRepository.getMonthlyIssueTrend(6),
      dashboardRepository.getComponentDistribution(),
      dashboardRepository.countVehiclesByStatus(),
    ]);

    const monthMap = new Map<string, number>();
    for (const row of trendRows) {
      const label = monthLabel(row.date);
      monthMap.set(label, (monthMap.get(label) ?? 0) + 1);
    }

    const issueTrend = Array.from(monthMap.entries()).map(([month, value]) => ({
      month,
      issues: value,
      maintenance: value,
    }));

    const componentDistribution = componentRows.map((row) => ({
      component: row.component,
      count: row._count._all,
    }));

    const statusMap = new Map(statusRows.map((row) => [row.status, row._count._all]));
    const healthOverview = STATUS_ORDER.map((status) => {
      if (status === "healthy") {
        return { name: "Sehat (80-100)", value: statusMap.get(status) ?? 0, color: "#10b981" };
      }
      if (status === "warning") {
        return { name: "Warning (60-79)", value: statusMap.get(status) ?? 0, color: "#f59e0b" };
      }
      return { name: "Critical (<60)", value: statusMap.get(status) ?? 0, color: "#ef4444" };
    });

    return { issueTrend, componentDistribution, healthOverview };
  };

  return {
    getSummary,
    getCharts,
  };
}

export type DashboardService = ReturnType<typeof createDashboardService>;
