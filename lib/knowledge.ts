// ============================================================
//  Rubenius & REDSxP™ — single source of truth (knowledge base)
//  Everything the voice assistant is allowed to know and say lives
//  in THIS file. The assistant must not use any information that is
//  not contained below.
//  Sources: https://www.rubenius.in/ and https://redsxp.com/
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
    "Hello, and welcome to Rubenius and REDSxP™. I'm Tara, your guide. I can tell you about our workspace designs, experience centres, the REDS™ framework, or our studio in Bangalore. What would you like to discuss today?",
};

// ------------------------------------------------------------
//  Company / project
// ------------------------------------------------------------
export const company = {
  name: "Rubenius",
  tagline: "Interior Wellbeing™ & Experiential Design",
  location: "Bangalore, India (Bangalore Experience Lab / REDSxP™ Studio)",
  developer: "Rubenius",
  contact: {
    website: "https://redsxp.com",
    enquiry:
      "Request a studio tour of our Bangalore Experience Lab, or start a project using the contact options on our website.",
    social: {
      instagram: "@rubenius_interiors",
      facebook: "RubeniusInt",
      x: "@rubenius_interiors",
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
      "REDSxP™ is an Experience Design Consultant model by Rubenius, creating experience centres, innovation labs, and brand customer experiences for leading enterprises.",
    keywords: [
      "rubenius",
      "redsxp",
      "overview",
      "experience design",
      "workspace design",
      "experience centre",
      "innovation lab",
      "brand equity",
    ],
    content: `REDSxP™ (developed by Rubenius) is an end-to-end experiential delivery model. It connects strategy, storytelling, technology, craft, psychology, and performance into one system to shape, build, and deliver brand environments. It aligns spatial design with human behavior to build brand equity and create intentional, performance-driven environments. Rubenius also designs future-ready workspaces, premium office interiors, and commercial spaces with sustainable, tech-driven solutions under the philosophy of Interior Wellbeing™.`,
  },
  {
    slug: "/system",
    title: "The REDS™ System Framework",
    summary:
      "REDS™ (Rubenius Experiential Design System) is a codified experience design system built on six concurrent pillars and four stages.",
    keywords: [
      "reds",
      "framework",
      "six pillars",
      "four stages",
      "decode",
      "design",
      "develop",
      "deploy",
      "strategy",
      "storytelling",
      "technology",
      "craft",
      "psychology",
      "performance",
    ],
    content: `REDS™ is a structured methodology for engineering space to change how people think, feel, behave, and perform. It is governed by:
1. Six Pillars (applied concurrently):
   - Strategy: Intent before design; business outcomes define spatial decisions.
   - Storytelling: Journey structured as a narrative (Arrival, Orientation, Engagement, Climax, Resolution).
   - Technology: Integrated into architecture as infrastructure, not ornament.
   - Craft: Precision of materials, light, sound, and detail that build trust.
   - Psychology: Design for real, observed human behavior and cognitive load.
   - Performance: Validated outcomes through Post-Occupancy Evaluation (POE+) at 30, 90, and 180 days.
2. The REDS Loop (four phases): Decode, Design, Develop, and Deploy with mandatory sign-off gates.`,
  },
  {
    slug: "/solutions",
    title: "Solutions & Engagement Models",
    summary:
      "Tailored solutions including Brand Centres, Innovation Labs, Retail/Hospitality, Public Centres, and engagement entry points like Sprints and Blueprints.",
    keywords: [
      "solutions",
      "engagement",
      "sprint",
      "blueprint",
      "brand centres",
      "innovation labs",
      "retail",
      "public experience",
      "system sprint",
    ],
    content: `REDSxP™ designs different physical formats:
- Brand Centres: Transforming complexity into clarity, fostering trust and alignment.
- Innovation Labs: Creating R&D, prototyping, and demonstration environments where abstract ideas are easier to test and adopt.
- Retail & Hospitality: Elevating guest memories and turning footfall into loyalty.
- Public Experience Centres: Communicating vital systems, stories, and civic purpose.
Engagement models to get started:
1. System Sprint: An entry point for teams seeking initial direction, brief decoding, and intent mapping.
2. Experience Blueprint: Mid-level package containing the experience brief, visitor journey, spatial narrative, technology layer, and partner brief.
3. Full REDSxP™ Environment: End-to-end strategy, experience design, content/media logic, technology integration, build alignment, and launch.`,
  },
  {
    slug: "/work",
    title: "Our Work & Case Studies",
    summary:
      "Realized experience environments for GCCs and technology leaders, including Smart Grid Experience Centres and Hybrid Immersive Labs.",
    keywords: [
      "work",
      "projects",
      "cases",
      "smart grid",
      "energy",
      "gcc",
      "schneider",
      "bangalore",
    ],
    content: `Rubenius has delivered over 35,000+ sq ft of experience environments across energy, learning, technology, and brand spaces. A prominent example is the Smart Grid Experience Centre / Energy Experience Centre, which translates product complexity into customer clarity. Clients like Schneider Electric recognize the team's expertise: Vikas Srivastava (Head of Administration & Facility, R&D Center) shared: "Rubenius is an expert on experiential design. Our simulations to showcase our vision of the future were executed just the way we envisioned it. The team went beyond what was necessary to work within the budget."`,
  },
  {
    slug: "/about-us",
    title: "About Rubenius & REDS",
    summary:
      "A leading Bangalore-based Experience & Workspace Design Firm led by industry experts and innovators.",
    keywords: [
      "about us",
      "team",
      "praveen kumar",
      "sindhuja",
      "nebin",
      "rajesh das",
      "bangalore",
      "awards",
    ],
    content: `REDSxP™ and Rubenius are powered by a dedicated team of architects, strategists, and designers, including Praveen Kumar, Sindhuja, Rajesh Kumar Das, and Chief Architect & Spatial Designer Nebin Ashraf. Based in Bangalore, the studio is widely decorated, holding honors such as FOAID Awards (multiple years), Spaceiux, Lexus Design Award Finalist, ELDROK India, Kyoorius Design Awards, and D'source Design Awards.`,
  },
];

// ------------------------------------------------------------
//  FAQs (verbatim questions and key facts from the website)
// ------------------------------------------------------------
export const faqs: FAQ[] = [
  {
    q: "What is REDSxP™?",
    a: "REDSxP™ is an end-to-end experiential delivery model by Rubenius. It connects strategy, storytelling, technology, craft, psychology, performance, partners, and build logic into one accountable system for delivering brand environments like experience centres, innovation labs, and workspaces.",
  },
  {
    q: "Does REDSxP™ replace our existing architects or vendors?",
    a: "No, REDSxP™ does not replace them. We work collaboratively with your appointed architects, interior designers, fabricators, AV teams, and technologists. Rubenius owns and leads the experience spine so all components work seamlessly as one.",
  },
  {
    q: "Can REDSxP™ join an existing project?",
    a: "Yes. REDSxP™ can enter early, during design, or mid-project to review the current direction, identify gaps, align partners, and create a shared blueprint/experience logic.",
  },
  {
    q: "Do we need to know the exact solution before contacting REDSxP™?",
    a: "No. A clear business challenge or problem is enough. We can help decode the brief and recommend whether you need a brand centre, innovation lab, learning environment, retail showcase, or a hybrid format.",
  },
  {
    q: "How long does it take to design and build an experience center?",
    a: "A mid-scale experience center typically takes 8 to 14 months from strategic discovery through launch, covering the four phases (Decode, Design, Develop, Deploy) of the REDS Loop.",
  },
  {
    q: "What is the difference between an experience center designer and a traditional interior designer?",
    a: "An experience center designer begins with business strategy, narrative architecture, and behavioral outcomes to determine what a space does. A traditional interior designer focuses primarily on aesthetics, layout, and material selection (how a space looks).",
  },
  {
    q: "Why do most experience centers underperform?",
    a: "Most experience centers underperform because they are designed without defined business strategies, narrative structures, or post-launch measurements. They may look impressive in photos but fail to change visitor behavior or communicate the brand effectively.",
  },
  {
    q: "Where is the Rubenius studio located?",
    a: "Our studio and Bangalore Experience Lab are located in Bangalore, India.",
  },
];
