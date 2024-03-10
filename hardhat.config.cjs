require("@nomiclabs/hardhat-ethers");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "2bfa4f6ccc344cf695af2a3452131cb8";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "9fa233d00df9439b693b0786edb0b6aabf01583c0113079718a4c007b26401f7";

// Your Hardhat configuration
module.exports = {
  etherscan: {
    apiKey: "AJ8CKA8P14MMJ7USDT8KYAST77M16D3D39",
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
  },
  solidity: "0.8.24"
};

// DEPLOYED TO: 0x91f33623f18E54dffF665F9645A301918F7c015B