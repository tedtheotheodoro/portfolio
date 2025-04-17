import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to all projects
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden"
      >
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-purple-400 text-lg">{project.subtitle}</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-full bg-purple-900 bg-opacity-30 text-purple-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            {project.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-flex items-center justify-center"
            >
              <ExternalLink size={16} className="mr-2" /> View Live Project
            </a>
            <Link to="/contact" className="btn btn-outline inline-flex items-center justify-center">
              Inquire About This Project
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
