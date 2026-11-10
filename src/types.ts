export type Language = 'id' | 'en';

export type ProjectCategory = 'all' | 'product' | 'engineering' | 'mobile' | 'system';

export interface Project {
  id: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  category: ProjectCategory;
  categoryLabel: {
    id: string;
    en: string;
  };
  year: string;
  client: string;
  role: string;
  summary: {
    id: string;
    en: string;
  };
  image: string;
  aspectRatio?: string;
  tags: string[];
  metrics: {
    label: { id: string; en: string };
    value: string;
  }[];
  challenge: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
  deliverables: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: { id: string; en: string };
  company: string;
  location: string;
  description: { id: string; en: string };
  achievements: { id: string; en: string }[];
  technologies: string[];
}

export interface SkillCategory {
  title: { id: string; en: string };
  description: { id: string; en: string };
  skills: {
    name: string;
    level: string;
    highlight: { id: string; en: string };
  }[];
}

export interface Testimonial {
  quote: { id: string; en: string };
  author: string;
  title: string;
  organization: string;
  metric: string;
}

export interface EducationItem {
  stage: string;
  institution: string;
  year?: string;
  note?: string;
}

export interface EditableProfileData {
  name: string;
  title: { id: string; en: string };
  location: string;
  availability: { id: string; en: string };
  heroImage: string;
  heroKicker: { id: string; en: string };
  headline: { id: string; en: string };
  leadProse: { id: string; en: string };
  kpis: {
    value: string;
    label: { id: string; en: string };
  }[];
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  figmaUrl: string;
  // Specific user requirements
  educationHistory: EducationItem[];
  careerAspiration: { id: string; en: string };
  studyReason: { id: string; en: string };
  highSchoolExperience: { id: string; en: string };
}


