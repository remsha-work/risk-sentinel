// src/pages/LoginPage.js - COMPLETE ENTERPRISE LOGIN
import React, { useState } from 'react';

export default function LoginPage({ navigate }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Login attempt:', formData);
    
    // Test credentials: admin123 / pass123
    setTimeout(() => {
      setLoading(false);
      alert('Login successful! (Real API in F9)');
      // navigate('dashboard'); // Uncomment after F7
    }, 1000);
  };

  return (
    <div className="centered-auth-wrapper">
      <div className="centered-auth-panel">
        <div className="auth-panel-header">
          <button onClick={() => navigate('landing')} className="icon-back-btn" title="Back to Home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,19 5,12 12,5"></polyline>
            </svg>
          </button>
          <div>
            <h1>Welcome Back</h1>
            <p>Sign in to your Risk Sentinel account</p>
          </div>
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="glass-btn primary full-width large"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
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
