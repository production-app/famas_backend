const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetinventory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    officeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assetcatid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dateofinvent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bywho: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    assetCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assetinventory',
    schema: 'dbo',
    timestamps: false
  });
};
