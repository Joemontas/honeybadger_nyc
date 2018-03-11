'use strict';
module.exports = (sequelize, DataTypes) => {
  var card = sequelize.define('card', {
    tittle: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  card.associate = function(models) {
    // associations can be defined here
    card.belongsTo(models.user, { foreignKey: 'user_id' });
  };
  return card;
};