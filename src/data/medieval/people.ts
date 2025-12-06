// Medieval Historical Figures (500-1500 CE)
import { Person } from '@/types';

export const medievalPeople: Person[] = [
  // FRANKISH/CAROLINGIAN
  {
    id: 'clovis-i',
    name: 'Clovis I',
    birth: 466,
    death: 511,
    birthPlace: { lat: 50.85, lng: 2.88 }, // Tournai
    roles: [
      { title: 'King of the Franks', powerId: 'frankish-kingdom', timeRange: { start: 481, end: 511 } },
    ],
    affiliations: ['frankish-kingdom'],
    description: 'First king to unite all Frankish tribes, converted to Christianity, founder of Merovingian dynasty.',
    tags: ['founder', 'franks', 'christian', 'merovingian'],
  },
  {
    id: 'charles-martel',
    name: 'Charles Martel',
    birth: 688,
    death: 741,
    birthPlace: { lat: 50.0, lng: 4.0 }, // Austrasia
    roles: [
      { title: 'Mayor of the Palace', powerId: 'frankish-kingdom', timeRange: { start: 718, end: 741 } },
    ],
    affiliations: ['frankish-kingdom'],
    description: 'Defeated the Umayyad invasion at Tours, grandfather of Charlemagne, "The Hammer".',
    tags: ['military', 'franks', 'tours', 'hero'],
  },
  {
    id: 'charlemagne',
    name: 'Charlemagne',
    birth: 747,
    death: 814,
    birthPlace: { lat: 50.78, lng: 6.08 }, // Aachen area
    roles: [
      { title: 'King of the Franks', powerId: 'frankish-kingdom', timeRange: { start: 768, end: 814 } },
      { title: 'Holy Roman Emperor', powerId: 'carolingian-empire', timeRange: { start: 800, end: 814 } },
    ],
    affiliations: ['frankish-kingdom', 'carolingian-empire'],
    description: 'United most of Western Europe, crowned Holy Roman Emperor, sparked the Carolingian Renaissance.',
    tags: ['emperor', 'franks', 'holy-roman', 'renaissance'],
  },

  // ENGLISH/BRITISH
  {
    id: 'alfred-great',
    name: 'Alfred the Great',
    birth: 849,
    death: 899,
    birthPlace: { lat: 51.25, lng: -1.77 }, // Wantage
    roles: [
      { title: 'King of Wessex', powerId: 'anglo-saxon-heptarchy', timeRange: { start: 871, end: 899 } },
    ],
    affiliations: ['anglo-saxon-heptarchy'],
    description: 'Defended England against Vikings, promoted education, only English king called "Great".',
    tags: ['king', 'england', 'viking-defender', 'scholar'],
  },
  {
    id: 'william-conqueror',
    name: 'William the Conqueror',
    birth: 1028,
    death: 1087,
    birthPlace: { lat: 49.2144, lng: -0.3694 }, // Falaise
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1066, end: 1087 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Norman duke who conquered England in 1066, commissioned the Domesday Book.',
    tags: ['conqueror', 'norman', 'hastings', 'domesday'],
  },
  {
    id: 'richard-lionheart',
    name: 'Richard I (The Lionheart)',
    birth: 1157,
    death: 1199,
    birthPlace: { lat: 51.5, lng: -0.9 }, // Oxford
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1189, end: 1199 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Crusader king, legendary warrior, spent most of his reign abroad.',
    tags: ['king', 'crusader', 'warrior', 'england'],
  },
  {
    id: 'king-john',
    name: 'King John',
    birth: 1166,
    death: 1216,
    birthPlace: { lat: 51.5, lng: -0.9 }, // Oxford
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1199, end: 1216 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Unpopular king forced to sign Magna Carta, lost most English lands in France.',
    tags: ['king', 'magna-carta', 'england', 'unpopular'],
  },
  {
    id: 'edward-i',
    name: 'Edward I (Longshanks)',
    birth: 1239,
    death: 1307,
    birthPlace: { lat: 51.5, lng: -0.13 }, // Westminster
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1272, end: 1307 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Conquered Wales, fought Scotland, reformed law and Parliament.',
    tags: ['king', 'conqueror', 'wales', 'scotland'],
  },
  {
    id: 'edward-iii',
    name: 'Edward III',
    birth: 1312,
    death: 1377,
    birthPlace: { lat: 51.5, lng: -0.5 }, // Windsor
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1327, end: 1377 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Started the Hundred Years\' War, founded Order of the Garter.',
    tags: ['king', 'hundred-years-war', 'chivalry', 'england'],
  },
  {
    id: 'henry-v-england',
    name: 'Henry V',
    birth: 1386,
    death: 1422,
    birthPlace: { lat: 51.8, lng: -3.0 }, // Monmouth
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1413, end: 1422 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Victor of Agincourt, nearly conquered France before early death.',
    tags: ['king', 'hundred-years-war', 'agincourt', 'warrior'],
  },

  // FRENCH
  {
    id: 'philip-ii-france',
    name: 'Philip II Augustus',
    birth: 1165,
    death: 1223,
    birthPlace: { lat: 49.04, lng: 2.04 }, // Gonesse
    roles: [
      { title: 'King of France', powerId: 'kingdom-france', timeRange: { start: 1180, end: 1223 } },
    ],
    affiliations: ['kingdom-france'],
    description: 'Transformed France into major power, defeated King John, expanded royal domain.',
    tags: ['king', 'france', 'expansion', 'capetian'],
  },
  {
    id: 'louis-ix',
    name: 'Louis IX (Saint Louis)',
    birth: 1214,
    death: 1270,
    birthPlace: { lat: 49.2, lng: 2.4 }, // Poissy
    roles: [
      { title: 'King of France', powerId: 'kingdom-france', timeRange: { start: 1226, end: 1270 } },
    ],
    affiliations: ['kingdom-france'],
    description: 'Crusader king canonized as a saint, model of medieval Christian kingship.',
    tags: ['king', 'saint', 'crusader', 'france'],
  },
  {
    id: 'philip-iv-france',
    name: 'Philip IV (The Fair)',
    birth: 1268,
    death: 1314,
    birthPlace: { lat: 48.4, lng: 2.7 }, // Fontainebleau
    roles: [
      { title: 'King of France', powerId: 'kingdom-france', timeRange: { start: 1285, end: 1314 } },
    ],
    affiliations: ['kingdom-france'],
    description: 'Destroyed the Knights Templar, moved papacy to Avignon, centralized royal power.',
    tags: ['king', 'templar', 'avignon', 'france'],
  },
  {
    id: 'joan-arc',
    name: 'Joan of Arc',
    birth: 1412,
    death: 1431,
    birthPlace: { lat: 48.45, lng: 5.67 }, // Domrémy
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Peasant girl who led French armies during Hundred Years\' War, burned as heretic, later canonized.',
    tags: ['heroine', 'saint', 'hundred-years-war', 'martyr'],
  },

  // SCOTTISH
  {
    id: 'robert-bruce',
    name: 'Robert the Bruce',
    birth: 1274,
    death: 1329,
    birthPlace: { lat: 55.4, lng: -4.6 }, // Turnberry
    roles: [
      { title: 'King of Scots', powerId: 'kingdom-scotland', timeRange: { start: 1306, end: 1329 } },
    ],
    affiliations: ['kingdom-scotland'],
    description: 'Won Scottish independence at Bannockburn, hero of Scottish history.',
    tags: ['king', 'independence', 'scotland', 'bannockburn'],
  },
  {
    id: 'william-wallace',
    name: 'William Wallace',
    birth: 1270,
    death: 1305,
    birthPlace: { lat: 55.6, lng: -4.5 }, // Elderslie
    roles: [],
    affiliations: ['kingdom-scotland'],
    description: 'Scottish knight who led resistance against English occupation, executed as traitor.',
    tags: ['hero', 'independence', 'scotland', 'martyr'],
  },

  // HOLY ROMAN/GERMAN
  {
    id: 'otto-i',
    name: 'Otto I (The Great)',
    birth: 912,
    death: 973,
    birthPlace: { lat: 52.13, lng: 11.63 }, // Wallhausen
    roles: [
      { title: 'Holy Roman Emperor', powerId: 'holy-roman-empire', timeRange: { start: 962, end: 973 } },
    ],
    affiliations: ['holy-roman-empire'],
    description: 'First Holy Roman Emperor, defeated Magyars, established German dominance in Empire.',
    tags: ['emperor', 'holy-roman', 'founder', 'lechfeld'],
  },
  {
    id: 'frederick-barbarossa',
    name: 'Frederick Barbarossa',
    birth: 1122,
    death: 1190,
    birthPlace: { lat: 49.45, lng: 8.45 }, // Waiblingen
    roles: [
      { title: 'Holy Roman Emperor', powerId: 'holy-roman-empire', timeRange: { start: 1155, end: 1190 } },
    ],
    affiliations: ['holy-roman-empire'],
    description: 'Powerful medieval emperor, drowned on Third Crusade, legendary figure in German folklore.',
    tags: ['emperor', 'holy-roman', 'crusader', 'legendary'],
  },
  {
    id: 'frederick-ii-hre',
    name: 'Frederick II (Stupor Mundi)',
    birth: 1194,
    death: 1250,
    birthPlace: { lat: 43.72, lng: 13.22 }, // Jesi
    roles: [
      { title: 'Holy Roman Emperor', powerId: 'holy-roman-empire', timeRange: { start: 1220, end: 1250 } },
      { title: 'King of Sicily', powerId: 'kingdom-sicily', timeRange: { start: 1198, end: 1250 } },
    ],
    affiliations: ['holy-roman-empire', 'kingdom-sicily'],
    description: '"Wonder of the World" - polyglot, scholar, founded University of Naples, negotiated crusade.',
    tags: ['emperor', 'holy-roman', 'scholar', 'sicily', 'crusader'],
  },

  // IBERIAN
  {
    id: 'el-cid',
    name: 'El Cid (Rodrigo Díaz)',
    birth: 1043,
    death: 1099,
    birthPlace: { lat: 42.34, lng: -3.7 }, // Vivar
    roles: [],
    affiliations: ['kingdom-castile'],
    description: 'Legendary Spanish knight, hero of the Reconquista, captured Valencia.',
    tags: ['hero', 'reconquista', 'spain', 'warrior'],
  },
  {
    id: 'ferdinand-iii-castile',
    name: 'Ferdinand III of Castile',
    birth: 1199,
    death: 1252,
    birthPlace: { lat: 42.0, lng: -3.0 }, // Zamora area
    roles: [
      { title: 'King of Castile', powerId: 'kingdom-castile', timeRange: { start: 1217, end: 1252 } },
    ],
    affiliations: ['kingdom-castile'],
    description: 'Conquered Córdoba and Seville, united Castile and León, canonized as saint.',
    tags: ['king', 'reconquista', 'saint', 'castile'],
  },
  {
    id: 'alfonso-x',
    name: 'Alfonso X (The Wise)',
    birth: 1221,
    death: 1284,
    birthPlace: { lat: 40.96, lng: -5.67 }, // Toledo
    roles: [
      { title: 'King of Castile', powerId: 'kingdom-castile', timeRange: { start: 1252, end: 1284 } },
    ],
    affiliations: ['kingdom-castile'],
    description: 'Promoted learning, created Alfonsine Tables, commissioned great works of literature.',
    tags: ['king', 'scholar', 'castile', 'astronomy'],
  },

  // ITALIAN
  {
    id: 'dante-alighieri',
    name: 'Dante Alighieri',
    birth: 1265,
    death: 1321,
    birthPlace: { lat: 43.77, lng: 11.25 }, // Florence
    roles: [],
    affiliations: [],
    description: 'Author of the Divine Comedy, father of the Italian language, greatest medieval poet.',
    tags: ['poet', 'writer', 'italy', 'divine-comedy'],
  },
  {
    id: 'marco-polo',
    name: 'Marco Polo',
    birth: 1254,
    death: 1324,
    birthPlace: { lat: 45.44, lng: 12.33 }, // Venice
    roles: [],
    affiliations: ['republic-venice'],
    description: 'Venetian merchant who traveled to China, served Kublai Khan, wrote famous travelogue.',
    tags: ['explorer', 'venice', 'china', 'merchant'],
  },
  {
    id: 'giotto',
    name: 'Giotto di Bondone',
    birth: 1267,
    death: 1337,
    birthPlace: { lat: 43.78, lng: 11.28 }, // Vicchio
    roles: [],
    affiliations: [],
    description: 'Pioneer of Renaissance art, broke from Byzantine style, painted Arena Chapel.',
    tags: ['artist', 'painter', 'italy', 'renaissance-precursor'],
  },
  {
    id: 'petrarch',
    name: 'Petrarch',
    birth: 1304,
    death: 1374,
    birthPlace: { lat: 43.52, lng: 11.78 }, // Arezzo
    roles: [],
    affiliations: [],
    description: 'Father of Humanism, poet who sparked interest in classical antiquity.',
    tags: ['poet', 'humanist', 'italy', 'classics'],
  },

  // BYZANTINE
  {
    id: 'justinian-i',
    name: 'Justinian I',
    birth: 482,
    death: 565,
    birthPlace: { lat: 42.03, lng: 21.33 }, // Tauresium
    roles: [
      { title: 'Emperor', powerId: 'eastern-roman-empire', timeRange: { start: 527, end: 565 } },
    ],
    affiliations: ['eastern-roman-empire'],
    description: 'Reconquered much of Western Rome, codified Roman law, built Hagia Sophia.',
    tags: ['emperor', 'byzantine', 'law', 'hagia-sophia'],
  },
  {
    id: 'theodora-empress',
    name: 'Empress Theodora',
    birth: 500,
    death: 548,
    birthPlace: { lat: 41.01, lng: 28.98 }, // Constantinople
    roles: [
      { title: 'Empress', powerId: 'eastern-roman-empire', timeRange: { start: 527, end: 548 } },
    ],
    affiliations: ['eastern-roman-empire'],
    description: 'Influential empress, former actress, saved Justinian\'s throne during Nika riots.',
    tags: ['empress', 'byzantine', 'female-ruler', 'influential'],
  },
  {
    id: 'basil-ii',
    name: 'Basil II (Bulgar-Slayer)',
    birth: 958,
    death: 1025,
    birthPlace: { lat: 41.01, lng: 28.98 }, // Constantinople
    roles: [
      { title: 'Emperor', powerId: 'eastern-roman-empire', timeRange: { start: 976, end: 1025 } },
    ],
    affiliations: ['eastern-roman-empire'],
    description: 'Greatest medieval Byzantine emperor, conquered Bulgaria, expanded Empire to its peak.',
    tags: ['emperor', 'byzantine', 'conqueror', 'warrior'],
  },
  {
    id: 'constantine-xi',
    name: 'Constantine XI',
    birth: 1405,
    death: 1453,
    birthPlace: { lat: 41.01, lng: 28.98 }, // Constantinople
    roles: [
      { title: 'Emperor', powerId: 'eastern-roman-empire', timeRange: { start: 1449, end: 1453 } },
    ],
    affiliations: ['eastern-roman-empire'],
    description: 'Last Byzantine emperor, died defending Constantinople against Ottomans.',
    tags: ['emperor', 'byzantine', 'last', 'martyr'],
  },

  // ISLAMIC/MIDDLE EASTERN
  {
    id: 'muhammad-prophet',
    name: 'Prophet Muhammad',
    birth: 570,
    death: 632,
    birthPlace: { lat: 21.4225, lng: 39.8262 }, // Mecca
    roles: [
      { title: 'Prophet', powerId: 'rashidun-caliphate', timeRange: { start: 610, end: 632 } },
    ],
    affiliations: ['rashidun-caliphate'],
    description: 'Founder of Islam, united Arabia, considered the final prophet in Islamic tradition.',
    tags: ['prophet', 'founder', 'islam', 'arabia'],
  },
  {
    id: 'abu-bakr',
    name: 'Abu Bakr',
    birth: 573,
    death: 634,
    birthPlace: { lat: 21.4225, lng: 39.8262 }, // Mecca
    roles: [
      { title: 'Caliph', powerId: 'rashidun-caliphate', timeRange: { start: 632, end: 634 } },
    ],
    affiliations: ['rashidun-caliphate'],
    description: 'First caliph, Muhammad\'s closest companion, consolidated Islam after Muhammad\'s death.',
    tags: ['caliph', 'islam', 'rashidun', 'companion'],
  },
  {
    id: 'umar-caliph',
    name: 'Umar ibn al-Khattab',
    birth: 584,
    death: 644,
    birthPlace: { lat: 21.4225, lng: 39.8262 }, // Mecca
    roles: [
      { title: 'Caliph', powerId: 'rashidun-caliphate', timeRange: { start: 634, end: 644 } },
    ],
    affiliations: ['rashidun-caliphate'],
    description: 'Second caliph, conquered Persia, Egypt, and Syria, great administrator.',
    tags: ['caliph', 'islam', 'rashidun', 'conqueror'],
  },
  {
    id: 'ali-caliph',
    name: 'Ali ibn Abi Talib',
    birth: 601,
    death: 661,
    birthPlace: { lat: 21.4225, lng: 39.8262 }, // Mecca
    roles: [
      { title: 'Caliph', powerId: 'rashidun-caliphate', timeRange: { start: 656, end: 661 } },
    ],
    affiliations: ['rashidun-caliphate'],
    description: 'Fourth caliph, Muhammad\'s cousin and son-in-law, revered by Shia Muslims as first Imam.',
    tags: ['caliph', 'islam', 'rashidun', 'shia'],
  },
  {
    id: 'harun-al-rashid',
    name: 'Harun al-Rashid',
    birth: 763,
    death: 809,
    birthPlace: { lat: 34.53, lng: 36.72 }, // Ray
    roles: [
      { title: 'Caliph', powerId: 'abbasid-caliphate', timeRange: { start: 786, end: 809 } },
    ],
    affiliations: ['abbasid-caliphate'],
    description: 'Caliph during the golden age of Baghdad, featured in One Thousand and One Nights.',
    tags: ['caliph', 'islam', 'abbasid', 'golden-age'],
  },
  {
    id: 'saladin',
    name: 'Saladin (Salah ad-Din)',
    birth: 1137,
    death: 1193,
    birthPlace: { lat: 36.19, lng: 37.17 }, // Tikrit
    roles: [
      { title: 'Sultan', powerId: 'ayyubid-sultanate', timeRange: { start: 1174, end: 1193 } },
    ],
    affiliations: ['ayyubid-sultanate'],
    description: 'Recaptured Jerusalem from Crusaders, respected by enemies for chivalry and honor.',
    tags: ['sultan', 'warrior', 'crusades', 'jerusalem', 'chivalry'],
  },
  {
    id: 'ibn-sina',
    name: 'Ibn Sina (Avicenna)',
    birth: 980,
    death: 1037,
    birthPlace: { lat: 39.65, lng: 66.96 }, // Bukhara
    roles: [],
    affiliations: [],
    description: 'Persian polymath, "Father of Early Modern Medicine", wrote Canon of Medicine.',
    tags: ['physician', 'philosopher', 'scientist', 'persia'],
  },
  {
    id: 'al-khwarizmi',
    name: 'Al-Khwarizmi',
    birth: 780,
    death: 850,
    birthPlace: { lat: 41.55, lng: 60.63 }, // Khwarezm
    roles: [],
    affiliations: ['abbasid-caliphate'],
    description: 'Father of Algebra, his name gives us "algorithm", revolutionized mathematics.',
    tags: ['mathematician', 'scientist', 'algebra', 'algorithm'],
  },
  {
    id: 'ibn-rushd',
    name: 'Ibn Rushd (Averroes)',
    birth: 1126,
    death: 1198,
    birthPlace: { lat: 37.89, lng: -4.78 }, // Córdoba
    roles: [],
    affiliations: ['al-andalus'],
    description: 'Islamic philosopher who preserved and interpreted Aristotle for the West.',
    tags: ['philosopher', 'scholar', 'aristotle', 'andalusia'],
  },
  {
    id: 'ibn-battuta',
    name: 'Ibn Battuta',
    birth: 1304,
    death: 1369,
    birthPlace: { lat: 35.77, lng: -5.83 }, // Tangier
    roles: [],
    affiliations: [],
    description: 'Greatest medieval traveler, visited most of the known Islamic world and beyond.',
    tags: ['explorer', 'traveler', 'morocco', 'geographer'],
  },

  // MONGOL
  {
    id: 'genghis-khan',
    name: 'Genghis Khan',
    birth: 1162,
    death: 1227,
    birthPlace: { lat: 48.0, lng: 108.0 },
    roles: [
      { title: 'Great Khan', powerId: 'mongol-empire', timeRange: { start: 1206, end: 1227 } },
    ],
    affiliations: ['mongol-empire'],
    description: 'Founder of the Mongol Empire, conquered more territory than any individual in history.',
    tags: ['conqueror', 'mongol', 'founder', 'empire'],
  },
  {
    id: 'kublai-khan',
    name: 'Kublai Khan',
    birth: 1215,
    death: 1294,
    birthPlace: { lat: 47.5, lng: 106.9 }, // Mongolia
    roles: [
      { title: 'Great Khan', powerId: 'mongol-empire', timeRange: { start: 1260, end: 1294 } },
      { title: 'Emperor', powerId: 'yuan-dynasty', timeRange: { start: 1271, end: 1294 } },
    ],
    affiliations: ['mongol-empire', 'yuan-dynasty'],
    description: 'Grandson of Genghis, founded Yuan dynasty in China, hosted Marco Polo.',
    tags: ['emperor', 'mongol', 'yuan', 'china'],
  },
  {
    id: 'timur',
    name: 'Timur (Tamerlane)',
    birth: 1336,
    death: 1405,
    birthPlace: { lat: 39.06, lng: 66.96 }, // Kesh
    roles: [
      { title: 'Amir', powerId: 'timurid-empire', timeRange: { start: 1370, end: 1405 } },
    ],
    affiliations: ['timurid-empire'],
    description: 'Turco-Mongol conqueror who created an empire from India to Turkey, devastated populations.',
    tags: ['conqueror', 'timurid', 'central-asia', 'devastation'],
  },

  // CHINESE
  {
    id: 'taizong-tang',
    name: 'Emperor Taizong of Tang',
    birth: 598,
    death: 649,
    birthPlace: { lat: 34.27, lng: 108.90 }, // Chang'an
    roles: [
      { title: 'Emperor', powerId: 'tang-dynasty', timeRange: { start: 626, end: 649 } },
    ],
    affiliations: ['tang-dynasty'],
    description: 'Considered one of greatest Chinese emperors, established Tang golden age.',
    tags: ['emperor', 'china', 'tang', 'golden-age'],
  },
  {
    id: 'wu-zetian',
    name: 'Wu Zetian',
    birth: 624,
    death: 705,
    birthPlace: { lat: 35.47, lng: 113.87 }, // Lizhou
    roles: [
      { title: 'Empress Regnant', powerId: 'tang-dynasty', timeRange: { start: 690, end: 705 } },
    ],
    affiliations: ['tang-dynasty'],
    description: 'Only woman to officially rule China as emperor in her own right.',
    tags: ['empress', 'china', 'female-ruler', 'tang'],
  },
  {
    id: 'zhu-yuanzhang',
    name: 'Hongwu Emperor (Zhu Yuanzhang)',
    birth: 1328,
    death: 1398,
    birthPlace: { lat: 32.88, lng: 117.55 }, // Fengyang
    roles: [
      { title: 'Emperor', powerId: 'ming-dynasty', timeRange: { start: 1368, end: 1398 } },
    ],
    affiliations: ['ming-dynasty'],
    description: 'Peasant who rose to found Ming Dynasty, expelled Mongols from China.',
    tags: ['emperor', 'china', 'ming', 'founder'],
  },
  {
    id: 'zheng-he',
    name: 'Zheng He',
    birth: 1371,
    death: 1433,
    birthPlace: { lat: 24.87, lng: 102.83 }, // Kunming
    roles: [],
    affiliations: ['ming-dynasty'],
    description: 'Admiral who led massive treasure fleets throughout Indian Ocean before Columbus.',
    tags: ['explorer', 'admiral', 'china', 'ming', 'maritime'],
  },

  // JAPANESE
  {
    id: 'minamoto-yoritomo',
    name: 'Minamoto no Yoritomo',
    birth: 1147,
    death: 1199,
    birthPlace: { lat: 34.97, lng: 138.38 }, // Atsuta
    roles: [
      { title: 'Shogun', powerId: 'kamakura-shogunate', timeRange: { start: 1192, end: 1199 } },
    ],
    affiliations: ['kamakura-shogunate'],
    description: 'Founder of the Kamakura shogunate, established first military government in Japan.',
    tags: ['shogun', 'japan', 'samurai', 'founder'],
  },

  // AFRICAN
  {
    id: 'mansa-musa',
    name: 'Mansa Musa',
    birth: 1280,
    death: 1337,
    birthPlace: { lat: 12.65, lng: -8.0 }, // Mali
    roles: [
      { title: 'Mansa', powerId: 'mali-empire', timeRange: { start: 1312, end: 1337 } },
    ],
    affiliations: ['mali-empire'],
    description: 'Richest person in history, his hajj to Mecca destabilized Mediterranean gold markets.',
    tags: ['emperor', 'africa', 'mali', 'wealth', 'hajj'],
  },
  {
    id: 'sundiata-keita',
    name: 'Sundiata Keita',
    birth: 1217,
    death: 1255,
    birthPlace: { lat: 12.65, lng: -8.0 }, // Mali region
    roles: [
      { title: 'Mansa', powerId: 'mali-empire', timeRange: { start: 1235, end: 1255 } },
    ],
    affiliations: ['mali-empire'],
    description: 'Founder of Mali Empire, hero of the Epic of Sundiata.',
    tags: ['founder', 'africa', 'mali', 'epic', 'hero'],
  },

  // RUSSIAN
  {
    id: 'vladimir-great',
    name: 'Vladimir the Great',
    birth: 958,
    death: 1015,
    birthPlace: { lat: 50.45, lng: 30.52 }, // Kyiv
    roles: [
      { title: 'Grand Prince', powerId: 'kievan-rus', timeRange: { start: 980, end: 1015 } },
    ],
    affiliations: ['kievan-rus'],
    description: 'Christianized Kievan Rus\', established Orthodox Christianity in Eastern Slavic lands.',
    tags: ['prince', 'russia', 'christianity', 'conversion'],
  },
  {
    id: 'alexander-nevsky',
    name: 'Alexander Nevsky',
    birth: 1221,
    death: 1263,
    birthPlace: { lat: 56.32, lng: 43.98 }, // Pereslavl
    roles: [
      { title: 'Prince of Novgorod', powerId: 'kievan-rus', timeRange: { start: 1236, end: 1263 } },
    ],
    affiliations: ['kievan-rus'],
    description: 'Defeated Swedish and Teutonic invaders, submitted to Mongols to preserve Russia.',
    tags: ['prince', 'russia', 'hero', 'defender'],
  },
  {
    id: 'ivan-iii',
    name: 'Ivan III (The Great)',
    birth: 1440,
    death: 1505,
    birthPlace: { lat: 55.76, lng: 37.62 }, // Moscow
    roles: [
      { title: 'Grand Prince', powerId: 'grand-duchy-moscow', timeRange: { start: 1462, end: 1505 } },
    ],
    affiliations: ['grand-duchy-moscow'],
    description: 'Ended Mongol rule over Russia, tripled Russian territory, laid foundation for Russian tsardom.',
    tags: ['prince', 'russia', 'independence', 'expansion'],
  },

  // OTTOMAN
  {
    id: 'osman-i',
    name: 'Osman I',
    birth: 1258,
    death: 1326,
    birthPlace: { lat: 40.18, lng: 29.06 }, // Söğüt
    roles: [
      { title: 'Bey', powerId: 'ottoman-empire', timeRange: { start: 1299, end: 1326 } },
    ],
    affiliations: ['ottoman-empire'],
    description: 'Founder of the Ottoman dynasty, from which the empire takes its name.',
    tags: ['founder', 'ottoman', 'turkey', 'dynasty'],
  },
  {
    id: 'mehmed-ii',
    name: 'Mehmed II (The Conqueror)',
    birth: 1432,
    death: 1481,
    birthPlace: { lat: 41.67, lng: 26.55 }, // Edirne
    roles: [
      { title: 'Sultan', powerId: 'ottoman-empire', timeRange: { start: 1451, end: 1481 } },
    ],
    affiliations: ['ottoman-empire'],
    description: 'Conquered Constantinople in 1453, ending the Byzantine Empire.',
    tags: ['sultan', 'ottoman', 'conqueror', 'constantinople'],
  },

  // POPES
  {
    id: 'pope-gregory-i',
    name: 'Pope Gregory I (The Great)',
    birth: 540,
    death: 604,
    birthPlace: { lat: 41.90, lng: 12.50 }, // Rome
    roles: [
      { title: 'Pope', powerId: 'papal-states', timeRange: { start: 590, end: 604 } },
    ],
    affiliations: ['papal-states'],
    description: 'Transformed papacy, sent missionaries to England, reformed liturgy (Gregorian Chant).',
    tags: ['pope', 'church-father', 'reform', 'gregorian'],
  },
  {
    id: 'pope-urban-ii',
    name: 'Pope Urban II',
    birth: 1042,
    death: 1099,
    birthPlace: { lat: 49.03, lng: 3.95 }, // Châtillon
    roles: [
      { title: 'Pope', powerId: 'papal-states', timeRange: { start: 1088, end: 1099 } },
    ],
    affiliations: ['papal-states'],
    description: 'Called the First Crusade at Council of Clermont, launched era of crusading.',
    tags: ['pope', 'crusades', 'clermont'],
  },
  {
    id: 'pope-innocent-iii',
    name: 'Pope Innocent III',
    birth: 1160,
    death: 1216,
    birthPlace: { lat: 41.74, lng: 12.85 }, // Gavignano
    roles: [
      { title: 'Pope', powerId: 'papal-states', timeRange: { start: 1198, end: 1216 } },
    ],
    affiliations: ['papal-states'],
    description: 'Most powerful medieval pope, called Fourth Crusade and Fourth Lateran Council.',
    tags: ['pope', 'powerful', 'crusades', 'lateran'],
  },

  // THEOLOGIANS/PHILOSOPHERS
  {
    id: 'thomas-aquinas',
    name: 'Thomas Aquinas',
    birth: 1225,
    death: 1274,
    birthPlace: { lat: 41.49, lng: 13.81 }, // Roccasecca
    roles: [],
    affiliations: ['papal-states'],
    description: 'Greatest medieval philosopher-theologian, synthesized Aristotle with Christianity.',
    tags: ['philosopher', 'theologian', 'dominican', 'scholastic'],
  },
  {
    id: 'francis-assisi',
    name: 'Francis of Assisi',
    birth: 1181,
    death: 1226,
    birthPlace: { lat: 43.07, lng: 12.62 }, // Assisi
    roles: [],
    affiliations: ['papal-states'],
    description: 'Founder of Franciscan Order, preached poverty and love of nature, canonized saint.',
    tags: ['saint', 'founder', 'franciscan', 'poverty'],
  },

  // MORE THEOLOGIANS & SCHOLARS
  {
    id: 'boethius',
    name: 'Boethius',
    birth: 480,
    death: 524,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [],
    affiliations: [],
    description: 'Last of the Romans, wrote Consolation of Philosophy while awaiting execution.',
    tags: ['philosopher', 'translator', 'consolation'],
  },
  {
    id: 'bede',
    name: 'Bede (The Venerable)',
    birth: 672,
    death: 735,
    birthPlace: { lat: 54.86, lng: -1.58 }, // Northumbria
    roles: [],
    affiliations: ['anglo-saxon-heptarchy'],
    description: 'Father of English history, wrote Ecclesiastical History of the English People.',
    tags: ['historian', 'scholar', 'england', 'monk'],
  },
  {
    id: 'alcuin',
    name: 'Alcuin of York',
    birth: 735,
    death: 804,
    birthPlace: { lat: 53.96, lng: -1.08 },
    roles: [],
    affiliations: ['carolingian-empire'],
    description: 'English scholar who led Carolingian Renaissance, advised Charlemagne.',
    tags: ['scholar', 'educator', 'carolingian', 'renaissance'],
  },
  {
    id: 'john-scotus-eriugena',
    name: 'John Scotus Eriugena',
    birth: 815,
    death: 877,
    birthPlace: { lat: 53.0, lng: -8.0 }, // Ireland
    roles: [],
    affiliations: ['frankish-kingdom'],
    description: 'Irish philosopher, greatest Western thinker between Augustine and Aquinas.',
    tags: ['philosopher', 'theologian', 'irish', 'neoplatonist'],
  },
  {
    id: 'anselm-canterbury',
    name: 'Anselm of Canterbury',
    birth: 1033,
    death: 1109,
    birthPlace: { lat: 45.07, lng: 7.69 }, // Aosta
    roles: [
      { title: 'Archbishop', powerId: 'kingdom-england', timeRange: { start: 1093, end: 1109 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Father of Scholasticism, created ontological argument for God\'s existence.',
    tags: ['philosopher', 'theologian', 'scholastic', 'archbishop'],
  },
  {
    id: 'peter-abelard',
    name: 'Peter Abelard',
    birth: 1079,
    death: 1142,
    birthPlace: { lat: 47.23, lng: -1.09 }, // Le Pallet
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Controversial philosopher, famous for love affair with Héloïse.',
    tags: ['philosopher', 'theologian', 'lover', 'paris'],
  },
  {
    id: 'heloise',
    name: 'Héloïse d\'Argenteuil',
    birth: 1090,
    death: 1164,
    birthPlace: { lat: 48.86, lng: 2.35 },
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Scholar and abbess, famous for her love affair and correspondence with Abelard.',
    tags: ['scholar', 'abbess', 'lover', 'correspondence'],
  },
  {
    id: 'hildegard-bingen',
    name: 'Hildegard of Bingen',
    birth: 1098,
    death: 1179,
    birthPlace: { lat: 49.95, lng: 7.86 },
    roles: [],
    affiliations: ['holy-roman-empire'],
    description: 'Mystic, composer, philosopher, and Doctor of the Church.',
    tags: ['mystic', 'composer', 'abbess', 'visionary'],
  },
  {
    id: 'bernard-clairvaux',
    name: 'Bernard of Clairvaux',
    birth: 1090,
    death: 1153,
    birthPlace: { lat: 47.46, lng: 4.95 },
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Cistercian monk who preached Second Crusade, influential mystic.',
    tags: ['monk', 'mystic', 'crusader', 'cistercian'],
  },
  {
    id: 'peter-lombard',
    name: 'Peter Lombard',
    birth: 1096,
    death: 1160,
    birthPlace: { lat: 45.07, lng: 9.53 },
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Wrote Sentences, the standard theology textbook for centuries.',
    tags: ['theologian', 'bishop', 'sentences'],
  },
  {
    id: 'albertus-magnus',
    name: 'Albertus Magnus',
    birth: 1200,
    death: 1280,
    birthPlace: { lat: 48.77, lng: 10.88 }, // Lauingen
    roles: [],
    affiliations: ['holy-roman-empire'],
    description: 'Universal Doctor, teacher of Aquinas, reconciled Aristotle and Christianity.',
    tags: ['philosopher', 'scientist', 'dominican', 'teacher'],
  },
  {
    id: 'roger-bacon',
    name: 'Roger Bacon',
    birth: 1214,
    death: 1292,
    birthPlace: { lat: 51.5, lng: -1.2 }, // Ilchester
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Doctor Mirabilis, early advocate of scientific method, predicted flying machines.',
    tags: ['philosopher', 'scientist', 'franciscan', 'optics'],
  },
  {
    id: 'duns-scotus',
    name: 'John Duns Scotus',
    birth: 1266,
    death: 1308,
    birthPlace: { lat: 55.77, lng: -2.79 }, // Duns
    roles: [],
    affiliations: ['kingdom-scotland'],
    description: 'Subtle Doctor, rival of Aquinas, defended Immaculate Conception.',
    tags: ['philosopher', 'theologian', 'franciscan', 'scotist'],
  },
  {
    id: 'william-ockham',
    name: 'William of Ockham',
    birth: 1287,
    death: 1347,
    birthPlace: { lat: 51.27, lng: -0.59 },
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Franciscan who formulated Ockham\'s Razor, challenged papal authority.',
    tags: ['philosopher', 'theologian', 'franciscan', 'nominalist'],
  },
  {
    id: 'meister-eckhart',
    name: 'Meister Eckhart',
    birth: 1260,
    death: 1328,
    birthPlace: { lat: 50.97, lng: 10.32 },
    roles: [],
    affiliations: ['holy-roman-empire'],
    description: 'German mystic whose sermons influenced later mysticism and philosophy.',
    tags: ['mystic', 'theologian', 'dominican', 'german'],
  },

  // SCIENTISTS & INVENTORS
  {
    id: 'gerbert-aurillac',
    name: 'Gerbert of Aurillac (Pope Sylvester II)',
    birth: 946,
    death: 1003,
    birthPlace: { lat: 44.93, lng: 2.64 },
    roles: [
      { title: 'Pope', powerId: 'papal-states', timeRange: { start: 999, end: 1003 } },
    ],
    affiliations: ['papal-states'],
    description: 'Scholar-pope who reintroduced Arabic numerals and abacus to Europe.',
    tags: ['pope', 'scholar', 'mathematician', 'astronomy'],
  },
  {
    id: 'leonardo-fibonacci',
    name: 'Fibonacci (Leonardo of Pisa)',
    birth: 1170,
    death: 1250,
    birthPlace: { lat: 43.72, lng: 10.41 },
    roles: [],
    affiliations: ['republic-genoa'],
    description: 'Introduced Hindu-Arabic numerals to Europe, discovered Fibonacci sequence.',
    tags: ['mathematician', 'italy', 'numbers', 'fibonacci'],
  },
  {
    id: 'robert-grosseteste',
    name: 'Robert Grosseteste',
    birth: 1175,
    death: 1253,
    birthPlace: { lat: 52.0, lng: 0.0 },
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Bishop and scientist, pioneer of scientific method, studied optics.',
    tags: ['bishop', 'scientist', 'optics', 'oxford'],
  },
  {
    id: 'giovanni-boccaccio',
    name: 'Giovanni Boccaccio',
    birth: 1313,
    death: 1375,
    birthPlace: { lat: 43.69, lng: 11.1 }, // Certaldo
    roles: [],
    affiliations: [],
    description: 'Author of the Decameron, friend of Petrarch, humanist scholar.',
    tags: ['writer', 'humanist', 'decameron', 'italy'],
  },
  {
    id: 'geoffrey-chaucer',
    name: 'Geoffrey Chaucer',
    birth: 1343,
    death: 1400,
    birthPlace: { lat: 51.51, lng: -0.13 },
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Father of English literature, wrote Canterbury Tales.',
    tags: ['poet', 'writer', 'england', 'canterbury'],
  },

  // MORE ISLAMIC SCHOLARS
  {
    id: 'al-farabi',
    name: 'Al-Farabi',
    birth: 872,
    death: 950,
    birthPlace: { lat: 43.3, lng: 70.4 }, // Farab
    roles: [],
    affiliations: ['abbasid-caliphate'],
    description: 'Second Teacher after Aristotle, political philosopher and musicologist.',
    tags: ['philosopher', 'musician', 'islamic', 'politics'],
  },
  {
    id: 'al-biruni',
    name: 'Al-Biruni',
    birth: 973,
    death: 1048,
    birthPlace: { lat: 41.55, lng: 60.63 },
    roles: [],
    affiliations: ['ghaznavid-empire'],
    description: 'Universal genius, calculated Earth\'s radius, studied India extensively.',
    tags: ['polymath', 'astronomer', 'historian', 'india'],
  },
  {
    id: 'omar-khayyam',
    name: 'Omar Khayyam',
    birth: 1048,
    death: 1131,
    birthPlace: { lat: 36.27, lng: 59.58 }, // Nishapur
    roles: [],
    affiliations: ['seljuk-empire'],
    description: 'Poet of Rubaiyat, mathematician who reformed the calendar.',
    tags: ['poet', 'mathematician', 'astronomer', 'persia'],
  },
  {
    id: 'al-ghazali',
    name: 'Al-Ghazali',
    birth: 1058,
    death: 1111,
    birthPlace: { lat: 36.0, lng: 53.06 }, // Tus
    roles: [],
    affiliations: ['seljuk-empire'],
    description: 'Proof of Islam, synthesized Sufism with orthodox Islam, criticized philosophy.',
    tags: ['theologian', 'mystic', 'sufi', 'islamic'],
  },
  {
    id: 'maimonides',
    name: 'Maimonides',
    birth: 1138,
    death: 1204,
    birthPlace: { lat: 37.88, lng: -4.78 }, // Córdoba
    roles: [],
    affiliations: ['ayyubid-sultanate'],
    description: 'Greatest medieval Jewish philosopher, wrote Guide for the Perplexed.',
    tags: ['philosopher', 'rabbi', 'physician', 'jewish'],
  },
  {
    id: 'ibn-khaldun',
    name: 'Ibn Khaldun',
    birth: 1332,
    death: 1406,
    birthPlace: { lat: 36.8, lng: 10.18 }, // Tunis
    roles: [],
    affiliations: [],
    description: 'Father of sociology and historiography, wrote Muqaddimah on civilization.',
    tags: ['historian', 'sociologist', 'philosopher', 'islamic'],
  },
  {
    id: 'nasir-al-din-tusi',
    name: 'Nasir al-Din al-Tusi',
    birth: 1201,
    death: 1274,
    birthPlace: { lat: 36.0, lng: 53.06 },
    roles: [],
    affiliations: ['ilkhanate'],
    description: 'Persian polymath who built Maragheh observatory, influenced Copernicus.',
    tags: ['astronomer', 'mathematician', 'persia', 'mongol'],
  },
  {
    id: 'rumi',
    name: 'Rumi (Jalal ad-Din)',
    birth: 1207,
    death: 1273,
    birthPlace: { lat: 36.72, lng: 66.89 }, // Balkh
    roles: [],
    affiliations: ['sultanate-rum'],
    description: 'Greatest Sufi poet, founded Mevlevi (Whirling Dervish) order.',
    tags: ['poet', 'mystic', 'sufi', 'persia'],
  },
  {
    id: 'hafez',
    name: 'Hafez',
    birth: 1315,
    death: 1390,
    birthPlace: { lat: 29.62, lng: 52.53 }, // Shiraz
    roles: [],
    affiliations: [],
    description: 'Greatest Persian lyric poet, master of ghazal form.',
    tags: ['poet', 'lyric', 'persia', 'shiraz'],
  },

  // MORE ASIAN FIGURES
  {
    id: 'xuanzang',
    name: 'Xuanzang',
    birth: 602,
    death: 664,
    birthPlace: { lat: 34.76, lng: 113.66 },
    roles: [],
    affiliations: ['tang-dynasty'],
    description: 'Buddhist monk who traveled to India, inspired Journey to the West.',
    tags: ['monk', 'traveler', 'buddhist', 'translator'],
  },
  {
    id: 'li-bai',
    name: 'Li Bai',
    birth: 701,
    death: 762,
    birthPlace: { lat: 36.07, lng: 103.83 },
    roles: [],
    affiliations: ['tang-dynasty'],
    description: 'Immortal Poet, greatest Chinese poet alongside Du Fu.',
    tags: ['poet', 'tang', 'china', 'immortal'],
  },
  {
    id: 'du-fu',
    name: 'Du Fu',
    birth: 712,
    death: 770,
    birthPlace: { lat: 34.78, lng: 113.67 },
    roles: [],
    affiliations: ['tang-dynasty'],
    description: 'Poet-Sage, chronicled An Lushan Rebellion, social commentator.',
    tags: ['poet', 'tang', 'china', 'sage'],
  },
  {
    id: 'su-shi',
    name: 'Su Shi (Su Dongpo)',
    birth: 1037,
    death: 1101,
    birthPlace: { lat: 29.56, lng: 103.77 },
    roles: [],
    affiliations: ['song-dynasty'],
    description: 'Renaissance man of Song China - poet, painter, calligrapher, statesman.',
    tags: ['poet', 'artist', 'statesman', 'song'],
  },
  {
    id: 'zhu-xi',
    name: 'Zhu Xi',
    birth: 1130,
    death: 1200,
    birthPlace: { lat: 27.61, lng: 117.97 },
    roles: [],
    affiliations: ['song-dynasty'],
    description: 'Most influential Confucian since Mencius, codified Neo-Confucianism.',
    tags: ['philosopher', 'confucian', 'song', 'china'],
  },
  {
    id: 'murasaki-shikibu',
    name: 'Murasaki Shikibu',
    birth: 978,
    death: 1014,
    birthPlace: { lat: 35.01, lng: 135.77 },
    roles: [],
    affiliations: ['heian-japan'],
    description: 'Author of Tale of Genji, world\'s first novel, lady-in-waiting.',
    tags: ['writer', 'novelist', 'japan', 'heian'],
  },
  {
    id: 'sei-shonagon',
    name: 'Sei Shōnagon',
    birth: 966,
    death: 1017,
    birthPlace: { lat: 35.01, lng: 135.77 },
    roles: [],
    affiliations: ['heian-japan'],
    description: 'Author of The Pillow Book, rival of Murasaki Shikibu.',
    tags: ['writer', 'court-lady', 'japan', 'heian'],
  },

  // EXPLORERS & TRAVELERS
  {
    id: 'leif-erikson',
    name: 'Leif Erikson',
    birth: 970,
    death: 1020,
    birthPlace: { lat: 64.15, lng: -21.95 }, // Iceland
    roles: [],
    affiliations: ['viking-norway'],
    description: 'First European to reach North America, called it Vinland.',
    tags: ['explorer', 'viking', 'america', 'vinland'],
  },
  {
    id: 'erik-red',
    name: 'Erik the Red',
    birth: 950,
    death: 1003,
    birthPlace: { lat: 59.0, lng: 10.0 }, // Norway
    roles: [],
    affiliations: ['viking-norway'],
    description: 'Founded Norse settlement in Greenland, father of Leif Erikson.',
    tags: ['explorer', 'viking', 'greenland', 'settler'],
  },
  {
    id: 'william-rubruck',
    name: 'William of Rubruck',
    birth: 1220,
    death: 1293,
    birthPlace: { lat: 50.85, lng: 2.88 },
    roles: [],
    affiliations: ['kingdom-france'],
    description: 'Franciscan who traveled to Mongol court, detailed account of Central Asia.',
    tags: ['explorer', 'missionary', 'mongols', 'franciscan'],
  },
  {
    id: 'john-mandeville',
    name: 'John Mandeville',
    birth: 1300,
    death: 1371,
    birthPlace: { lat: 51.88, lng: -0.42 },
    roles: [],
    affiliations: ['kingdom-england'],
    description: 'Purported author of fantastical Travels, actually compiled from other sources.',
    tags: ['writer', 'traveler', 'medieval', 'fantasy'],
  },

  // MORE RULERS
  {
    id: 'canute-great',
    name: 'Canute the Great',
    birth: 995,
    death: 1035,
    birthPlace: { lat: 55.68, lng: 12.57 },
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1016, end: 1035 } },
      { title: 'King of Denmark', powerId: 'viking-denmark', timeRange: { start: 1018, end: 1035 } },
    ],
    affiliations: ['kingdom-england', 'viking-denmark'],
    description: 'North Sea Empire ruler, famous for demonstrating he couldn\'t command the tide.',
    tags: ['king', 'viking', 'england', 'denmark', 'norway'],
  },
  {
    id: 'harold-godwinson',
    name: 'Harold Godwinson',
    birth: 1022,
    death: 1066,
    birthPlace: { lat: 51.0, lng: -1.0 },
    roles: [
      { title: 'King of England', powerId: 'kingdom-england', timeRange: { start: 1066, end: 1066 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Last Anglo-Saxon king, killed at Battle of Hastings by arrow to the eye.',
    tags: ['king', 'anglo-saxon', 'hastings', 'death'],
  },
  {
    id: 'roger-ii-sicily',
    name: 'Roger II of Sicily',
    birth: 1095,
    death: 1154,
    birthPlace: { lat: 38.12, lng: 13.36 },
    roles: [
      { title: 'King', powerId: 'kingdom-sicily', timeRange: { start: 1130, end: 1154 } },
    ],
    affiliations: ['kingdom-sicily'],
    description: 'Created multicultural Norman kingdom, patronized Islamic and Byzantine scholars.',
    tags: ['king', 'norman', 'sicily', 'multicultural'],
  },
  {
    id: 'eleanor-aquitaine',
    name: 'Eleanor of Aquitaine',
    birth: 1122,
    death: 1204,
    birthPlace: { lat: 44.84, lng: -0.58 },
    roles: [
      { title: 'Queen of France', powerId: 'kingdom-france', timeRange: { start: 1137, end: 1152 } },
      { title: 'Queen of England', powerId: 'kingdom-england', timeRange: { start: 1154, end: 1189 } },
    ],
    affiliations: ['kingdom-france', 'kingdom-england'],
    description: 'Most powerful woman in medieval Europe, queen of France then England.',
    tags: ['queen', 'powerful', 'aquitaine', 'crusade'],
  },
  {
    id: 'henry-ii-england',
    name: 'Henry II of England',
    birth: 1133,
    death: 1189,
    birthPlace: { lat: 47.39, lng: 0.69 }, // Le Mans
    roles: [
      { title: 'King', powerId: 'kingdom-england', timeRange: { start: 1154, end: 1189 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Angevin king who clashed with Becket, father of Richard and John.',
    tags: ['king', 'angevin', 'becket', 'law'],
  },
  {
    id: 'thomas-becket',
    name: 'Thomas Becket',
    birth: 1119,
    death: 1170,
    birthPlace: { lat: 51.51, lng: -0.13 },
    roles: [
      { title: 'Archbishop', powerId: 'kingdom-england', timeRange: { start: 1162, end: 1170 } },
    ],
    affiliations: ['kingdom-england'],
    description: 'Archbishop martyred in Canterbury Cathedral after conflict with Henry II.',
    tags: ['archbishop', 'martyr', 'canterbury', 'saint'],
  },
  {
    id: 'frederick-ii-denmark',
    name: 'Valdemar II of Denmark',
    birth: 1170,
    death: 1241,
    birthPlace: { lat: 55.68, lng: 12.57 },
    roles: [
      { title: 'King', powerId: 'viking-denmark', timeRange: { start: 1202, end: 1241 } },
    ],
    affiliations: ['viking-denmark'],
    description: 'Expanded Danish control over Baltic, but captured and held for ransom.',
    tags: ['king', 'denmark', 'baltic', 'crusader'],
  },
  {
    id: 'stefan-dusan',
    name: 'Stefan Dušan',
    birth: 1308,
    death: 1355,
    birthPlace: { lat: 44.02, lng: 21.0 },
    roles: [
      { title: 'Emperor', powerId: 'serbian-empire', timeRange: { start: 1346, end: 1355 } },
    ],
    affiliations: ['serbian-empire'],
    description: 'Most powerful Serbian ruler, crowned emperor, created legal code.',
    tags: ['emperor', 'serbia', 'balkans', 'lawgiver'],
  },
  {
    id: 'casimir-iii',
    name: 'Casimir III the Great',
    birth: 1310,
    death: 1370,
    birthPlace: { lat: 52.23, lng: 21.01 },
    roles: [
      { title: 'King', powerId: 'kingdom-poland', timeRange: { start: 1333, end: 1370 } },
    ],
    affiliations: ['kingdom-poland'],
    description: 'Only Polish king called Great, founded Kraków University, protected Jews.',
    tags: ['king', 'poland', 'great', 'university'],
  },
  {
    id: 'charles-iv-hre',
    name: 'Charles IV',
    birth: 1316,
    death: 1378,
    birthPlace: { lat: 50.08, lng: 14.44 },
    roles: [
      { title: 'Holy Roman Emperor', powerId: 'holy-roman-empire', timeRange: { start: 1355, end: 1378 } },
    ],
    affiliations: ['holy-roman-empire', 'kingdom-bohemia'],
    description: 'Made Prague imperial capital, issued Golden Bull, founded Charles University.',
    tags: ['emperor', 'holy-roman', 'prague', 'golden-bull'],
  },
  {
    id: 'tamerlane',
    name: 'Timur (Tamerlane)',
    birth: 1336,
    death: 1405,
    birthPlace: { lat: 39.06, lng: 66.96 },
    roles: [
      { title: 'Amir', powerId: 'timurid-empire', timeRange: { start: 1370, end: 1405 } },
    ],
    affiliations: ['timurid-empire'],
    description: 'Turco-Mongol conqueror who built empire from India to Turkey, devastating populations.',
    tags: ['conqueror', 'timurid', 'central-asia', 'devastation'],
  },
  {
    id: 'henry-navigator',
    name: 'Henry the Navigator',
    birth: 1394,
    death: 1460,
    birthPlace: { lat: 41.15, lng: -8.61 },
    roles: [],
    affiliations: ['kingdom-portugal'],
    description: 'Portuguese prince who sponsored voyages of exploration along African coast.',
    tags: ['prince', 'exploration', 'portugal', 'navigation'],
  },
  {
    id: 'bayezid-i',
    name: 'Bayezid I (The Thunderbolt)',
    birth: 1354,
    death: 1403,
    birthPlace: { lat: 41.67, lng: 26.55 },
    roles: [
      { title: 'Sultan', powerId: 'ottoman-empire', timeRange: { start: 1389, end: 1402 } },
    ],
    affiliations: ['ottoman-empire'],
    description: 'Rapid Ottoman expansion halted when captured by Timur at Ankara.',
    tags: ['sultan', 'ottoman', 'thunderbolt', 'ankara'],
  },
  {
    id: 'jan-hus',
    name: 'Jan Hus',
    birth: 1369,
    death: 1415,
    birthPlace: { lat: 49.13, lng: 14.35 }, // Husinec
    roles: [],
    affiliations: ['kingdom-bohemia'],
    description: 'Czech reformer burned at Council of Constance, sparked Hussite Wars.',
    tags: ['reformer', 'martyr', 'bohemia', 'hussite'],
  },
  {
    id: 'jan-zizka',
    name: 'Jan Žižka',
    birth: 1360,
    death: 1424,
    birthPlace: { lat: 49.4, lng: 14.5 },
    roles: [],
    affiliations: ['kingdom-bohemia'],
    description: 'Blind Hussite general who never lost a battle, revolutionized warfare.',
    tags: ['general', 'hussite', 'bohemia', 'military'],
  },
  {
    id: 'lorenzo-medici',
    name: 'Lorenzo de\' Medici',
    birth: 1449,
    death: 1492,
    birthPlace: { lat: 43.77, lng: 11.25 },
    roles: [],
    affiliations: [],
    description: 'Lorenzo the Magnificent, patron of Renaissance art, ruled Florence.',
    tags: ['patron', 'renaissance', 'florence', 'medici'],
  },
  {
    id: 'johannes-gutenberg',
    name: 'Johannes Gutenberg',
    birth: 1400,
    death: 1468,
    birthPlace: { lat: 50.0, lng: 8.27 }, // Mainz
    roles: [],
    affiliations: ['holy-roman-empire'],
    description: 'Invented movable type printing press, revolutionizing information distribution.',
    tags: ['inventor', 'printing', 'press', 'germany'],
  },
];

