const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RelocateAssetHistory_View', {
    refid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    from_locationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_locationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    odate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    receiveby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Operator: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serialnumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Brandname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Assetname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    RFID_TID_CODE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RFID_EPC_CODE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FromDeptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    From_DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    To_DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prompted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RelocateAssetHistory_View',
    schema: 'dbo',
    timestamps: false
  });
};
