import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";

class Grocery extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public stock!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;
}

Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "groceries",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

export default Grocery;
