import Joi from "joi";
import  ObjectId  from "./objectId.validator.js";
import multerFileSchema from "./image.validator.js";

export const create = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(3).max(200).required(),
  price: Joi.number().min(0).positive().required(),
  discount: Joi.number().min(0).max(50).optional(),
  category: ObjectId.required(),
  subcategory: ObjectId.required(),
  attributes: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      value: Joi.array().items(
        Joi.alternatives().try(Joi.string(), Joi.number()).required()
      ),
    })
  ),
  mainImage: multerFileSchema.required(),
  subImages : Joi.array().items(multerFileSchema).optional(),
  stock : Joi.number().min(1).required(),
});
