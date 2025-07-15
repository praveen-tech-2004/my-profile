import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { FaTools, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Summary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timeline = [
    {
      year: '2021',
      title: 'B.Tech Begins',
      desc: 'Started CSE (AI & ML) at SVCE, Tirupati',
      more: 'Focused on foundational computer science, AI, and ML concepts.',
    },
    {
      year: '2022',
      title: 'Full Stack Development',
      desc: 'React + Node.js + MongoDB Project',
      more: 'Built scalable web apps using MERN stack with secure authentication.',
    },
    {
      year: '2023',
      title: 'Internship at Sithafal',
      desc: 'Frontend & Backend React + Express',
      more: 'Worked with agile teams, delivered dashboards and stateful UIs.',
    },
    {
      year: '2024',
      title: 'GenAI Applications',
      desc: 'Resume Ranker, Shape Detection, Recipe Bot',
      more: 'Explored prompt engineering, LLMs, and deep learning use cases.',
    },
  ];

  const stats = [
    {
      end: 25,
      label: 'Projects',
      icon: <FaLaptopCode className="text-yellow-400 text-2xl" />,
    },
    {
      end: 6,
      label: 'Hackathons',
      icon: <FaTools className="text-pink-400 text-2xl" />,
    },
    {
      end: 4,
      label: 'Tech Chapters',
      icon: <FaUsers className="text-cyan-300 text-2xl" />,
    },
  ];

  return (
    <section
      id="summary"
      ref={ref}
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#030712] via-[#111827] to-[#030712] text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-300 drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Summary & Technical Growth
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-lg text-slate-300 mb-14 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer & AI Enthusiast</span> blending user-centric design with real-world problem-solving through machine learning, GenAI, and scalable web solutions.
      </motion.p>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="w-64 p-6 text-center bg-[#1e293b]/80 border border-cyan-600 rounded-xl shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-3xl font-bold text-cyan-300">
              <CountUp end={item.end} duration={2} />+
            </h3>
            <p className="text-sm text-slate-400 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="grid md:grid-cols-2 gap-10">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border-l-4 border-cyan-500 bg-slate-800/70 rounded-lg shadow hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h4 className="text-sm text-cyan-400 font-bold">{item.year}</h4>
            <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
            <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
            <p className="text-sm text-cyan-100 mt-2">{item.more}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
