// ============================================================
//  Pidilite Industries Limited — single source of truth (knowledge base)
//  Everything the voice assistant is allowed to know and say lives
//  in THIS file. The assistant must not use any information that is
//  not contained below.
//  Sources: https://www.pidilite.com/
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
  name: "Tara",
  openingStatement:
    "Hello, and welcome to Pidilite. I'm Tara, your guide. I can tell you about our brands like Fevicol, Dr. Fixit, our industrial products, investor relations, or careers at Pidilite. What would you like to discuss today?",
};

// ------------------------------------------------------------
//  Company / project
// ------------------------------------------------------------
export const company = {
  name: "Pidilite",
  tagline: "Building Bonds, Creating Value",
  location: "Mumbai, India (Corporate Office: Andheri East; Registered Office: Nariman Point)",
  developer: "Pidilite Industries Limited",
  contact: {
    website: "https://www.pidilite.com",
    enquiry:
      "Please contact us at our corporate office, call our consumer service at 1800-266-6066, or visit the contact options on our website.",
    social: {
      instagram: "@pidilite_industries",
      facebook: "PidiliteLtd",
      x: "@PidiliteIndia",
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
      "Pidilite Industries Limited is a leading Indian multinational company specializing in adhesives, sealants, construction chemicals, art materials, and industrial specialty chemicals.",
    keywords: [
      "pidilite",
      "overview",
      "adhesives",
      "sealants",
      "waterproofing",
      "consumer bazaar",
      "industrial business",
    ],
    content: `Since its inception in 1959, Pidilite Industries Limited has been a pioneer in consumer and specialty chemicals in India. The company operates in two main segments: Consumer & Bazaar (C&B), which includes adhesives, sealants, construction chemicals, and art/craft materials; and Business to Business (B2B), which serves various industries with specialty chemicals, resins, and pigments. Pidilite has a strong global presence, with manufacturing facilities and R&D centers in India and international locations.`,
  },
  {
    slug: "/consumer-brands",
    title: "Consumer Brands",
    summary:
      "A diverse and ever-evolving brand portfolio including Fevicol, Dr. Fixit, M-Seal, Roff, Fevicryl, Fevikwik, Araldite, and Haisha Paints.",
    keywords: [
      "brands",
      "fevicol",
      "dr fixit",
      "m-seal",
      "roff",
      "fevicryl",
      "fevikwik",
      "araldite",
      "haisha paints",
      "fevistik",
    ],
    content: `Pidilite's portfolio of consumer brands contains household names that are leaders in their respective segments:
- Fevicol: The flagship brand of adhesives, synonymous with strong bonding.
- Dr. Fixit: A comprehensive range of waterproofing solutions and construction chemicals ("Waterproofing ka Doctor").
- M-Seal: Multi-purpose epoxy sealant for sealing, joining, and repairing.
- Roff: Advanced tile adhesives and tile care solutions.
- Fevicryl: Leading art and craft materials brand including acrylic colors and fabric paints.
- Fevikwik: Instant adhesive for quick repairs.
- Araldite: High-performance epoxy adhesive.
- Haisha Paints: High-quality decorative paints.
- Fevistik & Fevicol MR: Easy-to-use glue sticks and white glue for schools and offices.`,
  },
  {
    slug: "/industrial-business",
    title: "Industrial Business",
    summary:
      "Extensive range of industrial products, specialty adhesives, pigments, and polymer emulsions.",
    keywords: [
      "industrial",
      "b2b",
      "pigments",
      "dr cipy",
      "chemicals",
      "resins",
    ],
    content: `Pidilite's Business to Business (B2B) segment provides solutions across multiple industries:
- Industrial Products: Specialty adhesives, resins, and organic binders.
- Pigments: High-quality organic pigments and preparations for paints, plastics, inks, and textiles.
- Dr. Cipy: Industrial flooring solutions (Cipy Polyurethanes) offering high durability and specialty coatings.`,
  },
  {
    slug: "/investor-relations",
    title: "Investor Relations",
    summary:
      "Comprehensive information for shareholders, financial performance reports, quarterly/annual reports, and corporate governance.",
    keywords: [
      "investors",
      "financials",
      "quarterly reports",
      "annual reports",
      "shareholders",
      "governance",
    ],
    content: `Pidilite maintains strong relationships with its investor community by ensuring timely disclosure of corporate information, publication of quarterly and annual financial results, subsidiary company reports, and listing information. Registered office: Regent Chambers, Nariman Point, Mumbai. For investor queries, contact: investor.relations@pidilite.co.in.`,
  },
  {
    slug: "/careers",
    title: "Careers & Culture",
    summary:
      "Certified Great Place to Work focusing on happy and healthy employees, talent management, diversity, and current openings.",
    keywords: [
      "careers",
      "jobs",
      "working with us",
      "great place to work",
      "talent management",
      "diversity",
    ],
    content: `Pidilite is certified as a 'Great Place to Work', guided by the philosophy 'Happy and Healthy employees is Happy and Healthy Pidilite'. It offers opportunities for young talent management, fosters diversity & inclusion, and shares active openings on its portal.`,
  },
  {
    slug: "/financials",
    title: "Financial Performance (FY 2023-24 to FY 2025-26)",
    summary:
      "Audited financial performance, segment breakdowns, underlying volume growth, marketing campaigns, and CSR/community initiatives of Pidilite Industries Limited for the financial years 2023-24, 2024-25, and 2025-26.",
    keywords: [
      "financials",
      "annual report",
      "fy 2023-24",
      "fy 2024-25",
      "fy 2025-26",
      "sales",
      "ebitda",
      "pat",
      "dividend",
      "b2b",
      "consumer bazaar",
      "uvg",
      "dr fixit",
      "fevikwik",
      "roff",
      "fevicol",
      "araldite",
      "csr",
    ],
    content: `Key Standalone Financial Performance Indicators:
- FY 2023-24: Net Sales reached ₹11,118 crores (5.4% YoY growth); EBITDA scaled to ₹2,550 crores (37.4% expansion due to lower input chemical costs); Profit After Tax (PAT) stood at ₹1,792 crores (excluding exceptional items, representing a 42.6% surge); Earnings Per Share (EPS) was ₹35.3 per share (+42.9%); Dividend Per Share was ₹16.0 (+45.5%); Book Value Per Share reached ₹164 (+17.2%).
- FY 2024-25: Net Sales reached ₹12,023 crores; EBITDA was ₹2,835 crores; PAT was ₹2,074 crores; EBITDA Margin % was 23.6%.
- FY 2025-26: Net Sales was ₹13,437 crores (+11.8% YoY compared to FY 24-25); EBITDA was ₹3,300 crores (+16.4% YoY); PAT was ₹2,384 crores (+15.0% YoY; or ₹2,392 crores excluding exceptional items, representing a 14.2% YoY increase); EBITDA Margin % was 24.6% (+100 bps); EPS was ₹23.5 per share (+14.2% YoY).
- Dividend (FY 2025-26): Proposed dividend of ₹16.5 per share (a 65% increase YoY compared to ₹10.0 in FY 24-25), with a proposed final dividend of ₹11.5 per share adjusted following a 1:1 bonus share allotment in September 2025.

Consolidated Group Performance:
- Consolidated Net Sales: grew by 5.0% in FY 23-24; reached ₹13,094 crores in FY 24-25; climbed 11.1% to ₹14,553 crores in FY 25-26.
- Consolidated EBITDA: grew by 36.4% in FY 23-24 before non-operating income.
- Consolidated Net Profit (PAT): Profit Before Tax and Exceptional Items jumped by 42.2% in FY 23-24, while standard PAT posted a 35.6% expansion. In FY 25-26, PAT reached ₹2,471 crores (an 17.9% increase from ₹2,096 crores in FY 24-25).
- Subsidiaries:
  - FY 2023-24: Domestic subsidiaries grew sales by 15.8% and EBITDA by 32.3%; international businesses declined 7.4% in constant currency sales due to regional headwinds, but EBITDA grew 14.9%.
  - FY 2025-26: Overseas subsidiaries constant currency sales grew by 6.3% (EBITDA up 14.5%) despite short-term supply shocks; domestic subsidiaries sales grew 7.6% (EBITDA up 7.4%).

Core Business Volume Growth & Segment Performance:
- Standalone Underlying Volume Growth (UVG) FY 2025-26: Accelerated by 11.1% for the full year.
- Consumer & Bazaar (C&B) Segment: Contributes roughly 80% to 81.6% of standalone operations. In FY 25-26, revenue climbed 12.2% to ₹10,837 crores (annual UVG of 11.1%).
  - Adhesives & Sealants (Fevicol, Fevikwik, etc.) generated 53.4% of total sales, growing 9.4%.
  - Construction & Paint Chemicals (Dr. Fixit, Roff) made up 22.6% of total sales, growing 20.3%.
  - Art & Craft Materials contributed 5.6% of sales, growing 7.4%.
- Business-to-Business (B2B) Segment: Revenue grew 8.1% to reach ₹2,800 crores in FY 25-26, with an annual UVG of 11.2%.

Strategic Marketing Focus and Brand Actions:
- FY 2023-24 Actions:
  - Dr. Fixit Roofseal: Consumer education campaign on specialized waterproofing over traditional roof paints.
  - Roff: Quirky campaign on tile debonding and cracking caused by conventional cement mixtures to drive migration to premium tile adhesives; partnered with the Pro Kabaddi League.
  - Fevikwik: Introduced Fevikwik Advanced (waterproof quick-fixes) and Fevikwik Gel (30-second alignment adjustment).
  - Araldite: "Jode Kuch Bhi" outdoor campaign with a real road roller suspended in mid-air in Mumbai and Delhi.
  - Fevicreate: Hosted the Idealabs national art & science contest, broadcasting the finale on Nickelodeon, Sonic, and Jio Cinema.
- FY 2024-25 Focus: "The Invisible Foundation" targeting structural durability and waterproofing.
- Brand Actions & Campaigns (FY 2024-25 & FY 2025-26):
  - Fevicol: "Jugalbandi" TVC and "Teeka ID" / "Kala Teeka" QR campaign at Maha Kumbh (won Gold at CNBC Storyboard, ET Shark, and ET Kaleido Awards).
  - Dr. Fixit: "Waterproofing Ka Baap" with Amitabh Bachchan, WPL 2026 partner, and KBC Season 17 integration.
  - Fevikwik: AI-led 'KwikGPT' campaign and 'Anniversary' TVC.
  - Roff: Bigg Boss Tamil and Telugu integrations, sponsored Asia Cup 2025.

Corporate Social Responsibility (CSR) & Community Initiatives:
- Agriculture & FPO: Bandhutva FPO scaled to 2,034 members with a ₹42 crores turnover in FY 25-26. Agricultural programs helped over 1 lakh farmers in FY 23-24 achieve elevated incomes via cotton/onion yield improvements and subsidized inputs/rental tools.
- Water Management: Deepening of farm ponds and check dams in Gujarat, conserving millions of liters of water in water-stressed regions.
- Healthcare & Social Care: Funded oncology treatments for over 320 patients via Cancer Patients Aid Association (CPAA) and caregiver networks through the B K Parekh Parkinson’s Disease and Movement Disorder Society.
- Tree Plantation: Planted 4.46 lakh trees in FY 25-26 (cumulative total 24.46 lakh) in partnership with the Gujarat State Forest Department.
- Women Empowerment: 250 new SHGs formed in FY 25-26, total 1,602 supporting 17,190 women.`,
  },
];

// ------------------------------------------------------------
//  FAQs (verbatim questions and key facts from the website)
// ------------------------------------------------------------
export const faqs: FAQ[] = [
  {
    q: "Who is the founder of Pidilite?",
    a: "Pidilite was founded in 1959 by Shri Balvantray Kalyanji Parekh, who built a legacy of innovation and excellence in industrial adhesives and bonding solutions.",
  },
  {
    q: "What is Pidilite's flagship brand?",
    a: "Pidilite's flagship brand is Fevicol, which is the leading brand of adhesives in India and has become synonymous with strong bonding.",
  },
  {
    q: "What solutions does Dr. Fixit provide?",
    a: "Dr. Fixit provides a comprehensive range of waterproofing solutions and construction chemicals, widely known as the 'Waterproofing ka Doctor' to prevent leakage and dampness.",
  },
  {
    q: "What are the main business segments of Pidilite?",
    a: "Pidilite operates in two primary segments: Consumer & Bazaar (C&B), which includes retail adhesives, sealants, construction chemicals, and art/craft materials; and Business to Business (B2B), providing specialty chemicals and industrial products.",
  },
  {
    q: "Where is the head office of Pidilite located?",
    a: "Pidilite's corporate office is located on Ramkrishna Mandir Road, Off Sir Mathuradas Vasanji Road, Andheri East, Mumbai, Maharashtra, India.",
  },
  {
    q: "How can I contact Pidilite consumer service?",
    a: "You can contact Pidilite consumer service by calling their toll-free number: 1800-266-6066.",
  },
];
