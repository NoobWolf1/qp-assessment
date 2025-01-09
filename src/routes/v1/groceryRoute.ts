import { Router } from "express";
import { validateRequest, isAdmin } from "../../middleware";
import {
  addGrocery,
  updateGrocery,
  getGroceries,
  placeOrder,
  deleteGrocery,
} from "../../controllers/grocery";
import { grocerySchema, updateGrocerySchema } from "../../validation/grocery";
import { orderSchema } from "../../validation/order";

const groceryRoute = Router();

groceryRoute.post("/", isAdmin, validateRequest(grocerySchema), addGrocery);
groceryRoute.put(
  "/:id",
  isAdmin,
  validateRequest(updateGrocerySchema),
  updateGrocery
);

groceryRoute.get("/", getGroceries);
groceryRoute.post("/order", validateRequest(orderSchema), placeOrder);

groceryRoute.delete("/:id", isAdmin, deleteGrocery);

export default groceryRoute;

/**
 * @swagger
 * /v1/grocery:
 *   post:
 *     summary: Add a new grocery item
 *     tags: [Groceries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Grocery'
 *     responses:
 *       '201':
 *         description: Grocery item created successfully
 *       '400':
 *         description: Invalid input
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *   get:
 *     summary: Get all grocery items
 *     tags: [Groceries]
 *     responses:
 *       '200':
 *         description: A list of grocery items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grocery'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *
 * /v1/grocery/{id}:
 *   put:
 *     summary: Update a grocery item
 *     tags: [Groceries]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateGrocery'
 *     responses:
 *       '200':
 *         description: Grocery item updated successfully
 *       '400':
 *         description: Invalid input
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Grocery item not found
 *   delete:
 *     summary: Delete a grocery item
 *     tags: [Groceries]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Grocery item deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Grocery item not found
 *
 * /v1/grocery/order:
 *   post:
 *     summary: Place an order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: Order placed successfully
 *       '400':
 *         description: Invalid input
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
