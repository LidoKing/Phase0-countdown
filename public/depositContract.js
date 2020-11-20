const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/439a1d8b414d44cfbac103d6bb51dac5'));

const _amount = document.getElementById('current');
const _percentage = document.getElementById('percentage');
const _progress = document.getElementById('progress');

/*
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"pubkey","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"withdrawal_credentials","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"amount","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"signature","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"index","type":"bytes"}],"name":"DepositEvent","type":"event"},{"inputs":[{"internalType":"bytes","name":"pubkey","type":"bytes"},{"internalType":"bytes","name":"withdrawal_credentials","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"bytes32","name":"deposit_data_root","type":"bytes32"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"get_deposit_count","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_deposit_root","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}];
const ADDRESS = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

// Instantiate contract
const contract = new Web3.eth.Contract(ABI, ADDRESS);
*/

let amount;
let percentage;
let target = 524288;

async function updateAmount() {
  await web3.eth.getBalance('0x00000000219ab540356cBB839Cbe05303d7705Fa', (err, resultInWei) => {
    if (err) {
      console.log(err);
    } else {
      resultInEth = web3.utils.fromWei(resultInWei, 'ether');
      amount = resultInEth;
      percentage = Math.round(amount / target * 100);
    }
  });

  _amount.innerText = amount;
  _percentage.innerText = percentage + '%';
  _progress.style.width = `${percentage}%`
}

updateAmount();
setInterval(updateAmount, 1000);
