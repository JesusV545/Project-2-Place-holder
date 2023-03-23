const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {

}

Product.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        price: {
            type: DataType.FLOAT(5,2),
            allowNull: false,
        },
        imageURL: {
            type: DataType.STRING,
        },
        category: {
            type: DataType.STRING,
            allowNull: false,
        },
        nutritionFactsURL: {
            type: DataType.STRING,
        } 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;