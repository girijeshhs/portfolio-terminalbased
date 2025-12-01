import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { Github, ExternalLink, X } from 'lucide-react';

interface ProjectDetailProps {
  id: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ id }) => {
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="text-red-500">Project not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4 p-4 border border-neon-blue/30 rounded bg-black/50 backdrop-blur-sm max-w-2xl"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-neon-pink">{project.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-1 text-xs rounded bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <Github size={16} />
          Source
        </a>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
          Demo
        </a>
      </div>
    </motion.div>
  );
};
