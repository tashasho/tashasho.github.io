// ======================================
// CONTENT DATA — Typed data structures
// ======================================

export interface Experience {
  firm: string;
  firmUrl?: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  details: string[];
  tags: string[];
  links?: { text: string; url: string }[];
}

export interface Project {
  icon: string;
  name: string;
  num: string;
  summary: string;
  details: string;
  impact: string;
  tags: string[];
  github: string;
  liveDemo?: string;
}

export interface ResearchItem {
  num: string;
  title: string;
  titleUrl?: string;
  supervisor: string;
  summary: string;
  details: string;
  findings: string[];
  link?: { text: string; url: string };
}

export interface WritingCard {
  num: string;
  title: string;
  url: string;
}

export interface Award {
  icon: string;
  year: string;
  title: string;
  sub: string;
}

export interface Sidequest {
  icon: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
}

export interface ContactLink {
  type: string;
  value: string;
  url: string;
  external?: boolean;
}

export interface Skill {
  icon: string;
  name: string;
}

export interface StatBar {
  label: string;
  width: number;
  value: string;
  colorClass: string;
}

export interface FloatingIconConfig {
  src: string;
  size: number;
}

// ======================================
// EXPERIENCES
// ======================================
export const experiences: Experience[] = [
  {
    firm: 'Z5 Capital',
    firmUrl: 'https://www.z5.capital/',
    role: 'Venture Capital Intern',
    dates: 'Aug 2025 – Apr 2026',
    location: 'Palo Alto, CA / Remote',
    summary: 'Built AI underwriting engine and deal-flow automation for a $50M fund, driving +42% pipeline conversion.',
    details: [
      'Architected <strong><a href="https://github.com/tashasho/Nexus9---A-Startup-Risk-Analyser" target="_blank" rel="noopener">Nexus-9</a></strong>, a 4-agent AI underwriting engine deployed in live IC deal review — Monte Carlo stress-testing (n=10,000), Black Swan scenarios, Bayesian founder-bias correction, and Runway AI psychometric games (r = 0.38–0.61 with deal outcomes).',
      'Engineered end-to-end <a href="https://github.com/tashasho/dealflow" target="_blank" rel="noopener">deal-flow automation</a>: IMAP stealth-sourcing parser, Affinity CRM relational mapping, IC memo auto-generation, and <a href="https://github.com/tashasho/sec-filings" target="_blank" rel="noopener">SEC Filings Analyzer</a> — drove <strong>+42% sourced-to-pipeline conversion</strong> for a $50M fund.',
      'Led <strong>150+ founder calls</strong> across 368 sourced startups; pushed 17 to dealflow pipeline and supported 2 SPV launches.',
    ],
    tags: ['Python', 'Multi-agent AI', 'Monte Carlo', 'Affinity CRM', 'FastAPI'],
  },
  {
    firm: 'Beyond Next Ventures',
    firmUrl: 'https://beyondnextventures.com/',
    role: 'Venture Capital Intern',
    dates: 'May – Jul 2025',
    location: 'Bengaluru',
    summary: 'Automated inbound sourcing, cutting analyst review time 83% daily for a ¥50B Japan–India fund.',
    details: [
      'Automated inbound sourcing across Affinity CRM, Python & Zapier — <strong>cut analyst review time 83% daily</strong>, unblocking evaluation of 3,500+ startups for a ¥50B Japan–India fund.',
      'Led market sizing for 6 deep-tech targets; built co-investor pipeline of <strong>118 micro-VCs</strong> for Japan→India deal syndication.',
    ],
    tags: ['Zapier', 'Affinity', 'n8n', 'Japan–India corridor'],
  },
  {
    firm: 'Grad Capital',
    role: 'Associate',
    dates: 'Oct – Nov 2024',
    location: 'Bengaluru / Remote',
    summary: 'Sourced 200+ startups, led 35+ founder calls — 8 pushed to pipeline, 2 funded.',
    details: [
      'Sourced 200+ startups across IIT KGP & Ashoka; led 35+ founder calls — <strong>8 pushed to pipeline, 2 funded</strong>. Built Virtual Data Room improving efficiency by 30%.',
    ],
    tags: ['Deal Sourcing', 'Pitch Reports', 'Data Room'],
  },
];

// ======================================
// PROJECTS
// ======================================
export const projects: Record<string, Project[]> = {
  vcTools: [
    {
      icon: '/images/Farm_Computer.png',
      name: 'Nexus-9',
      num: 'T-001',
      summary: '4-agent AI underwriting engine for live IC deal review.',
      details: 'Monte Carlo stress-testing, Black Swan scenario modelling, Bayesian founder-bias correction, and psychometric game-based founder assessment.',
      impact: 'TVPI: 1.24× → 1.91× · 54% reduction in Type II errors',
      tags: ['TypeScript', 'Multi-agent', 'Monte Carlo', 'React'],
      github: 'https://github.com/tashasho/Nexus9---A-Startup-Risk-Analyser',
    },
    {
      icon: '/images/Shipping_Bin_Anim.gif',
      name: 'Deal-Flow Engine',
      num: 'T-002',
      summary: 'Enterprise AI deal flow pipeline with multi-channel sourcing.',
      details: 'Sourcing from LinkedIn, GitHub Trending, Twitter/X, Product Hunt, Hacker News, Reddit. Gemini 2.0 scoring, Slack-native triage, and automated cold outreach.',
      impact: '+42% sourced-to-pipeline conversion · 10–20 deals/day',
      tags: ['Python', 'FastAPI', 'Gemini AI', 'Slack', 'Airtable'],
      github: 'https://github.com/tashasho/dealflow',
    },
    {
      icon: '/images/Scroll.png',
      name: 'SEC Filings Analyzer',
      num: 'T-003',
      summary: 'Parses SEC Form D filings for investment landscape insights.',
      details: 'Extracts NDR trends, revenue multiples, and M&A triggers from S-1s and 10-Ks at a fraction of analyst time.',
      impact: 'Automated extraction across S-1 / 10-K / Form D corpus',
      tags: ['Python', 'NLP', 'Transformers', 'Plotly'],
      github: 'https://github.com/tashasho/sec-filings',
    },
    {
      icon: '/images/Magnifying_Glass.png',
      name: 'Inbound Sourcing Workflow',
      num: 'T-004',
      summary: 'Automated inbound deal evaluation cutting analyst time 83%.',
      details: 'Integrates Affinity CRM, Python, and Zapier. Enabled coverage of 3,500+ startups at a ¥50B Japan–India fund.',
      impact: '83% analyst time reduction · 3,500+ startups evaluated',
      tags: ['Zapier', 'Affinity', 'Python', 'n8n'],
      github: 'https://github.com/tashasho',
    },
    {
      icon: '/images/Star_Shards.png',
      name: 'Startup Investments Patterns',
      num: 'T-005',
      summary: 'Crunchbase investment pattern analysis (2013 data).',
      details: 'Data analysis to understand why certain investments worked or didn\'t. Pattern recognition across funding rounds, sectors, and outcomes.',
      impact: 'Crunchbase pattern analysis',
      tags: ['Python', 'Data Analysis', 'Crunchbase'],
      github: 'https://github.com/tashasho/Startup-Investments-Patterns-2013-Crunchbase',
    },
  ],
  startupTools: [
    {
      icon: '/images/Iridium_Axe.png',
      name: 'Forge',
      num: 'S-001',
      summary: 'AI-powered resource orchestration for founders.',
      details: 'Helps early-stage teams find the right resources, connections, and operational support. Built on Next.js with Supabase backend.',
      impact: 'Full-stack founder tooling · Next.js + Supabase',
      tags: ['TypeScript', 'Next.js', 'Supabase', 'React'],
      github: 'https://github.com/tashasho/forge',
    },
    {
      icon: '/images/Book.png',
      name: 'thinkor',
      num: 'S-002',
      summary: 'A thinking-out-loud companion for Claude prompting.',
      details: 'Helps iterate on prompts through structured conversation and reflection — bridging the gap between what you want and what you ask for.',
      impact: 'Claude prompting assistant',
      tags: ['Python', 'LLM', 'Prompting'],
      github: 'https://github.com/tashasho/thinkor',
    },
    {
      icon: '/images/Mail.png',
      name: 'Social Media Automator',
      num: 'S-003',
      summary: 'End-to-end social media posting automation for X and LinkedIn.',
      details: 'Handles the full content pipeline from creation to posting so you stop wasting time on 1mm alignments in Canva.',
      impact: 'Automated X + LinkedIn posting pipeline',
      tags: ['Python', 'API', 'Automation'],
      github: 'https://github.com/tashasho/social-media-posting-automator',
    },
  ],
  sideBuilds: [
    {
      icon: '/images/Treasure_Chest.png',
      name: 'CityScope',
      num: 'X-001',
      summary: 'Stardew Valley-style pixel art event maps for Indian cities.',
      details: 'Zero-dependency, pure HTML5 Canvas at 60fps. Renders live events across Bengaluru and Mumbai as a fully interactive retro game world.',
      impact: 'Zero dependencies · Pure Canvas · 75+ live events',
      tags: ['HTML5 Canvas', 'JavaScript', 'Pixel Art'],
      github: 'https://github.com/tashasho/cityscope',
      liveDemo: 'https://cityscope-tau.vercel.app',
    },
  ],
};

// ======================================
// RESEARCH
// ======================================
export const research: ResearchItem[] = [
  {
    num: '01',
    title: 'A Probabilistic & AI-Augmented Framework for Early-Stage VC',
    titleUrl: 'https://drive.google.com/drive/folders/1XtRsE7VuXNdXhJYwnLFzW2u-VarO93W4?usp=sharing',
    supervisor: 'Prof. T. Bhattacharjee · IIT Kharagpur · 2025–2026 · BTP',
    summary: 'Bayesian odds-ratio framework formalising cognitive biases in VC underwriting, calibrated on 500+ Indian deep-tech deals.',
    details: 'Developed the Bias-Adjusted Valuation (BAV) model. Extended to a dynamic Ornstein–Uhlenbeck process with signalling-game equilibrium, proving a chilling effect on patent disclosure under information asymmetry. Copula-based portfolio extension revealed severe tail-risk underestimation.',
    findings: ['β_geo ≈ 0.22 geographic bias', '$67M alpha per $100M fund', '2.4× tail-risk underestimation', '54% ↓ Type II errors', 'TVPI 1.24× → 1.91×'],
    link: { text: 'View Full BTP Work', url: 'https://drive.google.com/drive/folders/1XtRsE7VuXNdXhJYwnLFzW2u-VarO93W4?usp=sharing' },
  },
  {
    num: '02',
    title: 'Overcoming Subjectivity Bias by Feature Modelling',
    titleUrl: 'https://drive.google.com/drive/folders/1XtRsE7VuXNdXhJYwnLFzW2u-VarO93W4?usp=sharing',
    supervisor: 'Prof. T. Bhattacharjee · IIT Kharagpur · 2025',
    summary: 'SVM RBF regression predicting startup valuation across 15+ features.',
    details: 'Optimised with sigmoid threshold tuning for VC risk-aligned readiness scoring.',
    findings: ['>80% valuation accuracy', 'F1 = 0.77 on synthetic data'],
  },
  {
    num: '03',
    title: 'Game-Theoretic Optimisation on Corruption Networks',
    supervisor: 'Prof. Dripto Bakshi · IIT Kharagpur · 2024',
    summary: '2-way mathematical optimisation (path & cost) on political social networks as directed graphs.',
    details: '48% success rate via reward-based routing on large organisational DAGs.',
    findings: ['48% routing success rate', 'Directed graph optimisation'],
  },
];

// ======================================
// WRITING
// ======================================
export const writingCards: WritingCard[] = [
  { num: 'Note 01', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197348457' },
  { num: 'Note 02', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197348378' },
  { num: 'Note 03', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197347228' },
  { num: 'Note 04', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197337766' },
  { num: 'Note 05', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197337619' },
  { num: 'Note 06', title: 'Post Title Here', url: 'https://substack.com/home/post/p-197337244' },
];

// ======================================
// AWARDS
// ======================================
export const awards: Award[] = [
  { icon: '/images/Prismatic_Shard.png', year: '2020', title: 'NTSE National Scholar', sub: 'Top 0.1% among 1,000,000+ candidates · NCERT Government Scholarship' },
  { icon: '/images/Diamond.png', year: '2021', title: 'INSPIRE Fellowship · Govt. of India', sub: "Top 1% across India's national examinations" },
  { icon: '/images/Golden_Relic.png', year: '2024', title: 'National Runner-Up · LBO Case, MnAnalyse', sub: 'Premier National M&A Case Competition · IIT Guwahati' },
  { icon: '/images/Star_Shards.png', year: '2024', title: 'National Finalist · Insight Masters (ISB Hyderabad)', sub: 'Business Analytics · AWL Resolve, IIM Ahmedabad' },
  { icon: '/images/Stardrop.png', year: '2023', title: 'Silver Contingent · ACWG Debate, G20', sub: 'Best Debater · Sahodaya Regional · Broke at LSRPD, DTU PD' },
];

// ======================================
// SIDEQUESTS
// ======================================
export const sidequests: Sidequest[] = [
  {
    icon: '/images/Dwarf_Scroll_II.png',
    title: 'Debating',
    tag: 'Public Discourse',
    summary: 'Silver Contingent at ACWG G20 Debate. Broke at LSRPD and DTU PD.',
    details: 'Winner, IIT KGP Debating Society Intras. Debating taught me that every argument has a structure — and that structure is almost always the thing being contested, not the surface claim.',
  },
  {
    icon: '/images/Sunflower.png',
    title: 'Period — The Menstrual Movement',
    tag: 'Social Founding',
    summary: 'Founded the Ujjain chapter of Period, a global menstrual health org.',
    details: 'Built community programs from scratch in a tier-2 city — which turns out to require the same skills as deal sourcing: find people, build trust, move things without authority.',
  },
  {
    icon: '/images/Secret_Note.png',
    title: 'Journalism',
    tag: 'Writing',
    summary: 'Youngest journalist at the Free Press Journal.',
    details: 'Learned early that the most important sentence is always the first one, and that clarity is a form of respect for the reader — something I now apply to IC memos.',
  },
  {
    icon: '/images/Dwarf_Gadget.png',
    title: 'Robotics',
    tag: 'Hardware',
    summary: 'Silver medal, Aavishkar International Robotics Championship.',
    details: 'Building things that move in the physical world is a good antidote to spending too much time in models and abstractions.',
  },
  {
    icon: '/images/Rare_Disc.png',
    title: 'Music & Art',
    tag: 'Creative Practice',
    summary: '2x Gold in Anuvrat National Singing. Gold in State Art Competition.',
    details: 'Merit, Gandharva Mahavidyalaya. Creative practice is where I learned that getting something right and making it beautiful are not the same problem — and both matter.',
  },
];

// ======================================
// ABOUT TEXT
// ======================================
export const aboutText = {
  summary: 'Final-year Mathematics & Computing student at IIT Kharagpur, graduating 2026. Three VC internships across Palo Alto, Bengaluru, and Japan–India corridor.',
  paragraphs: [
    'I\'m a final-year Mathematics & Computing student at <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noopener">IIT Kharagpur</a>, graduating in 2026. I ended up in VC not by accident but by chasing a specific question: why does the way investment decisions get made so rarely reflect the actual mathematics of uncertainty?',
    'That question has taken me across three funds — <strong><a href="https://www.z5.capital/" target="_blank" rel="noopener">Z5 Capital</a></strong> in Palo Alto, <strong><a href="https://beyondnextventures.com/" target="_blank" rel="noopener">Beyond Next Ventures</a></strong> in Bengaluru, and <strong>Grad Capital</strong> — and through a year of <a href="https://drive.google.com/drive/folders/1XtRsE7VuXNdXhJYwnLFzW2u-VarO93W4?usp=sharing" target="_blank" rel="noopener">supervised research</a> with Prof. Bhattacharjee formalising those intuitions into working models. The tools I\'ve built aren\'t portfolio projects; they run in live IC environments.',
    'I\'m looking for a full-time analyst seat at an early-stage fund — ideally deep-tech, AI, or India corridor — where the technical depth I bring actually changes how investment decisions get made. Based in Bengaluru, open across India.',
    'Outside investing: I debate (broke at LSRPD, G20 Silver contingent), founded a social chapter in Ujjain, was the youngest journalist at the Free Press Journal, and I <a href="https://substack.com/@bhumikamarmat" target="_blank" rel="noopener">write on Substack</a>. I think clearly in public.',
  ],
};

// ======================================
// CONTACT LINKS
// ======================================
export const contactLinks: ContactLink[] = [
  { type: 'Email', value: 'bhumika.marmat@gmail.com', url: 'mailto:bhumika.marmat@gmail.com' },
  { type: 'LinkedIn', value: 'linkedin.com/in/bhumikamarmat', url: 'https://linkedin.com/in/bhumikamarmat', external: true },
  { type: 'GitHub', value: 'github.com/tashasho', url: 'https://github.com/tashasho', external: true },
  { type: 'Substack', value: 'substack.com/@bhumikamarmat', url: 'https://substack.com/@bhumikamarmat', external: true },
];

// ======================================
// SKILLS
// ======================================
export const skills: Skill[] = [
  { icon: '/images/Coffee.png', name: 'Python' },
  { icon: '/images/Star_Shards.png', name: 'Monte Carlo' },
  { icon: '/images/Magnifying_Glass.png', name: 'Bayesian Inference' },
  { icon: '/images/Farm_Computer.png', name: 'FastAPI' },
  { icon: '/images/Iridium_Axe.png', name: 'React' },
  { icon: '/images/Diamond.png', name: 'TypeScript' },
  { icon: '/images/Prismatic_Shard.png', name: 'Multi-Agent AI' },
  { icon: '/images/Book.png', name: 'Affinity CRM' },
  { icon: '/images/Scroll.png', name: 'NLP' },
  { icon: '/images/Galaxy_Soul.png', name: 'Transformers' },
  { icon: '/images/Quartz.png', name: 'XGBoost' },
  { icon: '/images/Treasure_Chest.png', name: 'Game Theory' },
  { icon: '/images/Starfruit.png', name: 'Stochastic Processes' },
  { icon: '/images/Golden_Key.png', name: 'Next.js' },
  { icon: '/images/Golden_Relic.png', name: 'Supabase' },
  { icon: '/images/Melon.png', name: 'Zapier' },
  { icon: '/images/Apple.png', name: 'n8n' },
  { icon: '/images/Stardrop.png', name: 'Gemini AI' },
];

// ======================================
// STAT BARS
// ======================================
export const statBars: StatBar[] = [
  { label: 'Pipeline', width: 82, value: '+42%', colorClass: '' },
  { label: 'Automation', width: 83, value: '83%', colorClass: 'accent' },
  { label: 'Startups', width: 95, value: '3,500+', colorClass: 'gold' },
  { label: 'Alpha', width: 78, value: '$67M', colorClass: 'blue' },
];

// ======================================
// FLOATING ICONS CONFIG
// ======================================
export const floatingIconsConfig: FloatingIconConfig[] = [
  { src: '/images/Stardrop.png', size: 40 },
  { src: '/images/Star_Shards.png', size: 36 },
  { src: '/images/Coffee.png', size: 32 },
  { src: '/images/Cat.gif', size: 44 },
  { src: '/images/Starfruit.png', size: 34 },
  { src: '/images/Pancakes.png', size: 36 },
  { src: '/images/Prismatic_Slime.gif', size: 40 },
  { src: '/images/Golden_Chicken.png', size: 36 },
  { src: '/images/Dandelion.png', size: 28 },
  { src: '/images/Sunflower.png', size: 32 },
  { src: '/images/Tulip.png', size: 28 },
  { src: '/images/Treasure_Chest.png', size: 38 },
  { src: '/images/Melon.png', size: 30 },
  { src: '/images/Strawberry.png', size: 28 },
  { src: '/images/Dog.gif', size: 40 },
  { src: '/images/Blue_Chicken.png', size: 34 },
  { src: '/images/Grape.png', size: 26 },
  { src: '/images/Apple.png', size: 28 },
  { src: '/images/Iridium_Bat_Anim.gif', size: 36 },
  { src: '/images/Golden_Relic.png', size: 32 },
];
