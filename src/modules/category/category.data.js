import CategoryModel from "../../database/models/category.model.js";
export const existsCategoryByName = async (name) => {
  const category = await CategoryModel.exists({ name });
  return category;
};
