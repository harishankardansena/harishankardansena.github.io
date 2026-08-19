import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Code2, BrainCircuit, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const highlightCards = [
    {
      id: 'about-card-edu',
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      label: 'Computer Science',
      value: personalInfo.education.degree,
      subvalue: `${personalInfo.education.timeline} • Final Year`,
      borderColor: 'hover:border-indigo-500/40',
    },
    {
      id: 'about-card-dev',
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      label: 'Core Development',
      value: 'Full-Stack Web & Mobile',
      subvalue: 'React, Node, Express, MongoDB, Django',
      borderColor: 'hover:border-purple-500/40',
    },
    {
      id: 'about-card-ai',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-300" />,
      label: 'Applied Focus',
      value: 'AI & Machine Learning',
      subvalue: 'NLP, Scikit-learn, Classification Pipelines',
      borderColor: 'hover:border-indigo-400/40',
    },
    {
      id: 'about-card-loc',
      icon: <MapPin className="w-5 h-5 text-green-400" />,
      label: 'Based In',
      value: personalInfo.location,
      subvalue: 'India • Available for Remote & Onsite',
      borderColor: 'hover:border-green-500/40',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0D1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#161B22] border border-[#30363D] space-y-4">
              <p className="text-base sm:text-lg text-[#F0F6FC] leading-relaxed">
                {personalInfo.bio[0]}
              </p>
              <p className="text-base text-[#8B949E] leading-relaxed">
                {personalInfo.bio[1]}
              </p>

              <div className="pt-4 border-t border-[#30363D] space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Engineering Principles
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8B949E]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-[#F0F6FC]">Practical product execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-[#F0F6FC]">Clean modular architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-[#F0F6FC]">End-to-end full stack ownership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-[#F0F6FC]">Fast learner & active experimenter</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                id="about-explore-projects-link"
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Check out the projects I've engineered</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card & Key Details Grid */}
          <div className="lg:col-span-5 space-y-4">
            {/* Developer Portrait Preview Card */}
            <div className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] flex items-center gap-4 group">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-400 p-[1.5px] shadow-lg shadow-indigo-950/40">
                  <div className="w-full h-full rounded-[10px] bg-[#0D1117] overflow-hidden">
                    <img
                      id="about-profile-avatar-img"
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#161B22] animate-pulse" />
              </div>

              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#F0F6FC] truncate">
                    {personalInfo.name}
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/50 border border-indigo-800/40 text-indigo-300">
                    2026 Grad
                  </span>
                </div>
                <p className="text-xs font-mono text-indigo-400 truncate">
                  Full-Stack & AI/ML Developer
                </p>
                <p className="text-[11px] text-[#8B949E] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-green-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </p>
              </div>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {highlightCards.map((card) => (
                <div
                  key={card.id}
                  id={card.id}
                  className={`p-3.5 rounded-xl bg-[#161B22] border border-[#30363D] ${card.borderColor} transition-all group flex items-start gap-3.5`}
                >
                  <div className="p-2 rounded-lg bg-[#0D1117] border border-[#30363D] shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B949E]">
                      {card.label}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F0F6FC] truncate">
                      {card.value}
                    </h4>
                    <p className="text-[11px] text-[#8B949E] truncate">
                      {card.subvalue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
