import Joi from "joi";
import objectId from "./objectId.validator";

export const createCoupon = Joi.object({
  code: Joi.string().required(),
  discount: Joi.number().min(1).max(100).required(),
  validFrom: Joi.date(),
  validTo: Joi.date(),
  status: Joi.string().valid("active", "inactive").optional(),
});

export const updateCoupon = Joi.object({
  code: Joi.string(),
  discount: Joi.number().min(1).max(100).optional(),
  validFrom: Joi.date().optional(),
  validTo: Joi.date().optional(),
  status: Joi.string().valid("active", "inactive").optional(),
});

export const idParams = Joi.object({
    id:objectId.required()
})