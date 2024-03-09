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

    // Base URI for computing {tokenURI}. If set, the resulting URI for each
    // token will be the concatenation of the `baseURI` and the `tokenId`.
    string private _baseURIextended;

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

    function setBaseURI(string memory baseURI_) external {
        _baseURIextended = baseURI_;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseURIextended;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        address tokenOwner = ownerOf(tokenId);
        require(tokenOwner != address(0), "ERC721Metadata: Query for nonexistent token");

        string memory base = _baseURI();
        return bytes(base).length > 0 ? string(abi.encodePacked(base, tokenId.toString())) : "";
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
