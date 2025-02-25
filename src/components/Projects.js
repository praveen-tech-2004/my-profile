import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2><FontAwesomeIcon icon={faProjectDiagram} /> Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Web Scraping with BeautifulSoup4 and Requests</h3>
          <p><FontAwesomeIcon icon={faCodeBranch} /> Tech Stack: Python, BeautifulSoup, Requests, Regular Expressions (re).</p>
        </div>
        <div className="project">
          <h3>Recipe Maker Application</h3>
          <p><FontAwesomeIcon icon={faCodeBranch} /> Tech Stack: React, Google Gemini API, CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;