import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaFileAlt,
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'summary', label: 'Summary', icon: <FaFileAlt /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);

      // Active section detection
      let current = 'home';
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop - 80 <= scrollTop) {
          current = link.id;
        }
      });
      setActiveSection(current);
      setScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setIsOpen(false));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => setIsOpen(false));
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 shadow-md ${
        scrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-cyan-500'
          : 'bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364]'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-3xl font-bold tracking-wider text-white transform-gpu transition duration-300 hover:scale-105"
          whileHover={{ rotateX: 5, rotateY: -5 }}
          aria-label="Go to Home"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-2xl">
            Praveen Kumar
          </span>
        </motion.a>

        <div className="md:hidden text-3xl text-white cursor-pointer" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative group"
            >
              <a
                href={`#${link.id}`}
                className={`text-white flex items-center gap-2 text-sm font-medium px-4 py-2 transition-all duration-300 ${
                  activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-300'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-4 px-6 py-6 bg-black text-white border-t border-cyan-600 shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={toggleMenu}
                  className={`block py-3 px-5 text-lg rounded transition-all ${
                    activeSection === link.id ? 'bg-cyan-700/30 text-cyan-300' : 'hover:bg-cyan-700/30'
                  }`}
                >
                  {link.icon} <span className="ml-2">{link.label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 w-full origin-left"
        animate={{ scaleX: scrollProgress }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.nav>
  );
};

export default Navbar;
