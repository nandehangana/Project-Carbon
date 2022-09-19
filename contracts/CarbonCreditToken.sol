// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonCreditToken is ERC20 {
  constructor() ERC20("CarbonCredit", "CCT") {
    _mint(msg.sender, 1000);
  }

  function mint(address recipient) public {
    _mint(recipient, 1000);
  }
}
