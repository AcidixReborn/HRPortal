import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

export function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const pageTitle =
    currentPath === '/'
      ? 'HOME'
      : currentPath
        .slice(1)
        .replace(/-/g, ' ')
        .toUpperCase();

  const isHR = ["hr", "human resources"].includes(user?.role?.toLowerCase());

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navBar">
      <div className="container-fluid">
        {/* Navbar Header */}
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

            {!user && (
              <>
                {currentPath !== '/login' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                )}
                {currentPath !== '/signup' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                )}
              </>
            )}

            {user && (
              <>
                {currentPath !== '/events' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/events">Events</Link>
                  </li>
                )}
                {currentPath !== '/hr-policy' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/hr-policy">HR Policy</Link>
                  </li>
                )}
                {currentPath !== '/employee-policy' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/employee-policy">Employee Policy</Link>
                  </li>
                )}
                {isHR && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/hr-approval">HR Approval</Link>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ textDecoration: 'none' }}
                    onClick={logout}
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
