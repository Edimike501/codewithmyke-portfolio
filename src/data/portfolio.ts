/* --- Types --- */

export interface NavItem {
  name: string;
  link: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Software"
  | "SaaS"
  | "Startup";

export interface Project {
  id: string;
  title: string;
  description: string;
  architecture?: string;
  category: ProjectCategory;
  techStack: string[];
  image: string; // Path to image in public folder
  links: {
    demo?: string;
    github?: string;
  };
  featured: boolean;
}

export interface ArchitecturePillar {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  highlights: string[];
}

export interface ArchitectureData {
  title: string;
  subtitle: string;
  summary: string;
  pillars: ArchitecturePillar[];
}

export interface Partnership {
  companyName: string;
  role: string; // e.g., "Co-Founder", "Tech Lead", "Investor"
  logo: string;
  url: string;
}

/* --- Data --- */

export const portfolioData = {
  // 1. Personal Identity
  identity: {
    name: "Osinachi Michael ", // Replace with your name
    title: "Senior Full-Stack & Software Architect",
    tagline: "Engineering the future of digital interaction.",
    email: "devmyke24@gmail.com",
    avatar: "/assets/avatar.jpg", // Add your photo here
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/Edimike501",
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/osinachi-michael/",
        // url: "https://www.linkedin.com/in/edimike-edimike-201ba225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: "Linkedin"
      },
      // { platform: "Twitter", url: "https://x.com/D3v_Myk3", icon: "Twitter" },
      { platform: "X", url: "https://x.com/D3v_Myk3", icon: "X" },
      {
        platform: "Whatsapp",
        url: "https://wa.me/2349128093115",
        icon: "Whatsapp"
      }
    ] as SocialLink[]
  },

  // 2. Navigation
  navItems: [
    { name: "About", link: "about" },
    { name: "Stack", link: "stack" },
    { name: "Architecture", link: "architecture" },
    { name: "Projects", link: "projects" },
    { name: "Partners", link: "partners" },
    { name: "Contact", link: "contact" }
  ] as NavItem[],

  // 3. Hero Section Content
  hero: {
    heading: "Building High-Performance Digital Realities.",
    subheading:
      "Backend-focused Software Engineer specializing in scalable web architectures, API systems, automation workflows, and full-stack applications using TypeScript, NestJS, Express.js, NextJS, and Python.",
    /* "I design and build scalable backend infrastructures, automation-driven systems, and modern full-stack applications with TypeScript, Python, and cloud technologies.", */
    ctaPrimary: "View Work",
    ctaSecondary: "Get In Touch"
  },

  // 4. About Section
  about: {
    bio: [
      "I'm a full-stack software engineer who builds reliable, scalable and maintainable digital systems. My primary focus is backend engineering—designing APIs, data models, and system architectures that power high-performance applications.",
      "I also enjoy crafting clean, intuitive frontends that deliver smooth user experiences and connect seamlessly with powerful backend services."
    ],
    features: [
      {
        title: "Backend First",
        description: "APIs, Services, Databases",
        icon: "Database"
      },
      {
        title: "Full-Stack",
        description: "Frontend + Backend Integration",
        icon: "Code2"
      },
      {
        title: "AI & Automation",
        description: "Python, AI Workflows & Integrations",
        icon: "Brain"
      },
      {
        title: "Cloud Ready",
        description: "Docker, AWS & Scalable Deployments",
        icon: "Cloud"
      }
    ] as Feature[],
    stats: [
      {
        label: "YEARS EXPERIENCE",
        value: "5+",
        description: "Building and delivering production-ready systems",
        icon: "Calendar"
      },
      {
        label: "PROJECTS DELIVERED",
        value: "10+",
        description: "Web apps, APIs, platforms and automation tools",
        icon: "Rocket"
      },
      {
        label: "CUPS OF COFFEE",
        value: "∞",
        description: "Fuel for solving complex problems",
        icon: "Coffee"
      },
      {
        label: "USERS IMPACTED",
        value: "1k+",
        description: "Through systems that solve real-world problems",
        icon: "Users"
      }
    ] as Stat[]
  },

  // 5. Skills / Tech Stack
  skills: [
    {
      title: "Languages Spoken",
      skills: [
        { name: "Javascript", icon: "SiJavascript" },
        { name: "Typescript", icon: "SiTypescript" },
        { name: "Python", icon: "SiPython" },
        // { name: "Rust", icon: "SiRust" },
        { name: "PHP", icon: "SiPhp" }
      ]
    },
    {
      title: "Frontend Core",
      skills: [
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "React", icon: "SiReact" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Tailwind", icon: "SiTailwindcss" },
        // { name: "Figma", icon: "SiFigma" },
        { name: "Vue.js", icon: "SiVuedotjs" },
        // { name: "Svelte", icon: "SiSvelte" },
        // { name: "Angular", icon: "SiAngular" },
        { name: "React Native", icon: "SiReactnative" }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "NestJS", icon: "SiNestjs" },
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        // { name: "DJango", icon: "SiDjango" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "Redis", icon: "SiRedis" },
        { name: "Prisma", icon: "SiPrisma" },
        // { name: "AWS", icon: "SiAmazonaws" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Firebase", icon: "SiFirebase" },
        { name: "Supabase", icon: "SiSupabase" }
      ]
    },
    {
      title: "Advanced",
      skills: [
        // { name: "Rust", icon: "SiRust" },
        { name: "GraphQL", icon: "SiGraphql" }
        // { name: "WebAssembly", icon: "SiWebassembly" }
      ]
    }
  ] as SkillCategory[],

  // 6. Architecture & System Design
  architecture: {
    title: "Development Architecture",
    subtitle: "Modern paradigms engineered for scale, maintainability, and sub-millisecond response times.",
    summary:
      "A principled approach to building resilient digital systems. By choosing modular monoliths, monorepo workspaces, and multi-tier caching architectures, complex software products can scale gracefully without suffering from premature microservice overhead.",
    pillars: [
      {
        title: "Modular Monolith",
        tagline: "High Cohesion, Strict Boundaries",
        badge: "Backend Paradigm",
        icon: "Boxes",
        description:
          "Structuring the backend around strictly isolated, domain-driven modules (Auth, Catalog, Orders, Logistics, Payments) within a single deployable unit. Delivers strong boundary separation and zero network latency without distributed microservice complexity.",
        highlights: [
          "Domain-driven bounded contexts",
          "ACID transactional guarantees across modules",
          "Zero inter-service network latency",
          "Clean path for future microservice extraction"
        ]
      },
      {
        title: "Monorepo (pnpm Workspaces)",
        tagline: "Single Source of Truth",
        badge: "Codebase Structure",
        icon: "Workflow",
        description:
          "Consolidating applications (Web, Admin, API) and shared libraries (@shared, @ui, @hooks) in a single unified workspace. Ensures end-to-end type safety, atomic multi-package refactors, and zero dependency divergence.",
        highlights: [
          "Shared Zod validation schemas & domain enums",
          "Unified design system and UI tokens",
          "Atomic cross-app commits and PRs",
          "Shared typed API query hooks across frontends"
        ]
      },
      {
        title: "Turborepo Orchestration",
        tagline: "High-Performance Build System",
        badge: "Build & Pipelines",
        icon: "Zap",
        description:
          "Supercharging build, typecheck, lint, and test pipelines with intelligent dependency graphs. Turborepo executes tasks in parallel and fingerprints inputs/outputs to ensure work is never duplicated.",
        highlights: [
          "Intelligent topological task scheduling",
          "Local & remote computation caching",
          "Substantially faster CI/CD pipelines",
          "Deterministic build artifact verification"
        ]
      },
      {
        title: "Multi-Tier Caching (Redis & Memcached)",
        tagline: "Distributed State & Query Acceleration",
        badge: "Performance & Scale",
        icon: "Database",
        description:
          "Deploying a dual-tier caching strategy engineered for maximum throughput: Redis as a distributed in-memory data store for stateful session persistence and HttpOnly refresh-token rotation; complemented by Memcached / In-Memory LRU for ultra-fast database query and object caching.",
        highlights: [
          "Redis for session management & token rotation",
          "Memcached / In-Memory for sub-millisecond query caches",
          "Intelligent invalidation & stale-while-revalidate gates",
          "Significant database read load reduction"
        ]
      }
    ] as ArchitecturePillar[]
  },

  // 7. Projects (Grouped by your requested categories)
  projects: [
    {
      id: "afritrade-marketplace",
      title: "AfriTrade Connect - Marketplace & Workflow",
      description:
        "A digital B2B marketplace and integrated logistics ecosystem built to demonstrate how technology can drastically reduce intra-African trade friction under the AfCFTA framework. Features buyer procurement, multi-currency catalogs, supplier onboarding with automated KYB verification, and end-to-end shipment milestone tracking across Nigeria, South Africa, and Ghana.",
      architecture:
        "Architected within a pnpm + Turborepo monorepo. Built on a NestJS modular monolith backend with Prisma ORM, PostgreSQL, and Redis token caching. Consumes shared Zod schemas and minor-unit money arithmetic via @afritrade/shared, paired with 3-tier TanStack Query hooks via @afritrade/hooks for seamless state synchronization.",
      category: "Web App",
      techStack: [
        "NestJS",
        "Next.js 15",
        "Turborepo",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Zod",
        "TanStack Query",
        "Tailwind CSS",
        "Paystack"
      ],
      image: "/techclime.png",
      links: {
        demo: "https://afritrade.techclimesolutions.com/",
        github: "https://github.com/Edimike501/afritrade-public"
      },
      featured: true
    },
    {
      id: "afritrade-admin",
      title: "AfriTrade Admin - Operations & Compliance Console",
      description:
        "A specialized operations management center and compliance portal for platform administrators. Powers supplier KYB document review queues, freight logistics assignment, real-time shipment status transitions, user governance, and cross-border trade dispute resolution.",
      architecture:
        "Next.js 15 App Router admin portal directly interfaced with the NestJS modular monolith. Implements strict Role-Based Access Control (RBAC), Cloudflare R2 short-lived signed URLs for confidential KYB document inspection, and administrative order state transitions.",
      category: "Web App",
      techStack: [
        "Next.js 15",
        "NestJS",
        "Turborepo",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Tailwind CSS",
        "shadcn/ui",
        "Cloudflare R2"
      ],
      image: "/techclime.png",
      links: {
        demo: "https://afritrade-admin.techclimesolutions.com/",
        github: "https://github.com/Edimike501/afritrade-public"
      },
      featured: true
    },
    {
      id: "1",
      title: "Techclime Solutions",
      description:
        "Join a community of innovators. From premium coworking spaces to world-class tech education and expert consulting – all in one place.",
      category: "Web App",
      techStack: [
        "Next.js",
        "Tailwind",
        "Figma",
        "Paystack",
        "OAuth",
        "Express.js",
        "Redis",
        "PostgreSQL"
      ],
      image: "/techclime.png",
      links: {
        demo: "https://techclimesolutions.com",
        github: ""
      },
      featured: true
    },
    {
      id: "2",
      title: "Opollo Luxury Properties Ltd",
      description:
        "Premium real estate development, sales & consultancy in Lagos. Expert property investment and transparent legal solutions for local and diaspora buyers.",
      category: "Web App",
      techStack: [
        "Next.js",
        "Tailwind",
        "Figma",
        "Paystack",
        "Typescript",
        "Redis",
        "Prisma",
        "Cloudinary",
        "PostgreSQL"
      ],
      image: "/opollo-luxury.png",
      links: {
        demo: "https://opolloluxuries.com",
        github: ""
      },
      featured: true
    },
    {
      id: "3",
      title: "Techclime Solutions Bootcamp",
      description:
        "Empowering the next generation of tech talent through intensive, hands-on coding, design, and business training cohorts. Delivered physically and online.",
      category: "Web App",
      techStack: [
        "Next.js",
        "Tailwind",
        "Figma",
        "Paystack",
        "Typescript",
        "Redis",
        "MongoDB",
        "PostgreSQL"
      ],
      image: "/techclime.png",
      links: {
        demo: "https://skillup.techclimesolutions.com",
        github: ""
      },
      featured: true
    },
    {
      id: "4",
      title: "ViceLamoda Collectives",
      description:
        "Discover exclusive luxury fashion collections. Vicelamoda Collectives brings you the finest in modern style and elegance.",
      category: "Web App",
      techStack: [
        "Next.js",
        "Tailwind",
        "Figma",
        "Paystack",
        "Stripe",
        "Firebase",
        "Express.js",
        "Redis",
        "MongoDB"
      ],
      image: "/vicelamoda.png",
      links: {
        demo: "https://vicelamoda.fashion",
        github: "https://github.com/D3v-Myk3/vicelamoda-store/"
      },
      featured: true
    },
    {
      id: "5",
      title: "Pricis",
      description:
        "Pricis generates professional pricing and scope documents in seconds — so you stop undercharging and start getting paid what your work is worth.",
      category: "Web App",
      techStack: [
        "Next.js",
        "Tailwind",
        "Figma",
        "Firebase",
        "Express.js",
        "MongoDB"
      ],
      image: "/vicelamoda.png",
      links: {
        demo: "https://pricis-web.vercel.app",
        github: ""
      },
      featured: true
    },

    {
      id: "6",
      title: "Yunospace",
      description:
        "An Ed-Tech platform for remote learning and collaboration with schools.",
      category: "Web App",
      techStack: [
        "Next.js",
        "WebSockets",
        "Express.js",
        "Redis",
        "MySQL",
        "Tailwind",
        "Figma"
      ],
      image: "/projects/nebula.jpg",
      links: { demo: "https://yunospace.com", github: "https://github.com" },
      featured: true
    }
  ] as Project[],

  // 7. Partnerships
  partnerships: [
    {
      companyName: "Weblizz Network",
      role: "Lead Software Architect/Engineer",
      logo: "/partners/technova.svg",
      url: "#"
    },
    {
      companyName: "Techclime Solutions",
      role: "Lead Software Architect/Engineer",
      logo: "/partners/greengrid.svg",
      url: "https://techclimesolutions.com"
    },
    {
      companyName: "Alpha Ventures",
      role: "Co-Founder",
      logo: "/partners/alpha.svg",
      url: "#"
    }
  ] as Partnership[]
};
