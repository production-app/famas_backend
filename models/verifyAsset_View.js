const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('verifyAsset_View', {
    Assetcode: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    uploadedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tagType: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    REFID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AssetName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Aperiod: {
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
    },
    serialnumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'verifyAsset_View',
    schema: 'dbo',
    timestamps: false
  });
};
