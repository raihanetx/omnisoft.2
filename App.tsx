import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Work />
        <Process />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;