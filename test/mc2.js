var User = artifacts.require("./User.sol");

contract('Iterable Mapping 1', function(accounts) {

    it("t1", function() {
        var meta;

        return User.deployed().then(function(instance) {
            meta = instance;
            return meta.insert(0,1);
        }).then(function() {

            return meta.sum.call();
        }).then(function(sum) {
            assert.equal(sum, 1, "1 Should be the sum");
            console.log("1 = ", sum);

            return meta.insert(1,10);
        }).then(function() {

            return meta.sum.call();
        }).then(function(sum) {
            assert.equal(sum, 11, "11 Should be the sum");
            console.log("11 = ", sum);

            return meta.remove(1);
        }).then(function() {

            return meta.sum.call();
        }).then(function(sum) {
            assert.equal(sum, 1, "1 Should be the sum");
            console.log("1 = ", sum);

        });
    });

    it("t2", function() {
        var meta;

        return User.deployed().then(function(instance) {
            meta = instance;
            return meta.insert(2,100);
        }).then(function() {

            return meta.sum.call();
        }).then(function(sum) {
            assert.equal(sum, 101, "101 Should be the sum");
            console.log("101 = ", sum);
        });
    });

    it("t3", function() {
        var meta;

        return User.deployed().then(function(instance) {
            meta = instance;
            return meta.insert(3,1000);
        }).then(function() {

            return meta.sum.call();
        }).then(function(sum) {
            assert.equal(sum, 1101, "1101 Should be the sum");
            console.log("1101 = ", sum);
        });
    });

});
