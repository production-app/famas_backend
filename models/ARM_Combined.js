const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ARM_Combined', {
    REG_CODE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ACCOUNT_NO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    E_ACCOUNT_NO: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ARM_Combined',
    schema: 'dbo',
    timestamps: false
  });
};
