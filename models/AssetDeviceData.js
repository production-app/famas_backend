const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssetDeviceData', {
    Controlid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'AssetDeviceData',
    schema: 'dbo',
    timestamps: false
  });
};
