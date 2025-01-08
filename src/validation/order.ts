import Joi from "joi";

export const orderSchema = Joi.object({
  user_id: Joi.string().required(),
  status: Joi.string().valid("pending", "completed"),
});

export const updateOrderSchema = Joi.object({
  status: Joi.string().valid("pending", "completed"),
});