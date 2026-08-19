import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Sparkles, FolderGit2, Info, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Full-Stack', 'AI / ML', 'Utility'];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>04. FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
              Practical software engineering spanning AI-powered text classification, civic tech reporting, business management portals, and media systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedFilter === filter
                    ? 'bg-indigo-600/25 text-indigo-200 border border-indigo-500/50 font-semibold'
                    : 'bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC] border border-[#30363D]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                
                {/* Visual Header / Mockup Preview Block */}
                <div className="relative p-5 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
                  
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#0D1117] border border-[#30363D] text-indigo-300">
                      Project 0{index + 1}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.isLive ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live Demo
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0D1117] border border-[#30363D] text-[#8B949E]">
                          Repository
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#F0F6FC] group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-300/90 font-mono mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4">
                  <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#0D1117] border border-[#30363D] text-[11px] font-mono text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-[#0D1117] border border-[#30363D] text-[10px] font-mono text-[#8B949E]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-[#30363D]/60 mt-4">
                <button
                  id={`project-details-btn-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B949E] hover:text-indigo-400 transition-colors py-2"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Study & Details</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source on GitHub"
                    className="p-2 rounded-lg bg-[#0D1117] hover:bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] border border-[#30363D] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      id={`project-live-btn-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Application"
                      className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Elegant Dark GitHub Projects Banner */}
        <div className="mt-10 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-[#F0F6FC]">See all repositories on GitHub</div>
            <div className="text-xs text-[#8B949E]">Explore open source architectures, continuous deployment experiments, and commits.</div>
          </div>
          <a
            href="https://github.com/harishankardansena"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-md shadow-indigo-600/30 transition-colors whitespace-nowrap"
          >
            Browse GitHub Profile →
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
