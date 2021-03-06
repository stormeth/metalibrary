pragma solidity ^0.4.0;

import "./Set.sol";

contract CSet {
    Set.Data knownValues;

    function register(uint value) {
        // The library functions can be called without a
        // specific instance of the library, since the
        // "instance" will be the current contract.
        if (!Set.insert(knownValues, value))
            throw;
    }

    function there(uint value) returns (bool) {
        if (Set.contains(knownValues, value))
            return true;
        return false;
    }


    // In this contract, we can also directly access knownValues.flags, if we want.
}
