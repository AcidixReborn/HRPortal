import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './assets/navBar.jsx';
import HomePage from './Pages/homePage.jsx';
import LoginPage from './Pages/loginPage.jsx';
import SignUpPage from './Pages/signUpPage.jsx';
import EventsPage from './Pages/eventsPage.jsx';
import HRPolicy from './Pages/HRPolicy.jsx';
import EmployeePolicy from './Pages/employeePolicy.jsx';
import HRApprovalPage from './Pages/HRApprovalPage.jsx';
import AuthContextProvider, { AuthContext } from './assets/AuthContext.jsx';


function App() {
  useEffect(() => {
    const hrUser = {
      name: "HR Admin",
      email: "test@yahoo.com",
      role: "human resources",
      password: "Test",
      approved: true
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (!users.some(u => u.email === hrUser.email)) {
      users.push(hrUser);
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Seeded HR user');
    }
  }, []);

  return (
    <AuthContextProvider>
      <div className="container-fluid px-0">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/hr-policy" element={<HRPolicy />} />
          <Route path="/employee-policy" element={<EmployeePolicy />} />
          <Route path="/hr-approval" element={<HRApprovalPage />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
