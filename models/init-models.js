var DataTypes = require("sequelize").DataTypes;
var _Test = require("./test");
var _RegisteredCompanies = require("./registered");

function initModels(sequelize) {
  var Test = _Test(sequelize, DataTypes);
  var RegisteredCompanies = _RegisteredCompanies(sequelize, DataTypes);

  return {
    Test,
    RegisteredCompanies,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
