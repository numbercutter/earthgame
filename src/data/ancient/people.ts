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

  // GREEK DRAMATISTS & ARTISTS
  {
    id: "aeschylus",
    name: "Aeschylus",
    birth: -525,
    death: -456,
    birthPlace: { lat: 38.04, lng: 23.54 }, // Eleusis
    roles: [],
    affiliations: ["athens"],
    description:
      "Father of tragedy, fought at Marathon, wrote the Oresteia trilogy.",
    tags: ["playwright", "dramatist", "athens", "tragedy"],
  },
  {
    id: "sophocles",
    name: "Sophocles",
    birth: -497,
    death: -406,
    birthPlace: { lat: 37.95, lng: 23.7 }, // Colonus
    roles: [],
    affiliations: ["athens"],
    description:
      "Master tragedian who wrote Oedipus Rex, Antigone, and Electra.",
    tags: ["playwright", "dramatist", "athens", "tragedy"],
  },
  {
    id: "euripides",
    name: "Euripides",
    birth: -480,
    death: -406,
    birthPlace: { lat: 37.79, lng: 23.42 }, // Salamis
    roles: [],
    affiliations: ["athens"],
    description:
      "Innovative tragedian known for complex characters, wrote Medea and The Bacchae.",
    tags: ["playwright", "dramatist", "athens", "tragedy"],
  },
  {
    id: "aristophanes",
    name: "Aristophanes",
    birth: -446,
    death: -386,
    birthPlace: { lat: 37.98, lng: 23.73 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Father of Comedy, satirized Athenian politics and philosophy in plays like The Clouds.",
    tags: ["playwright", "comedy", "athens", "satire"],
  },
  {
    id: "phidias",
    name: "Phidias",
    birth: -480,
    death: -430,
    birthPlace: { lat: 37.98, lng: 23.73 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Greatest ancient Greek sculptor, created the statue of Zeus at Olympia and supervised Parthenon sculptures.",
    tags: ["sculptor", "artist", "athens", "parthenon"],
  },
  {
    id: "praxiteles",
    name: "Praxiteles",
    birth: -395,
    death: -330,
    birthPlace: { lat: 37.98, lng: 23.73 },
    roles: [],
    affiliations: ["athens"],
    description:
      "Revolutionary sculptor known for the Aphrodite of Knidos, first life-size female nude.",
    tags: ["sculptor", "artist", "athens", "hellenistic"],
  },

  // MORE GREEK SCIENTISTS & PHILOSOPHERS
  {
    id: "thales",
    name: "Thales of Miletus",
    birth: -624,
    death: -546,
    birthPlace: { lat: 37.53, lng: 27.28 }, // Miletus
    roles: [],
    affiliations: [],
    description:
      "First Western philosopher, predicted solar eclipse, proposed water as the basic element.",
    tags: ["philosopher", "scientist", "pre-socratic", "miletus"],
  },
  {
    id: "anaximander",
    name: "Anaximander",
    birth: -610,
    death: -546,
    birthPlace: { lat: 37.53, lng: 27.28 },
    roles: [],
    affiliations: [],
    description:
      "Early philosopher who proposed the apeiron (infinite), created first world map.",
    tags: ["philosopher", "scientist", "pre-socratic", "cartographer"],
  },
  {
    id: "heraclitus",
    name: "Heraclitus",
    birth: -535,
    death: -475,
    birthPlace: { lat: 37.95, lng: 27.37 }, // Ephesus
    roles: [],
    affiliations: [],
    description:
      'The "Weeping Philosopher" who taught that everything flows (panta rhei) and fire is the primary element.',
    tags: ["philosopher", "pre-socratic", "ephesus"],
  },
  {
    id: "parmenides",
    name: "Parmenides",
    birth: -515,
    death: -450,
    birthPlace: { lat: 40.15, lng: 15.13 }, // Elea
    roles: [],
    affiliations: [],
    description:
      "Founder of Eleatic school, argued that change is an illusion and Being is one.",
    tags: ["philosopher", "pre-socratic", "eleatic"],
  },
  {
    id: "zeno-elea",
    name: "Zeno of Elea",
    birth: -495,
    death: -430,
    birthPlace: { lat: 40.15, lng: 15.13 },
    roles: [],
    affiliations: [],
    description:
      "Famous for paradoxes like Achilles and the Tortoise, defended Parmenides' philosophy.",
    tags: ["philosopher", "pre-socratic", "paradoxes"],
  },
  {
    id: "empedocles",
    name: "Empedocles",
    birth: -494,
    death: -434,
    birthPlace: { lat: 37.31, lng: 13.58 }, // Akragas (Sicily)
    roles: [],
    affiliations: [],
    description:
      "Proposed four classical elements (earth, water, air, fire), early theory of evolution.",
    tags: ["philosopher", "scientist", "pre-socratic", "elements"],
  },
  {
    id: "democritus",
    name: "Democritus",
    birth: -460,
    death: -370,
    birthPlace: { lat: 40.85, lng: 24.87 }, // Abdera
    roles: [],
    affiliations: [],
    description:
      'The "Laughing Philosopher" who developed atomic theory with Leucippus.',
    tags: ["philosopher", "scientist", "atomism", "abdera"],
  },
  {
    id: "anaxagoras",
    name: "Anaxagoras",
    birth: -500,
    death: -428,
    birthPlace: { lat: 38.46, lng: 27.12 }, // Clazomenae
    roles: [],
    affiliations: ["athens"],
    description:
      "Introduced philosophy to Athens, proposed Nous (Mind) as cosmic principle.",
    tags: ["philosopher", "pre-socratic", "athens"],
  },
  {
    id: "protagoras",
    name: "Protagoras",
    birth: -490,
    death: -420,
    birthPlace: { lat: 40.85, lng: 24.87 }, // Abdera
    roles: [],
    affiliations: ["athens"],
    description:
      'First and greatest Sophist, declared "Man is the measure of all things."',
    tags: ["philosopher", "sophist", "relativism"],
  },
  {
    id: "diogenes",
    name: "Diogenes of Sinope",
    birth: -412,
    death: -323,
    birthPlace: { lat: 42.03, lng: 35.15 }, // Sinope
    roles: [],
    affiliations: ["athens"],
    description:
      "Cynic philosopher who lived in a barrel, searched for an honest man with a lantern.",
    tags: ["philosopher", "cynic", "athens"],
  },
  {
    id: "epicurus",
    name: "Epicurus",
    birth: -341,
    death: -270,
    birthPlace: { lat: 37.75, lng: 26.98 }, // Samos
    roles: [],
    affiliations: ["athens"],
    description:
      "Founded Epicureanism, taught that pleasure (absence of pain) is the highest good.",
    tags: ["philosopher", "epicurean", "atomism", "pleasure"],
  },
  {
    id: "zeno-citium",
    name: "Zeno of Citium",
    birth: -334,
    death: -262,
    birthPlace: { lat: 34.88, lng: 33.58 }, // Cyprus
    roles: [],
    affiliations: ["athens"],
    description:
      "Founder of Stoicism, taught virtue as the highest good and acceptance of fate.",
    tags: ["philosopher", "stoic", "athens"],
  },
  {
    id: "eratosthenes",
    name: "Eratosthenes",
    birth: -276,
    death: -194,
    birthPlace: { lat: 32.91, lng: 21.97 }, // Cyrene
    roles: [],
    affiliations: ["ptolemaic-egypt"],
    description:
      "Calculated Earth's circumference with remarkable accuracy, invented prime number sieve.",
    tags: ["mathematician", "geographer", "alexandria", "library"],
  },
  {
    id: "aristarchus",
    name: "Aristarchus of Samos",
    birth: -310,
    death: -230,
    birthPlace: { lat: 37.75, lng: 26.98 },
    roles: [],
    affiliations: [],
    description:
      "First to propose heliocentric model of the solar system, 1800 years before Copernicus.",
    tags: ["astronomer", "mathematician", "heliocentric"],
  },
  {
    id: "hipparchus",
    name: "Hipparchus",
    birth: -190,
    death: -120,
    birthPlace: { lat: 40.73, lng: 29.92 }, // Nicaea
    roles: [],
    affiliations: [],
    description:
      "Greatest ancient astronomer, discovered precession of equinoxes, created star catalog.",
    tags: ["astronomer", "mathematician", "trigonometry"],
  },
  {
    id: "ptolemy-astronomer",
    name: "Claudius Ptolemy",
    birth: 100,
    death: 170,
    birthPlace: { lat: 31.2, lng: 29.92 }, // Alexandria
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Author of Almagest, geocentric model dominated astronomy for 1400 years.",
    tags: ["astronomer", "geographer", "mathematician", "alexandria"],
  },
  {
    id: "galen",
    name: "Galen",
    birth: 129,
    death: 216,
    birthPlace: { lat: 39.12, lng: 27.18 }, // Pergamon
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Most influential physician after Hippocrates, his works dominated medicine for 1500 years.",
    tags: ["physician", "anatomist", "rome"],
  },
  {
    id: "hero-alexandria",
    name: "Hero of Alexandria",
    birth: 10,
    death: 70,
    birthPlace: { lat: 31.2, lng: 29.92 },
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Inventor who created the first steam engine (aeolipile), vending machine, and automata.",
    tags: ["inventor", "engineer", "alexandria", "steam"],
  },

  // MORE ROMAN FIGURES
  {
    id: "cato-elder",
    name: "Cato the Elder",
    birth: -234,
    death: -149,
    birthPlace: { lat: 41.67, lng: 13.07 }, // Tusculum
    roles: [],
    affiliations: ["roman-republic"],
    description:
      '"Carthago delenda est" - relentlessly advocated for Carthage\'s destruction, wrote on agriculture.',
    tags: ["senator", "censor", "rome", "carthage"],
  },
  {
    id: "gracchi-tiberius",
    name: "Tiberius Gracchus",
    birth: -163,
    death: -133,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [
      {
        title: "Tribune",
        powerId: "roman-republic",
        timeRange: { start: -133, end: -133 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Reformer who proposed land redistribution, killed by senators - beginning of the end for Republic.",
    tags: ["tribune", "reformer", "rome", "populares"],
  },
  {
    id: "gracchi-gaius",
    name: "Gaius Gracchus",
    birth: -154,
    death: -121,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [
      {
        title: "Tribune",
        powerId: "roman-republic",
        timeRange: { start: -123, end: -121 },
      },
    ],
    affiliations: ["roman-republic"],
    description:
      "Continued his brother's reforms, established grain dole, also killed in political violence.",
    tags: ["tribune", "reformer", "rome", "populares"],
  },
  {
    id: "crassus",
    name: "Marcus Licinius Crassus",
    birth: -115,
    death: -53,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [],
    affiliations: ["roman-republic"],
    description:
      "Richest Roman, member of First Triumvirate, defeated Spartacus, died fighting Parthia.",
    tags: ["triumvirate", "wealth", "rome", "carrhae"],
  },
  {
    id: "brutus",
    name: "Marcus Junius Brutus",
    birth: -85,
    death: -42,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [],
    affiliations: ["roman-republic"],
    description:
      'Caesar\'s friend and assassin - "Et tu, Brute?" - committed suicide after Philippi.',
    tags: ["assassin", "rome", "republic", "caesar"],
  },
  {
    id: "catiline",
    name: "Catiline",
    birth: -108,
    death: -62,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [],
    affiliations: ["roman-republic"],
    description:
      "Conspirator whose plot to overthrow the Republic was exposed by Cicero.",
    tags: ["conspirator", "rome", "cicero"],
  },
  {
    id: "lucretius",
    name: "Lucretius",
    birth: -99,
    death: -55,
    birthPlace: { lat: 41.9, lng: 12.5 },
    roles: [],
    affiliations: ["roman-republic"],
    description:
      'Poet-philosopher who wrote "On the Nature of Things" explaining Epicurean physics and atomism.',
    tags: ["poet", "philosopher", "epicurean", "rome"],
  },
  {
    id: "catullus",
    name: "Catullus",
    birth: -84,
    death: -54,
    birthPlace: { lat: 45.44, lng: 10.99 }, // Verona
    roles: [],
    affiliations: ["roman-republic"],
    description:
      "Greatest Roman lyric poet, known for passionate love poems to Lesbia.",
    tags: ["poet", "literature", "rome", "love-poetry"],
  },
  {
    id: "virgil",
    name: "Virgil",
    birth: -70,
    death: -19,
    birthPlace: { lat: 45.16, lng: 10.79 }, // Mantua
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Greatest Roman poet, wrote the Aeneid founding epic of Rome, and pastoral Eclogues.",
    tags: ["poet", "epic", "rome", "aeneid"],
  },
  {
    id: "horace",
    name: "Horace",
    birth: -65,
    death: -8,
    birthPlace: { lat: 40.98, lng: 15.55 }, // Venusia
    roles: [],
    affiliations: ["roman-empire"],
    description:
      'Leading poet of Augustan age, created "carpe diem" philosophy, wrote Odes and Satires.',
    tags: ["poet", "satire", "rome", "augustan"],
  },
  {
    id: "ovid",
    name: "Ovid",
    birth: -43,
    death: 17,
    birthPlace: { lat: 42.09, lng: 13.73 }, // Sulmo
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Poet who wrote Metamorphoses, exiled by Augustus for mysterious reasons.",
    tags: ["poet", "mythology", "rome", "exile"],
  },
  {
    id: "livy",
    name: "Livy",
    birth: -59,
    death: 17,
    birthPlace: { lat: 45.41, lng: 11.88 }, // Patavium
    roles: [],
    affiliations: ["roman-empire"],
    description:
      'Historian who wrote "Ab Urbe Condita," massive history of Rome from its founding.',
    tags: ["historian", "rome", "literature"],
  },
  {
    id: "seneca",
    name: "Seneca the Younger",
    birth: -4,
    death: 65,
    birthPlace: { lat: 37.88, lng: -4.78 }, // Corduba
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Stoic philosopher, tutor to Nero, forced to commit suicide, wrote tragedies and moral essays.",
    tags: ["philosopher", "stoic", "rome", "tutor"],
  },
  {
    id: "pliny-elder",
    name: "Pliny the Elder",
    birth: 23,
    death: 79,
    birthPlace: { lat: 45.8, lng: 9.08 }, // Como
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Wrote Natural History encyclopedia, died investigating Vesuvius eruption.",
    tags: ["naturalist", "encyclopedist", "rome", "vesuvius"],
  },
  {
    id: "pliny-younger",
    name: "Pliny the Younger",
    birth: 61,
    death: 113,
    birthPlace: { lat: 45.8, lng: 9.08 },
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Nephew of Pliny the Elder, governor and letter-writer, described Vesuvius eruption and early Christians.",
    tags: ["writer", "governor", "rome", "letters"],
  },
  {
    id: "tacitus",
    name: "Tacitus",
    birth: 56,
    death: 120,
    birthPlace: { lat: 43.0, lng: 12.0 }, // Unknown
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Greatest Roman historian, wrote Annals and Histories chronicling early Empire.",
    tags: ["historian", "rome", "literature"],
  },
  {
    id: "epictetus",
    name: "Epictetus",
    birth: 50,
    death: 135,
    birthPlace: { lat: 40.18, lng: 29.06 }, // Hierapolis
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Born a slave, became influential Stoic philosopher, taught Marcus Aurelius through his Discourses.",
    tags: ["philosopher", "stoic", "slave", "rome"],
  },
  {
    id: "plotinus",
    name: "Plotinus",
    birth: 204,
    death: 270,
    birthPlace: { lat: 28.1, lng: 30.75 }, // Lycopolis
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Founder of Neoplatonism, influenced Christian, Jewish, and Islamic philosophy.",
    tags: ["philosopher", "neoplatonism", "rome"],
  },

  // PERSIAN/IRANIAN FIGURES
  {
    id: "mani",
    name: "Mani",
    birth: 216,
    death: 274,
    birthPlace: { lat: 33.1, lng: 44.1 }, // Mesopotamia
    roles: [],
    affiliations: ["sassanid-empire"],
    description:
      "Prophet who founded Manichaeism, a major world religion that spread from Rome to China.",
    tags: ["prophet", "founder", "manichaeism", "persia"],
  },
  {
    id: "shapur-i",
    name: "Shapur I",
    birth: 215,
    death: 270,
    birthPlace: { lat: 29.87, lng: 52.89 },
    roles: [
      {
        title: "Shahanshah",
        powerId: "sassanid-empire",
        timeRange: { start: 240, end: 270 },
      },
    ],
    affiliations: ["sassanid-empire"],
    description:
      "Captured Roman Emperor Valerian, greatest of early Sassanid kings.",
    tags: ["emperor", "persia", "sassanid", "military"],
  },
  {
    id: "khosrow-i",
    name: "Khosrow I (Anushirvan)",
    birth: 501,
    death: 579,
    birthPlace: { lat: 33.09, lng: 44.11 },
    roles: [
      {
        title: "Shahanshah",
        powerId: "sassanid-empire",
        timeRange: { start: 531, end: 579 },
      },
    ],
    affiliations: ["sassanid-empire"],
    description:
      '"The Just" - greatest Sassanid king, reformed administration, patronized learning.',
    tags: ["emperor", "persia", "sassanid", "reformer"],
  },

  // INDIAN FIGURES
  {
    id: "panini",
    name: "Pāṇini",
    birth: -520,
    death: -460,
    birthPlace: { lat: 34.0, lng: 72.0 }, // Gandhara
    roles: [],
    affiliations: [],
    description:
      "Father of linguistics, wrote Ashtadhyayi grammar of Sanskrit using formal rules.",
    tags: ["grammarian", "linguist", "india", "sanskrit"],
  },
  {
    id: "aryabhata",
    name: "Aryabhata",
    birth: 476,
    death: 550,
    birthPlace: { lat: 25.61, lng: 85.14 }, // Kusumapura
    roles: [],
    affiliations: ["gupta-empire"],
    description:
      "Mathematician-astronomer who calculated pi accurately, proposed Earth's rotation.",
    tags: ["mathematician", "astronomer", "india", "gupta"],
  },
  {
    id: "kalidasa",
    name: "Kālidāsa",
    birth: 350,
    death: 450,
    birthPlace: { lat: 23.18, lng: 75.78 }, // Ujjain area
    roles: [],
    affiliations: ["gupta-empire"],
    description:
      "Greatest Sanskrit poet and playwright, wrote Shakuntala and Meghaduta.",
    tags: ["poet", "playwright", "india", "gupta", "sanskrit"],
  },
  {
    id: "varahamihira",
    name: "Varāhamihira",
    birth: 505,
    death: 587,
    birthPlace: { lat: 23.18, lng: 75.78 },
    roles: [],
    affiliations: ["gupta-empire"],
    description:
      "Polymath astronomer who compiled Pancha-Siddhantika and contributed to astrology.",
    tags: ["astronomer", "mathematician", "india", "gupta"],
  },

  // CHINESE FIGURES
  {
    id: "mencius",
    name: "Mencius (Mengzi)",
    birth: -372,
    death: -289,
    birthPlace: { lat: 35.56, lng: 117.01 },
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      "Second Sage of Confucianism, argued humans are innately good.",
    tags: ["philosopher", "confucian", "china"],
  },
  {
    id: "xunzi",
    name: "Xunzi",
    birth: -310,
    death: -235,
    birthPlace: { lat: 35.0, lng: 118.0 },
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      "Confucian philosopher who argued humans are innately selfish, taught Legalist founders.",
    tags: ["philosopher", "confucian", "china"],
  },
  {
    id: "han-feizi",
    name: "Han Feizi",
    birth: -280,
    death: -233,
    birthPlace: { lat: 34.0, lng: 114.0 },
    roles: [],
    affiliations: ["zhou-dynasty"],
    description:
      "Founder of Legalism, advocated strict laws and absolute ruler power.",
    tags: ["philosopher", "legalist", "china"],
  },
  {
    id: "shang-yang",
    name: "Shang Yang",
    birth: -390,
    death: -338,
    birthPlace: { lat: 34.5, lng: 112.0 },
    roles: [],
    affiliations: ["qin-dynasty"],
    description:
      "Legalist reformer who transformed Qin into the power that unified China.",
    tags: ["reformer", "legalist", "qin", "china"],
  },
  {
    id: "sima-qian",
    name: "Sima Qian",
    birth: -145,
    death: -86,
    birthPlace: { lat: 35.09, lng: 110.08 },
    roles: [],
    affiliations: ["han-dynasty"],
    description:
      "Father of Chinese historiography, wrote Records of the Grand Historian despite castration.",
    tags: ["historian", "china", "han"],
  },
  {
    id: "ban-zhao",
    name: "Ban Zhao",
    birth: 45,
    death: 116,
    birthPlace: { lat: 34.27, lng: 108.9 },
    roles: [],
    affiliations: ["han-dynasty"],
    description:
      "First known female Chinese historian, completed her brother's history of Han dynasty.",
    tags: ["historian", "scholar", "female", "han", "china"],
  },
  {
    id: "cai-lun",
    name: "Cai Lun",
    birth: 50,
    death: 121,
    birthPlace: { lat: 27.42, lng: 112.09 },
    roles: [],
    affiliations: ["han-dynasty"],
    description:
      "Court official who improved papermaking process, revolutionizing writing.",
    tags: ["inventor", "paper", "han", "china"],
  },
  {
    id: "zhang-heng",
    name: "Zhang Heng",
    birth: 78,
    death: 139,
    birthPlace: { lat: 33.0, lng: 112.53 },
    roles: [],
    affiliations: ["han-dynasty"],
    description:
      "Polymath who invented seismoscope, improved water clock, calculated pi.",
    tags: ["inventor", "astronomer", "mathematician", "han", "china"],
  },

  // JEWISH FIGURES
  {
    id: "hillel",
    name: "Hillel the Elder",
    birth: -110,
    death: 10,
    birthPlace: { lat: 32.0, lng: 35.0 }, // Babylon
    roles: [],
    affiliations: [],
    description:
      "Greatest Jewish sage, founder of the School of Hillel, taught the Golden Rule.",
    tags: ["rabbi", "sage", "judaism", "ethics"],
  },
  {
    id: "josephus",
    name: "Flavius Josephus",
    birth: 37,
    death: 100,
    birthPlace: { lat: 31.77, lng: 35.21 },
    roles: [],
    affiliations: ["roman-empire"],
    description:
      "Jewish historian who chronicled the Jewish War and Antiquities of the Jews.",
    tags: ["historian", "jewish", "rome"],
  },
  {
    id: "rabbi-akiva",
    name: "Rabbi Akiva",
    birth: 50,
    death: 135,
    birthPlace: { lat: 32.0, lng: 35.0 },
    roles: [],
    affiliations: [],
    description:
      "Greatest Talmudic sage, supported Bar Kokhba revolt, martyred by Romans.",
    tags: ["rabbi", "sage", "judaism", "martyr"],
  },

  // CARTHAGINIAN
  {
    id: "hanno-navigator",
    name: "Hanno the Navigator",
    birth: -500,
    death: -440,
    birthPlace: { lat: 36.85, lng: 10.32 },
    roles: [],
    affiliations: ["carthage"],
    description:
      "Carthaginian explorer who sailed down the West African coast, possibly reaching Cameroon.",
    tags: ["explorer", "navigator", "carthage", "africa"],
  },

  // CELTIC
  {
    id: "vercingetorix",
    name: "Vercingetorix",
    birth: -82,
    death: -46,
    birthPlace: { lat: 45.78, lng: 3.08 }, // Auvergne
    roles: [],
    affiliations: ["celtic-gaul"],
    description:
      "Gallic chieftain who united Gaul against Caesar, defeated at Alesia, executed in Rome.",
    tags: ["chieftain", "gaul", "celtic", "resistance"],
  },
  {
    id: "boudicca",
    name: "Boudicca",
    birth: 30,
    death: 61,
    birthPlace: { lat: 52.5, lng: 1.0 }, // East Anglia
    roles: [],
    affiliations: [],
    description:
      "Queen of the Iceni who led a massive revolt against Roman Britain, destroyed Londinium.",
    tags: ["queen", "warrior", "celtic", "britain", "revolt"],
  },

  // ARMENIAN
  {
    id: "tigranes-great",
    name: "Tigranes the Great",
    birth: -140,
    death: -55,
    birthPlace: { lat: 40.0, lng: 44.5 },
    roles: [
      {
        title: "King",
        powerId: "roman-republic",
        timeRange: { start: -95, end: -55 },
      },
    ],
    affiliations: [],
    description:
      "Created Armenian Empire from the Caspian to Mediterranean, briefly king of kings.",
    tags: ["king", "armenia", "empire"],
  },

  // NUBIAN
  {
    id: "piye",
    name: "Piye",
    birth: -770,
    death: -714,
    birthPlace: { lat: 18.54, lng: 31.82 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "kush",
        timeRange: { start: -744, end: -714 },
      },
    ],
    affiliations: ["kush"],
    description:
      "Nubian king who conquered Egypt, founding the Twenty-fifth Dynasty.",
    tags: ["pharaoh", "nubia", "kush", "egypt"],
  },
  {
    id: "taharqa",
    name: "Taharqa",
    birth: -710,
    death: -664,
    birthPlace: { lat: 18.54, lng: 31.82 },
    roles: [
      {
        title: "Pharaoh",
        powerId: "kush",
        timeRange: { start: -690, end: -664 },
      },
    ],
    affiliations: ["kush"],
    description:
      "Greatest of the Nubian pharaohs, builder and warrior, mentioned in Bible.",
    tags: ["pharaoh", "nubia", "kush", "egypt", "builder"],
  },

  // HITTITE
  {
    id: "suppiluliuma-i",
    name: "Suppiluliuma I",
    birth: -1380,
    death: -1322,
    birthPlace: { lat: 40.02, lng: 34.61 }, // Hattusa
    roles: [],
    affiliations: [],
    description:
      "Greatest Hittite king, expanded empire, rival of Egypt, died of plague from prisoners.",
    tags: ["king", "hittite", "empire", "anatolia"],
  },
];
