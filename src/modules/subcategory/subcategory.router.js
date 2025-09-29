import { Router } from "express";
import * as controller from "./subcategory.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as schema from "../../validation/subCategory.validator.js";
import { validate } from "../../middlewares/validation.js";
const router = Router();

router.post(
  "/",
  validate(schema.create),
  asyncHandler(controller.createSubCategory)
);
router.get("/", asyncHandler(controller.getAllSubCategories));
router.get(
  "/:id",
  validate(schema.subCategoryIdParams),
  asyncHandler(controller.getSubCategoryById)
);
router.get(
  "/categories/:id",
  asyncHandler(controller.getSubCategoryByCategoryId)
);
router.put(
  "/:id",
  validate(schema.update),
  asyncHandler(controller.updateSubCategoryById)
);
router.delete(
  "/:id",
  validate(schema.subCategoryIdParams),
  asyncHandler(controller.deleteSubCategory)
);

export default router;
