import { Router } from "express";
import * as controller from "./order.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as schema from "../../validation/order.validator.js";
const router = Router();

router.post(
  "/",
  authMiddleware([Roles.USER]),
  validate(schema.createOrder),
  asyncHandler(controller.createOrder)
);

router.get(
  "/admin",
  authMiddleware([Roles.USER]),
  asyncHandler(controller.getAllOrders)
);

router.get(
  "/",
  authMiddleware([Roles.USER]),
  asyncHandler(controller.getUserOrders)
);

router.get(
  "/:id",
  authMiddleware([Roles.USER]),
  validate(schema.getById),
  asyncHandler(controller.getUserOrder)
);

export default router;
