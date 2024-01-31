const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Asset_Excluded_List11', {
    tid: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    epc: {
      type: DataTypes.STRING(250),
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
    tableName: 'Asset_Excluded_List11',
    schema: 'dbo',
    timestamps: false
  });
};
