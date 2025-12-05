'use client';

import { motion } from 'motion/react';
import { useGameStore } from '@/store/useGameStore';

export default function Header() {
  const { currentYear, activePowers, activeEvents } = useGameStore();

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  return (
    <motion.header 
      className="app-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">🌍</span>
          <h1>EARTH GAME</h1>
        </div>
        <p className="tagline">A True History of Powers & Events</p>
      </div>

      <div className="header-center">
        <div className="current-stats">
          <div className="stat">
            <span className="stat-value">{activePowers.length}</span>
            <span className="stat-label">Active Powers</span>
          </div>
          <div className="stat highlight">
            <span className="stat-value">{formatYear(currentYear)}</span>
            <span className="stat-label">Current Year</span>
          </div>
          <div className="stat">
            <span className="stat-value">{activeEvents.length}</span>
            <span className="stat-label">Events</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="header-link"
          title="Contribute Data"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <button className="header-btn" title="About">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </button>
      </div>
    </motion.header>
  );
}

