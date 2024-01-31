const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gpoAlarms', {
    GPORedLignt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GpoOrange: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GPOGreen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gpoAlarm: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gpoAlarms',
    schema: 'dbo',
    timestamps: false
  });
};
