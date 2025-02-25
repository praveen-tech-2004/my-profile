import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faCogs } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a <strong>Web Developer</strong> with expertise in <strong>Python, JavaScript, React.js, and Machine Learning</strong>. 
        I love solving problems and building scalable, user-friendly applications.
      </p>
      <ul>
        <li><FontAwesomeIcon icon={faLaptopCode} /> Programming Languages: Python, JavaScript, Java, C, React.js</li>
        <li><FontAwesomeIcon icon={faDatabase} /> Databases: MySQL, MongoDB</li>
        <li><FontAwesomeIcon icon={faCogs} /> Tools: Git, GitHub, Visual Studio Code</li>
      </ul>
    </section>
  );
};

export default About;