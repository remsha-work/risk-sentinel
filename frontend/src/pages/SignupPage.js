// src/pages/SignupPage.js - CENTERED ENTERPRISE FORM
import React, { useState } from 'react';

export default function SignupPage({ navigate }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    enterprise: '', username: '', email: '', password: '', role: 'PM'
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleGetOTP = (e) => {
    e.preventDefault();
    setStep(2);
    console.log('Send OTP to:', formData.email);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', formData);
    alert('Account created! (API F9)');
    navigate('login');
  };

  return (
    <div className="centered-auth-wrapper">
      <div className="centered-auth-panel">
        <div className="auth-panel-header">
          <h1>Create Account</h1>
          <p>Join Risk Sentinel Enterprise</p>
        </div>

        {step === 1 && (
          <form onSubmit={handleGetOTP} className="auth-form-centered">
            <div className="form-group">
              <label>Enterprise Name</label>
              <input name="enterprise" placeholder="Your company name" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input name="username" placeholder="Work username" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="work@company.com" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create strong password" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select name="role" onChange={handleInputChange} value={formData.role}>
                <option value="PM">Project Manager</option>
                <option value="Risk Analyst">Risk Analyst</option>
                <option value="Admin">Admin</option>
                <option value="TL">Team Lead</option>
              </select>
            </div>
            <button type="submit" className="glass-btn primary full-width large">Get OTP</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="auth-form-centered">
            <p className="otp-message">OTP sent to <strong>{formData.email}</strong></p>
            <div className="otp-container-large">
              <input className="otp-input-large" maxLength={1} />
              <input className="otp-input-large" maxLength={1} />
              <input className="otp-input-large" maxLength={1} />
              <input className="otp-input-large" maxLength={1} />
              <input className="otp-input-large" maxLength={1} />
              <input className="otp-input-large" maxLength={1} />
            </div>
            <button type="submit" className="glass-btn primary full-width large">Verify OTP</button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleRegister} className="auth-form-centered">
            <p className="success-message">✅ Email verified! Ready to create account.</p>
            <button type="submit" className="glass-btn primary full-width large">Create Account</button>
          </form>
        )}

        <div className="auth-footer">
          <button type="button" onClick={() => navigate('login')} className="text-link">
            Already have account? Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
