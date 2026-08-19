import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, AlertCircle, CheckCircle2, Layers, Cpu, Code2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl rounded-2xl bg-[#161B22] border border-[#30363D] shadow-2xl shadow-black/90 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0D1117] border-b border-[#30363D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-600/20 border border-indigo-500/40 text-indigo-200 font-semibold">
              {project.category}
            </span>
            {project.isLive ? (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live Application
              </span>
            ) : (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#0D1117] border border-[#30363D] text-[#8B949E]">
                Open Source Repository
              </span>
            )}
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close Project Modal"
            className="p-1.5 rounded-lg bg-[#0D1117] hover:bg-[#21262D] text-[#8B949E] hover:text-white border border-[#30363D] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC]">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-indigo-400 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Architecture Visual Mockup Block */}
          <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#8B949E] pb-2 border-b border-[#30363D]">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Architecture & Overview</span>
              </span>
              <span>Harishankar Dansena</span>
            </div>
            <p className="text-sm text-[#F0F6FC] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Problem Box */}
            <div className="p-4 rounded-xl bg-[#0D1117] border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Box */}
            <div className="p-4 rounded-xl bg-[#0D1117] border border-green-500/20 space-y-2">
              <div className="flex items-center gap-2 text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B949E] font-bold">
              Key Technical Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-start gap-2 text-xs text-[#F0F6FC]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B949E] font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#0D1117] border border-[#30363D] text-xs font-mono text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-[#30363D] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                id="modal-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] hover:bg-[#21262D] text-[#F0F6FC] text-xs font-bold border border-[#30363D] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {project.liveUrl && (
                <a
                  id="modal-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#8B949E] hover:text-white px-3 py-2"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
