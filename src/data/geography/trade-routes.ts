// Historical Trade Routes Throughout Time
import { TradeRoute } from '@/types';

export const tradeRoutes: TradeRoute[] = [
  // ============================================================================
  // ANCIENT TRADE ROUTES
  // ============================================================================
  {
    id: 'amber-road',
    name: 'Amber Road',
    type: 'land',
    waypoints: [
      { lat: 54.35, lng: 18.65 }, // Baltic (Gdańsk)
      { lat: 52.23, lng: 21.01 }, // Warsaw
      { lat: 50.08, lng: 14.44 }, // Prague
      { lat: 48.21, lng: 16.37 }, // Vienna
      { lat: 45.44, lng: 12.32 }, // Venice
      { lat: 41.90, lng: 12.50 }, // Rome
    ],
    timeRange: { start: -1600, end: 500 },
    traders: ['roman-empire', 'celtic-tribes', 'germanic-tribes'],
    goods: ['amber', 'furs', 'slaves', 'wine', 'olive-oil'],
    volume: 'major',
    description: 'Connected Baltic amber sources to Mediterranean markets. Operating since Bronze Age.',
    tags: ['ancient', 'amber', 'europe', 'bronze-age'],
  },
  {
    id: 'incense-route',
    name: 'Incense Route',
    type: 'land',
    waypoints: [
      { lat: 15.35, lng: 44.20 }, // Yemen
      { lat: 18.50, lng: 42.70 }, // Najran
      { lat: 21.42, lng: 39.83 }, // Mecca
      { lat: 24.47, lng: 39.61 }, // Medina
      { lat: 30.33, lng: 35.44 }, // Petra
      { lat: 31.78, lng: 35.23 }, // Jerusalem
      { lat: 31.20, lng: 29.92 }, // Alexandria
    ],
    timeRange: { start: -1000, end: 200 },
    traders: ['nabataeans', 'sabaeans', 'roman-empire'],
    goods: ['frankincense', 'myrrh', 'spices', 'silk', 'textiles'],
    volume: 'major',
    controlledBy: ['nabataeans'],
    description: 'Brought Arabian frankincense and myrrh to Mediterranean. Made Petra wealthy.',
    tags: ['ancient', 'incense', 'arabia', 'nabataean'],
  },
  {
    id: 'royal-road-persia',
    name: 'Persian Royal Road',
    type: 'land',
    waypoints: [
      { lat: 38.42, lng: 27.14 }, // Sardis
      { lat: 39.93, lng: 32.85 }, // Ankara
      { lat: 38.37, lng: 43.28 }, // Van
      { lat: 36.19, lng: 37.16 }, // Aleppo
      { lat: 33.33, lng: 44.42 }, // Babylon
      { lat: 32.19, lng: 48.26 }, // Susa
      { lat: 29.94, lng: 52.89 }, // Persepolis
    ],
    timeRange: { start: -500, end: -330 },
    traders: ['achaemenid-persia'],
    goods: ['royal-messages', 'trade-goods', 'tribute'],
    volume: 'major',
    controlledBy: ['achaemenid-persia'],
    description: '2,700 km road with rest stations. Couriers could travel in 9 days. First postal system.',
    tags: ['ancient', 'persia', 'communication', 'achaemenid'],
  },

  // ============================================================================
  // SILK ROAD
  // ============================================================================
  {
    id: 'silk-road-northern',
    name: 'Northern Silk Road',
    type: 'land',
    waypoints: [
      { lat: 34.27, lng: 108.90 }, // Chang'an (Xi'an)
      { lat: 36.06, lng: 103.83 }, // Lanzhou
      { lat: 40.14, lng: 94.66 }, // Dunhuang
      { lat: 42.83, lng: 93.51 }, // Hami
      { lat: 43.91, lng: 87.57 }, // Urumqi
      { lat: 43.25, lng: 77.00 }, // Almaty
      { lat: 39.65, lng: 66.96 }, // Samarkand
      { lat: 39.77, lng: 64.42 }, // Bukhara
      { lat: 37.57, lng: 61.84 }, // Merv
      { lat: 35.69, lng: 51.39 }, // Tehran
      { lat: 38.42, lng: 27.14 }, // Sardis
      { lat: 41.01, lng: 28.98 }, // Constantinople
    ],
    timeRange: { start: -130, end: 1453 },
    traders: ['han-dynasty', 'tang-dynasty', 'roman-empire', 'eastern-roman-empire', 'parthian-empire', 'sassanid-empire', 'abbasid-caliphate', 'mongol-empire'],
    goods: ['silk', 'spices', 'jade', 'glass', 'horses', 'paper', 'gunpowder', 'religions'],
    volume: 'dominant',
    description: 'Greatest trade route in history. Spread Buddhism, Islam, Christianity, and technology.',
    tags: ['ancient', 'medieval', 'silk-road', 'china', 'rome', 'cultural-exchange'],
  },
  {
    id: 'silk-road-southern',
    name: 'Southern Silk Road',
    type: 'land',
    waypoints: [
      { lat: 34.27, lng: 108.90 }, // Chang'an
      { lat: 36.06, lng: 103.83 }, // Lanzhou
      { lat: 40.14, lng: 94.66 }, // Dunhuang
      { lat: 38.93, lng: 77.65 }, // Kashgar
      { lat: 37.10, lng: 79.93 }, // Khotan
      { lat: 35.92, lng: 74.31 }, // Gilgit
      { lat: 33.68, lng: 73.05 }, // Taxila
      { lat: 31.55, lng: 74.34 }, // Lahore
    ],
    timeRange: { start: -130, end: 1400 },
    traders: ['han-dynasty', 'kushan-empire', 'gupta-empire'],
    goods: ['silk', 'jade', 'buddhist-texts', 'spices'],
    volume: 'major',
    description: 'Route through Karakoram passes. Spread Buddhism from India to China.',
    tags: ['ancient', 'medieval', 'silk-road', 'buddhism', 'india'],
  },

  // ============================================================================
  // MARITIME ROUTES - ANCIENT
  // ============================================================================
  {
    id: 'phoenician-routes',
    name: 'Phoenician Maritime Trade',
    type: 'sea',
    waypoints: [
      { lat: 33.89, lng: 35.50 }, // Tyre
      { lat: 35.16, lng: 33.38 }, // Cyprus
      { lat: 35.30, lng: 25.16 }, // Crete
      { lat: 37.98, lng: 23.73 }, // Athens
      { lat: 40.84, lng: 14.25 }, // Naples
      { lat: 36.72, lng: 10.33 }, // Carthage
      { lat: 36.72, lng: -4.42 }, // Málaga
      { lat: 37.39, lng: -6.00 }, // Cádiz
    ],
    timeRange: { start: -1500, end: -146 },
    traders: ['phoenicia', 'carthage'],
    goods: ['purple-dye', 'cedar', 'glass', 'metalwork', 'tin', 'slaves'],
    volume: 'dominant',
    controlledBy: ['phoenicia', 'carthage'],
    description: 'Phoenicians dominated Mediterranean trade for 1,000 years. Founded Carthage. Reached Britain for tin.',
    tags: ['ancient', 'phoenician', 'maritime', 'mediterranean'],
  },
  {
    id: 'roman-grain-trade',
    name: 'Roman Grain Trade',
    type: 'sea',
    waypoints: [
      { lat: 31.20, lng: 29.92 }, // Alexandria
      { lat: 36.80, lng: 10.18 }, // Carthage
      { lat: 37.50, lng: 15.09 }, // Sicily
      { lat: 41.90, lng: 12.50 }, // Ostia/Rome
    ],
    timeRange: { start: -264, end: 476 },
    traders: ['roman-republic', 'roman-empire'],
    goods: ['grain', 'olive-oil', 'wine', 'garum'],
    volume: 'dominant',
    controlledBy: ['roman-empire'],
    description: 'Fed Rome. Egypt and North Africa were the breadbasket. "Bread and circuses" politics.',
    tags: ['ancient', 'roman', 'grain', 'egypt', 'africa'],
  },
  {
    id: 'indian-ocean-spice',
    name: 'Indian Ocean Spice Trade',
    type: 'sea',
    waypoints: [
      { lat: 31.20, lng: 29.92 }, // Alexandria
      { lat: 12.78, lng: 45.03 }, // Aden
      { lat: 19.08, lng: 72.88 }, // Mumbai
      { lat: 9.93, lng: 76.27 }, // Kerala
      { lat: 6.93, lng: 79.84 }, // Sri Lanka
      { lat: 3.14, lng: 101.69 }, // Malacca
      { lat: 31.23, lng: 121.47 }, // Shanghai
    ],
    timeRange: { start: -300, end: 1500 },
    traders: ['roman-empire', 'abbasid-caliphate', 'chola-dynasty', 'srivijaya', 'ming-dynasty'],
    goods: ['pepper', 'cinnamon', 'cloves', 'nutmeg', 'silk', 'porcelain'],
    volume: 'dominant',
    description: 'Monsoon winds enabled trade. Romans spent fortune on Indian spices. Shaped global economy.',
    tags: ['ancient', 'medieval', 'spice-trade', 'indian-ocean', 'monsoon'],
  },

  // ============================================================================
  // MEDIEVAL TRADE ROUTES
  // ============================================================================
  {
    id: 'hanseatic-routes',
    name: 'Hanseatic League Routes',
    type: 'sea',
    waypoints: [
      { lat: 59.94, lng: 10.75 }, // Oslo
      { lat: 59.33, lng: 18.07 }, // Stockholm
      { lat: 59.44, lng: 24.75 }, // Tallinn
      { lat: 56.95, lng: 24.11 }, // Riga
      { lat: 54.35, lng: 18.65 }, // Gdańsk
      { lat: 54.09, lng: 12.13 }, // Rostock
      { lat: 53.87, lng: 10.69 }, // Lübeck
      { lat: 53.55, lng: 10.00 }, // Hamburg
      { lat: 53.08, lng: 8.80 }, // Bremen
      { lat: 52.37, lng: 4.90 }, // Amsterdam
      { lat: 51.92, lng: 4.48 }, // Rotterdam
      { lat: 51.51, lng: -0.13 }, // London
      { lat: 60.39, lng: 5.32 }, // Bergen
    ],
    timeRange: { start: 1200, end: 1669 },
    traders: ['hanseatic-league'],
    goods: ['fish', 'timber', 'grain', 'furs', 'amber', 'cloth', 'salt'],
    volume: 'dominant',
    controlledBy: ['hanseatic-league'],
    description: 'Northern European trade monopoly. 200 cities. Created modern banking and insurance.',
    tags: ['medieval', 'hanseatic', 'baltic', 'germany', 'trade-league'],
  },
  {
    id: 'venetian-routes',
    name: 'Venetian Trade Empire',
    type: 'sea',
    waypoints: [
      { lat: 45.44, lng: 12.32 }, // Venice
      { lat: 43.72, lng: 15.90 }, // Zadar
      { lat: 42.65, lng: 18.09 }, // Dubrovnik
      { lat: 39.62, lng: 19.92 }, // Corfu
      { lat: 35.90, lng: 14.51 }, // Malta
      { lat: 35.30, lng: 25.16 }, // Crete (Candia)
      { lat: 34.92, lng: 33.63 }, // Cyprus
      { lat: 41.01, lng: 28.98 }, // Constantinople
      { lat: 31.20, lng: 29.92 }, // Alexandria
    ],
    timeRange: { start: 800, end: 1797 },
    traders: ['republic-venice'],
    goods: ['spices', 'silk', 'glass', 'slaves', 'salt'],
    volume: 'dominant',
    controlledBy: ['republic-venice'],
    description: 'Venice controlled Mediterranean spice trade for 500 years. Richest city in Europe.',
    tags: ['medieval', 'early-modern', 'venice', 'mediterranean', 'spices'],
  },
  {
    id: 'trans-saharan-gold',
    name: 'Trans-Saharan Trade Routes',
    type: 'land',
    waypoints: [
      { lat: 11.55, lng: -8.05 }, // Niani (Mali)
      { lat: 16.77, lng: -3.01 }, // Timbuktu
      { lat: 21.86, lng: -12.77 }, // Oualata
      { lat: 27.67, lng: -8.15 }, // Sijilmasa
      { lat: 31.63, lng: -8.01 }, // Marrakech
      { lat: 34.02, lng: -6.83 }, // Fez
      { lat: 36.75, lng: 3.06 }, // Algiers
      { lat: 32.90, lng: 13.19 }, // Tripoli
      { lat: 30.04, lng: 31.24 }, // Cairo
    ],
    timeRange: { start: 300, end: 1600 },
    traders: ['ghana-empire', 'mali-empire', 'songhai-empire', 'morocco'],
    goods: ['gold', 'salt', 'slaves', 'kola-nuts', 'textiles'],
    volume: 'dominant',
    description: 'Gold-salt trade. Mansa Musa\'s pilgrimage crashed gold prices in Cairo. Slaves sent north.',
    tags: ['medieval', 'africa', 'gold', 'salt', 'trans-saharan'],
  },

  // ============================================================================
  // AGE OF EXPLORATION ROUTES
  // ============================================================================
  {
    id: 'portuguese-india',
    name: 'Portuguese India Route',
    type: 'sea',
    waypoints: [
      { lat: 38.72, lng: -9.14 }, // Lisbon
      { lat: 32.65, lng: -16.92 }, // Madeira
      { lat: 14.67, lng: -17.44 }, // Dakar
      { lat: -33.92, lng: 18.42 }, // Cape Town
      { lat: -25.97, lng: 32.58 }, // Mozambique
      { lat: -6.17, lng: 39.19 }, // Zanzibar
      { lat: 15.31, lng: 38.93 }, // Massawa
      { lat: 12.78, lng: 45.03 }, // Aden
      { lat: 15.55, lng: 73.75 }, // Goa
      { lat: 3.14, lng: 101.69 }, // Malacca
      { lat: 22.29, lng: 114.16 }, // Macau
    ],
    timeRange: { start: 1498, end: 1800 },
    traders: ['portuguese-empire'],
    goods: ['spices', 'silk', 'porcelain', 'slaves', 'gold'],
    volume: 'dominant',
    controlledBy: ['portuguese-empire'],
    description: 'Vasco da Gama\'s route broke Venetian monopoly. Portugal dominated Indian Ocean for century.',
    tags: ['early-modern', 'portuguese', 'spice-trade', 'colonial'],
  },
  {
    id: 'spanish-treasure-fleet',
    name: 'Spanish Treasure Fleet',
    type: 'sea',
    waypoints: [
      { lat: 37.39, lng: -6.00 }, // Seville/Cádiz
      { lat: 28.45, lng: -16.25 }, // Canaries
      { lat: 18.47, lng: -69.90 }, // Santo Domingo
      { lat: 23.13, lng: -82.38 }, // Havana
      { lat: 19.43, lng: -99.13 }, // Mexico City (via Veracruz)
      { lat: -12.05, lng: -77.04 }, // Lima (via Panama)
      { lat: 25.77, lng: -80.19 }, // Florida Straits
    ],
    timeRange: { start: 1566, end: 1790 },
    traders: ['spanish-empire'],
    goods: ['silver', 'gold', 'emeralds', 'cochineal', 'tobacco', 'chocolate'],
    volume: 'dominant',
    controlledBy: ['spanish-empire'],
    description: 'Annual convoys brought New World silver to Spain. Pirates and hurricanes took heavy toll.',
    tags: ['early-modern', 'spanish', 'silver', 'colonial', 'pirates'],
  },
  {
    id: 'triangular-trade',
    name: 'Atlantic Triangular Trade',
    type: 'sea',
    waypoints: [
      { lat: 51.51, lng: -0.13 }, // London
      { lat: 53.41, lng: -2.99 }, // Liverpool
      { lat: 6.13, lng: 1.22 }, // Elmina (Gold Coast)
      { lat: 6.50, lng: 3.38 }, // Lagos
      { lat: -8.84, lng: 13.23 }, // Luanda
      { lat: 18.00, lng: -76.80 }, // Jamaica
      { lat: 32.30, lng: -64.78 }, // Bermuda
      { lat: 36.85, lng: -76.29 }, // Virginia
      { lat: 41.49, lng: -71.31 }, // Rhode Island
    ],
    timeRange: { start: 1600, end: 1807 },
    traders: ['british-empire', 'portuguese-empire', 'dutch-republic', 'kingdom-france'],
    goods: ['slaves', 'sugar', 'rum', 'tobacco', 'cotton', 'manufactured-goods'],
    volume: 'dominant',
    description: '12 million Africans transported. Sugar plantation profits funded Industrial Revolution.',
    tags: ['early-modern', 'slavery', 'atlantic', 'colonial', 'sugar'],
  },
  {
    id: 'dutch-east-indies',
    name: 'Dutch East Indies Route',
    type: 'sea',
    waypoints: [
      { lat: 52.37, lng: 4.90 }, // Amsterdam
      { lat: -33.92, lng: 18.42 }, // Cape Town
      { lat: -31.95, lng: 115.86 }, // Perth (Roaring Forties)
      { lat: -6.21, lng: 106.85 }, // Batavia (Jakarta)
      { lat: 3.14, lng: 101.69 }, // Malacca
      { lat: 1.35, lng: 103.82 }, // Singapore
      { lat: 35.44, lng: 139.64 }, // Japan (Dejima)
    ],
    timeRange: { start: 1602, end: 1800 },
    traders: ['dutch-republic', 'voc'],
    goods: ['spices', 'nutmeg', 'cloves', 'pepper', 'coffee', 'tea', 'porcelain'],
    volume: 'dominant',
    controlledBy: ['voc'],
    description: 'VOC was world\'s first corporation. Monopolized spice trade. Worth $7.9 trillion in today\'s money.',
    tags: ['early-modern', 'dutch', 'voc', 'spices', 'colonial'],
  },

  // ============================================================================
  // MODERN TRADE ROUTES
  // ============================================================================
  {
    id: 'suez-canal',
    name: 'Suez Canal Route',
    type: 'sea',
    waypoints: [
      { lat: 51.51, lng: -0.13 }, // London
      { lat: 36.13, lng: -5.35 }, // Gibraltar
      { lat: 35.90, lng: 14.51 }, // Malta
      { lat: 31.26, lng: 32.31 }, // Port Said
      { lat: 29.97, lng: 32.55 }, // Suez
      { lat: 12.78, lng: 45.03 }, // Aden
      { lat: 19.08, lng: 72.88 }, // Mumbai
      { lat: 1.35, lng: 103.82 }, // Singapore
      { lat: 22.29, lng: 114.16 }, // Hong Kong
      { lat: 31.23, lng: 121.47 }, // Shanghai
    ],
    timeRange: { start: 1869, end: null },
    traders: ['british-empire', 'global-shipping'],
    goods: ['oil', 'manufactured-goods', 'container-cargo'],
    volume: 'dominant',
    controlledBy: ['egypt'],
    description: 'Cut Europe-Asia route by 7,000 km. 12% of global trade. Suez Crisis 1956 changed world.',
    tags: ['modern', 'contemporary', 'suez', 'canal', 'strategic'],
  },
  {
    id: 'panama-canal',
    name: 'Panama Canal Route',
    type: 'sea',
    waypoints: [
      { lat: 40.71, lng: -74.01 }, // New York
      { lat: 25.77, lng: -80.19 }, // Miami
      { lat: 9.00, lng: -79.50 }, // Panama
      { lat: 33.77, lng: -118.19 }, // Los Angeles
      { lat: 35.44, lng: 139.64 }, // Tokyo
      { lat: 31.23, lng: 121.47 }, // Shanghai
    ],
    timeRange: { start: 1914, end: null },
    traders: ['usa', 'global-shipping'],
    goods: ['manufactured-goods', 'grain', 'container-cargo'],
    volume: 'dominant',
    controlledBy: ['panama'],
    description: 'US-built canal connects Atlantic and Pacific. 5% of world trade. Returned to Panama 1999.',
    tags: ['modern', 'contemporary', 'panama', 'canal', 'usa'],
  },
  {
    id: 'straits-hormuz',
    name: 'Strait of Hormuz Oil Route',
    type: 'sea',
    waypoints: [
      { lat: 26.00, lng: 56.00 }, // Hormuz
      { lat: 25.27, lng: 55.30 }, // Dubai
      { lat: 26.22, lng: 50.59 }, // Bahrain
      { lat: 29.37, lng: 47.98 }, // Kuwait
      { lat: 30.50, lng: 47.78 }, // Basra
    ],
    timeRange: { start: 1950, end: null },
    traders: ['saudi-arabia', 'iraq', 'iran', 'uae', 'kuwait'],
    goods: ['oil', 'lng'],
    volume: 'dominant',
    controlledBy: ['iran', 'oman'],
    description: '21% of global oil passes through. World\'s most strategic chokepoint. Iran can close it.',
    tags: ['contemporary', 'oil', 'strategic', 'middle-east'],
  },
  {
    id: 'malacca-strait',
    name: 'Strait of Malacca',
    type: 'sea',
    waypoints: [
      { lat: 1.35, lng: 103.82 }, // Singapore
      { lat: 3.14, lng: 101.69 }, // Malacca
      { lat: 5.42, lng: 100.31 }, // Penang
      { lat: 5.55, lng: 95.32 }, // Banda Aceh
    ],
    timeRange: { start: 100, end: null },
    traders: ['srivijaya', 'majapahit', 'portuguese-empire', 'dutch-republic', 'british-empire', 'singapore'],
    goods: ['spices', 'oil', 'container-cargo'],
    volume: 'dominant',
    controlledBy: ['singapore', 'malaysia', 'indonesia'],
    description: 'Shortest sea route between Indian and Pacific Oceans. 25% of global trade. Always strategic.',
    tags: ['ancient', 'medieval', 'contemporary', 'strategic', 'chokepoint'],
  },
  {
    id: 'belt-road',
    name: 'Belt and Road Initiative',
    type: 'land',
    waypoints: [
      { lat: 39.90, lng: 116.41 }, // Beijing
      { lat: 34.27, lng: 108.90 }, // Xi'an
      { lat: 43.25, lng: 77.00 }, // Almaty
      { lat: 41.31, lng: 69.28 }, // Tashkent
      { lat: 35.69, lng: 51.39 }, // Tehran
      { lat: 41.01, lng: 28.98 }, // Istanbul
      { lat: 52.52, lng: 13.40 }, // Berlin
      { lat: 51.51, lng: -0.13 }, // London
    ],
    timeRange: { start: 2013, end: null },
    traders: ['prc'],
    goods: ['manufactured-goods', 'infrastructure', 'debt'],
    volume: 'major',
    controlledBy: ['prc'],
    description: 'China\'s $1 trillion infrastructure project. New Silk Road. Debt-trap diplomacy concerns.',
    tags: ['contemporary', 'china', 'infrastructure', 'geopolitics'],
  },
];

export default tradeRoutes;

