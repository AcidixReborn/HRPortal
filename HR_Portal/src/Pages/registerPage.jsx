import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roles from '../assets/Roles.js';

const RegisterPage = () => {
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
        password
      };

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      existingUsers.push(newUser);

      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert(`Registered successfully as ${role}!`);
      navigate('/login');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="registerName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="registerName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerRole" className="form-label">Select Role</label>
          <select
            id="registerRole"
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

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
