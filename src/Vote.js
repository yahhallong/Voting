import React from 'react';
import { Link } from 'react-router-dom';

function Vote() {
  return (
    <div>
      <h1>Vote Here</h1>
      <p>Place your vote on various issues.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default Vote;
