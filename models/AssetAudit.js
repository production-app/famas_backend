const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "AssetAudit",
    {
      AuditDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      AuditPeriod: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tagCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      DeptID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      eno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        ///  autoIncrement: true
      },
    },
    {
      sequelize,
      tableName: "AssetAudit",
      schema: "dbo",
      timestamps: false,
    }
  );
};
