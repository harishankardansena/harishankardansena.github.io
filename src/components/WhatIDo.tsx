import React from 'react';
import { whatIDo } from '../data/portfolioData';
import { Code2, BrainCircuit, Smartphone, Sparkles, Layers } from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-green-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-300" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="what-i-do" className="py-20 bg-[#0D1117]/80 relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <span>02. CAPABILITIES & DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
            Bridging technical depth with user-focused implementation across full-stack systems and machine intelligence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIDo.map((item) => (
            <div
              key={item.id}
              id={`what-i-do-${item.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B949E]">
                    {item.subtitle}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#F0F6FC] group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8B949E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="pt-6 mt-6 border-t border-[#30363D] flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#0D1117] border border-[#30363D] text-xs font-mono text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
