import * as service from "./category.service.js";

const createCategory = async (req, res, next) => {
  if (!req.file) {
    return next(new AppError("Image is required", 400));
  }
  const category = await service.createCategory({
    ...req.body,
    image: req.file,
  });
  res.status(201).json({
    message: "Category created successfully",
    data: category,
  });
};

export { createCategory };
