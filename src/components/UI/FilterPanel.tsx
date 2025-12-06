'use client';

import { useGameStore } from '@/store/useGameStore';

export default function FilterPanel() {
  const { filters, setFilters } = useGameStore();

  const powerTypes = ['empire', 'nation', 'organization', 'corporation', 'alliance'] as const;
  const eventTypes = ['war', 'treaty', 'revolution', 'election', 'assassination', 'discovery', 'founding', 'collapse', 'policy', 'economic', 'disaster'] as const;
  const impactLevels = ['minor', 'moderate', 'major', 'transformative'] as const;

  const togglePowerType = (type: typeof powerTypes[number]) => {
    const current = filters.powerTypes;
    setFilters({ powerTypes: current.includes(type) ? current.filter(t => t !== type) : [...current, type] });
  };

  const toggleEventType = (type: typeof eventTypes[number]) => {
    const current = filters.eventTypes;
    setFilters({ eventTypes: current.includes(type) ? current.filter(t => t !== type) : [...current, type] });
  };

  const toggleImpact = (level: typeof impactLevels[number]) => {
    const current = filters.impactLevels;
    setFilters({ impactLevels: current.includes(level) ? current.filter(l => l !== level) : [...current, level] });
  };

  const impactColors: Record<string, { bg: string; text: string; border: string }> = {
    minor: { bg: 'rgba(160, 160, 160, 0.15)', text: 'var(--theme-text-tertiary)', border: 'rgba(160, 160, 160, 0.3)' },
    moderate: { bg: 'rgba(99, 102, 241, 0.15)', text: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
    major: { bg: 'rgba(251, 146, 60, 0.15)', text: '#fb923c', border: 'rgba(251, 146, 60, 0.3)' },
    transformative: { bg: 'rgba(168, 85, 247, 0.15)', text: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
  };

  return (
    <div>
      {/* Display Toggles */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="section-header">Display</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { key: 'showPowers', label: 'Powers' },
            { key: 'showEvents', label: 'Events' },
            { key: 'showPeople', label: 'People' },
            { key: 'showConnections', label: 'Connections' },
          ].map(({ key, label }) => (
            <label 
              key={key} 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                background: filters[key as keyof typeof filters] 
                  ? 'rgba(6, 182, 212, 0.08)' 
                  : 'transparent',
                transition: 'background 100ms ease'
              }}
            >
              <div 
                style={{ 
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: filters[key as keyof typeof filters] 
                    ? 'var(--theme-accent-primary)' 
                    : 'var(--theme-bg-button)',
                  color: filters[key as keyof typeof filters] 
                    ? 'white' 
                    : 'transparent',
                  border: filters[key as keyof typeof filters]
                    ? 'none'
                    : '1px solid var(--theme-border-secondary)',
                  transition: 'all 100ms ease'
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>
                {label}
              </span>
              <input 
                type="checkbox" 
                checked={!!filters[key as keyof typeof filters]}
                onChange={() => setFilters({ [key]: !filters[key as keyof typeof filters] })}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Power Types */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="section-header">Power Types</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {powerTypes.map(type => (
            <button
              key={type}
              onClick={() => togglePowerType(type)}
              className={`chip ${filters.powerTypes.includes(type) ? 'active' : ''}`}
              style={{ textTransform: 'capitalize' }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Event Types */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="section-header">Event Types</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {eventTypes.map(type => (
            <button
              key={type}
              onClick={() => toggleEventType(type)}
              className={`chip ${filters.eventTypes.includes(type) ? 'active' : ''}`}
              style={{ textTransform: 'capitalize' }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Impact Level */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="section-header">Impact Level</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {impactLevels.map(level => {
            const isActive = filters.impactLevels.includes(level);
            const colors = impactColors[level];
            return (
              <button
                key={level}
                onClick={() => toggleImpact(level)}
                className="chip"
                style={isActive ? {
                  textTransform: 'capitalize',
                  background: colors.bg,
                  color: colors.text,
                  borderColor: colors.border
                } : { textTransform: 'capitalize' }}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>

      <div className="divider" />

      {/* Reset Button */}
      <button 
        onClick={() => setFilters({
          showPowers: true, showEvents: true, showPeople: true, showConnections: true,
          powerTypes: [...powerTypes], eventTypes: [...eventTypes], impactLevels: [...impactLevels], tags: [],
        })}
        className="primary-button"
        style={{ width: '100%' }}
      >
        Reset All Filters
      </button>
    </div>
  );
}
