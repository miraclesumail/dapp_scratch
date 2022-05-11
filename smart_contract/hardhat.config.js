require("@nomiclabs/hardhat-waffle");

// https://eth-ropsten.alchemyapi.io/v2/hmOypqTGv7Nir3IMxQO7qzPdyBQKrn8F
// 349c1e3779ba276539738fc46f757a38b844f744499d6d867ce5194148418c6b

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/hmOypqTGv7Nir3IMxQO7qzPdyBQKrn8F",
      accounts: [
        "349c1e3779ba276539738fc46f757a38b844f744499d6d867ce5194148418c6b",
      ],
    },
  },
};
