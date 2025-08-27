import React, { useState } from 'react';

const faqs = [
  {
    question: 'How long does a typical web project take?',
    answer:
      'The timeline for a web project can vary greatly depending on the scope and complexity. A simple brochure website might take 4-6 weeks, whereas a complex e-commerce platform or custom web application could take 3-6 months or longer. We provide a detailed project timeline after our initial discovery and strategy phase.',
  },
  {
    question: 'How much does a new website cost?',
    answer:
      "Costs are tailored to each project's specific needs. We'll provide a detailed, itemized proposal after discussing your requirements. Our pricing reflects the high-quality, custom work we deliver. We focus on providing value and a strong return on investment for our clients.",
  },
  {
    question: 'What is your development process like?',
    answer:
      'Our process is collaborative and transparent. It typically includes four phases: Discovery & Strategy, Design & Prototyping, Development & Testing, and finally Launch & Optimization. We keep you involved at every stage with regular updates and feedback sessions to ensure the final product meets your vision.',
  },
  {
    question: 'Do you provide support after the project is launched?',
    answer:
      'Absolutely. We offer a range of ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. We believe in building long-term partnerships and are here to support your digital growth even after the initial launch.',
  },
  {
    question: 'Can you help with SEO and digital marketing?',
    answer:
      'Yes, our services extend beyond just web development. We offer comprehensive SEO and digital marketing services to help drive traffic to your new website, increase visibility in search engines, and grow your online presence.',
  },
];

const FaqItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-700 py-6">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg font-semibold text-slate-200 pr-4">{faq.question}</h3>
        <span
          className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <i className="fas fa-chevron-down"></i>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;