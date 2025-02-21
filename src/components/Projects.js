import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Web Scraping with BeautifulSoup4 and Requests</h3>
          <p>
            Built a Python tool using <strong>BeautifulSoup4</strong> and <strong>Requests</strong> to scrape and analyze website data. 
            Used <strong>cosine similarity</strong> to analyze text and generate relevant responses to user queries.
          </p>
          <p><strong>Tech Stack:</strong> Python, BeautifulSoup, Requests, Regular Expressions (re).</p>
        </div>
        <div className="project">
          <h3>Recipe Maker Application</h3>
          <p>
            Developed a web application using <strong>React</strong> and <strong>Google Gemini AI API</strong> to generate recipes based on user input.
          </p>
          <p><strong>Tech Stack:</strong> React, Google Gemini API, CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;