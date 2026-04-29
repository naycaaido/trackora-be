import { createHash } from "node:crypto";
import jwt from "jsonwebtoken";

const expiresPattern = /^(\d+)([smhd])$/i;

const unitToMs = {
  s: 1000,
  m: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
};

export function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export function parseExpiresInToMs(expiresIn) {
  if (typeof expiresIn === "number" && Number.isFinite(expiresIn) && expiresIn > 0) {
    return expiresIn * 1000;
  }

  if (typeof expiresIn !== "string") {
    throw new Error("Token expiry must be a string like '15m' or a number in seconds");
  }

  const value = expiresIn.trim();
  const match = value.match(expiresPattern);
  if (!match) {
    throw new Error("Unsupported token expiry format. Use values like '15m', '1h', or '7d'");
  }

  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  return amount * unitToMs[unit];
}

export function signAccessToken(payload, secret, expiresIn) {
  return jwt.sign(payload, secret, { expiresIn });
}

export function signRefreshToken(payload, secret, expiresIn) {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyAccessToken(token, secret) {
  return jwt.verify(token, secret);
}

export function verifyRefreshToken(token, secret) {
  return jwt.verify(token, secret);
}

