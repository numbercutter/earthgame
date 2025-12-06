"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useGameStore } from "@/store/useGameStore";
import { Power, HistoricalEvent, Person } from "@/types";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => null,
});

// GeoJSON URL for country boundaries
const COUNTRIES_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson";

interface GlobePoint {
  id: string;
  lat: number;
  lng: number;
  size: number;
  color: string;
  label: string;
  type: "power" | "event" | "person";
  data: Power | HistoricalEvent | Person;
}

interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

export default function EarthGlobe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState<any[]>([]);
  const [globeMaterial, setGlobeMaterial] = useState<THREE.Material | null>(
    null
  );

  // Fetch countries GeoJSON
  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features);
      });
  }, []);

  // Create custom globe material
  useEffect(() => {
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#0a0f14"),
      emissive: new THREE.Color("#020408"),
      specular: new THREE.Color("#1a3a5c"),
      shininess: 5,
      transparent: true,
      opacity: 0.95,
    });
    setGlobeMaterial(material);
  }, []);

  const {
    activePowers,
    activeEvents,
    activePeople,
    activeConnections,
    filters,
    selectEntity,
    hoverEntity,
  } = useGameStore();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.pointOfView({ altitude: 2.2 });

      // Style the graticules (lat/long grid lines)
      const scene = globeRef.current.scene();
      if (scene) {
        scene.traverse((obj: any) => {
          if (obj.type === "Line" || obj.type === "LineSegments") {
            if (obj.material) {
              obj.material.color = new THREE.Color("#0d3d4d");
              obj.material.opacity = 0.3;
              obj.material.transparent = true;
            }
          }
        });
      }
    }
  }, [dimensions, countries]);

  const handleInteraction = useCallback(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
    }
  }, []);

  const points: GlobePoint[] = [];

  if (filters.showPowers) {
    activePowers.forEach((power) => {
      if (power.capital && filters.powerTypes.includes(power.type)) {
        points.push({
          id: power.id,
          lat: power.capital.lat,
          lng: power.capital.lng,
          size:
            power.type === "empire" ? 1.2 : power.type === "nation" ? 0.8 : 0.5,
          color: power.color,
          label: power.name,
          type: "power",
          data: power,
        });
      }
    });
  }

  if (filters.showEvents) {
    activeEvents.forEach((event) => {
      if (
        filters.eventTypes.includes(event.type) &&
        filters.impactLevels.includes(event.impact)
      ) {
        const sizeMap = {
          minor: 0.3,
          moderate: 0.5,
          major: 0.8,
          transformative: 1.2,
        };
        const colorMap: Record<string, string> = {
          war: "#ef4444",
          revolution: "#f97316",
          treaty: "#10b981",
          collapse: "#a855f7",
          founding: "#3b82f6",
          policy: "#06b6d4",
          election: "#eab308",
          assassination: "#dc2626",
          discovery: "#6366f1",
          economic: "#f59e0b",
          disaster: "#b91c1c",
        };

        points.push({
          id: event.id,
          lat: event.location.lat,
          lng: event.location.lng,
          size: sizeMap[event.impact],
          color: colorMap[event.type] || "#94a3b8",
          label: event.name,
          type: "event",
          data: event,
        });
      }
    });
  }

  if (filters.showPeople) {
    activePeople.forEach((person) => {
      points.push({
        id: person.id,
        lat: person.birthPlace.lat,
        lng: person.birthPlace.lng,
        size: 0.4,
        color: "#eab308",
        label: person.name,
        type: "person",
        data: person,
      });
    });
  }

  const arcs: GlobeArc[] = [];

  if (filters.showConnections) {
    activeConnections.forEach((conn) => {
      const source = activePowers.find((p) => p.id === conn.sourceId);
      const target = activePowers.find((p) => p.id === conn.targetId);

      if (source?.capital && target?.capital) {
        const colorMap: Record<string, string> = {
          alliance: "rgba(16, 185, 129, 0.5)",
          conflict: "rgba(239, 68, 68, 0.5)",
          trade: "rgba(234, 179, 8, 0.5)",
          funding: "rgba(168, 85, 247, 0.5)",
          influence: "rgba(99, 102, 241, 0.5)",
          succession: "rgba(249, 115, 22, 0.5)",
        };

        arcs.push({
          startLat: source.capital.lat,
          startLng: source.capital.lng,
          endLat: target.capital.lat,
          endLng: target.capital.lng,
          color: colorMap[conn.type] || "rgba(148, 163, 184, 0.4)",
        });
      }
    });
  }

  const handlePointClick = useCallback(
    (point: object) => {
      const p = point as GlobePoint;
      selectEntity({ id: p.id, type: p.type });
      handleInteraction();
    },
    [selectEntity, handleInteraction]
  );

  const handlePointHover = useCallback(
    (point: object | null) => {
      if (point) {
        const p = point as GlobePoint;
        hoverEntity({ id: p.id, type: p.type });
      } else {
        hoverEntity(null);
      }
    },
    [hoverEntity]
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial || undefined}
          showGraticules={true}
          atmosphereColor="#06b6d4"
          atmosphereAltitude={0.15}
          showAtmosphere={true}
          // Country polygons for topographic look
          polygonsData={countries}
          polygonCapColor={() => "rgba(6, 50, 70, 0.6)"}
          polygonSideColor={() => "rgba(6, 182, 212, 0.15)"}
          polygonStrokeColor={() => "#06b6d4"}
          polygonAltitude={0.006}
          polygonLabel={(d: any) => {
            const name = d?.properties?.NAME || d?.properties?.name || "";
            return name
              ? `<div class="globe-tooltip"><strong>${name}</strong></div>`
              : "";
          }}
          // Data points
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={(d) => (d as GlobePoint).size * 0.02 + 0.01}
          pointRadius={(d) => (d as GlobePoint).size * 0.3}
          pointColor={(d) => (d as GlobePoint).color}
          pointLabel={(d) => {
            const p = d as GlobePoint;
            return `<div class="globe-tooltip"><strong>${p.label}</strong><span class="tooltip-type">${p.type}</span></div>`;
          }}
          onPointClick={handlePointClick}
          onPointHover={handlePointHover}
          // Arcs/connections
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
          animateIn={true}
        />
      )}
    </div>
  );
}
