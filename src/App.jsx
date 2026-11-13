import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import MissionVision from './components/sections/MissionVision.jsx';
import Team from './components/sections/Team.jsx';
import WhatWeDo from './components/sections/WhatWeDo.jsx';
import Impact from './components/sections/Impact.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-sans text-navy">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <About />
        <MissionVision />
        <Team />
        <WhatWeDo />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

