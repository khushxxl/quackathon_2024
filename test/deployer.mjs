import { expect } from "chai";

describe("Minter Contract", function () {
  let Minter;
  let minter;
  let owner;
  let addr1;

  beforeEach(async function () {
    Minter = await ethers.getContractFactory("Minter");
    [owner, addr1] = await ethers.getSigners();
    minter = await Minter.deploy();
    await minter.deployed();
    console.log("DEPLOYED");
  });

  describe("Minting", function () {
    it("Should mint a new token", async function () {
      await minter.mint("Token Name", "https://example.com/image.png");
      expect((await minter.totalSupply()).toString()).to.equal(
        ethers.BigNumber.from(1).toString()
      );
    });
  });

  describe("Token Data", function () {
    it("Should return the correct token data", async function () {
      await minter.mint("My Special Token", "https://example.com/special.png");
      const tokenData = await minter.getTokenData(0);
      expect(tokenData.name).to.equal("My Special Token");
      expect(tokenData.imageUrl).to.equal("https://example.com/special.png");
    });
  });
});
