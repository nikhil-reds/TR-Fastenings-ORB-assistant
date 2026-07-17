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
