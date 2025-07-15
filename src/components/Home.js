import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaCode } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import profilePhoto from '../assets/profile.jpg';

const profileVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, 10, -10, 5, -5, 0],
    boxShadow: '0px 20px 40px rgba(255,255,255,0.5)',
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const glowRingVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row justify-between items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e40af] text-white overflow-hidden px-6 md:px-12 lg:px-24 py-20 gap-10"
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          particles: {
            number: { value: 40 },
            color: { value: '#ffffff' },
            size: { value: 2 },
            move: { enable: true, speed: 0.3 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
          },
        }}
      />

      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight relative">
          <motion.span
            initial={{ rotate: -15 }}
            animate={{ rotate: [0, -20, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>{' '}
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            Gorrepati Praveen Kumar
          </span>
        </h1>

        <div className="text-xl md:text-2xl font-medium">
          <TypeAnimation
            sequence={[
              'Web Developer 💻',
              2000,
              'Machine Learning Explorer 🧠',
              2000,
              'GenAI Innovator 🤖',
              2000,
              'UI/UX Enthusiast 🎨',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-pink-300 hover:animate-pulse"
          />
        </div>

        <p className="text-base md:text-lg text-slate-300 max-w-xl">
          <FaCode className="inline mr-2 text-pink-400 animate-bounce" />
          I specialize in building innovative, scalable web experiences and integrating AI to solve real-world problems.
        </p>

        <div className="flex gap-4 mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-bold shadow-xl hover:shadow-indigo-400 transition-transform duration-300"
          >
            🚀 View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black font-semibold transition duration-300 shadow hover:shadow-lg"
          >
            📬 Let's Connect
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center relative group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          variants={glowRingVariants}
          animate="animate"
          className="absolute w-80 h-80 rounded-full border-4 border-pink-400/40 blur-md z-0"
        />
        <motion.img
          variants={profileVariants}
          whileHover="hover"
          src={profilePhoto}
          alt="Profile"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-white/30 shadow-2xl object-cover cursor-pointer relative z-10"
        />
      </motion.div>

      {/* Optional Color Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[180px] opacity-20 top-[10%] left-[-10%]"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[160px] opacity-20 bottom-[10%] right-[-10%]"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Home;
