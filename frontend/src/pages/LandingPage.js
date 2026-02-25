// src/pages/LandingPage.js - PERFECT CLEAN LANDING
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
        <div className="illustration-placeholder"></div>
      </div>
    </main>
  );
}
