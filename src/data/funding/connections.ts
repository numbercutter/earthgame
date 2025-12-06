// Political Funding Connections and Relationships
// All data from public records: FEC, OpenSecrets, FollowTheMoney, ProPublica
import { Connection } from '@/types';

// ============================================================================
// FUNDING CONNECTIONS - Who funds whom
// ============================================================================

export const fundingConnections: Connection[] = [
  // KOCH NETWORK
  {
    id: 'koch-heritage',
    type: 'funding',
    sourceId: 'koch-industries',
    targetId: 'heritage-foundation',
    sourceType: 'organization',
    targetType: 'organization',
    timeRange: { start: 1980, end: null },
    strength: 0.8,
    amount: 20000000,
    description: 'Koch Industries has funded Heritage Foundation since 1980s. Heritage promoted Koch-aligned deregulation policies.',
    verified: true,
    sourceDocuments: ['https://www.sourcewatch.org/index.php/Heritage_Foundation'],
  },
  {
    id: 'koch-cato',
    type: 'funding',
    sourceId: 'charles-koch',
    targetId: 'cato-institute',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 1977, end: null },
    strength: 1.0,
    amount: 50000000,
    description: 'Charles Koch co-founded Cato Institute (originally Charles Koch Foundation). Attempted hostile takeover in 2012.',
    verified: true,
    sourceDocuments: ['https://www.newyorker.com/magazine/2010/08/30/covert-operations'],
  },
  {
    id: 'koch-americans-prosperity',
    type: 'funding',
    sourceId: 'koch-foundation',
    targetId: 'americans-for-prosperity',
    sourceType: 'organization',
    targetType: 'organization',
    timeRange: { start: 2004, end: null },
    strength: 1.0,
    amount: 100000000,
    description: 'Koch-founded grassroots organization. Major force in Tea Party movement and anti-ACA campaigns.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/outsidespending/recips.php?cmte=C90011719'],
  },

  // SOROS NETWORK
  {
    id: 'soros-cap',
    type: 'funding',
    sourceId: 'george-soros',
    targetId: 'center-american-progress',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2003, end: null },
    strength: 0.7,
    amount: 10000000,
    description: 'Soros major donor to CAP since founding. CAP shaped Obama administration policy.',
    verified: true,
    sourceDocuments: ['https://www.opensocietyfoundations.org/grants-database'],
  },
  {
    id: 'soros-moveon',
    type: 'funding',
    sourceId: 'george-soros',
    targetId: 'moveon-org',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2004, end: 2010 },
    strength: 0.8,
    amount: 25000000,
    description: 'Soros gave $25 million to defeat George W. Bush in 2004. MoveOn became major progressive force.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/527s/527cmtedetail_donors.php?cycle=2004&ein=522163632'],
  },

  // WALL STREET TO POLITICS
  {
    id: 'goldman-treasury',
    type: 'revolving-door',
    sourceId: 'goldman-sachs',
    targetId: 'us-treasury',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 1999, end: null },
    strength: 0.9,
    description: 'Multiple Goldman executives became Treasury Secretary: Rubin, Paulson, Mnuchin. Called "Government Sachs."',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/revolving/top.php?display=G'],
  },
  {
    id: 'blackrock-fed',
    type: 'influence',
    sourceId: 'blackrock',
    targetId: 'federal-reserve',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 2020, end: null },
    strength: 0.8,
    description: 'Fed hired BlackRock to manage $750B corporate bond buying program in 2020. Potential conflict of interest.',
    verified: true,
    sourceDocuments: ['https://www.federalreserve.gov/newsevents/pressreleases/monetary20200323b.htm'],
  },

  // DEFENSE INDUSTRY
  {
    id: 'lockheed-pentagon',
    type: 'revolving-door',
    sourceId: 'lockheed-martin',
    targetId: 'pentagon',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 1995, end: null },
    strength: 0.9,
    description: 'Extensive revolving door between Lockheed and Pentagon. Many defense officials become Lockheed lobbyists.',
    verified: true,
    sourceDocuments: ['https://www.pogo.org/investigation/2018/11/brass-parachutes'],
  },
  {
    id: 'raytheon-state',
    type: 'revolving-door',
    sourceId: 'raytheon',
    targetId: 'state-department',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 2000, end: null },
    strength: 0.7,
    description: 'Defense Secretary Lloyd Austin was on Raytheon board before appointment. Recused from Raytheon decisions.',
    verified: true,
    sourceDocuments: ['https://www.nytimes.com/2021/01/08/us/politics/lloyd-austin-raytheon.html'],
  },

  // PHARMA INFLUENCE
  {
    id: 'pharma-congress',
    type: 'lobbying',
    sourceId: 'pfizer',
    targetId: 'us-congress',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 1998, end: null },
    strength: 0.8,
    amount: 300000000,
    description: 'Pharma industry top lobbying spender. $300M+ since 1998. Blocked Medicare drug price negotiation until 2022.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/industries/summary?id=H04'],
  },

  // TECH INDUSTRY
  {
    id: 'google-white-house',
    type: 'revolving-door',
    sourceId: 'google',
    targetId: 'white-house',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 2009, end: 2016 },
    strength: 0.7,
    description: '250+ people moved between Google and Obama administration. Google visited White House 427 times.',
    verified: true,
    sourceDocuments: ['https://www.wsj.com/articles/google-makes-most-of-close-ties-to-white-house-1456546862'],
  },
  {
    id: 'facebook-lobbying',
    type: 'lobbying',
    sourceId: 'meta',
    targetId: 'us-congress',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 2018, end: null },
    strength: 0.7,
    amount: 20000000,
    description: 'Meta (Facebook) dramatically increased lobbying after Cambridge Analytica scandal. $20M+ annually.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000033563'],
  },

  // FOREIGN INFLUENCE
  {
    id: 'saudi-lobby',
    type: 'lobbying',
    sourceId: 'saudi-arabia',
    targetId: 'us-congress',
    sourceType: 'power',
    targetType: 'power',
    timeRange: { start: 1990, end: null },
    strength: 0.8,
    amount: 100000000,
    description: 'Saudi Arabia major foreign lobbyist. Hired numerous DC firms. Increased after Khashoggi murder.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/fara/countries/186'],
  },
  {
    id: 'israel-aipac',
    type: 'lobbying',
    sourceId: 'aipac',
    targetId: 'us-congress',
    sourceType: 'organization',
    targetType: 'power',
    timeRange: { start: 1963, end: null },
    strength: 0.9,
    amount: 50000000,
    description: 'AIPAC most influential foreign policy lobby. New Super PAC spent $100M+ in 2022 primaries.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000046963'],
  },
  {
    id: 'qatar-brookings',
    type: 'funding',
    sourceId: 'qatar',
    targetId: 'brookings-institution',
    sourceType: 'power',
    targetType: 'organization',
    timeRange: { start: 2007, end: 2014 },
    strength: 0.5,
    amount: 14800000,
    description: 'Qatar donated $14.8M to Brookings. Led to criticism over think tank foreign government funding disclosure.',
    verified: true,
    sourceDocuments: ['https://www.nytimes.com/2014/09/07/us/politics/foreign-powers-buy-influence-at-think-tanks.html'],
  },

  // MEDIA-POLITICS CONNECTIONS
  {
    id: 'murdoch-trump',
    type: 'influence',
    sourceId: 'rupert-murdoch',
    targetId: 'donald-trump',
    sourceType: 'person',
    targetType: 'person',
    timeRange: { start: 2015, end: 2023 },
    strength: 0.8,
    description: 'Complex relationship. Fox News promoted Trump 2016. Relationship soured after 2020 election claims.',
    verified: true,
    sourceDocuments: ['https://www.newyorker.com/magazine/2019/03/11/the-making-of-the-fox-news-white-house'],
  },
  {
    id: 'bezos-wapo',
    type: 'ownership',
    sourceId: 'jeff-bezos',
    targetId: 'washington-post',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2013, end: null },
    strength: 1.0,
    amount: 250000000,
    description: 'Bezos purchased WaPo for $250M. Amazon has $600M+ CIA contract raising conflict questions.',
    verified: true,
    sourceDocuments: ['https://www.theatlantic.com/technology/archive/2014/07/the-details-about-the-cias-deal-with-amazon/374632/'],
  },
];

// ============================================================================
// REVOLVING DOOR - Government to Private Sector
// ============================================================================

export const revolvingDoorConnections: Connection[] = [
  {
    id: 'mnuchin-goldman-treasury',
    type: 'revolving-door',
    sourceId: 'steven-mnuchin',
    targetId: 'goldman-sachs',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 1985, end: 2002 },
    strength: 0.9,
    description: 'Mnuchin worked at Goldman 17 years before becoming Treasury Secretary. Classic Wall Street-Washington revolving door.',
    verified: true,
  },
  {
    id: 'paulson-goldman-treasury',
    type: 'revolving-door',
    sourceId: 'henry-paulson',
    targetId: 'goldman-sachs',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 1974, end: 2006 },
    strength: 1.0,
    description: 'Paulson was Goldman CEO before becoming Treasury Secretary during 2008 crisis. Oversaw AIG bailout benefiting Goldman.',
    verified: true,
    sourceDocuments: ['https://www.propublica.org/article/aig-bailout-benefited-goldman-sachs-merrill-and-societe'],
  },
  {
    id: 'geithner-fed-treasury',
    type: 'revolving-door',
    sourceId: 'timothy-geithner',
    targetId: 'warburg-pincus',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2014, end: null },
    strength: 0.7,
    description: 'Geithner went from NY Fed President to Treasury Secretary to private equity firm Warburg Pincus president.',
    verified: true,
  },
  {
    id: 'ajit-pai-verizon',
    type: 'revolving-door',
    sourceId: 'ajit-pai',
    targetId: 'verizon',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2001, end: 2003 },
    strength: 0.7,
    description: 'FCC Chair Pai worked at Verizon before FCC. Repealed net neutrality, benefiting telecom industry.',
    verified: true,
    sourceDocuments: ['https://www.fcc.gov/about/leadership/ajit-pai'],
  },
];

// ============================================================================
// BOARD MEMBERSHIP CONNECTIONS
// ============================================================================

export const boardConnections: Connection[] = [
  {
    id: 'cheney-halliburton',
    type: 'board-membership',
    sourceId: 'dick-cheney',
    targetId: 'halliburton',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 1995, end: 2000 },
    strength: 0.9,
    amount: 44000000, // Stock options value
    description: 'Cheney was Halliburton CEO before becoming VP. Halliburton got $39.5B in Iraq contracts.',
    verified: true,
    sourceDocuments: ['https://www.opensecrets.org/news/2011/08/halliburton-kbr-exposed/'],
  },
  {
    id: 'austin-raytheon',
    type: 'board-membership',
    sourceId: 'lloyd-austin',
    targetId: 'raytheon',
    sourceType: 'person',
    targetType: 'organization',
    timeRange: { start: 2016, end: 2021 },
    strength: 0.8,
    amount: 1400000, // Board compensation
    description: 'Defense Secretary Austin was on Raytheon board, earning $1.4M. Received ethics waiver for Pentagon role.',
    verified: true,
    sourceDocuments: ['https://www.politico.com/news/2021/01/21/lloyd-austin-ethics-waiver-461256'],
  },
];

// ============================================================================
// COMBINE ALL CONNECTIONS
// ============================================================================

export const allFundingConnections: Connection[] = [
  ...fundingConnections,
  ...revolvingDoorConnections,
  ...boardConnections,
];

