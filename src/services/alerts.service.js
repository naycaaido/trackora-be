import { toDateOnlyString } from "../lib/date.js";

export function createAlertsService(alertsRepository) {
  const getAlerts = async () => {
    const alerts = await alertsRepository.findActiveAlerts();

    return alerts.map((alert) => ({
      id: alert.id,
      vehicleId: alert.vehicleId,
      vehicleCode: alert.vehicle.vehicleCode,
      vehicleName: alert.vehicle.name,
      type: alert.type,
      riskLevel: alert.riskLevel,
      message: alert.message,
      predictedNextMaintenance: toDateOnlyString(
        alert.predictedNextMaintenance,
      ),
      recommendation: alert.recommendation,
      daysUntilMaintenance: alert.daysUntilMaintenance,
    }));
  };

  return {
    getAlerts,
  };
}
