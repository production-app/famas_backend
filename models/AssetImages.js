const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssetImages', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    REFID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Images: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AssetImages',
    schema: 'dbo',
    timestamps: false
  });
};
