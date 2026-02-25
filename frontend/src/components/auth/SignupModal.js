// src/components/auth/SignupModal.js
import React, { useState } from 'react';
export default function SignupModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1=Email, 2=OTP, 3=Complete
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('PM');

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setStep(1);
      setEmail('');
      setOtp(['', '', '', '', '', '']);
      setPassword('');
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    setStep(2); // Go to OTP
    // TODO: POST /api/send-otp/
    console.log('Send OTP to:', email);
  };

  const handleOtpChange = (index, value) => {
    if (/[0-9]/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      setStep(3); // Go to Complete
      console.log('Verify OTP:', otpCode);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Final signup:', { email, password, role });
    // TODO: POST /api/register/
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{step === 1 ? 'Get Started' : step === 2 ? 'Verify Email' : 'Create Account'}</h2>
          <button onClick={onClose} className="modal-close">&times;</button>
        </div>

        {step === 1 && (
          <form onSubmit={handleGetStarted} className="modal-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
              />
            </div>
            <button type="submit" className="glass-btn primary full-width">
              Continue
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="modal-form">
            <p>We've sent a 6-digit code to {email}</p>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="otp-input"
                  autoFocus={index === 0}
                />
              ))}
            </div>
            <div className="timer">01:00</div>
            <button type="submit" className="glass-btn primary full-width" disabled={otp.join('').length !== 6}>
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSignup} className="modal-form">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create strong password"
                required
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="PM">Project Manager</option>
                <option value="Risk Analyst">Risk Analyst</option>
                <option value="Admin">Admin</option>
                <option value="TL">Team Lead</option>
              </select>
            </div>
            <button type="submit" className="glass-btn primary full-width">
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
