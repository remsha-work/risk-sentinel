// src/App.js
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage navigate={navigate} />}
      {currentPage === 'signup' && <SignupPage navigate={navigate} />}
      {currentPage === 'login' && <LoginPage navigate={navigate} />}
    </div>
  );
}

export default App;
