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
  type?: 'core' | 'colony' | 'vassal' | 'occupation' | 'protectorate' | 'mandate';
  regions?: Region[]; // Sub-national divisions
  cities?: City[]; // Major cities in territory
  resources?: string[]; // Resource IDs in this territory
}

// Sub-national administrative region (state, province, oblast, etc.)
export interface Region {
  id: string;
  name: string;
  nativeName?: string;
  type: 'state' | 'province' | 'region' | 'oblast' | 'prefecture' | 'county' | 'department' | 'land' | 'canton' | 'emirate';
  coordinates: GeoCoordinates[]; // Polygon boundary
  geoJson?: any;
  parentTerritoryId: string;
  powerId: string;
  timeRange: TimeRange;
  capital?: string; // City ID
  population?: PopulationHistory[];
  resources?: string[]; // Resource IDs
  tags: string[];
}

// City/Settlement
export interface City {
  id: string;
  name: string;
  nativeName?: string;
  historicalNames?: { name: string; timeRange: TimeRange }[];
  coordinates: GeoCoordinates;
  founded?: number;
  destroyed?: number;
  type: 'capital' | 'major-city' | 'city' | 'town' | 'port' | 'fortress' | 'religious-center' | 'trade-hub';
  powerId: string;
  controlHistory: ControlPeriod[]; // Who controlled it over time
  population?: PopulationHistory[];
  significance: 'minor' | 'regional' | 'national' | 'global';
  features?: CityFeature[];
  description: string;
  tags: string[];
}

export interface ControlPeriod {
  powerId: string;
  timeRange: TimeRange;
  method?: 'founded' | 'conquest' | 'treaty' | 'purchase' | 'inheritance' | 'native' | 'independence' | 'liberation' | 'occupation';
}

export interface PopulationHistory {
  year: number;
  population: number;
  source?: string;
}

export interface CityFeature {
  type: 'port' | 'fortress' | 'palace' | 'temple' | 'university' | 'market' | 'mint' | 'arsenal' | 'wall';
  name?: string;
  builtYear?: number;
}

// Natural Resource / Mineral Deposit
export interface NaturalResource {
  id: string;
  name: string;
  type: ResourceType;
  coordinates: GeoCoordinates;
  radius?: number; // Deposit area in km
  polygon?: GeoCoordinates[]; // For larger deposits/regions
  discoveredYear?: number;
  depletedYear?: number;
  abundance: 'minor' | 'moderate' | 'major' | 'world-class';
  controlHistory: ResourceControl[];
  annualProduction?: ProductionHistory[];
  strategicValue: 1 | 2 | 3 | 4 | 5; // 1=minor, 5=critical
  description: string;
  tags: string[];
}

export type ResourceType = 
  // Precious metals
  | 'gold' | 'silver' | 'platinum'
  // Industrial metals
  | 'iron' | 'copper' | 'tin' | 'lead' | 'zinc' | 'aluminum' | 'nickel'
  // Strategic metals
  | 'uranium' | 'lithium' | 'cobalt' | 'rare-earths' | 'tungsten' | 'titanium'
  // Energy
  | 'coal' | 'oil' | 'natural-gas' | 'hydroelectric' | 'geothermal'
  // Gems
  | 'diamonds' | 'emeralds' | 'rubies' | 'jade'
  // Agricultural
  | 'fertile-land' | 'timber' | 'rubber' | 'cotton' | 'spices' | 'tea' | 'coffee' | 'sugar'
  // Other
  | 'salt' | 'fish' | 'ivory' | 'silk' | 'fur' | 'water';

export interface ResourceControl {
  controllerId: string; // Power ID
  timeRange: TimeRange;
  method: 'native' | 'conquest' | 'treaty' | 'purchase' | 'concession' | 'nationalization' | 'independence' | 'colonial' | 'trade';
  extractionRate?: 'none' | 'low' | 'medium' | 'high' | 'intensive';
  profitDestination?: string; // Where profits went (Power ID)
}

export interface ProductionHistory {
  year: number;
  amount: number;
  unit: string; // tons, barrels, carats, etc.
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
  fundedBy?: FundingSource[]; // Detailed funding sources
  ideology?: Ideology; // Political/economic beliefs
  netWorth?: NetWorthHistory[]; // Wealth over time
  education?: Education[];
  description: string;
  imageUrl?: string;
  tags: string[];
}

export interface PersonRole {
  title: string;
  powerId: string;
  timeRange: TimeRange;
  keyPolicies?: string[]; // Policy IDs enacted in this role
  achievements?: string[];
  controversies?: string[];
}

export interface FundingSource {
  sourceId: string; // Power or Person ID
  sourceType: 'person' | 'power' | 'pac' | 'super-pac' | 'corporation' | 'foundation';
  amount?: number; // USD equivalent
  timeRange: TimeRange;
  purpose?: string;
  verified: boolean;
  sourceDocuments?: string[]; // URLs to FEC filings, etc.
}

export interface Ideology {
  economic: 'far-left' | 'left' | 'center-left' | 'centrist' | 'center-right' | 'right' | 'far-right';
  social: 'progressive' | 'liberal' | 'moderate' | 'conservative' | 'traditionalist' | 'libertarian';
  governance: 'anarchist' | 'libertarian' | 'democratic' | 'authoritarian' | 'totalitarian';
  keyBeliefs: string[];
  influences: string[]; // Person IDs of intellectual influences
}

export interface NetWorthHistory {
  year: number;
  amount: number; // USD
  source: string;
}

export interface Education {
  institution: string;
  degree?: string;
  field?: string;
  years: TimeRange;
  societies?: string[]; // Skull & Bones, etc.
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
    | 'alliance'
    | 'conflict'
    | 'trade'
    | 'funding'
    | 'influence'
    | 'succession'
    | 'lobbying'
    | 'employment'
    | 'board-membership'
    | 'family'
    | 'mentorship'
    | 'ownership'
    | 'revolving-door'; // Government to private sector
  sourceId: string;
  targetId: string;
  sourceType: 'power' | 'person' | 'event' | 'organization';
  targetType: 'power' | 'person' | 'event' | 'organization';
  timeRange: TimeRange;
  strength: number; // 0-1
  amount?: number; // For financial connections
  description: string;
  verified: boolean;
  sourceDocuments?: string[];
}

// Policy/Law
export interface Policy {
  id: string;
  name: string;
  officialName?: string; // Full legal name
  type: 'law' | 'treaty' | 'executive_order' | 'constitutional' | 'economic' | 'regulation' | 'budget';
  powerId: string;
  enacted: number;
  repealed?: number;
  description: string;
  effects: PolicyEffect[];
  sponsors: string[]; // Person IDs who introduced/championed
  authors?: string[]; // Person IDs who actually wrote it
  lobbyists?: LobbyingRecord[]; // Who lobbied for this
  funding?: PolicyFunding; // Budget/cost
  votes?: VoteRecord;
  beneficiaries?: string[]; // Power IDs (corporations, etc.) that benefit
  opposition?: string[]; // Person IDs who opposed
  tags: string[];
  sourceDocuments?: string[]; // URLs to actual legislation
}

export interface PolicyEffect {
  category: 'economic' | 'social' | 'military' | 'environmental' | 'civil-rights' | 'healthcare' | 'education' | 'tax' | 'trade' | 'regulatory';
  description: string;
  measuredOutcome?: string; // Actual measured result
  intendedBenefit: string;
  unintendedConsequences?: string[];
}

export interface LobbyingRecord {
  lobbyistId: string; // Person or Power ID
  clientId: string; // Who they represent
  amount: number;
  year: number;
  position: 'support' | 'oppose';
  verified: boolean;
  sourceUrl?: string;
}

export interface PolicyFunding {
  initialCost: number;
  totalCost?: number;
  fundingSource: string;
  beneficiaryBreakdown?: { recipientId: string; amount: number }[];
}

export interface VoteRecord {
  yeas: number;
  nays: number;
  abstentions: number;
  keyVoters?: { personId: string; vote: 'yea' | 'nay' | 'abstain'; reason?: string }[];
}

// Organizations - think tanks, PACs, foundations, lobbying groups
export interface Organization {
  id: string;
  name: string;
  type: 'think-tank' | 'pac' | 'super-pac' | 'foundation' | 'lobby' | 'ngo' | 'media' | 'bank' | 'corporation';
  founded: number;
  dissolved?: number;
  headquarters: GeoCoordinates;
  founders: string[]; // Person IDs
  currentLeadership?: string[]; // Person IDs
  funding: OrganizationFunding[];
  ideology?: Ideology;
  affiliatedPoliticians?: string[]; // Person IDs
  majorDonations?: Donation[];
  annualBudget?: number;
  employees?: number;
  description: string;
  influence: 'minor' | 'moderate' | 'major' | 'dominant';
  tags: string[];
  sourceDocuments?: string[];
}

export interface OrganizationFunding {
  sourceId: string;
  sourceType: 'person' | 'corporation' | 'foundation' | 'government';
  amount: number;
  year: number;
  purpose?: string;
  verified: boolean;
}

export interface Donation {
  recipientId: string;
  recipientType: 'person' | 'pac' | 'party' | 'campaign';
  amount: number;
  year: number;
  purpose?: string;
  sourceUrl?: string;
}

// Conflict Zone - for heat map visualization
export interface ConflictZone {
  id: string;
  name: string;
  type: 'war' | 'civil-war' | 'genocide' | 'insurgency' | 'border-conflict' | 'siege' | 'naval-battle' | 'air-campaign' | 'conquest';
  coordinates: GeoCoordinates; // Center point
  radius: number; // Affected area in km
  polygon?: GeoCoordinates[]; // Optional precise area
  timeRange: TimeRange;
  severity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // 1=minor skirmish, 10=total war/genocide
  casualties: {
    military?: number;
    civilian?: number;
    total: number;
    displaced?: number;
  };
  belligerents: {
    side1: string[]; // Power IDs
    side2: string[]; // Power IDs
  };
  commanders: string[]; // Person IDs
  outcome?: 'side1-victory' | 'side2-victory' | 'stalemate' | 'ongoing' | 'negotiated';
  description: string;
  battles?: string[]; // Event IDs of major battles
  treaties?: string[]; // Policy IDs of peace treaties
  tags: string[];
}

// Trade Route - for visualizing commerce connections
export interface TradeRoute {
  id: string;
  name: string;
  type: 'land' | 'sea' | 'river' | 'air';
  waypoints: GeoCoordinates[];
  timeRange: TimeRange;
  traders: string[]; // Power IDs who used this route
  goods: string[]; // What was traded
  volume: 'minor' | 'moderate' | 'major' | 'dominant'; // Economic importance
  controlledBy?: string[]; // Power IDs
  description: string;
  tags: string[];
}

// Migration Path - for visualizing population movements
export interface MigrationPath {
  id: string;
  name: string;
  type: 'conquest' | 'colonization' | 'refugee' | 'economic' | 'forced' | 'nomadic';
  waypoints: GeoCoordinates[];
  origin: GeoCoordinates;
  destination: GeoCoordinates;
  timeRange: TimeRange;
  peoples: string[]; // Power IDs or ethnic group names
  population?: number; // Estimated number of people
  cause: string;
  outcome: string;
  description: string;
  tags: string[];
}

// Treaty/Deal - formal agreements between powers
export interface Treaty {
  id: string;
  name: string;
  type: 'peace' | 'alliance' | 'trade' | 'border' | 'surrender' | 'partition' | 'non-aggression' | 'mutual-defense';
  date: number;
  endDate?: number;
  location: GeoCoordinates; // Where signed
  signatories: string[]; // Power IDs
  negotiators: string[]; // Person IDs
  terms: TreatyTerm[];
  violations?: TreatyViolation[];
  effectiveness: 'successful' | 'partial' | 'failed' | 'violated';
  description: string;
  tags: string[];
}

export interface TreatyTerm {
  type: 'territorial' | 'military' | 'economic' | 'political' | 'reparations';
  description: string;
  beneficiary?: string; // Power ID
  loser?: string; // Power ID
  value?: number; // If quantifiable
}

export interface TreatyViolation {
  violator: string; // Power ID
  date: number;
  description: string;
  consequence?: string;
}

// Full world state at a point in time
export interface WorldState {
  year: number;
  powers: Power[];
  events: HistoricalEvent[];
  people: Person[];
  connections: Connection[];
  policies: Policy[];
  organizations: Organization[];
  conflictZones: ConflictZone[];
  tradeRoutes: TradeRoute[];
  migrations: MigrationPath[];
  treaties: Treaty[];
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
