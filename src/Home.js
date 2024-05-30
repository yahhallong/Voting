import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  useEffect(() => {
    if (!userId) {
      const newId = require('uuid').v4(); // Generate a new UUID
      localStorage.setItem('userId', newId); // Store it in local storage
      setUserId(newId); // Set it in the state
    }
  }, [userId]);

  return (
    <div>
      <h1>Welcome to the Voting App</h1>
      <p>Your unique ID: {userId}</p>
      <Link to="/vote">Go to Vote</Link>
    </div>
  );
}

export default Home;
