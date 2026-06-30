export type SocialLink = {
  label: string;
  href: string;
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;       
  images?: string[];    
  demoUrl?: string;
  repoUrl?: string;
}

export type Skill = {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
};

export type Profile = {
  headerName: string;
  name: string;
  role: string;
  summary: string;
  location?: string;
  email?: string;
  socials?: SocialLink[];
};
