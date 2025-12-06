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

  const formatYear = (year: number) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  return (
    <header 
      className="flex items-center justify-between shrink-0 border-b glass-effect relative z-50"
      style={{ 
        height: '48px',
        borderColor: 'var(--theme-border-tertiary)',
        padding: '0 16px'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div 
          style={{ 
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--theme-accent-primary)',
            background: 'var(--theme-bg-tertiary)'
          }}
        >
          E
        </div>
        <div>
          <h1 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--theme-text-primary)', margin: 0, lineHeight: 1.2 }}>
            Earth Game
          </h1>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--theme-text-tertiary)', margin: 0 }}>
            Interactive History
          </p>
        </div>
      </div>

      {/* Center Stats */}
      <div 
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '6px 14px',
          borderRadius: '6px',
          background: 'var(--theme-bg-card)',
          border: '1px solid var(--theme-border-tertiary)',
          boxShadow: 'var(--theme-shadow-card)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--theme-text-primary)' }}>
            {activePowers.length}
          </div>
          <div style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--theme-text-tertiary)' }}>
            Powers
          </div>
        </div>
        
        <div style={{ width: '1px', height: '24px', background: 'var(--theme-border-tertiary)' }} />
        
        <div style={{ textAlign: 'center', minWidth: '70px' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--theme-accent-primary)' }}>
            {formatYear(currentYear)}
          </div>
          <div style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--theme-text-tertiary)' }}>
            Year
          </div>
        </div>
        
        <div style={{ width: '1px', height: '24px', background: 'var(--theme-border-tertiary)' }} />
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--theme-text-primary)' }}>
            {activeEvents.length}
          </div>
          <div style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--theme-text-tertiary)' }}>
            Events
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={toggleTheme}
          style={{ 
            width: '28px', 
            height: '28px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 500,
            background: 'var(--theme-bg-button)',
            color: 'var(--theme-text-secondary)',
            border: '1px solid var(--theme-border-secondary)',
            cursor: 'pointer'
          }}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? 'L' : 'D'}
        </button>
        
        <span 
          style={{ 
            padding: '3px 6px',
            borderRadius: '4px',
            fontSize: '9px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            background: 'rgba(6, 182, 212, 0.1)',
            color: 'var(--theme-accent-primary)'
          }}
        >
          Beta
        </span>
      </div>
    </header>
  );
}
