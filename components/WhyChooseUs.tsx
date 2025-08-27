import React from 'react';

const benefits = [
  'Pixel-Perfect & Responsive Design',
  'Data-Driven & Agile Approach',
  'Transparent Communication',
  'Dedicated Post-Launch Support',
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/10 rounded-2xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Team members discussing a project on a whiteboard"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-tight">
              Why Partner with Stellar?
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Choosing the right agency is crucial for your success. We stand out by offering a partnership that goes beyond code and pixels.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-blue-400 mr-3 mt-1 leading-none"></i>
                  <span className="text-base sm:text-lg text-slate-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;