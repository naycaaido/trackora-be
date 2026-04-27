import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../lib/errors.js";

export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction): void {
  void req;
  void next;
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  const message = error instanceof Error ? error.message : "Internal server error";
  res.status(500).json({ message });
}
