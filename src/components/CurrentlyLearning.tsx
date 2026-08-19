import React from 'react';
import { currentlyLearning } from '../data/portfolioData';
import { BookOpen, Sparkles, TrendingUp } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>06. CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F0F6FC]">
            Currently Learning & Deep Diving
          </h2>
          <p className="text-xs sm:text-sm text-[#8B949E] max-w-xl">
            Staying at the cutting edge by continuously expanding knowledge across software architecture and intelligent systems.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-indigo-500/40 transition-colors space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#F0F6FC] group-hover:text-indigo-400 transition-colors">
                  {item.topic}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D1117] border border-[#30363D] text-indigo-300">
                  {item.level}
                </span>
              </div>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
