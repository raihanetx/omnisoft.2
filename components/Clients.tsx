import React from 'react';

const clients = [
  'TechCorp',
  'Innovate Inc.',
  'QuantumLeap',
  'Synergy Solutions',
  'Apex Dynamics',
  'Zenith Group',
  'Starlight',
  'Momentum'
];

const Clients: React.FC = () => {
  const half = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, half);
  const row2 = clients.slice(half);

  const extendedRow1 = [...row1, ...row1];
  const extendedRow2 = [...row2, ...row2];

  return (
    <section id="clients" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">Trusted by Industry Leaders</h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400">
            We are proud to have collaborated with a diverse range of forward-thinking companies.
          </p>
        </div>

        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none"></div>
          <div className="space-y-8">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                {extendedRow1.map((client, index) => (
                    <div
                        key={`${client}-${index}-row1`}
                        className="flex-shrink-0 mx-12 flex items-center justify-center"
                    >
                        <span className="text-3xl font-bold text-slate-500 tracking-widest uppercase transition-colors duration-300 hover:text-slate-100">
                            {client}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
                {extendedRow2.map((client, index) => (
                    <div
                        key={`${client}-${index}-row2`}
                        className="flex-shrink-0 mx-12 flex items-center justify-center"
                    >
                        <span className="text-3xl font-bold text-slate-500 tracking-widest uppercase transition-colors duration-300 hover:text-slate-100">
                            {client}
                        </span>
                    </div>
                ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;