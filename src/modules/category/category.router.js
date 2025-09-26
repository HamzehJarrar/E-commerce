import { Router } from "express";
import * as controller from "./category.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import Roles from "../../../database/roles.js";

const router = Router();

router.post(
  "/",
  authMiddleware([Roles.ADMIN]),
  upload.single("image"),
  asyncHandler(controller.createCategory)
);

router.get("/", asyncHandler(controller.getCategories));
router.get("/:id", asyncHandler(controller.getCategoryById));
router.put(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  asyncHandler(controller.updateCategory)
);
router.delete(
  "/:id",
  authMiddleware([Roles.ADMIN]),
  asyncHandler(controller.deleteCategory)
);
export default router;
