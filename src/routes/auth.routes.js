import { Router } from "express";
import { validateRequest } from "../middlewares/validate-request.js";
import { parseLoginPayload, parseRegisterPayload } from "../validators/auth.validator.js";

export function authRoutes(controller) {
  const router = Router();

  router.post("/register", validateRequest(parseRegisterPayload), controller.register);
  router.post("/login", validateRequest(parseLoginPayload), controller.login);
  router.post("/refresh", controller.refresh);
  router.post("/logout", controller.logout);

  return router;
}

