import Joi from "joi";
import objectId from "./objectId.validator.js";

export const create = Joi.object({
  name: Joi.string().min(2).trim().max(50).required(),
  categoryId: objectId.required(),
  status: Joi.string().valid("active", "inactive"),
});

export const update = Joi.object({
  name: Joi.string().min(2).trim().max(50),
  categoryId: objectId.required(),
  status: Joi.string().valid("active", "inactive"),
});

export const subCategoryIdParams = Joi.object({
  id: objectId.required(),
});
