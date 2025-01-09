import Joi from "joi";

export const grocerySchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
});

export const updateGrocerySchema = Joi.object({
  name: Joi.string().min(3).max(30),
  price: Joi.number(),
  stock: Joi.number(),
});
