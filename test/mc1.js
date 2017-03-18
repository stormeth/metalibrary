var CSet = artifacts.require("./CSet.sol");

contract('Cs1', function(accounts) {

    it("t1", function() {
        var meta;

        var amount = 10;
        var xamount;

        return CSet.deployed().then(function(instance) {
            meta = instance;
            return meta.register(100);
        }).then(function() {
            console.log("hi");
        });
    });
});
