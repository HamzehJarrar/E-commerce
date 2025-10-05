import createImageObj from "../../utils/images/createImageObj.js";
import * as productService from "./product.service.js";

export const createProduct = async (req, res, next) => {
  const files = req.files;
  const categoryId = req.body.categoryId;
  
  let mainImage = createImageObj(files?.mainImage[0]);
  let subImages = [];

  if (files.subImages && files.subImages.length > 0) {
    subImages = files.subImages.map((file) => createImageObj(file));
  }
  const result = await productService.createProduct({
    ...req.body,
    mainImage,
    subImages,
    categoryId,
  });

  res.status(200).json({
    message: "Product data is valid",
    data: result,
  });
};
