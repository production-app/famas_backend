const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TagFileView_new', {
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
    rfidcode: {
      type: DataTypes.STRING(50),
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
    }
  }, {
    sequelize,
    tableName: 'TagFileView_new',
    schema: 'dbo',
    timestamps: false
  });
};
