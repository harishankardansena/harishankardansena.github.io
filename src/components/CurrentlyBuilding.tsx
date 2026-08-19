import React, { useState } from 'react';
import { currentlyBuilding } from '../data/portfolioData';
import { Puzzle, Sparkles, CheckCircle2, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

export const CurrentlyBuilding: React.FC = () => {
  // Interactive mini puzzle teaser
  const [puzzleAnswer, setPuzzleAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);

  // Simple algorithmic sequence puzzle: [2, 6, 12, 20, 30, ?] (n*(n+1) -> 6*7 = 42)
  const handleGuess = (val: string) => {
    setPuzzleAnswer(val);
    setAttempts((prev) => prev + 1);
    if (val === '42') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleResetPuzzle = () => {
    setPuzzleAnswer(null);
    setIsCorrect(null);
  };

  return (
    <section id="currently-building" className="py-20 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. WORK IN PROGRESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
            Currently Building
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
            Active exploration into interactive cognitive learning, problem solving, and algorithmic reasoning.
          </p>
        </div>

        {/* Feature Spotlight Card */}
        <div className="rounded-2xl bg-[#161B22] border border-[#30363D] p-6 sm:p-8 relative overflow-hidden shadow-xl">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400">
                  <Puzzle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-600/20 text-indigo-200 font-semibold border border-indigo-500/40">
                      {currentlyBuilding.status}
                    </span>
                    <span className="text-xs font-mono text-[#8B949E]">
                      Target: {currentlyBuilding.releaseTarget}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] mt-1">
                    {currentlyBuilding.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#F0F6FC] leading-relaxed">
                {currentlyBuilding.description}
              </p>

              {/* Planned Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B949E] font-bold">
                  Core Platform Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentlyBuilding.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center gap-2 text-xs text-[#8B949E]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="text-[#F0F6FC]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#8B949E] mr-1">Stack:</span>
                {currentlyBuilding.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#30363D] text-xs font-mono text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Interactive Mini Logic Teaser */}
            <div className="lg:col-span-5 bg-[#0D1117] p-5 sm:p-6 rounded-xl border border-[#30363D] space-y-4">
              <div className="flex items-center justify-between border-b border-[#30363D] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-xs font-mono font-bold text-[#F0F6FC]">
                    Interactive Logic Drill Teaser
                  </h4>
                </div>
                <button
                  onClick={handleResetPuzzle}
                  className="text-[11px] font-mono text-[#8B949E] hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <p className="text-[#8B949E]">
                  Find the next number in the algorithmic sequence:
                </p>

                <div className="p-3 bg-[#161B22] rounded-lg border border-[#30363D] text-center font-mono text-sm sm:text-base font-bold tracking-wider text-indigo-300">
                  2 &nbsp;→&nbsp; 6 &nbsp;→&nbsp; 12 &nbsp;→&nbsp; 20 &nbsp;→&nbsp; 30 &nbsp;→&nbsp; <span className="text-purple-400 font-extrabold underline">?</span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-1">
                  {['36', '40', '42', '48'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleGuess(option)}
                      className={`py-2 rounded-lg font-mono font-semibold transition-all border ${
                        puzzleAnswer === option
                          ? isCorrect
                            ? 'bg-green-500/20 text-green-300 border-green-500/40'
                            : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                          : 'bg-[#161B22] text-[#F0F6FC] hover:bg-[#21262D] border-[#30363D]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {isCorrect === true && (
                  <div className="p-3 rounded-lg bg-green-950/40 border border-green-800/40 text-green-300 text-xs font-mono flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Brilliant! Pattern is n × (n+1) (6 × 7 = 42).</span>
                  </div>
                )}

                {isCorrect === false && (
                  <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300 text-[11px] font-mono">
                    Try again! Look closely at the incremental difference (+4, +6, +8, +10...).
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
