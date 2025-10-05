import productModel from "../../../database/models/product.model.js";

export const createProduct = async (data) => {
    return await productModel.create(data);
};