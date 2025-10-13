import { Router } from "express";
import * as controller from "./coupn.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as schema from "../../validation/cart.validator.js";
const router = Router();

router.post(
  "/",
  authMiddleware([Roles.ADMIN]),
  validate(schema.createCoupon),
  asyncHandler(controller.createCoupon)
);

router.get(
  "/",
  authMiddleware([Roles.ADMIN]),
  asyncHandler(controller.getAllCoupons)
);

router.patch(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  validate(schema.idParams),
  validate(schema.updateCoupon),
  asyncHandler(controller.updateCoupons)
);

router.delete(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  asyncHandler(controller.deleteCoupon)
);
export default router;
