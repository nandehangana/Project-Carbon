const env = process.env.NODE_ENV || "development";
const SequelizeAuto = require("sequelize-auto");
const config = require("../dbconfig")[env];

const options = {
  directory: "../models",
  caseFile: "l",
  caseModel: "p",
  caseProp: "s",
  lang: "js",
  singularize: true,
  spaces: true,
  indentation: 2,
  additional: {
    timestamps: false,
  },
};

const auto = new SequelizeAuto(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    ...options,
  }
);

auto.run().then((data) => {
  const tableNames = Object.keys(data.tables);
  console.log(tableNames); // table list
});
