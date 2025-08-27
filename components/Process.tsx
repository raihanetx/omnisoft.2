import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, goals, and audience to create a comprehensive project roadmap.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'We craft wireframes and high-fidelity mockups, focusing on user experience and visual design.',
  },
  {
    number: '03',
    title: 'Prototyping & Feedback',
    description: 'We build interactive prototypes to gather your feedback early, ensuring the design aligns with your vision.',
  },
  {
    number: '04',
    title: 'Content Creation',
    description: 'Our team helps create or migrate compelling content that resonates with your audience.',
  },
  {
    number: '05',
    title: 'Development',
    description: 'Our developers bring the designs to life with clean, efficient, and scalable code.',
  },
  {
    number: '06',
    title: 'Quality Assurance',
    description: 'We conduct rigorous testing across all devices and browsers to ensure a flawless user experience.',
  },
  {
    number: '07',
    title: 'Deployment & Launch',
    description: 'We handle the entire deployment process for a smooth and seamless launch of your new website.',
  },
  {
    number: '08',
    title: 'Support & Optimization',
    description: 'Post-launch, we provide ongoing support and data-driven optimizations for continuous growth.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">Our Proven Process</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            A streamlined journey from idea to impact, ensuring quality and transparency at every stage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative p-8 bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur-lg">
              <div 
                className="absolute -top-4 -left-4 text-8xl font-black text-slate-700/80 select-none"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-200 mb-3 mt-4">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;