import sequelizeConnection from "../db/connection";
import Grocery from "./Grocery";
import Order from "./Order";
import OrderItem from "./OrderItem";
import User from "./User";

const isDev = process.env.NODE_ENV === "development";

// Establishing associations
const initializeModels = () => {
  // Order belongs to a User
  Order.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });
  User.hasMany(Order, {
    foreignKey: "userId",
    as: "orders",
  });

  // OrderItem belongs to Order and Grocery
  OrderItem.belongsTo(Order, {
    foreignKey: "orderId",
    as: "order",
  });
  Order.hasMany(OrderItem, {
    foreignKey: "orderId",
    as: "orderItems",
  });

  OrderItem.belongsTo(Grocery, {
    foreignKey: "groceryId",
    as: "grocery",
  });
  Grocery.hasMany(OrderItem, {
    foreignKey: "groceryId",
    as: "orderItems",
  });
};

// Synchronize models
const dbSync = async () => {
  try {
    console.log("   Database Sync Process Started.");
    await sequelizeConnection.authenticate();
    console.log("   Database connected successfully.");
    initializeModels();
    await sequelizeConnection.sync({ alter: isDev });
    console.log("   All models synchronized successfully.");
    return { success: true };
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

export { sequelizeConnection, dbSync, Grocery, Order, OrderItem, User };
