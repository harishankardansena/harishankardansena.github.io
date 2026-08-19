import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Layout, Server, Database, Cpu, Cloud, Wrench, Search } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-purple-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-indigo-300" />;
      case 'Database':
        return <Database className="w-4 h-4 text-green-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-purple-300" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-indigo-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-indigo-400" />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = skillCategories
    .filter((cat) => (selectedCategory === 'All' ? true : cat.title === selectedCategory))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[#0D1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
              <span>03. ARSENAL & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
              Skills & Tech Stack
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
              Technologies and toolchains I work with regularly to architect, build, and deploy reliable software.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8B949E]" />
            <input
              type="text"
              placeholder="Search tech (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#161B22] border border-[#30363D] focus:border-indigo-500/50 rounded-xl text-[#F0F6FC] placeholder-[#8B949E] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filters Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600/25 text-indigo-200 border border-indigo-500/50 font-semibold'
                  : 'bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC] border border-[#30363D] hover:border-[#8B949E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              id={`skills-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#30363D]">
                  <div className="p-2 rounded-lg bg-[#0D1117] border border-[#30363D]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-[#F0F6FC]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center justify-between hover:border-indigo-500/40 transition-colors"
                    >
                      <span className="text-xs font-semibold text-[#F0F6FC]">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-300 px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-900/40">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#30363D] text-[11px] font-mono text-[#8B949E]">
                {category.skills.length} competencies listed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
