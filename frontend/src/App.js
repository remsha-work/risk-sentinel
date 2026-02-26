// src/App.js - WORKS WITH YOUR PERFECT LOGIN
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar />
      {currentPage === 'landing' && <LandingPage navigate={navigate} />}
      {currentPage === 'login' && <LoginPage navigate={navigate} />}
      {currentPage === 'signup' && <SignupPage navigate={navigate} />}
    </div>
  );
}

export default App;
