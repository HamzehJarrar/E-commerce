import { SubCategoryModel } from "../../../database/models/subcategory.model.js";

export const createSubCategory = async (data) => {
  return await SubCategoryModel.create(data);
};

export const getSubCategoryByCategoryIdAndName = async (categoryId, name) => {
  return await SubCategoryModel.exists({ categoryId, name });
};

export const getAllSubCategories = async () => {
  return await SubCategoryModel.find();
};

export const getSubCategoryById = async (id) => {
  return await SubCategoryModel.findById(id);
};

export const getSubCategoriesByCategoryId = async (id) => {
  return await SubCategoryModel.find({ categoryId: id });
};

export const getSubCategoryForProduct = async (categoryId, sub) => {
  return await SubCategoryModel.findOne({
    _id: sub,
    categoryId,
  });
};
export const updateSubCategoryById = async (id, body) => {
  return await SubCategoryModel.findByIdAndUpdate(id, body, { new: true });
};

export const deleteSubCategory = async (id) => {
  return await SubCategoryModel.findByIdAndDelete(id);
};
