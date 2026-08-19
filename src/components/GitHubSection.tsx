import React from 'react';
import { personalInfo, projects } from '../data/portfolioData';
import { Github, GitBranch, Star, ArrowUpRight, Code, FolderGit2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github-section" className="py-16 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-2xl bg-[#161B22] border border-[#30363D] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-xs font-mono text-indigo-400">
                <Github className="w-3.5 h-3.5" />
                <span>09. OPEN SOURCE & CODE</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F0F6FC]">
                More of my work lives on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-[#8B949E]">
                Explore full source code repositories, commit histories, and project implementations.
              </p>
            </div>

            <a
              id="github-profile-link-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1117] hover:bg-[#21262D] text-[#F0F6FC] font-semibold text-xs border border-[#30363D] hover:border-indigo-500/40 transition-colors shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </div>

          {/* Quick Repos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {projects.slice(0, 6).map((proj) => (
              <a
                key={proj.id}
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-indigo-500/50 transition-colors group flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#F0F6FC] group-hover:text-indigo-400 flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-[#8B949E]" />
                    {proj.title}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8B949E] group-hover:text-indigo-400" />
                </div>
                <p className="text-[11px] text-[#8B949E] line-clamp-1">
                  {proj.tagline}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#8B949E] pt-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-indigo-300">{proj.technologies[0]}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
