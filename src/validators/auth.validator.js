import { HttpError } from "../lib/errors.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validRoles = [
  "technician_operator",
  "supervisor_maintenance",
  "administrator",
];

export function parseRegisterPayload(input) {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input;
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const role = typeof body.role === "string" ? body.role.trim().toLowerCase() : "";
  const fullName =
    typeof body.fullName === "string" && body.fullName.trim()
      ? body.fullName.trim()
      : "";

  if (!email || !fullName || !password || !role) {
    throw new HttpError(
      400,
      "email, fullName, password, and role are required",
    );
  }

  if (!emailPattern.test(email)) {
    throw new HttpError(400, "email format is invalid");
  }

  if (!validRoles.includes(role)) {
    throw new HttpError(
      400,
      "role must be one of: technician_operator, supervisor_maintenance, administrator",
    );
  }

  if (password.length < 8) {
    throw new HttpError(400, "password must be at least 8 characters");
  }

  return {
    email,
    fullName,
    password,
    role,
  };
}

export function parseLoginPayload(input) {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input;
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    throw new HttpError(400, "email and password are required");
  }

  if (!emailPattern.test(email)) {
    throw new HttpError(400, "email format is invalid");
  }

  return {
    email,
    password,
  };
}

