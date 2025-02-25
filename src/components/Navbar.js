import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faProjectDiagram, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home">Praveen Kumar</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
          <li><a href="#summary"><FontAwesomeIcon icon={faFileAlt} /> Summary</a></li>
          <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
          <li><a href="#certificates"><FontAwesomeIcon icon={faCertificate} /> Certificates</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;