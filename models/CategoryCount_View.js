const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CategoryCount_View', {
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
    }
  }, {
    sequelize,
    tableName: 'CategoryCount_View',
    schema: 'dbo',
    timestamps: false
  });
};
