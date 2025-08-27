import React from 'react';

const teamMembers = [
  {
    name: 'Alex Thompson',
    position: 'Founder & Lead Strategist',
    avatar: 'https://i.pravatar.cc/500?u=alex',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
    skills: ['Agile Methodologies', 'Product Management', 'Market Analysis'],
  },
  {
    name: 'Jessica Miller',
    position: 'Head of Design',
    avatar: 'https://i.pravatar.cc/500?u=jessica',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'Brand Identity'],
  },
  {
    name: 'David Chen',
    position: 'Lead Full-Stack Engineer',
    avatar: 'https://i.pravatar.cc/500?u=david',
    socials: {
      github: '#',
      linkedin: '#',
    },
    skills: ['React', 'Next.js', 'Node.js', 'PHP', 'DevOps'],
  },
  {
    name: 'Maria Garcia',
    position: 'Senior Frontend Developer',
    avatar: 'https://i.pravatar.cc/500?u=maria',
    socials: {
      github: '#',
      twitter: '#',
    },
    skills: ['React', 'Next.js', 'Tailwind CSS', 'GSAP'],
  },
];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
  return (
    <div className="flex-shrink-0 mx-4 w-72 bg-slate-900/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:border-blue-400/50 hover:-translate-y-1 backdrop-blur-lg">
      <img
        src={member.avatar}
        alt={member.name}
        className="w-20 h-20 rounded-full mb-3 border-2 border-slate-600 shadow-md"
      />
      <h3 className="text-xl font-bold text-slate-200">{member.name}</h3>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 font-medium mb-3 h-12 flex items-center">
        {member.position}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-3 h-14">
        {member.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-medium self-start"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-700 w-full justify-center">
        {member.socials.twitter && (
          <a href={member.socials.twitter} className="text-slate-400 hover:text-white transition-colors" aria-label={`${member.name}'s Twitter`}>
            <i className="fab fa-twitter text-xl"></i>
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} className="text-slate-400 hover:text-white transition-colors" aria-label={`${member.name}'s LinkedIn`}>
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        )}
        {member.socials.github && (
          <a href={member.socials.github} className="text-slate-400 hover:text-white transition-colors" aria-label={`${member.name}'s Github`}>
            <i className="fab fa-github text-xl"></i>
          </a>
        )}
      </div>
    </div>
  );
};


const Team: React.FC = () => {
  const extendedTeamMembers = [...teamMembers, ...teamMembers];
  return (
    <section id="team" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            The brilliant minds behind our success. We're a group of passionate creators, thinkers, and innovators.
          </p>
        </div>
        
        <div className="relative group overflow-hidden">
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-full z-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                }}
            />

            <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
            
            <div className="flex py-4 animate-marquee group-hover:[animation-play-state:paused]">
                {extendedTeamMembers.map((member, index) => (
                    <TeamMemberCard member={member} key={`${member.name}-${index}`} />
                ))}
            </div>

            <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Team;