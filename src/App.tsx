import React from 'react';
import StarrySky from './components/ui/StarrySky';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingIcons from './components/ui/FloatingIcons';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Writing from './components/sections/Writing';
import Awards from './components/sections/Awards';
import Sidequests from './components/sections/Sidequests';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <StarrySky />
      <ScrollProgress />
      <FloatingIcons />
      <Navigation />
      <Hero />
      <Skills />
      <div className="page">
        <Experience />
        <Projects />
        <Research />
        <Writing />
        <Awards />
        <Sidequests />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
