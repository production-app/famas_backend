const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ooo', {
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
    tableName: 'ooo',
    schema: 'dbo',
    timestamps: false
  });
};
