export type VehicleStatus = "healthy" | "warning" | "critical";
export type RiskLevel = "low" | "medium" | "high";
export type SeverityLevel = "low" | "medium" | "high" | "critical";
export type AlertType = "critical_risk" | "maintenance_due" | "repeated_issue";

export type VehicleResponse = {
  id: string;
  vehicleCode: string;
  name: string;
  type: string;
  location: string;
  status: VehicleStatus;
  healthScore: number;
  downtimeRisk: RiskLevel;
  lastMaintenanceDate: string | null;
  nextMaintenanceDate: string | null;
  mileage: number;
  operatingHours: number;
  issueCount: number;
  repeatedIssues: string[];
  recommendation: string | null;
};

export type MaintenanceHistoryItem = {
  id: string;
  vehicleId: string;
  date: string;
  component: string;
  issue: string;
  severity: SeverityLevel;
  technician: string;
  note: string | null;
  actionTaken: string | null;
};

export type VehicleDetailResponse = Pick<VehicleResponse, "id" | "vehicleCode" | "name"> & {
  maintenanceHistory: MaintenanceHistoryItem[];
};

export type AlertResponse = {
  id: string;
  vehicleId: string;
  vehicleCode: string;
  vehicleName: string;
  type: AlertType;
  riskLevel: RiskLevel;
  message: string;
  predictedNextMaintenance: string | null;
  recommendation: string | null;
  daysUntilMaintenance: number | null;
};
