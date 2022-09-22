const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "test",
    {
      pk: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      meta: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "test",
      timestamps: false,
      indexes: [
        {
          name: "PK_test",
          unique: true,
          fields: [{ name: "PK" }],
        },
      ],
    }
  );
};
