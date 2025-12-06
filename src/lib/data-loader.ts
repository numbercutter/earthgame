/**
 * Optimized Data Loading System
 * 
 * This provides several performance optimizations:
 * 1. Lazy loading - Only load data when needed
 * 2. Time-based indexing - Pre-index data by year ranges for O(1) lookups
 * 3. Spatial indexing - Grid-based spatial index for geographic queries
 * 4. Memoization - Cache computed results
 * 5. Web Workers ready - Can be moved to worker for heavy computation
 */

import type { 
  Power, Person, HistoricalEvent, Connection, Policy, Territory,
  ConflictZone, City, NaturalResource, TradeRoute, GeoCoordinates
} from '@/types';

// ============================================================================
// TIME-BASED INDEX
// Pre-compute which entities are active in each century for O(1) lookups
// ============================================================================

interface TimeIndex<T> {
  // Map century -> array of entity indices
  byCentury: Map<number, number[]>;
  // The actual data array
  data: T[];
}

function getCentury(year: number): number {
  return Math.floor(year / 100);
}

function buildTimeIndex<T>(
  data: T[],
  getTimeRange: (item: T) => { start: number; end: number | null }
): TimeIndex<T> {
  const byCentury = new Map<number, number[]>();
  
  data.forEach((item, index) => {
    const range = getTimeRange(item);
    const startCentury = getCentury(range.start);
    const endCentury = getCentury(range.end ?? 2100);
    
    // Add to all centuries this entity spans
    for (let c = startCentury; c <= endCentury; c++) {
      if (!byCentury.has(c)) {
        byCentury.set(c, []);
      }
      byCentury.get(c)!.push(index);
    }
  });
  
  return { byCentury, data };
}

// Query a time index for entities active in a year
function queryTimeIndex<T>(
  index: TimeIndex<T>,
  year: number,
  isActive: (item: T, year: number) => boolean
): T[] {
  const century = getCentury(year);
  const candidates = index.byCentury.get(century) ?? [];
  
  // Only filter candidates in this century, not the entire dataset
  return candidates
    .map(i => index.data[i])
    .filter(item => isActive(item, year));
}

// ============================================================================
// SPATIAL INDEX
// Grid-based spatial index for geographic queries (heat maps, nearby entities)
// ============================================================================

interface SpatialIndex<T> {
  // Grid cell size in degrees
  cellSize: number;
  // Map "lat,lng" grid cell -> entities in that cell
  grid: Map<string, T[]>;
}

function getCellKey(lat: number, lng: number, cellSize: number): string {
  const cellLat = Math.floor(lat / cellSize);
  const cellLng = Math.floor(lng / cellSize);
  return `${cellLat},${cellLng}`;
}

function buildSpatialIndex<T>(
  data: T[],
  getCoords: (item: T) => GeoCoordinates | null,
  cellSize: number = 10 // 10 degree cells by default
): SpatialIndex<T> {
  const grid = new Map<string, T[]>();
  
  data.forEach(item => {
    const coords = getCoords(item);
    if (!coords) return;
    
    const key = getCellKey(coords.lat, coords.lng, cellSize);
    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key)!.push(item);
  });
  
  return { cellSize, grid };
}

// Query entities near a point
function queryNearby<T>(
  index: SpatialIndex<T>,
  lat: number,
  lng: number,
  radiusCells: number = 1
): T[] {
  const results: T[] = [];
  const baseCellLat = Math.floor(lat / index.cellSize);
  const baseCellLng = Math.floor(lng / index.cellSize);
  
  // Check surrounding cells
  for (let dLat = -radiusCells; dLat <= radiusCells; dLat++) {
    for (let dLng = -radiusCells; dLng <= radiusCells; dLng++) {
      const key = `${baseCellLat + dLat},${baseCellLng + dLng}`;
      const cell = index.grid.get(key);
      if (cell) {
        results.push(...cell);
      }
    }
  }
  
  return results;
}

// ============================================================================
// MEMOIZED DATA STORE
// Caches computed results with LRU eviction
// ============================================================================

class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private maxSize: number;
  
  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }
  
  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Move to end (most recently used)
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }
  
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Evict oldest
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }
  
  clear(): void {
    this.cache.clear();
  }
}

// ============================================================================
// OPTIMIZED DATA LOADER
// ============================================================================

export interface WorldState {
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
}

export interface OptimizedDataStore {
  // Raw data (lazy loaded)
  powers: Power[];
  people: Person[];
  events: HistoricalEvent[];
  connections: Connection[];
  policies: Policy[];
  territories: Territory[];
  conflictZones: ConflictZone[];
  cities: City[];
  resources: NaturalResource[];
  tradeRoutes: TradeRoute[];
  
  // Indexes
  powerIndex: TimeIndex<Power>;
  personIndex: TimeIndex<Person>;
  eventIndex: TimeIndex<HistoricalEvent>;
  conflictIndex: TimeIndex<ConflictZone>;
  cityIndex: TimeIndex<City>;
  resourceIndex: TimeIndex<NaturalResource>;
  tradeRouteIndex: TimeIndex<TradeRoute>;
  
  // Spatial indexes
  conflictSpatialIndex: SpatialIndex<ConflictZone>;
  citySpatialIndex: SpatialIndex<City>;
  resourceSpatialIndex: SpatialIndex<NaturalResource>;
  
  // Cache
  yearCache: LRUCache<number, WorldState>;
  
  // Initialized flag
  initialized: boolean;
}

// Singleton store
let store: OptimizedDataStore | null = null;

/**
 * Initialize the optimized data store
 * Call this once at app startup
 */
export async function initializeDataStore(): Promise<OptimizedDataStore> {
  if (store?.initialized) {
    return store;
  }
  
  // Dynamic imports for code splitting
  const [
    { allPowers, allPeople, allEvents, allConnections, allPolicies, allTerritories },
    { allConflictZones, allCities, allResources, allTradeRoutes }
  ] = await Promise.all([
    import('@/data'),
    import('@/data').then(m => ({
      allConflictZones: m.allConflictZones,
      allCities: m.allCities,
      allResources: m.allResources,
      allTradeRoutes: m.allTradeRoutes,
    }))
  ]);
  
  console.time('Building indexes');
  
  // Build time indexes
  const powerIndex = buildTimeIndex(allPowers, p => p.timeRange);
  const personIndex = buildTimeIndex(allPeople, p => ({ start: p.birth, end: p.death }));
  const eventIndex = buildTimeIndex(allEvents, e => ({ start: e.date, end: e.endDate ?? e.date }));
  const conflictIndex = buildTimeIndex(allConflictZones, c => c.timeRange);
  const cityIndex = buildTimeIndex(allCities, c => ({ 
    start: c.founded ?? -10000, 
    end: c.destroyed ?? null 
  }));
  const resourceIndex = buildTimeIndex(allResources, r => ({
    start: r.discoveredYear ?? -10000,
    end: r.depletedYear ?? null
  }));
  const tradeRouteIndex = buildTimeIndex(allTradeRoutes, r => r.timeRange);
  
  // Build spatial indexes
  const conflictSpatialIndex = buildSpatialIndex(allConflictZones, c => c.coordinates);
  const citySpatialIndex = buildSpatialIndex(allCities, c => c.coordinates);
  const resourceSpatialIndex = buildSpatialIndex(allResources, r => r.coordinates);
  
  console.timeEnd('Building indexes');
  
  const newStore: OptimizedDataStore = {
    powers: allPowers,
    people: allPeople,
    events: allEvents,
    connections: allConnections,
    policies: allPolicies,
    territories: allTerritories,
    conflictZones: allConflictZones,
    cities: allCities,
    resources: allResources,
    tradeRoutes: allTradeRoutes,
    
    powerIndex,
    personIndex,
    eventIndex,
    conflictIndex,
    cityIndex,
    resourceIndex,
    tradeRouteIndex,
    
    conflictSpatialIndex,
    citySpatialIndex,
    resourceSpatialIndex,
    
    yearCache: new LRUCache(50), // Cache last 50 years
    
    initialized: true,
  };
  
  store = newStore;
  return newStore;
}

/**
 * Get world state for a specific year - OPTIMIZED
 * Uses pre-built indexes for O(n/100) instead of O(n) lookups
 */
export function getOptimizedWorldState(year: number): WorldState {
  if (!store?.initialized) {
    throw new Error('Data store not initialized. Call initializeDataStore() first.');
  }
  
  // Check cache first
  const cached = store.yearCache.get(year);
  if (cached) {
    return cached;
  }
  
  const result: WorldState = {
    powers: queryTimeIndex(store.powerIndex, year, (p, y) => 
      p.timeRange.start <= y && (p.timeRange.end === null || p.timeRange.end >= y)
    ),
    
    people: queryTimeIndex(store.personIndex, year, (p, y) =>
      p.birth <= y && (p.death === null || p.death >= y)
    ),
    
    events: queryTimeIndex(store.eventIndex, year, (e, y) => {
      const endYear = e.endDate ?? e.date;
      const lookback = y < -1000 ? 100 : (y < 1000 ? 50 : 10);
      return e.date <= y && endYear >= y - lookback;
    }),
    
    connections: store.connections.filter(c =>
      c.timeRange.start <= year &&
      (c.timeRange.end === null || c.timeRange.end >= year)
    ),
    
    policies: store.policies.filter(p =>
      p.enacted <= year &&
      (p.repealed === undefined || p.repealed >= year)
    ),
    
    territories: store.territories.filter(t =>
      t.timeRange.start <= year &&
      (t.timeRange.end === null || t.timeRange.end >= year)
    ),
    
    conflictZones: queryTimeIndex(store.conflictIndex, year, (c, y) =>
      c.timeRange.start <= y && (c.timeRange.end === null || c.timeRange.end >= y)
    ),
    
    cities: queryTimeIndex(store.cityIndex, year, (c, y) => {
      const founded = c.founded ?? -10000;
      const destroyed = c.destroyed ?? y + 1;
      return founded <= y && destroyed >= y;
    }),
    
    resources: queryTimeIndex(store.resourceIndex, year, (r, y) => {
      const discovered = r.discoveredYear ?? -10000;
      const depleted = r.depletedYear ?? y + 1;
      return discovered <= y && depleted >= y;
    }),
    
    tradeRoutes: queryTimeIndex(store.tradeRouteIndex, year, (r, y) =>
      r.timeRange.start <= y && (r.timeRange.end === null || r.timeRange.end >= y)
    ),
  };
  
  // Cache result
  store.yearCache.set(year, result);
  
  return result;
}

/**
 * Get conflicts near a geographic point (for heat map rendering)
 */
export function getConflictsNear(lat: number, lng: number, year: number): ConflictZone[] {
  if (!store?.initialized) return [];
  
  const nearby = queryNearby(store.conflictSpatialIndex, lat, lng, 2);
  return nearby.filter(c => 
    c.timeRange.start <= year && 
    (c.timeRange.end === null || c.timeRange.end >= year)
  );
}

/**
 * Get cities near a geographic point
 */
export function getCitiesNear(lat: number, lng: number, year: number): City[] {
  if (!store?.initialized) return [];
  
  const nearby = queryNearby(store.citySpatialIndex, lat, lng, 1);
  return nearby.filter(c => {
    const founded = c.founded ?? -10000;
    const destroyed = c.destroyed ?? year + 1;
    return founded <= year && destroyed >= year;
  });
}

/**
 * Get resources near a geographic point
 */
export function getResourcesNear(lat: number, lng: number, year: number): NaturalResource[] {
  if (!store?.initialized) return [];
  
  const nearby = queryNearby(store.resourceSpatialIndex, lat, lng, 2);
  return nearby.filter(r => {
    const discovered = r.discoveredYear ?? -10000;
    const depleted = r.depletedYear ?? year + 1;
    return discovered <= year && depleted >= year;
  });
}

/**
 * Preload a range of years (e.g., when user is scrubbing timeline)
 */
export function preloadYearRange(startYear: number, endYear: number): void {
  if (!store?.initialized) return;
  
  // Preload in the background
  requestIdleCallback(() => {
    for (let year = startYear; year <= endYear; year += 10) {
      if (!store!.yearCache.get(year)) {
        getOptimizedWorldState(year);
      }
    }
  });
}

/**
 * Clear caches (useful when switching views or freeing memory)
 */
export function clearCaches(): void {
  store?.yearCache.clear();
}

/**
 * Get database statistics
 */
export function getStats() {
  if (!store?.initialized) return null;
  
  return {
    powers: store.powers.length,
    people: store.people.length,
    events: store.events.length,
    connections: store.connections.length,
    policies: store.policies.length,
    territories: store.territories.length,
    conflictZones: store.conflictZones.length,
    cities: store.cities.length,
    resources: store.resources.length,
    tradeRoutes: store.tradeRoutes.length,
  };
}

