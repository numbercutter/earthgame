import { create } from 'zustand';
import { Power, Person, HistoricalEvent, Connection, Policy, SelectedEntity, FilterState } from '@/types';
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

export const useGameStore = create<GameState>((set, get) => ({
  // Initial time state
  currentYear: 2000,
  minYear: -3000,
  maxYear: 2024,
  isPlaying: false,
  playbackSpeed: 1,
  
  // Initial data
  ...getWorldStateForYear(2000),
  get activePowers() { return powers; },
  get activePeople() { return people; },
  get activeEvents() { return events; },
  get activeConnections() { return connections; },
  get activePolicies() { return policies; },
  
  // Selection
  selectedEntity: null,
  hoveredEntity: null,
  
  // Filters
  filters: defaultFilters,
  
  // UI State
  showInfoPanel: true,
  showTimeline: true,
  showFilters: false,
  
  // Actions
  setYear: (year: number) => {
    const { minYear, maxYear } = get();
    const clampedYear = Math.max(minYear, Math.min(maxYear, year));
    const worldState = getWorldStateForYear(clampedYear);
    
    set({
      currentYear: clampedYear,
      activePowers: worldState.powers,
      activePeople: worldState.people,
      activeEvents: worldState.events,
      activeConnections: worldState.connections,
      activePolicies: worldState.policies,
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

