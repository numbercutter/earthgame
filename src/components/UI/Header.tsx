'use client';

import { useGameStore } from '@/store/useGameStore';
import { useState, useEffect } from 'react';

export default function Header() {
  const { currentYear, activePowers, activeEvents } = useGameStore();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  return (
    <header 
      className="h-14 flex items-center justify-between shrink-0 border-b glass-effect relative z-50"
      style={{ 
        borderColor: 'var(--theme-border-tertiary)',
        padding: '0 20px'
      }}
    >
      {/* Logo & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div 
          style={{ 
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--theme-accent-primary)',
            background: 'var(--theme-bg-tertiary)'
          }}
        >
          E
        </div>
        <div>
          <h1 style={{ 
            fontSize: '14px', 
            fontWeight: 600,
            color: 'var(--theme-text-primary)',
            margin: 0
          }}>
            Earth Game
          </h1>
          <p style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            color: 'var(--theme-text-tertiary)',
            margin: 0
          }}>
            Interactive History
          </p>
        </div>
      </div>

      {/* Center Stats Panel */}
      <div 
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '10px 20px',
          borderRadius: '10px',
          background: 'var(--theme-bg-card)',
          border: '1px solid var(--theme-border-tertiary)',
          boxShadow: 'var(--theme-shadow-card)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '14px', 
            fontWeight: 600, 
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--theme-text-primary)'
          }}>
            {activePowers.length}
          </div>
          <div style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            color: 'var(--theme-text-tertiary)'
          }}>
            Powers
          </div>
        </div>
        
        <div style={{ width: '1px', height: '32px', background: 'var(--theme-border-tertiary)' }} />
        
        <div style={{ textAlign: 'center', minWidth: '80px' }}>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: 600, 
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--theme-accent-primary)'
          }}>
            {formatYear(currentYear)}
          </div>
          <div style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            color: 'var(--theme-text-tertiary)'
          }}>
            Year
          </div>
        </div>
        
        <div style={{ width: '1px', height: '32px', background: 'var(--theme-border-tertiary)' }} />
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '14px', 
            fontWeight: 600, 
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--theme-text-primary)'
          }}>
            {activeEvents.length}
          </div>
          <div style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            color: 'var(--theme-text-tertiary)'
          }}>
            Events
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleTheme}
          className="tactile-button"
          title={isDark ? 'Light mode' : 'Dark mode'}
          style={{ width: '32px', height: '32px', padding: 0, fontSize: '11px' }}
        >
          {isDark ? 'L' : 'D'}
        </button>
        
        <div className="badge accent">Beta</div>
      </div>
    </header>
  );
}
