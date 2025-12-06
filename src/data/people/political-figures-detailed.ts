// Detailed Political Figures with Funding, Ideology, and Beliefs
// All data from public records: FEC, OpenSecrets, financial disclosures, voting records
import { Person } from '@/types';

export const detailedPoliticalFigures: Person[] = [
  // ============================================================================
  // MAJOR US POLITICAL FIGURES - DETAILED
  // ============================================================================
  
  // BILLIONAIRE POLITICAL DONORS
  {
    id: 'george-soros',
    name: 'George Soros',
    birth: 1930,
    death: null,
    birthPlace: { lat: 47.50, lng: 19.04 }, // Budapest
    roles: [],
    affiliations: ['open-society-foundations'],
    fundedBy: [],
    ideology: {
      economic: 'center-left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: [
        'Open society (Karl Popper philosophy)',
        'Democratic governance',
        'Human rights',
        'Criminal justice reform',
        'Drug decriminalization',
        'Campaign finance reform',
      ],
      influences: ['karl-popper'],
    },
    netWorth: [
      { year: 2000, amount: 4000000000, source: 'Forbes' },
      { year: 2010, amount: 14200000000, source: 'Forbes' },
      { year: 2020, amount: 8600000000, source: 'Forbes (after $18B to OSF)' },
      { year: 2023, amount: 6700000000, source: 'Forbes' },
    ],
    education: [
      { institution: 'London School of Economics', degree: 'BSc, MSc', field: 'Philosophy', years: { start: 1947, end: 1954 } },
    ],
    description: 'Hungarian-American billionaire investor. Donated $32B+ to Open Society Foundations. Major Democratic donor. Target of antisemitic conspiracy theories.',
    tags: ['billionaire', 'donor', 'progressive', 'open-society', 'democratic'],
  },
  {
    id: 'charles-koch',
    name: 'Charles Koch',
    birth: 1935,
    death: null,
    birthPlace: { lat: 37.69, lng: -97.34 }, // Wichita
    roles: [
      { title: 'CEO', powerId: 'koch-industries', timeRange: { start: 1967, end: null } },
    ],
    affiliations: ['koch-industries', 'cato-institute', 'americans-for-prosperity'],
    fundedBy: [],
    ideology: {
      economic: 'far-right',
      social: 'libertarian',
      governance: 'libertarian',
      keyBeliefs: [
        'Free market capitalism',
        'Minimal government regulation',
        'Lower taxes',
        'School choice',
        'Criminal justice reform',
        'Opposition to corporate welfare',
      ],
      influences: ['ludwig-von-mises', 'friedrich-hayek', 'murray-rothbard'],
    },
    netWorth: [
      { year: 2000, amount: 5000000000, source: 'Forbes' },
      { year: 2010, amount: 21500000000, source: 'Forbes' },
      { year: 2020, amount: 44900000000, source: 'Forbes' },
      { year: 2023, amount: 59000000000, source: 'Forbes' },
    ],
    education: [
      { institution: 'MIT', degree: 'BS, MS', field: 'Engineering', years: { start: 1954, end: 1960 } },
    ],
    description: 'CEO of Koch Industries. With late brother David, built vast political network spending $400M+ per election cycle on libertarian/conservative causes.',
    tags: ['billionaire', 'donor', 'libertarian', 'koch-network', 'republican'],
  },
  {
    id: 'rupert-murdoch',
    name: 'Rupert Murdoch',
    birth: 1931,
    death: null,
    birthPlace: { lat: -37.81, lng: 144.96 }, // Melbourne
    roles: [
      { title: 'Chairman', powerId: 'fox-corporation', timeRange: { start: 2019, end: 2023 } },
      { title: 'Chairman Emeritus', powerId: 'fox-corporation', timeRange: { start: 2023, end: null } },
    ],
    affiliations: ['fox-corporation', 'news-corp'],
    fundedBy: [],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'democratic',
      keyBeliefs: [
        'Free market media',
        'Skepticism of climate science',
        'Immigration restriction',
        'Low taxes',
        'Deregulation',
      ],
      influences: [],
    },
    netWorth: [
      { year: 2000, amount: 6700000000, source: 'Forbes' },
      { year: 2010, amount: 6200000000, source: 'Forbes' },
      { year: 2020, amount: 17600000000, source: 'Forbes' },
      { year: 2023, amount: 16900000000, source: 'Forbes' },
    ],
    description: 'Media mogul who built Fox News into dominant conservative media force. Enormous influence on Republican politics and UK/Australia media.',
    tags: ['billionaire', 'media', 'fox-news', 'conservative'],
  },
  {
    id: 'michael-bloomberg',
    name: 'Michael Bloomberg',
    birth: 1942,
    death: null,
    birthPlace: { lat: 42.36, lng: -71.06 }, // Boston
    roles: [
      { title: 'Mayor', powerId: 'new-york-city', timeRange: { start: 2002, end: 2013 } },
    ],
    affiliations: ['bloomberg-lp'],
    fundedBy: [],
    ideology: {
      economic: 'centrist',
      social: 'liberal',
      governance: 'democratic',
      keyBeliefs: [
        'Gun control',
        'Climate action',
        'Public health initiatives',
        'Business-friendly regulation',
        'Immigration reform',
      ],
      influences: [],
    },
    netWorth: [
      { year: 2010, amount: 18000000000, source: 'Forbes' },
      { year: 2020, amount: 48000000000, source: 'Forbes' },
      { year: 2023, amount: 96300000000, source: 'Forbes' },
    ],
    description: 'Former NYC mayor, spent $1B on 2020 presidential campaign. Major funder of gun control and climate causes through Everytown and Beyond Carbon.',
    tags: ['billionaire', 'mayor', 'gun-control', 'climate', 'centrist'],
  },

  // KEY POLITICIANS WITH DETAILED FUNDING
  {
    id: 'joe-biden',
    name: 'Joe Biden',
    birth: 1942,
    death: null,
    birthPlace: { lat: 41.51, lng: -75.66 }, // Scranton
    roles: [
      { title: 'Senator', powerId: 'usa', timeRange: { start: 1973, end: 2009 }, 
        keyPolicies: ['violent-crime-control-act', 'bankruptcy-abuse-act'],
        achievements: ['Chairman of Judiciary and Foreign Relations Committees'],
        controversies: ['1994 Crime Bill', 'Anita Hill hearings'],
      },
      { title: 'Vice President', powerId: 'usa', timeRange: { start: 2009, end: 2017 } },
      { title: '46th President', powerId: 'usa', timeRange: { start: 2021, end: null },
        keyPolicies: ['american-rescue-plan', 'inflation-reduction-act', 'chips-act'],
        achievements: ['Largest climate investment in US history'],
      },
    ],
    affiliations: ['usa', 'democratic-party'],
    fundedBy: [
      { sourceId: 'future-forward-usa', sourceType: 'super-pac', amount: 200000000, timeRange: { start: 2020, end: 2020 }, verified: true },
      { sourceId: 'actblue', sourceType: 'pac', amount: 400000000, timeRange: { start: 2020, end: 2020 }, verified: true },
    ],
    ideology: {
      economic: 'center-left',
      social: 'liberal',
      governance: 'democratic',
      keyBeliefs: [
        'Labor union support',
        'Climate action',
        'Affordable healthcare',
        'NATO alliance',
        'Democracy vs autocracy framing',
      ],
      influences: [],
    },
    education: [
      { institution: 'University of Delaware', degree: 'BA', field: 'History/Political Science', years: { start: 1961, end: 1965 } },
      { institution: 'Syracuse University', degree: 'JD', field: 'Law', years: { start: 1965, end: 1968 } },
    ],
    description: '46th President. Longest-serving Senator from Delaware. Key architect of 1994 Crime Bill. As president, passed major climate and infrastructure legislation.',
    tags: ['president', 'senator', 'democratic', 'labor'],
  },
  {
    id: 'donald-trump',
    name: 'Donald Trump',
    birth: 1946,
    death: null,
    birthPlace: { lat: 40.71, lng: -74.01 }, // Queens, NYC
    roles: [
      { title: '45th President', powerId: 'usa', timeRange: { start: 2017, end: 2021 },
        keyPolicies: ['tax-cuts-jobs-act', 'travel-ban', 'tariffs-china'],
        achievements: ['Three Supreme Court justices', 'Abraham Accords'],
        controversies: ['Two impeachments', 'January 6', 'Election denial'],
      },
    ],
    affiliations: ['usa', 'republican-party', 'trump-organization'],
    fundedBy: [
      { sourceId: 'winred', sourceType: 'pac', amount: 250000000, timeRange: { start: 2020, end: 2020 }, verified: true },
      { sourceId: 'sheldon-adelson', sourceType: 'person', amount: 90000000, timeRange: { start: 2020, end: 2020 }, verified: true },
      { sourceId: 'peter-thiel', sourceType: 'person', amount: 15000000, timeRange: { start: 2016, end: 2016 }, verified: true },
    ],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'authoritarian',
      keyBeliefs: [
        'America First nationalism',
        'Immigration restriction',
        'Trade protectionism',
        'Skepticism of alliances',
        'Deregulation',
        'Tax cuts',
      ],
      influences: ['roy-cohn', 'steve-bannon'],
    },
    netWorth: [
      { year: 2015, amount: 4100000000, source: 'Forbes' },
      { year: 2020, amount: 2500000000, source: 'Forbes' },
      { year: 2023, amount: 2500000000, source: 'Forbes' },
    ],
    education: [
      { institution: 'Fordham University', years: { start: 1964, end: 1966 } },
      { institution: 'Wharton School', degree: 'BS', field: 'Economics', years: { start: 1966, end: 1968 } },
    ],
    description: '45th President. Real estate developer and TV personality. First president impeached twice. Challenged 2020 election results.',
    tags: ['president', 'republican', 'maga', 'nationalist'],
  },
  {
    id: 'mitch-mcconnell',
    name: 'Mitch McConnell',
    birth: 1942,
    death: null,
    birthPlace: { lat: 33.52, lng: -86.80 }, // Sheffield, Alabama
    roles: [
      { title: 'Senator', powerId: 'usa', timeRange: { start: 1985, end: null },
        keyPolicies: ['tax-cuts-jobs-act'],
        achievements: ['Three Trump Supreme Court justices', 'Blocked Merrick Garland'],
        controversies: ['Blocking Garland nomination', 'Filibuster use'],
      },
      { title: 'Senate Majority Leader', powerId: 'usa', timeRange: { start: 2015, end: 2021 } },
      { title: 'Senate Minority Leader', powerId: 'usa', timeRange: { start: 2021, end: null } },
    ],
    affiliations: ['usa', 'republican-party'],
    fundedBy: [
      { sourceId: 'blackstone', sourceType: 'corporation', amount: 500000, timeRange: { start: 2020, end: 2020 }, verified: true },
      { sourceId: 'coal-industry', sourceType: 'corporation', amount: 1000000, timeRange: { start: 2020, end: 2020 }, verified: true },
    ],
    ideology: {
      economic: 'right',
      social: 'conservative',
      governance: 'democratic',
      keyBeliefs: [
        'Judicial appointments',
        'Corporate tax cuts',
        'Opposition to campaign finance reform',
        'Free trade',
        'Strong national defense',
      ],
      influences: [],
    },
    education: [
      { institution: 'University of Louisville', degree: 'BA', field: 'Political Science', years: { start: 1960, end: 1964 } },
      { institution: 'University of Kentucky', degree: 'JD', field: 'Law', years: { start: 1964, end: 1967 } },
    ],
    description: 'Longest-serving Senate party leader in history. Master of Senate procedure. Transformed federal judiciary through strategic confirmations.',
    tags: ['senator', 'republican', 'judiciary', 'senate-leader'],
  },
  {
    id: 'nancy-pelosi',
    name: 'Nancy Pelosi',
    birth: 1940,
    death: null,
    birthPlace: { lat: 39.29, lng: -76.61 }, // Baltimore
    roles: [
      { title: 'Representative', powerId: 'usa', timeRange: { start: 1987, end: null } },
      { title: 'Speaker of the House', powerId: 'usa', timeRange: { start: 2007, end: 2011 } },
      { title: 'Speaker of the House', powerId: 'usa', timeRange: { start: 2019, end: 2023 },
        keyPolicies: ['affordable-care-act', 'american-rescue-plan'],
        achievements: ['Passed ACA', 'Two Trump impeachments'],
      },
    ],
    affiliations: ['usa', 'democratic-party'],
    fundedBy: [
      { sourceId: 'alphabet', sourceType: 'corporation', amount: 200000, timeRange: { start: 2020, end: 2020 }, verified: true },
      { sourceId: 'facebook', sourceType: 'corporation', amount: 150000, timeRange: { start: 2020, end: 2020 }, verified: true },
    ],
    ideology: {
      economic: 'center-left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: [
        'Healthcare access',
        'Climate action',
        'LGBTQ+ rights',
        'Labor rights',
        'Taiwan support',
      ],
      influences: [],
    },
    netWorth: [
      { year: 2020, amount: 120000000, source: 'OpenSecrets' },
      { year: 2023, amount: 240000000, source: 'OpenSecrets' },
    ],
    description: 'First female Speaker. Master fundraiser. Stock trading during office controversial. Strong Taiwan advocate.',
    tags: ['speaker', 'representative', 'democratic', 'san-francisco'],
  },
  {
    id: 'bernie-sanders',
    name: 'Bernie Sanders',
    birth: 1941,
    death: null,
    birthPlace: { lat: 40.71, lng: -74.01 }, // Brooklyn
    roles: [
      { title: 'Mayor', powerId: 'burlington-vt', timeRange: { start: 1981, end: 1989 } },
      { title: 'Representative', powerId: 'usa', timeRange: { start: 1991, end: 2007 } },
      { title: 'Senator', powerId: 'usa', timeRange: { start: 2007, end: null },
        keyPolicies: [],
        achievements: ['Senate Budget Committee Chairman'],
        controversies: [],
      },
    ],
    affiliations: ['usa'],
    fundedBy: [
      { sourceId: 'individual-donors', sourceType: 'person', amount: 211000000, timeRange: { start: 2020, end: 2020 }, purpose: 'Small-dollar donations', verified: true },
    ],
    ideology: {
      economic: 'left',
      social: 'progressive',
      governance: 'democratic',
      keyBeliefs: [
        'Medicare for All',
        'Free college tuition',
        'Break up big banks',
        'Green New Deal',
        'Campaign finance reform',
        'Wealth tax',
        'Union support',
      ],
      influences: ['eugene-debs', 'franklin-roosevelt'],
    },
    netWorth: [
      { year: 2020, amount: 2500000, source: 'Forbes' },
    ],
    description: 'Longest-serving independent in Congress. Democratic socialist who popularized progressive policies. 2016/2020 presidential candidate.',
    tags: ['senator', 'independent', 'democratic-socialist', 'progressive'],
  },

  // SUPREME COURT JUSTICES
  {
    id: 'clarence-thomas',
    name: 'Clarence Thomas',
    birth: 1948,
    death: null,
    birthPlace: { lat: 32.08, lng: -81.09 }, // Pin Point, Georgia
    roles: [
      { title: 'Supreme Court Justice', powerId: 'usa', timeRange: { start: 1991, end: null },
        achievements: ['Longest-serving current justice'],
        controversies: ['Anita Hill hearings', 'Ginni Thomas Jan 6 texts', 'Undisclosed gifts from Harlan Crow'],
      },
    ],
    affiliations: ['usa'],
    fundedBy: [
      { sourceId: 'harlan-crow', sourceType: 'person', timeRange: { start: 1990, end: null }, purpose: 'Luxury travel, real estate, tuition', verified: true },
    ],
    ideology: {
      economic: 'far-right',
      social: 'conservative',
      governance: 'libertarian',
      keyBeliefs: [
        'Originalism',
        'Limited federal power',
        'Second Amendment rights',
        'States rights',
        'Skeptical of affirmative action',
      ],
      influences: ['antonin-scalia'],
    },
    education: [
      { institution: 'Yale Law School', degree: 'JD', field: 'Law', years: { start: 1971, end: 1974 } },
    ],
    description: 'Most conservative Supreme Court justice. Confirmed after contentious hearings with Anita Hill. ProPublica revealed undisclosed luxury gifts from billionaire Harlan Crow.',
    tags: ['supreme-court', 'conservative', 'originalist'],
  },

  // TECH BILLIONAIRES IN POLITICS
  {
    id: 'peter-thiel',
    name: 'Peter Thiel',
    birth: 1967,
    death: null,
    birthPlace: { lat: 50.11, lng: 8.68 }, // Frankfurt
    roles: [],
    affiliations: ['palantir', 'founders-fund'],
    fundedBy: [],
    ideology: {
      economic: 'right',
      social: 'libertarian',
      governance: 'libertarian',
      keyBeliefs: [
        'Techno-libertarianism',
        'Skepticism of democracy',
        'Cryptocurrency advocacy',
        'Anti-monopoly regulation',
        'Seasteading',
      ],
      influences: ['rene-girard', 'leo-strauss'],
    },
    netWorth: [
      { year: 2020, amount: 2300000000, source: 'Forbes' },
      { year: 2023, amount: 4200000000, source: 'Forbes' },
    ],
    education: [
      { institution: 'Stanford University', degree: 'BA', field: 'Philosophy', years: { start: 1985, end: 1989 } },
      { institution: 'Stanford Law School', degree: 'JD', field: 'Law', years: { start: 1989, end: 1992 } },
    ],
    description: 'PayPal co-founder, Palantir founder. Major Trump donor in 2016. Funded JD Vance and Blake Masters campaigns. Expressed skepticism that "freedom and democracy are compatible."',
    tags: ['billionaire', 'tech', 'libertarian', 'trump-donor'],
  },
  {
    id: 'elon-musk-political',
    name: 'Elon Musk',
    birth: 1971,
    death: null,
    birthPlace: { lat: -25.75, lng: 28.19 }, // Pretoria
    roles: [],
    affiliations: ['tesla', 'spacex', 'x-twitter'],
    fundedBy: [],
    ideology: {
      economic: 'right',
      social: 'libertarian',
      governance: 'libertarian',
      keyBeliefs: [
        'Free speech absolutism',
        'Skepticism of ESG',
        'Multi-planetary species',
        'AI risk concerns',
        'Population growth',
      ],
      influences: [],
    },
    netWorth: [
      { year: 2020, amount: 24600000000, source: 'Forbes' },
      { year: 2021, amount: 151000000000, source: 'Forbes' },
      { year: 2023, amount: 180000000000, source: 'Forbes' },
    ],
    education: [
      { institution: 'University of Pennsylvania', degree: 'BS', field: 'Economics/Physics', years: { start: 1992, end: 1997 } },
    ],
    description: 'World\'s richest person. Acquired Twitter/X in 2022. Increasingly politically active supporting Republicans. Tesla dependent on EV tax credits.',
    tags: ['billionaire', 'tech', 'tesla', 'twitter', 'republican'],
  },
];

export default detailedPoliticalFigures;

