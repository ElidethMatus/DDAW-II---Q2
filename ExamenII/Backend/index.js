const express = require("express");
const cors = require("cors");
const sequelize = require("./connection/db");
const Producto = require("./models/productos");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/promediocate", async (req, res) => {
  try {
    const result = await Producto.findAll({
      attributes: [
        "categoryCode",
        [sequelize.fn("AVG", sequelize.col("value")), "promedio"],
      ],
      group: ["categoryCode"],
    });

    if (result.length > 0) {
      res.status(200).json({ message: "Promedio de valor por categoría", data: result,});
    } else {
      res.status(400).json({message: "No se encontraron datos", data: [],});
    }
  } catch (error) {
    res.status(500).json({message: "Error al obtener el promedio", error: error.message,});
  }
});


app.get("/conteomarca", async (req, res) => {
  try {
    const result = await Producto.findAll({
      attributes: [
        "brandCode",
        [sequelize.fn("COUNT", sequelize.col("partNumber")), "cantidad"],
      ],
      group: ["brandCode"],
    });

    if (result.length > 0) {
      res.status(200).json({message: "Cantidad de productos por marca", data: result,});
    } else {
      res.status(400).json({message: "No se encontraron datos", data: [],});
    }
  } catch (error) {
    res.status(500).json({message: "Error al obtener la cantidad", error: error.message,});
  }
});
app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});