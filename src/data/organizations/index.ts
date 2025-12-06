// Organizations - Think Tanks, PACs, Foundations, Corporations
// All data sourced from public records: FEC filings, OpenSecrets, IRS 990 forms, SEC filings
import { Organization, Connection, Policy } from '@/types';

// ============================================================================
// THINK TANKS - Policy Research Organizations
// ============================================================================

export const thinkTanks: Organization[] = [
  // RIGHT-LEANING THINK TANKS
  {
    id: 'heritage-foundation',
    name: 'The Heritage Foundation',
    type: 'think-tank',
    founded: 1973,
    headquarters: { lat: 38.89, lng: -77.01 }, // Washington DC
    founders: ['joseph-coors', 'paul-weyrich'],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'libertarian',
      keyBeliefs: [
        'Free market economics',
        'Limited government',
        'Traditional American values',
        'Strong national defense',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'koch-industries', sourceType: 'corporation', amount: 500000, year: 2020, verified: true },
      { sourceId: 'scaife-foundations', sourceType: 'foundation', amount: 1000000, year: 2019, verified: true },
    ],
    annualBudget: 80000000,
    employees: 275,
    description: 'Conservative think tank that authored Project 2025 policy blueprint. Major influence on Reagan and Trump administrations.',
    influence: 'major',
    tags: ['conservative', 'policy', 'project-2025', 'reagan'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/237327730'],
  },
  {
    id: 'cato-institute',
    name: 'Cato Institute',
    type: 'think-tank',
    founded: 1977,
    headquarters: { lat: 38.90, lng: -77.04 },
    founders: ['charles-koch', 'murray-rothbard'],
    ideology: {
      economic: 'right',
      social: 'liberal',
      governance: 'libertarian',
      keyBeliefs: [
        'Individual liberty',
        'Free markets',
        'Peace and non-interventionism',
        'Limited government',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'koch-industries', sourceType: 'corporation', amount: 2000000, year: 2020, verified: true },
    ],
    annualBudget: 40000000,
    employees: 130,
    description: 'Libertarian think tank advocating individual liberty, free markets, and peace. Originally named Charles Koch Foundation.',
    influence: 'major',
    tags: ['libertarian', 'free-market', 'non-interventionism'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/237631302'],
  },
  {
    id: 'american-enterprise-institute',
    name: 'American Enterprise Institute (AEI)',
    type: 'think-tank',
    founded: 1938,
    headquarters: { lat: 38.90, lng: -77.04 },
    founders: [],
    ideology: {
      economic: 'center-right',
      social: 'conservative',
      governance: 'democratic',
      keyBeliefs: [
        'Free enterprise',
        'American global leadership',
        'Strong defense',
        'Opportunity society',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'exxonmobil', sourceType: 'corporation', amount: 200000, year: 2018, verified: true },
    ],
    annualBudget: 60000000,
    employees: 200,
    description: 'Neoconservative think tank. Major influence on Bush administration Iraq policy. Alumni include Dick Cheney.',
    influence: 'major',
    tags: ['neoconservative', 'foreign-policy', 'iraq-war'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/530218495'],
  },

  // LEFT-LEANING THINK TANKS
  {
    id: 'center-american-progress',
    name: 'Center for American Progress (CAP)',
    type: 'think-tank',
    founded: 2003,
    headquarters: { lat: 38.90, lng: -77.03 },
    founders: ['john-podesta'],
    ideology: {
      economic: 'center-left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: [
        'Progressive policies',
        'Clean energy economy',
        'Healthcare access',
        'Economic opportunity',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'george-soros', sourceType: 'person', amount: 1000000, year: 2019, verified: true },
      { sourceId: 'tom-steyer', sourceType: 'person', amount: 500000, year: 2018, verified: true },
    ],
    annualBudget: 50000000,
    employees: 200,
    description: 'Progressive think tank founded by Clinton chief of staff. Major influence on Obama and Biden administrations.',
    influence: 'major',
    tags: ['progressive', 'democratic', 'obama', 'biden'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/113442258'],
  },
  {
    id: 'brookings-institution',
    name: 'Brookings Institution',
    type: 'think-tank',
    founded: 1916,
    headquarters: { lat: 38.91, lng: -77.04 },
    founders: [],
    ideology: {
      economic: 'centrist',
      social: 'moderate',
      governance: 'democratic',
      keyBeliefs: [
        'Evidence-based policy',
        'Bipartisan solutions',
        'Global engagement',
        'Quality research',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'qatar-foundation', sourceType: 'foundation', amount: 14800000, year: 2013, verified: true },
      { sourceId: 'jpmorgan-chase', sourceType: 'corporation', amount: 500000, year: 2019, verified: true },
    ],
    annualBudget: 100000000,
    employees: 300,
    description: 'Oldest US think tank, considered centrist. Received criticism for foreign government funding disclosure.',
    influence: 'dominant',
    tags: ['centrist', 'policy', 'research', 'establishment'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/530196577'],
  },

  // GLOBALIST/ESTABLISHMENT
  {
    id: 'council-foreign-relations',
    name: 'Council on Foreign Relations (CFR)',
    type: 'think-tank',
    founded: 1921,
    headquarters: { lat: 40.77, lng: -73.96 }, // New York
    founders: [],
    ideology: {
      economic: 'centrist',
      social: 'moderate',
      governance: 'democratic',
      keyBeliefs: [
        'American global leadership',
        'International cooperation',
        'Free trade',
        'Multilateralism',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'david-rockefeller', sourceType: 'person', amount: 5000000, year: 2000, verified: true },
    ],
    annualBudget: 60000000,
    employees: 200,
    description: 'Elite foreign policy organization. Members have included most Secretaries of State since WWII.',
    influence: 'dominant',
    tags: ['foreign-policy', 'establishment', 'elite', 'globalist'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/131628168'],
  },
  {
    id: 'trilateral-commission',
    name: 'Trilateral Commission',
    type: 'think-tank',
    founded: 1973,
    headquarters: { lat: 40.75, lng: -73.98 },
    founders: ['david-rockefeller', 'zbigniew-brzezinski'],
    ideology: {
      economic: 'centrist',
      social: 'moderate',
      governance: 'democratic',
      keyBeliefs: [
        'Trilateral cooperation (US, Europe, Japan)',
        'Global economic coordination',
        'Democratic governance',
        'Free trade',
      ],
      influences: [],
    },
    funding: [],
    annualBudget: 5000000,
    employees: 20,
    description: 'International forum for leaders from North America, Europe, and Asia. Critics call it "shadow government."',
    influence: 'major',
    tags: ['globalist', 'trilateral', 'international', 'elite'],
    sourceDocuments: [],
  },
];

// ============================================================================
// MAJOR FOUNDATIONS
// ============================================================================

export const foundations: Organization[] = [
  {
    id: 'open-society-foundations',
    name: 'Open Society Foundations',
    type: 'foundation',
    founded: 1993,
    headquarters: { lat: 40.75, lng: -73.98 },
    founders: ['george-soros'],
    ideology: {
      economic: 'center-left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: [
        'Open society',
        'Human rights',
        'Democratic governance',
        'Justice reform',
      ],
      influences: ['karl-popper'],
    },
    funding: [
      { sourceId: 'george-soros', sourceType: 'person', amount: 18000000000, year: 2017, purpose: 'Endowment transfer', verified: true },
    ],
    majorDonations: [
      { recipientId: 'democratic-party', recipientType: 'party', amount: 128000000, year: 2020, purpose: 'Election support' },
    ],
    annualBudget: 1500000000,
    employees: 1800,
    description: 'Largest private funder of democracy and human rights groups worldwide. Founded by George Soros.',
    influence: 'dominant',
    tags: ['progressive', 'democracy', 'human-rights', 'soros'],
    sourceDocuments: ['https://www.opensocietyfoundations.org/grants-database'],
  },
  {
    id: 'koch-foundation',
    name: 'Charles Koch Foundation',
    type: 'foundation',
    founded: 1980,
    headquarters: { lat: 37.69, lng: -97.34 }, // Wichita
    founders: ['charles-koch'],
    ideology: {
      economic: 'far-right',
      social: 'conservative',
      governance: 'libertarian',
      keyBeliefs: [
        'Free market economy',
        'Limited government',
        'Individual freedom',
        'Peace through trade',
      ],
      influences: ['ludwig-von-mises', 'friedrich-hayek'],
    },
    funding: [
      { sourceId: 'koch-industries', sourceType: 'corporation', amount: 50000000, year: 2020, verified: true },
    ],
    majorDonations: [
      { recipientId: 'george-mason-university', recipientType: 'person', amount: 50000000, year: 2018, purpose: 'Economics research' },
    ],
    annualBudget: 200000000,
    employees: 100,
    description: 'Funds libertarian causes, universities, and think tanks. Part of Koch political network.',
    influence: 'major',
    tags: ['libertarian', 'free-market', 'koch-network'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/480918408'],
  },
  {
    id: 'bill-melinda-gates-foundation',
    name: 'Bill & Melinda Gates Foundation',
    type: 'foundation',
    founded: 2000,
    headquarters: { lat: 47.64, lng: -122.14 }, // Seattle
    founders: ['bill-gates'],
    ideology: {
      economic: 'centrist',
      social: 'liberal',
      governance: 'democratic',
      keyBeliefs: [
        'Global health equity',
        'Education reform',
        'Poverty reduction',
        'Technology for good',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'bill-gates', sourceType: 'person', amount: 50000000000, year: 2020, purpose: 'Personal wealth', verified: true },
      { sourceId: 'warren-buffett', sourceType: 'person', amount: 30000000000, year: 2021, purpose: 'Berkshire shares', verified: true },
    ],
    annualBudget: 6000000000,
    employees: 1700,
    description: 'Largest private foundation. Major funder of global health, vaccines, and US education reform.',
    influence: 'dominant',
    tags: ['philanthropy', 'health', 'education', 'vaccines'],
    sourceDocuments: ['https://www.gatesfoundation.org/about/financials'],
  },
  {
    id: 'rockefeller-foundation',
    name: 'Rockefeller Foundation',
    type: 'foundation',
    founded: 1913,
    headquarters: { lat: 40.76, lng: -73.97 },
    founders: ['john-d-rockefeller'],
    ideology: {
      economic: 'centrist',
      social: 'liberal',
      governance: 'democratic',
      keyBeliefs: [
        'Scientific research',
        'Public health',
        'Food security',
        'Sustainable development',
      ],
      influences: [],
    },
    funding: [
      { sourceId: 'rockefeller-family', sourceType: 'person', amount: 100000000, year: 1913, verified: true },
    ],
    annualBudget: 200000000,
    employees: 200,
    description: 'One of America\'s oldest foundations. Funded Green Revolution, public health initiatives worldwide.',
    influence: 'major',
    tags: ['philanthropy', 'science', 'public-health', 'rockefeller'],
    sourceDocuments: ['https://projects.propublica.org/nonprofits/organizations/131659629'],
  },
];

// ============================================================================
// POLITICAL ACTION COMMITTEES (PACs) AND SUPER PACs
// ============================================================================

export const pacs: Organization[] = [
  {
    id: 'actblue',
    name: 'ActBlue',
    type: 'pac',
    founded: 2004,
    headquarters: { lat: 42.36, lng: -71.06 }, // Boston
    founders: [],
    ideology: {
      economic: 'left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: ['Democratic fundraising', 'Small-dollar donations', 'Progressive causes'],
      influences: [],
    },
    funding: [],
    majorDonations: [
      { recipientId: 'democratic-party', recipientType: 'party', amount: 4700000000, year: 2020, purpose: 'Democratic candidates' },
    ],
    annualBudget: 100000000,
    description: 'Largest Democratic fundraising platform. Processed $4.7 billion in 2020 election cycle.',
    influence: 'dominant',
    tags: ['democratic', 'fundraising', 'small-dollar'],
    sourceDocuments: ['https://www.fec.gov/data/committee/C00401224/'],
  },
  {
    id: 'winred',
    name: 'WinRed',
    type: 'pac',
    founded: 2019,
    headquarters: { lat: 38.90, lng: -77.04 },
    founders: [],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'democratic',
      keyBeliefs: ['Republican fundraising', 'Conservative causes'],
      influences: [],
    },
    funding: [],
    majorDonations: [
      { recipientId: 'republican-party', recipientType: 'party', amount: 1900000000, year: 2020, purpose: 'Republican candidates' },
    ],
    annualBudget: 50000000,
    description: 'Republican answer to ActBlue. Processed $1.9 billion in 2020 cycle.',
    influence: 'major',
    tags: ['republican', 'fundraising'],
    sourceDocuments: ['https://www.fec.gov/data/committee/C00694323/'],
  },
  {
    id: 'priorities-usa',
    name: 'Priorities USA Action',
    type: 'super-pac',
    founded: 2011,
    headquarters: { lat: 38.90, lng: -77.04 },
    founders: [],
    ideology: {
      economic: 'center-left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: ['Democratic victory', 'Progressive policies'],
      influences: [],
    },
    funding: [
      { sourceId: 'george-soros', sourceType: 'person', amount: 9000000, year: 2016, verified: true },
      { sourceId: 'donald-sussman', sourceType: 'person', amount: 22000000, year: 2016, verified: true },
    ],
    majorDonations: [],
    annualBudget: 150000000,
    description: 'Largest Democratic Super PAC. Originally pro-Obama, later supported Clinton and Biden.',
    influence: 'major',
    tags: ['democratic', 'super-pac', 'obama', 'clinton', 'biden'],
    sourceDocuments: ['https://www.fec.gov/data/committee/C00495861/'],
  },
  {
    id: 'club-for-growth',
    name: 'Club for Growth',
    type: 'super-pac',
    founded: 1999,
    headquarters: { lat: 38.90, lng: -77.04 },
    founders: [],
    ideology: {
      economic: 'far-right',
      social: 'conservative',
      governance: 'libertarian',
      keyBeliefs: ['Tax cuts', 'Limited government', 'Free trade', 'Regulatory reform'],
      influences: [],
    },
    funding: [
      { sourceId: 'richard-uihlein', sourceType: 'person', amount: 34000000, year: 2022, verified: true },
    ],
    majorDonations: [],
    annualBudget: 100000000,
    description: 'Anti-tax Super PAC. Primary challenger of moderate Republicans. Major 2024 force.',
    influence: 'major',
    tags: ['republican', 'anti-tax', 'primary-challenges'],
    sourceDocuments: ['https://www.fec.gov/data/committee/C00487470/'],
  },
];

// ============================================================================
// MAJOR CORPORATIONS WITH POLITICAL INFLUENCE
// ============================================================================

export const corporations: Organization[] = [
  {
    id: 'koch-industries',
    name: 'Koch Industries',
    type: 'corporation',
    founded: 1940,
    headquarters: { lat: 37.69, lng: -97.34 }, // Wichita
    founders: ['fred-koch'],
    currentLeadership: ['charles-koch'],
    funding: [],
    majorDonations: [
      { recipientId: 'republican-party', recipientType: 'party', amount: 400000000, year: 2018, purpose: 'Koch network spending' },
    ],
    annualBudget: 115000000000, // Revenue
    employees: 122000,
    description: 'Second-largest private company in US. Koch brothers built vast political network spending hundreds of millions.',
    influence: 'dominant',
    tags: ['oil', 'chemicals', 'koch-network', 'republican'],
    sourceDocuments: [],
  },
  {
    id: 'blackrock',
    name: 'BlackRock',
    type: 'corporation',
    founded: 1988,
    headquarters: { lat: 40.76, lng: -73.97 },
    founders: ['larry-fink'],
    currentLeadership: ['larry-fink'],
    funding: [],
    annualBudget: 10000000000000, // AUM
    employees: 18000,
    description: 'World\'s largest asset manager with $10 trillion AUM. Major shareholder in virtually every public company.',
    influence: 'dominant',
    tags: ['finance', 'asset-management', 'esg', 'institutional'],
    sourceDocuments: ['https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001364742'],
  },
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    type: 'corporation',
    founded: 1869,
    headquarters: { lat: 40.71, lng: -74.01 },
    founders: [],
    funding: [],
    majorDonations: [
      { recipientId: 'democratic-party', recipientType: 'party', amount: 2500000, year: 2020 },
      { recipientId: 'republican-party', recipientType: 'party', amount: 2000000, year: 2020 },
    ],
    annualBudget: 60000000000,
    employees: 45000,
    description: 'Major investment bank. "Government Sachs" - many executives became Treasury Secretaries.',
    influence: 'dominant',
    tags: ['finance', 'investment-banking', 'wall-street', 'revolving-door'],
    sourceDocuments: ['https://www.opensecrets.org/orgs/goldman-sachs/summary?id=D000000085'],
  },
  {
    id: 'lockheed-martin',
    name: 'Lockheed Martin',
    type: 'corporation',
    founded: 1995,
    headquarters: { lat: 38.92, lng: -77.23 }, // Bethesda
    founders: [],
    funding: [],
    majorDonations: [
      { recipientId: 'defense-committees', recipientType: 'pac', amount: 3000000, year: 2020, purpose: 'Lobbying Congress' },
    ],
    annualBudget: 67000000000,
    employees: 114000,
    description: 'Largest defense contractor. Top lobbying spender. Makes F-35, missiles, surveillance systems.',
    influence: 'dominant',
    tags: ['defense', 'military-industrial', 'lobbying', 'f35'],
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000000104'],
  },
  {
    id: 'pfizer',
    name: 'Pfizer',
    type: 'corporation',
    founded: 1849,
    headquarters: { lat: 40.75, lng: -73.97 },
    founders: [],
    funding: [],
    majorDonations: [
      { recipientId: 'congressional-campaigns', recipientType: 'pac', amount: 2600000, year: 2020, purpose: 'Political contributions' },
    ],
    annualBudget: 100000000000,
    employees: 83000,
    description: 'Major pharmaceutical company. Developed COVID-19 vaccine. Top lobbying spender in healthcare.',
    influence: 'dominant',
    tags: ['pharma', 'healthcare', 'vaccines', 'lobbying'],
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000000138'],
  },
];

// ============================================================================
// MEDIA ORGANIZATIONS
// ============================================================================

export const mediaOrganizations: Organization[] = [
  {
    id: 'fox-corporation',
    name: 'Fox Corporation',
    type: 'media',
    founded: 2019,
    headquarters: { lat: 40.76, lng: -73.98 },
    founders: ['rupert-murdoch'],
    currentLeadership: ['rupert-murdoch', 'lachlan-murdoch'],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'democratic',
      keyBeliefs: ['Conservative viewpoint', 'Free market', 'Traditional values'],
      influences: [],
    },
    funding: [],
    annualBudget: 14000000000,
    employees: 9000,
    description: 'Parent of Fox News. Dominant conservative media. $787 million Dominion settlement in 2023.',
    influence: 'dominant',
    tags: ['media', 'conservative', 'fox-news', 'murdoch'],
    sourceDocuments: [],
  },
  {
    id: 'comcast-nbcuniversal',
    name: 'Comcast/NBCUniversal',
    type: 'media',
    founded: 1963,
    headquarters: { lat: 39.95, lng: -75.17 }, // Philadelphia
    founders: [],
    funding: [],
    annualBudget: 120000000000,
    employees: 186000,
    description: 'Owns NBC, MSNBC, CNBC. Largest cable company. Major lobbying spender.',
    influence: 'dominant',
    tags: ['media', 'cable', 'nbc', 'msnbc'],
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000000461'],
  },
];

// ============================================================================
// COMBINE ALL ORGANIZATIONS
// ============================================================================

export const allOrganizations: Organization[] = [
  ...thinkTanks,
  ...foundations,
  ...pacs,
  ...corporations,
  ...mediaOrganizations,
];

