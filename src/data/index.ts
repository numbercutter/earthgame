// Main Index - Comprehensive Historical Database
// This file combines all historical data from different eras

import { 
  Power, Person, HistoricalEvent, Connection, Policy, Territory, Organization,
  ConflictZone, TradeRoute, NaturalResource, City
} from '@/types';

// Import prehistoric data
import { prehistoricPowers, prehistoricEvents } from './prehistoric';

// Import ancient data
import { ancientPowers, ancientTerritories } from './ancient/civilizations';
import { ancientPeople } from './ancient/people';
import { ancientEvents } from './ancient/events';

// Import medieval data
import { medievalPowers, medievalTerritories } from './medieval/civilizations';
import { medievalPeople } from './medieval/people';
import { medievalEvents } from './medieval/events';

// Import early modern data
import { earlyModernPowers, earlyModernTerritories } from './early-modern/civilizations';
import { earlyModernPeople } from './early-modern/people';
import { earlyModernEvents } from './early-modern/events';

// Import modern data
import { modernPowers } from './modern/civilizations';
import { modernPeople } from './modern/people';
import { modernEvents } from './modern/events';

// Import contemporary data
import {
  contemporaryPowers,
  contemporaryPeople,
  contemporaryEvents,
  contemporaryConnections,
  contemporaryPolicies,
} from './contemporary';

// Import organizations (think tanks, PACs, foundations, corporations)
import { allOrganizations } from './organizations';

// Import detailed funding connections
import { allFundingConnections } from './funding/connections';

// Import detailed policies
import { usModernPolicies } from './policies/us-modern';

// Import detailed political figures
import { detailedPoliticalFigures } from './people/political-figures-detailed';

// Import geographic data
import { allConflicts } from './conflicts';
import { historicalCities } from './geography/cities';
import { naturalResources } from './geography/resources';
import { tradeRoutes } from './geography/trade-routes';

// Combine all powers
export const allPowers: Power[] = [
  ...prehistoricPowers,
  ...ancientPowers,
  ...medievalPowers,
  ...earlyModernPowers,
  ...modernPowers,
  ...contemporaryPowers,
];

// Combine all territories
export const allTerritories: Territory[] = [
  ...ancientTerritories,
  ...medievalTerritories,
  ...earlyModernTerritories,
];

// Combine all people (including detailed political figures)
export const allPeople: Person[] = [
  ...ancientPeople,
  ...medievalPeople,
  ...earlyModernPeople,
  ...modernPeople,
  ...contemporaryPeople,
  ...detailedPoliticalFigures,
];

// Combine all events
export const allEvents: HistoricalEvent[] = [
  ...prehistoricEvents,
  ...ancientEvents,
  ...medievalEvents,
  ...earlyModernEvents,
  ...modernEvents,
  ...contemporaryEvents,
];

// Connections (including funding, lobbying, revolving door)
export const allConnections: Connection[] = [
  ...contemporaryConnections,
  ...allFundingConnections,
];

// Policies (contemporary + detailed US modern policies)
export const allPolicies: Policy[] = [
  ...contemporaryPolicies,
  ...usModernPolicies,
];

// Organizations (think tanks, PACs, foundations, corporations)
export { allOrganizations };

// Geographic data
export const allConflictZones: ConflictZone[] = allConflicts;
export const allCities: City[] = historicalCities;
export const allResources: NaturalResource[] = naturalResources;
export const allTradeRoutes: TradeRoute[] = tradeRoutes;

// Helper to get data for a specific year
export function getWorldStateForYear(year: number): {
  powers: Power[];
  events: HistoricalEvent[];
  people: Person[];
  connections: Connection[];
  policies: Policy[];
  territories: Territory[];
  conflictZones: ConflictZone[];
  cities: City[];
  resources: NaturalResource[];
  tradeRoutes: TradeRoute[];
} {
  return {
    powers: allPowers.filter(p => 
      p.timeRange.start <= year && 
      (p.timeRange.end === null || p.timeRange.end >= year)
    ),
    events: allEvents.filter(e => {
      const endYear = e.endDate ?? e.date;
      // Show events from the last 50 years for ancient/prehistoric, 10 years for modern
      const lookback = year < -1000 ? 100 : (year < 1000 ? 50 : 10);
      return e.date <= year && endYear >= year - lookback;
    }),
    people: allPeople.filter(p => 
      p.birth <= year && 
      (p.death === null || p.death >= year)
    ),
    connections: allConnections.filter(c =>
      c.timeRange.start <= year &&
      (c.timeRange.end === null || c.timeRange.end >= year)
    ),
    policies: allPolicies.filter(p =>
      p.enacted <= year &&
      (p.repealed === undefined || p.repealed >= year)
    ),
    territories: allTerritories.filter(t =>
      t.timeRange.start <= year &&
      (t.timeRange.end === null || t.timeRange.end >= year)
    ),
    conflictZones: allConflictZones.filter(c =>
      c.timeRange.start <= year &&
      (c.timeRange.end === null || c.timeRange.end >= year)
    ),
    cities: allCities.filter(c => {
      // City exists if founded before year and not destroyed
      const founded = c.founded ?? -10000;
      const destroyed = c.destroyed ?? year + 1;
      return founded <= year && destroyed >= year;
    }),
    resources: allResources.filter(r => {
      // Resource is active if discovered and not depleted
      const discovered = r.discoveredYear ?? -10000;
      const depleted = r.depletedYear ?? year + 1;
      return discovered <= year && depleted >= year;
    }),
    tradeRoutes: allTradeRoutes.filter(r =>
      r.timeRange.start <= year &&
      (r.timeRange.end === null || r.timeRange.end >= year)
    ),
  };
}

// Get who controls a resource at a specific year
export function getResourceControllerForYear(resourceId: string, year: number): string | null {
  const resource = allResources.find(r => r.id === resourceId);
  if (!resource) return null;
  
  const activeControl = resource.controlHistory.find(c =>
    c.timeRange.start <= year &&
    (c.timeRange.end === null || c.timeRange.end >= year)
  );
  
  return activeControl?.controllerId ?? null;
}

// Get who controls a city at a specific year
export function getCityControllerForYear(cityId: string, year: number): string | null {
  const city = allCities.find(c => c.id === cityId);
  if (!city) return null;
  
  const activeControl = city.controlHistory.find(c =>
    c.timeRange.start <= year &&
    (c.timeRange.end === null || c.timeRange.end >= year)
  );
  
  return activeControl?.powerId ?? city.powerId;
}

// Get active conflicts for a year with severity
export function getConflictsForYear(year: number): ConflictZone[] {
  return allConflictZones.filter(c =>
    c.timeRange.start <= year &&
    (c.timeRange.end === null || c.timeRange.end >= year)
  );
}

// Get conflict heat map data (for visualization)
export function getConflictHeatMapForYear(year: number): Array<{
  coordinates: { lat: number; lng: number };
  radius: number;
  severity: number;
  name: string;
}> {
  return getConflictsForYear(year).map(c => ({
    coordinates: c.coordinates,
    radius: c.radius,
    severity: c.severity,
    name: c.name,
  }));
}

// Get events for a specific time range
export function getEventsInRange(startYear: number, endYear: number): HistoricalEvent[] {
  return allEvents.filter(e => {
    const eventEnd = e.endDate ?? e.date;
    return e.date <= endYear && eventEnd >= startYear;
  });
}

// Get powers active in a specific time range
export function getPowersInRange(startYear: number, endYear: number): Power[] {
  return allPowers.filter(p => {
    const powerEnd = p.timeRange.end ?? endYear + 1;
    return p.timeRange.start <= endYear && powerEnd >= startYear;
  });
}

// Get people alive in a specific year
export function getPeopleAliveInYear(year: number): Person[] {
  return allPeople.filter(p => 
    p.birth <= year && 
    (p.death === null || p.death >= year)
  );
}

// All available tags for filtering
export const allTags = [
  // Era tags
  'prehistoric', 'ancient', 'medieval', 'early-modern', 'modern', 'contemporary',
  // Event type tags
  'war', 'revolution', 'democracy', 'communist', 'fascist',
  'colonial', 'independence', 'superpower', 'alliance',
  'constitutional', 'economic', 'military', 'diplomatic',
  // Civilization tags
  'empire', 'republic', 'monarchy', 'theocracy',
  // Regional tags
  'europe', 'asia', 'africa', 'americas', 'middle-east', 'oceania',
  'mediterranean', 'baltic', 'silk-road', 'indian-ocean', 'atlantic',
  // Cultural tags
  'christian', 'islamic', 'buddhist', 'hindu', 'jewish',
  // Scientific/technological tags
  'science', 'technology', 'discovery', 'invention',
  // Conflict tags
  'genocide', 'holocaust', 'slavery', 'civil-rights',
  'cold-war', 'wwi', 'wwii', 'nuclear', 'civil-war', 'insurgency',
  // Political/Organization tags
  'think-tank', 'pac', 'super-pac', 'foundation', 'lobby', 'corporation',
  'conservative', 'progressive', 'libertarian', 'centrist',
  'republican', 'democratic', 'bipartisan',
  'funding', 'lobbying', 'revolving-door', 'dark-money',
  'billionaire', 'donor', 'wall-street', 'pharma', 'defense',
  'deregulation', 'tax-cuts', 'healthcare', 'climate',
  // Resource tags
  'gold', 'silver', 'oil', 'coal', 'iron', 'copper', 'uranium',
  'rare-earths', 'lithium', 'cobalt', 'diamonds', 'spices',
  'strategic', 'chokepoint', 'exploitation',
  // Trade tags
  'trade', 'maritime', 'land-route', 'trade-hub', 'port',
  'hanseatic', 'venetian', 'phoenician', 'colonial-trade',
  // City tags
  'capital', 'major-city', 'fortress', 'religious-center',
];

// Statistics about the database
export const databaseStats = {
  totalPowers: allPowers.length,
  totalPeople: allPeople.length,
  totalEvents: allEvents.length,
  totalTerritories: allTerritories.length,
  totalConnections: allConnections.length,
  totalPolicies: allPolicies.length,
  totalOrganizations: allOrganizations.length,
  totalConflictZones: allConflictZones.length,
  totalCities: allCities.length,
  totalResources: allResources.length,
  totalTradeRoutes: allTradeRoutes.length,
  timeRange: {
    earliest: Math.min(...allEvents.map(e => e.date)),
    latest: Math.max(...allEvents.map(e => e.endDate ?? e.date)),
  },
};

// Re-export for backward compatibility
export { allPowers as powers };
export { allPeople as people };
export { allEvents as events };
export { allConnections as connections };
export { allPolicies as policies };
export { allTerritories as territories };
export { allConflictZones as conflictZones };
export { allCities as cities };
export { allResources as resources };
export { allTradeRoutes as tradeRoutes };

