const Web3 = require("web3");
const abi = require("./abi.json");

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// web3 = new Web3(web3.currentProvider);
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const abii = abi.output.abi;

// console.log(Web3, 'Web3')
var ZombieFactoryContract = new web3.eth.Contract(abii, address);

// console.log(
//   ZombieFactoryContract.methods
//     .changeMe("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
//     .send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" })
//     .then((res) => console.log(res, "here is res")),
//   //   ZombieFactoryContract,
//   "ZombieFactoryZombieFactory"
// );

ZombieFactoryContract.methods
  .addPerson("MIRACLE11", 22)
  .send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" })
  .on("receipt", (res) => console.log(res, "resresres"));

// console.log(
//   ZombieFactoryContract.methods
//     .getPersons()
//     .call()
//     .then((res) => console.log(res, "here is res")),
//   //   ZombieFactoryContract,
//   "ZombieFactoryZombieFactory"
// );

//   console.log(
//     ZombieFactoryContract.methods
//       .f(2,3)
//       .call()
//       .then((res) => console.log(res, "here is res")),
//     //   ZombieFactoryContract,
//     "ZombieFactoryZombieFactory"
//   );

// console.log(
//   ZombieFactoryContract.methods
//     .addPerson("sumail", 19)
//     .call({ from: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" })
//     .then((res) => console.log(res, "here is res")),
//   //   ZombieFactoryContract,
//   "ZombieFactoryZombieFactory"
// );

// ZombieFactoryContract.methods
//   .addPerson("www", 23)
//   .send({ from: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" });

// console.log(ZombieFactoryContract.methods.getPersons(), '---00-----')
