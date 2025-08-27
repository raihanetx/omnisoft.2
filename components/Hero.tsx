import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center pt-32 md:pt-40 pb-20 md:pb-28 bg-transparent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* The body now has the grid background */}
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto px-6 text-center lg:text-left relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column: Text Content */}
            <div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-100 leading-tight tracking-tighter mb-6">
                    Crafting
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Premier Web Experiences.</span>
                  </h1>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed mx-auto lg:mx-0">
                    High-performance web solutions for modern brands that demand results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <a
                    href="#contact"
                    className="group flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Start Your Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">»</span>
                  </a>
                  <a
                    href="#work"
                    className="group flex items-center justify-center gap-2 bg-white/5 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-sm hover:shadow-md transform hover:-translate-y-1 w-full sm:w-auto backdrop-blur-sm"
                  >
                    Explore Our Work
                  </a>
                </div>
            </div>

            {/* Right Column: Floating Icons */}
            <div className="hidden lg:flex justify-center items-center relative h-96 group">
                {/* Fog Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(17,17,17,0.9)_90%)] opacity-90 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                
                {/* Icons */}
                <div className="relative w-full h-full">
                    <div className="absolute top-[10%] left-[20%] animate-float" style={{ animationDuration: '12s' }}>
                        <i className="fab fa-react text-7xl text-blue-500/60 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></i>
                    </div>
                    <div className="absolute top-[25%] right-[15%] animate-float-reverse" style={{ animationDuration: '18s' }}>
                        <i className="fab fa-node-js text-6xl text-sky-500/50 opacity-50 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110"></i>
                    </div>
                    <div className="absolute bottom-[15%] left-[10%] animate-float-reverse" style={{ animationDuration: '15s' }}>
                        <i className="fab fa-python text-7xl text-blue-600/40 opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"></i>
                    </div>
                    <div className="absolute bottom-[20%] right-[30%] animate-float" style={{ animationDuration: '20s' }}>
                        <i className="fab fa-aws text-8xl text-sky-400/60 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></i>
                    </div>
                    <div className="absolute top-[50%] left-[40%] animate-float" style={{ animationDuration: '16s' }}>
                        <i className="fab fa-docker text-6xl text-blue-500/50 opacity-50 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
