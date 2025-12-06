// Modern Historical Figures (1800-1945)
import { Person } from '@/types';

export const modernPeople: Person[] = [
  // NAPOLEONIC ERA
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    birth: 1769,
    death: 1821,
    birthPlace: { lat: 41.92, lng: 8.74 },
    roles: [
      { title: 'Emperor', powerId: 'napoleonic-france', timeRange: { start: 1804, end: 1814 } },
    ],
    affiliations: ['napoleonic-france'],
    description: 'Military genius who conquered most of Europe, spread revolutionary ideals.',
    tags: ['emperor', 'france', 'military-genius', 'conqueror'],
  },
  {
    id: 'duke-wellington',
    name: 'Duke of Wellington',
    birth: 1769,
    death: 1852,
    birthPlace: { lat: 53.35, lng: -6.26 }, // Dublin
    roles: [
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1828, end: 1830 } },
    ],
    affiliations: ['british-empire'],
    description: 'British general who defeated Napoleon at Waterloo.',
    tags: ['general', 'waterloo', 'british'],
  },
  {
    id: 'metternich',
    name: 'Prince Metternich',
    birth: 1773,
    death: 1859,
    birthPlace: { lat: 50.11, lng: 8.68 }, // Koblenz
    roles: [
      { title: 'Foreign Minister', powerId: 'austria-hungary', timeRange: { start: 1809, end: 1848 } },
    ],
    affiliations: ['austria-hungary'],
    description: 'Austrian diplomat who designed post-Napoleonic European order at Congress of Vienna.',
    tags: ['diplomat', 'conservative', 'vienna-congress'],
  },

  // LATIN AMERICAN LIBERATORS
  {
    id: 'simon-bolivar',
    name: 'Simón Bolívar',
    birth: 1783,
    death: 1830,
    birthPlace: { lat: 10.49, lng: -66.88 }, // Caracas
    roles: [
      { title: 'President', powerId: 'gran-colombia', timeRange: { start: 1819, end: 1830 } },
    ],
    affiliations: ['gran-colombia'],
    description: 'The Liberator who freed South America from Spanish rule.',
    tags: ['liberator', 'revolutionary', 'south-america'],
  },
  {
    id: 'jose-san-martin',
    name: 'José de San Martín',
    birth: 1778,
    death: 1850,
    birthPlace: { lat: -28.55, lng: -56.97 }, // Yapeyú
    roles: [],
    affiliations: [],
    description: 'Liberator of Argentina, Chile, and Peru from Spanish rule.',
    tags: ['liberator', 'military', 'argentina'],
  },

  // BRITISH EMPIRE
  {
    id: 'queen-victoria',
    name: 'Queen Victoria',
    birth: 1819,
    death: 1901,
    birthPlace: { lat: 51.50, lng: -0.19 }, // Kensington
    roles: [
      { title: 'Queen', powerId: 'british-empire', timeRange: { start: 1837, end: 1901 } },
    ],
    affiliations: ['british-empire'],
    description: 'Longest-reigning British monarch until Elizabeth II, presided over empire\'s peak.',
    tags: ['queen', 'victorian-era', 'empire'],
  },
  {
    id: 'benjamin-disraeli',
    name: 'Benjamin Disraeli',
    birth: 1804,
    death: 1881,
    birthPlace: { lat: 51.52, lng: -0.12 },
    roles: [
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1874, end: 1880 } },
    ],
    affiliations: ['british-empire'],
    description: 'Conservative PM who expanded British Empire, purchased Suez Canal.',
    tags: ['prime-minister', 'conservative', 'imperialism'],
  },
  {
    id: 'william-gladstone',
    name: 'William Gladstone',
    birth: 1809,
    death: 1898,
    birthPlace: { lat: 53.41, lng: -2.99 }, // Liverpool
    roles: [
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1868, end: 1894 } },
    ],
    affiliations: ['british-empire'],
    description: 'Liberal PM who expanded voting rights and advocated Irish Home Rule.',
    tags: ['prime-minister', 'liberal', 'reform'],
  },

  // AMERICAN
  {
    id: 'abraham-lincoln',
    name: 'Abraham Lincoln',
    birth: 1809,
    death: 1865,
    birthPlace: { lat: 37.5, lng: -85.7 },
    roles: [
      { title: '16th President', powerId: 'usa', timeRange: { start: 1861, end: 1865 } },
    ],
    affiliations: ['usa'],
    description: 'Led the United States through the Civil War, preserved the Union, and abolished slavery.',
    tags: ['president', 'civil-war', 'emancipation', 'assassination'],
  },
  {
    id: 'ulysses-grant',
    name: 'Ulysses S. Grant',
    birth: 1822,
    death: 1885,
    birthPlace: { lat: 38.73, lng: -83.56 }, // Point Pleasant, OH
    roles: [
      { title: 'General', powerId: 'usa', timeRange: { start: 1861, end: 1865 } },
      { title: '18th President', powerId: 'usa', timeRange: { start: 1869, end: 1877 } },
    ],
    affiliations: ['usa'],
    description: 'Union general who won the Civil War, later became president.',
    tags: ['general', 'president', 'civil-war'],
  },
  {
    id: 'robert-e-lee',
    name: 'Robert E. Lee',
    birth: 1807,
    death: 1870,
    birthPlace: { lat: 38.88, lng: -77.07 }, // Stratford Hall
    roles: [
      { title: 'General', powerId: 'confederate-states', timeRange: { start: 1861, end: 1865 } },
    ],
    affiliations: ['confederate-states'],
    description: 'Commander of Confederate Army, considered brilliant tactician.',
    tags: ['general', 'civil-war', 'confederate'],
  },
  {
    id: 'theodore-roosevelt',
    name: 'Theodore Roosevelt',
    birth: 1858,
    death: 1919,
    birthPlace: { lat: 40.71, lng: -74.01 },
    roles: [
      { title: '26th President', powerId: 'usa', timeRange: { start: 1901, end: 1909 } },
    ],
    affiliations: ['usa'],
    description: 'Progressive president, trust-buster, conservationist, built Panama Canal.',
    tags: ['president', 'progressive', 'conservation'],
  },
  {
    id: 'woodrow-wilson',
    name: 'Woodrow Wilson',
    birth: 1856,
    death: 1924,
    birthPlace: { lat: 37.79, lng: -79.44 }, // Staunton, VA
    roles: [
      { title: '28th President', powerId: 'usa', timeRange: { start: 1913, end: 1921 } },
    ],
    affiliations: ['usa'],
    description: 'Led US through WWI, championed League of Nations.',
    tags: ['president', 'wwi', 'league-of-nations'],
  },
  {
    id: 'franklin-roosevelt',
    name: 'Franklin D. Roosevelt',
    birth: 1882,
    death: 1945,
    birthPlace: { lat: 41.78, lng: -73.93 }, // Hyde Park
    roles: [
      { title: '32nd President', powerId: 'usa', timeRange: { start: 1933, end: 1945 } },
    ],
    affiliations: ['usa'],
    description: 'Longest-serving president, led through Depression and WWII.',
    tags: ['president', 'new-deal', 'wwii', 'depression'],
  },

  // GERMAN UNIFICATION
  {
    id: 'otto-von-bismarck',
    name: 'Otto von Bismarck',
    birth: 1815,
    death: 1898,
    birthPlace: { lat: 52.59, lng: 11.98 }, // Schönhausen
    roles: [
      { title: 'Chancellor', powerId: 'german-empire', timeRange: { start: 1871, end: 1890 } },
    ],
    affiliations: ['kingdom-prussia', 'german-empire'],
    description: 'Iron Chancellor who unified Germany through "blood and iron."',
    tags: ['chancellor', 'unification', 'realpolitik'],
  },
  {
    id: 'kaiser-wilhelm-i',
    name: 'Kaiser Wilhelm I',
    birth: 1797,
    death: 1888,
    birthPlace: { lat: 52.52, lng: 13.41 },
    roles: [
      { title: 'Kaiser', powerId: 'german-empire', timeRange: { start: 1871, end: 1888 } },
    ],
    affiliations: ['german-empire'],
    description: 'First German Emperor, proclaimed at Versailles after defeating France.',
    tags: ['kaiser', 'unification', 'germany'],
  },
  {
    id: 'kaiser-wilhelm-ii',
    name: 'Kaiser Wilhelm II',
    birth: 1859,
    death: 1941,
    birthPlace: { lat: 52.52, lng: 13.41 },
    roles: [
      { title: 'Kaiser', powerId: 'german-empire', timeRange: { start: 1888, end: 1918 } },
    ],
    affiliations: ['german-empire'],
    description: 'Last German Emperor, aggressive foreign policy contributed to WWI.',
    tags: ['kaiser', 'wwi', 'abdication'],
  },

  // ITALIAN UNIFICATION
  {
    id: 'giuseppe-garibaldi',
    name: 'Giuseppe Garibaldi',
    birth: 1807,
    death: 1882,
    birthPlace: { lat: 43.55, lng: 7.02 }, // Nice
    roles: [],
    affiliations: ['kingdom-italy'],
    description: 'Hero of Italian unification, conquered Sicily and Naples with Redshirts.',
    tags: ['revolutionary', 'unification', 'italy'],
  },
  {
    id: 'cavour',
    name: 'Count Cavour',
    birth: 1810,
    death: 1861,
    birthPlace: { lat: 45.07, lng: 7.69 }, // Turin
    roles: [
      { title: 'Prime Minister', powerId: 'kingdom-italy', timeRange: { start: 1852, end: 1861 } },
    ],
    affiliations: ['kingdom-italy'],
    description: 'Architect of Italian unification through diplomacy.',
    tags: ['statesman', 'unification', 'italy'],
  },

  // RUSSIAN
  {
    id: 'tsar-alexander-ii',
    name: 'Tsar Alexander II',
    birth: 1818,
    death: 1881,
    birthPlace: { lat: 55.76, lng: 37.62 },
    roles: [
      { title: 'Tsar', powerId: 'russian-empire', timeRange: { start: 1855, end: 1881 } },
    ],
    affiliations: ['russian-empire'],
    description: 'Liberator Tsar who freed the serfs, assassinated by revolutionaries.',
    tags: ['tsar', 'reform', 'assassination', 'emancipation'],
  },
  {
    id: 'tsar-nicholas-ii',
    name: 'Tsar Nicholas II',
    birth: 1868,
    death: 1918,
    birthPlace: { lat: 59.88, lng: 29.77 }, // Tsarskoye Selo
    roles: [
      { title: 'Tsar', powerId: 'russian-empire', timeRange: { start: 1894, end: 1917 } },
    ],
    affiliations: ['russian-empire'],
    description: 'Last Tsar of Russia, overthrown in Revolution, executed with family.',
    tags: ['tsar', 'wwi', 'revolution', 'execution'],
  },
  {
    id: 'vladimir-lenin',
    name: 'Vladimir Lenin',
    birth: 1870,
    death: 1924,
    birthPlace: { lat: 54.32, lng: 48.37 }, // Ulyanovsk
    roles: [
      { title: 'Chairman', powerId: 'ussr', timeRange: { start: 1917, end: 1924 } },
    ],
    affiliations: ['ussr'],
    description: 'Revolutionary who led the Bolshevik Revolution and founded the Soviet state.',
    tags: ['revolutionary', 'communist', 'founder'],
  },
  {
    id: 'leon-trotsky',
    name: 'Leon Trotsky',
    birth: 1879,
    death: 1940,
    birthPlace: { lat: 47.85, lng: 33.32 }, // Yanovka
    roles: [],
    affiliations: ['ussr'],
    description: 'Revolutionary and Red Army commander, later exiled and assassinated by Stalin.',
    tags: ['revolutionary', 'communist', 'exile', 'assassination'],
  },
  {
    id: 'joseph-stalin',
    name: 'Joseph Stalin',
    birth: 1878,
    death: 1953,
    birthPlace: { lat: 41.99, lng: 44.79 }, // Gori, Georgia
    roles: [
      { title: 'General Secretary', powerId: 'ussr', timeRange: { start: 1924, end: 1953 } },
    ],
    affiliations: ['ussr'],
    description: 'Soviet dictator who industrialized USSR through terror, leading role in WWII victory.',
    tags: ['dictator', 'communist', 'purges', 'wwii'],
  },

  // WWI LEADERS
  {
    id: 'archduke-franz-ferdinand',
    name: 'Archduke Franz Ferdinand',
    birth: 1863,
    death: 1914,
    birthPlace: { lat: 48.21, lng: 16.37 }, // Graz
    roles: [],
    affiliations: ['austria-hungary'],
    description: 'Austrian heir whose assassination in Sarajevo triggered WWI.',
    tags: ['royalty', 'assassination', 'wwi-trigger'],
  },
  {
    id: 'david-lloyd-george',
    name: 'David Lloyd George',
    birth: 1863,
    death: 1945,
    birthPlace: { lat: 53.26, lng: -3.83 }, // Manchester
    roles: [
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1916, end: 1922 } },
    ],
    affiliations: ['british-empire'],
    description: 'British PM who led country to victory in WWI, participated in Versailles Treaty.',
    tags: ['prime-minister', 'wwi', 'versailles'],
  },
  {
    id: 'georges-clemenceau',
    name: 'Georges Clemenceau',
    birth: 1841,
    death: 1929,
    birthPlace: { lat: 46.43, lng: -1.24 }, // Mouilleron-en-Pareds
    roles: [
      { title: 'Prime Minister', powerId: 'french-third-republic', timeRange: { start: 1917, end: 1920 } },
    ],
    affiliations: ['french-third-republic'],
    description: '"The Tiger" who led France to WWI victory, harsh on Germany at Versailles.',
    tags: ['prime-minister', 'wwi', 'versailles'],
  },

  // FASCIST LEADERS
  {
    id: 'benito-mussolini',
    name: 'Benito Mussolini',
    birth: 1883,
    death: 1945,
    birthPlace: { lat: 44.22, lng: 12.04 }, // Predappio
    roles: [
      { title: 'Duce', powerId: 'fascist-italy', timeRange: { start: 1922, end: 1943 } },
    ],
    affiliations: ['fascist-italy'],
    description: 'Fascist dictator of Italy, allied with Hitler, executed by partisans.',
    tags: ['dictator', 'fascist', 'wwii'],
  },
  {
    id: 'adolf-hitler',
    name: 'Adolf Hitler',
    birth: 1889,
    death: 1945,
    birthPlace: { lat: 48.26, lng: 13.04 }, // Braunau
    roles: [
      { title: 'Führer', powerId: 'nazi-germany', timeRange: { start: 1934, end: 1945 } },
    ],
    affiliations: ['nazi-germany'],
    description: 'Dictator of Nazi Germany who initiated World War II in Europe and orchestrated the Holocaust.',
    tags: ['dictator', 'fascist', 'wwii', 'genocide'],
  },
  {
    id: 'francisco-franco',
    name: 'Francisco Franco',
    birth: 1892,
    death: 1975,
    birthPlace: { lat: 43.37, lng: -8.40 }, // Ferrol
    roles: [
      { title: 'Caudillo', powerId: 'spanish-empire', timeRange: { start: 1939, end: 1975 } },
    ],
    affiliations: [],
    description: 'Spanish dictator who won Civil War with Nazi/Fascist help, ruled until 1975.',
    tags: ['dictator', 'fascist', 'spanish-civil-war'],
  },

  // WWII LEADERS
  {
    id: 'winston-churchill',
    name: 'Winston Churchill',
    birth: 1874,
    death: 1965,
    birthPlace: { lat: 51.8, lng: -1.3 },
    roles: [
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1940, end: 1945 } },
      { title: 'Prime Minister', powerId: 'british-empire', timeRange: { start: 1951, end: 1955 } },
    ],
    affiliations: ['british-empire'],
    description: 'British statesman who served as Prime Minister during World War II.',
    tags: ['wwii', 'politician', 'wartime-leader'],
  },
  {
    id: 'charles-de-gaulle',
    name: 'Charles de Gaulle',
    birth: 1890,
    death: 1970,
    birthPlace: { lat: 50.63, lng: 3.06 }, // Lille
    roles: [
      { title: 'President', powerId: 'french-third-republic', timeRange: { start: 1959, end: 1969 } },
    ],
    affiliations: ['french-third-republic'],
    description: 'Led Free France in WWII, later founded Fifth Republic as president.',
    tags: ['general', 'wwii', 'president', 'france'],
  },
  {
    id: 'dwight-eisenhower',
    name: 'Dwight D. Eisenhower',
    birth: 1890,
    death: 1969,
    birthPlace: { lat: 33.85, lng: -97.43 }, // Denison, TX
    roles: [
      { title: '34th President', powerId: 'usa', timeRange: { start: 1953, end: 1961 } },
    ],
    affiliations: ['usa'],
    description: 'Supreme Allied Commander in WWII, later president during early Cold War.',
    tags: ['general', 'wwii', 'president', 'd-day'],
  },
  {
    id: 'hirohito',
    name: 'Emperor Hirohito',
    birth: 1901,
    death: 1989,
    birthPlace: { lat: 35.68, lng: 139.65 },
    roles: [
      { title: 'Emperor', powerId: 'empire-japan', timeRange: { start: 1926, end: 1989 } },
    ],
    affiliations: ['empire-japan'],
    description: 'Japanese emperor during WWII, announced surrender after atomic bombs.',
    tags: ['emperor', 'japan', 'wwii', 'surrender'],
  },
  {
    id: 'hideki-tojo',
    name: 'Hideki Tojo',
    birth: 1884,
    death: 1948,
    birthPlace: { lat: 35.68, lng: 139.65 },
    roles: [
      { title: 'Prime Minister', powerId: 'empire-japan', timeRange: { start: 1941, end: 1944 } },
    ],
    affiliations: ['empire-japan'],
    description: 'Japanese PM who led Japan into WWII, executed as war criminal.',
    tags: ['prime-minister', 'japan', 'wwii', 'war-criminal'],
  },

  // SCIENTISTS
  {
    id: 'charles-darwin',
    name: 'Charles Darwin',
    birth: 1809,
    death: 1882,
    birthPlace: { lat: 52.71, lng: -2.75 }, // Shrewsbury
    roles: [],
    affiliations: ['british-empire'],
    description: 'Naturalist who developed theory of evolution by natural selection.',
    tags: ['scientist', 'evolution', 'naturalist'],
  },
  {
    id: 'albert-einstein',
    name: 'Albert Einstein',
    birth: 1879,
    death: 1955,
    birthPlace: { lat: 48.40, lng: 10.00 }, // Ulm
    roles: [],
    affiliations: ['german-empire', 'usa'],
    description: 'Physicist who developed theory of relativity, revolutionized physics.',
    tags: ['scientist', 'physicist', 'relativity'],
  },
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    birth: 1867,
    death: 1934,
    birthPlace: { lat: 52.23, lng: 21.01 }, // Warsaw
    roles: [],
    affiliations: [],
    description: 'Physicist who discovered radioactivity, first woman to win Nobel Prize.',
    tags: ['scientist', 'physicist', 'radioactivity', 'nobel'],
  },

  // REFORMERS & ACTIVISTS
  {
    id: 'karl-marx',
    name: 'Karl Marx',
    birth: 1818,
    death: 1883,
    birthPlace: { lat: 49.76, lng: 6.64 }, // Trier
    roles: [],
    affiliations: [],
    description: 'Philosopher who developed communist theory, wrote Das Kapital.',
    tags: ['philosopher', 'communist', 'economics'],
  },
  {
    id: 'mohandas-gandhi',
    name: 'Mahatma Gandhi',
    birth: 1869,
    death: 1948,
    birthPlace: { lat: 21.52, lng: 70.08 }, // Porbandar
    roles: [],
    affiliations: ['british-raj'],
    description: 'Leader of Indian independence through nonviolent resistance.',
    tags: ['independence', 'nonviolence', 'india', 'civil-rights'],
  },

  // OTTOMAN/TURKISH
  {
    id: 'ataturk',
    name: 'Mustafa Kemal Atatürk',
    birth: 1881,
    death: 1938,
    birthPlace: { lat: 40.64, lng: 22.94 }, // Thessaloniki
    roles: [
      { title: 'President', powerId: 'turkey-republic', timeRange: { start: 1923, end: 1938 } },
    ],
    affiliations: ['turkey-republic'],
    description: 'Founder of modern Turkey, secularized and westernized the nation.',
    tags: ['founder', 'reformer', 'turkey', 'secular'],
  },

  // CHINESE
  {
    id: 'sun-yat-sen',
    name: 'Sun Yat-sen',
    birth: 1866,
    death: 1925,
    birthPlace: { lat: 22.52, lng: 113.33 }, // Cuiheng
    roles: [
      { title: 'President', powerId: 'republic-china', timeRange: { start: 1912, end: 1912 } },
    ],
    affiliations: ['republic-china'],
    description: 'Father of modern China, overthrew Qing dynasty.',
    tags: ['revolutionary', 'founder', 'china'],
  },
  {
    id: 'chiang-kai-shek',
    name: 'Chiang Kai-shek',
    birth: 1887,
    death: 1975,
    birthPlace: { lat: 29.78, lng: 121.75 }, // Xikou
    roles: [
      { title: 'President', powerId: 'republic-china', timeRange: { start: 1928, end: 1949 } },
    ],
    affiliations: ['republic-china'],
    description: 'Nationalist leader who fought communists and Japan, fled to Taiwan.',
    tags: ['leader', 'nationalist', 'china', 'civil-war'],
  },
  {
    id: 'mao-zedong',
    name: 'Mao Zedong',
    birth: 1893,
    death: 1976,
    birthPlace: { lat: 27.92, lng: 112.92 }, // Shaoshan
    roles: [
      { title: 'Chairman', powerId: 'ussr', timeRange: { start: 1949, end: 1976 } },
    ],
    affiliations: [],
    description: 'Founder of the People\'s Republic of China, led the Chinese Communist Revolution.',
    tags: ['revolutionary', 'communist', 'founder'],
  },

  // JAPANESE
  {
    id: 'emperor-meiji',
    name: 'Emperor Meiji',
    birth: 1852,
    death: 1912,
    birthPlace: { lat: 35.01, lng: 135.77 }, // Kyoto
    roles: [
      { title: 'Emperor', powerId: 'empire-japan', timeRange: { start: 1867, end: 1912 } },
    ],
    affiliations: ['empire-japan'],
    description: 'Emperor during Japan\'s rapid modernization and rise to power.',
    tags: ['emperor', 'japan', 'meiji-restoration'],
  },

  // MORE SCIENTISTS
  {
    id: 'louis-pasteur',
    name: 'Louis Pasteur',
    birth: 1822,
    death: 1895,
    birthPlace: { lat: 47.08, lng: 5.48 }, // Dole
    roles: [],
    affiliations: ['french-third-republic'],
    description: 'Father of microbiology, developed pasteurization and vaccines.',
    tags: ['scientist', 'medicine', 'microbiology', 'vaccines'],
  },
  {
    id: 'michael-faraday',
    name: 'Michael Faraday',
    birth: 1791,
    death: 1867,
    birthPlace: { lat: 51.5, lng: -0.1 },
    roles: [],
    affiliations: ['british-empire'],
    description: 'Discovered electromagnetic induction, built first electric motor.',
    tags: ['scientist', 'physicist', 'electricity', 'magnetism'],
  },
  {
    id: 'james-clerk-maxwell',
    name: 'James Clerk Maxwell',
    birth: 1831,
    death: 1879,
    birthPlace: { lat: 55.95, lng: -3.19 }, // Edinburgh
    roles: [],
    affiliations: ['british-empire'],
    description: 'Unified electricity, magnetism, and light in electromagnetic theory.',
    tags: ['scientist', 'physicist', 'electromagnetism'],
  },
  {
    id: 'max-planck',
    name: 'Max Planck',
    birth: 1858,
    death: 1947,
    birthPlace: { lat: 54.35, lng: 10.13 }, // Kiel
    roles: [],
    affiliations: ['german-empire'],
    description: 'Father of quantum theory, revolutionized understanding of energy.',
    tags: ['scientist', 'physicist', 'quantum'],
  },
  {
    id: 'niels-bohr',
    name: 'Niels Bohr',
    birth: 1885,
    death: 1962,
    birthPlace: { lat: 55.68, lng: 12.57 }, // Copenhagen
    roles: [],
    affiliations: [],
    description: 'Developed atomic model, key figure in quantum mechanics.',
    tags: ['scientist', 'physicist', 'atomic', 'quantum'],
  },
  {
    id: 'sigmund-freud',
    name: 'Sigmund Freud',
    birth: 1856,
    death: 1939,
    birthPlace: { lat: 49.78, lng: 18.17 }, // Freiberg
    roles: [],
    affiliations: ['austria-hungary'],
    description: 'Father of psychoanalysis, transformed understanding of the human mind.',
    tags: ['scientist', 'psychologist', 'psychoanalysis'],
  },
  {
    id: 'nikola-tesla',
    name: 'Nikola Tesla',
    birth: 1856,
    death: 1943,
    birthPlace: { lat: 44.57, lng: 15.37 }, // Smiljan
    roles: [],
    affiliations: ['usa'],
    description: 'Inventor of AC electrical system, visionary engineer.',
    tags: ['inventor', 'engineer', 'electricity', 'ac-current'],
  },
  {
    id: 'guglielmo-marconi',
    name: 'Guglielmo Marconi',
    birth: 1874,
    death: 1937,
    birthPlace: { lat: 44.49, lng: 11.34 }, // Bologna
    roles: [],
    affiliations: ['kingdom-italy'],
    description: 'Invented radio communication, Nobel Prize winner.',
    tags: ['inventor', 'radio', 'communication'],
  },
  {
    id: 'alexander-graham-bell',
    name: 'Alexander Graham Bell',
    birth: 1847,
    death: 1922,
    birthPlace: { lat: 55.95, lng: -3.19 }, // Edinburgh
    roles: [],
    affiliations: ['usa', 'british-empire'],
    description: 'Invented the telephone, revolutionized communication.',
    tags: ['inventor', 'telephone', 'communication'],
  },
  {
    id: 'wright-brothers-wilbur',
    name: 'Wilbur Wright',
    birth: 1867,
    death: 1912,
    birthPlace: { lat: 40.19, lng: -76.75 }, // Millville
    roles: [],
    affiliations: ['usa'],
    description: 'With brother Orville, achieved first powered flight.',
    tags: ['inventor', 'aviation', 'flight'],
  },

  // INDUSTRIALISTS & ENTREPRENEURS
  {
    id: 'john-rockefeller',
    name: 'John D. Rockefeller',
    birth: 1839,
    death: 1937,
    birthPlace: { lat: 42.09, lng: -79.24 }, // Richford
    roles: [],
    affiliations: ['usa'],
    description: 'Founded Standard Oil, richest American ever, major philanthropist.',
    tags: ['industrialist', 'oil', 'wealth', 'philanthropy'],
  },
  {
    id: 'andrew-carnegie',
    name: 'Andrew Carnegie',
    birth: 1835,
    death: 1919,
    birthPlace: { lat: 56.07, lng: -3.47 }, // Dunfermline
    roles: [],
    affiliations: ['usa'],
    description: 'Steel magnate, philanthropist who funded libraries worldwide.',
    tags: ['industrialist', 'steel', 'philanthropy'],
  },
  {
    id: 'j-p-morgan',
    name: 'J.P. Morgan',
    birth: 1837,
    death: 1913,
    birthPlace: { lat: 41.31, lng: -72.93 }, // Hartford
    roles: [],
    affiliations: ['usa'],
    description: 'Banker who dominated American finance, bailed out US government.',
    tags: ['banker', 'finance', 'wall-street'],
  },
  {
    id: 'henry-ford',
    name: 'Henry Ford',
    birth: 1863,
    death: 1947,
    birthPlace: { lat: 42.31, lng: -83.24 }, // Dearborn
    roles: [],
    affiliations: ['usa'],
    description: 'Pioneered assembly line production, made automobiles affordable.',
    tags: ['industrialist', 'automobile', 'assembly-line'],
  },
  {
    id: 'alfred-krupp',
    name: 'Alfred Krupp',
    birth: 1812,
    death: 1887,
    birthPlace: { lat: 51.45, lng: 7.01 }, // Essen
    roles: [],
    affiliations: ['german-empire'],
    description: 'German steel magnate, "Cannon King" who armed European militaries.',
    tags: ['industrialist', 'steel', 'arms'],
  },

  // WRITERS & ARTISTS
  {
    id: 'charles-dickens',
    name: 'Charles Dickens',
    birth: 1812,
    death: 1870,
    birthPlace: { lat: 50.8, lng: -1.09 }, // Portsmouth
    roles: [],
    affiliations: ['british-empire'],
    description: 'Greatest Victorian novelist, social critic, wrote Oliver Twist.',
    tags: ['writer', 'novelist', 'victorian'],
  },
  {
    id: 'leo-tolstoy',
    name: 'Leo Tolstoy',
    birth: 1828,
    death: 1910,
    birthPlace: { lat: 54.08, lng: 37.52 }, // Yasnaya Polyana
    roles: [],
    affiliations: ['russian-empire'],
    description: 'Russian novelist, wrote War and Peace and Anna Karenina.',
    tags: ['writer', 'novelist', 'russia'],
  },
  {
    id: 'fyodor-dostoevsky',
    name: 'Fyodor Dostoevsky',
    birth: 1821,
    death: 1881,
    birthPlace: { lat: 55.76, lng: 37.62 },
    roles: [],
    affiliations: ['russian-empire'],
    description: 'Russian novelist, philosopher, wrote Crime and Punishment.',
    tags: ['writer', 'novelist', 'russia', 'philosophy'],
  },
  {
    id: 'mark-twain',
    name: 'Mark Twain',
    birth: 1835,
    death: 1910,
    birthPlace: { lat: 39.72, lng: -91.36 }, // Florida, MO
    roles: [],
    affiliations: ['usa'],
    description: 'American humorist, wrote Tom Sawyer and Huckleberry Finn.',
    tags: ['writer', 'novelist', 'humor', 'america'],
  },
  {
    id: 'victor-hugo',
    name: 'Victor Hugo',
    birth: 1802,
    death: 1885,
    birthPlace: { lat: 47.32, lng: 5.04 }, // Besançon
    roles: [],
    affiliations: ['french-third-republic'],
    description: 'French romantic author, wrote Les Misérables and Notre-Dame.',
    tags: ['writer', 'novelist', 'poet', 'france'],
  },
  {
    id: 'oscar-wilde',
    name: 'Oscar Wilde',
    birth: 1854,
    death: 1900,
    birthPlace: { lat: 53.35, lng: -6.26 }, // Dublin
    roles: [],
    affiliations: ['british-empire'],
    description: 'Irish wit and playwright, wrote The Importance of Being Earnest.',
    tags: ['writer', 'playwright', 'wit', 'ireland'],
  },
  {
    id: 'franz-kafka',
    name: 'Franz Kafka',
    birth: 1883,
    death: 1924,
    birthPlace: { lat: 50.09, lng: 14.42 }, // Prague
    roles: [],
    affiliations: ['austria-hungary'],
    description: 'Author of surreal, existentialist fiction including The Metamorphosis.',
    tags: ['writer', 'novelist', 'existentialist'],
  },
  {
    id: 'claude-monet',
    name: 'Claude Monet',
    birth: 1840,
    death: 1926,
    birthPlace: { lat: 48.86, lng: 2.35 },
    roles: [],
    affiliations: ['french-third-republic'],
    description: 'Founder of Impressionism, painted Water Lilies series.',
    tags: ['artist', 'painter', 'impressionism', 'france'],
  },
  {
    id: 'vincent-van-gogh',
    name: 'Vincent van Gogh',
    birth: 1853,
    death: 1890,
    birthPlace: { lat: 51.59, lng: 5.26 }, // Groot-Zundert
    roles: [],
    affiliations: [],
    description: 'Post-impressionist master, painted Starry Night, suffered mental illness.',
    tags: ['artist', 'painter', 'post-impressionism', 'dutch'],
  },
  {
    id: 'pablo-picasso',
    name: 'Pablo Picasso',
    birth: 1881,
    death: 1973,
    birthPlace: { lat: 36.72, lng: -4.42 }, // Málaga
    roles: [],
    affiliations: [],
    description: 'Most influential artist of 20th century, co-founded Cubism.',
    tags: ['artist', 'painter', 'cubism', 'spain'],
  },
  {
    id: 'richard-wagner',
    name: 'Richard Wagner',
    birth: 1813,
    death: 1883,
    birthPlace: { lat: 51.34, lng: 12.37 }, // Leipzig
    roles: [],
    affiliations: ['german-empire'],
    description: 'Revolutionary composer, wrote Ring Cycle, influenced modern music.',
    tags: ['composer', 'opera', 'germany'],
  },
  {
    id: 'pyotr-tchaikovsky',
    name: 'Pyotr Tchaikovsky',
    birth: 1840,
    death: 1893,
    birthPlace: { lat: 57.17, lng: 48.27 }, // Votkinsk
    roles: [],
    affiliations: ['russian-empire'],
    description: 'Russian composer of Swan Lake, Nutcracker, iconic symphonies.',
    tags: ['composer', 'romantic', 'russia', 'ballet'],
  },

  // MORE MILITARY FIGURES
  {
    id: 'horatio-nelson',
    name: 'Horatio Nelson',
    birth: 1758,
    death: 1805,
    birthPlace: { lat: 52.73, lng: 0.67 }, // Burnham Thorpe
    roles: [],
    affiliations: ['british-empire'],
    description: 'British admiral who won Battle of Trafalgar, died in victory.',
    tags: ['admiral', 'trafalgar', 'naval', 'britain'],
  },
  {
    id: 'erwin-rommel',
    name: 'Erwin Rommel',
    birth: 1891,
    death: 1944,
    birthPlace: { lat: 48.74, lng: 9.32 }, // Heidenheim
    roles: [],
    affiliations: ['nazi-germany'],
    description: 'Desert Fox, respected German general, forced to commit suicide.',
    tags: ['general', 'wwii', 'africa', 'germany'],
  },
  {
    id: 'george-patton',
    name: 'George S. Patton',
    birth: 1885,
    death: 1945,
    birthPlace: { lat: 34.14, lng: -118.15 }, // San Gabriel
    roles: [],
    affiliations: ['usa'],
    description: 'Aggressive American general, led Third Army across Europe.',
    tags: ['general', 'wwii', 'tanks', 'america'],
  },
  {
    id: 'bernard-montgomery',
    name: 'Bernard Montgomery',
    birth: 1887,
    death: 1976,
    birthPlace: { lat: 51.49, lng: -0.17 }, // London
    roles: [],
    affiliations: ['british-empire'],
    description: 'British field marshal, won Battle of El Alamein.',
    tags: ['general', 'wwii', 'el-alamein', 'britain'],
  },
  {
    id: 'douglas-macarthur',
    name: 'Douglas MacArthur',
    birth: 1880,
    death: 1964,
    birthPlace: { lat: 38.54, lng: -90.50 }, // Little Rock
    roles: [],
    affiliations: ['usa'],
    description: 'American general, Pacific commander in WWII, led Korea.',
    tags: ['general', 'wwii', 'pacific', 'korea'],
  },
  {
    id: 'isoroku-yamamoto',
    name: 'Isoroku Yamamoto',
    birth: 1884,
    death: 1943,
    birthPlace: { lat: 37.92, lng: 139.04 }, // Nagaoka
    roles: [],
    affiliations: ['empire-japan'],
    description: 'Japanese admiral who planned Pearl Harbor, killed by US ambush.',
    tags: ['admiral', 'wwii', 'pearl-harbor', 'japan'],
  },
  {
    id: 'georgy-zhukov',
    name: 'Georgy Zhukov',
    birth: 1896,
    death: 1974,
    birthPlace: { lat: 55.92, lng: 37.0 }, // Strelkovka
    roles: [],
    affiliations: ['ussr'],
    description: 'Soviet marshal who won Stalingrad, Berlin, greatest WWII general.',
    tags: ['marshal', 'wwii', 'stalingrad', 'soviet'],
  },

  // REFORMERS & ACTIVISTS
  {
    id: 'frederick-douglass',
    name: 'Frederick Douglass',
    birth: 1818,
    death: 1895,
    birthPlace: { lat: 38.59, lng: -76.13 }, // Talbot County
    roles: [],
    affiliations: ['usa'],
    description: 'Escaped slave who became leading abolitionist and orator.',
    tags: ['abolitionist', 'orator', 'slavery', 'civil-rights'],
  },
  {
    id: 'harriet-tubman',
    name: 'Harriet Tubman',
    birth: 1822,
    death: 1913,
    birthPlace: { lat: 38.59, lng: -76.13 }, // Dorchester County
    roles: [],
    affiliations: ['usa'],
    description: 'Escaped slave who led hundreds to freedom on Underground Railroad.',
    tags: ['abolitionist', 'underground-railroad', 'slavery', 'hero'],
  },
  {
    id: 'susan-b-anthony',
    name: 'Susan B. Anthony',
    birth: 1820,
    death: 1906,
    birthPlace: { lat: 42.45, lng: -73.24 }, // Adams, MA
    roles: [],
    affiliations: ['usa'],
    description: 'Leader of women\'s suffrage movement in America.',
    tags: ['suffragette', 'women-rights', 'voting', 'activist'],
  },
  {
    id: 'emmeline-pankhurst',
    name: 'Emmeline Pankhurst',
    birth: 1858,
    death: 1928,
    birthPlace: { lat: 53.48, lng: -2.24 }, // Manchester
    roles: [],
    affiliations: ['british-empire'],
    description: 'British suffragette leader, used militant tactics for women\'s vote.',
    tags: ['suffragette', 'women-rights', 'britain', 'activist'],
  },

  // PHILOSOPHERS
  {
    id: 'friedrich-nietzsche',
    name: 'Friedrich Nietzsche',
    birth: 1844,
    death: 1900,
    birthPlace: { lat: 51.18, lng: 12.14 }, // Röcken
    roles: [],
    affiliations: [],
    description: 'Philosopher who declared "God is dead," influenced existentialism.',
    tags: ['philosopher', 'existentialism', 'germany'],
  },
  {
    id: 'john-stuart-mill',
    name: 'John Stuart Mill',
    birth: 1806,
    death: 1873,
    birthPlace: { lat: 51.51, lng: -0.13 },
    roles: [],
    affiliations: ['british-empire'],
    description: 'Philosopher of liberalism and utilitarianism, advocated women\'s rights.',
    tags: ['philosopher', 'liberal', 'utilitarianism'],
  },
];

