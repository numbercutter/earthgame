// Main Index - Comprehensive Historical Database
// This file combines all historical data from different eras

import { Power, Person, HistoricalEvent, Connection, Policy, Territory } from '@/types';

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

// Combine all people
export const allPeople: Person[] = [
  ...ancientPeople,
  ...medievalPeople,
  ...earlyModernPeople,
  ...modernPeople,
  ...contemporaryPeople,
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

// Connections (currently only from contemporary, but structured for expansion)
export const allConnections: Connection[] = [
  ...contemporaryConnections,
];

// Policies (currently only from contemporary, but structured for expansion)
export const allPolicies: Policy[] = [
  ...contemporaryPolicies,
];

// Helper to get data for a specific year
export function getWorldStateForYear(year: number): {
  powers: Power[];
  events: HistoricalEvent[];
  people: Person[];
  connections: Connection[];
  policies: Policy[];
  territories: Territory[];
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
  };
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
  // Cultural tags
  'christian', 'islamic', 'buddhist', 'hindu', 'jewish',
  // Scientific/technological tags
  'science', 'technology', 'discovery', 'invention',
  // Other significant tags
  'genocide', 'holocaust', 'slavery', 'civil-rights',
  'cold-war', 'wwi', 'wwii', 'nuclear',
];

// Statistics about the database
export const databaseStats = {
  totalPowers: allPowers.length,
  totalPeople: allPeople.length,
  totalEvents: allEvents.length,
  totalTerritories: allTerritories.length,
  totalConnections: allConnections.length,
  totalPolicies: allPolicies.length,
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

