import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './assets/navBar.jsx';
import HomePage from './Pages/homePage.jsx';
import LoginPage from './Pages/loginPage.jsx';
import SignUpPage from './Pages/signUpPage.jsx';
import Events from './Pages/eventsPage.jsx';
import EventsPage from './Pages/eventsPage.jsx'; 
import HRPolicy from './Pages/HRPolicy.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser'); 
  };

  return (
    <div className="container-fluid px-0">
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/hrpolicy" element={<HRPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
