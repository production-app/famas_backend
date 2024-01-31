const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblRelocateAssetHistory', {
    refid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tagcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    catid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    from_deptid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_deptid: {
      type: DataTypes.INTEGER,
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
      primaryKey: true,
      autoIncrement: true
    },
    prompted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblRelocateAssetHistory',
    schema: 'dbo',
    timestamps: false
  });
};
