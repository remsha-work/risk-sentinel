// src/components/Navbar.js - ENTERPRISE STICKY NAVBAR
import React, { useState } from 'react';
import './Navbar.css'; // Global styles already have glassmorphism base

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <h2>Risk Sentinel</h2>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>

        {/* User Menu */}
        <div className="nav-user" onClick={toggleUserMenu}>
          <div className="user-avatar">RS</div>
          {userMenuOpen && (
            <ul className="user-dropdown">
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
