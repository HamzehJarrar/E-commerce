import { Router } from "express";
import * as controller from "./auth.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { validate } from "../../middlewares/validation.js";
import * as schema from "../../validation/auth.validator.js";

const router = Router();

router.post(
  "/register",
  validate(schema.register),
  asyncHandler(controller.register)
);

router.post("/login", validate(schema.login), asyncHandler(controller.login));

router.post(
  "/confirm-email",
  validate(schema.confirmEmail),
  asyncHandler(controller.confirmEmail)
);

export default router;
