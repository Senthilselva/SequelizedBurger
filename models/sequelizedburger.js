'use strict';
module.exports = function(sequelize, DataTypes) {
  var sequelizedBurger = sequelize.define('sequelizedBurger', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sequelizedBurger;
};