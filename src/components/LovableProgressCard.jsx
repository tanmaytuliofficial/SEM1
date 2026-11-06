import React from 'react';

export const LovableProgressCard = ({ phases }) => {
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

  const remainingMilestones = totalMilestones - completedMilestones;
  const percentage = totalMilestones > 0 
    ? ((completedMilestones / totalMilestones) * 100).toFixed(1) 
    : "0.0";

  return (
    <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-[#141724] border border-[#1E2337]">
      
      {/* Top Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#8B92A7] uppercase font-bold mb-1">
            OVERALL PROGRESS
          </div>
          <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
            {percentage}%
          </div>
        </div>

        {/* Right Stats */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#8B92A7]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-white">{completedMilestones}</span>
            <span>completed</span>
          </div>
          <span className="text-[#1E2337]">•</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-white">{remainingMilestones}</span>
            <span>remaining</span>
          </div>
          <span className="text-[#1E2337]">•</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-white">{totalMilestones}</span>
            <span>milestones</span>
          </div>
        </div>
      </div>

      {/* Vibrant Lovable Gradient Progress Bar */}
      <div className="w-full h-2.5 bg-[#0F121C] rounded-full overflow-hidden p-[1px] border border-[#1E2337]">
        <div 
          className="h-full rounded-full transition-all duration-500 gradient-bar"
          style={{ width: `${Math.max(percentage, 2)}%` }}
        />
      </div>

    </div>
  );
};
