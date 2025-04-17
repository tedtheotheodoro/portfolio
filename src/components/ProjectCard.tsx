import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  fullDescription: string;
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-purple-400 mb-3 text-sm">{project.subtitle}</p>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-between items-center">
          <Link 
            to={`/project/${project.id}`}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
          >
            View Details <ArrowRight size={16} className="ml-2" />
          </Link>
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={14} className="inline mr-1" /> Live Site
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
