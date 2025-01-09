import Joi from "joi";

export const orderSchema = Joi.object({
  userId: Joi.number().required(),
  status: Joi.string().valid("pending", "completed"),
  items: Joi.array().required(),
});

export const updateOrderSchema = Joi.object({
  status: Joi.string().valid("pending", "completed"),
});
