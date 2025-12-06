'use client';

import { useGameStore } from '@/store/useGameStore';

export default function FilterPanel() {
  const { filters, setFilters } = useGameStore();

  const powerTypes = ['empire', 'nation', 'organization', 'corporation', 'alliance'] as const;
  const eventTypes = ['war', 'treaty', 'revolution', 'election', 'assassination', 'discovery', 'founding', 'collapse', 'policy', 'economic', 'disaster'] as const;
  const impactLevels = ['minor', 'moderate', 'major', 'transformative'] as const;
  const visualAids = [
    { key: 'showElevation', label: 'Elevation' },
    { key: 'showEquator', label: 'Equator' },
    { key: 'showTropics', label: 'Tropics' },
    { key: 'showPolarCircles', label: 'Polar' },
    { key: 'showGraticules', label: 'Grid' },
  ];

  const toggle = (key: string) => setFilters({ [key]: !filters[key as keyof typeof filters] });
  
  const toggleArray = (key: 'powerTypes' | 'eventTypes' | 'impactLevels', value: string) => {
    const current = filters[key] as string[];
    setFilters({ [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] });
  };

  return (
    <div className="filter-panel">
      {/* Layer Toggles */}
      <section className="filter-section">
        <h4 className="filter-label">Layers</h4>
        <div className="toggle-grid">
          {[
            { key: 'showPowers', label: 'Powers' },
            { key: 'showEvents', label: 'Events' },
            { key: 'showPeople', label: 'People' },
            { key: 'showConnections', label: 'Links' },
          ].map(({ key, label }) => (
            <label key={key} className="toggle-row">
              <input 
                type="checkbox" 
                checked={!!filters[key as keyof typeof filters]}
                onChange={() => toggle(key)}
              />
              <span className="toggle-check" />
              <span className="toggle-label">{label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Power Types */}
      <section className="filter-section">
        <h4 className="filter-label">Power Types</h4>
        <div className="chip-wrap">
          {powerTypes.map(type => (
            <button
              key={type}
              onClick={() => toggleArray('powerTypes', type)}
              className={`filter-chip ${filters.powerTypes.includes(type) ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Event Types */}
      <section className="filter-section">
        <h4 className="filter-label">Event Types</h4>
        <div className="chip-wrap">
          {eventTypes.map(type => (
            <button
              key={type}
              onClick={() => toggleArray('eventTypes', type)}
              className={`filter-chip ${filters.eventTypes.includes(type) ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="filter-section">
        <h4 className="filter-label">Impact</h4>
        <div className="chip-wrap">
          {impactLevels.map(level => (
            <button
              key={level}
              onClick={() => toggleArray('impactLevels', level)}
              className={`filter-chip ${filters.impactLevels.includes(level) ? 'active' : ''}`}
            >
              {level}
            </button>
          ))}
        </div>
      </section>

      {/* Visual Aids */}
      <section className="filter-section">
        <h4 className="filter-label">Globe</h4>
        <div className="chip-wrap">
          {visualAids.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`filter-chip ${filters[key as keyof typeof filters] ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Reset */}
      <button 
        onClick={() => setFilters({
          showPowers: true, showEvents: true, showPeople: true, showConnections: true,
          powerTypes: [...powerTypes], eventTypes: [...eventTypes], impactLevels: [...impactLevels], tags: [],
          showElevation: true, showEquator: true, showTropics: true, showPolarCircles: true, showGraticules: true,
        })}
        className="reset-btn"
      >
        Reset
      </button>
    </div>
  );
}
