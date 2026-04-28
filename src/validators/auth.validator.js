import { HttpError } from "../lib/errors.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernamePattern = /^[a-zA-Z0-9_.-]{3,30}$/;

export function parseRegisterPayload(input) {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input;
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const username =
    typeof body.username === "string" ? body.username.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const fullName =
    typeof body.fullName === "string" && body.fullName.trim()
      ? body.fullName.trim()
      : null;

  if (!email || !username || !password) {
    throw new HttpError(400, "email, username, and password are required");
  }

  if (!emailPattern.test(email)) {
    throw new HttpError(400, "email format is invalid");
  }

  if (!usernamePattern.test(username)) {
    throw new HttpError(
      400,
      "username must be 3-30 chars and use only letters, numbers, dots, underscores, or dashes",
    );
  }

  if (password.length < 8) {
    throw new HttpError(400, "password must be at least 8 characters");
  }

  return {
    email,
    username,
    password,
    fullName,
  };
}

export function parseLoginPayload(input) {
  if (!input || typeof input !== "object") {
    throw new HttpError(400, "Request body is required");
  }

  const body = input;
  const identifier =
    typeof body.identifier === "string" ? body.identifier.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!identifier || !password) {
    throw new HttpError(400, "identifier and password are required");
  }

  return {
    identifier,
    password,
  };
}

