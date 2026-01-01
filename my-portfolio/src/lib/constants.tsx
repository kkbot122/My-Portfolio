export const personalInfo = {
  name: "Kisna Kanti",
  title: "Full Stack Developer",
  email: "kisnakk1503@gmail.com",
  phone: "+91 9811089519",
  location: "PNQ, India",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
  twitter: "https://twitter.com/alexjohnson"
}

export const frameworks = [
  "React",
  // "Next.js",
  "Express.js",
]

export const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Git",
  "Webpack",
  "Vite",
  "Docker"
]

export const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML/CSS",
  "SQL",
  "Java"
]

export const projects = [
  {
    id: 1,
    title: "Analyz",
    description: "A robust product analytics SaaS that enables developers to track user behavior via a custom-built SDK. Features a secure multi-tenant architecture for managing organizations, projects, and team members, integrated with Courier for seamless email invitations and onboarding.",
    image: "/Analyz.png",
    technologies: ["Nextjs", "Prisma", "Courier", "PostgreSQL", "Neon"],
    githubUrl: "https://github.com/kkbot122/Analyz",
    liveUrl: "https://analyz-product-analytics.vercel.app/",
    featured: false
  },
  {
    id: 2,
    title: "AI Powered Logo Generator",
    description: "AI-powered logo generation web application that leverages huggingface AI models to create unique logos based on user input and preferences. The AI is provided with a curated list of open source typography fonts. A special algorithm is used to set the colour pallet for the brand and logo. Logo generation is followed by an in-depth brand identity document that highlights the brand's core values, target audience, and visual elements.",
    image: "/aura-home.png",
    technologies: ["Next.Js", "PostgreSQL", "HuggingFace", "Groq Playground", "Redis"],
    githubUrl: "https://github.com/kkbot122/Logo-generator",
    liveUrl: "https://logo-generator-v1.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "NGO Donation/Volunteer Platform",
    description: "A full-stack donation & volunteer management solution with React and Node.js",
    image: "/Zunj-Ngo.png",
    technologies: ["React", "Node.js", "Supabase", "Tailwind"],
    githubUrl: "https://github.com/kkbot122/Jhung-NGO-website-Final",
    liveUrl: "https://zunj-sanstha.vercel.app/",
    featured: true
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/alexjohnson", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexjohnson", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexjohnson", icon: "twitter" }
]
