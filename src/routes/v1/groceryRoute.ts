import { Router } from "express";
import { validateRequest, isAdmin } from "../../middleware";
import {
  addGrocery,
  updateGrocery,
  getGroceries,
  placeOrder,
  deleteGrocery
} from "../../controllers/grocery";
import { grocerySchema, updateGrocerySchema } from "../../validation/grocery";
import { orderSchema } from "../../validation/order";


const groceryRoute = Router();

groceryRoute.post("/", isAdmin, validateRequest(grocerySchema), addGrocery);
groceryRoute.put("/:id", isAdmin, validateRequest(updateGrocerySchema), updateGrocery);

groceryRoute.get("/", getGroceries);
groceryRoute.post("/order", validateRequest(orderSchema), placeOrder);

groceryRoute.delete("/:id", isAdmin, deleteGrocery);


export default groceryRoute;