const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oooa', {
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Occu: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oooa',
    schema: 'dbo',
    timestamps: false
  });
};
