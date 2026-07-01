import type {
  ContactInfo,
  Footnote,
  Industry,
  Product,
  SpecRow,
  Testimonial,
  UseCase,
} from "./types";

export const company = {
  name: "FOOKE",
  tagline: "engineering works",
  headline: "Maschinenbau",
  subheadline: "auf höchstem Niveau.",
  since: 1904,
  location: "Borken, Nordrhein-Westfalen",
  madeIn: "Made in Germany",
  heroSlides: [
    {
      title: "5-Achs Portalfräsmaschinen",
      subtitle:
        "Made in Germany — für Luft- und Raumfahrt, Verteidigung, Schienenfahrzeuge und weitere Branchen",
    },
    {
      title: "Innovative CFK-Bearbeitung auf Aerospace-Niveau",
      subtitle: "50 % leichter | 35 % produktiver: Flugzeugaußenhaut-Bearbeitung",
    },
    {
      title: "FOOKE ist bekannt für ausgefallene Exponate",
      subtitle:
        "Unser Technologiezentrum hat sich wieder etwas ganz Besonderes einfallen lassen.",
    },
  ],
  intro:
    "Als führendes Maschinenbauunternehmen bieten wir Ihnen maßgeschneiderte Bearbeitungs-Lösungen, die exakt auf Ihre spezifischen Anforderungen abgestimmt sind. Mit unserer Technologie erleben Sie maximale Produktivität, Präzision und Dynamik.",
  heritage:
    "Seit 1904 revolutioniert FOOKE mit Spitzentechnologie die Fertigungsindustrie weltweit. Als Teil der weltführenden deutschen Maschinenbauindustrie kombinieren wir jahrzehntelange Erfahrung mit modernster Technologie.",
};

export const products: Product[] = [
  {
    id: "portal-5axis",
    name: "5-Achs Fräsmaschinen",
    category: "Portalfräsmaschinen",
    description:
      "Hochdynamische Portalfräsmaschinen für komplexe Geometrien in Aerospace, Defense und Automotive.",
    href: "#portal",
  },
  {
    id: "portal-longbed",
    name: "Langbettfräsmaschinen",
    category: "Portalfräsmaschinen",
    description:
      "Stabile Langbett-Architektur für große Bauteile — Schienenfahrzeug-Bodenbaugruppen, Seitenwände und Dächer.",
    href: "#portal",
  },
  {
    id: "portal-plate",
    name: "Plattenfräsmaschinen",
    category: "Portalfräsmaschinen",
    description:
      "Präzise Plattenbearbeitung für Werkzeugbau, Prototypen und Formenbau.",
    href: "#portal",
  },
  {
    id: "fsw",
    name: "Rührreibschweißanlagen",
    category: "FSW",
    description:
      "5-Achs-FSW-Anlagen für sphärisch gekrümmte Flugzeugrümpfe — entwickelt mit TU Darmstadt und AIRBUS Aerostructures.",
    href: "#fsw",
  },
  {
    id: "additive",
    name: "Additive Fertigungssysteme",
    category: "3D Druck",
    description:
      "Flexible, präzise und materialsparende 3D-Druckanlagen für branchenübergreifenden Einsatz.",
    href: "#additive",
  },
  {
    id: "stock",
    name: "Lagermaschinen",
    category: "Verfügbar",
    description:
      "Regelmäßig gefertigte Portalfräsmaschinen ohne konkreten Auftrag — attraktive Lieferzeiten.",
    href: "#stock",
  },
];

export const industries: Industry[] = [
  {
    id: "aerospace",
    name: "Aerospace",
    description:
      "High-Tech-Lösungen für komplexe Aerospace-Bauteile. Wir entwickeln und unterstützen die Technologien der Luftfahrt von morgen.",
  },
  {
    id: "defense",
    name: "Defense",
    description:
      "Maßgeschneiderte 5-Achs-Fräslösungen für komplexe militärische Bauteile und mission-critical Anwendungen.",
  },
  {
    id: "rail",
    name: "Rail",
    description:
      "Die Bearbeitung großer Bodenbaugruppen, Seitenwände und Dächer erfordert höchste Stabilität und Maßhaltigkeit.",
  },
  {
    id: "automotive",
    name: "Automotive",
    description:
      "Prototypenbau, Modellbau & Formenbau, Werkzeugbau, Vorrichtungs- & Lehrenbau, Cubing & Fahrzeugdesign.",
  },
];

export const useCases: UseCase[] = [
  {
    id: "aerospace-skin",
    industry: "Aerospace",
    title: "Außenhautbearbeitung in der Luftfahrt",
    metric: "50%",
    metricLabel: "Gewichtsreduzierung",
    description:
      "FOOKE revolutioniert die Bearbeitung von Flugzeugaußenhäuten. Turnkey-Lösungen ermöglichen eine Produktivitätssteigerung von bis zu 35 %, während gleichzeitig Gewichtseinsparungen durch präzise Materialreduktion realisiert werden.",
    bullets: [
      "35 % Produktivitätssteigerung",
      "Präzise Materialreduktion",
      "CFRP, GFRP, Aluminium, Titan",
    ],
  },
  {
    id: "automotive-tooling",
    industry: "Automotive",
    title: "Automobilindustrie — Werkzeugbau",
    metric: "40%",
    metricLabel: "Produktivitätssteigerung",
    description:
      "Mit der Einführung einer hochdynamischen Portalfräsmaschine gelang der erfolgreiche Schritt in die moderne HSC-Bearbeitung — von CAM-Programmierung über Werkzeugauswahl bis zur idealen Frässtrategie.",
    bullets: [
      "40 % kürzere Bearbeitungszeiten",
      "Deutlich reduzierte Nacharbeit",
      "Maximale Ausschöpfung des Maschinenpotenzials",
    ],
  },
  {
    id: "rail-floor",
    industry: "Rail",
    title: "Schienenfahrzeugindustrie — Bodenbaugruppen",
    metric: "43%",
    metricLabel: "Bearbeitungszeit reduziert",
    description:
      "Seit über 20 Jahren setzt unser Kunde auf FOOKE-Technologie. Mit modernster Antriebstechnik und innovativen Frässtrategien wurde der gesamte Bearbeitungsprozess von Grund auf neu gedacht.",
    bullets: [
      "Railway-OEM aus NRW",
      "Aluminiumprofile in Großserie",
      "Prozess von Maschine bis Schneide optimiert",
    ],
  },
  {
    id: "fsw-fuselage",
    industry: "Aerospace",
    title: "Revolution in der Luftfahrt — Rührreibschweißen",
    metric: "1 kg",
    metricLabel: "weniger Gewicht pro Meter",
    description:
      "In Zusammenarbeit mit TU Darmstadt und AIRBUS Aerostructures GmbH: erstmals Rührreibschweißen für sphärisch gekrümmte Flugzeugrümpfe. Signifikante Gewichtsreduktion, geringerer Kerosinverbrauch, nachhaltigere Luftfahrt.",
    bullets: [
      "5-Achs-FSW-Anlage",
      "TU Darmstadt + AIRBUS Partnerschaft",
      "Effizienteres, umweltfreundlicheres Fügen",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "gkn",
    quote:
      "Bei FOOKE arbeiten hervorragend qualifizierte Fachleute, die wirtschaftliche Lösungen entwickeln und diese stets pünktlich und präzise umsetzen. So etwas erlebt man selten.",
    author: "Hans-Jochen Platte",
    company: "GKN Aerospace",
    sector: "Aerospace / Defense",
  },
  {
    id: "prospect",
    quote:
      "Im Vergleich zu anderen Fräsmaschinen bieten uns die FOOKE-Maschinen einen spürbaren Mehrwert: konstant höchste geometrische Präzision und die mit Abstand geringste Anzahl an Nacharbeiten.",
    author: "Brandon Wenzlik",
    company: "Prospect Group",
    sector: "Aerospace / Defense",
  },
];

export const benefits = [
  "Produktivitätssteigerung um bis zu 70 %",
  "Unglaubliche Dynamik & Genauigkeit",
  "Schneller Return on Invest",
  "Maschinenservice der begeistert",
  "Platzsparende Lösungen",
];

export const contact: ContactInfo = {
  phone: "+4928618009222",
  phoneDisplay: "+49 (0) 2861 / 8009 - 222",
  email: "sales@fooke.de",
  address: "Raiffeisenstraße 18-22",
  city: "46325 Borken",
};

export const machineSpecs = [
  { label: "Achsen", value: "5-Achs simultan" },
  { label: "Antrieb", value: "Linear Direct-Drive" },
  { label: "Genauigkeit", value: "±0.02 mm" },
  { label: "Werkstück", value: "bis 40 m Länge" },
  { label: "Spindel", value: "HSK-A100, 24.000 U/min" },
  { label: "Materialien", value: "CFRP, Al, Ti, Stahl" },
];

/**
 * Datasheet-style spec rows — typeset like a real engineering datasheet.
 * Values are the same figures already published in machineSpecs / useCases;
 * footnotes point back to the use case that substantiates the number.
 */
export const specRows: SpecRow[] = [
  { code: "01", label: "Achskonfiguration", value: "5-Achs simultan" },
  { code: "02", label: "Antriebstechnik", value: "Linear Direct-Drive" },
  { code: "03", label: "Positioniergenauigkeit", value: "±0.02 mm" },
  { code: "04", label: "Verfahrweg (X)", value: "bis 40 m", footnote: "fn-longbed" },
  { code: "05", label: "Spindel", value: "HSK-A100 · 24.000 U/min" },
  {
    code: "06",
    label: "Werkstoffe",
    value: "CFRP · GFRP · Alu · Titan · Stahl",
    footnote: "fn-materials",
  },
  { code: "07", label: "Gewichtsreduktion (Aerospace)", value: "bis 50 %", footnote: "fn-aero" },
  { code: "08", label: "Produktivität (Aerospace)", value: "+35 %", footnote: "fn-aero" },
  { code: "09", label: "Bearbeitungszeit (Rail)", value: "−43 %", footnote: "fn-rail" },
  { code: "10", label: "Gewicht/Meter (FSW-Rumpf)", value: "−1 kg/m", footnote: "fn-fsw" },
];

export const footnotes: Footnote[] = [
  {
    id: "fn-longbed",
    text: "Langbettfräsmaschinen für Schienenfahrzeug-Bodenbaugruppen, Seitenwände und Dächer.",
  },
  {
    id: "fn-materials",
    text: "Materialspektrum abhängig von Spindel- und Werkzeugkonfiguration.",
  },
  {
    id: "fn-aero",
    text: "Außenhautbearbeitung in der Luftfahrt — Turnkey-Lösung, Serienanwendung.",
  },
  {
    id: "fn-rail",
    text: "Railway-OEM aus NRW, Bearbeitung von Aluminiumprofilen in Großserie.",
  },
  {
    id: "fn-fsw",
    text: "5-Achs-FSW-Anlage entwickelt mit TU Darmstadt und AIRBUS Aerostructures GmbH.",
  },
];

export const productFinderCategories = {
  business: ["Aerospace", "Defense", "Rail", "Automotive", "All Industries"],
  product: [
    "Portalfräsmaschinen",
    "Rührreibschweißanlagen",
    "Additive Fertigung",
    "Lagermaschinen",
  ],
};

/** Raw generated image pool — concepts choose freely, apply their own CSS treatment. */
export const images = {
  millDark: "/images/cinema-hero.png",
  cfrpCloseup: "/images/cinema-aerospace.png",
  fswStudio: "/images/editorial-fsw.png",
  machineStudio: "/images/editorial-machine.png",
  blueprintMill: "/images/industrial-hero.png",
  railAssembly: "/images/industrial-rail.png",
};
