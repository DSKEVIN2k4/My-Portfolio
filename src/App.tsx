import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-cyber-charcoal text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />

      <footer className="py-8 px-4 border-t border-cyber-lime/10 text-center font-mono text-sm text-gray-500 bg-cyber-dark">
        <p>Built with React, Tailwind CSS & designed with passion | 2025</p>
      </footer>
    </div>
  );
}

export default App;
