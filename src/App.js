import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
// import About from './components/About';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Skills from './components/Skills';



function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Home />
      <Summary />
      
          <Education />
      <Skills />

  
      
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
