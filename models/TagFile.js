const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TagFile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    Printed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Print_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Print_by: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    assigned_deptid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    assigned_tagcode: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    barcode: {
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
    generatedby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    generated_date: {
      type: DataTypes.DATEONLY,
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
    },
    rfidcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_Transaction_RefNo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Date_In: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TagFile',
    schema: 'dbo',
    timestamps: false
  });
};
