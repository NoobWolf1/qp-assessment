import { Request, Response } from "express";
import Grocery from "../models/Grocery";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";

export const addGrocery = async (req: Request, res: Response) => {
  try {
    const { name, price, stock } = req.body;
    const grocery = await Grocery.create({ name, price, stock });
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateGrocery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    const grocery = await Grocery.findByPk(id);

    if (!grocery) return res.status(404).json({ message: "Grocery not found" });

    grocery.name = name || grocery.name;
    grocery.price = price || grocery.price;
    grocery.stock = stock || grocery.stock;

    await grocery.save();
    res.json(grocery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGroceries = async (_req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll();
    res.json(groceries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body;
    const groceryIds = items.map((item: any) => item.groceryId);
    const groceries = await Grocery.findAll({
      where: {
        id: groceryIds,
      },
    });
    const outOfStockItems = items.filter((item: any) => {
      const grocery = groceries.find((g: any) => g.id === item.groceryId);
      return !grocery || grocery.stock < item.quantity;
    });

    if (outOfStockItems.length > 0) {
      return res
        .status(400)
        .json({ message: "Some items are out of stock", outOfStockItems });
    }

    const order = await Order.create({ userId });

    const orderItems = items.map((item: any) => {
      const grocery = groceries.find((g: any) => g.id === item.groceryId);
      grocery.stock -= item.quantity;
      grocery.save();
      return {
        orderId: order.id,
        groceryId: item.groceryId,
        quantity: item.quantity,
      };
    });

    await OrderItem.bulkCreate(orderItems);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteGrocery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const grocery = await Grocery.findByPk(id);
    if (!grocery) return res.status(404).json({ message: "Grocery not found" });

    await grocery.destroy();

    res.json({ message: "Grocery deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};