'use client';

import { useState, useEffect, useCallback } from 'react';
import { useGameStore } from '@/store/useGameStore';
import { powers, people, events, connections, policies, allOrganizations } from '@/data/historical-data';

type EntityRef = { id: string; type: 'power' | 'person' | 'event' | 'policy' | 'organization'; name: string };

export default function InfoPanel() {
  const { selectedEntity, selectEntity, setYear } = useGameStore();
  const [history, setHistory] = useState<EntityRef[]>([]);

  const formatYear = (year: number) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  const getEntityName = (id: string, type: string): string => {
    if (type === 'power') return powers.find(p => p.id === id)?.name || 'Unknown';
    if (type === 'person') return people.find(p => p.id === id)?.name || 'Unknown';
    if (type === 'event') return events.find(e => e.id === id)?.name || 'Unknown';
    if (type === 'policy') return policies.find(p => p.id === id)?.name || 'Unknown';
    if (type === 'organization') return allOrganizations.find(o => o.id === id)?.name || 'Unknown';
    return 'Unknown';
  };

  const getEntityIcon = (type: string): string => {
    switch (type) {
      case 'power': return '🏛';
      case 'person': return '👤';
      case 'event': return '⚡';
      case 'policy': return '📜';
      case 'organization': return '🏢';
      default: return '•';
    }
  };

  const getEntityData = () => {
    if (!selectedEntity) return null;
    switch (selectedEntity.type) {
      case 'power': return { type: 'power' as const, data: powers.find(p => p.id === selectedEntity.id) };
      case 'person': return { type: 'person' as const, data: people.find(p => p.id === selectedEntity.id) };
      case 'event': return { type: 'event' as const, data: events.find(e => e.id === selectedEntity.id) };
      case 'policy': return { type: 'policy' as const, data: policies.find(p => p.id === selectedEntity.id) };
      default: return null;
    }
  };

  const entity = getEntityData();

  const navigateTo = useCallback((ref: { id: string; type: 'power' | 'person' | 'event' | 'policy' | 'organization' }) => {
    if (selectedEntity && ['power', 'person', 'event', 'policy', 'organization'].includes(selectedEntity.type)) {
      const currentId = selectedEntity.id;
      const currentType = selectedEntity.type as EntityRef['type'];
      const currentName = getEntityName(currentId, currentType);
      setHistory(prev => [...prev, { id: currentId, type: currentType, name: currentName }]);
    }
    selectEntity(ref as any);
  }, [selectedEntity, selectEntity]);

  const navigateToIndex = useCallback((index: number) => {
    if (index < 0) {
      // Go to home/deselect
      selectEntity(null);
      setHistory([]);
    } else if (index < history.length) {
      const target = history[index];
      setHistory(h => h.slice(0, index));
      selectEntity({ id: target.id, type: target.type } as any);
    }
  }, [history, selectEntity]);

  const navigateBack = useCallback(() => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      selectEntity({ id: prev.id, type: prev.type } as any);
    } else {
      selectEntity(null);
    }
  }, [history, selectEntity]);

  useEffect(() => {
    if (!selectedEntity) setHistory([]);
  }, [selectedEntity]);

  // Breadcrumb Component
  const Breadcrumbs = () => {
    if (history.length === 0 && !selectedEntity) return null;
    
    const currentName = selectedEntity ? getEntityName(selectedEntity.id, selectedEntity.type) : '';
    const currentType = selectedEntity?.type || '';
    
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        marginBottom: '12px',
        padding: '8px 10px',
        background: 'var(--theme-bg-tertiary)',
        borderRadius: '6px',
        fontSize: '10px',
        flexWrap: 'wrap',
        lineHeight: 1.6,
      }}>
        {/* Home */}
        <button
          onClick={() => navigateToIndex(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--theme-accent-primary)',
            cursor: 'pointer',
            padding: '2px 4px',
            borderRadius: '3px',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
          }}
          title="Back to start"
        >
          🏠
        </button>
        
        {/* History items */}
        {history.map((item, index) => (
          <span key={`${item.id}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: 'var(--theme-text-tertiary)' }}>›</span>
            <button
              onClick={() => navigateToIndex(index)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--theme-accent-primary)',
                cursor: 'pointer',
                padding: '2px 4px',
                borderRadius: '3px',
                fontSize: '10px',
                maxWidth: '80px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}
              title={item.name}
            >
              <span>{getEntityIcon(item.type)}</span>
              <span>{item.name.length > 12 ? item.name.slice(0, 12) + '…' : item.name}</span>
            </button>
          </span>
        ))}
        
        {/* Current item */}
        {selectedEntity && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: 'var(--theme-text-tertiary)' }}>›</span>
            <span style={{
              color: 'var(--theme-text-primary)',
              fontWeight: 600,
              padding: '2px 4px',
              background: 'var(--theme-bg-secondary)',
              borderRadius: '3px',
              maxWidth: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }} title={currentName}>
              <span>{getEntityIcon(currentType)}</span>
              <span>{currentName.length > 15 ? currentName.slice(0, 15) + '…' : currentName}</span>
            </span>
          </span>
        )}
      </div>
    );
  };

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
        {/* Breadcrumb navigation */}
        <Breadcrumbs />

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
        {/* Breadcrumb navigation */}
        <Breadcrumbs />

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
        {/* Breadcrumb navigation */}
        <Breadcrumbs />

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

  // Policy View
  if (entity.type === 'policy' && entity.data) {
    const data = entity.data;
    const sponsorPeople = data.sponsors.map(id => people.find(p => p.id === id)).filter(Boolean);
    const policyPower = powers.find(p => p.id === data.powerId);
    
    return (
      <div>
        {/* Breadcrumb navigation */}
        <Breadcrumbs />

        <div style={{ paddingBottom: '12px', marginBottom: '12px', borderBottom: '1px solid var(--theme-border-tertiary)' }}>
          <span className="entity-badge">{data.type}</span>
          <h2 className="entity-title">{data.name}</h2>
          {data.officialName && (
            <div style={{ fontSize: '10px', color: 'var(--theme-text-tertiary)', marginTop: '4px' }}>
              {data.officialName}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--theme-accent-primary)' }}>
            Enacted {formatYear(data.enacted)}
          </span>
          {data.repealed && (
            <span style={{ fontSize: '10px', color: 'var(--theme-text-tertiary)' }}>
              Repealed {formatYear(data.repealed)}
            </span>
          )}
        </div>

        <p className="entity-desc">{data.description}</p>

        {/* Effects */}
        {data.effects.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Effects</div>
            <div className="info-list">
              {data.effects.map((effect, i) => (
                <div key={i} style={{ 
                  padding: '8px', 
                  background: 'var(--theme-bg-tertiary)', 
                  borderRadius: '4px', 
                  marginBottom: '4px',
                  borderLeft: '2px solid var(--theme-accent-primary)'
                }}>
                  <span className="entity-badge" style={{ marginBottom: '4px' }}>{effect.category}</span>
                  <div style={{ fontSize: '11px', color: 'var(--theme-text-primary)' }}>{effect.description}</div>
                  <div style={{ fontSize: '9px', color: 'var(--theme-text-tertiary)', marginTop: '4px' }}>
                    Intent: {effect.intendedBenefit}
                  </div>
                  {effect.unintendedConsequences && effect.unintendedConsequences.length > 0 && (
                    <div style={{ fontSize: '9px', color: '#f87171', marginTop: '2px' }}>
                      ⚠ {effect.unintendedConsequences.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sponsors */}
        {sponsorPeople.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Sponsors</div>
            <div className="info-list">
              {sponsorPeople.map(person => person && (
                <button key={person.id} onClick={() => navigateTo({ id: person.id, type: 'person' })} className="info-list-item">
                  <span className="name">{person.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lobbyists */}
        {data.lobbyists && data.lobbyists.length > 0 && (
          <div className="info-section">
            <div className="info-section-label">Lobbying</div>
            <div className="info-list">
              {data.lobbyists.slice(0, 5).map((lobby, i) => (
                <div key={i} style={{ 
                  padding: '8px', 
                  background: lobby.position === 'support' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                  borderRadius: '4px', 
                  marginBottom: '4px',
                  borderLeft: `2px solid ${lobby.position === 'support' ? '#22c55e' : '#ef4444'}`
                }}>
                  <div style={{ fontSize: '10px', color: 'var(--theme-text-primary)', fontWeight: 500 }}>
                    {lobby.lobbyistId}
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--theme-text-tertiary)' }}>
                    ${(lobby.amount / 1000000).toFixed(1)}M • {lobby.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Votes */}
        {data.votes && (
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            marginBottom: '12px',
            padding: '10px',
            background: 'var(--theme-bg-tertiary)',
            borderRadius: '6px'
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#22c55e' }}>{data.votes.yeas}</div>
              <div style={{ fontSize: '9px', color: 'var(--theme-text-tertiary)' }}>Yea</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#ef4444' }}>{data.votes.nays}</div>
              <div style={{ fontSize: '9px', color: 'var(--theme-text-tertiary)' }}>Nay</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--theme-text-tertiary)' }}>{data.votes.abstentions}</div>
              <div style={{ fontSize: '9px', color: 'var(--theme-text-tertiary)' }}>Abstain</div>
            </div>
          </div>
        )}

        {/* Funding */}
        {data.funding && (
          <div style={{ 
            padding: '8px 12px', 
            borderRadius: '4px', 
            marginBottom: '12px',
            background: 'rgba(168, 85, 247, 0.08)', 
            border: '1px solid rgba(168, 85, 247, 0.12)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--theme-text-tertiary)' }}>Cost</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#a855f7' }}>
                ${(data.funding.initialCost / 1000000000).toFixed(1)}B
              </span>
            </div>
          </div>
        )}

        <div className="tag-list">
          {data.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        {/* Associated Power */}
        {policyPower && (
          <div className="info-section">
            <div className="info-section-label">Enacted By</div>
            <button onClick={() => navigateTo({ id: policyPower.id, type: 'power' })} className="info-list-item">
              <div className="dot" style={{ backgroundColor: policyPower.color }} />
              <span className="name">{policyPower.name}</span>
            </button>
          </div>
        )}

        <button onClick={() => setYear(data.enacted)} className="action-btn">
          Jump to {formatYear(data.enacted)}
        </button>
      </div>
    );
  }

  return null;
}
