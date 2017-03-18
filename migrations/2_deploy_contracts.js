var IterableMapping = artifacts.require("./IterableMapping.sol");
var User = artifacts.require("./User.sol");

var Set = artifacts.require("./Set")
var CSet = artifacts.require("./CSet")

module.exports = function(deployer) {
  deployer.deploy(IterableMapping);
  deployer.link(IterableMapping, User);
  deployer.deploy(User);

  deployer.deploy(Set);
  deployer.link(Set, CSet);
  deployer.deploy(CSet);
};
