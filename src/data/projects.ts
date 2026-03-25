export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string[];
  status: 'live' | 'beta' | 'wip';
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'projects.title.aportaya',
    subtitle: 'projects.subtitle.aportaya',
    description: 'projects.description.aportaya',
    image: [ 'https://i.ibb.co/vvwmXwpd/image.png', 'https://i.ibb.co/kV4Y09Bt/image.png' ],
    status: 'beta',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js Express', 'PostgreSQL', 'Docker'],
    codeUrl: 'https://github.com/mdavila-2001/aportaya',
  },
  {
    id: 2,
    title: 'projects.title.gopuppy',
    subtitle: 'projects.subtitle.gopuppy',
    description: 'projects.description.gopuppy',
    image: [ 'https://i.ibb.co/FkCYJxq7/imagen-2026-03-24-093636187.png' ],
    status: 'wip',
    tech: ['Java', 'Android', 'Kotlin', 'Jetpack Compose'],
    codeUrl: 'https://github.com/mdavila-2001/gopuppy',
  },
]