import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, Code, Pen } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'NLP & Web Development', icon: <Code size={24} /> },
    { name: 'Linguistics & AI', icon: <BrainCircuit size={24} /> },
    { name: 'Educational Tools', icon: <BookOpen size={24} /> }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Language Teacher Turned Developer</h3>
            <p className="text-gray-300 mb-6">
              I'm a language teacher turned developer, with a deep fascination for linguistics, 
              technology, and the ways humans and machines process meaning.
            </p>
            <p className="text-gray-300 mb-6">
              My work combines natural language processing, creative web applications, and a passion
              for syntax, morphology, and the philosophy of language. I believe in building tools that are
              both functional and poetic — code with a voice, interfaces with personality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center"
                >
                  <div className="text-purple-400 mx-auto mb-3">{skill.icon}</div>
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-800 rounded-xl p-6 space-y-5">
              <h4 className="text-xl font-bold text-purple-400 flex items-center">
                <Pen size={18} className="mr-2" /> Technical Skills
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <Code size={14} />
                  </span>
                  <span>React, JavaScript, Firebase, Tailwind CSS, Vite</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <Code size={14} />
                  </span>
                  <span>Python with focus on NLP and data manipulation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <Code size={14} />
                  </span>
                  <span>Markdown, Git, version control workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <Code size={14} />
                  </span>
                  <span>Building fullstack projects from concept to deploy</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-bold text-purple-400 flex items-center pt-2">
                <BrainCircuit size={18} className="mr-2" /> Current Challenges
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <BookOpen size={14} />
                  </span>
                  <span>Diving deeper into backend architecture and cloud systems</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <BookOpen size={14} />
                  </span>
                  <span>Exploring data science and machine learning through practical projects</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900 bg-opacity-40 p-1 rounded mr-3 mt-0.5">
                    <BookOpen size={14} />
                  </span>
                  <span>Connecting my linguistic background with real-world software applications</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-purple-500 rounded-2xl z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
