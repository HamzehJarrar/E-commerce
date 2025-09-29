import Joi from "joi";

export const register = Joi.object({
  name: Joi.string().min(3).trim().max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
});
export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
});

export const confirmEmail = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().length(4).required(),
});
