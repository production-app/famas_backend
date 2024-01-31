const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notif_Batch', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
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
    To_Cc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    From_Officer: {
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
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Treated: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Notif_Batch',
    schema: 'dbo',
    timestamps: false
  });
};
