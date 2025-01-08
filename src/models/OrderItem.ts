import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";

class OrderItem extends Model {
  public orderId!: number;
  public groceryId!: number;
  public quantity!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groceryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "orderItems",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

export default OrderItem;
