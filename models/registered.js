const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "registeredcompanies",
    {
      pk: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      companyname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      walletaddress: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "registeredcompanies",
      timestamps: false,
      indexes: [
        {
          name: "PK_registeredcompanies",
          unique: true,
          fields: [{ name: "PK" }],
        },
      ],
    }
  );
};
