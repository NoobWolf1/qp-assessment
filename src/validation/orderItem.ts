import Joi from "joi";

export const orderItemSchema = Joi.object({
  orderId: Joi.number().required(),
  groceryId: Joi.number().required(),
  quantity: Joi.number().required(),
});

export const updateOrderItemSchema = Joi.object({
  quantity: Joi.number(),
  groceryId: Joi.number().required(),
});
