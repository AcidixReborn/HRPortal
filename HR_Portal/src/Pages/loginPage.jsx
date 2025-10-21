import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchingUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify(matchingUser));
      setErrorMessage('');
      navigate('/events');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder="test@yahoo for testing purposes"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password for testing is Test"
            required
          />
        </div>

        {errorMessage && (
          <div className="text-danger mb-3">
            {errorMessage}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
