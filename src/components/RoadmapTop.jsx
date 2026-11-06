import React from 'react';
import { ROADMAP_METADATA } from '../data/roadmapMilestones';
import { Calendar } from 'lucide-react';

export const RoadmapTop = ({ phases, currentDate, setCurrentDate }) => {
  // Count total milestones and completed milestones
  let totalMilestones = 0;
  let completedMilestones = 0;

  phases.forEach((phase) => {
    phase.subjects.forEach((subj) => {
      subj.milestones.forEach((m) => {
        totalMilestones += 1;
        if (m.completed) completedMilestones += 1;
      });
    });
  });

  const percentage = totalMilestones > 0 
    ? ((completedMilestones / totalMilestones) * 100).toFixed(0) 
    : 0;

  return (
    <header className="pt-14 pb-10 border-b border-[#EFECE6]">
      {/* Top Header Identity */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <span className="text-[11px] font-medium tracking-widest text-[#71717A] uppercase block">
            {ROADMAP_METADATA.title}
          </span>
          <span className="text-xs text-[#71717A]">
            {ROADMAP_METADATA.course} · {ROADMAP_METADATA.institution}
          </span>
        </div>

        {/* Date context */}
        <div className="flex items-center gap-2 text-xs text-[#71717A]">
          <span className="flex items-center gap-1.5 font-sans">
            <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
            Active Date:
          </span>
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="bg-transparent text-[#18181B] font-medium text-xs focus:outline-none cursor-pointer border-b border-[#D4D4D8]"
            title="Change active simulation date"
          />
        </div>
      </div>

      {/* Main Title & Date Range */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#18181B] font-serif">
          {ROADMAP_METADATA.subtitle}
        </h1>
        <p className="text-sm text-[#71717A] mt-1.5">
          {ROADMAP_METADATA.dateRange}
        </p>
      </div>

      {/* Single Thin Overall Progress Bar (No statistics cards) */}
      <div className="max-w-xl">
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-2">
          <span>Overall Journey Progress</span>
          <span className="font-medium text-[#18181B]">{percentage}% completed</span>
        </div>
        <div className="w-full h-1 bg-[#EFECE6] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#18181B] rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </header>
  );
};
