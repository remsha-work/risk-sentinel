// src/pages/LandingPage.js - WITH STUNNING CSS ILLUSTRATION
import React from 'react';

export default function LandingPage({ navigate }) {
  return (
    <main className="hero-section-enhanced">
      <div className="hero-left">
        <h1 className="hero-title-large">
          Risk Sentinel
          <span className="gradient-text">Enterprise</span>
          <br />
          Risk Management
        </h1>
        <p className="hero-subtitle-large">
          Proactive risk identification, assessment, 
          and mitigation for enterprise projects
        </p>
        <div className="hero-buttons-large">
          <button className="glass-btn primary large" onClick={() => navigate('signup')}>
            Get Started Free
          </button>
          <button className="glass-btn secondary large" onClick={() => navigate('login')}>
            Login Now
          </button>
        </div>
      </div>
      <div className="hero-right">
        <div className="dashboard-illustration">
          <div className="chart-bar"></div>
          <div className="chart-line"></div>
          <div className="risk-metrics">
            <div className="metric high"></div>
            <div className="metric medium"></div>
            <div className="metric low"></div>
          </div>
          <div className="dashboard-card"></div>
          <div className="sidebar"></div>
          <div className="glow-effect"></div>
        </div>
      </div>
    </main>
  );
}
