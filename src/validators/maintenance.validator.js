import { HttpError } from "../lib/errors.js";

const validSeverities = ["low", "medium", "high", "critical"];

export function parseCreateMaintenanceReportPayload(input) {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input;
  const vehicleId =
    typeof body.vehicleId === "string" ? body.vehicleId.trim() : "";
  const component =
    typeof body.component === "string" ? body.component.trim() : "";
  const issue = typeof body.issue === "string" ? body.issue.trim() : "";
  const severity = body.severity;
  const notes = typeof body.notes === "string" ? body.notes.trim() : undefined;

  if (!vehicleId || !component || !issue) {
    throw new HttpError(400, "vehicleId, component, and issue are required");
  }

  if (typeof severity !== "string" || !validSeverities.includes(severity)) {
    throw new HttpError(
      400,
      "severity must be one of: low, medium, high, critical",
    );
  }

  return {
    vehicleId,
    component,
    issue,
    severity,
    ...(notes ? { notes } : {}),
  };
}
