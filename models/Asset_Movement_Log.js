const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Asset_Movement_Log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Date_entered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EPC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TID: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    AssetCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AssetName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowed: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Asset_Movement_Log',
    schema: 'dbo',
    timestamps: false
  });
};
