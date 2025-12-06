// Ancient Civilizations (before 500 CE)
import { Power, Territory } from '@/types';

export const ancientPowers: Power[] = [
  // MESOPOTAMIAN CIVILIZATIONS
  {
    id: 'sumer',
    name: 'Sumerian City-States',
    type: 'nation',
    color: '#D4A574',
    timeRange: { start: -4500, end: -1900 },
    capital: { lat: 31.32, lng: 45.64 }, // Uruk
    description: 'The earliest known civilization, invented writing (cuneiform), the wheel, and established the first cities in Mesopotamia.',
    tags: ['ancient', 'mesopotamia', 'cradle-of-civilization', 'writing'],
  },
  {
    id: 'akkadian-empire',
    name: 'Akkadian Empire',
    type: 'empire',
    color: '#8B4513',
    timeRange: { start: -2334, end: -2154 },
    capital: { lat: 33.1, lng: 44.1 }, // Akkad (approximate)
    description: 'First ancient empire in Mesopotamia, founded by Sargon of Akkad. United Sumerian city-states under one rule.',
    tags: ['ancient', 'mesopotamia', 'empire', 'semitic'],
  },
  {
    id: 'babylon',
    name: 'Babylonian Empire',
    type: 'empire',
    color: '#4169E1',
    timeRange: { start: -1894, end: -539 },
    capital: { lat: 32.5362, lng: 44.4208 },
    description: 'Powerful Mesopotamian empire known for Hammurabi\'s Code, the Hanging Gardens, and astronomical achievements.',
    tags: ['ancient', 'mesopotamia', 'law', 'astronomy'],
  },
  {
    id: 'neo-babylonian',
    name: 'Neo-Babylonian Empire',
    type: 'empire',
    color: '#191970',
    timeRange: { start: -626, end: -539 },
    capital: { lat: 32.5362, lng: 44.4208 },
    description: 'Last native Mesopotamian empire, rebuilt Babylon to its greatest glory under Nebuchadnezzar II.',
    tags: ['ancient', 'mesopotamia', 'chaldean'],
  },
  {
    id: 'assyria',
    name: 'Assyrian Empire',
    type: 'empire',
    color: '#800020',
    timeRange: { start: -2500, end: -609 },
    capital: { lat: 36.3566, lng: 43.1586 }, // Nineveh
    description: 'Powerful ancient empire known for military prowess, extensive library at Nineveh, and administrative innovations.',
    tags: ['ancient', 'mesopotamia', 'military', 'library'],
  },

  // EGYPTIAN CIVILIZATION
  {
    id: 'ancient-egypt',
    name: 'Ancient Egypt',
    type: 'empire',
    color: '#FFD700',
    timeRange: { start: -3150, end: -30 },
    capital: { lat: 29.9792, lng: 31.1342 }, // Giza/Memphis area
    description: 'Ancient civilization along the Nile, known for pyramids, pharaohs, hieroglyphics, and remarkable longevity.',
    tags: ['ancient', 'africa', 'pyramids', 'pharaohs', 'nile'],
  },
  {
    id: 'old-kingdom-egypt',
    name: 'Old Kingdom of Egypt',
    type: 'empire',
    color: '#DAA520',
    timeRange: { start: -2686, end: -2181 },
    capital: { lat: 29.85, lng: 31.25 }, // Memphis
    description: 'The Age of the Pyramids, when the Great Pyramid of Giza was built. Peak of centralized pharaonic power.',
    tags: ['ancient', 'egypt', 'pyramids', 'old-kingdom'],
  },
  {
    id: 'new-kingdom-egypt',
    name: 'New Kingdom of Egypt',
    type: 'empire',
    color: '#B8860B',
    timeRange: { start: -1550, end: -1077 },
    capital: { lat: 25.7, lng: 32.65 }, // Thebes
    description: 'Golden age of ancient Egypt, era of Tutankhamun, Ramesses II, and extensive empire building.',
    tags: ['ancient', 'egypt', 'new-kingdom', 'tutankhamun'],
  },
  {
    id: 'ptolemaic-egypt',
    name: 'Ptolemaic Kingdom',
    type: 'empire',
    color: '#9ACD32',
    timeRange: { start: -305, end: -30 },
    capital: { lat: 31.2001, lng: 29.9187 }, // Alexandria
    description: 'Greek-ruled Egypt after Alexander\'s conquest, known for the Library of Alexandria and Cleopatra.',
    tags: ['ancient', 'egypt', 'hellenistic', 'ptolemaic', 'cleopatra'],
  },

  // GREEK CIVILIZATION
  {
    id: 'minoan',
    name: 'Minoan Civilization',
    type: 'nation',
    color: '#20B2AA',
    timeRange: { start: -3000, end: -1450 },
    capital: { lat: 35.2980, lng: 25.1631 }, // Knossos
    description: 'Bronze Age civilization on Crete, known for the Palace of Knossos and possibly the legend of the Minotaur.',
    tags: ['ancient', 'bronze-age', 'crete', 'aegean'],
  },
  {
    id: 'mycenaean',
    name: 'Mycenaean Greece',
    type: 'nation',
    color: '#CD853F',
    timeRange: { start: -1600, end: -1100 },
    capital: { lat: 37.7306, lng: 22.7564 }, // Mycenae
    description: 'Bronze Age Greek civilization, basis for Homeric epics, known for shaft graves and Linear B script.',
    tags: ['ancient', 'bronze-age', 'greece', 'trojan-war'],
  },
  {
    id: 'athens',
    name: 'Athens',
    type: 'nation',
    color: '#4682B4',
    timeRange: { start: -508, end: -322 },
    capital: { lat: 37.9838, lng: 23.7275 },
    description: 'Greek city-state, birthplace of democracy, philosophy, drama, and classical art.',
    tags: ['ancient', 'greece', 'democracy', 'philosophy', 'city-state'],
  },
  {
    id: 'sparta',
    name: 'Sparta',
    type: 'nation',
    color: '#8B0000',
    timeRange: { start: -900, end: -192 },
    capital: { lat: 37.0755, lng: 22.4303 },
    description: 'Greek city-state known for military prowess and disciplined warrior society.',
    tags: ['ancient', 'greece', 'military', 'city-state'],
  },
  {
    id: 'macedon',
    name: 'Kingdom of Macedon',
    type: 'empire',
    color: '#9932CC',
    timeRange: { start: -808, end: -168 },
    capital: { lat: 40.5169, lng: 22.3528 }, // Pella
    description: 'Greek kingdom that under Philip II and Alexander the Great conquered the largest empire of the ancient world.',
    tags: ['ancient', 'greece', 'alexander', 'conquest'],
  },
  {
    id: 'seleucid',
    name: 'Seleucid Empire',
    type: 'empire',
    color: '#BA55D3',
    timeRange: { start: -312, end: -63 },
    capital: { lat: 36.1871, lng: 36.1589 }, // Antioch
    description: 'Hellenistic empire founded after Alexander\'s death, controlled vast territory from Anatolia to Central Asia.',
    tags: ['ancient', 'hellenistic', 'alexander-successor'],
  },
  {
    id: 'antigonid',
    name: 'Antigonid Dynasty',
    type: 'empire',
    color: '#8A2BE2',
    timeRange: { start: -306, end: -168 },
    capital: { lat: 40.5169, lng: 22.3528 }, // Pella
    description: 'Hellenistic dynasty that ruled Macedonia and parts of Greece after Alexander\'s death.',
    tags: ['ancient', 'hellenistic', 'alexander-successor', 'macedonia'],
  },

  // ROMAN CIVILIZATION
  {
    id: 'roman-kingdom',
    name: 'Roman Kingdom',
    type: 'nation',
    color: '#722F37',
    timeRange: { start: -753, end: -509 },
    capital: { lat: 41.9028, lng: 12.4964 },
    description: 'The legendary founding period of Rome under seven kings, from Romulus to Tarquinius Superbus.',
    tags: ['ancient', 'rome', 'monarchy', 'founding'],
  },
  {
    id: 'roman-republic',
    name: 'Roman Republic',
    type: 'nation',
    color: '#8B0000',
    timeRange: { start: -509, end: -27 },
    capital: { lat: 41.9028, lng: 12.4964 },
    description: 'The Republic phase of Rome, known for the Senate, conquests of the Mediterranean, and civil wars.',
    tags: ['ancient', 'rome', 'republic', 'senate'],
  },
  {
    id: 'roman-empire',
    name: 'Roman Empire',
    type: 'empire',
    color: '#8B0000',
    timeRange: { start: -27, end: 476 },
    capital: { lat: 41.9028, lng: 12.4964 },
    description: 'One of the largest empires in ancient history, originating from the city of Rome.',
    tags: ['ancient', 'rome', 'empire', 'mediterranean'],
  },
  {
    id: 'eastern-roman-empire',
    name: 'Byzantine Empire',
    type: 'empire',
    color: '#4B0082',
    timeRange: { start: 395, end: 1453 },
    capital: { lat: 41.0082, lng: 28.9784 }, // Constantinople
    description: 'Eastern continuation of the Roman Empire, preserved Greek and Roman culture throughout the medieval period.',
    tags: ['ancient', 'medieval', 'rome', 'byzantine', 'orthodox'],
  },

  // PERSIAN CIVILIZATIONS
  {
    id: 'elam',
    name: 'Elamite Kingdom',
    type: 'nation',
    color: '#CD5C5C',
    timeRange: { start: -2700, end: -539 },
    capital: { lat: 32.19, lng: 48.26 }, // Susa
    description: 'Ancient civilization in present-day Iran, rival to Mesopotamian powers.',
    tags: ['ancient', 'iran', 'pre-persian'],
  },
  {
    id: 'median-empire',
    name: 'Median Empire',
    type: 'empire',
    color: '#DC143C',
    timeRange: { start: -678, end: -549 },
    capital: { lat: 34.8, lng: 48.5 }, // Ecbatana
    description: 'Iranian empire that allied with Babylon to destroy Assyria, precursor to the Persian Empire.',
    tags: ['ancient', 'iran', 'medes'],
  },
  {
    id: 'achaemenid-persia',
    name: 'Achaemenid Persian Empire',
    type: 'empire',
    color: '#FFD700',
    timeRange: { start: -550, end: -330 },
    capital: { lat: 29.9352, lng: 52.8917 }, // Persepolis
    description: 'First Persian Empire, largest empire of the ancient world by territory, known for tolerance and administration.',
    tags: ['ancient', 'persia', 'achaemenid', 'cyrus'],
  },
  {
    id: 'parthian-empire',
    name: 'Parthian Empire',
    type: 'empire',
    color: '#B22222',
    timeRange: { start: -247, end: 224 },
    capital: { lat: 35.7, lng: 51.4 }, // Ctesiphon area
    description: 'Iranian empire that rivaled Rome, known for heavy cavalry and defeating Roman legions.',
    tags: ['ancient', 'persia', 'parthia', 'rome-rival'],
  },
  {
    id: 'sassanid-empire',
    name: 'Sassanid Empire',
    type: 'empire',
    color: '#8B0000',
    timeRange: { start: 224, end: 651 },
    capital: { lat: 33.0934, lng: 44.1081 }, // Ctesiphon
    description: 'Last pre-Islamic Persian empire, rival to Byzantine Rome, known for art and Zoroastrianism.',
    tags: ['ancient', 'medieval', 'persia', 'sassanid', 'zoroastrian'],
  },

  // INDIAN CIVILIZATIONS
  {
    id: 'indus-valley',
    name: 'Indus Valley Civilization',
    type: 'nation',
    color: '#8FBC8F',
    timeRange: { start: -3300, end: -1300 },
    capital: { lat: 27.3242, lng: 68.1350 }, // Mohenjo-daro
    description: 'Ancient civilization in South Asia known for urban planning, sanitation, and undeciphered script.',
    tags: ['ancient', 'india', 'bronze-age', 'urban-planning'],
  },
  {
    id: 'maurya-empire',
    name: 'Maurya Empire',
    type: 'empire',
    color: '#FF8C00',
    timeRange: { start: -322, end: -185 },
    capital: { lat: 25.6117, lng: 85.1447 }, // Pataliputra
    description: 'First empire to unite most of the Indian subcontinent, under Chandragupta and Ashoka the Great.',
    tags: ['ancient', 'india', 'ashoka', 'buddhism'],
  },
  {
    id: 'gupta-empire',
    name: 'Gupta Empire',
    type: 'empire',
    color: '#FFA500',
    timeRange: { start: 320, end: 550 },
    capital: { lat: 25.6117, lng: 85.1447 }, // Pataliputra
    description: 'Golden Age of India, marked by achievements in science, mathematics, astronomy, and the arts.',
    tags: ['ancient', 'india', 'golden-age', 'science'],
  },
  {
    id: 'kushan-empire',
    name: 'Kushan Empire',
    type: 'empire',
    color: '#DAA520',
    timeRange: { start: 30, end: 375 },
    capital: { lat: 34.9311, lng: 67.8282 }, // Peshawar area
    description: 'Empire spanning Central and South Asia, key to spreading Buddhism along the Silk Road.',
    tags: ['ancient', 'india', 'central-asia', 'buddhism', 'silk-road'],
  },

  // CHINESE CIVILIZATIONS
  {
    id: 'shang-dynasty',
    name: 'Shang Dynasty',
    type: 'empire',
    color: '#B8860B',
    timeRange: { start: -1600, end: -1046 },
    capital: { lat: 34.75, lng: 114.32 }, // Anyang
    description: 'First historically verified Chinese dynasty, known for oracle bones and bronze work.',
    tags: ['ancient', 'china', 'bronze-age', 'oracle-bones'],
  },
  {
    id: 'zhou-dynasty',
    name: 'Zhou Dynasty',
    type: 'empire',
    color: '#556B2F',
    timeRange: { start: -1046, end: -256 },
    capital: { lat: 34.267, lng: 108.90 }, // Xi'an area
    description: 'Longest-lasting Chinese dynasty, introduced Mandate of Heaven concept, era of Confucius.',
    tags: ['ancient', 'china', 'confucius', 'mandate-of-heaven'],
  },
  {
    id: 'qin-dynasty',
    name: 'Qin Dynasty',
    type: 'empire',
    color: '#2F4F4F',
    timeRange: { start: -221, end: -206 },
    capital: { lat: 34.267, lng: 108.90 }, // Xianyang
    description: 'First unified Chinese empire under Qin Shi Huang, built the Great Wall, standardized writing.',
    tags: ['ancient', 'china', 'unification', 'terracotta-army'],
  },
  {
    id: 'han-dynasty',
    name: 'Han Dynasty',
    type: 'empire',
    color: '#8B4513',
    timeRange: { start: -206, end: 220 },
    capital: { lat: 34.267, lng: 108.90 }, // Chang'an
    description: 'Golden age of Chinese civilization, established Silk Road trade, Confucianism as state ideology.',
    tags: ['ancient', 'china', 'silk-road', 'golden-age'],
  },
  {
    id: 'three-kingdoms-wei',
    name: 'Cao Wei',
    type: 'nation',
    color: '#4169E1',
    timeRange: { start: 220, end: 265 },
    capital: { lat: 34.75, lng: 113.6 }, // Luoyang
    description: 'Northern kingdom during the Three Kingdoms period, founded by Cao Cao\'s son.',
    tags: ['ancient', 'china', 'three-kingdoms'],
  },
  {
    id: 'jin-dynasty-266',
    name: 'Jin Dynasty (266-420)',
    type: 'empire',
    color: '#708090',
    timeRange: { start: 266, end: 420 },
    capital: { lat: 32.06, lng: 118.79 }, // Jiankang (Nanjing)
    description: 'Dynasty that briefly reunified China after Three Kingdoms, later split into Western and Eastern Jin.',
    tags: ['ancient', 'china', 'reunification'],
  },

  // MESOAMERICAN CIVILIZATIONS
  {
    id: 'olmec',
    name: 'Olmec Civilization',
    type: 'nation',
    color: '#228B22',
    timeRange: { start: -1500, end: -400 },
    capital: { lat: 18.15, lng: -94.08 }, // San Lorenzo
    description: 'Mother culture of Mesoamerica, known for colossal stone heads and influencing later civilizations.',
    tags: ['ancient', 'mesoamerica', 'mother-culture'],
  },
  {
    id: 'maya-classic',
    name: 'Maya Civilization (Classic)',
    type: 'nation',
    color: '#006400',
    timeRange: { start: 250, end: 900 },
    capital: { lat: 17.222, lng: -89.623 }, // Tikal
    description: 'Advanced civilization known for mathematics, astronomy, hieroglyphic writing, and pyramid temples.',
    tags: ['ancient', 'mesoamerica', 'maya', 'astronomy', 'writing'],
  },
  {
    id: 'teotihuacan',
    name: 'Teotihuacan',
    type: 'nation',
    color: '#8B4513',
    timeRange: { start: -100, end: 550 },
    capital: { lat: 19.6925, lng: -98.8438 },
    description: 'Largest pre-Columbian city in the Americas, known for the Pyramid of the Sun and Moon.',
    tags: ['ancient', 'mesoamerica', 'pyramids', 'urban'],
  },
  {
    id: 'zapotec',
    name: 'Zapotec Civilization',
    type: 'nation',
    color: '#9ACD32',
    timeRange: { start: -500, end: 900 },
    capital: { lat: 17.0436, lng: -96.7675 }, // Monte Albán
    description: 'Indigenous civilization in Oaxaca, developed one of the earliest writing systems in Mesoamerica.',
    tags: ['ancient', 'mesoamerica', 'zapotec', 'writing'],
  },

  // SOUTH AMERICAN CIVILIZATIONS
  {
    id: 'chavin',
    name: 'Chavín Culture',
    type: 'nation',
    color: '#8B0000',
    timeRange: { start: -900, end: -200 },
    capital: { lat: -9.5944, lng: -77.1778 }, // Chavín de Huántar
    description: 'Early Andean civilization, influential religious and artistic center.',
    tags: ['ancient', 'south-america', 'andes', 'religious'],
  },
  {
    id: 'nazca',
    name: 'Nazca Culture',
    type: 'nation',
    color: '#DEB887',
    timeRange: { start: -100, end: 800 },
    capital: { lat: -14.8318, lng: -74.9406 }, // Cahuachi
    description: 'Known for the mysterious Nazca Lines, large geoglyphs in the desert.',
    tags: ['ancient', 'south-america', 'nazca-lines', 'geoglyphs'],
  },
  {
    id: 'moche',
    name: 'Moche Civilization',
    type: 'nation',
    color: '#CD853F',
    timeRange: { start: 100, end: 700 },
    capital: { lat: -8.1591, lng: -79.0344 }, // Huacas del Sol
    description: 'Northern Peruvian civilization known for pottery, metallurgy, and elaborate tombs.',
    tags: ['ancient', 'south-america', 'andes', 'pottery'],
  },
  {
    id: 'tiwanaku',
    name: 'Tiwanaku Empire',
    type: 'empire',
    color: '#4682B4',
    timeRange: { start: 300, end: 1150 },
    capital: { lat: -16.5546, lng: -68.6735 },
    description: 'Pre-Columbian civilization near Lake Titicaca, precursor to the Inca.',
    tags: ['ancient', 'south-america', 'andes', 'pre-inca'],
  },

  // AFRICAN CIVILIZATIONS
  {
    id: 'kush',
    name: 'Kingdom of Kush',
    type: 'empire',
    color: '#8B4513',
    timeRange: { start: -1070, end: 350 },
    capital: { lat: 18.5417, lng: 31.8211 }, // Meroë
    description: 'Nubian kingdom that at times ruled Egypt, known for pyramids and ironworking.',
    tags: ['ancient', 'africa', 'nubia', 'pyramids'],
  },
  {
    id: 'aksum',
    name: 'Kingdom of Aksum',
    type: 'empire',
    color: '#006400',
    timeRange: { start: 100, end: 940 },
    capital: { lat: 14.1211, lng: 38.7206 },
    description: 'Ethiopian empire, one of the four great powers of the ancient world, early Christian kingdom.',
    tags: ['ancient', 'africa', 'ethiopia', 'christianity', 'trade'],
  },
  {
    id: 'carthage',
    name: 'Carthaginian Empire',
    type: 'empire',
    color: '#800080',
    timeRange: { start: -814, end: -146 },
    capital: { lat: 36.8528, lng: 10.3233 },
    description: 'Phoenician colony that became a major Mediterranean power, rival of Rome in the Punic Wars.',
    tags: ['ancient', 'africa', 'phoenician', 'punic-wars', 'hannibal'],
  },

  // CELTIC AND EUROPEAN
  {
    id: 'celtic-gaul',
    name: 'Celtic Gaul',
    type: 'nation',
    color: '#228B22',
    timeRange: { start: -600, end: -50 },
    capital: { lat: 46.2044, lng: 6.1432 }, // No single capital
    description: 'Celtic tribes of Gaul (modern France), conquered by Julius Caesar in the Gallic Wars.',
    tags: ['ancient', 'europe', 'celtic', 'gaul'],
  },
  {
    id: 'dacia',
    name: 'Kingdom of Dacia',
    type: 'nation',
    color: '#696969',
    timeRange: { start: -82, end: 106 },
    capital: { lat: 45.5967, lng: 23.2042 }, // Sarmizegetusa
    description: 'Dacian kingdom in modern Romania, conquered by Emperor Trajan.',
    tags: ['ancient', 'europe', 'dacia', 'trajan'],
  },

  // SOUTHEAST ASIAN
  {
    id: 'funan',
    name: 'Kingdom of Funan',
    type: 'nation',
    color: '#20B2AA',
    timeRange: { start: 100, end: 550 },
    capital: { lat: 10.55, lng: 104.92 }, // Óc Eo
    description: 'Indianized kingdom in Southeast Asia, precursor to the Khmer Empire.',
    tags: ['ancient', 'southeast-asia', 'indianized', 'maritime'],
  },

  // PHOENICIAN
  {
    id: 'phoenicia',
    name: 'Phoenician City-States',
    type: 'nation',
    color: '#800080',
    timeRange: { start: -1500, end: -539 },
    capital: { lat: 33.8938, lng: 35.5018 }, // Tyre
    description: 'Maritime trading civilization that invented the alphabet and colonized the Mediterranean.',
    tags: ['ancient', 'levant', 'maritime', 'alphabet', 'trade'],
  },

  // JUDEAN/ISRAELITE
  {
    id: 'israel-united',
    name: 'United Kingdom of Israel',
    type: 'nation',
    color: '#0000CD',
    timeRange: { start: -1050, end: -930 },
    capital: { lat: 31.7683, lng: 35.2137 }, // Jerusalem
    description: 'United Israelite kingdom under Saul, David, and Solomon.',
    tags: ['ancient', 'levant', 'israel', 'david', 'solomon'],
  },
  {
    id: 'judah',
    name: 'Kingdom of Judah',
    type: 'nation',
    color: '#4169E1',
    timeRange: { start: -930, end: -586 },
    capital: { lat: 31.7683, lng: 35.2137 }, // Jerusalem
    description: 'Southern Israelite kingdom, destroyed by Babylon.',
    tags: ['ancient', 'levant', 'judah', 'temple'],
  },
  {
    id: 'hasmonean',
    name: 'Hasmonean Kingdom',
    type: 'nation',
    color: '#4682B4',
    timeRange: { start: -140, end: -37 },
    capital: { lat: 31.7683, lng: 35.2137 }, // Jerusalem
    description: 'Jewish kingdom established after the Maccabean Revolt against the Seleucids.',
    tags: ['ancient', 'levant', 'jewish', 'maccabees'],
  },

  // ARABIAN
  {
    id: 'nabataea',
    name: 'Nabataean Kingdom',
    type: 'nation',
    color: '#CD5C5C',
    timeRange: { start: -312, end: 106 },
    capital: { lat: 30.3285, lng: 35.4444 }, // Petra
    description: 'Arab kingdom known for the rock-carved city of Petra and control of incense trade routes.',
    tags: ['ancient', 'arabia', 'petra', 'trade'],
  },
  {
    id: 'saba',
    name: 'Kingdom of Saba (Sheba)',
    type: 'nation',
    color: '#DAA520',
    timeRange: { start: -1200, end: 275 },
    capital: { lat: 15.37, lng: 45.35 }, // Ma'rib
    description: 'Ancient South Arabian kingdom, associated with the biblical Queen of Sheba.',
    tags: ['ancient', 'arabia', 'sheba', 'incense-trade'],
  },

  // CENTRAL ASIAN
  {
    id: 'scythia',
    name: 'Scythian Federation',
    type: 'nation',
    color: '#8B4513',
    timeRange: { start: -900, end: -200 },
    capital: { lat: 47.0, lng: 35.0 }, // Nomadic, approximate center
    description: 'Nomadic Iranian peoples of the Eurasian steppes, renowned horsemen and warriors.',
    tags: ['ancient', 'steppe', 'nomadic', 'iranian'],
  },
  {
    id: 'xiongnu',
    name: 'Xiongnu Empire',
    type: 'empire',
    color: '#696969',
    timeRange: { start: -209, end: 93 },
    capital: { lat: 47.5, lng: 107.0 }, // Nomadic
    description: 'Nomadic confederacy that was a major rival of Han China, possibly ancestors of the Huns.',
    tags: ['ancient', 'steppe', 'nomadic', 'china-rival'],
  },

  // KOREAN
  {
    id: 'gojoseon',
    name: 'Gojoseon',
    type: 'nation',
    color: '#4B0082',
    timeRange: { start: -2333, end: -108 },
    capital: { lat: 39.0, lng: 125.75 }, // Pyongyang area
    description: 'First Korean kingdom according to legend, conquered by Han China.',
    tags: ['ancient', 'korea', 'founding'],
  },
  {
    id: 'goguryeo',
    name: 'Goguryeo',
    type: 'nation',
    color: '#8B0000',
    timeRange: { start: -37, end: 668 },
    capital: { lat: 39.0, lng: 125.75 }, // Pyongyang
    description: 'One of the Three Kingdoms of Korea, militaristic northern kingdom.',
    tags: ['ancient', 'korea', 'three-kingdoms-korea'],
  },

  // JAPANESE
  {
    id: 'yayoi-japan',
    name: 'Yayoi Period Japan',
    type: 'nation',
    color: '#DC143C',
    timeRange: { start: -300, end: 300 },
    capital: { lat: 34.69, lng: 135.50 }, // No single capital
    description: 'Period of Japanese history marked by wet-rice cultivation and bronze/iron technology.',
    tags: ['ancient', 'japan', 'yayoi', 'rice-cultivation'],
  },
  {
    id: 'yamato',
    name: 'Yamato Kingdom',
    type: 'nation',
    color: '#DC143C',
    timeRange: { start: 250, end: 710 },
    capital: { lat: 34.69, lng: 135.84 }, // Nara area
    description: 'Early Japanese state that unified Japan, origin of the imperial line.',
    tags: ['ancient', 'japan', 'imperial', 'kofun'],
  },
];

export const ancientTerritories: Territory[] = [
  // Ancient Egypt
  {
    id: 'egypt-nile',
    name: 'Nile Valley',
    powerId: 'ancient-egypt',
    timeRange: { start: -3150, end: -30 },
    type: 'core',
    coordinates: [
      { lat: 31.5, lng: 25.0 }, { lat: 31.5, lng: 35.0 }, { lat: 22.0, lng: 35.0 },
      { lat: 22.0, lng: 25.0 }, { lat: 31.5, lng: 25.0 },
    ],
  },
  // Persian Empire
  {
    id: 'persia-core',
    name: 'Persian Heartland',
    powerId: 'achaemenid-persia',
    timeRange: { start: -550, end: -330 },
    type: 'core',
    coordinates: [
      { lat: 40.0, lng: 44.0 }, { lat: 40.0, lng: 63.0 }, { lat: 25.0, lng: 63.0 },
      { lat: 25.0, lng: 44.0 }, { lat: 40.0, lng: 44.0 },
    ],
  },
  // Han Dynasty
  {
    id: 'han-china',
    name: 'Han China',
    powerId: 'han-dynasty',
    timeRange: { start: -206, end: 220 },
    type: 'core',
    coordinates: [
      { lat: 42.0, lng: 98.0 }, { lat: 42.0, lng: 122.0 }, { lat: 22.0, lng: 122.0 },
      { lat: 22.0, lng: 98.0 }, { lat: 42.0, lng: 98.0 },
    ],
  },
  // Maurya Empire
  {
    id: 'maurya-india',
    name: 'Mauryan India',
    powerId: 'maurya-empire',
    timeRange: { start: -322, end: -185 },
    type: 'core',
    coordinates: [
      { lat: 35.0, lng: 68.0 }, { lat: 35.0, lng: 90.0 }, { lat: 10.0, lng: 90.0 },
      { lat: 10.0, lng: 68.0 }, { lat: 35.0, lng: 68.0 },
    ],
  },
  // Roman Republic/Empire - Italia
  {
    id: 'roman-italia',
    name: 'Italia',
    powerId: 'roman-republic',
    timeRange: { start: -509, end: -27 },
    type: 'core',
    coordinates: [
      { lat: 46.5, lng: 6.6 }, { lat: 47.0, lng: 13.8 }, { lat: 45.5, lng: 13.7 },
      { lat: 42.0, lng: 18.5 }, { lat: 38.0, lng: 15.6 }, { lat: 37.5, lng: 12.5 },
      { lat: 39.0, lng: 8.2 }, { lat: 43.8, lng: 7.5 }, { lat: 46.5, lng: 6.6 },
    ],
  },
];

