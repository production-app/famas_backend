const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserProfile_View', {
    UserName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UPwd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPwd_old: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Upwd2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UFullName: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Post: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ostatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Unit_Head: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iStoreManager: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iAdmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeptName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    eDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    iNotif: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iPrintAsset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iEnable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icaution: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imerge: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iBCApprove: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iBC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_DeptID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserProfile_View',
    schema: 'dbo',
    timestamps: false
  });
};
