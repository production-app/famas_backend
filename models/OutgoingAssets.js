const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OutgoingAssets', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    refID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    approve_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OutgoingAssets',
    schema: 'dbo',
    timestamps: false
  });
};
