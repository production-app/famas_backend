const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AllocateAssets', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    refid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Allocate_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Allocate_by: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    received_by: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Received_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Received_Remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    serialnumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
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
    Barcoded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tagged: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Date_In: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Prompted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GL_Transaction_RefNo: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AllocateAssets',
    schema: 'dbo',
    timestamps: false
  });
};
