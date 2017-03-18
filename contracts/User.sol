pragma solidity ^0.4.8;

import "./IterableMapping.sol";

contract User
{
  // Just a struct holding our data.
  IterableMapping.itmap data;

  // Insert something
  function insert(uint k, uint v) returns (uint size)
  {
    // Actually calls itmap_impl.insert, auto-supplying the first parameter for us.
    IterableMapping.insert(data, k, v);
    // We can still access members of the struct - but we should take care not to mess with them.
    return data.size;
  }

  // Remove something
  function remove(uint k) returns (uint size)
  {
    // Actually calls itmap_impl.insert, auto-supplying the first parameter for us.
    IterableMapping.remove(data, k);
    // We can still access members of the struct - but we should take care not to mess with them.
    return data.size;
  }

  // Contains something
  function contains(uint k) returns (bool value)
  {
    // Actually calls itmap_impl.insert, auto-supplying the first parameter for us.
    value = IterableMapping.contains(data, k);
    // We can still access members of the struct - but we should take care not to mess with them.
    return value;
  }

  // Computes the sum of all stored data.
  function sum() returns (uint s)
  {
    for (var i = IterableMapping.iterate_start(data); IterableMapping.iterate_valid(data, i); i = IterableMapping.iterate_next(data, i))
    {
        var (key, value) = IterableMapping.iterate_get(data, i);
        s += value;
    }
  }
}
