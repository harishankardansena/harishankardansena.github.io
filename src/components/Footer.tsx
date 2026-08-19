import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-10 bg-[#0D1117] border-t border-[#30363D] text-xs text-[#8B949E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright & Info */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-[#F0F6FC]">
              © 2026 Harishankar Dansena. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-[#8B949E]">
              Built with React • Tailwind CSS • TypeScript • Deployed for GitHub Pages
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              id="footer-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#8B949E] hover:text-indigo-400 transition-colors p-1"
            >
              <span>↑ Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
