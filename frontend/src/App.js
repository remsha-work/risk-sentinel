import React, { useState } from 'react';
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
      {/* Navbar temporarily removed for Phase 1 */}
      {currentPage === 'landing' && <LandingPage navigate={navigate} />}
      {currentPage === 'login' && <LoginPage navigate={navigate} />}
      {currentPage === 'signup' && <SignupPage navigate={navigate} />}
    </div>
  );
}

export default App;
