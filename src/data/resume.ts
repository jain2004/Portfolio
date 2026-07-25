export const RESUME_DATA = {
  name: "Ishaan Jain",
  mission: "I am a software engineer focused on building intelligent systems. Currently pursuing my M.S. in Computer Science at Georgia Tech, I recently graduated from Seattle University. I care deeply about craftsmanship, continuous learning, and solving the right problems.",
  about: "My journey into software engineering started with a simple curiosity about how things work. Since then, I've had the opportunity to build AI-powered internal tooling at F5, evaluate complex language models for Handshake AI, and ship full-stack applications. I don't claim to have all the answers, but I am relentlessly curious and committed to building things that are simple, robust, and genuinely useful.",
  contact: {
    email: "ishaanj42@gmail.com",
    linkedin: "https://linkedin.com/in/ishaanj42/",
  },
  experience: [
    {
      company: "Handshake AI",
      role: "AI Training Contractor",
      date: "Jan 2026 - May 2026",
      description: "Evaluated and trained proprietary Large Language Models on complex software engineering workloads. I authored coding prompts and fail-to-pass test suites based on real-world pull requests, helping improve model reasoning within a secure environment.",
    },
    {
      company: "F5",
      role: "Software Engineer Intern",
      date: "Sept 2024 - June 2025",
      description: "Led the development of an LLM-driven diagnostic system that reduced heuristic generation time from 3 hours to under 30 seconds. I designed a pipeline for data extraction that achieved 80%+ accuracy and built validation tools to ensure the generated scripts were production-ready.",
    },
    {
      company: "Kayo.one",
      role: "Software Developer",
      date: "Oct 2025 - Dec 2025",
      description: "Shipped a production web application to drive customer acquisition. I built responsive frontend components using React.js and owned the deployment lifecycle, iterating closely with stakeholders based on feedback.",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "M.S. in Computer Science (AI Specialization)",
      date: "Expected Dec 2027",
    },
    {
      school: "Seattle University",
      degree: "B.S. in Computer Science (GPA: 3.5)",
      date: "June 2025",
    },
  ],
  skills: [
    {
      category: "Languages",
      technologies: ["Python", "Java", "JavaScript", "C++", "C#", "SQL"],
    },
    {
      category: "Frameworks",
      technologies: ["React.js", "Node.js", "Flask", "TensorFlow"],
    },
    {
      category: "Infrastructure",
      technologies: ["Git", "Azure DevOps", "REST APIs", "Docker", "Agile/Scrum"],
    },
    {
      category: "Core",
      technologies: ["Algorithms", "System Design", "Object-Oriented Programming"],
    },
  ],
  projects: [
    {
      title: "Smart News Aggregator",
      challenge: "Processing and making sense of massive amounts of unstructured news data from various APIs.",
      engineering: "I built a full-stack platform using Python, Flask, and React.js. To make the data useful, I implemented NLP models with TensorFlow to summarize articles and classify them by topic. I designed a relational MySQL schema capable of handling thousands of articles efficiently.",
      outcome: "A personalized news feed that delivers relevant, summarized content to users without overwhelming them.",
      tech: ["Python", "React", "Flask", "TensorFlow", "MySQL"],
    },
    {
      title: "Fantasy Draft Platform",
      challenge: "Handling concurrent, real-time draft picks across multiple users without state conflicts.",
      engineering: "I engineered a multi-user distributed system using Node.js and React.js. I focused heavily on designing REST APIs and a robust MySQL backend to maintain strict data consistency and seamless client-server synchronization during live drafts.",
      outcome: "A smooth, engaging live drafting experience that securely handles concurrent transactions.",
      tech: ["JavaScript", "React", "Node.js", "MySQL"],
    },
  ],
  philosophy: [
    "Build things that people actually enjoy using.",
    "Learn continuously.",
    "Solve the right problem before solving it well.",
    "Simple solutions usually age better.",
    "Small details matter."
  ]
} as const;
