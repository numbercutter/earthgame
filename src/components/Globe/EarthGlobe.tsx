"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
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

// Cohesive color palette - Digital theme
const COLORS = {
  dark: {
    globe: "#0a0f14",
    globeEmissive: "#020408",
    globeSpecular: "#1a3a5c",
    atmosphere: "#06b6d4",
    graticule: "#0d3d4d",
    polygonLow: "rgba(8, 55, 75, 0.7)",
    polygonMedLow: "rgba(10, 75, 105, 0.72)",
    polygonMed: "rgba(12, 95, 130, 0.75)",
    polygonMedHigh: "rgba(16, 140, 180, 0.78)",
    polygonHigh: "rgba(28, 180, 210, 0.82)",
    polygonStroke: "rgba(6, 182, 212, 0.4)",
    polygonSide: "rgba(6, 182, 212, 0.25)",
  },
  light: {
    globe: "#e8f4f8",
    globeEmissive: "#d0e8f0",
    globeSpecular: "#a0c4d4",
    atmosphere: "#0891b2",
    graticule: "#94a3b8",
    polygonLow: "rgba(180, 200, 215, 0.7)",
    polygonMedLow: "rgba(155, 180, 200, 0.72)",
    polygonMed: "rgba(130, 160, 185, 0.75)",
    polygonMedHigh: "rgba(90, 140, 170, 0.78)",
    polygonHigh: "rgba(50, 130, 160, 0.82)",
    polygonStroke: "rgba(8, 145, 178, 0.35)",
    polygonSide: "rgba(8, 145, 178, 0.15)",
  },
};

// Connection colors - subtle, cohesive theme matching app
const CONNECTION_COLORS = {
  alliance: { dark: "#22d3ee", light: "#0891b2" },
  conflict: { dark: "#f87171", light: "#dc2626" },
  trade: { dark: "#fbbf24", light: "#d97706" },
  funding: { dark: "#c084fc", light: "#9333ea" },
  influence: { dark: "#818cf8", light: "#6366f1" },
  succession: { dark: "#fb923c", light: "#ea580c" },
};

// Node colors - clean geometric markers
const NODE_COLORS = {
  power: {
    empire: { bg: "#dc2626", border: "#fca5a5" },
    nation: { bg: "#3b82f6", border: "#93c5fd" },
    organization: { bg: "#8b5cf6", border: "#c4b5fd" },
    corporation: { bg: "#06b6d4", border: "#67e8f9" },
    alliance: { bg: "#22c55e", border: "#86efac" },
  },
  event: {
    war: { bg: "#ef4444", border: "#fca5a5" },
    revolution: { bg: "#f97316", border: "#fdba74" },
    treaty: { bg: "#10b981", border: "#6ee7b7" },
    collapse: { bg: "#a855f7", border: "#d8b4fe" },
    founding: { bg: "#3b82f6", border: "#93c5fd" },
    policy: { bg: "#06b6d4", border: "#67e8f9" },
    election: { bg: "#eab308", border: "#fde047" },
    assassination: { bg: "#dc2626", border: "#fca5a5" },
    discovery: { bg: "#6366f1", border: "#a5b4fc" },
    economic: { bg: "#f59e0b", border: "#fcd34d" },
    disaster: { bg: "#b91c1c", border: "#fca5a5" },
  },
  person: { bg: "#fbbf24", border: "#fde68a" },
};

// Reference lines data
const REFERENCE_LINES = {
  equator: [{ lat: 0, label: "Equator", color: "#22d3ee" }],
  tropics: [
    { lat: 23.5, label: "Tropic of Cancer", color: "#fbbf24" },
    { lat: -23.5, label: "Tropic of Capricorn", color: "#fbbf24" },
  ],
  polar: [
    { lat: 66.5, label: "Arctic Circle", color: "#60a5fa" },
    { lat: -66.5, label: "Antarctic Circle", color: "#60a5fa" },
  ],
};

// Generate points for a latitude ring
function generateLatRing(lat: number, segments: number = 180) {
  const points: { lat: number; lng: number }[] = [];
  for (let i = 0; i <= segments; i++) {
    points.push({ lat, lng: (i * 360) / segments - 180 });
  }
  return points;
}

// Simulated elevation data
function getElevation(feature: any): number {
  const name = feature?.properties?.NAME || feature?.properties?.name || "";
  const continent = feature?.properties?.CONTINENT || "";

  const highElevation = [
    "Nepal",
    "Bhutan",
    "Tibet",
    "Switzerland",
    "Austria",
    "Chile",
    "Peru",
    "Bolivia",
    "Afghanistan",
    "Tajikistan",
    "Kyrgyzstan",
  ];
  const mediumHighElevation = [
    "Ethiopia",
    "Kenya",
    "Tanzania",
    "Colombia",
    "Ecuador",
    "Mexico",
    "Iran",
    "Turkey",
    "Spain",
  ];
  const mediumElevation = [
    "United States",
    "China",
    "Brazil",
    "Argentina",
    "Australia",
    "South Africa",
    "Mongolia",
    "Kazakhstan",
  ];

  if (highElevation.some((n) => name.includes(n)))
    return 0.8 + Math.random() * 0.2;
  if (mediumHighElevation.some((n) => name.includes(n)))
    return 0.5 + Math.random() * 0.2;
  if (mediumElevation.some((n) => name.includes(n)))
    return 0.3 + Math.random() * 0.15;
  if (continent === "Africa") return 0.25 + Math.random() * 0.15;
  if (continent === "Asia") return 0.35 + Math.random() * 0.2;
  if (continent === "Europe") return 0.2 + Math.random() * 0.15;
  if (continent === "Oceania") return 0.15 + Math.random() * 0.1;

  return 0.1 + Math.random() * 0.15;
}

interface GlobePoint {
  id: string;
  lat: number;
  lng: number;
  size: number;
  color: string;
  borderColor: string;
  label: string;
  type: "power" | "event" | "person";
  subType?: string;
  data: Power | HistoricalEvent | Person;
}

interface GlobeArc {
  id: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  type: string;
  sourceName: string;
  targetName: string;
  description?: string;
}

// Human-readable connection type labels
const CONNECTION_LABELS: Record<string, string> = {
  alliance: "Alliance",
  conflict: "Conflict",
  trade: "Trade",
  funding: "Funding",
  influence: "Influence",
  succession: "Succession",
};

export default function EarthGlobe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [countriesWithElevation, setCountriesWithElevation] = useState<any[]>(
    []
  );
  const [zoomLevel, setZoomLevel] = useState(2.2);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Get theme colors
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme === "dark");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Globe material - memoized and theme-aware
  const globeMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      color: new THREE.Color(colors.globe),
      emissive: new THREE.Color(colors.globeEmissive),
      specular: new THREE.Color(colors.globeSpecular),
      shininess: isDarkMode ? 5 : 15,
      transparent: true,
      opacity: 0.95,
    });
  }, [isDarkMode, colors]);

  const {
    activePowers,
    activeEvents,
    activePeople,
    activeConnections,
    filters,
    selectEntity,
  } = useGameStore();

  // Fetch countries GeoJSON
  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then((res) => res.json())
      .then((data) => {
        const features = data.features.map((f: any) => ({
          ...f,
          elevation: getElevation(f),
        }));
        setCountriesWithElevation(features);
      });
  }, []);

  // Dimensions observer
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Globe setup
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.pointOfView({ altitude: 2.2 });

      // Style graticules
      const scene = globeRef.current.scene();
      if (scene) {
        scene.traverse((obj: any) => {
          if (obj.type === "Line" || obj.type === "LineSegments") {
            if (obj.material) {
              obj.material.color = new THREE.Color(colors.graticule);
              obj.material.opacity = isDarkMode ? 0.25 : 0.35;
              obj.material.transparent = true;
            }
          }
        });
      }

      // Track zoom
      const controls = globeRef.current.controls();
      const handleZoomChange = () => {
        const pov = globeRef.current.pointOfView();
        if (pov?.altitude !== undefined) setZoomLevel(pov.altitude);
      };
      controls.addEventListener("change", handleZoomChange);
      return () => controls.removeEventListener("change", handleZoomChange);
    }
  }, [dimensions, countriesWithElevation, isDarkMode, colors]);

  const handleInteraction = useCallback(() => {
    if (globeRef.current) globeRef.current.controls().autoRotate = false;
  }, []);

  // Memoized points data
  const points = useMemo(() => {
    const pts: GlobePoint[] = [];

    if (filters.showPowers) {
      activePowers.forEach((power) => {
        if (power.capital && filters.powerTypes.includes(power.type)) {
          const nodeColor = NODE_COLORS.power[power.type];
          pts.push({
            id: power.id,
            lat: power.capital.lat,
            lng: power.capital.lng,
            size:
              power.type === "empire"
                ? 1.4
                : power.type === "nation"
                ? 1.0
                : 0.7,
            color: nodeColor?.bg || power.color,
            borderColor: nodeColor?.border || "#ffffff",
            label: power.name,
            type: "power",
            subType: power.type,
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
            minor: 0.4,
            moderate: 0.6,
            major: 0.9,
            transformative: 1.3,
          };
          const nodeColor = NODE_COLORS.event[event.type];
          pts.push({
            id: event.id,
            lat: event.location.lat,
            lng: event.location.lng,
            size: sizeMap[event.impact],
            color: nodeColor?.bg || "#94a3b8",
            borderColor: nodeColor?.border || "#ffffff",
            label: event.name,
            type: "event",
            subType: event.type,
            data: event,
          });
        }
      });
    }

    if (filters.showPeople) {
      activePeople.forEach((person) => {
        pts.push({
          id: person.id,
          lat: person.birthPlace.lat,
          lng: person.birthPlace.lng,
          size: 0.5,
          color: NODE_COLORS.person.bg,
          borderColor: NODE_COLORS.person.border,
          label: person.name,
          type: "person",
          data: person,
        });
      });
    }

    return pts;
  }, [activePowers, activeEvents, activePeople, filters]);

  // Memoized arcs data with better colors and metadata
  const arcs = useMemo(() => {
    const arcList: GlobeArc[] = [];

    if (filters.showConnections) {
      activeConnections.forEach((conn) => {
        const source = activePowers.find((p) => p.id === conn.sourceId);
        const target = activePowers.find((p) => p.id === conn.targetId);

        if (source?.capital && target?.capital) {
          const colorKey = conn.type as keyof typeof CONNECTION_COLORS;
          const connColor =
            CONNECTION_COLORS[colorKey]?.[isDarkMode ? "dark" : "light"] ||
            "#64748b";

          arcList.push({
            id: conn.id,
            startLat: source.capital.lat,
            startLng: source.capital.lng,
            endLat: target.capital.lat,
            endLng: target.capital.lng,
            color: connColor,
            type: conn.type,
            sourceName: source.name,
            targetName: target.name,
            description: conn.description,
          });
        }
      });
    }

    return arcList;
  }, [activeConnections, activePowers, filters.showConnections, isDarkMode]);

  // Reference lines
  const referenceRings = useMemo(() => {
    const rings: any[] = [];

    if (filters.showEquator) {
      REFERENCE_LINES.equator.forEach((line) => {
        rings.push({
          ...line,
          points: generateLatRing(line.lat),
          lineType: "equator",
        });
      });
    }

    if (filters.showTropics) {
      REFERENCE_LINES.tropics.forEach((line) => {
        rings.push({
          ...line,
          points: generateLatRing(line.lat),
          lineType: "tropic",
        });
      });
    }

    if (filters.showPolarCircles) {
      REFERENCE_LINES.polar.forEach((line) => {
        rings.push({
          ...line,
          points: generateLatRing(line.lat),
          lineType: "polar",
        });
      });
    }

    return rings;
  }, [filters.showEquator, filters.showTropics, filters.showPolarCircles]);

  // Elevation multiplier - FIXED: always have minimum altitude to prevent distortion
  const elevationMultiplier = useMemo(() => {
    return Math.max(0.008, Math.min(0.05, (3 - zoomLevel) * 0.025));
  }, [zoomLevel]);

  // Polygon altitude - FIXED: always have base altitude
  const getPolygonAltitude = useCallback(
    (d: any) => {
      const baseAltitude = 0.004; // Minimum altitude to prevent z-fighting
      if (!filters.showElevation) return baseAltitude;
      const elevation = d?.elevation || 0.1;
      return baseAltitude + elevation * elevationMultiplier;
    },
    [elevationMultiplier, filters.showElevation]
  );

  // Polygon color
  const getPolygonCapColor = useCallback(
    (d: any) => {
      if (!filters.showElevation) return colors.polygonMed;
      const elevation = d?.elevation || 0.1;

      if (elevation > 0.7) return colors.polygonHigh;
      if (elevation > 0.5) return colors.polygonMedHigh;
      if (elevation > 0.35) return colors.polygonMed;
      if (elevation > 0.2) return colors.polygonMedLow;
      return colors.polygonLow;
    },
    [colors, filters.showElevation]
  );

  // Clean geometric HTML markers - NO EMOJIS
  const getHtmlMarker = useCallback(
    (d: object) => {
      const point = d as GlobePoint;
      const size = 6 + point.size * 8;

      // Determine shape based on type
      let shape = "circle";
      if (point.type === "event") {
        shape =
          point.subType === "war" || point.subType === "conflict"
            ? "diamond"
            : point.subType === "disaster"
            ? "triangle"
            : "square";
      } else if (point.type === "person") {
        shape = "circle";
      }

      const el = document.createElement("div");
      el.className = "globe-marker";

      // Create shape styles
      let shapeStyles = "";
      if (shape === "circle") {
        shapeStyles = `border-radius: 50%;`;
      } else if (shape === "square") {
        shapeStyles = `border-radius: 2px;`;
      } else if (shape === "diamond") {
        shapeStyles = `border-radius: 2px; transform: rotate(45deg);`;
      } else if (shape === "triangle") {
        shapeStyles = `
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          border-radius: 0;
        `;
      }

      el.innerHTML = `
        <div class="marker-inner" style="
          width: ${size}px;
          height: ${size}px;
          background: ${point.color};
          ${shapeStyles}
          box-shadow: 0 0 ${size * 0.8}px ${point.color}88, 0 0 ${
        size * 1.5
      }px ${point.color}44;
          border: 1.5px solid ${point.borderColor};
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        "></div>
      `;

      // Hover effects
      const innerEl = el.querySelector(".marker-inner") as HTMLElement;
      if (innerEl) {
        el.addEventListener("mouseenter", () => {
          innerEl.style.transform =
            shape === "diamond" ? "rotate(45deg) scale(1.3)" : "scale(1.3)";
          innerEl.style.boxShadow = `0 0 ${size * 1.2}px ${
            point.color
          }aa, 0 0 ${size * 2.5}px ${point.color}66`;
        });
        el.addEventListener("mouseleave", () => {
          innerEl.style.transform =
            shape === "diamond" ? "rotate(45deg) scale(1)" : "scale(1)";
          innerEl.style.boxShadow = `0 0 ${size * 0.8}px ${
            point.color
          }88, 0 0 ${size * 1.5}px ${point.color}44`;
        });
      }

      // Click handler
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        selectEntity({ id: point.id, type: point.type });
        handleInteraction();
      });

      return el;
    },
    [selectEntity, handleInteraction]
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
          globeMaterial={globeMaterial}
          showGraticules={filters.showGraticules}
          atmosphereColor={colors.atmosphere}
          atmosphereAltitude={0.12}
          showAtmosphere={true}
          // Country polygons
          polygonsData={countriesWithElevation}
          polygonCapColor={getPolygonCapColor}
          polygonSideColor={() => colors.polygonSide}
          polygonStrokeColor={() => colors.polygonStroke}
          polygonAltitude={getPolygonAltitude}
          polygonLabel={(d: any) => {
            const name = d?.properties?.NAME || d?.properties?.name || "";
            return name
              ? `<div class="globe-tooltip"><strong>${name}</strong></div>`
              : "";
          }}
          // Reference lines
          pathsData={referenceRings}
          pathPoints="points"
          pathPointLat={(p: any) => p.lat}
          pathPointLng={(p: any) => p.lng}
          pathColor={(d: any) => d.color}
          pathStroke={1.2}
          pathDashLength={0.015}
          pathDashGap={0.008}
          pathDashAnimateTime={0}
          pathLabel={(d: any) =>
            `<div class="globe-tooltip"><strong>${d.label}</strong></div>`
          }
          // Data points with clean geometric markers
          htmlElementsData={points}
          htmlLat={(d: any) => d.lat}
          htmlLng={(d: any) => d.lng}
          htmlAltitude={(d: any) => d.size * 0.015 + 0.012}
          htmlElement={getHtmlMarker}
          // Arcs/connections with labels
          arcsData={arcs}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength={0.25}
          arcDashGap={0.1}
          arcDashAnimateTime={4000}
          arcStroke={1.2}
          arcLabel={(d: any) => {
            const label = CONNECTION_LABELS[d.type] || d.type;
            return `<div class="globe-tooltip arc-tooltip">
              <div class="arc-type" style="color: ${
                d.color
              }; font-weight: 600; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px;">${label}</div>
              <strong>${d.sourceName} → ${d.targetName}</strong>
              ${
                d.description
                  ? `<div class="arc-desc">${d.description}</div>`
                  : ""
              }
            </div>`;
          }}
          animateIn={true}
        />
      )}
    </div>
  );
}
