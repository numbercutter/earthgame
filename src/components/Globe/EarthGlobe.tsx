'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useGameStore } from '@/store/useGameStore';
import { Power, HistoricalEvent, Person } from '@/types';

// Dynamic import for react-globe.gl (no SSR)
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="loading-spinner" />
    </div>
  ),
});

interface GlobePoint {
  id: string;
  lat: number;
  lng: number;
  size: number;
  color: string;
  label: string;
  type: 'power' | 'event' | 'person';
  data: Power | HistoricalEvent | Person;
}

interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  label: string;
}

export default function EarthGlobe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const {
    activePowers,
    activeEvents,
    activePeople,
    activeConnections,
    filters,
    selectEntity,
    hoverEntity,
    selectedEntity,
  } = useGameStore();

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Auto-rotate globe
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.pointOfView({ altitude: 2.5 });
    }
  }, []);

  // Stop rotation on interaction
  const handleInteraction = useCallback(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
    }
  }, []);

  // Build points data
  const points: GlobePoint[] = [];
  
  if (filters.showPowers) {
    activePowers.forEach(power => {
      if (power.capital && filters.powerTypes.includes(power.type)) {
        points.push({
          id: power.id,
          lat: power.capital.lat,
          lng: power.capital.lng,
          size: power.type === 'empire' ? 1.2 : power.type === 'nation' ? 0.8 : 0.5,
          color: power.color,
          label: power.name,
          type: 'power',
          data: power,
        });
      }
    });
  }

  if (filters.showEvents) {
    activeEvents.forEach(event => {
      if (filters.eventTypes.includes(event.type) && filters.impactLevels.includes(event.impact)) {
        const sizeMap = { minor: 0.3, moderate: 0.5, major: 0.8, transformative: 1.2 };
        const colorMap = {
          war: '#ff4444',
          revolution: '#ff8800',
          treaty: '#44ff44',
          collapse: '#880088',
          founding: '#4488ff',
          policy: '#88ff88',
          election: '#ffff44',
          assassination: '#ff0044',
          discovery: '#00ffff',
          economic: '#ffaa00',
          disaster: '#aa0000',
        };
        
        points.push({
          id: event.id,
          lat: event.location.lat,
          lng: event.location.lng,
          size: sizeMap[event.impact],
          color: colorMap[event.type] || '#ffffff',
          label: event.name,
          type: 'event',
          data: event,
        });
      }
    });
  }

  if (filters.showPeople) {
    activePeople.forEach(person => {
      points.push({
        id: person.id,
        lat: person.birthPlace.lat,
        lng: person.birthPlace.lng,
        size: 0.4,
        color: '#ffdd00',
        label: person.name,
        type: 'person',
        data: person,
      });
    });
  }

  // Build arcs data
  const arcs: GlobeArc[] = [];
  
  if (filters.showConnections) {
    activeConnections.forEach(conn => {
      const source = activePowers.find(p => p.id === conn.sourceId);
      const target = activePowers.find(p => p.id === conn.targetId);
      
      if (source?.capital && target?.capital) {
        const colorMap = {
          alliance: 'rgba(68, 255, 68, 0.6)',
          conflict: 'rgba(255, 68, 68, 0.6)',
          trade: 'rgba(255, 215, 0, 0.6)',
          funding: 'rgba(138, 43, 226, 0.6)',
          influence: 'rgba(0, 191, 255, 0.6)',
          succession: 'rgba(255, 140, 0, 0.6)',
        };
        
        arcs.push({
          startLat: source.capital.lat,
          startLng: source.capital.lng,
          endLat: target.capital.lat,
          endLng: target.capital.lng,
          color: colorMap[conn.type] || 'rgba(255, 255, 255, 0.4)',
          label: `${source.name} → ${target.name}: ${conn.type}`,
        });
      }
    });
  }

  const handlePointClick = useCallback((point: object) => {
    const p = point as GlobePoint;
    selectEntity({ id: p.id, type: p.type });
    handleInteraction();
  }, [selectEntity, handleInteraction]);

  const handlePointHover = useCallback((point: object | null) => {
    if (point) {
      const p = point as GlobePoint;
      hoverEntity({ id: p.id, type: p.type });
    } else {
      hoverEntity(null);
    }
  }, [hoverEntity]);

  return (
    <div 
      ref={containerRef} 
      className="globe-container"
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          // Points
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={(d) => (d as GlobePoint).size * 0.02}
          pointRadius={(d) => (d as GlobePoint).size * 0.3}
          pointColor={(d) => (d as GlobePoint).color}
          pointLabel={(d) => {
            const p = d as GlobePoint;
            return `<div class="globe-tooltip">
              <strong>${p.label}</strong>
              <span class="tooltip-type">${p.type}</span>
            </div>`;
          }}
          onPointClick={handlePointClick}
          onPointHover={handlePointHover}
          
          // Arcs
          arcsData={arcs}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength={0.5}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          arcStroke={0.5}
          
          // Atmosphere
          atmosphereColor="#3a86ff"
          atmosphereAltitude={0.25}
          
          // Animation
          animateIn={true}
        />
      )}
    </div>
  );
}

