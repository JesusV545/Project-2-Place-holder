const User = require('./User');
const Product = require('./Product');
const Order = require('./Order.js');
const Carts = require('./Carts');

Order.belongsToMany(Product, {through: Carts});
Product.belongsToMany(Order, {through: Carts});

User.hasOne(Order, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Product, Carts, Order };