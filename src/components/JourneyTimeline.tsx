import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { Milestone, GraduationCap, Code, Cpu, Sparkles } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'Code':
        return <Code className="w-4 h-4 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-indigo-300" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-green-400" />;
      default:
        return <Milestone className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Milestone className="w-3.5 h-3.5" />
            <span>07. CHRONOLOGY & EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
            From foundational computing and algorithms to architecting full-stack applications and AI models.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-[#30363D] ml-4 md:ml-6 space-y-8 pb-4">
          {journeyMilestones.map((milestone, idx) => (
            <div
              key={idx}
              id={`journey-milestone-${idx}`}
              className="relative pl-6 md:pl-8 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#0D1117] border-2 border-indigo-500/50 flex items-center justify-center group-hover:border-indigo-400 group-hover:scale-110 transition-all shadow-md shadow-indigo-500/10">
                {getIcon(milestone.icon)}
              </div>

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#161B22] border border-[#30363D] group-hover:border-indigo-500/40 transition-colors space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-300 px-2.5 py-0.5 rounded bg-indigo-950/40 border border-indigo-900/40">
                      {milestone.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#F0F6FC] mt-1.5">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#8B949E]">
                    {milestone.roleOrDegree}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {milestone.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded bg-[#0D1117] border border-[#30363D] text-[11px] font-mono text-indigo-300"
                    >
                      {tag}
                    </span>
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
