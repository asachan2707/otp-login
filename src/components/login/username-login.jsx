import React, { useState } from 'react';
import './login.css';

const UserNameLogin = ({ onChangeLoginMode = () => { } }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (<>
    <h2>Login with Email</h2>
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      className="input-login"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      className="input-login"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    <button className="mode" onClick={onChangeLoginMode}>Phone Login</button>
  </>
  );
};

export default UserNameLogin;
