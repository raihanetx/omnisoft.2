import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-transparent overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(17,17,17,0))]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-tight mb-4">
          Let's build something
          <br />
          amazing together.
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10">
          Have a project in mind? We'd love to hear about it. Schedule a free, no-obligation call with our experts.
        </p>
        <a
          href="#"
          className="group inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
        >
          Schedule a Free Call
          <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">»</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
