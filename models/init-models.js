var DataTypes = require("sequelize").DataTypes;
var _Test = require("./test");

function initModels(sequelize) {
  var Test = _Test(sequelize, DataTypes);

  return {
    Test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
