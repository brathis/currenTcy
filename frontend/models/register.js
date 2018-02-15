const contract = require('truffle-contract');
const json = require('../../build/contracts/Token.json');

export default class Register {
  constructor() {
    // load Token contract ABI
    const token = contract({ abi: json.abi });
    token.setProvider(web3.currentProvider);
    // connect to contract on blockchain
    token.at(window.contractAddress).then((instance) => {
      this.contract = instance;
    });
  }

  static register() {
    const meterAddress = document.getElementById('address').value;
    this.contract.regSmartMeter(meterAddress, { from: window.currentAccount }).then(() => {
      window.alert('Smart meter registered');
    });
  }

  static unregister() {
    const meterAddress = document.getElementById('address').value;
    this.contract.unregSmartMeter(meterAddress, { from: window.currentAccount }).then(() => {
      window.alert('Smart meter unregistered');
    });
  }
}