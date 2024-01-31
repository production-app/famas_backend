const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UsersFamas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UsersFamas',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__UsersFam__3213E83F4B8EF3CA",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
