const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TagFileView_mistake', {
    tagid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    barcode: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Deptname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CatName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Print_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Print_by: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    assigned_deptid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialnumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Printed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_tagcode: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Expr1: {
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
    Status_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TagFileView_mistake',
    schema: 'dbo',
    timestamps: false
  });
};
