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
    "Hi, I'm Tracey, your TR Fastenings voice assistant. How can I help you today?"
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
      "Detailed financial performance, capital market indicators, five-year metrics trajectory, regional dynamics, and dividend policy of Trifast plc.",
    keywords: [
      "financials",
      "revenue",
      "profit",
      "net debt",
      "dividend",
      "share price",
      "valuation",
      "market capitalization",
      "basic eps",
      "operating profit",
      "uop",
      "pbt",
      "debt",
      "leverage",
      "target sectors",
      "smart infrastructure",
      "automotive",
      "medical equipment",
      "recover rebuild resilience",
    ],
    content: `Trifast plc (LSE: TRI / TRFT) is a global specialist in the design, engineering, manufacture, and distribution of industrial fastenings and Category 'C' components.

Capital Market Indicators (as of August 2026):
- LSE Ticker / ISIN: TRI.L / GB0008883927
- Current Share Price: 92.58p
- 52-Week Price Range: 56.20p - 95.00p
- Market Capitalization: £124.24m - £125.02m
- Shares in Issue: 135.04m
- Average Analyst 12-Month Target: 122.80p (Range: 104.00p - 140.00p)
- Analyst Recommendation: Strong Buy (5 Buys, 0 Sells)
- Valuation Metrics: Price/LTM Sales: 0.6x; Price/Book Value: 1.1x; PEG Ratio: 0.20x - 0.65x; Dividend Yield (TTM): 1.94% - 1.96%

Five-Year Financial Performance Trajectory (FY2021 - FY2026):
- FY2021: Revenue £188.20m, Gross Margin 26.5%, Underlying Operating Profit (UOP) £12.00m, UOP Margin 6.4%, Statutory Operating Profit £8.80m, Statutory PBT £7.80m, Basic EPS 4.31p, Adjusted EPS 6.24p, Adjusted Net Cash £13.3m, Total Dividend 1.60p.
- FY2022: Revenue £218.62m, Gross Margin ~26.7%, UOP £11.60m, UOP Margin 5.3%, Statutory Operating Profit £11.60m, Statutory PBT £10.62m, Basic EPS 6.61p, Adjusted EPS 8.19p, Adjusted Net Debt £37.50m, Total Dividend 2.10p.
- FY2023: Revenue £244.39m, Gross Margin 25.3%, UOP £11.90m, UOP Margin ~4.9%, Statutory Operating Loss £(0.01)m, Statutory PBT £(2.69)m, Basic EPS (2.12p), Adjusted EPS 5.13p, Adjusted Net Debt £53.80m, Total Dividend 2.25p.
- FY2024: Revenue £233.67m, Gross Margin 25.7%, UOP £11.90m, UOP Margin 5.1%, Statutory Operating Profit £4.63m, Statutory PBT £(0.79)m, Basic EPS (3.29p), Adjusted EPS 1.62p, Adjusted Net Debt £21.00m, Total Dividend 1.80p.
- FY2025: Revenue £223.47m, Gross Margin 27.4%, UOP £15.50m, UOP Margin 6.8% (CER), Statutory Operating Profit £9.43m, Statutory PBT £4.93m, Basic EPS 0.77p, Adjusted EPS 4.31p - 6.46p, Adjusted Net Debt £15.40m, Total Dividend 1.80p.
- FY2026: Revenue £207.00m - £208.37m, Gross Margin ~30.0%, UOP £16.00m (Est.), UOP Margin ~7.7%, Statutory Operating Profit £4.24m, Statutory PBT £0.06m, Basic EPS (0.73p), Adjusted EPS 6.46p, Adjusted Net Debt £17.40m, Total Dividend 1.90p.

Annual Highlights:
- FY2021: Down 6% YoY due to pandemic. Strong cash conversion at 147.9% of underlying EBITDA.
- FY2022: Revenue rose 16.2% as production resumed. Buffer inventory building increased net debt to £37.50m.
- FY2023: Revenue reached £244.39m due to price pass-through, but freight inflation and Asian destocking hit profitability. Net debt peaked at £53.80m.
- FY2024: Initiated 'Recover' phase, pruning low-margin contracts. Net debt cut in half to £21.00m.
- FY2025: Self-help initiatives expanded gross margins to 27.4%. ROCE rose to 8.1%. Net debt fell to £15.40m.
- FY2026: Volumetric contraction of 7% from rationalization and soft UK/European automotive markets, but gross margin expanded to ~30.0%. Statutory PBT was £0.06m due to restructuring costs.

Operational Transformation & Target Sectors:
Turnaround strategy: "Recover, Rebuild, Resilience". Shifted focus away from low-margin volume chasing to disciplined margin expansion and key growth sectors:
1. Smart Infrastructure: Data centers, AI processing hardware, smart grids, Middle East exports.
2. Automotive: Shifted from ICE fasteners to Electric Vehicle (EV) platforms and structural joining systems.
3. Medical Equipment: High-margin engineering standards and sticky relationships.

Balance Sheet & Shareholder Payouts:
- Debt Management: Stock levels reduced from 37% of revenue in FY2023 to 30%-31% in FY2024-FY2026. Operating cash flow conversion >= 100% of EBITDA. Bank facility leverage is below 1.0x EBITDA, leaving over £73m undrawn under the £120.0m revolving credit facility.
- Dividends:
  * FY2021: Interim 0.00p, Final 1.60p, Total 1.60p (Yield: 1.07%)
  * FY2022: Interim 0.70p, Final 1.40p, Total 2.10p (Yield: 1.83%)
  * FY2023: Interim 0.75p, Final 1.50p, Total 2.25p (Yield: 2.89%)
  * FY2024: Interim 0.60p, Final 1.20p, Total 1.80p (Yield: 2.41%)
  * FY2025: Interim 0.60p, Final 1.20p, Total 1.80p (Yield: 2.71%)
  * FY2026: Interim 0.60p, Final 1.30p, Total 1.90p (Yield: 1.95%)`,
  },
  {
    slug: "/engineering",
    title: "Engineering Mechanics & Technical Catalog Data",
    summary:
      "Detailed engineering specifications, VDI 2230 joint design, stainless steel metallurgy, protective coatings, thread geometries, and assembly standards.",
    keywords: [
      "engineering",
      "vdi 2230",
      "metallurgy",
      "stainless steel",
      "coatings",
      "hydrogen embrittlement",
      "friction",
      "threadforming",
      "self-clinch",
      "rivet bush",
      "vmi",
      "testing",
      "torque",
      "preload",
    ],
    content: `TR Fastenings engineering standards and product taxonomy:

1. Manufacturing Footprint: Primary production facilities include TR Singapore, SFE Taiwan (2 plants), TR VIC Italy, and PSEP Malaysia. Operational certifications include IATF 16949, ISO 9001, and ISO 14001, with Level 3 PPAP capabilities.
2. Product Catalog & Sizing: Over 50,000 SKUs (screws, nuts, washers, sheet metal fasteners, plastic hardware, cable glands, security fasteners). Example: Machine screws has 5,088 SKUs (M1 to M16; imperial 0-80 to 1/2-13; pan, countersunk, cheese heads).
3. Bolted Joint Design (VDI 2230): Governs relationship between preload clamp force (FM), working load (FA), shear stress, and relaxation. Sizing follows a 4-step algorithm (starting load FA, min clamp load FM_min, max clamp load FM_max, and nominal diameter selection).
4. Metallurgy & Galling (ISO 3506): Austenitic stainless (A2 commercial, A4 molybdenum acid-proof marine) are non-magnetic and work-hardened. Galling mitigated by anti-seize lubrication, driver speeds <400 RPM, dissimilar alloy mating, and rolled threads. Martensitic (C1), Ferritic (F1), and Duplex are also supported.
5. Plating & Hydrogen Embrittlement: Electroplated zinc (BS 7371-3) requires thermal de-embrittlement baking at 190°C–220°C for 4-24 hours for core/surface hardness >320 HV (Property Classes 8.8, 10.9, 12.9) to effuse atomic hydrogen. Non-electrolytic zinc flake coatings (Geomet, Magni 565/577, Delta Protekt) carry zero process-induced embrittlement risk.
6. Threadforming (DIN 7500 Tap-Fix): Trilobular shank forms internal threads by cold plastic deformation (no chips/swarf). Target thread engagement is 50%-95% (minimum engagement 2d).
7. Polymeric Fastening (Plas-Tech 30-20): Composite thread form reduces radial bursting stress by >30%, preventing boss wall cracks. Target strip-to-drive torque ratio is >= 3:1.
8. Sheet Metal & Rivet Bushes: Self-clinch nuts/studs use cold plastic displacement in a hydraulic press (sheet hardness must be <80 HRB for steel, <70 HRB for stainless). Rivet bushes (Hanksert) expand a tubular spigot over sheet reverse face.
9. Supply Chain VMI Automation: Implements TwinBin Live (optical flag/ERP signal), TwinBin DLF (5G ERP barcode feed), FlexSense (real-time weight/optical sensors), ProStock (locked dispensing carousels), and Accucab (RFID weight scales).
10. Support & VA/VE: Value Analysis/Value Engineering line walks standardize drives and convert machined parts to cold-headed forgings to minimize raw material waste.`,
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
