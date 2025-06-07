
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from Express backend
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>React + Express on AWS Amplify</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
