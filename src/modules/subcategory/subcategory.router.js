import { Router } from "express";
import * as controller from "./subcategory.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authMiddleware from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import upload from "../../middlewares/multer.js";
const router = Router();


router.post("/", asyncHandler(controller.createSubCategory));
router.get("/", asyncHandler(controller.getAllSubCategories));
router.get("/:id", asyncHandler(controller.getSubCategoryById));
router.get("/categories/:id", asyncHandler(controller.getSubCategoryByCategoryId));
router.put("/:id", asyncHandler(controller.updateSubCategoryById));
router.delete("/:id", asyncHandler(controller.deleteSubCategory));

export default router;
