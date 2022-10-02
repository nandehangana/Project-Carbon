const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "creditrequests",
    {
      pk: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      memberid: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      /*address: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },*/

      status: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "creditrequests",
      timestamps: false,
      indexes: [
        {
          name: "PK_creditrequests",
          unique: true,
          fields: [{ name: "PK" }],
        },
      ],
    }
  );
};
