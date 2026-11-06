import React from 'react';
import { SUBJECTS } from '../data/academicData';

export const LovableSubjectGrid = ({ phases, selectedSubject, setSelectedSubject }) => {
  // Compute progress for each subject
  const subjectsData = [
    {
      id: "MATH",
      name: "Engineering Mathematics-I (Units 1, 2, 3)",
      shortName: "Mathematics",
      color: "#A855F7",
      badgeBg: "rgba(168, 85, 247, 0.15)",
      badgeColor: "#C084FC"
    },
    {
      id: "CHEM",
      name: "Engineering Chemistry (Units 1, 2, 3)",
      shortName: "Chemistry",
      color: "#10B981",
      badgeBg: "rgba(16, 185, 129, 0.15)",
      badgeColor: "#34D399"
    },
    {
      id: "CP",
      name: 'Problem Solving Using "C" (Units 2, 3, 4)',
      shortName: "C Programming",
      color: "#38BDF8",
      badgeBg: "rgba(56, 189, 248, 0.15)",
      badgeColor: "#7DD3FC"
    },
    {
      id: "BEE",
      name: "Basics of Electronics Engineering (Units 1, 3, 4)",
      shortName: "Basics of Electronics",
      color: "#F59E0B",
      badgeBg: "rgba(245, 158, 11, 0.15)",
      badgeColor: "#FBBF24"
    },
    {
      id: "BOC",
      name: "Basics of Communication Skills (Units 1, 2, 4)",
      shortName: "Communication Skills",
      color: "#EC4899",
      badgeBg: "rgba(236, 72, 153, 0.15)",
      badgeColor: "#F472B6"
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono tracking-widest text-[#8B92A7] uppercase font-bold">
          SUBJECT PREPARATION STATUS
        </span>
        {selectedSubject !== 'ALL' && (
          <button
            onClick={() => setSelectedSubject('ALL')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-mono"
          >
            Show All Subjects
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {subjectsData.map((sub) => {
          // Count milestones across phases for this subject
          let subTotal = 0;
          let subCompleted = 0;

          phases.forEach((p) => {
            p.subjects.forEach((s) => {
              if (s.name.toLowerCase().includes(sub.shortName.toLowerCase()) || sub.shortName.toLowerCase().includes(s.name.toLowerCase())) {
                s.milestones.forEach((m) => {
                  subTotal += 1;
                  if (m.completed) subCompleted += 1;
                });
              }
            });
          });

          const pct = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;
          const isSelected = selectedSubject === sub.id;

          return (
            <div
              key={sub.id}
              onClick={() => setSelectedSubject(isSelected ? 'ALL' : sub.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? 'bg-[#181C2B] border-indigo-500 shadow-lg shadow-indigo-500/10'
                  : 'bg-[#141724] border-[#1E2337] hover:border-[#282F48] hover:bg-[#181C2B]'
              }`}
            >
              {/* Header: Title & Percentage Badge */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xs font-bold text-white leading-snug truncate" title={sub.name}>
                  {sub.name}
                </h3>

                <span 
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md"
                  style={{ backgroundColor: sub.badgeBg, color: sub.badgeColor }}
                >
                  {pct}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[#0F121C] rounded-full overflow-hidden mb-2 border border-[#1E2337]/50">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: sub.color
                  }}
                />
              </div>

              {/* Slots Count */}
              <div className="text-[11px] font-mono text-[#8B92A7]">
                {subCompleted} of {subTotal} milestones done
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
