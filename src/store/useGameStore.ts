import { create } from 'zustand';
import { 
  Power, Person, HistoricalEvent, Connection, Policy, 
  ConflictZone, City, NaturalResource, TradeRoute,
  SelectedEntity, FilterState 
} from '@/types';
import { getWorldStateForYear, powers, people, events, connections, policies } from '@/data/historical-data';

interface GameState {
  // Time
  currentYear: number;
  minYear: number;
  maxYear: number;
  isPlaying: boolean;
  playbackSpeed: number;
  
  // Data for current year
  activePowers: Power[];
  activePeople: Person[];
  activeEvents: HistoricalEvent[];
  activeConnections: Connection[];
  activePolicies: Policy[];
  activeConflictZones: ConflictZone[];
  activeCities: City[];
  activeResources: NaturalResource[];
  activeTradeRoutes: TradeRoute[];
  
  // Data loading state
  isDataLoading: boolean;
  dataError: string | null;
  
  // Selection
  selectedEntity: SelectedEntity | null;
  hoveredEntity: SelectedEntity | null;
  
  // Filters
  filters: FilterState;
  
  // UI State
  showInfoPanel: boolean;
  showTimeline: boolean;
  showFilters: boolean;
  
  // Actions
  setYear: (year: number) => void;
  togglePlayback: () => void;
  setPlaybackSpeed: (speed: number) => void;
  selectEntity: (entity: SelectedEntity | null) => void;
  hoverEntity: (entity: SelectedEntity | null) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  toggleInfoPanel: () => void;
  toggleTimeline: () => void;
  toggleFilters: () => void;
  tick: () => void;
  initializeData: () => Promise<void>;
}

const defaultFilters: FilterState = {
  showPowers: true,
  showEvents: true,
  showPeople: true,
  showConnections: true,
  powerTypes: ['empire', 'nation', 'organization', 'corporation', 'alliance'],
  eventTypes: ['war', 'treaty', 'revolution', 'election', 'assassination', 'discovery', 'founding', 'collapse', 'policy', 'economic', 'disaster'],
  impactLevels: ['minor', 'moderate', 'major', 'transformative'],
  tags: [],
  // Visual aids
  showElevation: true,
  showEquator: true,
  showTropics: true,
  showPolarCircles: true,
  showGraticules: true,
};

// Cache for year data to avoid recalculating
const yearCache = new Map<number, ReturnType<typeof getWorldStateForYear>>();
const MAX_CACHE_SIZE = 100;

function getCachedWorldState(year: number) {
  if (yearCache.has(year)) {
    return yearCache.get(year)!;
  }
  
  const state = getWorldStateForYear(year);
  
  // LRU-style eviction
  if (yearCache.size >= MAX_CACHE_SIZE) {
    const firstKey = yearCache.keys().next().value;
    if (firstKey !== undefined) yearCache.delete(firstKey);
  }
  
  yearCache.set(year, state);
  return state;
}

export const useGameStore = create<GameState>((set, get) => ({
  // Initial time state
  currentYear: 2000,
  minYear: -3000,
  maxYear: 2024,
  isPlaying: false,
  playbackSpeed: 1,
  
  // Initial data - start with empty arrays, load async
  activePowers: [],
  activePeople: [],
  activeEvents: [],
  activeConnections: [],
  activePolicies: [],
  activeConflictZones: [],
  activeCities: [],
  activeResources: [],
  activeTradeRoutes: [],
  
  // Data loading state
  isDataLoading: true,
  dataError: null,
  
  // Selection
  selectedEntity: null,
  hoveredEntity: null,
  
  // Filters
  filters: defaultFilters,
  
  // UI State
  showInfoPanel: true,
  showTimeline: true,
  showFilters: false,
  
  // Initialize data - call this once on app mount
  initializeData: async () => {
    try {
      set({ isDataLoading: true, dataError: null });
      
      // Get initial world state
      const worldState = getCachedWorldState(2000);
      
      set({
        isDataLoading: false,
        activePowers: worldState.powers,
        activePeople: worldState.people,
        activeEvents: worldState.events,
        activeConnections: worldState.connections,
        activePolicies: worldState.policies,
        activeConflictZones: worldState.conflictZones ?? [],
        activeCities: worldState.cities ?? [],
        activeResources: worldState.resources ?? [],
        activeTradeRoutes: worldState.tradeRoutes ?? [],
      });
    } catch (error) {
      set({ 
        isDataLoading: false, 
        dataError: error instanceof Error ? error.message : 'Failed to load data' 
      });
    }
  },
  
  // Actions
  setYear: (year: number) => {
    const { minYear, maxYear } = get();
    const clampedYear = Math.max(minYear, Math.min(maxYear, year));
    
    // Use cached world state for better performance
    const worldState = getCachedWorldState(clampedYear);
    
    set({
      currentYear: clampedYear,
      activePowers: worldState.powers,
      activePeople: worldState.people,
      activeEvents: worldState.events,
      activeConnections: worldState.connections,
      activePolicies: worldState.policies,
      activeConflictZones: worldState.conflictZones ?? [],
      activeCities: worldState.cities ?? [],
      activeResources: worldState.resources ?? [],
      activeTradeRoutes: worldState.tradeRoutes ?? [],
    });
  },
  
  togglePlayback: () => set(state => ({ isPlaying: !state.isPlaying })),
  
  setPlaybackSpeed: (speed: number) => set({ playbackSpeed: speed }),
  
  selectEntity: (entity: SelectedEntity | null) => set({ selectedEntity: entity, showInfoPanel: entity !== null }),
  
  hoverEntity: (entity: SelectedEntity | null) => set({ hoveredEntity: entity }),
  
  setFilters: (newFilters: Partial<FilterState>) => 
    set(state => ({ filters: { ...state.filters, ...newFilters } })),
  
  toggleInfoPanel: () => set(state => ({ showInfoPanel: !state.showInfoPanel })),
  
  toggleTimeline: () => set(state => ({ showTimeline: !state.showTimeline })),
  
  toggleFilters: () => set(state => ({ showFilters: !state.showFilters })),
  
  tick: () => {
    const { isPlaying, playbackSpeed, currentYear, maxYear, setYear } = get();
    if (isPlaying && currentYear < maxYear) {
      setYear(currentYear + playbackSpeed);
    } else if (currentYear >= maxYear) {
      set({ isPlaying: false });
    }
  },
}));

// Helper hooks
export const useCurrentYear = () => useGameStore(state => state.currentYear);
export const useSelectedEntity = () => useGameStore(state => state.selectedEntity);
export const useActivePowers = () => useGameStore(state => state.activePowers);
export const useActiveEvents = () => useGameStore(state => state.activeEvents);
export const useActiveConflictZones = () => useGameStore(state => state.activeConflictZones);
export const useActiveCities = () => useGameStore(state => state.activeCities);
export const useActiveResources = () => useGameStore(state => state.activeResources);
export const useActiveTradeRoutes = () => useGameStore(state => state.activeTradeRoutes);
export const useIsDataLoading = () => useGameStore(state => state.isDataLoading);

// Preload nearby years when user is scrubbing timeline
export function preloadNearbyYears(currentYear: number, range: number = 50) {
  // Preload in idle time
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(() => {
      for (let y = currentYear - range; y <= currentYear + range; y += 10) {
        if (!yearCache.has(y)) {
          getCachedWorldState(y);
        }
      }
    });
  }
}

// Clear cache (useful for memory management)
export function clearYearCache() {
  yearCache.clear();
}

