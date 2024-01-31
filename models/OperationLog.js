const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperationLog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RefID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Detail: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    LogTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LogDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Operator: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    WkStation: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OperationLog',
    schema: 'dbo',
    timestamps: false
  });
};
