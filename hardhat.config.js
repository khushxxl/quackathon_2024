require("@nomiclabs/hardhat-ethers");

// Your Hardhat configuration
module.exports = {
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat",
      },
      chainId: 1337,
    },
  },
  solidity: "0.8.24",
};
