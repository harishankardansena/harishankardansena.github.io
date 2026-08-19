import React from 'react';
import { quickStats } from '../data/portfolioData';
import { FolderGit2, Globe, Layers, Cpu } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-300" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-green-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getNumberColor = (index: number) => {
    switch (index) {
      case 0:
        return 'text-indigo-400';
      case 1:
        return 'text-purple-400';
      case 2:
        return 'text-indigo-300';
      case 3:
        return 'text-green-400';
      default:
        return 'text-[#F0F6FC]';
    }
  };

  return (
    <section id="quick-stats-strip" className="relative py-8 bg-[#0D1117] border-y border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              id={`stat-card-${index}`}
              className="relative p-5 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-indigo-500/40 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-2xl sm:text-3xl font-bold font-mono ${getNumberColor(index)}`}>
                  {stat.value}
                </span>
                <div className="p-2 rounded-lg bg-[#0D1117] border border-[#30363D]">
                  {getIcon(stat.icon)}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#F0F6FC]">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-[#8B949E] mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

