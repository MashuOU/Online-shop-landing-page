'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserDetail)
      User.hasMany(models.History)
    }
  }
  User.init({
    userName: DataTypes.STRING,
    emai: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};