import Joi from "joi";
import objectId from "./objectId.validator.js";

const attributesSchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  type: Joi.string().valid("string", "number", "enum").required(),
  options: Joi.alternatives().conditional("type", {
    is: "enum",
    then: Joi.array().items(Joi.string().min(1).trim().required()),
    otherwise: Joi.forbidden(),
  }),
  allowCustomValue: Joi.boolean().default(true),
});

export const create = Joi.object({
  name: Joi.string().min(2).trim().max(50).required(),
  status: Joi.string().valid("active", "inactive"),
  image: Joi.any().required(),
  attributes: Joi.array().items(attributesSchema).default([]),
});

export const update = Joi.object({
  name: Joi.string().min(2).trim().max(50).required(),
  status: Joi.string().valid("active", "inactive"),
  image: Joi.any(),
  attributes: Joi.array().items(attributesSchema).default([]),
  id: objectId.required(),
});

export const categoryIdParams = Joi.object({
  id: objectId.required(),
});
