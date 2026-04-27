import type { SeverityLevel } from "../types/api.js";
import { HttpError } from "../lib/errors.js";

export type CreateMaintenanceReportPayload = {
  vehicleId: string;
  component: string;
  issue: string;
  severity: SeverityLevel;
  notes?: string;
};

const validSeverities: SeverityLevel[] = ["low", "medium", "high", "critical"];

export function parseCreateMaintenanceReportPayload(input: unknown): CreateMaintenanceReportPayload {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input as Record<string, unknown>;
  const vehicleId = typeof body.vehicleId === "string" ? body.vehicleId.trim() : "";
  const component = typeof body.component === "string" ? body.component.trim() : "";
  const issue = typeof body.issue === "string" ? body.issue.trim() : "";
  const severity = body.severity;
  const notes = typeof body.notes === "string" ? body.notes.trim() : undefined;

  if (!vehicleId || !component || !issue) {
    throw new HttpError(400, "vehicleId, component, and issue are required");
  }

  if (typeof severity !== "string" || !validSeverities.includes(severity as SeverityLevel)) {
    throw new HttpError(400, "severity must be one of: low, medium, high, critical");
  }

  return {
    vehicleId,
    component,
    issue,
    severity: severity as SeverityLevel,
    ...(notes ? { notes } : {}),
  };
}
