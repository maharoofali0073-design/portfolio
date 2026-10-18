// All personal content for the page lives here.

/** Prefix for files in /public so they resolve under any base path (e.g. GitHub Pages /repo/) */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export const PROFILE = {
  name: 'Maharoof Ali',
  firstName: 'maharoof',
  role: 'AI & Automation Engineer',
  tagline: 'i build custom ai & n8n workflows, tailored to your business',
  email: 'maharoofali0073@gmail.com',
  github: 'https://github.com/maharoofali0073-design',
  linkedin: 'https://www.linkedin.com/in/maharoof-ali-2ba39233b',
  // [YOUR PHOTO] Put a transparent-background PNG in /public (e.g. public/maharoof.png)
  // and set photo: '/maharoof.png'. Leave empty to show the 3D "MA" orb instead.
  photo: asset('maharoof.webp'),
};

export const ABOUT_TEXT =
  "Every workflow I build is custom-made around how your business actually works. I connect AI models to Shopify, Slack, Google Sheets and Gmail, and my automations run unattended in production, with validation, quality gates and human-in-the-loop approvals. Tell me the process, and let's automate something incredible together!";

export const CUSTOM_PITCH = {
  heading: 'Custom-built, never one-size-fits-all',
  text: "I build every workflow to order: your tools, your rules, your process. Describe what takes up your team's time and I will design, build and ship an automation around it.",
};

export const SERVICES = [
  {
    name: 'AI Agents & LLMs',
    description:
      'OpenAI, Gemini and Groq wired into real business processes, with strict JSON output, quality checks and model fallbacks so bad AI output never ships.',
  },
  {
    name: 'n8n Automation',
    description:
      'End-to-end workflows that replace repetitive work: scheduled jobs, webhooks, data tables, error handling and human approval steps.',
  },
  {
    name: 'Shopify Automation',
    description:
      'SEO optimization, auto-blogging, order emails and product syndication for Shopify stores, built on the Admin API.',
  },
  {
    name: 'API Integrations',
    description:
      'REST APIs, webhooks and OAuth connections between Slack, Google Sheets, Gmail, YouTube, Meta and Pinterest.',
  },
  {
    name: 'Custom AI Services',
    description:
      'Python/FastAPI services when n8n alone is not enough, like a Docker-packaged clip engine built on Whisper, Gemini and ffmpeg.',
  },
];

// Marquee tiles: the 21 workflows/services from my n8n instance
export type Tile = { title: string; meta: string; tools: string; live?: boolean; badge?: string };

export const TILES: Tile[] = [
  { title: 'AI Shopify SEO Optimizer', meta: 'Schedule · every 5 h', tools: 'Groq · Shopify API', live: true },
  { title: 'AI SEO Blog Engine', meta: 'Schedule · daily', tools: 'Groq · Shopify Blog API', live: true },
  { title: 'Shopify Token Refresh', meta: 'Schedule · every 12 h', tools: 'OAuth · Data Tables', live: true },
  { title: 'Gumroad Multichannel Traffic', meta: 'n8n workflow', tools: 'Gumroad', live: true },
  { title: 'AI Recruitment Screening', meta: 'Webhook', tools: 'OpenAI · Slack · Gmail' },
  { title: 'YouTube Shorts Auto-Clipper', meta: 'n8n Form', tools: 'FastAPI · Whisper · Gemini' },
  { title: 'Lead Enrichment & Routing', meta: 'Webhook', tools: 'OpenAI · Slack · Sheets' },
  { title: 'Multi-Channel Social Autoposter', meta: 'Schedule · every 8 h', tools: 'Gemini · Meta · Pinterest' },
  { title: 'Lead Capture to Sheet & Slack', meta: 'Web form trigger', tools: 'Google Sheets · Slack' },
  { title: 'Weekly Sales Auto-Report', meta: 'Schedule · Mondays', tools: 'Google Sheets · Email' },
  { title: 'Shopify Order Thank-You Email', meta: 'On paid order', tools: 'Shopify · Email' },
  { title: 'Email Signup Welcome Flow', meta: 'Webhook', tools: 'Data Tables · Gmail' },
  { title: 'Amazon Affiliate Deal Poster', meta: 'Schedule · every 4 h', tools: 'AI captions · Telegram · Facebook' },
  { title: 'AI Customer Support Automation', meta: 'n8n workflow', tools: 'AI' },
  { title: 'AI Lead Generation & Qualification', meta: 'n8n workflow', tools: 'AI' },
  { title: 'Business Reporting & Analytics', meta: 'n8n workflow', tools: 'Reporting' },
  { title: 'AI YouTube Content Automation', meta: 'n8n workflow', tools: 'AI · YouTube' },
  { title: 'Pinterest Shopify Sales Engine', meta: 'n8n workflow', tools: 'Shopify · Pinterest' },
  { title: 'Shopify Access Token + Products', meta: 'n8n workflow', tools: 'Shopify Admin API' },
  { title: 'YouTube Bulk Auto Upload', meta: 'n8n workflow', tools: 'YouTube' },
  { title: 'Python Clip Engine', meta: 'FastAPI service', tools: 'yt-dlp · ffmpeg · Docker', badge: 'Python' },
];

export type FlowNode = { label: string; kind: 'trigger' | 'ai' | 'logic' | 'http' | 'app' | 'data' };

export const PROJECTS: {
  name: string;
  category: string;
  live: boolean;
  nodes: number;
  trigger: string;
  flow: FlowNode[];
  description: string;
  tech: string[];
}[] = [
  {
    name: 'AI Shopify SEO Optimizer',
    category: 'Live in production',
    live: true,
    nodes: 16,
    trigger: 'Every 5 hours',
    flow: [
      { label: 'Schedule', kind: 'trigger' },
      { label: 'Fetch products', kind: 'http' },
      { label: 'AI SEO agent', kind: 'ai' },
      { label: 'Quality gate', kind: 'logic' },
      { label: 'Update Shopify', kind: 'app' },
    ],
    description:
      'Rewrites SEO titles and meta descriptions for every product in a live Shopify store. An n8n AI agent drafts the copy, a validation step rejects anything off-spec, and approved results go back through the Shopify Admin API, batch by batch.',
    tech: ['n8n', 'Groq LLM', 'Shopify Admin API', 'JavaScript'],
  },
  {
    name: 'AI Recruitment Screening',
    category: 'Human-in-the-loop',
    live: false,
    nodes: 20,
    trigger: 'Webhook',
    flow: [
      { label: 'Application', kind: 'trigger' },
      { label: 'AI score', kind: 'ai' },
      { label: 'Route by score', kind: 'logic' },
      { label: 'Slack + Gmail', kind: 'app' },
      { label: 'Human approval', kind: 'logic' },
    ],
    description:
      'Scores applications against the job requirements with GPT-4o-mini, using a prompt that excludes protected characteristics. Strong candidates get a Slack alert and an interview email; every rejection waits for a recruiter. The AI never rejects anyone on its own.',
    tech: ['n8n', 'OpenAI', 'Google Sheets', 'Slack', 'Gmail'],
  },
  {
    name: 'YouTube Shorts Auto-Clipper',
    category: 'n8n + Python',
    live: false,
    nodes: 9,
    trigger: 'n8n Form',
    flow: [
      { label: 'Form', kind: 'trigger' },
      { label: 'Clip engine', kind: 'http' },
      { label: 'Gemini metadata', kind: 'ai' },
      { label: 'YouTube upload', kind: 'app' },
    ],
    description:
      'Turns a long video into vertical, captioned Shorts. n8n calls a FastAPI service I built (yt-dlp, faster-whisper, Gemini, ffmpeg, Docker) that finds the best moments and cuts 9:16 clips; Gemini writes the titles and clips upload as private for review.',
    tech: ['n8n', 'Python', 'FastAPI', 'Whisper', 'Docker'],
  },
  {
    name: 'AI SEO Blog Engine',
    category: 'Live in production',
    live: true,
    nodes: 11,
    trigger: 'Daily at 19:00',
    flow: [
      { label: 'Daily', kind: 'trigger' },
      { label: 'Pick product', kind: 'data' },
      { label: 'AI writer', kind: 'ai' },
      { label: 'Quality gate', kind: 'logic' },
      { label: 'Publish', kind: 'http' },
    ],
    description:
      "Publishes one long-form, SEO-targeted article a day for a product that hasn't been covered yet. A quality gate checks length, keyword and link before it posts to the Shopify blog, and each product is tracked so it's never repeated.",
    tech: ['n8n', 'Groq LLM', 'Shopify Blog API', 'Data Tables'],
  },
  {
    name: 'AI Lead Enrichment & Routing',
    category: 'Sales ops',
    live: false,
    nodes: 6,
    trigger: 'Webhook',
    flow: [
      { label: 'New lead', kind: 'trigger' },
      { label: 'AI enrich', kind: 'ai' },
      { label: '100+ staff?', kind: 'logic' },
      { label: 'Slack / Sheets', kind: 'app' },
    ],
    description:
      'Enriches each inbound lead with OpenAI (company size, industry, website, summary) and routes it: companies with 100+ employees alert sales in Slack, smaller ones go to a Google Sheets pipeline. Failed enrichment still lets the lead through safely.',
    tech: ['n8n', 'OpenAI', 'Slack', 'Google Sheets'],
  },
  {
    name: 'Multi-Channel Social Autoposter',
    category: 'Multi-channel',
    live: false,
    nodes: 13,
    trigger: 'Every 8 hours',
    flow: [
      { label: 'Schedule', kind: 'trigger' },
      { label: 'Pick product', kind: 'data' },
      { label: 'AI caption', kind: 'ai' },
      { label: 'Pinterest · FB · IG', kind: 'app' },
    ],
    description:
      'Every 8 hours, picks a product from the Shopify catalogue, writes a caption with Gemini (falling back to Llama 3.3 on Groq) and posts to Pinterest, a Facebook Page and Instagram. One failing channel never blocks the others.',
    tech: ['n8n', 'Gemini', 'Groq', 'Meta Graph API', 'Pinterest API'],
  },
];
