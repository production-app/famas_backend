const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Dispose_Assets', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Refid: {
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
    rfidcode: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(150),
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
    }
  }, {
    sequelize,
    tableName: 'Dispose_Assets',
    schema: 'dbo',
    timestamps: false
  });
};
