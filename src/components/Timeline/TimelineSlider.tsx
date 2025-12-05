'use client';

import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useGameStore } from '@/store/useGameStore';

const ERA_MARKERS = [
  { year: -3000, label: 'Bronze Age' },
  { year: -500, label: 'Classical' },
  { year: 476, label: 'Medieval' },
  { year: 1500, label: 'Renaissance' },
  { year: 1760, label: 'Industrial' },
  { year: 1914, label: 'Modern' },
  { year: 1945, label: 'Atomic' },
  { year: 1991, label: 'Digital' },
];

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
    activeEvents,
  } = useGameStore();

  // Playback timer
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        tick();
      }, 100 / playbackSpeed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, tick]);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value, 10));
  }, [setYear]);

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  const getSliderPercent = (year: number) => {
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  // Get events near current year for markers
  const recentEvents = activeEvents.filter(e => 
    Math.abs(e.date - currentYear) < 20 && e.impact === 'transformative'
  );

  if (!showTimeline) return null;

  return (
    <motion.div 
      className="timeline-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Year Display */}
      <div className="timeline-year-display">
        <motion.span 
          key={currentYear}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="timeline-year"
        >
          {formatYear(currentYear)}
        </motion.span>
      </div>

      {/* Controls */}
      <div className="timeline-controls">
        <button 
          className="timeline-btn"
          onClick={() => setYear(currentYear - 100)}
          title="Back 100 years"
        >
          ⏪
        </button>
        <button 
          className="timeline-btn"
          onClick={() => setYear(currentYear - 10)}
          title="Back 10 years"
        >
          ◀◀
        </button>
        <button 
          className="timeline-btn timeline-btn-play"
          onClick={togglePlayback}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button 
          className="timeline-btn"
          onClick={() => setYear(currentYear + 10)}
          title="Forward 10 years"
        >
          ▶▶
        </button>
        <button 
          className="timeline-btn"
          onClick={() => setYear(currentYear + 100)}
          title="Forward 100 years"
        >
          ⏩
        </button>
      </div>

      {/* Speed Control */}
      <div className="timeline-speed">
        <span>Speed:</span>
        {[1, 5, 10, 25].map(speed => (
          <button
            key={speed}
            className={`speed-btn ${playbackSpeed === speed ? 'active' : ''}`}
            onClick={() => setPlaybackSpeed(speed)}
          >
            {speed}x
          </button>
        ))}
      </div>

      {/* Slider Track */}
      <div className="timeline-track-container">
        {/* Era Markers */}
        <div className="era-markers">
          {ERA_MARKERS.map(era => (
            <div 
              key={era.year}
              className="era-marker"
              style={{ left: `${getSliderPercent(era.year)}%` }}
            >
              <span className="era-label">{era.label}</span>
              <span className="era-year">{formatYear(era.year)}</span>
            </div>
          ))}
        </div>

        {/* Event Markers */}
        <div className="event-markers">
          {recentEvents.map(event => (
            <motion.div
              key={event.id}
              className="event-marker"
              style={{ left: `${getSliderPercent(event.date)}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              title={event.name}
            />
          ))}
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={currentYear}
          onChange={handleSliderChange}
          className="timeline-slider"
        />

        {/* Progress Fill */}
        <div 
          className="timeline-progress"
          style={{ width: `${getSliderPercent(currentYear)}%` }}
        />
      </div>

      {/* Quick Jump */}
      <div className="quick-jump">
        <button onClick={() => setYear(-3000)} className="jump-btn">Ancient</button>
        <button onClick={() => setYear(0)} className="jump-btn">Year 0</button>
        <button onClick={() => setYear(1500)} className="jump-btn">1500</button>
        <button onClick={() => setYear(1900)} className="jump-btn">1900</button>
        <button onClick={() => setYear(2000)} className="jump-btn">2000</button>
        <button onClick={() => setYear(2024)} className="jump-btn">Now</button>
      </div>
    </motion.div>
  );
}

