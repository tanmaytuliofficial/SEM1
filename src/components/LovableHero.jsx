import React from 'react';
import { Plus, RotateCcw, Calendar, Clock, SlidersHorizontal } from 'lucide-react';

export const LovableHero = ({ onAddMilestone, onResetDefault }) => {
  return (
    <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-[#141724] border border-[#1E2337] relative overflow-hidden">
      
      {/* Top Tag & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#8B92A7] uppercase font-bold mb-1">
            EXAM PREPARATION · ROADMAP
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Semester 1 Academic Mission
          </h1>
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F30] border border-[#282F48] text-indigo-300 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Target: Dec 7, 2026 (Sessional III)</span>
            </span>

            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F30] border border-[#282F48] text-cyan-300 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>End-Sem: Dec 17 – Jan 9</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-[#1A1F30] border border-[#282F48] text-[#8B92A7] font-mono">
              3–4 Hrs/Day
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={onAddMilestone}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Milestone</span>
          </button>

          <button
            onClick={onResetDefault}
            className="p-2 rounded-xl bg-[#1A1F30] border border-[#282F48] text-[#8B92A7] hover:text-white transition-colors"
            title="Reset to default roadmap"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
