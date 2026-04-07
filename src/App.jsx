import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
