export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Neon Genesis Portfolio',
    description: 'A cyberpunk-themed terminal portfolio built with React and Three.js.',
    tech: ['React', 'TypeScript', 'Three.js', 'Tailwind'],
    link: 'https://example.com',
    github: 'https://github.com/example/portfolio'
  },
  {
    id: '2',
    title: 'AI Code Assistant',
    description: 'An intelligent coding assistant powered by LLMs.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
    link: 'https://example.com',
    github: 'https://github.com/example/ai-assistant'
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'CyberCorp',
    date: '2023 - Present',
    description: 'Building the future of the web with immersive interfaces.'
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'TechStart',
    date: '2021 - 2023',
    description: 'Developed scalable web applications using MERN stack.'
  }
];

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Three.js'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  tools: ['Docker', 'AWS', 'Git', 'Figma']
};

export const bio = `
Hello, I'm a creative developer with a passion for building immersive digital experiences.
I specialize in frontend development, 3D graphics, and UI/UX design.
Currently exploring the intersection of AI and web technologies.
`;
