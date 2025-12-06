'use client';

import { useState, useEffect, useCallback } from 'react';
import { useGameStore } from '@/store/useGameStore';
import { powers, people, events, connections } from '@/data/historical-data';

type EntityRef = { id: string; type: 'power' | 'person' | 'event'; name: string };

export default function InfoPanel() {
  const { selectedEntity, selectEntity, setYear } = useGameStore();
  const [history, setHistory] = useState<EntityRef[]>([]);

  const formatYear = (year: number) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  const getEntityName = (id: string, type: string): string => {
    if (type === 'power') return powers.find(p => p.id === id)?.name || 'Unknown';
    if (type === 'person') return people.find(p => p.id === id)?.name || 'Unknown';
    if (type === 'event') return events.find(e => e.id === id)?.name || 'Unknown';
    return 'Unknown';
  };

  const getEntityData = () => {
    if (!selectedEntity) return null;
    switch (selectedEntity.type) {
      case 'power': return { type: 'power' as const, data: powers.find(p => p.id === selectedEntity.id) };
      case 'person': return { type: 'person' as const, data: people.find(p => p.id === selectedEntity.id) };
      case 'event': return { type: 'event' as const, data: events.find(e => e.id === selectedEntity.id) };
      default: return null;
    }
  };

  const entity = getEntityData();

  // Navigate to a new entity (adds to history)
  const navigateTo = useCallback((ref: { id: string; type: 'power' | 'person' | 'event' }) => {
    if (selectedEntity) {
      const currentName = getEntityName(selectedEntity.id, selectedEntity.type);
      setHistory(prev => [...prev, { ...selectedEntity, name: currentName }]);
    }
    selectEntity(ref);
  }, [selectedEntity, selectEntity]);

  // Navigate back to a specific point in history
  const navigateToHistoryIndex = useCallback((index: number) => {
    const target = history[index];
    setHistory(prev => prev.slice(0, index));
    selectEntity({ id: target.id, type: target.type });
  }, [history, selectEntity]);

  // Clear selection and history
  const clearAll = useCallback(() => {
    setHistory([]);
    selectEntity(null);
  }, [selectEntity]);

  // Reset history when selection is cleared externally
  useEffect(() => {
    if (!selectedEntity) {
      setHistory([]);
    }
  }, [selectedEntity]);

  const getRelatedEntities = () => {
    if (!selectedEntity) return { relatedPowers: [], relatedPeople: [], relatedEvents: [] };
    
    const relatedPowers = connections
      .filter(c => (c.sourceId === selectedEntity.id || c.targetId === selectedEntity.id) && c.sourceType === 'power' && c.targetType === 'power')
      .map(c => ({ connection: c, power: powers.find(p => p.id === (c.sourceId === selectedEntity.id ? c.targetId : c.sourceId)) }))
      .filter(r => r.power);

    const relatedPeople = people.filter(p => p.affiliations.includes(selectedEntity.id));
    const relatedEvents = events.filter(e => e.participants.includes(selectedEntity.id) || e.keyFigures.includes(selectedEntity.id));

    return { relatedPowers, relatedPeople, relatedEvents };
  };

  const related = getRelatedEntities();

  const impactColors: Record<string, { bg: string; text: string }> = {
    minor: { bg: 'rgba(160, 160, 160, 0.12)', text: 'var(--theme-text-tertiary)' },
    moderate: { bg: 'rgba(99, 102, 241, 0.12)', text: '#818cf8' },
    major: { bg: 'rgba(251, 146, 60, 0.12)', text: '#fb923c' },
    transformative: { bg: 'rgba(168, 85, 247, 0.12)', text: '#a855f7' },
  };

  // Breadcrumb component
  const Breadcrumbs = () => {
    if (history.length === 0 && !entity) return null;
    
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px',
        marginBottom: '16px',
        flexWrap: 'wrap',
        fontSize: '12px'
      }}>
        <button
          onClick={clearAll}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'var(--theme-text-tertiary)',
            fontSize: '12px',
            transition: 'all 100ms ease'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--theme-bg-tertiary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          Home
        </button>
        
        {history.map((item, index) => (
          <span key={`${item.id}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
            <button
              onClick={() => navigateToHistoryIndex(index)}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'var(--theme-text-secondary)',
                fontSize: '12px',
                maxWidth: '120px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                transition: 'all 100ms ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--theme-bg-tertiary)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
              title={item.name}
            >
              {item.name}
            </button>
          </span>
        ))}
        
        {entity && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
            <span style={{ 
              padding: '4px 8px',
              borderRadius: '4px',
              background: 'var(--theme-bg-tertiary)',
              color: 'var(--theme-text-primary)',
              fontWeight: 500,
              fontSize: '12px',
              maxWidth: '120px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {entity.data?.name || 'Current'}
            </span>
          </span>
        )}
      </div>
    );
  };

  // Empty State
  if (!entity) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 0' }}>
        <div 
          style={{ 
            width: '56px',
            height: '56px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '16px',
            background: 'var(--theme-bg-tertiary)',
            color: 'var(--theme-accent-primary)'
          }}
        >
          E
        </div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600,
          marginBottom: '8px',
          color: 'var(--theme-text-primary)'
        }}>
          Select an Entity
        </h3>
        <p style={{ 
          fontSize: '13px', 
          maxWidth: '220px',
          marginBottom: '24px',
          color: 'var(--theme-text-tertiary)',
          lineHeight: '1.5'
        }}>
          Click on any point on the globe to explore powers, events, and historical figures.
        </p>
        
        <div style={{ width: '100%' }}>
          <h4 className="section-header" style={{ textAlign: 'left' }}>Quick Explore</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {powers.slice(0, 6).map(power => (
              <button
                key={power.id}
                onClick={() => navigateTo({ id: power.id, type: 'power' })}
                className="tactile-card clickable"
                style={{ 
                  textAlign: 'left',
                  borderLeft: `3px solid ${power.color}`,
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--theme-text-secondary)' }}>
                  {power.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Power View
  if (entity.type === 'power' && entity.data) {
    const data = entity.data;
    return (
      <div>
        <Breadcrumbs />

        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '12px',
          paddingBottom: '16px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--theme-border-tertiary)'
        }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            marginTop: '6px',
            backgroundColor: data.color,
            flexShrink: 0
          }} />
          <div>
            <span className="badge" style={{ marginBottom: '6px' }}>{data.type}</span>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--theme-text-primary)', margin: 0 }}>
              {data.name}
            </h2>
          </div>
        </div>

        {/* Timeline Bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          fontSize: '12px',
          color: 'var(--theme-text-tertiary)',
          marginBottom: '16px'
        }}>
          <span>{formatYear(data.timeRange.start)}</span>
          <div style={{ 
            flex: 1, 
            height: '4px', 
            borderRadius: '2px',
            background: 'var(--theme-bg-tertiary)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              height: '100%', 
              borderRadius: '2px',
              backgroundColor: data.color, 
              width: data.timeRange.end ? `${Math.min(100, ((data.timeRange.end - data.timeRange.start) / 2000) * 100)}%` : '100%'
            }} />
          </div>
          <span>{data.timeRange.end ? formatYear(data.timeRange.end) : 'Present'}</span>
        </div>

        {/* Description */}
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.6',
          color: 'var(--theme-text-secondary)',
          marginBottom: '16px'
        }}>
          {data.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {data.tags.map(tag => (
            <span key={tag} className="chip" style={{ cursor: 'default' }}>{tag}</span>
          ))}
        </div>

        {/* Connections */}
        {related.relatedPowers.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Connections</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {related.relatedPowers.map(({ connection, power }) => (
                <button
                  key={connection.id}
                  onClick={() => navigateTo({ id: power!.id, type: 'power' })}
                  className="list-item"
                  style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%' }}
                >
                  <span className="badge" style={{ fontSize: '10px' }}>{connection.type}</span>
                  <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>{power!.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Key Figures */}
        {related.relatedPeople.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Key Figures</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {related.relatedPeople.map(person => (
                <button
                  key={person.id}
                  onClick={() => navigateTo({ id: person.id, type: 'person' })}
                  className="list-item"
                  style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%', justifyContent: 'space-between' }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>{person.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--theme-text-tertiary)' }}>{formatYear(person.birth)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Major Events */}
        {related.relatedEvents.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Major Events</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {related.relatedEvents.map(event => {
                const colors = impactColors[event.impact];
                return (
                  <button
                    key={event.id}
                    onClick={() => { navigateTo({ id: event.id, type: 'event' }); setYear(event.date); }}
                    className="list-item"
                    style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%' }}
                  >
                    <span className="badge" style={{ fontSize: '10px', background: colors.bg, color: colors.text }}>{event.type}</span>
                    <span style={{ fontSize: '13px', flex: 1, color: 'var(--theme-text-secondary)' }}>{event.name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--theme-text-tertiary)' }}>{formatYear(event.date)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Jump Button */}
        <button 
          onClick={() => setYear(data.timeRange.start)} 
          className="primary-button"
          style={{ width: '100%' }}
        >
          Jump to {formatYear(data.timeRange.start)}
        </button>
      </div>
    );
  }

  // Person View
  if (entity.type === 'person' && entity.data) {
    const data = entity.data;
    
    // Get affiliations as powers
    const affiliatedPowers = data.affiliations
      .map(id => powers.find(p => p.id === id))
      .filter(Boolean);
    
    return (
      <div>
        <Breadcrumbs />

        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '12px',
          paddingBottom: '16px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--theme-border-tertiary)'
        }}>
          <div style={{ 
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 600,
            background: 'var(--theme-bg-tertiary)',
            color: 'var(--theme-accent-primary)',
            flexShrink: 0
          }}>
            {data.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <span className="badge" style={{ marginBottom: '6px' }}>Historical Figure</span>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--theme-text-primary)', margin: 0 }}>
              {data.name}
            </h2>
          </div>
        </div>

        {/* Timeline Bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          fontSize: '12px',
          color: 'var(--theme-text-tertiary)',
          marginBottom: '16px'
        }}>
          <span>{formatYear(data.birth)}</span>
          <div style={{ 
            flex: 1, 
            height: '4px', 
            borderRadius: '2px',
            background: 'var(--theme-bg-tertiary)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              height: '100%', 
              borderRadius: '2px',
              background: 'var(--theme-accent-primary)', 
              width: data.death ? `${Math.min(100, ((data.death - data.birth) / 100) * 100)}%` : '100%'
            }} />
          </div>
          <span>{data.death ? formatYear(data.death) : 'Present'}</span>
        </div>

        {/* Description */}
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.6',
          color: 'var(--theme-text-secondary)',
          marginBottom: '16px'
        }}>
          {data.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {data.tags.map(tag => (
            <span key={tag} className="chip" style={{ cursor: 'default' }}>{tag}</span>
          ))}
        </div>

        {/* Affiliations */}
        {affiliatedPowers.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Affiliations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {affiliatedPowers.map(power => power && (
                <button
                  key={power.id}
                  onClick={() => navigateTo({ id: power.id, type: 'power' })}
                  className="list-item"
                  style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%' }}
                >
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: power.color }} />
                  <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>{power.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Positions Held */}
        {data.roles.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Positions Held</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.roles.map((role, i) => {
                const rolePower = powers.find(p => p.id === role.powerId);
                return (
                  <div key={i} className="tactile-card">
                    <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px', color: 'var(--theme-text-primary)' }}>
                      {role.title}
                    </div>
                    {rolePower && (
                      <button 
                        onClick={() => navigateTo({ id: role.powerId, type: 'power' })} 
                        style={{ 
                          fontSize: '12px', 
                          color: 'var(--theme-accent-primary)',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        {rolePower.name}
                      </button>
                    )}
                    <div style={{ fontSize: '11px', marginTop: '6px', color: 'var(--theme-text-tertiary)' }}>
                      {formatYear(role.timeRange.start)} – {role.timeRange.end ? formatYear(role.timeRange.end) : 'Present'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Jump Button */}
        <button 
          onClick={() => setYear(data.birth)} 
          className="primary-button"
          style={{ width: '100%' }}
        >
          Jump to {formatYear(data.birth)}
        </button>
      </div>
    );
  }

  // Event View
  if (entity.type === 'event' && entity.data) {
    const data = entity.data;
    const colors = impactColors[data.impact];
    
    // Get key figures as people
    const keyFigures = data.keyFigures
      .map(id => people.find(p => p.id === id))
      .filter(Boolean);
    
    return (
      <div>
        <Breadcrumbs />

        {/* Header */}
        <div style={{ 
          paddingBottom: '16px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--theme-border-tertiary)'
        }}>
          <span className="badge" style={{ marginBottom: '8px', background: colors.bg, color: colors.text }}>{data.type}</span>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--theme-text-primary)', margin: 0 }}>
            {data.name}
          </h2>
        </div>

        {/* Date & Impact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--theme-accent-primary)' }}>
            {formatYear(data.date)}
          </span>
          {data.endDate && (
            <span style={{ fontSize: '13px', color: 'var(--theme-text-tertiary)' }}>
              to {formatYear(data.endDate)}
            </span>
          )}
          <span className="badge" style={{ background: colors.bg, color: colors.text }}>{data.impact}</span>
        </div>

        {/* Description */}
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.6',
          color: 'var(--theme-text-secondary)',
          marginBottom: '16px'
        }}>
          {data.description}
        </p>

        {/* Casualties */}
        {data.casualties && (
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '16px',
            background: 'rgba(168, 85, 247, 0.08)',
            border: '1px solid rgba(168, 85, 247, 0.15)'
          }}>
            <span style={{ fontSize: '12px', color: 'var(--theme-text-tertiary)' }}>Estimated Casualties</span>
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#a855f7' }}>{data.casualties.toLocaleString()}</span>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {data.tags.map(tag => (
            <span key={tag} className="chip" style={{ cursor: 'default' }}>{tag}</span>
          ))}
        </div>

        {/* Participants */}
        {data.participants.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Participants</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {data.participants.map(pId => {
                const power = powers.find(p => p.id === pId);
                return power ? (
                  <button 
                    key={pId} 
                    onClick={() => navigateTo({ id: pId, type: 'power' })} 
                    className="list-item"
                    style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%' }}
                  >
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: power.color }} />
                    <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>{power.name}</span>
                  </button>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Key Figures */}
        {keyFigures.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 className="section-header">Key Figures</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {keyFigures.map(person => person && (
                <button
                  key={person.id}
                  onClick={() => navigateTo({ id: person.id, type: 'person' })}
                  className="list-item"
                  style={{ border: 'none', background: 'none', textAlign: 'left', width: '100%', justifyContent: 'space-between' }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--theme-text-secondary)' }}>{person.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--theme-text-tertiary)' }}>{formatYear(person.birth)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Jump Button */}
        <button 
          onClick={() => setYear(data.date)} 
          className="primary-button"
          style={{ width: '100%' }}
        >
          Jump to {formatYear(data.date)}
        </button>
      </div>
    );
  }

  return null;
}
