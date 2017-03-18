var CSet = artifacts.require("./CSet.sol");

contract('Cs1', function(accounts) {

    it("t1", function() {
        var meta;

        return CSet.deployed().then(function(instance) {
            meta = instance;
            return meta.register(100);
        }).then(function() {

            return meta.there.call(100);
        }).then(function(good) {
            assert.equal(good, true, "100 Should be in the set");
            console.log("100 = ", good);

            return meta.there.call(101);
        }).then(function(bad) {
            assert.equal(bad, false, "101 Should not be in the set");
            console.log("101 = ", bad);
        });
    });
});
