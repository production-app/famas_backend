const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssetAuditHeader', {
    Aperiod: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ADate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Auditor: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ARemark: {
      type: DataTypes.STRING(350),
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
    tableName: 'AssetAuditHeader',
    schema: 'dbo',
    timestamps: false
  });
};
