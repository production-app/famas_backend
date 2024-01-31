const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeptCategoryCount_View', {
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssetCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AssetName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeptCategoryCount_View',
    schema: 'dbo',
    timestamps: false
  });
};
