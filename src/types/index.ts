// Core data types for Earth Game

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface TimeRange {
  start: number; // Year (negative for BCE)
  end: number | null; // null = ongoing
}

// Power structures - empires, nations, organizations
export interface Power {
  id: string;
  name: string;
  type: "empire" | "nation" | "organization" | "corporation" | "alliance";
  color: string;
  timeRange: TimeRange;
  territories?: Territory[];
  capital?: GeoCoordinates;
  parentPower?: string; // ID of parent power/funder
  description: string;
  tags: string[];
}

// Geographic territories controlled by powers
export interface Territory {
  id: string;
  name: string;
  coordinates: GeoCoordinates[]; // Simple polygon outline
  geoJson?: any; // Full GeoJSON geometry for complex shapes
  powerId: string;
  timeRange: TimeRange;
  type?: "core" | "colony" | "vassal" | "occupation"; // Type of control
}

// Historical figures - politicians, leaders, key players
export interface Person {
  id: string;
  name: string;
  birth: number;
  death: number | null;
  birthPlace: GeoCoordinates;
  roles: PersonRole[];
  affiliations: string[]; // Power IDs
  fundedBy?: string[]; // Power IDs
  description: string;
  imageUrl?: string;
  tags: string[];
}

export interface PersonRole {
  title: string;
  powerId: string;
  timeRange: TimeRange;
}

// Historical events
export interface HistoricalEvent {
  id: string;
  name: string;
  type:
    | "war"
    | "treaty"
    | "revolution"
    | "election"
    | "assassination"
    | "discovery"
    | "founding"
    | "collapse"
    | "policy"
    | "economic"
    | "disaster";
  date: number;
  endDate?: number;
  location: GeoCoordinates;
  radius?: number; // Impact radius in km
  participants: string[]; // Power IDs
  keyFigures: string[]; // Person IDs
  description: string;
  impact: "minor" | "moderate" | "major" | "transformative";
  casualties?: number;
  tags: string[];
}

// Connections between entities
export interface Connection {
  id: string;
  type:
    | "alliance"
    | "conflict"
    | "trade"
    | "funding"
    | "influence"
    | "succession";
  sourceId: string;
  targetId: string;
  sourceType: "power" | "person" | "event";
  targetType: "power" | "person" | "event";
  timeRange: TimeRange;
  strength: number; // 0-1
  description: string;
}

// Policy/Law
export interface Policy {
  id: string;
  name: string;
  type: "law" | "treaty" | "executive_order" | "constitutional" | "economic";
  powerId: string;
  enacted: number;
  repealed?: number;
  description: string;
  effects: string[];
  sponsors: string[]; // Person IDs
  tags: string[];
}

// Full world state at a point in time
export interface WorldState {
  year: number;
  powers: Power[];
  events: HistoricalEvent[];
  people: Person[];
  connections: Connection[];
  policies: Policy[];
}

// App state
export interface AppState {
  currentYear: number;
  selectedEntity: SelectedEntity | null;
  viewMode: "globe" | "map";
  filters: FilterState;
  playbackSpeed: number;
  isPlaying: boolean;
}

export interface SelectedEntity {
  id: string;
  type: "power" | "person" | "event" | "policy" | "connection";
}

export interface FilterState {
  showPowers: boolean;
  showEvents: boolean;
  showPeople: boolean;
  showConnections: boolean;
  powerTypes: Power["type"][];
  eventTypes: HistoricalEvent["type"][];
  impactLevels: HistoricalEvent["impact"][];
  tags: string[];
  // Visual aid toggles
  showElevation: boolean;
  showEquator: boolean;
  showTropics: boolean;
  showPolarCircles: boolean;
  showGraticules: boolean;
}

// Data source metadata
export interface DataSource {
  id: string;
  name: string;
  type: "primary" | "secondary" | "academic" | "government";
  url?: string;
  reliability: "verified" | "disputed" | "uncertain";
  bias?: string;
  citations: string[];
}
