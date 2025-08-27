import React, { useState } from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'E-commerce',
    title: 'Modern E-commerce Platform',
    description: 'A cutting-edge platform for a fashion brand, focusing on user experience and seamless checkout. We developed a custom Shopify theme and integrated a headless CMS for dynamic content management, resulting in a 40% increase in conversion rates.',
    tags: ['Next.js', 'Shopify', 'Tailwind CSS', 'GraphQL']
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'SaaS',
    title: 'Analytics Dashboard',
    description: 'A data visualization tool for a tech startup, helping users make informed decisions with complex datasets. We built a highly interactive and performant dashboard using React and D3.js, capable of handling real-time data streams.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket']
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Corporate Website',
    title: 'Creative Agency Portfolio',
    description: 'A visually-driven portfolio site to showcase the work of a leading design agency with fluid animations. The site was built on Webflow with custom code integrations for a unique, award-winning user experience.',
    tags: ['Figma', 'Webflow', 'GSAP', 'CMS']
  },
   {
    image: 'https://images.unsplash.com/photo-1586953208448-b95a6394d123?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Mobile App',
    title: 'Wellness & Fitness App',
    description: 'A mobile application designed to help users track their fitness goals and maintain a healthy lifestyle. Featuring personalized workout plans, progress tracking, and social sharing capabilities, built cross-platform with React Native.',
    tags: ['React Native', 'Firebase', 'GraphQL', 'iOS & Android']
  },
];

const Work: React.FC = () => {
    const [activeProject, setActiveProject] = useState(projects[0]);

    return (
        <section id="work" className="py-20 md:py-28 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">Our Creative Showcase</h2>
                     <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
                        Explore a curated selection of our most innovative and impactful projects.
                     </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Project Details with Accordion */}
                    <div className="flex flex-col">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                onMouseEnter={() => setActiveProject(project)}
                                className="group cursor-pointer border-t border-slate-700 py-8 first:border-t-0"
                            >
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className={`text-sm font-semibold mb-1 transition-colors duration-300 ${activeProject.title === project.title ? 'text-blue-400' : 'text-slate-400'}`}>
                                        {project.category}
                                    </p>
                                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeProject.title === project.title ? 'text-slate-100' : 'text-slate-500 group-hover:text-slate-200'}`}>
                                        {project.title}
                                    </h3>
                                  </div>
                                  <span className={`text-slate-500 transition-all duration-300 transform -rotate-45 group-hover:rotate-0 text-2xl ${activeProject.title === project.title ? 'text-slate-200 rotate-0' : ''}`}>»</span>
                                </div>

                                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${activeProject.title === project.title ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className={`text-slate-400 leading-relaxed mb-4 transition-all duration-300 ease-out ${activeProject.title === project.title ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span 
                                                    key={tag} 
                                                    className={`bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-out ${activeProject.title === project.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                                    style={{ transitionDelay: activeProject.title === project.title ? `${300 + i * 50}ms` : '0ms' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Project Image */}
                    <div className="sticky top-32 h-[600px]">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-slate-900/70 border border-slate-700">
                            <div className="absolute inset-0">
                                {projects.map((project) => (
                                    <img
                                        key={project.title}
                                        src={project.image}
                                        alt={project.title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${activeProject.title === project.title ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                    />
                                ))}
                            </div>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <div key={project.title} className="bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1.5">
                            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                            <div className="p-6">
                                <p className="text-blue-400 text-sm font-semibold mb-1">{project.category}</p>
                                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
