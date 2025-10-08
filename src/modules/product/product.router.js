import { Router } from "express";
import upload from "../../middlewares/multer.middleware.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as productController from "./product.controller.js";
import authMiddlewareJWT from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/roles.js";
import * as schema from "../../validation/product.validator.js";
import { validate } from "../../middlewares/validation.js";
const router = Router();

router.post(
  "/",
  authMiddlewareJWT([Roles.ADMIN]),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "subImages", maxCount: 5 },
  ]),
  validate(schema.create),
  asyncHandler(productController.createProduct)
);

router.get("/", asyncHandler(productController.getAllProducts));

router.get("/:id", asyncHandler(productController.getProductById));
router.put("/:id", asyncHandler(productController.updateProduct));

router.delete(
  "/:id",
  authMiddlewareJWT([Roles.ADMIN]),
  asyncHandler(productController.deleteProduct)
);

export default router;
