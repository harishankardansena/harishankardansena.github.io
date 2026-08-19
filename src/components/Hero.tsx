import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Terminal, Sparkles, Code, CheckCircle2, Copy } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background subtle radial developer glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-indigo-800/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161B22] border border-[#30363D] text-xs font-mono text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">Open to Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono text-indigo-400 font-semibold tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F0F6FC]">
                HARISHANKAR DANSENA
              </h1>
            </div>

            {/* Dynamic Role Rotator & Dynamic Line */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold font-mono">
                <span className="text-[#8B949E]">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 transition-all duration-300">
                  {personalInfo.roles[roleIndex]}
                </span>
                <span className="w-2.5 h-6 bg-indigo-400 animate-pulse" />
              </div>

              {/* Four Pillar Action Mantra */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-mono text-[#8B949E] pt-1">
                <span className="text-indigo-300 font-semibold">I build.</span>
                <span>•</span>
                <span className="text-purple-300 font-semibold">I experiment.</span>
                <span>•</span>
                <span className="text-indigo-200 font-semibold">I solve.</span>
                <span>•</span>
                <span className="text-green-300 font-semibold">I ship.</span>
              </div>
            </div>

            {/* Bio statement */}
            <div className="text-base sm:text-lg text-[#8B949E] leading-relaxed max-w-2xl space-y-2">
              <p>Full-Stack Developer and AI/ML enthusiast building practical web, mobile, and intelligent software applications.</p>
              <p>I build with React, Node.js, Python, Django, React Native, and machine learning to turn ideas into usable products.</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white hover:bg-gray-100 text-black font-bold text-sm shadow-md shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects →</span>
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#30363D] hover:bg-[#3d444d] text-white font-bold text-sm border border-[#30363D] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume ↓</span>
              </button>

              <a
                id="hero-contact-quick-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161B22] hover:bg-[#21262D] text-[#F0F6FC] font-semibold text-sm border border-[#30363D] transition-colors"
              >
                <span>Contact Me</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  id="hero-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-[#161B22] hover:bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] border border-[#30363D] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-[#161B22] hover:bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] border border-[#30363D] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  id="hero-terminal-toggle"
                  onClick={() => setShowTerminal(!showTerminal)}
                  title="Toggle Developer Terminal"
                  className={`p-2.5 rounded-lg border transition-colors ${
                    showTerminal
                      ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300'
                      : 'bg-[#161B22] hover:bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] border-[#30363D]'
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Email Copy Chip */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-[#8B949E]">Direct Email:</span>
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B22] hover:bg-[#21262D] border border-[#30363D] text-xs font-mono text-indigo-300 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-green-400">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#8B949E]" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Profile Visual Card & Interactive Developer Widget */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {!showTerminal ? (
              /* Profile Card with Avatar & Tech Badges */
              <div className="relative w-full max-w-sm rounded-2xl bg-[#161B22] border border-[#30363D] p-7 shadow-2xl shadow-black/60 transition-all hover:border-indigo-500/50 group">
                
                {/* Ambient glow behind avatar */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col items-center text-center space-y-4">
                  
                  {/* Photo / Avatar with Tech Frame */}
                  <div className="relative">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-400 p-[2px] shadow-xl shadow-indigo-950/40 group-hover:scale-105 transition-all duration-300">
                      <div className="w-full h-full rounded-[14px] bg-[#161B22] overflow-hidden relative flex items-center justify-center">
                        <img
                          id="hero-profile-avatar-img"
                          src={personalInfo.avatarUrl}
                          alt={personalInfo.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback to initials if image fails
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = document.getElementById('hero-avatar-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div
                          id="hero-avatar-fallback"
                          style={{ display: 'none' }}
                          className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#161B22] to-[#1F242C] p-3 text-center"
                        >
                          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-indigo-500/30">
                            {personalInfo.initials}
                          </div>
                          <span className="mt-1.5 text-xs font-mono font-bold text-[#F0F6FC]">
                            Harishankar
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Online status indicator badge */}
                    <div className="absolute -bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-[#0D1117] border border-green-500/40 text-[10px] font-mono text-green-400 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span>Available for work</span>
                    </div>
                  </div>

                  {/* Profile info */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#F0F6FC]">
                      Harishankar Dansena
                    </h3>
                    <p className="text-xs font-mono text-indigo-400">
                      B.Tech CSE • Full-Stack & AI/ML
                    </p>
                    <p className="text-xs text-[#8B949E]">
                      📍 Chhattisgarh, India
                    </p>
                  </div>

                  {/* Quick skill chips */}
                  <div className="w-full pt-2 border-t border-[#30363D] grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] text-left">
                      <span className="text-[#8B949E] block text-[10px] uppercase tracking-wider">Specialization</span>
                      <span className="text-[#F0F6FC] font-semibold">Web & AI Systems</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] text-left">
                      <span className="text-[#8B949E] block text-[10px] uppercase tracking-wider">Stack</span>
                      <span className="text-[#F0F6FC] font-semibold">React • Node • Py</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowTerminal(true)}
                    className="w-full py-2 rounded-xl bg-[#0D1117] hover:bg-[#21262D] text-xs font-mono text-[#8B949E] hover:text-[#F0F6FC] flex items-center justify-center gap-1.5 transition-colors border border-[#30363D]"
                  >
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Open Developer Terminal</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Developer Terminal Widget */
              <div className="w-full max-w-md rounded-2xl bg-[#161B22] border border-[#30363D] shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="px-4 py-2.5 bg-[#0D1117] border-b border-[#30363D] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[11px] text-[#8B949E]">harishankar@dev:~$</span>
                  </div>
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="text-[#8B949E] hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-2 text-[#8B949E] bg-[#161B22]">
                  <p className="text-indigo-400">
                    $ cat developer_profile.json
                  </p>
                  <pre className="text-[11px] text-[#F0F6FC] bg-[#0D1117] p-3 rounded-lg border border-[#30363D] overflow-x-auto">
{`{
  "name": "Harishankar Dansena",
  "focus": ["Full-Stack", "AI/ML"],
  "education": "B.Tech CSE (2022-2026)",
  "coreLanguages": ["Python", "JavaScript", "C"],
  "frameworks": ["React", "Node.js", "Django", "FastAPI"],
  "database": ["MongoDB"],
  "status": "ready_to_build_and_ship"
}`}
                  </pre>
                  <p className="text-green-400 flex items-center gap-1">
                    <span>$</span>
                    <span className="text-[#F0F6FC]">harishankar.deploy()</span>
                    <span className="text-green-400 font-bold ml-1">✓ 6 projects ready</span>
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setShowTerminal(false)}
                      className="text-xs text-indigo-400 hover:underline"
                    >
                      ← Back to Profile View
                    </button>
                    <a
                      href="#projects"
                      className="text-xs text-purple-400 hover:underline"
                    >
                      Explore Projects →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
