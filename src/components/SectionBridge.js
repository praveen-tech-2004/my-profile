import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaNetworkWired, FaRocket } from 'react-icons/fa';

const smartItems = [
  {
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
    title: 'AI-Powered Solutions',
    desc: 'Implemented intelligent systems with Machine Learning and Generative AI to tackle real-world challenges.',
  },
  {
    icon: <FaBrain className="text-cyan-400 text-3xl" />,
    title: 'Cognitive Automation',
    desc: 'Designed and deployed automated tools using Natural Language Processing and CV to reduce human effort.',
  },
  {
    icon: <FaNetworkWired className="text-cyan-400 text-3xl" />,
    title: 'Integrated Architecture',
    desc: 'Built scalable REST APIs and modular systems using full-stack architectures.',
  },
  {
    icon: <FaRocket className="text-cyan-400 text-3xl" />,
    title: 'Deployment Ready',
    desc: 'Dockerized and deployed applications across cloud platforms with version control and CI/CD pipelines.',
  },
];

const SmartBridge = () => {
  return (
    <section
      id="smartbridge"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#030712] via-[#111827] to-[#030712] text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-300 drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SmartBridge Internship Experience
      </motion.h2>

      {/* Intro Text */}
      <motion.p
        className="text-center max-w-3xl mx-auto text-lg text-slate-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A hands-on journey with AI, full-stack development, and real-world deployment — combining automation with futuristic learning.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {smartItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b]/80 p-6 rounded-xl border border-cyan-500/30 shadow-lg hover:shadow-cyan-400/50 transition hover:scale-[1.03]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 p-3 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
            </div>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SmartBridge;
