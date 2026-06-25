const { DataTypes } = require("sequelize");
const sequelize = require("../connection/db");
const Producto = sequelize.define(
  "product",
  {
    partNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    categoryCode: DataTypes.STRING,
    brandCode: DataTypes.STRING,
    value: DataTypes.FLOAT,
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

module.exports = Producto;