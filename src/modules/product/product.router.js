import { Router } from "express";
import upload from "../../middlewares/multer.middleware.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as productController from "./product.controller.js";
const router = Router();

router.post(
  "/",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "subImages", maxCount: 5 },
  ]),
  asyncHandler(productController.createProduct)
);

export default router;
