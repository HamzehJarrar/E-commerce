import * as service from "./subcategory.service.js";

export const createSubCategory = async (req, res) => {
  const data = req.body;
  const subcategory = await service.createSubCategory(data);
  res.status(201).json({
    message: "Subcategory created successfully",
    data: subcategory,
  });
};

export const getAllSubCategories = async (req, res) => {
  const subcategories = await service.getAllSubCategories();
  res.status(200).json({
    message: "Subcategories fetched successfully",
    data: subcategories,
  });
};

export const getSubCategoryById = async (req, res) => {
  const subcategory = await service.getSubCategoryById(req.params.id);
  res.status(200).json({
    message: "Subcategory fetched successfully",
    data: subcategory,
  });
};

export const getSubCategoryByCategoryId = async (req, res) => {
  const subcategory = await service.getSubCategoryByCategoryId(req.params.id);
  res.status(200).json({
    message: "Subcategory fetched successfully",
    data: subcategory,
  });
};
export const updateSubCategoryById = async (req, res) => {
  const updatedSubcategory = await service.updateSubCategoryById(
    req.params.id,
    req.body
  );
  res.status(200).json({
    message: "Subcategory updated successfully",
    data: updatedSubcategory,
  });
};

export const deleteSubCategory = async (req, res) => {
  const deleted = await service.deleteSubCategory(req.params.id);
  res.status(200).json({
    message: "Subcategory deleted successfully",
  });
};
