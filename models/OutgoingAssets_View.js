const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OutgoingAssets_View', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    approve_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssetName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OutgoingAssets_View',
    schema: 'dbo',
    timestamps: false
  });
};
