const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OfficeSpaceView', {
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    floor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    departname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    locations: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'OfficeSpaceView',
    schema: 'dbo',
    timestamps: false
  });
};
