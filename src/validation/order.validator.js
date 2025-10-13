import Joi from "joi";
import objectId from "./objectId.validator.js";
export const createOrder = Joi.object({
  address: Joi.string().trim().required(),
  phone: Joi.string().trim().required(),
  payment: Joi.string().trim().valid("cash", "card").required(),
  coupon: Joi.string().optional(),
});

export const updateOrderStatus = Joi.object({
  status: Joi.string()
    .trim()
    .valid("pending", "shipped", "delivered", "canceled")
    .required(),
});

export const getById = Joi.object({
  id: objectId.optional(),
});
