import { HttpError } from "../lib/errors.js";

export function validateRequest(parser, source = "body") {
  return (req, _res, next) => {
    try {
      const rawInput = req[source];
      const parsed = parser(rawInput);

      if (source === "body") {
        req.validatedBody = parsed;
      } else if (source === "query") {
        req.validatedQuery = parsed;
      } else if (source === "params") {
        req.validatedParams = parsed;
      }

      next();
    } catch (error) {
      if (error instanceof HttpError) {
        return next(error);
      }
      return next(
        new HttpError(400, error.message || "Invalid request payload"),
      );
    }
  };
}
