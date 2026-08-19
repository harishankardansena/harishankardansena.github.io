import React from 'react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/formatted content download as fallback
    const resumeText = `HARISHANKAR DANSENA
Full-Stack Developer & AI/ML Enthusiast
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}
Location: ${personalInfo.location}

EDUCATION:
${personalInfo.education.degree} (${personalInfo.education.timeline})

KEY SKILLS:
- Languages: Python, JavaScript, TypeScript, C
- Web & Mobile: React, React Native, Node.js, Express, Django, FastAPI, MongoDB, Tailwind CSS
- AI & ML: Scikit-learn, NLP, Machine Learning Pipelines

FEATURED PROJECTS:
1. TruthLens - AI-Powered Fake News Detection (Python, Django, NLP, Scikit-learn)
2. Smart Pothole - Civic Issue Reporting Platform (React Native, Node.js, Express, MongoDB)
3. Ayush Fly Ash Bricks - Operations & Order Management (JavaScript, MongoDB)
4. StreamHub - P2P Media Player (HTML5, CSS3, JavaScript)
5. Connect-X - Interactive Connection Platform (JavaScript, REST)
6. File Organizer - Local Filesystem Sorter (Python)
`;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Harishankar-Dansena-Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl rounded-2xl bg-[#0D1117] border border-[#30363D] shadow-2xl shadow-black/90 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="px-6 py-3.5 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-indigo-400">
              Harishankar-Dansena-Resume
            </span>
            <span className="text-[11px] text-[#8B949E] hidden sm:inline">
              • Full Developer Profile View
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Document"
              className="p-1.5 rounded-lg bg-[#0D1117] hover:bg-[#21262D] text-[#8B949E] hover:text-white border border-[#30363D] transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#0D1117] hover:bg-[#21262D] text-[#8B949E] hover:text-white border border-[#30363D] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 text-left bg-[#0D1117]">
          
          {/* Header */}
          <div className="border-b border-[#30363D] pb-6 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] tracking-tight">
                HARISHANKAR DANSENA
              </h2>
              <p className="text-sm font-mono text-indigo-400 font-semibold">
                Full-Stack Developer • AI/ML Enthusiast • Software Engineer
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8B949E] pt-1">
                <span className="flex items-center gap-1 text-[#F0F6FC]">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  {personalInfo.email}
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#F0F6FC] hover:text-indigo-400"
                >
                  <Github className="w-3.5 h-3.5 text-indigo-400" />
                  github.com/harishankardansena
                </a>
                <span className="flex items-center gap-1 text-[#F0F6FC]">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Resume Photo Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-400 p-[1.5px] shrink-0 shadow-lg shadow-indigo-950/40">
              <div className="w-full h-full rounded-[10px] bg-[#161B22] overflow-hidden">
                <img
                  id="resume-modal-avatar-img"
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-[#30363D] pb-1">
              EDUCATION
            </h3>
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h4 className="text-sm font-bold text-[#F0F6FC]">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-xs text-[#8B949E]">
                  Computer Science & Engineering
                </p>
              </div>
              <span className="text-xs font-mono text-[#8B949E]">
                {personalInfo.education.timeline}
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-[#30363D] pb-1">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-[#F0F6FC] block">Languages:</span>
                <span className="text-[#8B949E]">Python, JavaScript (ES6+), TypeScript, C</span>
              </div>
              <div>
                <span className="font-bold text-[#F0F6FC] block">Web & Mobile:</span>
                <span className="text-[#8B949E]">React, React Native, Node.js, Express, Django, FastAPI, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-bold text-[#F0F6FC] block">Database & Storage:</span>
                <span className="text-[#8B949E]">MongoDB, Mongoose ODM, Cloudinary</span>
              </div>
              <div>
                <span className="font-bold text-[#F0F6FC] block">AI / ML & Tools:</span>
                <span className="text-[#8B949E]">Scikit-learn, NLP, Git, GitHub, VS Code, Jupyter, Postman</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-[#30363D] pb-1">
              ENGINEERED PROJECTS
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h4 className="text-sm font-bold text-[#F0F6FC]">
                      {proj.title} <span className="text-xs font-mono font-normal text-[#8B949E]">| {proj.technologies.slice(0, 4).join(', ')}</span>
                    </h4>
                    <span className="text-[11px] font-mono text-indigo-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-[#8B949E]">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-[#8B949E] pl-1 space-y-0.5">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
