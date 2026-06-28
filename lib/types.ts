export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

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
