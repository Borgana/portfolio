export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  name: string;
  icon?: string;
  description?: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
  demoLabel: string;
  repoLabel: string;
  accent: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type PersonalBlock = {
  title: string;
  items: string[];
};
