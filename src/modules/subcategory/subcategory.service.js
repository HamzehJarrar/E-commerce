import { AppError } from "../../utils/AppError.js";
import { existCategoryById } from "../category/category.data.js";
import * as data from "./subcategory.data.js";

export const createSubCategory = async (payload) => {
  const category = await existCategoryById(payload.categoryId);
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  const exist = await data.getSubCategoryByCategoryIdAndName(
    payload.categoryId,
    payload.name
  );
  if (exist) {
    throw new AppError("Subcategory already exists for this category", 400);
  }

  const subcategory = await data.createSubCategory(payload);
  return subcategory;
};

export const getAllSubCategories = async () => {
  const subcategories = await data.getAllSubCategories();
  if (!subcategories || subcategories.length === 0) {
    throw new AppError("No subcategories found", 404);
  }
  return subcategories;
};

export const getSubCategoryById = async (id) => {
  const subcategory = await data.getSubCategoryById(id);
  if (!subcategory) {
    throw new AppError("Subcategory not found", 404);
  }
  return subcategory;
};

export const getSubCategoryByCategoryId = async (id) => {
  const subcategory = await data.getSubCategoriesByCategoryId(id);
  if (!subcategory || subcategory.length === 0) {
    throw new AppError("Subcategory not found", 404);
  }
  return subcategory;
};
export const updateSubCategoryById = async (id, payload) => {
  const subCategory = await data.getSubCategoryById(id);
  if (!subCategory) throw new AppError("Subcategory not found", 404);

  const category = await existCategoryById(subCategory.categoryId);
  if (!category) throw new AppError("Category not found", 404);

  const updated = await data.updateSubCategoryById(id, payload);
  return updated;
};

export const deleteSubCategory = async (id) => {
  const deleted = await data.deleteSubCategory(id);
  if (!deleted) {
    throw new AppError("Subcategory not found", 404);
  }
  return;
};
