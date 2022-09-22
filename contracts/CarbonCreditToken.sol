// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // access control

contract CarbonCreditToken is ERC20 {
  constructor() ERC20("CarbonCredit", "CCT") {
    _mint(msg.sender, 1000 * 10 ** 18);
  }

  function mint() public onlyOwner {
    _mint(msg.sender, 1000 * 10 ** 18);
  }
}
