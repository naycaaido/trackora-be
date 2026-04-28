import { HttpError } from "../lib/errors.js";

export function errorHandler(error, _req, res, _next) {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}
