var CarbonCreditTokenArtifact = artifacts.require("CarbonCreditToken");

module.exports = function (deployer) {
  deployer.deploy(CarbonCreditTokenArtifact, 100000);
};
