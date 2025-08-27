import React, { useRef } from 'react';

const features = [
  {
    icon: <i className="fas fa-bullseye text-3xl text-blue-400"></i>,
    title: 'Brand-Centric Approach',
    description: 'We dive deep into your brand identity to create a digital presence that is a true reflection of your values.',
  },
  {
    icon: <i className="fas fa-chart-line text-3xl text-blue-400"></i>,
    title: 'Results-Driven Solutions',
    description: 'Our strategies are focused on achieving measurable outcomes, ensuring a high return on your investment.',
  },
  {
    icon: <i className="fas fa-handshake text-3xl text-blue-400"></i>,
    title: 'Collaborative Partnership',
    description: 'We work with you, not just for you. Your insights are crucial to our shared success.',
  },
  {
    icon: <i className="fas fa-user-shield text-3xl text-blue-400"></i>,
    title: 'End-to-End Support',
    description: 'From initial concept to post-launch maintenance, we provide comprehensive support at every step.',
  },
];


const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = imageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
      const el = imageRef.current;
      if (!el) return;
      el.style.removeProperty('--mouse-x');
      el.style.removeProperty('--mouse-y');
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-transparent z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative rounded-2xl"
            >
              <div className="absolute -inset-2.5 bg-gradient-to-r from-blue-500 to-sky-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="A team of professionals collaborating in a modern office"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
              />
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.15), transparent 80%)' }} 
              />
            </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-tight">
              A Digital Partner,
              <br />
              Not Just a Provider.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              We believe that true success comes from a deep, collaborative partnership. We go beyond being just a service provider to become an integral part of your team, dedicated to your growth.
            </p>
             <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                 <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-900/50 transition-colors duration-300">
                    <div className="flex-shrink-0 bg-slate-800/70 h-12 w-12 rounded-lg flex items-center justify-center border border-slate-700">
                        {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-200">{feature.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{feature.description}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;