import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Summary from './components/Summary'; // Import Summary
import Certificates from './components/Certificates'; // Import Certificates
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Summary /> {/* Add Summary Section */}
      <Projects />
      <Certificates /> {/* Add Certificates Section */}
      <Contact />
    </div>
  );
}

export default App;