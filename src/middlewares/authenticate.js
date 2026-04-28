import { HttpError } from "../lib/errors.js";

export function createAuthenticateMiddleware(authService) {
  return async (req, _res, next) => {
    try {
      const authorization = req.headers.authorization;
      if (!authorization || typeof authorization !== "string") {
        throw new HttpError(401, "Authorization header is required");
      }

      const [scheme, token] = authorization.split(" ");
      if (scheme !== "Bearer" || !token) {
        throw new HttpError(401, "Authorization header must use Bearer token");
      }

      const user = await authService.authenticateAccessToken(token);
      req.authUser = user;
      next();
    } catch (error) {
      next(error);
    }
  };
}

