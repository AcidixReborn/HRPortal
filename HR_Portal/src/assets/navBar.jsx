import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function NavBar({ isLoggedIn, handleLogout }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle =
    currentPath === '/'
      ? 'Home'
      : currentPath.slice(1).charAt(0).toUpperCase() + currentPath.slice(2);
  return (
    <nav className="navbar sticky-top" id="navBar">
      <div className="container-fluid">
        <div className="navbar-brand">{pageTitle}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-link active" aria-current="page">
              {!isLoggedIn && <Link to="/login" className="nav-link active" aria-current="page">Login</Link>}
              {isLoggedIn && (
                <button onClick={handleLogout} className="nav-link active" aria-current="page">
                  Logout
                </button>
              )}
            </li>
            <li className="nav-item">
              {!isLoggedIn && <Link to="/register" className="nav-link active" aria-current="page">Register</Link>}
            </li>
            <li className="nav-item">
               {isLoggedIn && <Link to="/events" className="nav-link active" aria-current="page">Events</Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}