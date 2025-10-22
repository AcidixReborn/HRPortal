import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../assets/AuthContext.jsx'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchingUser = storedUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (matchingUser) {
      if (!matchingUser.approved) {
        setErrorMessage(
          'Your account is pending HR approval. Please wait for approval before logging in.'
        );
        return;
      }

      login(matchingUser); 
      setErrorMessage('');

      if (matchingUser.role.toLowerCase() === 'human resources') {
        navigate('/hr-approval'); 
      } else {
        navigate('/events'); 
      }

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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
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
