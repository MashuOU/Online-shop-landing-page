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

    statusStock() {
      if (this.stockBarang > 0) {
        return 'available'
      }else {
        return 'out of stock'
      }
        

    }

    get totalstock() {
      console.log(this.stockBarang);
      return this.stock
    }

  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    stockBarang: DataTypes.INTEGER,
    code: DataTypes.STRING,
    imageURL: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};