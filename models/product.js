'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
      Product.hasMany(models.History)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    code: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};