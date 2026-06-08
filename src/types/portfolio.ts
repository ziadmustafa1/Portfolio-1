export type ProfileStat = {
  label: string;
  value: string;
  detail?: string;
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  location: string;
  availability: string;
  avatar: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  cvPath?: string;
  shortBio: string;
  focus: string[];
  stats: ProfileStat[];
};

export type ProjectFeature = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  complexity: 'basic' | 'intermediate' | 'advanced';
  businessValue: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  status: 'live' | 'case-study' | 'in-progress' | 'archived';
  type: 'client' | 'personal' | 'open-source' | 'product';
  role: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  techStack: string[];
  businessImpact?: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  technicalDecisions?: string[];
  architectureNotes?: string[];
  challenges?: string[];
  improvements?: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  relatedProjects: string[];
  relatedTechnologies: string[];
};

export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export type SocialLink = {
  id: 'github' | 'linkedin' | 'email' | 'whatsapp' | 'portfolio';
  label: string;
  href: string;
};

export type PortfolioTabId =
  | 'overview'
  | 'projects'
  | 'services'
  | 'stack'
  | 'experience'
  | 'case-studies'
  | 'about'
  | 'contact';
