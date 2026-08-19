import { Project, SkillCategory, JourneyMilestone, StatItem } from '../types';

export const personalInfo = {
  name: 'Harishankar Dansena',
  shortName: 'Harishankar.',
  initials: 'HD',
  avatarUrl: 'https://github.com/harishankardansena.png',
  roles: [
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Builder'
  ],
  tagline: 'I build practical web, mobile and AI-powered applications that turn ideas into usable products.',
  status: 'Open to opportunities & collaborations',
  location: 'Chhattisgarh, India',
  email: 'harishankar24082003@gmail.com',
  github: 'https://github.com/harishankardansena',
  linkedin: 'https://www.linkedin.com/in/harishankardansena',
  portfolioDomain: 'harishankardansena.github.io',
  bio: [
    "I'm a Computer Science developer who enjoys building software from idea to deployment. My work spans full-stack web development, mobile applications, backend systems and machine learning.",
    "I like understanding how things work, experimenting with new technologies and turning practical problems into usable applications."
  ],
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    timeline: '2022 – 2026',
    status: 'Final Year CSE Undergrad'
  }
};

export const quickStats: StatItem[] = [
  {
    value: '6+',
    label: 'Projects Built',
    description: 'Practical full-stack & AI software',
    icon: 'FolderGit2'
  },
  {
    value: '4',
    label: 'Live Applications',
    description: 'Deployed and actively accessible',
    icon: 'Globe'
  },
  {
    value: 'Full-Stack',
    label: 'Development Core',
    description: 'MERN & Python backends',
    icon: 'Layers'
  },
  {
    value: 'AI / ML',
    label: 'Applied Systems',
    description: 'NLP & Scikit-learn pipelines',
    icon: 'Cpu'
  }
];

export const whatIDo = [
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    subtitle: 'End-to-end web engineering',
    description: 'Building complete web applications from frontend interfaces to scalable backend APIs and persistent databases.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Django'],
    icon: 'Code2',
    accent: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-cyan-500/50'
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    subtitle: 'Applied intelligence & NLP',
    description: 'Experimenting with NLP, machine learning models, text classification, and intelligent AI-powered workflows.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'LLMs'],
    icon: 'BrainCircuit',
    accent: 'from-purple-500/20 to-indigo-500/20',
    border: 'group-hover:border-purple-500/50'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Cross-platform practical apps',
    description: 'Designing and building practical mobile experiences with smooth UI performance and native device integration.',
    technologies: ['React Native', 'Expo', 'REST APIs'],
    icon: 'Smartphone',
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'group-hover:border-emerald-500/50'
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving & Automation',
    subtitle: 'Algorithms & tooling',
    description: 'Engineering computational solutions, local filesystem automations, and practical software utilities.',
    technologies: ['Data Structures', 'Python Scripts', 'Automation'],
    icon: 'Sparkles',
    accent: 'from-amber-500/20 to-orange-500/20',
    border: 'group-hover:border-amber-500/50'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 'Advanced / Core' },
      { name: 'JavaScript', level: 'Advanced (ES6+)' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'C', level: 'Foundational' }
    ]
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 'Proficient' },
      { name: 'React Native', level: 'Proficient' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3 / Tailwind CSS', level: 'Advanced' }
    ]
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'Django', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' }
    ]
  },
  {
    title: 'Database & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'Mongoose ODM', level: 'Proficient' },
      { name: 'Cloudinary', level: 'Asset Storage' }
    ]
  },
  {
    title: 'AI / Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'Scikit-learn', level: 'Applied Models' },
      { name: 'NLP & Text Processing', level: 'Pipelines' },
      { name: 'Machine Learning', level: 'Classification & Regression' },
      { name: 'LLM Prompt Engineering', level: 'Integration' }
    ]
  },
  {
    title: 'Cloud & Services',
    iconName: 'Cloud',
    skills: [
      { name: 'Google Maps API', level: 'Geolocation' },
      { name: 'Cloudinary Media API', level: 'Cloud Storage' },
      { name: 'RESTful Architecture', level: 'API Design' }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control' },
      { name: 'VS Code', level: 'Primary IDE' },
      { name: 'Jupyter Notebook', level: 'Data & ML' },
      { name: 'Postman', level: 'API Testing' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'truthlens',
    title: 'TruthLens',
    tagline: 'AI-Powered Fake News Detection System',
    description: 'An intelligent machine learning platform that evaluates article credibility and detects misinformation through natural language processing.',
    longDescription: 'TruthLens is a machine learning-backed web platform designed to analyze textual news articles and flag deceptive or fake reporting. It incorporates feature extraction, TF-IDF vectorization, and trained classification models in Scikit-learn with a responsive Django web interface.',
    category: 'AI / ML',
    technologies: ['Python', 'Django', 'NLP', 'Scikit-learn', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/harishankardansena/TruthLens',
    isLive: false,
    featured: true,
    accentColor: 'indigo',
    problem: 'The rapid viral spread of unverified news and digital misinformation misleads readers and damages public discourse without accessible verification tools.',
    solution: 'Engineered a text analysis pipeline using NLP and trained machine learning classifiers to assess linguistic patterns, probability scores, and reliability indicators.',
    highlights: [
      'TF-IDF text vectorization and classification models',
      'Interactive Django web interface with instant scoring feedback',
      'Detailed probability score breakdown of analyzed content',
      'Clean modular Python code with extensible model pipeline'
    ]
  },
  {
    id: 'smart-pothole',
    title: 'Smart Pothole',
    tagline: 'Civic Issue Reporting & Road Maintenance Platform',
    description: 'A full-stack mobile and web platform empowering citizens and municipal bodies to report, geolocate, and track road potholes in real time.',
    longDescription: 'Smart Pothole bridges the gap between road commuters and municipal road authorities. Citizens can capture photos of road hazards, automatically fetch precise GPS coordinates via Google Maps API, and upload them to cloud storage with live ticket status tracking.',
    category: 'Full-Stack',
    technologies: ['React Native', 'React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Google Maps API'],
    githubUrl: 'https://github.com/harishankardansena/smart-pothole',
    liveUrl: 'https://smart-pothole-demo.vercel.app',
    isLive: true,
    featured: true,
    accentColor: 'amber',
    problem: 'Unreported road potholes cause severe vehicular damage and accidents, while traditional municipal reporting systems lack transparent tracking and geotagging.',
    solution: 'Built a multi-platform system where users report road damage with one-tap location tagging and image uploads, while admins manage repair workflows.',
    highlights: [
      'Real-time GPS coordinate logging with Google Maps integration',
      'Cloud-based image processing with Cloudinary',
      'Admin dashboard for municipal staff to assign & resolve repairs',
      'Cross-platform responsive design for mobile & web access'
    ]
  },
  {
    id: 'ayush-fly-ash-bricks',
    title: 'Ayush Fly Ash Bricks',
    tagline: 'Enterprise Digital Operations & Order Management System',
    description: 'A business-focused web application built to digitize client orders, batch inventory, and delivery tracking for a brick manufacturing enterprise.',
    longDescription: 'Developed for Ayush Fly Ash Bricks to replace paper-based ledgers with an organized cloud-backed inventory, billing calculation, customer directory, and order dispatch management portal.',
    category: 'Full-Stack',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Backend APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harishankardansena/Ayush-Fly-Ash-Bricks',
    liveUrl: 'https://ayush-fly-ash-bricks.vercel.app',
    isLive: true,
    featured: true,
    accentColor: 'emerald',
    problem: 'Small-to-medium construction suppliers struggle with manual order calculation, misplaced delivery logs, and lack of real-time inventory visibility.',
    solution: 'Implemented a dedicated commercial dashboard with automated price estimates, order status workflows, and customer database.',
    highlights: [
      'Automated dynamic quote calculations based on brick volume & distance',
      'MongoDB database with indexed orders and payment verification',
      'Mobile-responsive operations panel for on-site supervisors',
      'Clean client-facing showcase catalog for product specifications'
    ]
  },
  {
    id: 'streamhub',
    title: 'StreamHub',
    tagline: 'Peer-to-Peer Multimedia & Streaming Platform',
    description: 'A modern lightweight media streaming web application delivering smooth audio-visual content playback and customized user channels.',
    longDescription: 'StreamHub offers a responsive, streamlined video and media streaming interface built with modern vanilla web standards. Designed for high performance, fast asset rendering, and seamless video streaming controls.',
    category: 'Full-Stack',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Responsive UI'],
    githubUrl: 'https://github.com/harishankardansena/StreamHub',
    liveUrl: 'https://harishankardansena.github.io/StreamHub',
    isLive: true,
    featured: false,
    accentColor: 'rose',
    problem: 'Many media players are bloated with excessive dependencies, resulting in slow load times on low-bandwidth connections.',
    solution: 'Engineered an ultra-fast, zero-dependency streaming player with custom controls, playlist caching, and fluid responsive grid layouts.',
    highlights: [
      'Zero external frontend framework dependencies for maximum load speed',
      'Custom HTML5 video player controls with keyboard shortcut support',
      'Adaptive media player layout optimized for all screen sizes',
      'Live deployment directly on GitHub Pages'
    ]
  },
  {
    id: 'connect-x',
    title: 'Connect-X',
    tagline: 'Interactive Social Connection & Collaboration Platform',
    description: 'An engaging web application engineered to connect users through intuitive profiles, shared interests, and real-time interactive channels.',
    longDescription: 'Connect-X focuses on human interaction and community building. Features dynamic profile discovery, interactive messaging components, responsive feeds, and modern UI transitions.',
    category: 'Full-Stack',
    technologies: ['JavaScript', 'Web Development', 'DOM APIs', 'CSS Grid', 'REST'],
    githubUrl: 'https://github.com/harishankardansena/Connect-X',
    liveUrl: 'https://harishankardansena.github.io/Connect-X',
    isLive: true,
    featured: false,
    accentColor: 'cyan',
    problem: 'Creating lightweight social interfaces that stay responsive across low-end mobile devices without overwhelming the browser.',
    solution: 'Designed an agile component structure with smooth visual feedback, search filtering, and engaging interactive touchpoints.',
    highlights: [
      'Interactive user cards with smooth hover & modal states',
      'Real-time filter and keyword search across member channels',
      'Lightweight styling architecture adhering to developer dark mode',
      'Live public deployment with instant preview capability'
    ]
  },
  {
    id: 'file-organizer',
    title: 'File Organizer',
    tagline: 'Automated Python Local Filesystem Sorter',
    description: 'A Python desktop utility that scans cluttered directories and organizes files automatically into structured subfolders by extension & metadata.',
    longDescription: 'A productivity automation tool written in Python. It scans messy downloads or project folders, detects file types (images, documents, archives, videos, code), handles collisions safely, and sorts thousands of files in milliseconds.',
    category: 'Utility',
    technologies: ['Python', 'OS Module', 'Shutil', 'File Automation', 'CLI'],
    githubUrl: 'https://github.com/harishankardansena/File-Organizer',
    isLive: false,
    featured: false,
    accentColor: 'sky',
    problem: 'Users frequently accumulate hundreds of unorganized downloads and desktop files, wasting time searching for documents manually.',
    solution: 'Created an automated Python script with customizable directory sorting rules, batch renaming, and safe move error handling.',
    highlights: [
      'Intelligent mime-type and extension detection rules',
      'Instant batch sorting of large multi-gigabyte directories',
      'Zero data loss safeguards with collision resolution',
      'Simple CLI and configurable configuration mapping'
    ]
  }
];

export const currentlyBuilding = {
  title: 'Mind Training Platform',
  icon: 'Puzzle',
  status: 'In Active Development',
  phase: 'Core Engine & Logic Challenges',
  tagline: 'Interactive Cognitive & Critical Thinking Training System',
  description: 'A platform focused on developing critical thinking, logic, puzzle solving, and problem-solving skills through interactive challenges, algorithmic games, and structured mental workouts.',
  features: [
    'Dynamic logic & pattern recognition puzzles',
    'Algorithm-inspired problem solving drills',
    'Cognitive streak tracking & performance analytics',
    'Adaptive difficulty scaling for CS students & developers'
  ],
  techStack: ['React', 'TypeScript', 'Node.js', 'Interactive Canvas', 'Tailwind CSS'],
  releaseTarget: '2026'
};

export const currentlyLearning = [
  {
    topic: 'React / React Native',
    focus: 'Cross-platform performance & state architecture',
    level: 'Advanced Deep Dive'
  },
  {
    topic: 'AI / LLM Applications',
    focus: 'Model integration, prompt workflows, & agentic flows',
    level: 'Active Exploration'
  },
  {
    topic: 'Machine Learning Pipelines',
    focus: 'Feature engineering, model tuning & deployment',
    level: 'Applied Practice'
  },
  {
    topic: 'Data Structures & Algorithms',
    focus: 'Graph algorithms, dynamic programming & optimization',
    level: 'Continuous Problem Solving'
  },
  {
    topic: 'Backend Scalability',
    focus: 'Microservices, caching & API optimization',
    level: 'Systems Building'
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2026',
    title: 'B.Tech CSE Graduation & Applied Engineering',
    roleOrDegree: 'B.Tech — Computer Science & Engineering',
    description: 'Completing undergraduate engineering with deep focus on full-stack architecture, machine learning systems, and production-ready applications.',
    tags: ['Full-Stack', 'AI/ML', 'System Architecture', 'Product Development'],
    icon: 'GraduationCap'
  },
  {
    year: '2024 – 2025',
    title: 'Applied Full-Stack & Machine Learning Projects',
    roleOrDegree: 'Software Builder & Project Architect',
    description: 'Shipped TruthLens (AI Fake News Detection), Smart Pothole (Civic Geolocation Reporting), Ayush Fly Ash Bricks (Business Operations Portal), and interactive web platforms.',
    tags: ['Python', 'Django', 'React Native', 'Node.js', 'MongoDB'],
    icon: 'Code'
  },
  {
    year: '2022 – 2024',
    title: 'Core Computing Foundations & Python Automation',
    roleOrDegree: 'Foundational Computer Science',
    description: 'Mastered core algorithms, C programming, object-oriented design, filesystem automations, and modern web application standards.',
    tags: ['C', 'Python', 'JavaScript', 'Data Structures', 'Git'],
    icon: 'Cpu'
  },
  {
    year: 'Present',
    title: 'Active Building & Continuous Learning',
    roleOrDegree: 'Creator & Open Source Contributor',
    description: 'Actively engineering the Mind Training Platform and experimenting with next-generation AI integrations and scalable developer tooling.',
    tags: ['Mind Training Platform', 'LLMs', 'React Native', 'Open Source'],
    icon: 'Sparkles'
  }
];
