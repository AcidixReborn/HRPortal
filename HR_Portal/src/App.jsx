import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './assets/navBar.jsx';
import HomePage from './Pages/homePage.jsx';
import LoginPage from './Pages/loginPage.jsx';
import RegisterPage from './Pages/registerPage.jsx';
import Events from './Pages/eventsPage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container-fluid px-0">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
