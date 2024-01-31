const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssetAuditView', {
    AuditDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AuditPeriod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tagCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeptID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Expr1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    serialnumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    locationname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Floor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AssetAuditView',
    schema: 'dbo',
    timestamps: false
  });
};
