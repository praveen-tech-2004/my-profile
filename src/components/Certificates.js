import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './CertificatesCube.css';

const certificates = [
  {
    title: 'JavaScript Data Structures and Algorithms',
    issuer: 'FreeCodeCamp',
    logo: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg',
    link: 'https://www.freecodecamp.org/certification/praveen2004/javascript-algorithms-and-data-structures',
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'Wipro TalentNext',
    logo: 'https://www.wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg',
    link: 'https://cert.diceid.com/cid/CS7eKP6L3G',
  },
  {
    title: 'Application Developer - Web and App',
    issuer: 'Skill India (PMKVY)',
    logo: 'https://www.skillindiadigital.gov.in/assets/new-ux-img/skill-india-big-logo.svg',
    link: 'https://drive.google.com/file/d/1btO9GvbyMijNxoxn-3pyPiG4NlJBCnWr/view?usp=sharing',
  },
  {
    title: 'Data Science Industry Insights',
    issuer: 'MITS',
    logo: 'https://mits.ac.in/images/logo-1.jpg',
    link: 'https://drive.google.com/file/d/19qoUoxumoxYJnHoz06g9q9aWySrLLHhf/view?usp=sharing',
  },
  {
    title: 'Introduction to MongoDB for Students',
    issuer: 'MongoDB University',
    logo: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png',
    link: 'https://learn.mongodb.com/c/txmCcB9uQTu2OwXYKFlM5w',
  },
  {
    title: 'Generative AI with Streamlit',
    issuer: 'Google Cloud Learning',
    logo: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
    link: 'https://www.cloudskillsboost.google/public_profiles/36e237bb-01a9-4e49-81d2-b00fd9b2e441/badges/8960026',
  },
];






const CertificatesCube = () => {
  const [splitMode, setSplitMode] = useState(false);

  return (
    <section
      id="certificates"
      className="bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#030712] py-24 text-white"
    >
      <h2 className="text-4xl text-cyan-300 font-bold text-center mb-12">
        🎓 Certifications Showcase
      </h2>
      <div className="flex justify-center items-center overflow-hidden transition-all duration-700">
        {!splitMode ? (
          <div
            className="cube-scene cursor-pointer"
            style={{ width: '320px', height: '320px' }}
            onClick={() => setSplitMode(true)}
          >
            <div className="cube" style={{ width: '100%', height: '100%' }}>
              {certificates.slice(0, 6).map((cert, index) => (
                <div
                  key={index}
                  className={`cube-face face${index + 1}`}
                  style={{ width: '320px', height: '320px' }}
                >
                  <div className="flex flex-col items-center justify-center h-full w-full text-center p-6">
                   <img
  src={cert.logo}
  alt={cert.issuer}
  className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border border-cyan-300 shadow-md bg-white p-1"
/>


                    <h3 className="text-cyan-200 text-base font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-300">{cert.issuer}</p>
                    <FaExternalLinkAlt className="mt-3 text-cyan-400 text-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-500/40 border border-cyan-700 transition transform hover:scale-105"
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
                <h3 className="text-lg text-cyan-200 font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-300 mb-2">Issued by: {cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-sm inline-flex items-center hover:underline"
                >
                  View Certificate <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesCube;
