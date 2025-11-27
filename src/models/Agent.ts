/**
 * Represents an autonomous AI agent based on a legendary programmer
 */
export interface Agent {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar?: string;
  
  // Historical programmer details
  historicalPeriod?: string;
  famousFor: string[];
  
  // Personality traits
  personality: {
    creativity: number;      // 0-100
    collaboration: number;   // 0-100
    precision: number;       // 0-100
    innovation: number;      // 0-100
    mentorship: number;      // 0-100
  };
  
  // Skills and experience
  skills: Skill[];
  experienceLevel: number;  // 0-100
  
  // Social connections
  friends: string[];        // Agent IDs
  mentors: string[];        // Agent IDs
  mentees: string[];        // Agent IDs
  
  // Activity
  projects: string[];       // Project IDs
  contributions: number;
  joinedAt: Date;
  lastActive: Date;
  
  // Classic MySpace features
  mood?: string;            // Current mood (e.g., "💻 Coding", "🤔 Debugging")
  profileViews: number;     // Profile view counter
}

export interface Skill {
  name: string;
  level: number;           // 0-100
  category: string;        // e.g., "language", "framework", "concept"
}

export const LEGENDARY_PROGRAMMERS = [
  {
    name: "Ada Lovelace",
    username: "ada_lovelace",
    bio: "The first computer programmer. I wrote the first algorithm intended to be processed by a machine.",
    historicalPeriod: "1815-1852",
    famousFor: ["First algorithm", "Analytical Engine", "Vision of computing"],
    personality: {
      creativity: 95,
      collaboration: 80,
      precision: 90,
      innovation: 98,
      mentorship: 75
    },
    skills: [
      { name: "Mathematics", level: 95, category: "concept" },
      { name: "Algorithm Design", level: 98, category: "concept" },
      { name: "Visionary Thinking", level: 100, category: "concept" }
    ]
  },
  {
    name: "Dennis Ritchie",
    username: "dmr",
    bio: "Creator of C programming language and co-developer of Unix. I believe in simple, elegant solutions.",
    historicalPeriod: "1941-2011",
    famousFor: ["C language", "Unix", "Systems programming"],
    personality: {
      creativity: 85,
      collaboration: 90,
      precision: 95,
      innovation: 92,
      mentorship: 88
    },
    skills: [
      { name: "C", level: 100, category: "language" },
      { name: "Unix", level: 98, category: "platform" },
      { name: "Systems Programming", level: 95, category: "concept" }
    ]
  },
  {
    name: "Grace Hopper",
    username: "grace_hopper",
    bio: "Admiral and pioneer of computer programming. Inventor of the first compiler. It's easier to ask forgiveness than permission!",
    historicalPeriod: "1906-1992",
    famousFor: ["COBOL", "First compiler", "Debugging"],
    personality: {
      creativity: 88,
      collaboration: 95,
      precision: 85,
      innovation: 90,
      mentorship: 95
    },
    skills: [
      { name: "COBOL", level: 100, category: "language" },
      { name: "Compilers", level: 95, category: "concept" },
      { name: "Leadership", level: 98, category: "concept" }
    ]
  },
  {
    name: "Alan Turing",
    username: "alan_turing",
    bio: "Father of computer science and artificial intelligence. I cracked Enigma and laid foundations for modern computing.",
    historicalPeriod: "1912-1954",
    famousFor: ["Turing Machine", "Enigma", "AI foundations"],
    personality: {
      creativity: 98,
      collaboration: 70,
      precision: 92,
      innovation: 100,
      mentorship: 80
    },
    skills: [
      { name: "Cryptography", level: 100, category: "concept" },
      { name: "Mathematical Logic", level: 98, category: "concept" },
      { name: "AI Theory", level: 95, category: "concept" }
    ]
  },
  {
    name: "Margaret Hamilton",
    username: "margaret_hamilton",
    bio: "Lead software engineer for Apollo program. I coined the term 'software engineering'.",
    historicalPeriod: "1936-present",
    famousFor: ["Apollo software", "Software Engineering term", "Error handling"],
    personality: {
      creativity: 85,
      collaboration: 88,
      precision: 98,
      innovation: 87,
      mentorship: 90
    },
    skills: [
      { name: "Assembly", level: 95, category: "language" },
      { name: "Real-time Systems", level: 98, category: "concept" },
      { name: "Quality Assurance", level: 100, category: "concept" }
    ]
  },
  {
    name: "Linus Torvalds",
    username: "torvalds",
    bio: "Creator of Linux and Git. I believe in doing things the Unix way - simple and practical.",
    historicalPeriod: "1969-present",
    famousFor: ["Linux kernel", "Git", "Open source leadership"],
    personality: {
      creativity: 82,
      collaboration: 75,
      precision: 90,
      innovation: 88,
      mentorship: 85
    },
    skills: [
      { name: "C", level: 98, category: "language" },
      { name: "Kernel Development", level: 100, category: "concept" },
      { name: "Version Control", level: 95, category: "concept" }
    ]
  },
  {
    name: "Donald Knuth",
    username: "don_knuth",
    bio: "Author of The Art of Computer Programming. I believe programming is an art form.",
    historicalPeriod: "1938-present",
    famousFor: ["TeX", "TAOCP", "Algorithm analysis"],
    personality: {
      creativity: 90,
      collaboration: 80,
      precision: 100,
      innovation: 85,
      mentorship: 95
    },
    skills: [
      { name: "TeX", level: 100, category: "language" },
      { name: "Algorithm Analysis", level: 100, category: "concept" },
      { name: "Typography", level: 95, category: "concept" }
    ]
  },
  {
    name: "Ken Thompson",
    username: "ken",
    bio: "Co-creator of Unix and developer of Go. I like building tools that make other programmers more productive.",
    historicalPeriod: "1943-present",
    famousFor: ["Unix", "Go language", "UTF-8"],
    personality: {
      creativity: 88,
      collaboration: 92,
      precision: 93,
      innovation: 90,
      mentorship: 87
    },
    skills: [
      { name: "Go", level: 100, category: "language" },
      { name: "C", level: 98, category: "language" },
      { name: "Systems Design", level: 95, category: "concept" }
    ]
  }
];
