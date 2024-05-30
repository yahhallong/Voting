import React, { useState, useEffect } from 'react';
import web3 from './web3';
import voting from './Voting';

function App() {
  const [account, setAccount] = useState('');
  const [candidate, setCandidate] = useState('');
  const [votes, setVotes] = useState(0);
  const [message, setMessage] = useState('');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const load = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      // Load candidates
      const candidateList = await voting.methods.getCandidates().call();
      setCandidates(candidateList);
    };

    load();
  }, []);

  const vote = async () => {
    setMessage('Waiting on transaction success...');

    await voting.methods.voteForCandidate(candidate).send({
      from: account
    });

    setMessage(`You have voted for ${candidate}!`);
  };

  const getVotes = async () => {
    const voteCount = await voting.methods.getVotes(candidate).call();
    setVotes(voteCount);
  };

  return (
    <div>
      <h2>Voting DApp</h2>
      <p>Your account: {account}</p>

      <h3>Vote for a Candidate</h3>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate}>
            {candidate} <button onClick={() => setCandidate(candidate)}>Select</button>
          </li>
        ))}
      </ul>
      <button onClick={vote}>Vote</button>
      <h2>{message}</h2>

      <h3>Check Votes</h3>
      <button onClick={getVotes}>Get Votes</button>
      <p>Votes for {candidate}: {votes}</p>
    </div>
  );
}

export default App;
