import React from 'react';

const technologies = [
  { name: 'React', iconClass: 'fab fa-react' },
  { name: 'Angular', iconClass: 'fab fa-angular' },
  { name: 'Vue.js', iconClass: 'fab fa-vuejs' },
  { name: 'JavaScript', iconClass: 'fab fa-js-square' },
  { name: 'HTML5', iconClass: 'fab fa-html5' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
  { name: 'Tailwind CSS', iconClass: 'fas fa-wind' },
  { name: 'PHP', iconClass: 'fab fa-php' },
  { name: 'Go', iconClass: 'fab fa-golang' },
  { name: 'Node.js', iconClass: 'fab fa-node-js' },
  { name: 'Python', iconClass: 'fab fa-python' },
  { name: 'Laravel', iconClass: 'fab fa-laravel' },
  { name: 'Docker', iconClass: 'fab fa-docker' },
  { name: 'MongoDB', iconClass: 'fas fa-leaf' },
  { name: 'PostgreSQL', iconClass: 'fas fa-database' },
  { name: 'AWS', iconClass: 'fab fa-aws' },
];

const TechStack: React.FC = () => {
  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  const extendedRow1 = [...row1, ...row1];
  const extendedRow2 = [...row2, ...row2];

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">The Technology We Use</h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400">
            We leverage a modern, scalable, and robust tech stack to build high-performance
            applications that stand the test of time.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none"></div>
          <div className="space-y-8">
              <div className="flex animate-marquee">
                  {extendedRow1.map((tech, index) => (
                      <div
                          key={`${tech.name}-${index}-row1`}
                          title={tech.name}
                          className="group flex-shrink-0 mx-6 aspect-square h-24 w-24 bg-slate-900/50 border border-slate-700 rounded-2xl flex items-center justify-center
                                      hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
                      >
                          <div className="transition-transform duration-300 group-hover:scale-110">
                              <i className={`${tech.iconClass} text-5xl text-slate-300`}></i>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="flex animate-marquee-reverse">
                  {extendedRow2.map((tech, index) => (
                      <div
                          key={`${tech.name}-${index}-row2`}
                          title={tech.name}
                          className="group flex-shrink-0 mx-6 aspect-square h-24 w-24 bg-slate-900/50 border border-slate-700 rounded-2xl flex items-center justify-center
                                      hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
                      >
                          <div className="transition-transform duration-300 group-hover:scale-110">
                              <i className={`${tech.iconClass} text-5xl text-slate-300`}></i>
                          </div>
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

export default TechStack;