// Ancient Historical Figures (before 500 CE)
import { Person } from "@/types";

export const ancientPeople: Person[] = [
  // EGYPTIAN FIGURES
  {
    id: "khufu",
    name: "Khufu (Cheops)",
    birth: -2589,
    death: -2566,
    birthPlace: { lat: 29.9792, lng: 31.1342 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "old-kingdom-egypt",
        timeRange: { start: -2589, end: -2566 },
      },
    ],
    affiliations: ["old-kingdom-egypt"],
    description:
      "Pharaoh who commissioned the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World.",
    tags: ["pharaoh", "pyramid", "ancient-egypt"],
  },
  {
    id: "hatshepsut",
    name: "Hatshepsut",
    birth: -1507,
    death: -1458,
    birthPlace: { lat: 25.7, lng: 32.65 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "new-kingdom-egypt",
        timeRange: { start: -1479, end: -1458 },
      },
    ],
    affiliations: ["new-kingdom-egypt"],
    description:
      "One of the most successful pharaohs, notable female ruler who expanded trade and built monumental architecture.",
    tags: ["pharaoh", "female-ruler", "ancient-egypt", "trade"],
  },
  {
    id: "akhenaten",
    name: "Akhenaten",
    birth: -1380,
    death: -1334,
    birthPlace: { lat: 25.7, lng: 32.65 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "new-kingdom-egypt",
        timeRange: { start: -1353, end: -1336 },
      },
    ],
    affiliations: ["new-kingdom-egypt"],
    description:
      "Revolutionary pharaoh who introduced monotheistic worship of Aten, father of Tutankhamun.",
    tags: ["pharaoh", "religious-reform", "ancient-egypt", "monotheism"],
  },
  {
    id: "tutankhamun",
    name: "Tutankhamun",
    birth: -1341,
    death: -1323,
    birthPlace: { lat: 27.62, lng: 30.9 }, // Amarna
    roles: [
      {
        title: "Pharaoh",
        powerId: "new-kingdom-egypt",
        timeRange: { start: -1332, end: -1323 },
      },
    ],
    affiliations: ["new-kingdom-egypt"],
    description:
      'The "Boy King" whose intact tomb discovery in 1922 revealed treasures of ancient Egypt.',
    tags: ["pharaoh", "ancient-egypt", "tomb"],
  },
  {
    id: "ramesses-ii",
    name: "Ramesses II (The Great)",
    birth: -1303,
    death: -1213,
    birthPlace: { lat: 30.05, lng: 31.23 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "new-kingdom-egypt",
        timeRange: { start: -1279, end: -1213 },
      },
    ],
    affiliations: ["new-kingdom-egypt"],
    description:
      "Greatest pharaoh of the New Kingdom, built Abu Simbel, signed first peace treaty with Hittites.",
    tags: ["pharaoh", "ancient-egypt", "military", "builder"],
  },
  {
    id: "cleopatra-vii",
    name: "Cleopatra VII",
    birth: -69,
    death: -30,
    birthPlace: { lat: 31.2001, lng: 29.9187 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "ptolemaic-egypt",
        timeRange: { start: -51, end: -30 },
      },
    ],
    affiliations: ["ptolemaic-egypt", "roman-republic"],
    description:
      "Last active ruler of Ptolemaic Egypt, known for relationships with Julius Caesar and Mark Antony.",
    tags: ["pharaoh", "female-ruler", "hellenistic", "rome"],
  },

  // MESOPOTAMIAN FIGURES
  {
    id: "sargon-akkad",
    name: "Sargon of Akkad",
    birth: -2334,
    death: -2279,
    birthPlace: { lat: 33.1, lng: 44.1 },
    roles: [
      {
        title: "King",
        powerId: "akkadian-empire",
        timeRange: { start: -2334, end: -2279 },
      },
    ],
    affiliations: ["akkadian-empire"],
    description:
      "Founded the first empire in recorded history, conquering all of Mesopotamia.",
    tags: ["conqueror", "mesopotamia", "empire-founder"],
  },
  {
    id: "hammurabi",
    name: "Hammurabi",
    birth: -1810,
    death: -1750,
    birthPlace: { lat: 32.5362, lng: 44.4208 },
    roles: [
      {
        title: "King",
        powerId: "babylon",
        timeRange: { start: -1792, end: -1750 },
      },
    ],
    affiliations: ["babylon"],
    description:
      "Babylonian king famous for the Code of Hammurabi, one of the oldest written legal codes.",
    tags: ["lawgiver", "mesopotamia", "babylon"],
  },
  {
    id: "nebuchadnezzar-ii",
    name: "Nebuchadnezzar II",
    birth: -634,
    death: -562,
    birthPlace: { lat: 32.5362, lng: 44.4208 },
    roles: [
      {
        title: "King",
        powerId: "neo-babylonian",
        timeRange: { start: -605, end: -562 },
      },
    ],
    affiliations: ["neo-babylonian"],
    description:
      "Greatest king of the Neo-Babylonian Empire, destroyed Jerusalem, built the Hanging Gardens.",
    tags: ["conqueror", "mesopotamia", "babylon", "wonders"],
  },
  {
    id: "ashurbanipal",
    name: "Ashurbanipal",
    birth: -685,
    death: -627,
    birthPlace: { lat: 36.3566, lng: 43.1586 },
    roles: [
      {
        title: "King",
        powerId: "assyria",
        timeRange: { start: -668, end: -627 },
      },
    ],
    affiliations: ["assyria"],
    description:
      "Last great Assyrian king, created the famous Library of Nineveh containing thousands of cuneiform tablets.",
    tags: ["scholar", "mesopotamia", "library", "assyria"],
  },

  // PERSIAN FIGURES
  {
    id: "cyrus-great",
    name: "Cyrus the Great",
    birth: -600,
    death: -530,
    birthPlace: { lat: 30.05, lng: 52.89 }, // Anshan
    roles: [
      {
        title: "King of Kings",
        powerId: "achaemenid-persia",
        timeRange: { start: -559, end: -530 },
      },
    ],
    affiliations: ["achaemenid-persia"],
    description:
      "Founder of the Achaemenid Persian Empire, known for tolerance and the Cyrus Cylinder human rights declaration.",
    tags: ["founder", "persia", "tolerance", "human-rights"],
  },
  {
    id: "darius-i",
    name: "Darius I (The Great)",
    birth: -550,
    death: -486,
    birthPlace: { lat: 29.9352, lng: 52.8917 },
    roles: [
      {
        title: "King of Kings",
        powerId: "achaemenid-persia",
        timeRange: { start: -522, end: -486 },
      },
    ],
    affiliations: ["achaemenid-persia"],
    description:
      "Organized the Persian Empire into satrapies, built the Royal Road, constructed Persepolis.",
    tags: ["administrator", "persia", "builder"],
  },
  {
    id: "xerxes-i",
    name: "Xerxes I",
    birth: -518,
    death: -465,
    birthPlace: { lat: 29.9352, lng: 52.8917 },
    roles: [
      {
        title: "King of Kings",
        powerId: "achaemenid-persia",
        timeRange: { start: -486, end: -465 },
      },
    ],
    affiliations: ["achaemenid-persia"],
    description:
      "Persian king who invaded Greece, fought at Thermopylae and Salamis.",
    tags: ["military", "persia", "persian-wars"],
  },

  // GREEK FIGURES
  {
    id: "solon",
    name: "Solon",
    birth: -638,
    death: -558,
    birthPlace: { lat: 37.9838, lng: 23.7275 },
    roles: [
      {
        title: "Archon",
        powerId: "athens",
        timeRange: { start: -594, end: -593 },
      },
    ],
    affiliations: ["athens"],
    description:
      "Athenian statesman and lawgiver, laid foundations for Athenian democracy.",
    tags: ["lawgiver", "democracy", "athens", "reforms"],
  },
  {
    id: "pericles",
    name: "Pericles",
    birth: -495,
    death: -429,
    birthPlace: { lat: 37.9838, lng: 23.7275 },
    roles: [
      {
        title: "Strategos",
        powerId: "athens",
        timeRange: { start: -461, end: -429 },
      },
    ],
    affiliations: ["athens"],
    description:
      "Athenian statesman during the Golden Age, built the Parthenon, promoted arts and democracy.",
    tags: ["statesman", "democracy", "athens", "golden-age"],
  },
  {
    id: "leonidas-i",
    name: "Leonidas I",
    birth: -540,
    death: -480,
    birthPlace: { lat: 37.0755, lng: 22.4303 },
    roles: [
      {
        title: "King",
        powerId: "sparta",
        timeRange: { start: -489, end: -480 },
      },
    ],
    affiliations: ["sparta"],
    description:
      "Spartan king who led 300 Spartans at the Battle of Thermopylae against Persia.",
    tags: ["military", "sparta", "thermopylae", "hero"],
  },
  {
    id: "socrates",
    name: "Socrates",
    birth: -470,
    death: -399,
    birthPlace: { lat: 37.9838, lng: 23.7275 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Father of Western philosophy, developed the Socratic method, teacher of Plato.",
    tags: ["philosopher", "athens", "socratic-method"],
  },
  {
    id: "plato",
    name: "Plato",
    birth: -428,
    death: -348,
    birthPlace: { lat: 37.9838, lng: 23.7275 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Philosopher who founded the Academy, wrote dialogues on justice, beauty, and equality.",
    tags: ["philosopher", "athens", "academy"],
  },
  {
    id: "aristotle",
    name: "Aristotle",
    birth: -384,
    death: -322,
    birthPlace: { lat: 40.47, lng: 23.52 }, // Stagira
    roles: [],
    affiliations: ["athens", "macedon"],
    description:
      "Philosopher who tutored Alexander the Great, founded the Lyceum, wrote on logic, physics, biology.",
    tags: ["philosopher", "science", "alexander-tutor"],
  },
  {
    id: "philip-ii-macedon",
    name: "Philip II of Macedon",
    birth: -382,
    death: -336,
    birthPlace: { lat: 40.5169, lng: 22.3528 },
    roles: [
      {
        title: "King",
        powerId: "macedon",
        timeRange: { start: -359, end: -336 },
      },
    ],
    affiliations: ["macedon"],
    description:
      "Transformed Macedonia into a major power, father of Alexander the Great.",
    tags: ["military", "macedon", "reformer"],
  },
  {
    id: "alexander-great",
    name: "Alexander the Great",
    birth: -356,
    death: -323,
    birthPlace: { lat: 40.5169, lng: 22.3528 },
    roles: [
      {
        title: "King",
        powerId: "macedon",
        timeRange: { start: -336, end: -323 },
      },
    ],
    affiliations: ["macedon"],
    description:
      "Conquered the largest empire of the ancient world from Greece to India by age 30.",
    tags: ["conqueror", "macedon", "hellenistic", "military-genius"],
  },
  {
    id: "archimedes",
    name: "Archimedes",
    birth: -287,
    death: -212,
    birthPlace: { lat: 37.0755, lng: 15.2866 }, // Syracuse
    roles: [],
    affiliations: [],
    description:
      "Greatest mathematician and inventor of antiquity, discovered principles of buoyancy and the lever.",
    tags: ["mathematician", "inventor", "scientist", "syracuse"],
  },
  {
    id: "euclid",
    name: "Euclid",
    birth: -325,
    death: -265,
    birthPlace: { lat: 31.2001, lng: 29.9187 }, // Alexandria
    roles: [],
    affiliations: ["ptolemaic-egypt"],
    description:
      'Father of geometry, wrote "Elements" which remained the main textbook for mathematics for 2000 years.',
    tags: ["mathematician", "geometry", "alexandria"],
  },
  {
    id: "hippocrates",
    name: "Hippocrates",
    birth: -460,
    death: -370,
    birthPlace: { lat: 36.8486, lng: 27.1014 }, // Kos
    roles: [],
    affiliations: ["athens"],
    description:
      "Father of Western medicine, established medicine as a profession distinct from religion.",
    tags: ["physician", "medicine", "hippocratic-oath"],
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    birth: -570,
    death: -495,
    birthPlace: { lat: 37.75, lng: 26.98 }, // Samos
    roles: [],
    affiliations: [],
    description:
      "Mathematician and philosopher, famous for the Pythagorean theorem and founding a philosophical school.",
    tags: ["mathematician", "philosopher", "pythagorean"],
  },
  {
    id: "herodotus",
    name: "Herodotus",
    birth: -484,
    death: -425,
    birthPlace: { lat: 37.0379, lng: 27.4241 }, // Halicarnassus
    roles: [],
    affiliations: ["athens"],
    description:
      'Father of History, wrote "Histories" documenting the Greco-Persian Wars.',
    tags: ["historian", "writer", "persian-wars"],
  },
  {
    id: "thucydides",
    name: "Thucydides",
    birth: -460,
    death: -400,
    birthPlace: { lat: 37.9838, lng: 23.7275 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Historian who wrote the History of the Peloponnesian War, considered the father of scientific history.",
    tags: ["historian", "writer", "peloponnesian-war"],
  },

  // ROMAN FIGURES
  {
    id: "romulus",
    name: "Romulus",
    birth: -771,
    death: -716,
    birthPlace: { lat: 41.89, lng: 12.49 }, // Alba Longa
    roles: [
      {
        title: "King",
        powerId: "roman-kingdom",
        timeRange: { start: -753, end: -716 },
      },
    ],
    affiliations: ["roman-kingdom"],
    description:
      "Legendary founder and first king of Rome, raised by a she-wolf with his twin Remus.",
    tags: ["founder", "rome", "legendary", "king"],
  },
  {
    id: "tarquinius-superbus",
    name: "Tarquinius Superbus",
    birth: -535,
    death: -495,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "King",
        powerId: "roman-kingdom",
        timeRange: { start: -535, end: -509 },
      },
    ],
    affiliations: ["roman-kingdom"],
    description:
      "Last king of Rome, whose tyranny led to the founding of the Roman Republic.",
    tags: ["tyrant", "rome", "king", "overthrown"],
  },
  {
    id: "cincinnatus",
    name: "Cincinnatus",
    birth: -519,
    death: -430,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Dictator",
        powerId: "roman-republic",
        timeRange: { start: -458, end: -458 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman hero who left his farm to save Rome as dictator, then immediately returned power to the Senate.",
    tags: ["virtue", "rome", "dictator", "republic"],
  },
  {
    id: "scipio-africanus",
    name: "Scipio Africanus",
    birth: -236,
    death: -183,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Consul",
        powerId: "roman-republic",
        timeRange: { start: -205, end: -204 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman general who defeated Hannibal at the Battle of Zama, ending the Second Punic War.",
    tags: ["military", "rome", "punic-wars", "general"],
  },
  {
    id: "hannibal-barca",
    name: "Hannibal Barca",
    birth: -247,
    death: -183,
    birthPlace: { lat: 36.8528, lng: 10.3233 },
    roles: [
      {
        title: "General",
        powerId: "carthage",
        timeRange: { start: -221, end: -183 },
      },
    ],
    affiliations: ["carthage"],
    description:
      "Carthaginian general who crossed the Alps with elephants, one of history's greatest military commanders.",
    tags: ["military", "carthage", "punic-wars", "genius"],
  },
  {
    id: "spartacus",
    name: "Spartacus",
    birth: -111,
    death: -71,
    birthPlace: { lat: 42.15, lng: 24.75 }, // Thrace
    roles: [],
    affiliations: [],
    description:
      "Thracian gladiator who led a major slave uprising against the Roman Republic.",
    tags: ["gladiator", "slave-revolt", "rome"],
  },
  {
    id: "marius",
    name: "Gaius Marius",
    birth: -157,
    death: -86,
    birthPlace: { lat: 41.67, lng: 13.53 }, // Arpinum
    roles: [
      {
        title: "Consul",
        powerId: "roman-republic",
        timeRange: { start: -107, end: -100 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman general who reformed the military, elected consul seven times, rival of Sulla.",
    tags: ["military", "rome", "reformer", "consul"],
  },
  {
    id: "sulla",
    name: "Lucius Cornelius Sulla",
    birth: -138,
    death: -78,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Dictator",
        powerId: "roman-republic",
        timeRange: { start: -82, end: -79 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman general and dictator who marched on Rome, instituted proscriptions, then retired.",
    tags: ["dictator", "rome", "civil-war", "proscriptions"],
  },
  {
    id: "pompey",
    name: "Pompey the Great",
    birth: -106,
    death: -48,
    birthPlace: { lat: 42.46, lng: 14.21 }, // Picenum
    roles: [
      {
        title: "Consul",
        powerId: "roman-republic",
        timeRange: { start: -70, end: -70 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman military and political leader, member of First Triumvirate with Caesar and Crassus.",
    tags: ["military", "rome", "triumvirate", "consul"],
  },
  {
    id: "julius-caesar",
    name: "Julius Caesar",
    birth: -100,
    death: -44,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Dictator",
        powerId: "roman-republic",
        timeRange: { start: -49, end: -44 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Roman military general and statesman who played a critical role in transforming the Roman Republic into the Roman Empire.",
    tags: ["military", "politics", "assassination", "dictator"],
  },
  {
    id: "cicero",
    name: "Marcus Tullius Cicero",
    birth: -106,
    death: -43,
    birthPlace: { lat: 41.67, lng: 13.53 }, // Arpinum
    roles: [
      {
        title: "Consul",
        powerId: "roman-republic",
        timeRange: { start: -63, end: -63 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Greatest Roman orator and statesman, defender of the Republic, executed by Mark Antony.",
    tags: ["orator", "philosopher", "rome", "consul"],
  },
  {
    id: "cato-younger",
    name: "Cato the Younger",
    birth: -95,
    death: -46,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [],
    affiliations: ["roman-republic"],
    description:
      "Roman senator and stoic, staunch defender of the Republic against Caesar, committed suicide rather than submit.",
    tags: ["stoic", "republic", "rome", "senator"],
  },
  {
    id: "augustus",
    name: "Augustus (Octavian)",
    birth: -63,
    death: 14,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: -27, end: 14 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "First Roman Emperor, ended the Republic, established the Pax Romana, transformed Rome.",
    tags: ["emperor", "rome", "founder", "pax-romana"],
  },
  {
    id: "mark-antony",
    name: "Mark Antony",
    birth: -83,
    death: -30,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Triumvir",
        powerId: "roman-republic",
        timeRange: { start: -43, end: -33 },
      },
    ],
    affiliations: ["roman-republic", "ptolemaic-egypt"],
    description:
      "Roman general and statesman, ally of Caesar, lover of Cleopatra, defeated by Octavian.",
    tags: ["military", "rome", "triumvirate", "cleopatra"],
  },
  {
    id: "tiberius",
    name: "Tiberius",
    birth: -42,
    death: 37,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 14, end: 37 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Second Roman Emperor, competent administrator but reclusive and unpopular.",
    tags: ["emperor", "rome", "julio-claudian"],
  },
  {
    id: "caligula",
    name: "Caligula",
    birth: 12,
    death: 41,
    birthPlace: { lat: 41.43, lng: 12.83 }, // Antium
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 37, end: 41 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Third Roman Emperor, remembered for cruelty, extravagance, and erratic behavior, assassinated.",
    tags: ["emperor", "rome", "tyrant", "assassination"],
  },
  {
    id: "claudius",
    name: "Claudius",
    birth: -10,
    death: 54,
    birthPlace: { lat: 46.95, lng: 7.45 }, // Lugdunum
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 41, end: 54 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Fourth Roman Emperor, conquered Britain, improved administration, possibly poisoned.",
    tags: ["emperor", "rome", "conquest", "britannia"],
  },
  {
    id: "nero",
    name: "Nero",
    birth: 37,
    death: 68,
    birthPlace: { lat: 41.43, lng: 12.83 }, // Antium
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 54, end: 68 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Fifth Roman Emperor, infamous for persecution of Christians and supposedly fiddling while Rome burned.",
    tags: ["emperor", "rome", "tyrant", "great-fire"],
  },
  {
    id: "vespasian",
    name: "Vespasian",
    birth: 9,
    death: 79,
    birthPlace: { lat: 42.46, lng: 12.1 }, // Falacrine
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 69, end: 79 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Founded the Flavian dynasty, built the Colosseum, stabilized the empire after civil war.",
    tags: ["emperor", "rome", "flavian", "colosseum"],
  },
  {
    id: "trajan",
    name: "Trajan",
    birth: 53,
    death: 117,
    birthPlace: { lat: 37.39, lng: -5.99 }, // Italica, Spain
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 98, end: 117 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Emperor who expanded Rome to its greatest extent, first emperor born outside Italy.",
    tags: ["emperor", "rome", "expansion", "optimus-princeps"],
  },
  {
    id: "hadrian",
    name: "Hadrian",
    birth: 76,
    death: 138,
    birthPlace: { lat: 37.39, lng: -5.99 }, // Italica, Spain
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 117, end: 138 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Emperor who built Hadrian's Wall, traveled extensively, consolidated rather than expanded.",
    tags: ["emperor", "rome", "builder", "consolidation"],
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    birth: 121,
    death: 180,
    birthPlace: { lat: 41.9028, lng: 12.4964 },
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 161, end: 180 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      'Philosopher-Emperor, last of the Five Good Emperors, wrote "Meditations" on Stoic philosophy.',
    tags: ["emperor", "rome", "philosopher", "stoic"],
  },
  {
    id: "commodus",
    name: "Commodus",
    birth: 161,
    death: 192,
    birthPlace: { lat: 44.06, lng: 12.57 }, // Lanuvium
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 180, end: 192 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Emperor who ended the Pax Romana, fought as a gladiator, assassinated, beginning Rome's decline.",
    tags: ["emperor", "rome", "gladiator", "assassination"],
  },
  {
    id: "diocletian",
    name: "Diocletian",
    birth: 244,
    death: 311,
    birthPlace: { lat: 43.51, lng: 16.44 }, // Dalmatia
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 284, end: 305 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Reformed the empire with the Tetrarchy, persecuted Christians, voluntarily abdicated.",
    tags: ["emperor", "rome", "reformer", "tetrarchy"],
  },
  {
    id: "constantine-great",
    name: "Constantine the Great",
    birth: 272,
    death: 337,
    birthPlace: { lat: 43.08, lng: 21.9 }, // Naissus
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 306, end: 337 },
      },
    ],
    affiliations: ["roman-empire", "eastern-roman-empire"],
    description:
      "First Christian emperor, founded Constantinople, convened Council of Nicaea.",
    tags: ["emperor", "rome", "christianity", "constantinople"],
  },
  {
    id: "julian",
    name: "Julian the Apostate",
    birth: 331,
    death: 363,
    birthPlace: { lat: 41.0082, lng: 28.9784 },
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 361, end: 363 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Last pagan Roman emperor, attempted to restore traditional Roman religion.",
    tags: ["emperor", "rome", "pagan", "philosopher"],
  },
  {
    id: "theodosius-i",
    name: "Theodosius I",
    birth: 347,
    death: 395,
    birthPlace: { lat: 41.65, lng: -5.69 }, // Cauca, Spain
    roles: [
      {
        title: "Emperor",
        powerId: "roman-empire",
        timeRange: { start: 379, end: 395 },
      },
    ],
    affiliations: ["roman-empire"],
    description:
      "Last emperor to rule both East and West, made Christianity the official state religion.",
    tags: ["emperor", "rome", "christianity", "division"],
  },

  // INDIAN FIGURES
  {
    id: "chandragupta-maurya",
    name: "Chandragupta Maurya",
    birth: -340,
    death: -298,
    birthPlace: { lat: 25.6117, lng: 85.1447 },
    roles: [
      {
        title: "Emperor",
        powerId: "maurya-empire",
        timeRange: { start: -322, end: -298 },
      },
    ],
    affiliations: ["maurya-empire"],
    description:
      "Founder of the Maurya Empire, united most of India, advised by Chanakya.",
    tags: ["founder", "india", "unification"],
  },
  {
    id: "ashoka",
    name: "Ashoka the Great",
    birth: -304,
    death: -232,
    birthPlace: { lat: 25.6117, lng: 85.1447 },
    roles: [
      {
        title: "Emperor",
        powerId: "maurya-empire",
        timeRange: { start: -268, end: -232 },
      },
    ],
    affiliations: ["maurya-empire"],
    description:
      "Mauryan emperor who converted to Buddhism after the bloody Kalinga War, spread dharma throughout Asia.",
    tags: ["emperor", "india", "buddhism", "peace"],
  },
  {
    id: "chanakya",
    name: "Chanakya (Kautilya)",
    birth: -375,
    death: -283,
    birthPlace: { lat: 25.32, lng: 83.01 }, // Taxila
    roles: [],
    affiliations: ["maurya-empire"],
    description:
      "Ancient Indian philosopher and political strategist, author of Arthashastra, advisor to Chandragupta.",
    tags: ["philosopher", "strategist", "india", "advisor"],
  },

  // CHINESE FIGURES
  {
    id: "confucius",
    name: "Confucius",
    birth: -551,
    death: -479,
    birthPlace: { lat: 35.6, lng: 117.02 }, // Qufu
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      "Chinese philosopher whose teachings on ethics, government, and morality shaped East Asian civilization.",
    tags: ["philosopher", "china", "confucianism", "ethics"],
  },
  {
    id: "laozi",
    name: "Laozi",
    birth: -601,
    death: -531,
    birthPlace: { lat: 33.86, lng: 115.77 }, // Henan
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      "Legendary founder of Taoism, reputed author of the Tao Te Ching.",
    tags: ["philosopher", "china", "taoism"],
  },
  {
    id: "sun-tzu",
    name: "Sun Tzu",
    birth: -544,
    death: -496,
    birthPlace: { lat: 36.65, lng: 117.0 }, // Qi state
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      'Military strategist and author of "The Art of War", one of the most influential military treatises.',
    tags: ["strategist", "military", "china", "author"],
  },
  {
    id: "qin-shi-huang",
    name: "Qin Shi Huang",
    birth: -259,
    death: -210,
    birthPlace: { lat: 34.27, lng: 108.9 },
    roles: [
      {
        title: "Emperor",
        powerId: "qin-dynasty",
        timeRange: { start: -221, end: -210 },
      },
    ],
    affiliations: ["qin-dynasty"],
    description:
      "First Emperor of unified China, built the Great Wall, buried with the Terracotta Army.",
    tags: ["emperor", "china", "unification", "great-wall"],
  },
  {
    id: "liu-bang",
    name: "Emperor Gaozu of Han (Liu Bang)",
    birth: -256,
    death: -195,
    birthPlace: { lat: 34.18, lng: 116.96 }, // Pei County
    roles: [
      {
        title: "Emperor",
        powerId: "han-dynasty",
        timeRange: { start: -202, end: -195 },
      },
    ],
    affiliations: ["han-dynasty"],
    description: "Founder of the Han Dynasty, rose from peasant to emperor.",
    tags: ["emperor", "china", "founder", "han"],
  },
  {
    id: "wu-han",
    name: "Emperor Wu of Han",
    birth: -156,
    death: -87,
    birthPlace: { lat: 34.27, lng: 108.9 }, // Chang'an
    roles: [
      {
        title: "Emperor",
        powerId: "han-dynasty",
        timeRange: { start: -141, end: -87 },
      },
    ],
    affiliations: ["han-dynasty"],
    description:
      "Expanded Han China to its greatest extent, established Confucianism as state ideology, opened Silk Road.",
    tags: ["emperor", "china", "expansion", "silk-road"],
  },

  // BIBLICAL/RELIGIOUS FIGURES
  {
    id: "moses",
    name: "Moses",
    birth: -1391,
    death: -1271,
    birthPlace: { lat: 30.05, lng: 31.23 }, // Egypt
    roles: [],
    affiliations: ["ancient-egypt"],
    description:
      "Prophet who led the Israelites out of Egypt, received the Ten Commandments on Mount Sinai.",
    tags: ["prophet", "exodus", "judaism", "ten-commandments"],
  },
  {
    id: "king-david",
    name: "King David",
    birth: -1040,
    death: -970,
    birthPlace: { lat: 31.7, lng: 35.1 }, // Bethlehem
    roles: [
      {
        title: "King",
        powerId: "israel-united",
        timeRange: { start: -1010, end: -970 },
      },
    ],
    affiliations: ["israel-united"],
    description:
      "Second king of Israel, united the tribes, conquered Jerusalem, ancestor of Jesus in Christian tradition.",
    tags: ["king", "israel", "jerusalem", "biblical"],
  },
  {
    id: "king-solomon",
    name: "King Solomon",
    birth: -990,
    death: -931,
    birthPlace: { lat: 31.7683, lng: 35.2137 },
    roles: [
      {
        title: "King",
        powerId: "israel-united",
        timeRange: { start: -970, end: -931 },
      },
    ],
    affiliations: ["israel-united"],
    description:
      "King of Israel known for wisdom, built the First Temple in Jerusalem.",
    tags: ["king", "israel", "wisdom", "temple", "biblical"],
  },
  {
    id: "buddha",
    name: "Siddhartha Gautama (Buddha)",
    birth: -563,
    death: -483,
    birthPlace: { lat: 27.47, lng: 83.28 }, // Lumbini
    roles: [],
    affiliations: [],
    description:
      "Founder of Buddhism, achieved enlightenment and taught the Middle Way to end suffering.",
    tags: ["founder", "buddhism", "enlightenment", "india"],
  },
  {
    id: "jesus-christ",
    name: "Jesus of Nazareth",
    birth: -4,
    death: 30,
    birthPlace: { lat: 31.7, lng: 35.2 }, // Bethlehem
    roles: [],
    affiliations: [],
    description:
      "Central figure of Christianity, believed by Christians to be the Son of God and Messiah.",
    tags: ["founder", "christianity", "messiah", "judea"],
  },
  {
    id: "paul-apostle",
    name: "Paul the Apostle",
    birth: 5,
    death: 64,
    birthPlace: { lat: 36.85, lng: 34.87 }, // Tarsus
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Apostle who spread Christianity throughout the Roman Empire, wrote many New Testament letters.",
    tags: ["apostle", "christianity", "missionary", "letters"],
  },
  {
    id: "zoroaster",
    name: "Zoroaster (Zarathustra)",
    birth: -1500,
    death: -1000,
    birthPlace: { lat: 36.0, lng: 53.0 }, // Persia (uncertain)
    roles: [],
    affiliations: [],
    description:
      "Founder of Zoroastrianism, one of the world's oldest monotheistic religions.",
    tags: ["founder", "zoroastrianism", "persia", "prophet"],
  },

  // CARTHAGINIAN
  {
    id: "hamilcar-barca",
    name: "Hamilcar Barca",
    birth: -275,
    death: -228,
    birthPlace: { lat: 36.8528, lng: 10.3233 },
    roles: [
      {
        title: "General",
        powerId: "carthage",
        timeRange: { start: -247, end: -228 },
      },
    ],
    affiliations: ["carthage"],
    description:
      "Carthaginian general in the First Punic War, father of Hannibal.",
    tags: ["military", "carthage", "punic-wars"],
  },

  // LATE ANTIQUITY
  {
    id: "attila-hun",
    name: "Attila the Hun",
    birth: 406,
    death: 453,
    birthPlace: { lat: 47.0, lng: 20.0 }, // Pannonia
    roles: [
      {
        title: "King",
        powerId: "xiongnu",
        timeRange: { start: 434, end: 453 },
      },
    ],
    affiliations: [],
    description:
      'Ruler of the Hunnic Empire, called "Scourge of God," invaded both Eastern and Western Roman Empires.',
    tags: ["conqueror", "huns", "barbarian", "rome-enemy"],
  },
  {
    id: "alaric-i",
    name: "Alaric I",
    birth: 370,
    death: 410,
    birthPlace: { lat: 45.5, lng: 28.0 }, // Dacia (Romania)
    roles: [
      {
        title: "King of Visigoths",
        powerId: "roman-empire",
        timeRange: { start: 395, end: 410 },
      },
    ],
    affiliations: [],
    description:
      "Visigoth king who sacked Rome in 410 CE, the first time in 800 years the city had fallen.",
    tags: ["conqueror", "visigoths", "sack-of-rome"],
  },
  {
    id: "odoacer",
    name: "Odoacer",
    birth: 433,
    death: 493,
    birthPlace: { lat: 47.0, lng: 15.0 }, // Germanic
    roles: [
      {
        title: "King of Italy",
        powerId: "roman-empire",
        timeRange: { start: 476, end: 493 },
      },
    ],
    affiliations: [],
    description:
      "Germanic chieftain who deposed the last Western Roman Emperor in 476 CE.",
    tags: ["barbarian", "rome", "fall-of-rome"],
  },
  {
    id: "augustine-hippo",
    name: "Augustine of Hippo",
    birth: 354,
    death: 430,
    birthPlace: { lat: 36.36, lng: 7.76 }, // Thagaste
    roles: [],
    affiliations: ["roman-empire"],
    description:
      'Theologian and philosopher, one of the most important Church Fathers, wrote "Confessions" and "City of God".',
    tags: ["philosopher", "theologian", "christianity", "church-father"],
  },
];
