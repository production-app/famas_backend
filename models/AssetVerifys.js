const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssetVerifys', {
    REFID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Barcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rfidcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Depts: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Locations: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationID: {
      type: DataTypes.INTEGER,
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
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    locationname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    RFID_EPC_CODE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RFID_TID_CODE: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AssetVerifys',
    schema: 'dbo',
    timestamps: false
  });
};
