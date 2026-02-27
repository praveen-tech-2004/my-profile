import React from 'react';
import { motion } from 'framer-motion';
import svceLogo from '../assets/svce-logo.png';
import narayanaLogo from '../assets/narayana-logo.png';
import chaitanyaLogo from '../assets/chaitanya-logo.png';

const educationData = [
  {
    title: 'B.Tech in CSE (AI & ML)',
    institution: 'Sri Venkateswara College of Engineering, Tirupati',
    year: '2021 - 2025',
    aggregate: '81%',
    logo: svceLogo,
    description:
      'Learning and implementing AI and ML-based solutions, developing deep learning projects, and actively contributing to research.',
  },
  {
    title: 'Intermediate (XII), MPC',
    institution: 'Mangal Vidyalayam, Tirupati',
    year: '2019 - 2021',
    aggregate: '93%',
    logo: narayanaLogo,
    description:
      'Focused on Mathematics, Physics, and Chemistry, with a strong foundation for engineering entrance exams.',
  },
  {
    title: 'Secondary School (X)',
    institution: 'Chaitanya Techno School, Tirupati',
    year: '2018 - 2019',
    aggregate: '85%',
    logo: chaitanyaLogo,
    description:
      'Built strong fundamentals in core subjects with a focus on logical reasoning and academic excellence.',
  },
];

const shimmerAnimation = {
  backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)',
  backgroundSize: '400% 400%',
  animation: 'shimmer 2s infinite',
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#030712] py-24 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background Floating Circles */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-[80px] animate-pulse"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500/10 rounded-full blur-[90px] animate-pulse"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Academic Background
      </motion.h2>

      {/* Grid of Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#1e293b]/80 border border-cyan-400/20 p-6 rounded-2xl shadow-md transition-all duration-500"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.7, type: 'spring' }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: '0 0 25px rgba(34,211,238,0.4)',
            }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-16 h-16 object-contain rounded-full border border-cyan-300 shadow-md"
              />
            </motion.div>

            {/* Title & Info */}
            <h3 className="text-xl font-semibold text-cyan-300 text-center group-hover:text-white transition">
              {edu.title}
            </h3>
            <p className="text-sm text-slate-400 text-center">{edu.institution}</p>
            <div className="flex justify-center items-center gap-2 text-xs text-slate-500 text-center mb-2">
              <span>{edu.year}</span>
              <span className="text-cyan-400">•</span>
              <span className="font-medium text-cyan-300">{edu.aggregate}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 text-justify leading-relaxed">
              {edu.description}
            </p>

            {/* Optional Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"
              style={shimmerAnimation}
            />
          </motion.div>
        ))}
      </div>

      {/* Custom CSS for shimmer */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Education;
