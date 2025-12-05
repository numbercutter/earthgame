'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useGameStore } from '@/store/useGameStore';

export default function FilterPanel() {
  const { 
    filters, 
    setFilters, 
    showFilters,
    toggleFilters,
  } = useGameStore();

  const powerTypes = ['empire', 'nation', 'organization', 'corporation', 'alliance'] as const;
  const eventTypes = ['war', 'treaty', 'revolution', 'election', 'assassination', 'discovery', 'founding', 'collapse', 'policy', 'economic', 'disaster'] as const;
  const impactLevels = ['minor', 'moderate', 'major', 'transformative'] as const;

  const togglePowerType = (type: typeof powerTypes[number]) => {
    const current = filters.powerTypes;
    if (current.includes(type)) {
      setFilters({ powerTypes: current.filter(t => t !== type) });
    } else {
      setFilters({ powerTypes: [...current, type] });
    }
  };

  const toggleEventType = (type: typeof eventTypes[number]) => {
    const current = filters.eventTypes;
    if (current.includes(type)) {
      setFilters({ eventTypes: current.filter(t => t !== type) });
    } else {
      setFilters({ eventTypes: [...current, type] });
    }
  };

  const toggleImpact = (level: typeof impactLevels[number]) => {
    const current = filters.impactLevels;
    if (current.includes(level)) {
      setFilters({ impactLevels: current.filter(l => l !== level) });
    } else {
      setFilters({ impactLevels: [...current, level] });
    }
  };

  return (
    <>
      <button 
        className="filter-toggle"
        onClick={toggleFilters}
        title="Toggle Filters"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </button>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="filter-panel"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <h3>Filters</h3>

            <div className="filter-section">
              <h4>Display</h4>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.showPowers}
                  onChange={() => setFilters({ showPowers: !filters.showPowers })}
                />
                <span className="checkmark" />
                Powers
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.showEvents}
                  onChange={() => setFilters({ showEvents: !filters.showEvents })}
                />
                <span className="checkmark" />
                Events
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.showPeople}
                  onChange={() => setFilters({ showPeople: !filters.showPeople })}
                />
                <span className="checkmark" />
                People
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.showConnections}
                  onChange={() => setFilters({ showConnections: !filters.showConnections })}
                />
                <span className="checkmark" />
                Connections
              </label>
            </div>

            <div className="filter-section">
              <h4>Power Types</h4>
              <div className="filter-chips">
                {powerTypes.map(type => (
                  <button
                    key={type}
                    className={`filter-chip ${filters.powerTypes.includes(type) ? 'active' : ''}`}
                    onClick={() => togglePowerType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Event Types</h4>
              <div className="filter-chips">
                {eventTypes.map(type => (
                  <button
                    key={type}
                    className={`filter-chip ${filters.eventTypes.includes(type) ? 'active' : ''}`}
                    onClick={() => toggleEventType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Impact Level</h4>
              <div className="filter-chips">
                {impactLevels.map(level => (
                  <button
                    key={level}
                    className={`filter-chip impact-${level} ${filters.impactLevels.includes(level) ? 'active' : ''}`}
                    onClick={() => toggleImpact(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="reset-filters"
              onClick={() => setFilters({
                showPowers: true,
                showEvents: true,
                showPeople: true,
                showConnections: true,
                powerTypes: [...powerTypes],
                eventTypes: [...eventTypes],
                impactLevels: [...impactLevels],
                tags: [],
              })}
            >
              Reset All
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

