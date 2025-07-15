import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { TypeAnimation } from 'react-type-animation';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaRegPaperPlane,
} from 'react-icons/fa';
import ViewerCounter from './ViewerCounter';
import Wavify from 'react-wavify';
import confetti from 'canvas-confetti';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_vikjp7r',
        'template_xgtrnmm',
        form.current,
        'dyaT5jTV81XGGE35Y'
      )
      .then(() => {
        setDone(true);
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        form.current.reset();
      })
      .catch((error) => console.log(error.text));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#030712] text-white overflow-hidden"
    >
      {/* Animated Heading */}
      <TypeAnimation
        sequence={[
          'Contact Me ✉️',
          2000,
          'Let’s Collaborate 💻',
          2000,
          'Say Hello 👋',
          2000,
        ]}
        wrapper="h2"
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-300 drop-shadow-md"
        speed={50}
        repeat={Infinity}
      />

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Contact Details & Socials */}
        <motion.div
          className="space-y-6 text-slate-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg">
            I’d love to hear from you! Whether you have a question or just want to say hi.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>gorrepatipraveeng@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-cyan-400 text-xl" />
              <span>+91 9346068631</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Tirupati, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/praveen-tech-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gorrepati-praveen-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* View Counter */}
          <div className="pt-8">
            <ViewerCounter />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-[#1e293b]/80 p-8 rounded-xl border border-cyan-500/30 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
          {done && <p className="text-green-400">Message sent successfully!</p>}
        </motion.form>
      </div>

      {/* Footer with Wave */}
      <motion.div
        className="text-center pt-20 text-slate-400 text-sm relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Praveen Kumar. All rights reserved. <br />
        Crafted with 💙 using React, TailwindCSS & Firebase.
      </motion.div>

      {/* Wave Animation */}
      <Wavify
        fill="#0891b2"
        paused={false}
        options={{
          height: 30,
          amplitude: 25,
          speed: 0.2,
          points: 5,
        }}
        className="absolute bottom-0 left-0 w-full z-0"
      />

      {/* Floating Contact Bubble */}
      <motion.div
        className="hidden lg:flex fixed bottom-24 left-6 z-50 items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-xl hover:bg-cyan-700 cursor-pointer"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        onClick={() => window.location.href = 'mailto:gorrepatipraveeng@gmail.com'}
      >
        <FaEnvelope />
        <span className="text-sm font-medium">Email Me</span>
      </motion.div>

      {/* Floating CTA Button */}
      <motion.a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-cyan-400 hover:scale-105 transition-all flex items-center gap-2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <FaRegPaperPlane />
        Let’s Talk
      </motion.a>
    </section>
  );
};

export default Contact;
