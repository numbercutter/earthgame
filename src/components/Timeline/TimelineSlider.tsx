'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useGameStore } from '@/store/useGameStore';

function getEraForYear(year: number): string {
  if (year < -500) return 'Ancient Era';
  if (year < 500) return 'Classical Era';
  if (year < 1500) return 'Medieval Era';
  if (year < 1800) return 'Early Modern';
  if (year < 1945) return 'Industrial Era';
  if (year < 2000) return 'Modern Era';
  return 'Digital Era';
}

export default function TimelineSlider() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const {
    currentYear,
    minYear,
    maxYear,
    isPlaying,
    playbackSpeed,
    setYear,
    togglePlayback,
    setPlaybackSpeed,
    tick,
    showTimeline,
  } = useGameStore();

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => tick(), 100 / playbackSpeed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying, playbackSpeed, tick]);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value, 10));
  }, [setYear]);

  const formatYear = (year: number) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  if (!showTimeline) return null;

  return (
    <div 
      className="shrink-0 border-t glass-effect"
      style={{ 
        borderColor: 'var(--theme-border-tertiary)',
        padding: '16px 20px'
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        {/* Year Display */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
          <span style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--theme-accent-primary)'
          }}>
            {formatYear(currentYear)}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--theme-text-tertiary)' }}>
            {getEraForYear(currentYear)}
          </span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button 
            onClick={() => setYear(currentYear - 100)}
            className="tactile-button"
            title="-100 years"
            style={{ width: '32px', height: '32px', padding: 0, fontSize: '12px' }}
          >
            ««
          </button>
          <button 
            onClick={() => setYear(currentYear - 10)}
            className="tactile-button"
            title="-10 years"
            style={{ width: '32px', height: '32px', padding: 0, fontSize: '12px' }}
          >
            «
          </button>
          
          <button 
            onClick={togglePlayback}
            className="primary-button"
            style={{ width: '40px', height: '32px', padding: 0, fontSize: '12px', margin: '0 4px' }}
          >
            {isPlaying ? '||' : '▶'}
          </button>
          
          <button 
            onClick={() => setYear(currentYear + 10)}
            className="tactile-button"
            title="+10 years"
            style={{ width: '32px', height: '32px', padding: 0, fontSize: '12px' }}
          >
            »
          </button>
          <button 
            onClick={() => setYear(currentYear + 100)}
            className="tactile-button"
            title="+100 years"
            style={{ width: '32px', height: '32px', padding: 0, fontSize: '12px' }}
          >
            »»
          </button>
          
          {/* Speed Controls */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            marginLeft: '12px',
            paddingLeft: '12px',
            borderLeft: '1px solid var(--theme-border-tertiary)'
          }}>
            <span style={{ fontSize: '11px', color: 'var(--theme-text-tertiary)', marginRight: '4px' }}>Speed</span>
            {[1, 5, 10, 25].map(speed => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`chip ${playbackSpeed === speed ? 'active' : ''}`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Track */}
      <div style={{ padding: '8px 0' }}>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={currentYear}
          onChange={handleSliderChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Quick Jump Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        {[
          { label: 'Ancient', year: -3000 },
          { label: 'Year 0', year: 0 },
          { label: '1500', year: 1500 },
          { label: '1900', year: 1900 },
          { label: '2000', year: 2000 },
          { label: 'Now', year: 2024 },
        ].map(({ label, year }) => (
          <button
            key={year}
            onClick={() => setYear(year)}
            className="secondary-button"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
