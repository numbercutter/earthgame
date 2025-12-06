// Early Modern Historical Figures (1500-1800 CE)
import { Person } from '@/types';

export const earlyModernPeople: Person[] = [
  // EXPLORERS & CONQUISTADORS
  {
    id: 'christopher-columbus',
    name: 'Christopher Columbus',
    birth: 1451,
    death: 1506,
    birthPlace: { lat: 44.4056, lng: 8.9463 }, // Genoa
    roles: [],
    affiliations: ['spanish-empire'],
    description: 'Italian explorer who reached the Americas in 1492, initiating European colonization.',
    tags: ['explorer', 'americas', 'spain', 'discovery'],
  },
  {
    id: 'vasco-da-gama',
    name: 'Vasco da Gama',
    birth: 1469,
    death: 1524,
    birthPlace: { lat: 37.9443, lng: -8.8727 }, // Sines
    roles: [],
    affiliations: ['portuguese-empire'],
    description: 'First European to reach India by sea, opening direct trade route to Asia.',
    tags: ['explorer', 'maritime', 'portugal', 'india'],
  },
  {
    id: 'ferdinand-magellan',
    name: 'Ferdinand Magellan',
    birth: 1480,
    death: 1521,
    birthPlace: { lat: 41.37, lng: -7.77 }, // Sabrosa
    roles: [],
    affiliations: ['spanish-empire'],
    description: 'Led first expedition to circumnavigate the globe (completed after his death).',
    tags: ['explorer', 'circumnavigation', 'pacific', 'philippines'],
  },
  {
    id: 'hernan-cortes',
    name: 'Hernán Cortés',
    birth: 1485,
    death: 1547,
    birthPlace: { lat: 39.45, lng: -6.33 }, // Medellín
    roles: [],
    affiliations: ['spanish-empire'],
    description: 'Spanish conquistador who conquered the Aztec Empire.',
    tags: ['conquistador', 'aztec', 'mexico', 'conquest'],
  },
  {
    id: 'francisco-pizarro',
    name: 'Francisco Pizarro',
    birth: 1478,
    death: 1541,
    birthPlace: { lat: 39.48, lng: -6.37 }, // Trujillo
    roles: [],
    affiliations: ['spanish-empire'],
    description: 'Spanish conquistador who conquered the Inca Empire.',
    tags: ['conquistador', 'inca', 'peru', 'conquest'],
  },
  {
    id: 'james-cook',
    name: 'James Cook',
    birth: 1728,
    death: 1779,
    birthPlace: { lat: 54.52, lng: -1.07 }, // Marton
    roles: [],
    affiliations: ['british-empire'],
    description: 'British explorer who mapped Pacific, Australia, and New Zealand.',
    tags: ['explorer', 'pacific', 'australia', 'mapping'],
  },

  // REFORMATION FIGURES
  {
    id: 'martin-luther',
    name: 'Martin Luther',
    birth: 1483,
    death: 1546,
    birthPlace: { lat: 51.52, lng: 11.55 }, // Eisleben
    roles: [],
    affiliations: [],
    description: 'German theologian who sparked the Protestant Reformation with 95 Theses.',
    tags: ['reformer', 'protestant', 'germany', 'theology'],
  },
  {
    id: 'john-calvin',
    name: 'John Calvin',
    birth: 1509,
    death: 1564,
    birthPlace: { lat: 49.44, lng: 3.09 }, // Noyon
    roles: [],
    affiliations: [],
    description: 'French theologian whose ideas formed basis of Reformed/Presbyterian churches.',
    tags: ['reformer', 'protestant', 'calvinist', 'theology'],
  },
  {
    id: 'ignatius-loyola',
    name: 'Ignatius of Loyola',
    birth: 1491,
    death: 1556,
    birthPlace: { lat: 43.17, lng: -2.41 }, // Loyola
    roles: [],
    affiliations: ['papal-states'],
    description: 'Spanish priest who founded the Society of Jesus (Jesuits).',
    tags: ['founder', 'jesuit', 'counter-reformation', 'saint'],
  },
  {
    id: 'henry-viii',
    name: 'Henry VIII',
    birth: 1491,
    death: 1547,
    birthPlace: { lat: 51.48, lng: -0.31 }, // Greenwich
    roles: [
      { title: 'King', powerId: 'kingdom-england', timeRange: { start: 1509, end: 1547 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'English king who broke from Rome and established Church of England.',
    tags: ['king', 'reformation', 'england', 'six-wives'],
  },
  {
    id: 'elizabeth-i',
    name: 'Elizabeth I',
    birth: 1533,
    death: 1603,
    birthPlace: { lat: 51.48, lng: -0.31 }, // Greenwich
    roles: [
      { title: 'Queen', powerId: 'kingdom-england', timeRange: { start: 1558, end: 1603 } },
    ],
    affiliations: ['kingdom-england', 'british-empire'],
    description: 'Virgin Queen who established England as Protestant power and began empire.',
    tags: ['queen', 'england', 'elizabethan', 'golden-age'],
  },

  // HABSBURG/SPANISH
  {
    id: 'charles-v',
    name: 'Charles V',
    birth: 1500,
    death: 1558,
    birthPlace: { lat: 51.05, lng: 3.73 }, // Ghent
    roles: [
      { title: 'Holy Roman Emperor', powerId: 'holy-roman-empire', timeRange: { start: 1519, end: 1556 } },
      { title: 'King of Spain', powerId: 'habsburg-spain', timeRange: { start: 1516, end: 1556 } },
    ],
    affiliations: ['holy-roman-empire', 'habsburg-spain'],
    description: 'Ruled largest European empire since Charlemagne, fought Reformation and Ottomans.',
    tags: ['emperor', 'habsburg', 'counter-reformation'],
  },
  {
    id: 'philip-ii-spain',
    name: 'Philip II of Spain',
    birth: 1527,
    death: 1598,
    birthPlace: { lat: 40.48, lng: -3.38 }, // Valladolid
    roles: [
      { title: 'King', powerId: 'habsburg-spain', timeRange: { start: 1556, end: 1598 } },
    ],
    affiliations: ['habsburg-spain', 'spanish-empire'],
    description: 'King during Spanish golden age, sent Armada against England, ruled vast empire.',
    tags: ['king', 'habsburg', 'armada', 'spain'],
  },

  // FRENCH MONARCHS
  {
    id: 'louis-xiv',
    name: 'Louis XIV (Sun King)',
    birth: 1638,
    death: 1715,
    birthPlace: { lat: 48.85, lng: 2.35 }, // Saint-Germain-en-Laye
    roles: [
      { title: 'King', powerId: 'kingdom-france-early-modern', timeRange: { start: 1643, end: 1715 } },
    ],
    affiliations: ['kingdom-france-early-modern'],
    description: 'Sun King who built Versailles and made France dominant European power.',
    tags: ['king', 'france', 'absolutism', 'versailles'],
  },
  {
    id: 'louis-xvi',
    name: 'Louis XVI',
    birth: 1754,
    death: 1793,
    birthPlace: { lat: 48.80, lng: 2.12 }, // Versailles
    roles: [
      { title: 'King', powerId: 'kingdom-france-early-modern', timeRange: { start: 1774, end: 1792 } },
    ],
    affiliations: ['kingdom-france-early-modern'],
    description: 'Last king of France before Revolution, executed by guillotine.',
    tags: ['king', 'france', 'revolution', 'execution'],
  },
  {
    id: 'marie-antoinette',
    name: 'Marie Antoinette',
    birth: 1755,
    death: 1793,
    birthPlace: { lat: 48.21, lng: 16.37 }, // Vienna
    roles: [
      { title: 'Queen', powerId: 'kingdom-france-early-modern', timeRange: { start: 1774, end: 1792 } },
    ],
    affiliations: ['kingdom-france-early-modern'],
    description: 'Queen of France executed during Revolution, symbol of royal excess.',
    tags: ['queen', 'france', 'revolution', 'execution'],
  },

  // RUSSIAN RULERS
  {
    id: 'ivan-terrible',
    name: 'Ivan IV (The Terrible)',
    birth: 1530,
    death: 1584,
    birthPlace: { lat: 55.76, lng: 37.62 }, // Moscow
    roles: [
      { title: 'Tsar', powerId: 'tsardom-russia', timeRange: { start: 1547, end: 1584 } },
    ],
    affiliations: ['tsardom-russia'],
    description: 'First Tsar of Russia, expanded territory but ruled with extreme brutality.',
    tags: ['tsar', 'russia', 'expansion', 'brutality'],
  },
  {
    id: 'peter-great',
    name: 'Peter the Great',
    birth: 1672,
    death: 1725,
    birthPlace: { lat: 55.76, lng: 37.62 }, // Moscow
    roles: [
      { title: 'Tsar/Emperor', powerId: 'russian-empire', timeRange: { start: 1682, end: 1725 } },
    ],
    affiliations: ['tsardom-russia', 'russian-empire'],
    description: 'Modernized Russia, built St. Petersburg, made Russia a European great power.',
    tags: ['tsar', 'russia', 'modernization', 'reform'],
  },
  {
    id: 'catherine-great',
    name: 'Catherine the Great',
    birth: 1729,
    death: 1796,
    birthPlace: { lat: 53.55, lng: 14.55 }, // Stettin (Szczecin)
    roles: [
      { title: 'Empress', powerId: 'russian-empire', timeRange: { start: 1762, end: 1796 } },
    ],
    affiliations: ['russian-empire'],
    description: 'Enlightened despot who expanded Russia and promoted culture and learning.',
    tags: ['empress', 'russia', 'enlightenment', 'expansion'],
  },

  // PRUSSIAN/GERMAN
  {
    id: 'frederick-great',
    name: 'Frederick the Great',
    birth: 1712,
    death: 1786,
    birthPlace: { lat: 52.52, lng: 13.40 }, // Berlin
    roles: [
      { title: 'King', powerId: 'kingdom-prussia', timeRange: { start: 1740, end: 1786 } },
    ],
    affiliations: ['kingdom-prussia'],
    description: 'Prussian king who made Prussia a great power through military genius and reform.',
    tags: ['king', 'prussia', 'military', 'enlightenment'],
  },

  // OTTOMAN
  {
    id: 'suleiman-magnificent',
    name: 'Suleiman the Magnificent',
    birth: 1494,
    death: 1566,
    birthPlace: { lat: 41.02, lng: 28.97 }, // Trabzon
    roles: [
      { title: 'Sultan', powerId: 'ottoman-empire', timeRange: { start: 1520, end: 1566 } },
    ],
    affiliations: ['ottoman-empire'],
    description: 'Ottoman sultan at empire\'s peak, lawgiver, patron of arts, besieged Vienna.',
    tags: ['sultan', 'ottoman', 'lawgiver', 'golden-age'],
  },

  // MUGHAL
  {
    id: 'babur',
    name: 'Babur',
    birth: 1483,
    death: 1530,
    birthPlace: { lat: 39.65, lng: 66.96 }, // Andijan
    roles: [
      { title: 'Emperor', powerId: 'mughal-empire', timeRange: { start: 1526, end: 1530 } },
    ],
    affiliations: ['mughal-empire'],
    description: 'Founder of the Mughal Empire, descendant of both Timur and Genghis Khan.',
    tags: ['emperor', 'mughal', 'founder', 'india'],
  },
  {
    id: 'akbar-great',
    name: 'Akbar the Great',
    birth: 1542,
    death: 1605,
    birthPlace: { lat: 25.35, lng: 69.73 }, // Umerkot
    roles: [
      { title: 'Emperor', powerId: 'mughal-empire', timeRange: { start: 1556, end: 1605 } },
    ],
    affiliations: ['mughal-empire'],
    description: 'Greatest Mughal emperor, known for religious tolerance and administrative genius.',
    tags: ['emperor', 'mughal', 'tolerance', 'india'],
  },
  {
    id: 'shah-jahan',
    name: 'Shah Jahan',
    birth: 1592,
    death: 1666,
    birthPlace: { lat: 26.92, lng: 75.79 }, // Lahore
    roles: [
      { title: 'Emperor', powerId: 'mughal-empire', timeRange: { start: 1628, end: 1658 } },
    ],
    affiliations: ['mughal-empire'],
    description: 'Built the Taj Mahal as tomb for his wife, peak of Mughal architecture.',
    tags: ['emperor', 'mughal', 'taj-mahal', 'builder'],
  },
  {
    id: 'aurangzeb',
    name: 'Aurangzeb',
    birth: 1618,
    death: 1707,
    birthPlace: { lat: 23.26, lng: 77.41 }, // Dahod
    roles: [
      { title: 'Emperor', powerId: 'mughal-empire', timeRange: { start: 1658, end: 1707 } },
    ],
    affiliations: ['mughal-empire'],
    description: 'Last great Mughal emperor, expanded empire to maximum but sowed seeds of decline.',
    tags: ['emperor', 'mughal', 'expansion', 'decline'],
  },

  // PERSIAN
  {
    id: 'shah-abbas',
    name: 'Shah Abbas I',
    birth: 1571,
    death: 1629,
    birthPlace: { lat: 38.95, lng: 45.87 }, // Herat
    roles: [
      { title: 'Shah', powerId: 'safavid-empire', timeRange: { start: 1588, end: 1629 } },
    ],
    affiliations: ['safavid-empire'],
    description: 'Greatest Safavid shah, made Isfahan a wonder of the world.',
    tags: ['shah', 'persia', 'safavid', 'isfahan'],
  },

  // JAPANESE
  {
    id: 'oda-nobunaga',
    name: 'Oda Nobunaga',
    birth: 1534,
    death: 1582,
    birthPlace: { lat: 35.18, lng: 136.91 }, // Nagoya
    roles: [],
    affiliations: [],
    description: 'First of three unifiers of Japan, revolutionary military commander.',
    tags: ['unifier', 'japan', 'samurai', 'military'],
  },
  {
    id: 'toyotomi-hideyoshi',
    name: 'Toyotomi Hideyoshi',
    birth: 1537,
    death: 1598,
    birthPlace: { lat: 35.14, lng: 136.96 }, // Nagoya area
    roles: [],
    affiliations: [],
    description: 'Second unifier of Japan, rose from peasant to ruler, invaded Korea.',
    tags: ['unifier', 'japan', 'samurai', 'korea-invasion'],
  },
  {
    id: 'tokugawa-ieyasu',
    name: 'Tokugawa Ieyasu',
    birth: 1543,
    death: 1616,
    birthPlace: { lat: 34.95, lng: 137.16 }, // Okazaki
    roles: [
      { title: 'Shogun', powerId: 'tokugawa-shogunate', timeRange: { start: 1603, end: 1605 } },
    ],
    affiliations: ['tokugawa-shogunate'],
    description: 'Founded Tokugawa shogunate, completed unification, began 250 years of peace.',
    tags: ['shogun', 'japan', 'founder', 'unifier'],
  },

  // CHINESE
  {
    id: 'kangxi-emperor',
    name: 'Kangxi Emperor',
    birth: 1654,
    death: 1722,
    birthPlace: { lat: 39.90, lng: 116.41 }, // Beijing
    roles: [
      { title: 'Emperor', powerId: 'qing-dynasty', timeRange: { start: 1661, end: 1722 } },
    ],
    affiliations: ['qing-dynasty'],
    description: 'One of China\'s greatest emperors, longest reign, expanded Qing to maximum.',
    tags: ['emperor', 'china', 'qing', 'expansion'],
  },
  {
    id: 'qianlong-emperor',
    name: 'Qianlong Emperor',
    birth: 1711,
    death: 1799,
    birthPlace: { lat: 39.90, lng: 116.41 }, // Beijing
    roles: [
      { title: 'Emperor', powerId: 'qing-dynasty', timeRange: { start: 1735, end: 1796 } },
    ],
    affiliations: ['qing-dynasty'],
    description: 'Presided over prosperous China, patron of arts, but corruption grew late in reign.',
    tags: ['emperor', 'china', 'qing', 'prosperity'],
  },

  // REVOLUTIONARY FIGURES
  {
    id: 'george-washington',
    name: 'George Washington',
    birth: 1732,
    death: 1799,
    birthPlace: { lat: 38.19, lng: -76.93 }, // Westmoreland County
    roles: [
      { title: 'President', powerId: 'usa', timeRange: { start: 1789, end: 1797 } },
    ],
    affiliations: ['usa'],
    description: 'Commander of Continental Army and first US President, "Father of His Country".',
    tags: ['president', 'revolutionary', 'america', 'founding-father'],
  },
  {
    id: 'thomas-jefferson',
    name: 'Thomas Jefferson',
    birth: 1743,
    death: 1826,
    birthPlace: { lat: 37.88, lng: -78.49 }, // Shadwell
    roles: [
      { title: 'President', powerId: 'usa', timeRange: { start: 1801, end: 1809 } },
    ],
    affiliations: ['usa'],
    description: 'Author of Declaration of Independence, third President, polymath.',
    tags: ['president', 'revolutionary', 'america', 'founding-father'],
  },
  {
    id: 'benjamin-franklin',
    name: 'Benjamin Franklin',
    birth: 1706,
    death: 1790,
    birthPlace: { lat: 42.36, lng: -71.06 }, // Boston
    roles: [],
    affiliations: ['usa'],
    description: 'Polymath, diplomat, inventor, Founding Father who secured French alliance.',
    tags: ['founding-father', 'scientist', 'diplomat', 'america'],
  },
  {
    id: 'maximilien-robespierre',
    name: 'Maximilien Robespierre',
    birth: 1758,
    death: 1794,
    birthPlace: { lat: 50.43, lng: 2.83 }, // Arras
    roles: [],
    affiliations: ['first-french-republic'],
    description: 'Leader of Reign of Terror during French Revolution, later guillotined himself.',
    tags: ['revolutionary', 'france', 'terror', 'jacobin'],
  },
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    birth: 1769,
    death: 1821,
    birthPlace: { lat: 41.92, lng: 8.74 }, // Ajaccio, Corsica
    roles: [
      { title: 'Emperor', powerId: 'napoleonic-france', timeRange: { start: 1804, end: 1814 } },
    ],
    affiliations: ['first-french-republic', 'napoleonic-france'],
    description: 'Military genius who conquered most of Europe, spread revolutionary ideals.',
    tags: ['emperor', 'france', 'military-genius', 'conqueror'],
  },
  {
    id: 'toussaint-louverture',
    name: 'Toussaint Louverture',
    birth: 1743,
    death: 1803,
    birthPlace: { lat: 19.45, lng: -72.69 }, // Cap-Français
    roles: [],
    affiliations: ['haiti'],
    description: 'Leader of Haitian Revolution, first successful slave revolt, died in French prison.',
    tags: ['revolutionary', 'haiti', 'slavery-abolition', 'hero'],
  },

  // SCIENTISTS & PHILOSOPHERS
  {
    id: 'nicolaus-copernicus',
    name: 'Nicolaus Copernicus',
    birth: 1473,
    death: 1543,
    birthPlace: { lat: 53.01, lng: 18.61 }, // Toruń
    roles: [],
    affiliations: [],
    description: 'Developed heliocentric model placing the Sun at center of solar system.',
    tags: ['scientist', 'astronomer', 'copernican-revolution'],
  },
  {
    id: 'galileo-galilei',
    name: 'Galileo Galilei',
    birth: 1564,
    death: 1642,
    birthPlace: { lat: 43.72, lng: 10.40 }, // Pisa
    roles: [],
    affiliations: [],
    description: 'Father of modern science, improved telescope, supported heliocentrism, tried by Inquisition.',
    tags: ['scientist', 'astronomer', 'physics', 'inquisition'],
  },
  {
    id: 'isaac-newton',
    name: 'Isaac Newton',
    birth: 1643,
    death: 1727,
    birthPlace: { lat: 52.80, lng: -0.63 }, // Woolsthorpe
    roles: [],
    affiliations: ['british-empire'],
    description: 'Developed laws of motion and gravitation, invented calculus, transformed physics.',
    tags: ['scientist', 'physicist', 'mathematician', 'gravity'],
  },
  {
    id: 'rene-descartes',
    name: 'René Descartes',
    birth: 1596,
    death: 1650,
    birthPlace: { lat: 46.97, lng: 0.70 }, // La Haye en Touraine
    roles: [],
    affiliations: [],
    description: 'Father of modern philosophy, "I think therefore I am," developed Cartesian geometry.',
    tags: ['philosopher', 'mathematician', 'rationalism'],
  },
  {
    id: 'john-locke',
    name: 'John Locke',
    birth: 1632,
    death: 1704,
    birthPlace: { lat: 51.08, lng: -3.14 }, // Wrington
    roles: [],
    affiliations: ['british-empire'],
    description: 'Father of liberalism, influenced American and French Revolutions.',
    tags: ['philosopher', 'liberalism', 'enlightenment', 'natural-rights'],
  },
  {
    id: 'voltaire',
    name: 'Voltaire',
    birth: 1694,
    death: 1778,
    birthPlace: { lat: 48.86, lng: 2.35 }, // Paris
    roles: [],
    affiliations: [],
    description: 'Enlightenment writer, advocate of civil liberties and separation of church and state.',
    tags: ['philosopher', 'writer', 'enlightenment', 'france'],
  },
  {
    id: 'jean-jacques-rousseau',
    name: 'Jean-Jacques Rousseau',
    birth: 1712,
    death: 1778,
    birthPlace: { lat: 46.20, lng: 6.14 }, // Geneva
    roles: [],
    affiliations: [],
    description: 'Political philosopher whose ideas influenced French Revolution and modern democracy.',
    tags: ['philosopher', 'enlightenment', 'social-contract'],
  },
  {
    id: 'immanuel-kant',
    name: 'Immanuel Kant',
    birth: 1724,
    death: 1804,
    birthPlace: { lat: 54.71, lng: 20.51 }, // Königsberg
    roles: [],
    affiliations: ['kingdom-prussia'],
    description: 'Central figure in modern philosophy, synthesized rationalism and empiricism.',
    tags: ['philosopher', 'enlightenment', 'prussia', 'metaphysics'],
  },
  {
    id: 'adam-smith',
    name: 'Adam Smith',
    birth: 1723,
    death: 1790,
    birthPlace: { lat: 56.11, lng: -3.16 }, // Kirkcaldy
    roles: [],
    affiliations: ['british-empire'],
    description: 'Father of modern economics, wrote "Wealth of Nations."',
    tags: ['economist', 'enlightenment', 'capitalism', 'scotland'],
  },

  // ARTISTS & CULTURAL FIGURES
  {
    id: 'leonardo-da-vinci',
    name: 'Leonardo da Vinci',
    birth: 1452,
    death: 1519,
    birthPlace: { lat: 43.79, lng: 10.92 }, // Vinci
    roles: [],
    affiliations: [],
    description: 'Ultimate Renaissance man - painter, inventor, scientist, engineer, architect.',
    tags: ['artist', 'inventor', 'renaissance', 'polymath'],
  },
  {
    id: 'michelangelo',
    name: 'Michelangelo',
    birth: 1475,
    death: 1564,
    birthPlace: { lat: 43.54, lng: 11.98 }, // Caprese
    roles: [],
    affiliations: ['papal-states'],
    description: 'Sculptor of David, painter of Sistine Chapel ceiling, architect of St. Peter\'s.',
    tags: ['artist', 'sculptor', 'painter', 'renaissance'],
  },
  {
    id: 'william-shakespeare',
    name: 'William Shakespeare',
    birth: 1564,
    death: 1616,
    birthPlace: { lat: 52.19, lng: -1.71 }, // Stratford-upon-Avon
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Greatest writer in English language, transformed drama and literature.',
    tags: ['writer', 'playwright', 'poet', 'england'],
  },
  {
    id: 'johann-sebastian-bach',
    name: 'Johann Sebastian Bach',
    birth: 1685,
    death: 1750,
    birthPlace: { lat: 50.98, lng: 10.32 }, // Eisenach
    roles: [],
    affiliations: [],
    description: 'Greatest composer of Baroque era, master of counterpoint and fugue.',
    tags: ['composer', 'baroque', 'music', 'germany'],
  },
  {
    id: 'wolfgang-amadeus-mozart',
    name: 'Wolfgang Amadeus Mozart',
    birth: 1756,
    death: 1791,
    birthPlace: { lat: 47.80, lng: 13.05 }, // Salzburg
    roles: [],
    affiliations: ['habsburg-austria'],
    description: 'Child prodigy who became one of greatest composers, prolific genius.',
    tags: ['composer', 'classical', 'music', 'austria'],
  },
  {
    id: 'rembrandt',
    name: 'Rembrandt van Rijn',
    birth: 1606,
    death: 1669,
    birthPlace: { lat: 52.16, lng: 4.49 }, // Leiden
    roles: [],
    affiliations: ['dutch-republic'],
    description: 'Master of Dutch Golden Age painting, renowned for portraits and light effects.',
    tags: ['artist', 'painter', 'dutch', 'golden-age'],
  },

  // NATIVE AMERICAN
  {
    id: 'montezuma-ii',
    name: 'Montezuma II',
    birth: 1466,
    death: 1520,
    birthPlace: { lat: 19.43, lng: -99.13 }, // Tenochtitlan
    roles: [
      { title: 'Tlatoani', powerId: 'aztec-empire', timeRange: { start: 1502, end: 1520 } },
    ],
    affiliations: ['aztec-empire'],
    description: 'Last independent Aztec emperor, killed during Spanish conquest.',
    tags: ['emperor', 'aztec', 'conquest', 'mexico'],
  },
  {
    id: 'atahualpa',
    name: 'Atahualpa',
    birth: 1502,
    death: 1533,
    birthPlace: { lat: -0.22, lng: -78.51 }, // Quito
    roles: [
      { title: 'Sapa Inca', powerId: 'inca-empire', timeRange: { start: 1532, end: 1533 } },
    ],
    affiliations: ['inca-empire'],
    description: 'Last Inca emperor, captured and executed by Pizarro despite ransom.',
    tags: ['emperor', 'inca', 'conquest', 'peru'],
  },
];

