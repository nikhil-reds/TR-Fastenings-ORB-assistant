// ============================================================
//  TR Fastenings — single source of truth (knowledge base)
//  Everything the voice assistant is allowed to know and say lives
//  in THIS file. The assistant must not use any information that is
//  not contained below.
//  Sources: https://www.trfastenings.com/
// ============================================================

export type SitePage = {
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
  content: string;
};

export type FAQ = { q: string; a: string };

// ------------------------------------------------------------
//  The assistant persona (name + how she opens the conversation)
// ------------------------------------------------------------
export const assistant = {
  name: "Tracey",
  openingStatement:
    "Hello, and welcome to TR Fastenings. I'm Tracey, your voice guide. I can tell you about our industrial fastenings, screws, nuts, Hank® rivet bushes, Binx® self-locking nuts, or investor relations at Trifast plc. What would you like to discuss today?",
};

// ------------------------------------------------------------
//  Company / project
// ------------------------------------------------------------
export const company = {
  name: "TR Fastenings",
  tagline: "Global Specialist in Industrial Fastenings and Category 'C' Components",
  location: "Uckfield, East Sussex, United Kingdom (Corporate Headquarters)",
  developer: "Trifast plc Group",
  contact: {
    website: "https://www.trfastenings.com",
    enquiry:
      "Please contact our National Distribution Centre in Walsall at 08454 811 800, or use the general enquiry email options on our contact page.",
    social: {
      instagram: "@tr_fastenings",
      facebook: "TRFastenings",
      x: "@TRFastenings",
    },
  },
};

// ------------------------------------------------------------
//  Page index — the structured knowledge the model may quote
// ------------------------------------------------------------
export const pageIndex: SitePage[] = [
  {
    slug: "/",
    title: "Overview",
    summary:
      "TR Fastenings, part of the Trifast plc Group, is a global leader in the design, engineering, manufacture, and supply of industrial fastenings and Category 'C' components.",
    keywords: [
      "tr fastenings",
      "overview",
      "fasteners",
      "components",
      "trifast plc",
      "industrial",
      "engineering",
    ],
    content: `TR Fastenings is a trusted global specialist in the supply of high-quality industrial fasteners. The company designs, manufactures, and distributes products to major assembly industries around the world. TR operates multiple locations across the UK, Europe, USA, and Asia, including five high-volume manufacturing sites producing cold forged fasteners and special parts, along with three engineering and innovation centres. It serves original equipment manufacturers (OEMs) and Tier 1 suppliers in key sectors including automotive, medical equipment, smart infrastructure (such as Data Centres), general industrial, and distributor channels.`,
  },
  {
    slug: "/products",
    title: "Products & Core Categories",
    summary:
      "A massive product portfolio covering Screws, Bolts, Nuts, Washers, Sheet Metal Fasteners, Plastics Fasteners, Enclosure Hardware, and Security Fasteners.",
    keywords: [
      "products",
      "screws",
      "bolts",
      "nuts",
      "washers",
      "binx nut",
      "hank rivet bush",
      "enclosure hardware",
      "security fasteners",
      "cable glands",
    ],
    content: `TR Fastenings provides over 150,000 product lines. The core categories include:
- Screws and Bolts: Machine screws, screws for plastic, hexagon screws & bolts, socket screws, and set screws.
- Nuts: Standard hexagon, standard flange, nylon insert, weld nuts, and all-metal self-locking nuts (featuring the renowned Binx® self-locking nut).
- Washers, Circlips, Rings, and Seals: Covers flat washers, O-rings, bonded seals, and circlips.
- Fasteners for Sheet Metal: Self-clinch fasteners, Hank® rivet bushes, blind rivet nuts, and blind rivets.
- Fasteners for Plastic: Specialized screws for plastic, inserts (expansion/flow serts), and compression limiters.
- Enclosure Hardware: Locking systems, locks, lock components, hinges, handles, latches, clamps, terminals, and gaskets.
- Plastic & Rubber Hardware: Cable management, circuit board hardware, plastic screws, and panel fasteners.
- Cable Glands: Features Hummel® branded and generic cable glands and accessories.
- Security Fasteners: Specialized screws and nuts designed to prevent unauthorized removal.
- Spacers and Pillars: Threaded spacers, pillars, and through spacers.
- Tooling and Driver Bits: Standard and security driver bits.`,
  },
  {
    slug: "/sheet-metal-plastics",
    title: "Sheet Metal & Plastic Solutions",
    summary:
      "Specialized engineering fasteners including the famous Hank® Rivet Bush range and high-performance inserts for thermoplastic materials.",
    keywords: [
      "sheet metal",
      "hank",
      "rivet bush",
      "clinch",
      "self-clinching",
      "plastic inserts",
      "compression limiters",
      "flow serts",
    ],
    content: `TR Fastenings is highly regarded for its sheet metal and plastic fastening systems:
- Hank® Rivet Bushes: TR's registered trademark range of rivet bushes designed to provide a deep tapped metallic thread in thin sheet metal. Available in round serrated face, round serrated spigot, and hexagon formats.
- Self-Clinch Fasteners: Press-in studs, nuts, and standoffs that permanently join with sheet metal when pressed into pre-drilled holes.
- Fasteners for Plastics: Screws like Plas-Tech® designed specifically to form strong threads in plastics, plus threaded inserts (expansion serts, flow serts, self-tapping inserts) and compression limiters to protect plastic components from crushing under bolt pre-loads.`,
  },
  {
    slug: "/investors",
    title: "Investors & Corporate Strategy",
    summary:
      "Trifast plc is listed on the London Stock Exchange (LSE: TRI). Corporate strategy is centered around 'Recover, Rebuild, Resilience'.",
    keywords: [
      "investors",
      "trifast plc",
      "lse",
      "tri",
      "strategy",
      "governance",
      "financials",
      "annual report",
    ],
    content: `TR Fastenings is a proud member of the Trifast plc Group. Trifast plc is listed on the London Stock Exchange under the ticker symbol TRI. The Group's overarching strategic approach, titled 'Recover, Rebuild, Resilience', prioritizes margin management, focused growth, organisational effectiveness, and operational efficiency. The Board strives to ensure strong corporate governance, committee accountability, and active engagement with stakeholders including shareholders, customers, suppliers, local communities, and regulatory bodies.`,
  },
  {
    slug: "/careers",
    title: "Careers & Culture",
    summary:
      "A global employer committed to attracting top talent, providing a safe and high-performing working environment with focus on health and wellbeing.",
    keywords: [
      "careers",
      "culture",
      "jobs",
      "wellbeing",
      "recruitment",
      "talent",
      "apprenticeships",
    ],
    content: `Trifast plc and TR Fastenings focus on creating a supportive global working environment. The Group prioritizes attracting and retaining top talent, ensuring a safe, inclusive, and high-performing workspace. Emphasis is placed on employee health, safety, and wellbeing, providing opportunities for personal growth, engineering apprenticeships, and technical career progression across international operations.`,
  },
  {
    slug: "/financials",
    title: "Financial Performance & Global Footprint",
    summary:
      "Trifast plc is a global group with revenues spanning the UK, Europe, USA, and Asia. Features five high-volume manufacturing sites.",
    keywords: [
      "financials",
      "revenue",
      "manufacturing",
      "footprint",
      "singapore",
      "italy",
      "sfe",
      "turnover",
    ],
    content: `Trifast plc operates globally across the UK, Asia, Europe, and the USA. Key aspects of the global footprint and financials:
- Manufacturing: Features five high-volume manufacturing sites including TR Singapore, TR SFE, and TR Italy, plus three engineering and innovation centres.
- Logistics: Operates global supply chain solutions and optimisation services, including the National Distribution Centre in Walsall.
- Financial Position: Standard reporting follows LSE requirements. The group maintains a strong statement of financial position and focuses on return on capital employed (ROCE) and delivering sustainable shareholder returns.`,
  },
];

// ------------------------------------------------------------
//  FAQs (verbatim questions and key facts from the website)
// ------------------------------------------------------------
export const faqs: FAQ[] = [
  {
    q: "What does TR stand for?",
    a: "TR stands for TR Fastenings, which is the main trading brand of the Trifast plc Group.",
  },
  {
    q: "What is a Hank® Rivet Bush?",
    a: "A Hank® Rivet Bush is TR's registered trademark range of fasteners designed to provide a deep, reusable metallic thread in thin sheet metal components.",
  },
  {
    q: "What is a Binx® nut?",
    a: "A Binx® nut is an all-metal self-locking nut, renowned for its reliability in high-vibration applications. It is a premium product in TR's nut category.",
  },
  {
    q: "Where is TR Fastenings' National Distribution Centre located?",
    a: "The National Distribution Centre is located on Reedswood Park Road, Walsall, WS2 8DQ, United Kingdom.",
  },
  {
    q: "Which industries does TR Fastenings serve?",
    a: "TR Fastenings serves major assembly industries globally, including automotive, medical equipment, smart infrastructure (like Data Centres), general industrial, and distributors.",
  },
  {
    q: "How can I contact TR Fastenings customer support?",
    a: "You can contact support by calling the Walsall National Distribution Centre at 08454 811 800 or emailing sales@trfastenings.com.",
  },
];
