import * as data from "./category.data.js";
import createImageObj from "../../utils/images/createImageObj.js";
import { AppError } from "../../utils/AppError.js";
import deleteImageFile from "../../utils/images/deleteImageFile.js";

export const createCategory = async (body) => {
  const exist = await data.existsCategoryByName(body.name);
  if (exist) {
    throw new AppError("Category already exists", 400);
  }
  const image = createImageObj(body.image);
  if (image) {
    body.image = image;
  }
  const category = await data.createCategory(body);
  return category;
};

export const getAllCategories = async () => {
  const categories = await data.getAllCategories();
  if (!categories || categories.length === 0) {
    throw new AppError("No categories found", 404);
  }
  return categories;
};

export const getCategoryById = async (id) => {
  const category = await data.getCategoryById(id);
  
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  return category;
};

export const updateCategory = async (id, body, file) => {
  const categorie = await data.getCategoryById(id);
  if (!categorie) throw new AppError("Category not found", 404);

  const image = createImageObj(file);
  if (image) {
    body.image = image;
    if (categorie.image?.name) {
      await deleteImageFile(categorie.image);
    }
  }

  const updated = await data.updateCategory(id, body);
  if (!updated) throw new AppError("Something Went Wrong", 400);

  return updated;
};

export const deleteCategory = async (id) => {
  const categorie = await data.getCategoryById(id);
  if (!categorie) throw new AppError("Category not found", 404);
  if(categorie.image?.name) {
    await deleteImageFile(categorie.image);
  }
  const deleted = await data.deleteCategory(id);
  if (!deleted) throw new AppError("Something Went Wrong", 400);
  return deleted;
};
