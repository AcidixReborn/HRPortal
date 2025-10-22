import React, { useState, useEffect } from 'react';

export default function HRApprovalPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleApprove = (email) => {
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, approved: true } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert(`Approved ${email}`);
  };

  const pendingUsers = users.filter((user) => !user.approved);

  return (
    <div className="container mt-5">
      <h2>Pending Approvals</h2>
      {pendingUsers.length === 0 ? (
        <p>No pending users.</p>
      ) : (
        <ul className="list-group">
          {pendingUsers.map((user) => (
            <li
              key={user.email}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {user.name} ({user.role})
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleApprove(user.email)}
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
