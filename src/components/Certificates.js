import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import './Certificates.css';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <h2><FontAwesomeIcon icon={faCertificate} /> Certificates</h2>
      <div className="certificate-list">
        <div className="certificate">
          <h3>JavaScript Data Structures and Algorithms</h3>
          <p>Issued by: FreeCodeCamp</p>
        </div>
        <div className="certificate">
          <h3>AI & Machine Learning</h3>
          <p>Issued by: Google Cloud Learning</p>
        </div>
        <div className="certificate">
          <h3>Application Developer - Web and App</h3>
          <p>Issued by: Skill India PMKVY</p>
        </div>
        <div className="certificate">
          <h3>Unlocking Industry Insights in Data Science</h3>
          <p>Issued by: Madanapalle Institute of Technology and Science</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;