import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Footer: React.FC = () => {
  const navLinks = ['About', 'Services', 'Work', 'Process'];
  const socialLinks = [
    { icon: <i className="fab fa-twitter"></i>, href: '#' },
    { icon: <i className="fab fa-linkedin-in"></i>, href: '#' },
    { icon: <i className="fab fa-github"></i>, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2 text-white">
              <LogoIcon className="h-8 w-8 text-white" />
              <span className="font-bold text-xl tracking-tight">Stellar</span>
            </a>
            <p>Crafting the future of the web, one project at a time.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 text-2xl">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stellar Web Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;