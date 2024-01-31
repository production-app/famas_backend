const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Books', {
    BookID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BookName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmployeeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DateIssued: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Books',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Books__3DE0C227E48ACFCE",
        unique: true,
        fields: [
          { name: "BookID" },
        ]
      },
    ]
  });
};
