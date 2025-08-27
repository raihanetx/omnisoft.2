import React from 'react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years of Experience' },
  { value: '1M+', label: 'Users Reached' },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;