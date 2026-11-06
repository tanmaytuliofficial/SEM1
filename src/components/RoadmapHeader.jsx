import React from 'react';
import { formatFullDate, getCurrentPhase } from '../utils/dateUtils';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

export const RoadmapHeader = ({ 
  tasks, 
  currentDate, 
  setCurrentDate,
  allExpanded, 
  onToggleAllExpanded 
}) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const percentage = total > 0 ? ((completed / total) * 100).toFixed(1) : "0.0";
  const currentPhase = getCurrentPhase(currentDate);

  return (
    <header className="pt-12 sm:pt-16 pb-10 border-b border-[#EFECE6]">
      {/* Top Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
            SEMESTER OS
          </div>
          <div className="text-xs text-[#71717A] mt-0.5">
            Semester 01 · B.Tech CSE-AIML
          </div>
        </div>

        {/* Date Stepper / Context */}
        <div className="flex items-center gap-3 text-xs text-[#71717A]">
          <span className="flex items-center gap-1.5 font-mono">
            <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
            {formatFullDate(currentDate)}
          </span>
          <span className="text-[#D4D4D8]">•</span>
          <span className="text-[#18181B] font-medium">
            Phase {currentPhase.phase}: {currentPhase.title}
          </span>
        </div>
      </div>

      {/* Main Heading & Editorial Subtitle */}
      <div className="max-w-2xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#18181B] font-serif">
          Your Semester Journey
        </h1>
        <p className="text-sm sm:text-base text-[#71717A] mt-2 font-normal leading-relaxed">
          One day at a time. One unit at a time. One semester at a time.
        </p>
      </div>

      {/* Minimal Progress Readout */}
      <div className="max-w-xl">
        <div className="flex items-baseline justify-between text-xs font-mono text-[#71717A] mb-2">
          <span>
            <strong className="text-[#18181B] font-semibold">{percentage}%</strong> completed
          </span>
          <span>
            {completed} of {total} study activities finished
          </span>
        </div>

        {/* Thin, restrained hairline progress indicator */}
        <div className="w-full h-1 bg-[#EFECE6] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#18181B] rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Global Expand / Collapse Control */}
      <div className="flex items-center justify-between pt-8 text-xs text-[#71717A]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">
          6 November 2026 → 9 January 2027
        </span>

        <button
          onClick={onToggleAllExpanded}
          className="flex items-center gap-1 text-xs text-[#18181B] hover:text-[#52525B] font-medium transition-colors"
        >
          <span>{allExpanded ? 'Collapse all phases' : 'Expand all phases'}</span>
          {allExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
};
