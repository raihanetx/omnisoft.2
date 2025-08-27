import React, { useState } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const activeProject = projects[currentIndex];

    return (
        <section id="work" className="py-20 md:py-28 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">Our Creative Showcase</h2>
                     <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
                        Explore a curated selection of our most innovative and impactful projects.
                     </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Project Display */}
                    <div className="bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md bg-slate-800">
                                {projects.map((project, index) => (
                                    <img
                                        key={project.title}
                                        src={project.image}
                                        alt={project.title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-blue-400 text-sm font-semibold mb-2">{activeProject.category}</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">{activeProject.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-5">{activeProject.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.tags.map(tag => (
                                        <span key={tag} className="bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 bg-slate-700/50 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 bg-slate-700/50 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10">
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
