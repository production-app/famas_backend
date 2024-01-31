const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uProfile_View', {
    userid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(150),
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
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LastCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'uProfile_View',
    schema: 'dbo',
    timestamps: false
  });
};
