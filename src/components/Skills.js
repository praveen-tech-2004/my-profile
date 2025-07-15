import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/doc/' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/docs/' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://dev.mysql.com/doc/' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg', url: 'https://docs.github.com/' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/doc' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://docs.oracle.com/en/java/' },
  { name: 'Machine Learning', logo: 'https://cdn-icons-png.flaticon.com/512/5355/5355745.png', url: 'https://scikit-learn.org/stable/documentation.html' },
  { name: 'Generative AI', logo: 'https://cdn-icons-png.flaticon.com/512/11213/11213094.png', url: 'https://cloud.google.com/vertex-ai/docs/generative-ai/overview' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#030712] text-white overflow-hidden"
    >
      {/* Glow Circles */}
      <motion.div
        className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-[100px] top-10 left-10 z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] bottom-10 right-10 z-0"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300 drop-shadow-md relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack & Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <motion.a
            href={skill.url}
            key={skill.name}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e293b]/80 border border-cyan-400/20 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-xl transition-all hover:shadow-[0_0_30px_#22d3ee] group hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center mb-3 overflow-hidden">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-cyan-200 font-semibold text-sm">{skill.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
