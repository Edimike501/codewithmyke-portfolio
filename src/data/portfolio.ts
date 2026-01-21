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
        url: "https://www.linkedin.com/in/edimike-edimike-201ba225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: "Linkedin"
      },
      { platform: "Twitter", url: "https://x.com/D3v_Myk3", icon: "Twitter" },
      { platform: "X", url: "https://x.com/D3v_Myk3", icon: "X" },
      {
        platform: "Whatsapp",
        url: "https://wa.me/2349137157207",
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
      "A multidisciplinary technologist focused on scalable architecture, interactive UI, and next-gen SaaS solutions.",
    ctaPrimary: "View Work",
    ctaSecondary: "Contact Me"
  },

  // 4. About Section
  about: {
    bio: "With over a decade of experience in the software industry, I bridge the gap between complex backend logic and fluid frontend design. I specialize in building systems that are not just functional, but intuitive and visually striking. My work is driven by a passion for clean code, performance optimization, and futuristic aesthetics.",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Shipped", value: "10+" },
      { label: "Coffee Consumed", value: "∞" },
      { label: "Users Impacted", value: "1k+" }
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
        { name: "Rust", icon: "SiRust" },
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
        { name: "Figma", icon: "SiFigma" },
        { name: "Vue.js", icon: "SiVuedotjs" },
        { name: "Svelte", icon: "SiSvelte" },
        { name: "Angular", icon: "SiAngular" },
        { name: "React Native", icon: "SiReactnative" }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "DJango", icon: "SiDjango" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "Redis", icon: "SiRedis" },
        { name: "Prisma", icon: "SiPrisma" },
        { name: "AWS", icon: "SiAmazonaws" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Firebase", icon: "SiFirebase" },
        { name: "Supabase", icon: "SiSupabase" }
      ]
    },
    {
      title: "Advanced",
      skills: [
        { name: "Rust", icon: "SiRust" },
        { name: "GraphQL", icon: "SiGraphql" },
        { name: "WebAssembly", icon: "SiWebassembly" }
      ]
    }
  ] as SkillCategory[],

  // 6. Projects (Grouped by your requested categories)
  projects: [
    {
      id: "1",
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
    },
    {
      id: "2",
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
      id: "3",
      title: "Synthetix Core",
      description:
        "Open-source CLI tool for generating microservice boilerplate code instantly.",
      category: "Software",
      techStack: ["Rust", "Clap", "Tokio"],
      image: "/projects/cli.jpg",
      links: { github: "https://github.com" },
      featured: false
    },
    {
      id: "4",
      title: "Vortex SaaS",
      description:
        "AI-powered content generation platform for enterprise marketing teams.",
      category: "SaaS",
      techStack: ["Next.js", "OpenAI API", "Stripe", "Supabase"],
      image: "/projects/vortex.jpg",
      links: { demo: "https://vortex.com", github: "https://github.com" },
      featured: true
    },
    {
      id: "5",
      title: "HealthSpace Startup",
      description:
        "Telehealth startup platform connecting patients with specialists in under 5 minutes.",
      category: "Startup",
      techStack: ["Vue.js", "Firebase", "WebRTC"],
      image: "/projects/health.jpg",
      links: { demo: "https://healthspace.com" },
      featured: false
    }
  ] as Project[],

  // 7. Partnerships
  partnerships: [
    {
      companyName: "Weblizz Network",
      role: "Lead Software Architect/Engineer",
      logo: "/partners/technova.svg",
      url: "https://technova.io"
    },
    {
      companyName: "GreenGrid",
      role: "Lead Architect",
      logo: "/partners/greengrid.svg",
      url: "https://greengrid.energy"
    },
    {
      companyName: "Alpha Ventures",
      role: "Co-Founder",
      logo: "/partners/alpha.svg",
      url: "https://alphaventures.vc"
    }
  ] as Partnership[]
};
