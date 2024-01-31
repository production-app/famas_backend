const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSCS_Monitor', {
    filenames: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    flags: {
      type: DataTypes.INTEGER,
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
    tableName: 'CSCS_Monitor',
    schema: 'dbo',
    timestamps: false
  });
};
