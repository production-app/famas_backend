const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aNotification_View', {
    operator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operator_deptid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refid: {
      type: DataTypes.INTEGER,
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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    not_date: {
      type: DataTypes.DATEONLY,
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
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Not_header: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    From_Dept: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    To_Officer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    From_Officer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CatName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Desired_Req_Desc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status_Desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Memo_Body_Note: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Memo_Conclusion_Note: {
      type: DataTypes.STRING(500),
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
    status: {
      type: DataTypes.INTEGER,
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
    To_Cc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Deptid2: {
      type: DataTypes.INTEGER,
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
    treated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prompted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aNotification_View',
    schema: 'dbo',
    timestamps: false
  });
};
