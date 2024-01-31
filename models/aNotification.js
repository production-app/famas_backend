const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aNotification', {
    operator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operator_deptid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    catid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CatName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    not_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Desired_Req_Desc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    desired_request_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memocc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    treated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Not_header: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Action_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Action_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Approve_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Period_Date_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Period_Date_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_by: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prompted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aNotification',
    schema: 'dbo',
    timestamps: false
  });
};
