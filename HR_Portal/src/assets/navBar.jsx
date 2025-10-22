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
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navBar">
      <div className="container-fluid">
        <div className="navbar-brand">{pageTitle}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {currentPath !== '/' && (
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            )}

            {!isLoggedIn && (
              <>
                {currentPath !== '/login' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                )}
                {currentPath !== '/signUpPage' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/signUp">Sign Up</Link>
                  </li>
                )}
              </>
            )}

            {isLoggedIn && (
              <>
                {currentPath !== '/events' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/events">Events</Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/hrpolicy">HR Policy</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ textDecoration: 'none' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
