import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0D1117] text-[#F0F6FC] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 2. Quick Stats Strip */}
        <QuickStats />

        {/* 3. About Me */}
        <About />

        {/* 4. What I Do (Capabilities) */}
        <WhatIDo />

        {/* 5. Skills & Tech Stack */}
        <TechStack />

        {/* 6. Featured Projects & Case Studies */}
        <Projects />

        {/* 7. Currently Building */}
        <CurrentlyBuilding />

        {/* 8. Currently Learning */}
        <CurrentlyLearning />

        {/* 9. Experience / Journey Timeline */}
        <JourneyTimeline />

        {/* 10. Dedicated Resume Callout */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 11. GitHub Section */}
        <GitHubSection />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
