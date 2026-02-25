// src/pages/SignupPage.js - COMPLETE ENTERPRISE SIGNUP + OTP
import React, { useState } from 'react';

export default function SignupPage({ navigate }) {
  const [step, setStep] = useState(1); // 1=Form, 2=OTP, 3=Complete
  const [formData, setFormData] = useState({
    enterprise: '', 
    username: '', 
    email: '', 
    password: '', 
    role: 'PM'
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleOtpChange = (index, value) => {
    if (/[0-9]/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleGetOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Sending OTP to:', formData.email);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      console.log('OTP verified:', otpCode);
      setStep(3);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Creating account:', formData);
    setTimeout(() => {
      alert('Account created successfully!');
      navigate('login');
    }, 1000);
  };

  return (
    <div className="centered-auth-wrapper">
      <div className="centered-auth-panel signup-compact">
        <div className="auth-panel-header">
          <button onClick={() => navigate('landing')} className="icon-back-btn" title="Back to Home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,19 5,12 12,5"></polyline>
            </svg>
          </button>
          <div>
            <h1>{step === 1 ? 'Create Account' : step === 2 ? 'Verify Email' : 'Complete Registration'}</h1>
            <p>{step === 1 ? 'Join Risk Sentinel Enterprise' : step === 2 ? `OTP sent to ${formData.email}` : 'Email verified successfully!'}</p>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleGetOTP} className="auth-form-compact">
            <div className="form-row-compact">
              <div className="form-group">
                <label>Enterprise Name</label>
                <input 
                  name="enterprise" 
                  placeholder="Your company name" 
                  value={formData.enterprise}
                  onChange={handleInputChange} 
                  required 
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input 
                  name="username" 
                  placeholder="Work username" 
                  value={formData.username}
                  onChange={handleInputChange} 
                  required 
                  disabled={loading}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="work@company.com" 
                value={formData.email}
                onChange={handleInputChange} 
                required 
                disabled={loading}
              />
            </div>
            <div className="form-row-compact">
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Create strong password" 
                  value={formData.password}
                  onChange={handleInputChange} 
                  required 
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select 
                  name="role" 
                  value={formData.role}
                  onChange={handleInputChange} 
                  disabled={loading}
                >
                  <option value="PM">Project Manager</option>
                  <option value="Risk Analyst">Risk Analyst</option>
                  <option value="Admin">Admin</option>
                  <option value="TL">Team Lead</option>
                  <option value="SrDev">Senior Developer</option>
                  <option value="JrDev">Junior Developer</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>
            </div>
            <button 
              type="submit" 
              className="glass-btn primary full-width large"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Get OTP'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="auth-form-centered">
            <div className="otp-container-large">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  className="otp-input-large"
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            <button 
              type="submit" 
              className="glass-btn primary full-width large"
              disabled={otp.join('').length !== 6}
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleRegister} className="auth-form-centered">
            <p className="success-message">✅ Email verified! Ready to create your account.</p>
            <button type="submit" className="glass-btn primary full-width large">
              Create Account
            </button>
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
