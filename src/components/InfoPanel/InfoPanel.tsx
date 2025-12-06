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

  const navigateTo = useCallback((ref: { id: string; type: 'power' | 'person' | 'event' }) => {
    if (selectedEntity && (selectedEntity.type === 'power' || selectedEntity.type === 'person' || selectedEntity.type === 'event')) {
      const currentId = selectedEntity.id;
      const currentType = selectedEntity.type;
      const currentName = getEntityName(currentId, currentType);
      setHistory(prev => [...prev, { id: currentId, type: currentType, name: currentName }]);
    }
    selectEntity(ref);
  }, [selectedEntity, selectEntity]);

  const navigateBack = useCallback(() => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      selectEntity({ id: prev.id, type: prev.type });
    } else {
      selectEntity(null);
    }
  }, [history, selectEntity]);

  useEffect(() => {
    if (!selectedEntity) setHistory([]);
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

  // Empty State
  if (!entity) {
    return (
      <div className="info-empty">
        <div className="info-empty-icon">E</div>
        <h3>Select an Entity</h3>
        <p>Click on any point on the globe to explore.</p>
        
        <div style={{ width: '100%' }}>
          <div className="filter-label" style={{ textAlign: 'left', marginBottom: '8px' }}>Quick Explore</div>
          <div className="quick-grid">
            {powers.slice(0, 6).map(power => (
              <button
                key={power.id}
                onClick={() => selectEntity({ id: power.id, type: 'power' })}
                className="quick-item"
                style={{ borderLeft: `2px solid ${power.color}` }}
              >
                <span>{power.name}</span>
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
        {/* Back button */}
        {(history.length > 0 || selectedEntity) && (
          <button onClick={navigateBack} className="reset-btn" style={{ marginBottom: '12px', padding: '6px 10px' }}>
            ← Back
          </button>
        )}

        {/* Header */}
        <div className="entity-header">
          <div className="entity-dot" style={{ backgroundColor: data.color }} />
          <div>
            <span className="entity-badge">{data.type}</span>
            <h2 className="entity-title">{data.name}</h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-bar">
          <span>{formatYear(data.timeRange.start)}</span>
          <div className="timeline-track">
            <div 
              className="timeline-fill" 
              style={{ 
                backgroundColor: data.color, 
                width: data.timeRange.end ? `${Math.min(100, ((data.timeRange.end - data.timeRange.start) / 2000) * 100)}%` : '100%'
              }} 
            />
          </div>
          <span>{data.timeRange.end ? formatYear(data.timeRange.end) : 'Now'}</span>
        </div>

        {/* Description */}
        <p className="entity-desc">{data.description}</p>

        {/* Tags */}
        <div className="tag-list">
          {data.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        {/* Connections */}
        {related.relatedPowers.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Connections</div>
            <div className="info-list">
              {related.relatedPowers.map(({ connection, power }) => (
                <button key={connection.id} onClick={() => navigateTo({ id: power!.id, type: 'power' })} className="info-list-item">
                  <span className="entity-badge" style={{ marginBottom: 0 }}>{connection.type}</span>
                  <span className="name">{power!.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Key Figures */}
        {related.relatedPeople.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Key Figures</div>
            <div className="info-list">
              {related.relatedPeople.map(person => (
                <button key={person.id} onClick={() => navigateTo({ id: person.id, type: 'person' })} className="info-list-item">
                  <span className="name">{person.name}</span>
                  <span className="meta">{formatYear(person.birth)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Major Events */}
        {related.relatedEvents.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Major Events</div>
            <div className="info-list">
              {related.relatedEvents.map(event => (
                <button key={event.id} onClick={() => { navigateTo({ id: event.id, type: 'event' }); setYear(event.date); }} className="info-list-item">
                  <span className="entity-badge" style={{ marginBottom: 0 }}>{event.type}</span>
                  <span className="name">{event.name}</span>
                  <span className="meta">{formatYear(event.date)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Jump Button */}
        <button onClick={() => setYear(data.timeRange.start)} className="action-btn">
          Jump to {formatYear(data.timeRange.start)}
        </button>
      </div>
    );
  }

  // Person View
  if (entity.type === 'person' && entity.data) {
    const data = entity.data;
    const affiliatedPowers = data.affiliations.map(id => powers.find(p => p.id === id)).filter(Boolean);
    
    return (
      <div>
        {(history.length > 0 || selectedEntity) && (
          <button onClick={navigateBack} className="reset-btn" style={{ marginBottom: '12px', padding: '6px 10px' }}>
            ← Back
          </button>
        )}

        <div className="entity-header">
          <div style={{ 
            width: '32px', height: '32px', borderRadius: '6px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px', fontWeight: 600,
            background: 'var(--theme-bg-tertiary)', color: 'var(--theme-accent-primary)',
            flexShrink: 0
          }}>
            {data.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <span className="entity-badge">Figure</span>
            <h2 className="entity-title">{data.name}</h2>
          </div>
        </div>

        <div className="timeline-bar">
          <span>{formatYear(data.birth)}</span>
          <div className="timeline-track">
            <div className="timeline-fill" style={{ background: 'var(--theme-accent-primary)', width: data.death ? '100%' : '60%' }} />
          </div>
          <span>{data.death ? formatYear(data.death) : 'Present'}</span>
        </div>

        <p className="entity-desc">{data.description}</p>

        <div className="tag-list">
          {data.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        {affiliatedPowers.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Affiliations</div>
            <div className="info-list">
              {affiliatedPowers.map(power => power && (
                <button key={power.id} onClick={() => navigateTo({ id: power.id, type: 'power' })} className="info-list-item">
                  <div className="dot" style={{ backgroundColor: power.color }} />
                  <span className="name">{power.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {data.roles.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Positions</div>
            <div className="info-list">
              {data.roles.map((role, i) => {
                const rolePower = powers.find(p => p.id === role.powerId);
                return (
                  <div key={i} style={{ padding: '8px', background: 'var(--theme-bg-tertiary)', borderRadius: '4px', marginBottom: '4px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--theme-text-primary)' }}>{role.title}</div>
                    {rolePower && (
                      <button 
                        onClick={() => navigateTo({ id: role.powerId, type: 'power' })} 
                        style={{ fontSize: '10px', color: 'var(--theme-accent-primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                      >
                        {rolePower.name}
                      </button>
                    )}
                    <div style={{ fontSize: '9px', marginTop: '4px', color: 'var(--theme-text-tertiary)' }}>
                      {formatYear(role.timeRange.start)} – {role.timeRange.end ? formatYear(role.timeRange.end) : 'Present'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <button onClick={() => setYear(data.birth)} className="action-btn">
          Jump to {formatYear(data.birth)}
        </button>
      </div>
    );
  }

  // Event View
  if (entity.type === 'event' && entity.data) {
    const data = entity.data;
    const keyFigures = data.keyFigures.map(id => people.find(p => p.id === id)).filter(Boolean);
    
    return (
      <div>
        {(history.length > 0 || selectedEntity) && (
          <button onClick={navigateBack} className="reset-btn" style={{ marginBottom: '12px', padding: '6px 10px' }}>
            ← Back
          </button>
        )}

        <div style={{ paddingBottom: '12px', marginBottom: '12px', borderBottom: '1px solid var(--theme-border-tertiary)' }}>
          <span className="entity-badge">{data.type}</span>
          <h2 className="entity-title">{data.name}</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--theme-accent-primary)' }}>
            {formatYear(data.date)}
          </span>
          {data.endDate && (
            <span style={{ fontSize: '10px', color: 'var(--theme-text-tertiary)' }}>to {formatYear(data.endDate)}</span>
          )}
          <span className="entity-badge">{data.impact}</span>
        </div>

        <p className="entity-desc">{data.description}</p>

        {data.casualties && (
          <div style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '8px 12px', borderRadius: '4px', marginBottom: '12px',
            background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.12)'
          }}>
            <span style={{ fontSize: '10px', color: 'var(--theme-text-tertiary)' }}>Casualties</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#a855f7' }}>{data.casualties.toLocaleString()}</span>
          </div>
        )}

        <div className="tag-list">
          {data.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        {data.participants.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Participants</div>
            <div className="info-list">
              {data.participants.map(pId => {
                const power = powers.find(p => p.id === pId);
                return power ? (
                  <button key={pId} onClick={() => navigateTo({ id: pId, type: 'power' })} className="info-list-item">
                    <div className="dot" style={{ backgroundColor: power.color }} />
                    <span className="name">{power.name}</span>
                  </button>
                ) : null;
              })}
            </div>
          </div>
        )}

        {keyFigures.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Key Figures</div>
            <div className="info-list">
              {keyFigures.map(person => person && (
                <button key={person.id} onClick={() => navigateTo({ id: person.id, type: 'person' })} className="info-list-item">
                  <span className="name">{person.name}</span>
                  <span className="meta">{formatYear(person.birth)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <button onClick={() => setYear(data.date)} className="action-btn">
          Jump to {formatYear(data.date)}
        </button>
      </div>
    );
  }

  return null;
}
