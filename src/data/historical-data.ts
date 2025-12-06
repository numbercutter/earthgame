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
  allOrganizations,
  allConflictZones,
  allCities,
  allResources,
  allTradeRoutes,
  
  // Helper functions
  getWorldStateForYear,
  getEventsInRange,
  getPowersInRange,
  getPeopleAliveInYear,
  getResourceControllerForYear,
  getCityControllerForYear,
  getConflictsForYear,
  getConflictHeatMapForYear,
  
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
  Organization,
  ConflictZone,
  City,
  NaturalResource,
  TradeRoute,
} from '@/types';
