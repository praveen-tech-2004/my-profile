import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import profilePhoto from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h1>Welcome to My Portfolio</h1>
        <p>
          <FontAwesomeIcon icon={faCode} /> Hi, I'm <strong>Gorrepati Praveen Kumar</strong>. I'm a <strong>Web Developer</strong> passionate about building amazing web applications.
        </p>
      </div>
    </section>
  );
};

export default Home;