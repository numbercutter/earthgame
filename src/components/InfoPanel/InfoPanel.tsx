'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useGameStore } from '@/store/useGameStore';
import { powers, people, events, policies, connections } from '@/data/historical-data';

export default function InfoPanel() {
  const { 
    selectedEntity, 
    selectEntity, 
    showInfoPanel,
    toggleInfoPanel,
    currentYear,
    setYear,
  } = useGameStore();

  const getEntityData = () => {
    if (!selectedEntity) return null;
    
    switch (selectedEntity.type) {
      case 'power':
        return { type: 'power', data: powers.find(p => p.id === selectedEntity.id) };
      case 'person':
        return { type: 'person', data: people.find(p => p.id === selectedEntity.id) };
      case 'event':
        return { type: 'event', data: events.find(e => e.id === selectedEntity.id) };
      case 'policy':
        return { type: 'policy', data: policies.find(p => p.id === selectedEntity.id) };
      default:
        return null;
    }
  };

  const entity = getEntityData();

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  const getRelatedEntities = () => {
    if (!selectedEntity) return { powers: [], people: [], events: [] };
    
    const relatedPowers = connections
      .filter(c => 
        (c.sourceId === selectedEntity.id || c.targetId === selectedEntity.id) &&
        c.sourceType === 'power' && c.targetType === 'power'
      )
      .map(c => {
        const otherId = c.sourceId === selectedEntity.id ? c.targetId : c.sourceId;
        return { connection: c, power: powers.find(p => p.id === otherId) };
      })
      .filter(r => r.power);

    const relatedPeople = people.filter(p => 
      p.affiliations.includes(selectedEntity.id)
    );

    const relatedEvents = events.filter(e =>
      e.participants.includes(selectedEntity.id) ||
      e.keyFigures.includes(selectedEntity.id)
    );

    return { relatedPowers, relatedPeople, relatedEvents };
  };

  const related = getRelatedEntities();

  return (
    <AnimatePresence>
      {showInfoPanel && (
        <motion.div
          className="info-panel"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <button 
            className="info-panel-close"
            onClick={toggleInfoPanel}
          >
            ×
          </button>

          {!entity ? (
            <div className="info-panel-empty">
              <div className="empty-icon">🌍</div>
              <h3>Select an Entity</h3>
              <p>Click on any point on the globe to explore powers, events, and historical figures.</p>
              
              <div className="quick-explore">
                <h4>Quick Explore</h4>
                <div className="explore-grid">
                  {powers.slice(0, 6).map(power => (
                    <button
                      key={power.id}
                      className="explore-btn"
                      style={{ borderColor: power.color }}
                      onClick={() => selectEntity({ id: power.id, type: 'power' })}
                    >
                      {power.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : entity.type === 'power' && entity.data ? (
            <div className="entity-content">
              <div className="entity-header" style={{ borderColor: entity.data.color }}>
                <span 
                  className="entity-color-dot"
                  style={{ backgroundColor: entity.data.color }}
                />
                <div>
                  <span className="entity-type">{entity.data.type}</span>
                  <h2>{entity.data.name}</h2>
                </div>
              </div>

              <div className="entity-timeline">
                <span>{formatYear(entity.data.timeRange.start)}</span>
                <div className="timeline-bar">
                  <div 
                    className="timeline-fill"
                    style={{ 
                      backgroundColor: entity.data.color,
                      width: entity.data.timeRange.end 
                        ? `${((entity.data.timeRange.end - entity.data.timeRange.start) / 5000) * 100}%`
                        : '100%'
                    }}
                  />
                </div>
                <span>{entity.data.timeRange.end ? formatYear(entity.data.timeRange.end) : 'Present'}</span>
              </div>

              <p className="entity-description">{entity.data.description}</p>

              <div className="entity-tags">
                {entity.data.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {entity.data.parentPower && (
                <div className="entity-section">
                  <h4>Funded By / Parent</h4>
                  <button 
                    className="related-link"
                    onClick={() => selectEntity({ id: entity.data!.parentPower!, type: 'power' })}
                  >
                    {powers.find(p => p.id === entity.data!.parentPower)?.name}
                  </button>
                </div>
              )}

              {related.relatedPowers.length > 0 && (
                <div className="entity-section">
                  <h4>Connections</h4>
                  <div className="related-list">
                    {related.relatedPowers.map(({ connection, power }) => (
                      <button
                        key={connection.id}
                        className="related-item"
                        onClick={() => selectEntity({ id: power!.id, type: 'power' })}
                      >
                        <span className="connection-type">{connection.type}</span>
                        <span>{power!.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {related.relatedPeople.length > 0 && (
                <div className="entity-section">
                  <h4>Key Figures</h4>
                  <div className="related-list">
                    {related.relatedPeople.map(person => (
                      <button
                        key={person.id}
                        className="related-item"
                        onClick={() => selectEntity({ id: person.id, type: 'person' })}
                      >
                        {person.name}
                        <span className="person-years">
                          ({formatYear(person.birth)} - {person.death ? formatYear(person.death) : 'Present'})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {related.relatedEvents.length > 0 && (
                <div className="entity-section">
                  <h4>Major Events</h4>
                  <div className="related-list">
                    {related.relatedEvents.map(event => (
                      <button
                        key={event.id}
                        className="related-item event-item"
                        onClick={() => {
                          selectEntity({ id: event.id, type: 'event' });
                          setYear(event.date);
                        }}
                      >
                        <span className={`event-impact ${event.impact}`}>{event.type}</span>
                        <span>{event.name}</span>
                        <span className="event-year">{formatYear(event.date)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button 
                className="jump-to-btn"
                onClick={() => setYear(entity.data!.timeRange.start)}
              >
                Jump to {formatYear(entity.data.timeRange.start)}
              </button>
            </div>
          ) : entity.type === 'person' && entity.data ? (
            <div className="entity-content">
              <div className="entity-header person-header">
                <div className="person-avatar">
                  {entity.data.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <span className="entity-type">Historical Figure</span>
                  <h2>{entity.data.name}</h2>
                </div>
              </div>

              <div className="entity-timeline">
                <span>{formatYear(entity.data.birth)}</span>
                <div className="timeline-bar">
                  <div 
                    className="timeline-fill person-fill"
                    style={{ 
                      width: entity.data.death 
                        ? `${((entity.data.death - entity.data.birth) / 100) * 100}%`
                        : '100%'
                    }}
                  />
                </div>
                <span>{entity.data.death ? formatYear(entity.data.death) : 'Present'}</span>
              </div>

              <p className="entity-description">{entity.data.description}</p>

              <div className="entity-tags">
                {entity.data.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {entity.data.roles.length > 0 && (
                <div className="entity-section">
                  <h4>Positions Held</h4>
                  <div className="roles-list">
                    {entity.data.roles.map((role, i) => (
                      <div key={i} className="role-item">
                        <span className="role-title">{role.title}</span>
                        <button 
                          className="role-power"
                          onClick={() => selectEntity({ id: role.powerId, type: 'power' })}
                        >
                          {powers.find(p => p.id === role.powerId)?.name}
                        </button>
                        <span className="role-years">
                          {formatYear(role.timeRange.start)} - {role.timeRange.end ? formatYear(role.timeRange.end) : 'Present'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {entity.data.affiliations.length > 0 && (
                <div className="entity-section">
                  <h4>Affiliations</h4>
                  <div className="related-list">
                    {entity.data.affiliations.map(affId => {
                      const power = powers.find(p => p.id === affId);
                      return power ? (
                        <button
                          key={affId}
                          className="related-item"
                          onClick={() => selectEntity({ id: affId, type: 'power' })}
                        >
                          <span 
                            className="entity-color-dot small"
                            style={{ backgroundColor: power.color }}
                          />
                          {power.name}
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              <button 
                className="jump-to-btn"
                onClick={() => setYear(entity.data!.birth)}
              >
                Jump to {formatYear(entity.data.birth)}
              </button>
            </div>
          ) : entity.type === 'event' && entity.data ? (
            <div className="entity-content">
              <div className="entity-header event-header">
                <span className={`event-badge ${entity.data.impact}`}>
                  {entity.data.type}
                </span>
                <h2>{entity.data.name}</h2>
              </div>

              <div className="event-meta">
                <span className="event-date">{formatYear(entity.data.date)}</span>
                {entity.data.endDate && (
                  <span className="event-date">to {formatYear(entity.data.endDate)}</span>
                )}
                <span className={`impact-badge ${entity.data.impact}`}>
                  {entity.data.impact} impact
                </span>
              </div>

              <p className="entity-description">{entity.data.description}</p>

              {entity.data.casualties && (
                <div className="casualty-stat">
                  <span className="stat-label">Estimated Casualties</span>
                  <span className="stat-value">{entity.data.casualties.toLocaleString()}</span>
                </div>
              )}

              <div className="entity-tags">
                {entity.data.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {entity.data.participants.length > 0 && (
                <div className="entity-section">
                  <h4>Participants</h4>
                  <div className="related-list">
                    {entity.data.participants.map(pId => {
                      const power = powers.find(p => p.id === pId);
                      return power ? (
                        <button
                          key={pId}
                          className="related-item"
                          onClick={() => selectEntity({ id: pId, type: 'power' })}
                        >
                          <span 
                            className="entity-color-dot small"
                            style={{ backgroundColor: power.color }}
                          />
                          {power.name}
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {entity.data.keyFigures.length > 0 && (
                <div className="entity-section">
                  <h4>Key Figures</h4>
                  <div className="related-list">
                    {entity.data.keyFigures.map(personId => {
                      const person = people.find(p => p.id === personId);
                      return person ? (
                        <button
                          key={personId}
                          className="related-item"
                          onClick={() => selectEntity({ id: personId, type: 'person' })}
                        >
                          {person.name}
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              <button 
                className="jump-to-btn"
                onClick={() => setYear(entity.data!.date)}
              >
                Jump to {formatYear(entity.data.date)}
              </button>
            </div>
          ) : null}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

