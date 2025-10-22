import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roles from '../assets/Roles.js';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password && role) {
      const newUser = {
        name,
        email: email.toLowerCase(),
        role,
        password,
        approved: false, // <---- NEW: must be approved by HR
      };

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Check if email already exists
      const alreadyExists = existingUsers.some(u => u.email === newUser.email);
      if (alreadyExists) {
        alert('An account with this email already exists.');
        return;
      }

      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert(
        'Signup successful! Your account is pending HR approval. You will be able to log in once approved.'
      );

      navigate('/login');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Employee Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="signupName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="signupName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="signupEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signupRole" className="form-label">Select Role</label>
          <select
            id="signupRole"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Select a Role --</option>
            {roles.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {roleOption}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
