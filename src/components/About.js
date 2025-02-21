import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a <strong>Web Developer</strong> with expertise in <strong>Python, JavaScript, React.js, and Machine Learning</strong>. 
        I love solving problems and building scalable, user-friendly applications.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>Programming Languages: Python, JavaScript, Java, C, React.js</li>
        <li>Databases: MySQL, MongoDB</li>
        <li>Tools: Git, GitHub, Visual Studio Code</li>
        <li>Coursework: Object-Oriented Programming, Machine Learning, Data Structures and Algorithms</li>
      </ul>
    </section>
  );
};

export default About;