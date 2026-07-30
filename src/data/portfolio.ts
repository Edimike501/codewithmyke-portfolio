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
  category: ProjectCategory;
  techStack: string[];
  image: string; // Path to image in public folder
  links: {
    demo?: string;
    github?: string;
  };
  featured: boolean;
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
    { name: "Projects", link: "projects" },
    { name: "Partners", link: "partners" },
    { name: "Contact", link: "contact" }
  ] as NavItem[],

  // 3. Hero Section Content
  hero: {
    heading: "Building High-Performance Digital Realities.",
    subheading:
      "Backend-focused Software Engineer specializing in scalable web architectures, API systems, automation workflows, and full-stack applications using TypeScript, Express.js, NextJS, and Python.",
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

  // 6. Projects (Grouped by your requested categories)
  projects: [
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
        demo: "https://www.opolloluxuries.com",
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
