import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <AboutSection />
    </>
  );
};

export default HomePage;
