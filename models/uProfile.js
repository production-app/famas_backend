const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uProfile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ucode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_head: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'uProfile',
    schema: 'dbo',
    timestamps: false
  });
};
