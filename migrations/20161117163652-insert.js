'use strict';

// Require our models
var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    console.log("hello")
   return models.sequelizedBurger.bulkCreate(
      [
        {burger_name: "CheeseBurger"},
        {burger_name: "Double CheeseBurger"},
        {burger_name: "Triple CheeseBurger"},
        {burger_name: "Quadruple CheeseBurger"},
        {burger_name: "Quintple CheeseBurger"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.sequelizedBurger.destroy({where:{burger_name: [
        "CheeseBurger",
        "Double CheeseBurger",
        "Triple CheeseBurger",
        "Quadruple CheeseBurger",
        "Quintple CheeseBurger"
    ]}})
    
  }
}
