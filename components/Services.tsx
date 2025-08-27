import React from 'react';

const serviceItems = [
  {
    icon: <i className="fas fa-compass text-3xl"></i>,
    title: 'Brand Strategy',
    description: 'Defining your brand’s voice, identity, and market positioning for a strong digital foundation.',
    className: 'lg:col-span-2',
  },
  {
    icon: <i className="fas fa-palette text-3xl"></i>,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that provide an exceptional user experience.',
    className: 'lg:col-span-2',
  },
  {
    icon: <i className="fas fa-code text-3xl"></i>,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and applications with the latest technologies. Our expertise spans the full stack, ensuring a seamless and robust digital product.',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    icon: <i className="fas fa-shopping-cart text-3xl"></i>,
    title: 'E-commerce Solutions',
    description: 'Developing robust, scalable online stores that drive sales and enhance customer loyalty.',
    className: '',
  },
    {
    icon: <i className="fas fa-server text-3xl"></i>,
    title: 'Cloud & DevOps',
    description: 'Automating deployment and scaling your infrastructure for maximum reliability and performance.',
    className: '',
  },
  {
    icon: <i className="fas fa-chart-line text-3xl"></i>,
    title: 'SEO & Marketing',
    description: 'Boosting your online visibility and driving qualified traffic with data-driven SEO strategies.',
    className: 'lg:col-span-2',
  }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="relative py-20 md:py-28 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">A Full Suite of Services</h2>
                    <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400">
                        We offer a complete range of services to build, launch, and grow your digital presence. Explore our capabilities, tailored to deliver excellence at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6 lg:gap-8">
                  {serviceItems.map((service, index) => (
                    <div 
                      key={index} 
                      className={`group relative p-8 bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-lg transition-all duration-300 hover:border-blue-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col ${service.className}`}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-blue-400 mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm flex-grow">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    );
};

export default Services;