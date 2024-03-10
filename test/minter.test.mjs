import { expect } from "chai";
import { JsonRpcProvider } from "ethers"

describe("Minter Contract", function () {
    let Minter;
    let minter;
    let owner;
    let addr1;
    let provider;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here
        Minter = await ethers.getContractFactory("Minter");
        [owner, addr1] = await ethers.getSigners();

        provider = new JsonRpcProvider("http://localhost:8545");

        minter = await Minter.deploy();
        await minter.deployed();
        console.log("Deployed at:", minter.address);
    });

    describe("Minting", function () {
        it("Should mint a new token", async function () {
            // Mint a new token and check the totalSupply
            await minter.mint("Token Name", "https://example.com/image.png");
            expect(await minter.totalSupply()).to.equal(1);
        });
    });

    describe("Token Data", function () {
        it("Should return the correct token data", async function () {
            // Mint a new token and then fetch its data
            await minter.mint("My Special Token", "https://example.com/special.png");
            const tokenData = await minter.getTokenData(0); // Assuming the first token has ID 0
            expect(tokenData.name).to.equal("My Special Token");
            expect(tokenData.imageUrl).to.equal("https://example.com/special.png");
        });
    });
});
