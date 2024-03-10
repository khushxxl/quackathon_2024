// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Minter is ERC721Enumerable {
    using Strings for uint256;

    struct TokenData {
        string name;
        string imageUrl;
    }

    mapping(uint256 => TokenData) private _tokenData;

    constructor() ERC721("Minter", "MINTER") {}

    function mint(string memory name, string memory imageUrl) public {
        uint256 mintIndex = totalSupply();

        _safeMint(msg.sender, mintIndex);
        _setTokenData(mintIndex, name, imageUrl);
    }

    function _setTokenData(uint256 tokenId, string memory name, string memory imageUrl) internal {
        _tokenData[tokenId] = TokenData(name, imageUrl);
    }

    function getTokenData(uint256 tokenId) public view returns (TokenData memory) {
        // Ensure the token exists by checking if it has an owner
        address tokenOwner = ownerOf(tokenId);
        require(tokenOwner != address(0), "ERC721Metadata: Query for nonexistent token");

        return _tokenData[tokenId];
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
