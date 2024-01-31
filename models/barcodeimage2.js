const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barcodeimage2', {
    barcodeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcodeinfo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    barcodeimage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    userid: {
      type: DataTypes.STRING(150),
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
    tableName: 'barcodeimage2',
    schema: 'dbo',
    timestamps: false
  });
};
