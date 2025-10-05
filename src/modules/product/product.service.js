import * as productData from "./product.data.js";
import validateAttributesByCategory from "../../utils/validateAttributes.js";
import { AppError } from "../../utils/AppError.js";
import { getSubCategoryForProduct } from "../subcategory/subcategory.data.js";

export const createProduct = async (data) => {
  const isValid = await validateAttributesByCategory(
    data.category,
    data.attributes
  );

  if (!isValid) {
    throw new AppError("Invalid product attributes", 400);
  }
  const subCategory = await getSubCategoryForProduct(
    data.category,
    data.subCategoryId
  );

  if (!subCategory) {
    throw new AppError("Subcategory not found", 404);
  }

  if (data.discount || data.discount > 0) {
    data.finalPrice = data.price * (1 - data.discount / 100);
  }

  const product = await productData.createProduct(data);
  return product;
};
