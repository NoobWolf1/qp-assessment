import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";

class Order extends Model {
  public id!: number;
  public userId!: number; // Replace with actual User Model association if required
  public status!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "orders",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

export default Order;
