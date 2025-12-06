// Historical Data - Main Export File
// This file re-exports from the comprehensive modular data system

export {
  // Main data arrays
  allPowers as powers,
  allPeople as people,
  allEvents as events,
  allConnections as connections,
  allPolicies as policies,
  allTerritories as territories,
  
  // Helper functions
  getWorldStateForYear,
  getEventsInRange,
  getPowersInRange,
  getPeopleAliveInYear,
  
  // Metadata
  allTags,
  databaseStats,
} from './index';

// Type re-exports for convenience
export type {
  Power,
  Person,
  HistoricalEvent,
  Connection,
  Policy,
  Territory,
} from '@/types';
