import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              THEODORO FRAGA
            </h2>
            <p className="text-gray-400 mt-2">Creating tools that are both functional and poetic — code with a voice.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/tedtheotheodoro" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/theodoro-fraga-b3602332b/" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:theodorofragadecastro.dev@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {currentYear} Theodoro Fraga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
