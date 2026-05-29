const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');

const Product = sequelize.define('Product', {
    partNumber: {
    type: DataTypes.STRING,
    primaryKey: true
    },
    
    productType: {
        type: DataTypes.STRING
    },
    categoryCode: {
        type: DataTypes.STRING
    },
    brandCode: {
        type: DataTypes.STRING
    },
    familyCode: {
        type: DataTypes.STRING
    },
    lineCode: {
        type: DataTypes.STRING
    },
    productSegmentCode: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER
    },
    valueCurrency: {
        type: DataTypes.STRING
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Product',
    timestamps: false
});

module.exports = Product;