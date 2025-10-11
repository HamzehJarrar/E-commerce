import Joi from "joi";
import objectId from "./objectId.validator.js";

export const updateQnt = Joi.object({
  productCartId: objectId.required(),
  qnt: Joi.number().min(1).required(),
});

export const addToCart = Joi.object({
  productId: objectId.required(),
  attributes: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        value: Joi.array().required(),
      })
    )
    .optional(),
});
