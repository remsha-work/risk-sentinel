// src/pages/LoginPage.js - CENTERED FORM
import React, { useState } from 'react';

export default function LoginPage({ navigate }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    alert('Login success! (API F9)');
  };

  return (
    <div className="centered-auth-wrapper">
      <div className="centered-auth-panel">
        <div className="auth-panel-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your Risk Sentinel account</p>
        </div>
        <form onSubmit={handleLogin} className="auth-form-centered">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin123@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="glass-btn primary full-width large">
            Sign In
          </button>
        </form>
        <div className="auth-footer">
          <button type="button" onClick={() => navigate('signup')} className="text-link">
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
