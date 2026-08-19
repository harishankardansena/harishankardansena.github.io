export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Full-Stack' | 'AI / ML' | 'Mobile' | 'Utility';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  isLive: boolean;
  featured: boolean;
  problem: string;
  solution: string;
  highlights: string[];
  badge?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  roleOrDegree: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}
