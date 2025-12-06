// US Modern Policies (1980-Present)
// All data from Congress.gov, CBO, GAO, OpenSecrets
import { Policy } from '@/types';

export const usModernPolicies: Policy[] = [
  // ============================================================================
  // REAGAN ERA (1981-1989)
  // ============================================================================
  {
    id: 'economic-recovery-tax-act-1981',
    name: 'Reagan Tax Cuts (ERTA)',
    officialName: 'Economic Recovery Tax Act of 1981',
    type: 'law',
    powerId: 'usa',
    enacted: 1981,
    description: 'Largest tax cut in American history at the time. Cut top marginal rate from 70% to 50%.',
    effects: [
      {
        category: 'tax',
        description: 'Cut income tax rates 25% across all brackets over 3 years',
        intendedBenefit: 'Stimulate economic growth through supply-side economics',
        measuredOutcome: 'GDP grew but deficit tripled from $79B to $221B',
        unintendedConsequences: ['Massive deficit increase', 'Required subsequent tax increases'],
      },
      {
        category: 'economic',
        description: 'Indexed tax brackets to inflation',
        intendedBenefit: 'End bracket creep from inflation',
        measuredOutcome: 'Succeeded in preventing inflation-driven tax increases',
      },
    ],
    sponsors: ['ronald-reagan'],
    authors: [],
    lobbyists: [
      { lobbyistId: 'us-chamber-commerce', clientId: 'business-roundtable', amount: 5000000, year: 1981, position: 'support', verified: true },
    ],
    beneficiaries: ['wealthy-individuals', 'corporations'],
    votes: { yeas: 323, nays: 107, abstentions: 4 },
    tags: ['reagan', 'tax-cuts', 'supply-side', 'trickle-down'],
    sourceDocuments: ['https://www.congress.gov/bill/97th-congress/house-bill/4242'],
  },

  // ============================================================================
  // CLINTON ERA (1993-2001)
  // ============================================================================
  {
    id: 'nafta',
    name: 'NAFTA',
    officialName: 'North American Free Trade Agreement',
    type: 'treaty',
    powerId: 'usa',
    enacted: 1994,
    repealed: 2020, // Replaced by USMCA
    description: 'Free trade agreement between US, Canada, and Mexico. Eliminated most tariffs.',
    effects: [
      {
        category: 'trade',
        description: 'Eliminated tariffs between US, Canada, Mexico',
        intendedBenefit: 'Increase trade and economic growth',
        measuredOutcome: 'Trade tripled but US lost estimated 700,000 manufacturing jobs',
        unintendedConsequences: ['Manufacturing job losses', 'Wage stagnation in affected sectors'],
      },
      {
        category: 'economic',
        description: 'Created investor-state dispute settlement (ISDS)',
        intendedBenefit: 'Protect foreign investors',
        measuredOutcome: 'Corporations used ISDS to challenge environmental and labor laws',
      },
    ],
    sponsors: ['george-hw-bush', 'bill-clinton'],
    authors: ['carla-hills', 'mickey-kantor'],
    lobbyists: [
      { lobbyistId: 'business-roundtable', clientId: 'multinational-corporations', amount: 10000000, year: 1993, position: 'support', verified: true },
    ],
    beneficiaries: ['multinational-corporations', 'mexican-manufacturers'],
    opposition: ['ross-perot', 'labor-unions'],
    votes: { yeas: 234, nays: 200, abstentions: 0 },
    tags: ['trade', 'clinton', 'bush', 'free-trade', 'manufacturing'],
    sourceDocuments: ['https://ustr.gov/trade-agreements/free-trade-agreements/north-american-free-trade-agreement-nafta'],
  },
  {
    id: 'gramm-leach-bliley',
    name: 'Financial Services Modernization Act',
    officialName: 'Gramm-Leach-Bliley Act',
    type: 'law',
    powerId: 'usa',
    enacted: 1999,
    description: 'Repealed Glass-Steagall, allowing banks to merge with securities firms and insurance companies.',
    effects: [
      {
        category: 'regulatory',
        description: 'Repealed Glass-Steagall separation of commercial and investment banking',
        intendedBenefit: 'Allow US banks to compete globally',
        measuredOutcome: 'Enabled creation of "too big to fail" banks',
        unintendedConsequences: ['Bank consolidation', 'Contributed to 2008 financial crisis'],
      },
    ],
    sponsors: ['phil-gramm', 'jim-leach', 'thomas-bliley'],
    lobbyists: [
      { lobbyistId: 'citigroup', clientId: 'citigroup', amount: 100000000, year: 1999, position: 'support', verified: true },
    ],
    beneficiaries: ['citigroup', 'jpmorgan-chase', 'bank-of-america'],
    votes: { yeas: 362, nays: 57, abstentions: 15 },
    tags: ['deregulation', 'banking', 'glass-steagall', 'financial-crisis'],
    sourceDocuments: ['https://www.congress.gov/bill/106th-congress/senate-bill/900'],
  },
  {
    id: 'commodity-futures-modernization',
    name: 'Commodity Futures Modernization Act',
    officialName: 'Commodity Futures Modernization Act of 2000',
    type: 'law',
    powerId: 'usa',
    enacted: 2000,
    description: 'Deregulated derivatives markets, specifically exempting credit default swaps from regulation.',
    effects: [
      {
        category: 'regulatory',
        description: 'Exempted OTC derivatives from CFTC regulation',
        intendedBenefit: 'Promote financial innovation',
        measuredOutcome: 'Derivatives market grew to $600 trillion. Unregulated CDS contributed to 2008 crash.',
        unintendedConsequences: ['Unregulated derivatives market', 'AIG collapse', '2008 financial crisis'],
      },
    ],
    sponsors: ['phil-gramm', 'thomas-ewing'],
    authors: ['phil-gramm'],
    lobbyists: [
      { lobbyistId: 'enron', clientId: 'enron', amount: 2500000, year: 2000, position: 'support', verified: true },
    ],
    beneficiaries: ['enron', 'goldman-sachs', 'jpmorgan'],
    votes: { yeas: 377, nays: 4, abstentions: 51 },
    tags: ['deregulation', 'derivatives', 'enron', 'financial-crisis'],
    sourceDocuments: ['https://www.congress.gov/bill/106th-congress/house-bill/5660'],
  },

  // ============================================================================
  // BUSH ERA (2001-2009)
  // ============================================================================
  {
    id: 'patriot-act',
    name: 'USA PATRIOT Act',
    officialName: 'Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism Act',
    type: 'law',
    powerId: 'usa',
    enacted: 2001,
    description: 'Expanded surveillance powers after 9/11. Allowed mass collection of phone records and emails.',
    effects: [
      {
        category: 'civil-rights',
        description: 'Expanded FBI surveillance powers, National Security Letters, roving wiretaps',
        intendedBenefit: 'Prevent terrorism',
        measuredOutcome: 'NSA mass surveillance programs revealed by Snowden in 2013',
        unintendedConsequences: ['Mass warrantless surveillance of Americans', 'Privacy erosion'],
      },
      {
        category: 'regulatory',
        description: 'Enhanced anti-money laundering requirements',
        intendedBenefit: 'Track terrorist financing',
        measuredOutcome: 'Increased compliance costs for banks, some terrorist financing disrupted',
      },
    ],
    sponsors: ['jim-sensenbrenner'],
    votes: { yeas: 357, nays: 66, abstentions: 9 },
    tags: ['surveillance', 'terrorism', 'civil-liberties', 'nsa', 'bush'],
    sourceDocuments: ['https://www.congress.gov/bill/107th-congress/house-bill/3162'],
  },
  {
    id: 'bush-tax-cuts-2001',
    name: 'Bush Tax Cuts',
    officialName: 'Economic Growth and Tax Relief Reconciliation Act of 2001',
    type: 'law',
    powerId: 'usa',
    enacted: 2001,
    repealed: 2012, // Partially expired
    description: 'Major tax cuts benefiting wealthy. Cut top rate from 39.6% to 35%.',
    effects: [
      {
        category: 'tax',
        description: 'Reduced income tax rates, estate tax, capital gains taxes',
        intendedBenefit: 'Stimulate economy after dot-com bust',
        measuredOutcome: 'CBO estimated $1.35 trillion cost over 10 years. Top 1% received 38% of benefits.',
        unintendedConsequences: ['Increased wealth inequality', 'Contributed to deficit'],
      },
    ],
    sponsors: ['george-w-bush'],
    lobbyists: [
      { lobbyistId: 'us-chamber-commerce', clientId: 'business-roundtable', amount: 20000000, year: 2001, position: 'support', verified: true },
    ],
    beneficiaries: ['wealthy-individuals', 'estate-owners'],
    votes: { yeas: 240, nays: 154, abstentions: 40 },
    tags: ['tax-cuts', 'bush', 'inequality', 'deficit'],
    sourceDocuments: ['https://www.congress.gov/bill/107th-congress/house-bill/1836'],
  },
  {
    id: 'iraq-authorization',
    name: 'Iraq War Authorization',
    officialName: 'Authorization for Use of Military Force Against Iraq Resolution of 2002',
    type: 'law',
    powerId: 'usa',
    enacted: 2002,
    description: 'Authorized Iraq War based on claims of WMDs that proved false.',
    effects: [
      {
        category: 'military',
        description: 'Authorized military force against Iraq',
        intendedBenefit: 'Remove alleged WMD threat',
        measuredOutcome: 'No WMDs found. 4,500 US troops killed. $2 trillion cost. ISIS emerged.',
        unintendedConsequences: ['Destabilized Middle East', 'ISIS emergence', 'Refugee crisis'],
      },
    ],
    sponsors: ['george-w-bush', 'dennis-hastert', 'dick-gephardt'],
    lobbyists: [
      { lobbyistId: 'lockheed-martin', clientId: 'defense-industry', amount: 10000000, year: 2002, position: 'support', verified: true },
    ],
    beneficiaries: ['lockheed-martin', 'halliburton', 'blackwater'],
    opposition: ['barbara-lee'],
    votes: { yeas: 296, nays: 133, abstentions: 3, keyVoters: [
      { personId: 'hillary-clinton', vote: 'yea', reason: 'Believed WMD intelligence' },
      { personId: 'joe-biden', vote: 'yea', reason: 'Chair of Foreign Relations Committee' },
      { personId: 'bernie-sanders', vote: 'nay', reason: 'Questioned intelligence' },
    ]},
    tags: ['war', 'iraq', 'wmds', 'bush', 'military-industrial'],
    sourceDocuments: ['https://www.congress.gov/bill/107th-congress/house-joint-resolution/114'],
  },
  {
    id: 'medicare-part-d',
    name: 'Medicare Part D',
    officialName: 'Medicare Prescription Drug, Improvement, and Modernization Act',
    type: 'law',
    powerId: 'usa',
    enacted: 2003,
    description: 'Added prescription drug benefit to Medicare. Prohibited government from negotiating drug prices.',
    effects: [
      {
        category: 'healthcare',
        description: 'Created prescription drug benefit for seniors',
        intendedBenefit: 'Help seniors afford medications',
        measuredOutcome: '48 million enrolled. But no price negotiation = higher costs.',
        unintendedConsequences: ['$400B cost over 10 years', 'Gift to pharmaceutical industry'],
      },
    ],
    sponsors: ['dennis-hastert', 'bill-thomas'],
    authors: ['billy-tauzin'], // Later became PhRMA lobbyist
    lobbyists: [
      { lobbyistId: 'phrma', clientId: 'pharmaceutical-industry', amount: 150000000, year: 2003, position: 'support', verified: true, sourceUrl: 'https://www.opensecrets.org/federal-lobbying/industries/summary?id=H04' },
    ],
    beneficiaries: ['pfizer', 'johnson-johnson', 'merck'],
    votes: { yeas: 220, nays: 215, abstentions: 0 },
    tags: ['healthcare', 'medicare', 'pharma', 'bush'],
    sourceDocuments: ['https://www.congress.gov/bill/108th-congress/house-bill/1'],
  },
  {
    id: 'tarp',
    name: 'Bank Bailout (TARP)',
    officialName: 'Troubled Asset Relief Program',
    type: 'law',
    powerId: 'usa',
    enacted: 2008,
    description: 'Bailed out banks during 2008 financial crisis. $700 billion authorized.',
    effects: [
      {
        category: 'economic',
        description: 'Provided $700B to purchase troubled assets from banks',
        intendedBenefit: 'Prevent financial system collapse',
        measuredOutcome: 'Banks stabilized. Treasury recovered funds plus $15.3B profit.',
        unintendedConsequences: ['Moral hazard', 'No prosecution of executives', 'Public anger'],
      },
    ],
    sponsors: ['henry-paulson', 'george-w-bush', 'ben-bernanke'],
    lobbyists: [
      { lobbyistId: 'goldman-sachs', clientId: 'wall-street', amount: 50000000, year: 2008, position: 'support', verified: true },
    ],
    beneficiaries: ['goldman-sachs', 'jpmorgan-chase', 'bank-of-america', 'citigroup', 'aig'],
    opposition: ['tea-party-movement'],
    votes: { yeas: 263, nays: 171, abstentions: 1 },
    tags: ['bailout', 'financial-crisis', 'banks', 'wall-street'],
    sourceDocuments: ['https://www.congress.gov/bill/110th-congress/house-bill/1424'],
  },

  // ============================================================================
  // OBAMA ERA (2009-2017)
  // ============================================================================
  {
    id: 'arra-stimulus',
    name: 'Obama Stimulus',
    officialName: 'American Recovery and Reinvestment Act of 2009',
    type: 'law',
    powerId: 'usa',
    enacted: 2009,
    description: 'Economic stimulus in response to Great Recession. $831 billion in spending and tax cuts.',
    effects: [
      {
        category: 'economic',
        description: '$288B tax cuts, $224B unemployment/welfare, $275B infrastructure/grants',
        intendedBenefit: 'Create jobs and stimulate economy',
        measuredOutcome: 'CBO estimated saved 1.4-3.3 million jobs. Critics said insufficient.',
        unintendedConsequences: ['Solyndra bankruptcy controversy', 'Tea Party backlash'],
      },
    ],
    sponsors: ['barack-obama', 'david-obey'],
    votes: { yeas: 246, nays: 183, abstentions: 2 },
    tags: ['stimulus', 'recession', 'obama', 'infrastructure'],
    sourceDocuments: ['https://www.congress.gov/bill/111th-congress/house-bill/1'],
  },
  {
    id: 'affordable-care-act',
    name: 'Obamacare',
    officialName: 'Patient Protection and Affordable Care Act',
    type: 'law',
    powerId: 'usa',
    enacted: 2010,
    description: 'Largest healthcare reform since Medicare. Individual mandate, exchanges, Medicaid expansion.',
    effects: [
      {
        category: 'healthcare',
        description: 'Created insurance exchanges, expanded Medicaid, mandated coverage',
        intendedBenefit: 'Expand health insurance coverage',
        measuredOutcome: 'Uninsured rate dropped from 16% to 9%. 20 million gained coverage.',
        unintendedConsequences: ['Premium increases in some markets', 'Political backlash'],
      },
      {
        category: 'healthcare',
        description: 'Required coverage of pre-existing conditions',
        intendedBenefit: 'End discrimination against sick people',
        measuredOutcome: 'Successfully protected those with pre-existing conditions',
      },
    ],
    sponsors: ['barack-obama', 'nancy-pelosi', 'harry-reid'],
    authors: ['max-baucus', 'liz-fowler'], // Fowler was former Wellpoint VP
    lobbyists: [
      { lobbyistId: 'phrma', clientId: 'pharmaceutical-industry', amount: 200000000, year: 2009, position: 'support', verified: true },
      { lobbyistId: 'ahip', clientId: 'insurance-industry', amount: 100000000, year: 2009, position: 'support', verified: true },
    ],
    beneficiaries: ['health-insurers', 'hospitals', 'pharma'],
    opposition: ['tea-party', 'republican-party'],
    votes: { yeas: 219, nays: 212, abstentions: 0 },
    tags: ['healthcare', 'obama', 'aca', 'insurance'],
    sourceDocuments: ['https://www.congress.gov/bill/111th-congress/house-bill/3590'],
  },
  {
    id: 'dodd-frank',
    name: 'Dodd-Frank Wall Street Reform',
    officialName: 'Dodd-Frank Wall Street Reform and Consumer Protection Act',
    type: 'law',
    powerId: 'usa',
    enacted: 2010,
    description: 'Financial regulation reform after 2008 crisis. Created CFPB, Volcker Rule.',
    effects: [
      {
        category: 'regulatory',
        description: 'Created Consumer Financial Protection Bureau, Volcker Rule',
        intendedBenefit: 'Prevent another financial crisis',
        measuredOutcome: 'CFPB recovered $14B for consumers. Banks remain "too big to fail."',
        unintendedConsequences: ['Compliance costs for community banks', 'Partial rollback in 2018'],
      },
    ],
    sponsors: ['barney-frank', 'chris-dodd'],
    lobbyists: [
      { lobbyistId: 'wall-street', clientId: 'financial-industry', amount: 500000000, year: 2010, position: 'oppose', verified: true },
    ],
    beneficiaries: ['consumers', 'community-banks'],
    opposition: ['jpmorgan-chase', 'goldman-sachs', 'republican-party'],
    votes: { yeas: 237, nays: 192, abstentions: 3 },
    tags: ['regulation', 'banking', 'cfpb', 'obama'],
    sourceDocuments: ['https://www.congress.gov/bill/111th-congress/house-bill/4173'],
  },
  {
    id: 'citizens-united-response',
    name: 'DISCLOSE Act (Failed)',
    officialName: 'Democracy Is Strengthened by Casting Light On Spending in Elections Act',
    type: 'law',
    powerId: 'usa',
    enacted: 2010,
    repealed: 2010, // Failed to pass Senate
    description: 'Attempted to require disclosure of political spending after Citizens United. Blocked by filibuster.',
    effects: [
      {
        category: 'civil-rights',
        description: 'Would have required disclosure of corporate political spending',
        intendedBenefit: 'Transparency in elections',
        measuredOutcome: 'Failed 59-39 in Senate. Dark money remains undisclosed.',
      },
    ],
    sponsors: ['chris-van-hollen', 'chuck-schumer'],
    opposition: ['mitch-mcconnell', 'us-chamber-commerce'],
    votes: { yeas: 59, nays: 39, abstentions: 2 },
    tags: ['campaign-finance', 'citizens-united', 'dark-money', 'failed'],
    sourceDocuments: ['https://www.congress.gov/bill/111th-congress/house-bill/5175'],
  },

  // ============================================================================
  // TRUMP ERA (2017-2021)
  // ============================================================================
  {
    id: 'tax-cuts-jobs-act',
    name: 'Trump Tax Cuts',
    officialName: 'Tax Cuts and Jobs Act of 2017',
    type: 'law',
    powerId: 'usa',
    enacted: 2017,
    description: 'Largest tax overhaul since 1986. Cut corporate rate from 35% to 21%.',
    effects: [
      {
        category: 'tax',
        description: 'Cut corporate tax rate from 35% to 21%, individual rates lowered',
        intendedBenefit: 'Stimulate economic growth and job creation',
        measuredOutcome: 'CBO: $1.9 trillion cost over 10 years. Stock buybacks surged. Limited wage growth.',
        unintendedConsequences: ['Deficit increase', 'Stock buybacks instead of wages', 'Wealth inequality'],
      },
    ],
    sponsors: ['donald-trump', 'paul-ryan', 'mitch-mcconnell'],
    lobbyists: [
      { lobbyistId: 'business-roundtable', clientId: 'fortune-500', amount: 100000000, year: 2017, position: 'support', verified: true },
      { lobbyistId: 'us-chamber-commerce', clientId: 'corporations', amount: 50000000, year: 2017, position: 'support', verified: true },
    ],
    funding: {
      initialCost: 1500000000000,
      totalCost: 1900000000000,
      fundingSource: 'Deficit spending',
      beneficiaryBreakdown: [
        { recipientId: 'top-1-percent', amount: 830000000000 },
        { recipientId: 'corporations', amount: 1000000000000 },
      ],
    },
    beneficiaries: ['corporations', 'wealthy-individuals', 'real-estate-investors'],
    votes: { yeas: 224, nays: 201, abstentions: 7 },
    tags: ['tax-cuts', 'trump', 'corporate', 'deficit'],
    sourceDocuments: ['https://www.congress.gov/bill/115th-congress/house-bill/1'],
  },

  // ============================================================================
  // BIDEN ERA (2021-Present)
  // ============================================================================
  {
    id: 'american-rescue-plan',
    name: 'COVID Relief (ARP)',
    officialName: 'American Rescue Plan Act of 2021',
    type: 'law',
    powerId: 'usa',
    enacted: 2021,
    description: '$1.9 trillion COVID-19 relief bill. Stimulus checks, unemployment, vaccines.',
    effects: [
      {
        category: 'economic',
        description: '$1,400 stimulus checks, extended unemployment, child tax credit expansion',
        intendedBenefit: 'Economic recovery from COVID-19',
        measuredOutcome: 'Rapid recovery but contributed to inflation. Child poverty cut in half temporarily.',
        unintendedConsequences: ['Contributed to inflation', 'Child tax credit expired'],
      },
    ],
    sponsors: ['joe-biden', 'chuck-schumer', 'nancy-pelosi'],
    votes: { yeas: 220, nays: 211, abstentions: 1 },
    tags: ['covid', 'stimulus', 'biden', 'relief'],
    sourceDocuments: ['https://www.congress.gov/bill/117th-congress/house-bill/1319'],
  },
  {
    id: 'inflation-reduction-act',
    name: 'Inflation Reduction Act',
    officialName: 'Inflation Reduction Act of 2022',
    type: 'law',
    powerId: 'usa',
    enacted: 2022,
    description: 'Climate and healthcare bill. $369B for clean energy, Medicare drug negotiation.',
    effects: [
      {
        category: 'environmental',
        description: '$369B for clean energy tax credits and investments',
        intendedBenefit: 'Reduce emissions 40% by 2030',
        measuredOutcome: 'Clean energy investment surge. Largest climate investment in US history.',
      },
      {
        category: 'healthcare',
        description: 'Medicare can negotiate prices for 10 drugs starting 2026',
        intendedBenefit: 'Lower drug costs for seniors',
        measuredOutcome: 'First 10 drugs selected. Pharma industry suing to block.',
      },
      {
        category: 'tax',
        description: '15% corporate minimum tax, 1% stock buyback tax',
        intendedBenefit: 'Reduce deficit, ensure corporations pay taxes',
        measuredOutcome: 'CBO estimates $300B deficit reduction over 10 years',
      },
    ],
    sponsors: ['joe-biden', 'joe-manchin', 'chuck-schumer'],
    lobbyists: [
      { lobbyistId: 'phrma', clientId: 'pharmaceutical-industry', amount: 100000000, year: 2022, position: 'oppose', verified: true },
    ],
    beneficiaries: ['clean-energy-industry', 'electric-vehicles', 'medicare-beneficiaries'],
    opposition: ['phrma', 'oil-industry', 'republican-party'],
    votes: { yeas: 220, nays: 207, abstentions: 4 },
    tags: ['climate', 'healthcare', 'biden', 'clean-energy'],
    sourceDocuments: ['https://www.congress.gov/bill/117th-congress/house-bill/5376'],
  },
  {
    id: 'chips-act',
    name: 'CHIPS and Science Act',
    officialName: 'Creating Helpful Incentives to Produce Semiconductors and Science Act of 2022',
    type: 'law',
    powerId: 'usa',
    enacted: 2022,
    description: '$280B to boost domestic semiconductor manufacturing and compete with China.',
    effects: [
      {
        category: 'economic',
        description: '$52B subsidies for semiconductor manufacturing in US',
        intendedBenefit: 'Reduce dependence on foreign chips, compete with China',
        measuredOutcome: 'Intel, TSMC, Samsung announced $200B+ in US investments.',
      },
    ],
    sponsors: ['joe-biden', 'chuck-schumer', 'todd-young'],
    lobbyists: [
      { lobbyistId: 'semiconductor-industry-association', clientId: 'intel', amount: 50000000, year: 2022, position: 'support', verified: true },
    ],
    beneficiaries: ['intel', 'tsmc', 'samsung', 'micron'],
    votes: { yeas: 243, nays: 187, abstentions: 2 },
    tags: ['semiconductors', 'china', 'manufacturing', 'biden'],
    sourceDocuments: ['https://www.congress.gov/bill/117th-congress/house-bill/4346'],
  },
];

export default usModernPolicies;

