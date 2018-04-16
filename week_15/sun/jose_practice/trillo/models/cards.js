'use strict';
module.exports = (sequelize, DataTypes) => {
  var cards = sequelize.define('cards', {
    task: DataTypes.STRING
  }, {});
  cards.associate = function(models) {
    // associations can be defined here
  };
  return cards;
};