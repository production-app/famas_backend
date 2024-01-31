const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Departments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Floor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Officer_Id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Officer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Extension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_add: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StoreFlag: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Departments',
    schema: 'dbo',
    timestamps: false
  });
};
