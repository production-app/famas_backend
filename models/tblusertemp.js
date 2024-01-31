const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblusertemp', {
    userid: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    username: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblusertemp',
    schema: 'dbo',
    timestamps: false
  });
};
