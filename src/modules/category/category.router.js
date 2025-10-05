import { Router } from "express";
import * as controller from "./category.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import upload from "../../middlewares/multer.middleware.js";
import { validate } from "../../middlewares/validation.js";
import * as schema from "../../validation/category.validator.js";

const router = Router();

router.post(
  "/",
  authMiddleware([Roles.ADMIN]),
  upload.single("image"),
  validate(schema.create),
  asyncHandler(controller.createCategory)
);

router.get("/", asyncHandler(controller.getAllCategories));

router.get(
  "/:id",
  validate(schema.categoryIdParams ),
  asyncHandler(controller.getCategoryById)
);


router.put(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  upload.single("image"),
  validate(schema.update),
  asyncHandler(controller.updateCategory)
);

router.delete(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  validate(schema.categoryIdParams),
  asyncHandler(controller.deleteCategory)
);

export default router;
