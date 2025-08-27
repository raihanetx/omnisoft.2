import React from 'react';

const testimonials = [
  {
    quote: "Working with Stellar has been a game-changer for our business. Their attention to detail and commitment to excellence is unparalleled. We saw a 200% increase in engagement.",
    name: 'Sarah Johnson',
    title: 'CEO, Innovate Inc.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: "The team at Stellar transformed our vision into a stunning, functional reality. Their process is seamless, transparent, and the results truly speak for themselves.",
    name: 'Michael Chen',
    title: 'Founder, Tech Solutions',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote: "I was thoroughly impressed by their professionalism and deep technical expertise. They delivered a high-quality product on time and on budget, exceeding all our expectations.",
    name: 'Emily Rodriguez',
    title: 'Marketing Director, Creative Co.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
  {
    quote: "Stellar's design sense is incredible. They took our vague ideas and turned them into a masterpiece that has received nothing but compliments from our users and stakeholders.",
    name: 'David Lee',
    title: 'Product Manager, Synergize',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
  },
  {
    quote: "A truly collaborative partner that feels like an extension of our own team. The final website exceeded our wildest dreams.",
    name: 'Jessica Williams',
    title: 'COO, Apex Dynamics',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
  },
  {
    quote: "Their strategic insights were invaluable. Not just developers, but true digital architects who understand business needs.",
    name: 'Kevin Brown',
    title: 'CTO, QuantumLeap',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
  },
  {
    quote: "From concept to launch, the communication was flawless. Stellar is the gold standard for web agencies.",
    name: 'Olivia Martinez',
    title: 'Founder, Starlight',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026710d',
  },
  {
    quote: "The performance and aesthetics of our new platform are top-tier. An absolute pleasure to work with them.",
    name: 'Brian Taylor',
    title: 'CEO, Momentum',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026711d',
  },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="flex-shrink-0 mx-4 w-96 bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between shadow-lg backdrop-blur-lg">
    <div>
      <i className="fas fa-quote-left text-3xl text-slate-700 mb-4 opacity-50"></i>
      <p className="text-slate-300 leading-relaxed italic text-base">
        "{testimonial.quote}"
      </p>
    </div>
    <div className="flex items-center mt-6 pt-6 border-t border-slate-700">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-600" />
      <div>
        <h4 className="font-bold text-slate-200">{testimonial.name}</h4>
        <p className="text-sm text-slate-400">{testimonial.title}</p>
      </div>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
    const half = Math.ceil(testimonials.length / 2);
    const row1 = testimonials.slice(0, half);
    const row2 = testimonials.slice(half);

    // Duplicate the content to create a seamless loop
    const extendedRow1 = [...row1, ...row1];
    const extendedRow2 = [...row2, ...row2];

    return (
    <section id="testimonials" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            We are proud to have partnered with amazing businesses. Here's what they think about us.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none"></div>
          <div className="space-y-8">
              <div className="flex items-start animate-marquee">
                  {extendedRow1.map((testimonial, index) => (
                      <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-${index}-row1`} />
                  ))}
              </div>
              <div className="flex items-start animate-marquee-reverse">
                  {extendedRow2.map((testimonial, index) => (
                      <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-${index}-row2`} />
                  ))}
              </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;