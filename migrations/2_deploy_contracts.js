var CarbonCreditTokenArtifact = artifacts.require("CarbonCreditToken");

module.exports = function (deployer) {
  deployer.deploy(CarbonCreditTokenArtifact, BigInt(100*10**18));
};
