require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
// const privateKey = fs.readFileSync(".secret").toString()
// const projectId = "cfdc5719340c4ff5961a797ac93c7567"

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
      // local doesn't need accounts, hardhat will create will for you
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
    //   accounts: [privateKey]
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${projectId}`,
    //   accounts: [privateKey]
    // }
  },
  solidity: "0.8.4",
};
