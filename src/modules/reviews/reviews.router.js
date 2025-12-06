import { Router } from "express";
import * as controller from "./reviews.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as schema from "../../validation/cart.validator.js";
const router = Router();

router.post(
  "/",
  authMiddleware([Roles.USER]),
  //   validate(schema.createCoupon),
  asyncHandler(controller.createReview)
);

router.get(
  "/:productId",
  authMiddleware([Roles.USER, Roles.ADMIN]),
  asyncHandler(controller.getProductReviews)
);

router.delete(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  asyncHandler(controller.deleteReview)
);

router.delete(
  "/by-user/:id",
  authMiddleware([Roles.USER]),
  asyncHandler(controller.deleteReviewByUser)
);

export default router;
