import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../lib/errors.js";

export function validateRequest<T>(
  parser: (input: unknown) => T,
) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    void _res;
    try {
      req.body = parser(req.body);
      next();
    } catch (error) {
      if (error instanceof HttpError) {
        next(error);
        return;
      }
      next(new HttpError(400, "Invalid request body"));
    }
  };
}
