import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-16 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-[#161B22] border border-[#30363D] p-8 sm:p-10 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle Ambient Light */}
          <div className="absolute left-0 top-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>08. RESUME & CREDENTIALS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] tracking-tight">
              Want to know more about my experience?
            </h3>
            <p className="text-sm text-[#8B949E] max-w-xl">
              Download my complete technical resume summarizing education, engineering projects, core technologies, and contact details.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#8B949E] pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                Updated 2026
              </span>
              <span>•</span>
              <span>B.Tech CSE Undergrad</span>
              <span>•</span>
              <span>Full-Stack & AI/ML</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              id="resume-section-view-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1117] hover:bg-[#21262D] text-[#F0F6FC] font-semibold text-xs border border-[#30363D] transition-colors"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>Preview Resume</span>
            </button>

            <button
              id="resume-section-download-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
