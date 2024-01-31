const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('physical_inventory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Locationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    p_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    signby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    assetid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assetcount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    Deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'physical_inventory',
    schema: 'dbo',
    timestamps: false
  });
};
