import Joi from "joi";

export const orderItemSchema = Joi.object({
  order_id: Joi.string().required(),
  grocery_id: Joi.string().required(),
  quantity: Joi.number().required(),
});

export const updateOrderItemSchema = Joi.object({
    quantity: Joi.number(),
    grocery_id: Joi.string().required(),
});