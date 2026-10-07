// Central data source for all projects. Edit here — Home Bento grid
// and individual case-study pages both read from this file.
//
// Every project follows the "First Line" design system: neutral base,
// one accent color, 1px borders, 12-col grid, fade/translate motion only.

export const projects = [
  {
    slug: "first-line",
    name: "First Line",
    tagline: "This portfolio — the origin of a consistent product design system.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    status: "Production",
    size: "large",
    color: "#2563EB",
    image: "/projects/first-line/first-line-main.webp",
    problem:
      "Most developer portfolios default to templated hero sections and generic card grids that don't demonstrate real frontend craft or attention to detail.",
    research:
      "Studied the design language of Linear, Vercel, Stripe and Raycast to define a strict visual system: a 12-column grid, a fixed neutral palette with one accent color, and a single motion philosophy with no bouncy springs.",
    process:
      "Built the design tokens first (colors, type, spacing) as CSS theme variables, then composed every section as independent components sharing the same rhythm and easing curve — establishing the base system every later project reuses.",
    designNotes:
      "A near-white, high-contrast interface with a single accent color, generous whitespace, and a subtle millimeter-paper grid in the background instead of decorative imagery.",
    technologies: [
      { name: "React (Vite)", note: "Component-driven SPA frontend." },
      { name: "Tailwind CSS", note: "Utility-first styling on a strict 12-column grid." },
      { name: "Framer Motion", note: "200–400ms fade/translate/small-scale transitions, no springs." },
      { name: "React Router", note: "Full case-study pages instead of modals." },
      { name: "React Hook Form", note: "Validated contact form interface." },
    ],
    result:
      "A production-ready portfolio that doubles as the design system for the projects presented in this collection.",
    learnings:
      "Defining the motion easing curve and duration range once, up front, made every later animation decision simpler — consistency came from constraint, not extra effort.",
    demo: null,
    code: null,
  },

  {
    slug: "businessflow",
    name: "BusinessFlow",
    tagline: "Admin panel for small businesses — clients, invoices, inventory, reports.",
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    year: "2026",
    status: "Production",
    size: "tall",
    color: "#2563EB",
    image: "/projects/businessflow/businessflow-main.webp",
    problem:
      "Small businesses run on spreadsheets and disconnected tools for clients, invoicing, and inventory — nothing talks to anything else, and reporting means manual copy-paste.",
    research:
      "Mapped a real small-business workflow end to end: onboarding a client, issuing an invoice, tracking stock, and pulling a monthly report — then designed one schema that supports all four without duplication.",
    process:
      "Built the data model first in PostgreSQL, then a single dashboard shell with authenticated sections for each module, following the same component system as First Line.",
    designNotes:
      "Dense, data-heavy tables that stay legible through spacing and hierarchy rather than color — the accent is reserved for actionable states only.",
    technologies: [
      { name: "React", note: "Dashboard shell and module-based routing." },
      { name: "Supabase", note: "Authentication and database infrastructure." },
      { name: "PostgreSQL", note: "Relational data model for business records." },
      { name: "Tailwind CSS", note: "Consistent, data-dense layout system." },
    ],
    result:
      "A working admin panel designed as a practical foundation for small-business management.",
    learnings:
      "Designing the schema around the business processes first, before the screens, made the application easier to structure into independent modules.",
    demo: null,
    code: null,
  },

  {
    slug: "voice-master-pipeline",
    name: "Voice Master Pipeline",
    tagline:
      "Python automation for intelligent narration-style audio processing.",
    stack: ["Python", "DSP", "Audio Processing"],
    year: "2026",
    status: "In Development",
    size: "wide",
    color: "#2563EB",
    problem:
      "Processing voice recordings manually can require repeated adjustments and produces inconsistent results from one recording to another.",
    research:
      "The project explores an adaptive processing pipeline that analyzes an input recording, determines what it needs, applies only the necessary processing, and verifies the result.",
    process:
      "Developed the processing architecture in stages, testing individual audio-processing operations before combining them into an automated pipeline designed around different delivery targets.",
    designNotes:
      "The main design principle is restraint: analyze first, preserve what already works, then improve only what actually needs correction.",
    technologies: [
      { name: "Python", note: "Core automation and processing logic." },
      { name: "DSP", note: "Audio analysis and signal-processing concepts." },
      { name: "Automated Processing", note: "Pipeline-based processing and verification." },
    ],
    result:
      "An evolving audio-processing system designed to turn raw recordings into destination-ready audio with minimal manual intervention.",
    learnings:
      "The project reinforced that processing order and verification matter as much as the individual audio tools themselves.",
    demo: null,
    code: null,
  },

  {
    slug: "reservehub",
    name: "ReserveHub",
    tagline:
      "Planned booking platform for hospitality and service businesses.",
    stack: ["React", "Vite", "Supabase", "PostgreSQL"],
    year: "Planned",
    status: "Planning",
    size: "medium",
    color: "#2563EB",
    problem:
      "Businesses such as hotels, vacation rentals and other service providers need a way to manage reservations, availability and customer information through a system they control.",
    research:
      "The project is planned around reservation availability, resources, time slots, confirmations and business-side management.",
    process:
      "The project has not been built yet. Its architecture, database model, booking flow and business requirements will be defined and developed as a future project.",
    designNotes:
      "The intended experience is centered around a clear booking flow, straightforward availability information and a management interface for the business.",
    technologies: [
      { name: "React", note: "Planned frontend application." },
      { name: "Supabase", note: "Planned backend and database infrastructure." },
      { name: "PostgreSQL", note: "Planned relational data model." },
    ],
    result:
      "Future project currently in the planning stage.",
    learnings:
      "The project will be used to explore how a reusable reservation architecture can adapt to different types of service businesses.",
    demo: null,
    code: null,
  },

  {
    slug: "supportdesk",
    name: "SupportDesk",
    tagline:
      "Planned customer-support and ticket management system.",
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    year: "Planned",
    status: "Planning",
    size: "wide",
    color: "#2563EB",
    problem:
      "Small teams need a structured way to manage customer requests, ticket ownership, statuses and support workflows without relying entirely on shared inboxes.",
    research:
      "The project is planned around ticket lifecycles, user roles, support queues, status tracking and customer-facing submissions.",
    process:
      "The project has not been built yet. Its requirements, database structure, interface and workflow will be defined before development begins.",
    designNotes:
      "The intended interface focuses on a clear ticket queue, readable status information and a straightforward workflow for both support agents and customers.",
    technologies: [
      { name: "React", note: "Planned dashboard and ticket interface." },
      { name: "Supabase", note: "Planned authentication and database infrastructure." },
      { name: "PostgreSQL", note: "Planned ticket and user data model." },
      { name: "Tailwind CSS", note: "Planned interface styling system." },
    ],
    result:
      "Future project currently in the planning stage.",
    learnings:
      "The project will be used to explore the design and implementation of a focused customer-support workflow.",
    demo: null,
    code: null,
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);