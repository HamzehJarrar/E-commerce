import express from "express";
import * as favoritController from "./favorit.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(favoritController.getAllFavoritsController));
router.post("/", asyncHandler(favoritController.addFavoritController));
router.delete("/:productid", asyncHandler(favoritController.removeFavorit));
router.delete("/", asyncHandler(favoritController.clearFavorits));

export default router;
