import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navLinks = ['About', 'Services', 'Work', 'Process', 'Team', 'Testimonials', 'FAQ'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? 'bg-slate-900/50 shadow-md backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2 text-slate-100">
              <LogoIcon className="h-8 w-8 text-slate-100" />
              <span className="font-bold text-xl tracking-tight">Stellar</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 hover:text-slate-100 transition-colors duration-200 font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-block bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Schedule a Call
            </a>
            
            <button className="md:hidden text-slate-200 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
               <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-lg transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 flex flex-col h-full">
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-white text-3xl font-bold transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-blue-500 text-white font-semibold px-5 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 mt-8"
            >
              Schedule a Call
            </a>
          </div>
      </div>
    </>
  );
};

export default Header;