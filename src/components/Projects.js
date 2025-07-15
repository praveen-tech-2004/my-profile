import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLock } from 'react-icons/fa';

const projects = [
  {
    name: 'Web Scraping Chatbot',
    desc: 'Built an intelligent chatbot that fetches real-time data from the web using BeautifulSoup4 and Python.',
    tech: ['Python', 'Flask', 'BeautifulSoup4'],
    link: 'https://github.com/praveen-tech-2004/Webscraping_chatbot',
  },
  {
    name: 'Bone Fracture Detection',
    desc: 'ResNet-50-based X-ray image classifier to detect bone fractures with high accuracy.',
    tech: ['ResNet50', 'Keras', 'OpenCV'],
    link: 'https://github.com/praveen-tech-2004/Bone-Fracture-Detection',
  },
  {
    name: 'Gemini API – Recipe Bot',
    desc: 'Created a food recipe generator chatbot using Google Gemini AI with context-based prompting.',
    tech: ['React.js', 'Gemini API', 'Tailwind CSS'],
    link: 'https://github.com/praveen-tech-2004/Gemini-api',
  },
  {
    name: 'Resume Parsing (Confidential)',
    desc: 'Built a smart resume matcher using PDF parsing and ML-based scoring (confidential use case).',
    tech: ['Node.js', 'ML', 'PDF Parsing'],
    link: null, // private
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#030712] text-white overflow-hidden"
    >
      {/* Glow Background Effects */}
      <motion.div
        className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] top-16 left-10 z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-400/10 rounded-full blur-[100px] bottom-10 right-10 z-0"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300 drop-shadow-xl relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-[#1e293b]/80 border border-cyan-500/30 rounded-2xl p-6 shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee] relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Halo Ring */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-full scale-150 -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-cyan-600/20 text-cyan-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline hover:text-cyan-100 transition"
              >
                <FaGithub className="text-lg" /> View on GitHub
              </a>
            ) : (
              <div className="text-sm text-slate-400 italic flex items-center gap-2">
                <FaLock className="text-pink-400" /> Private Project
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
