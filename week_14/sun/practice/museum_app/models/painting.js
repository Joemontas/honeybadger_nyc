'use strict';
module.exports = (sequelize, DataTypes) => {
  var painting = sequelize.define('painting', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,
    year_made: DataTypes.INTEGER,
    year: DataTypes.STRING
  }, {});
  painting.associate = function(models) {
    // associations can be defined here
    painting.belongsTo(models.artist, { foreignKey: 'artist_id'});
  };
  return painting;
};