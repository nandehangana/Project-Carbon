var DataTypes = require("sequelize").DataTypes;
var _RegisteredMembers = require("./registeredmember");
var _CreditRequests = require("./creditrequests");

function initModels(sequelize) {
  var RegisteredMembers = _RegisteredMembers(sequelize, DataTypes);
  var CreditRequests = _CreditRequests(sequelize, DataTypes);
  RegisteredMembers.hasMany(CreditRequests);
  CreditRequests.belongsTo(RegisteredMembers, {
    foreignKey: "memberid",
    targetKey: "pk",
  });

  return {
    RegisteredMembers,
    CreditRequests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
