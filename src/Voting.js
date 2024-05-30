import web3 from './web3';
import Voting from '/Users/admin/voting-app/src/Voting.js'; // Adjust the path if necessary

const address = '0x2D6f0e1982E40BeE192DA43826d97A36099751A4'; // Replace with your contract's deployed address
const instance = new web3.eth.Contract(
  Voting.abi,
  address
);

export default instance;
