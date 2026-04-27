import type { AlertsRepository } from "../repositories/alerts.repository.js";
import { toDateOnlyString } from "../lib/date.js";
import type { AlertResponse } from "../types/api.js";

export function createAlertsService(alertsRepository: AlertsRepository) {
  const getAlerts = async (): Promise<AlertResponse[]> => {
    const alerts = await alertsRepository.findActiveAlerts();

    return alerts.map((alert) => ({
      id: alert.id,
      vehicleId: alert.vehicleId,
      vehicleCode: alert.vehicle.vehicleCode,
      vehicleName: alert.vehicle.name,
      type: alert.type,
      riskLevel: alert.riskLevel,
      message: alert.message,
      predictedNextMaintenance: toDateOnlyString(alert.predictedNextMaintenance),
      recommendation: alert.recommendation,
      daysUntilMaintenance: alert.daysUntilMaintenance,
    }));
  };

  return {
    getAlerts,
  };
}

export type AlertsService = ReturnType<typeof createAlertsService>;
