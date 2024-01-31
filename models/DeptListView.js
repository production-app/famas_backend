const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeptListView', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FLOOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Expr1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Officer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Officer_Id: {
      type: DataTypes.INTEGER,
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
    tableName: 'DeptListView',
    schema: 'dbo',
    timestamps: false
  });
};
