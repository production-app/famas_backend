const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "verifyAsset",
    {
      Assetcode: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      locationID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      locationName: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      deptid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deptcode: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      locationcode: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      dateRead: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      timeRead: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      verifiedby: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      IDn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //autoIncrement: true
      },
      tagType: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      REFID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      searchdeptid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      searchdeptname: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      searchlocationid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      searchlocationname: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      refids: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      uploadedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      assetname: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      Aperiod: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      AperiodID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "verifyAsset",
      schema: "dbo",
      timestamps: false,
    }
  );
};
