const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Asset_Excluded_List_View1', {
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationID: {
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
    AssetName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    refID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status_desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Asset_Excluded_List_View1',
    schema: 'dbo',
    timestamps: false
  });
};
