const express = require('express');
const ProductModel = require('./models/tarea');
const sequelize = require('./connection/db');
const app = express();

app.use(express.json());

// Select `lineCode`, AVG(`value`) AS promedio_valor, COUNT(*) AS cantidad_productos From Product Group by `lineCode`;
app.get('/promedio-linea', async (req, res) => {

    try {
        const result = await ProductModel.findAll({
            attributes: [
                'lineCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedio_valor'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_productos']
            ],
            group: ['lineCode']
        });

        res.status(200).json({
            message: 'Promedio y cantidad por linea',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Select * From Product order by `value` ASC Limit 1;
app.get('/producto-mas-barato', async (req, res) => {

    try {

        const result = await ProductModel.findOne({
            order: [['value', 'ASC']]
        });

        res.status(200).json({
            message: 'Producto con menor valor',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Select Status brandCode, SUM(value) AS valor_total From Product Group by brandCode;

app.get('/valor-total-marca', async (req, res) => {

    try {

        const result = await ProductModel.findAll({
            attributes: [
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['brandCode']
        });

        res.status(200).json({
            message: 'Valor total por marca',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Select COUNT(DISTINCT partNumber) AS codigos_unicos From Product;
app.get('/codigos-unicos', async (req, res) => {

    try {

        const result = await ProductModel.count({
            distinct: true,
            col: 'partNumber'
        });

        res.status(200).json({
            message: 'Cantidad de códigos únicos',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo');
});