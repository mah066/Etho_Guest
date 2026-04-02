import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TrainingModules } from './components/sections/TrainingModules';
import { Features } from './components/sections/Features';
import { WhyEthoGuest } from './components/sections/WhyEthoGuest';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-200 selection:bg-teal-500/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TrainingModules />
        <Features />
        <WhyEthoGuest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
