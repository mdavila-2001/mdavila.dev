export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'live' | 'beta' | 'wip';
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = []