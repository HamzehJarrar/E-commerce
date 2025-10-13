import * as productData from "./product.data.js";
import validateAttributesByCategory from "../../utils/validateAttributes.js";
import { AppError } from "../../utils/AppError.js";
import { getSubCategoryForProduct } from "../subcategory/subcategory.data.js";
import { getPaginationData } from "../../utils/pagination/pagination.js";
import { getCategoryById } from "../category/category.data.js";

export const createProduct = async (data) => {
  if (data.categoryId) {
    data.category = data.categoryId;
    delete data.categoryId;
  }

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

  if (data.discount && data.discount > 0) {
    data.finalPrice = data.price * (1 - data.discount / 100);
  }

  const product = await productData.createProduct(data);
  return product;
};

export const getAllProducts = async (page, limit, skip) => {
  const products = await productData.getAll(limit, skip);
  if (products.count === 0) {
    throw new AppError("No products found", 404);
  }
  const paginated = getPaginationData(products, page, limit);
  return paginated;
};

export const getProductById = async (id) => {
  return await productData.getProductById(id);
};

export const updateProduct = async (id, body) => {
  const isExist = await productData.getProductById(id);
  if (!isExist) {
    throw new AppError("Product not found", 404);
  }
  if (body.category && body.attributes) {
    throw new AppError(
      "Cannot update category without changing attributes as well",
      400
    );
  } else if (!body.category && body.attributes) {
    const isValid = await validateAttributesByCategory(
      isExist.category,
      body.attributes
    );
    if (!isValid) {
      throw new AppError("Invalid product attributes", 400);
    }
  } else if (body.category && body.attributes) {
    const category = await getCategoryById(body.category);
    if (!category) {
      throw new AppError("Category not found", 404);
    }
    const isValid = await validateAttributesByCategory(
      body.category,
      body.attributes
    );
    if (!isValid) {
      throw new AppError("Invalid product attributes", 400);
    }
    if (body.subCategory) {
      const subCategory = await getSubCategoryForProduct(body.subCategory);
      if (!subCategory) {
        throw new AppError("Subcategory not found", 404);
      }
    }
  }
  if (body.discount) {
    const finalPrice = body.price * (1 - body.discount / 100);
    body.finalPrice = finalPrice;
  }
  const product = await productData.updateProduct(id, body);
  return product;
};

export const deleteProduct = async (id) => {
  const isExist = await productData.getProductById(id);
  if (!isExist) {
    throw new AppError("Product not found", 404);
  }
  return await productData.deleteProduct(id);
};
