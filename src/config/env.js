import dotenv from "dotenv";

dotenv.config();

function getEnv(name, fallback) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    // throw new Error(`Missing environment variable: ${name}`);
    console.log("Missing environment variable: ${name}");
  }
  return value;
}

function getBooleanEnv(name, fallback = "false") {
  const value = getEnv(name, fallback).trim().toLowerCase();
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  throw new Error(`Invalid boolean environment variable for ${name}`);
}

function getOptionalEnv(name) {
  const value = process.env[name];
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed || undefined;
}

function getSameSiteEnv(name, fallback = "lax") {
  const value = getEnv(name, fallback).trim().toLowerCase();
  if (value === "strict" || value === "lax" || value === "none") {
    return value;
  }
  throw new Error(`Invalid ${name}. Supported values are: strict, lax, none`);
}

const allowedOrigins = getEnv("CORS_ORIGIN", "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const env = {
  host: getEnv("HOST", "localhost"),
  port: Number(getEnv("PORT", "8000")),
  databaseUrl: getEnv(
    "DATABASE_URL",
    "postgresql://postgres.vouruazkcvnsdivfkatg:213dawdwa312edwa@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true",
  ),
  allowedOrigins,
  authAccessTokenSecret: getEnv("AUTH_ACCESS_TOKEN_SECRET"),
  authRefreshTokenSecret: getEnv("AUTH_REFRESH_TOKEN_SECRET"),
  authAccessTokenExpiresIn: getEnv("AUTH_ACCESS_TOKEN_EXPIRES_IN", "15m"),
  authRefreshTokenExpiresIn: getEnv("AUTH_REFRESH_TOKEN_EXPIRES_IN", "7d"),
  authRefreshCookieName: getEnv("AUTH_REFRESH_COOKIE_NAME", "refreshToken"),
  authCookieSecure: getBooleanEnv("AUTH_COOKIE_SECURE", "false"),
  authCookieSameSite: getSameSiteEnv("AUTH_COOKIE_SAME_SITE", "lax"),
  authCookieDomain: getOptionalEnv("AUTH_COOKIE_DOMAIN"),
};
