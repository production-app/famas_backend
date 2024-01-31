const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l_audit_log', {
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    operation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    full_date: {
      type: DataTypes.DATE,
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
    tableName: 'l_audit_log',
    schema: 'dbo',
    timestamps: false
  });
};
