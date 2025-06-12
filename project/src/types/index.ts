export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'cybersecurity' | 'frontend' | 'backend' | 'tools';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}