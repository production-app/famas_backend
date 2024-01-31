const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeptAssetCount', {
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssetCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeptAssetCount',
    schema: 'dbo',
    timestamps: false
  });
};
