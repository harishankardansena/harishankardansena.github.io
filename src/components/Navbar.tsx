import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-[#21262D] py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#F0F6FC] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1.5px] shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform overflow-hidden">
            <img
              id="navbar-brand-avatar-img"
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-[6px]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = document.getElementById('navbar-brand-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div
              id="navbar-brand-fallback"
              style={{ display: 'none' }}
              className="w-full h-full bg-[#161B22] rounded-[6px] items-center justify-center text-white font-mono text-xs font-extrabold"
            >
              {personalInfo.initials}
            </div>
          </div>
          <span className="font-bold text-[#F0F6FC] group-hover:text-white transition-colors">
            Harishankar<span className="text-indigo-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-indigo-600/20 border border-indigo-500/40 font-semibold shadow-sm'
                    : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#161B22]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Links & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-github-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="px-3.5 py-1.5 rounded-full border border-[#30363D] text-xs font-semibold text-[#F0F6FC] hover:bg-[#161B22] hover:border-[#8B949E] transition-all inline-flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub ↗</span>
          </a>
          <a
            id="nav-linkedin-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-1.5 text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#161B22] rounded-full transition-colors border border-[#30363D]"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-200" />
            <span>Resume ↓</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-resume-btn-quick"
            onClick={onOpenResume}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-sm"
          >
            Resume ↓
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#8B949E] hover:text-white hover:bg-[#161B22] rounded-lg border border-[#30363D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#161B22] border-b border-[#30363D] px-4 pt-3 pb-5 space-y-2 mt-2"
        >
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-center transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-[#8B949E] hover:text-white bg-[#0D1117]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#21262D] flex items-center justify-between gap-2">
            <a
              id="mobile-github-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium bg-[#0D1117] text-[#F0F6FC] rounded-lg border border-[#30363D]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub ↗</span>
            </a>
            <a
              id="mobile-linkedin-btn"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium bg-[#0D1117] text-[#F0F6FC] rounded-lg border border-[#30363D]"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
