import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  const handleGetUserId = async () => {
    try {
      const response = await axios.get(`/get-user-id/${email}`);
      setUserId(response.data._id);
    } catch (error) {
      console.error('Error fetching user ID:', error);
      // Handle error if needed
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleGetUserId}>Get User ID</button>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
};

export default MyComponent;
