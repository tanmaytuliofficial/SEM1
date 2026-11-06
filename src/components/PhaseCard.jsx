import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check, Edit2, Calendar, Clock } from 'lucide-react';

export const PhaseCard = ({ 
  phase, 
  currentDate, 
  isExpanded, 
  onToggleExpand, 
  onToggleMilestone,
  onEditMilestone 
}) => {
  const [showDailyBreakdown, setShowDailyBreakdown] = useState(false);

  // Calculate phase milestone progress
  let phaseTotal = 0;
  let phaseCompleted = 0;

  phase.subjects.forEach((s) => {
    s.milestones.forEach((m) => {
      phaseTotal += 1;
      if (m.completed) phaseCompleted += 1;
    });
  });

  const isCurrentPhase = currentDate >= phase.startDate && currentDate <= phase.endDate;
  const isAllDone = phaseTotal > 0 && phaseCompleted === phaseTotal;

  return (
    <section className="py-7 border-b border-[#EFECE6] last:border-b-0">
      
      {/* Phase Timeline Header (Click to expand/collapse) */}
      <div 
        onClick={onToggleExpand}
        className="cursor-pointer group flex items-start justify-between gap-4 select-none"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 text-[11px] font-mono tracking-wider text-[#71717A] uppercase">
            <span>PHASE {phase.phase}</span>
            <span>—</span>
            <span>{phase.name.toUpperCase()}</span>
            <span>·</span>
            <span>{phase.dateRange}</span>
            {isCurrentPhase && (
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#EFECE6] text-[#18181B] font-semibold lowercase">
                current phase
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-serif text-[#18181B] group-hover:text-[#52525B] transition-colors">
            {phase.name}
          </h2>

          {/* One-Line Objective */}
          <div className="mt-1.5 text-xs text-[#52525B]">
            <span className="font-semibold text-[#18181B] uppercase tracking-wider text-[10px] mr-1.5">
              OBJECTIVE:
            </span>
            <span>{phase.objective}</span>
          </div>
        </div>

        {/* Right side: Simple progress & expand arrow */}
        <div className="flex items-center gap-3 pt-1 text-xs text-[#71717A]">
          <span className={isAllDone ? 'text-[#3D6B4E] font-medium' : ''}>
            {phaseCompleted}/{phaseTotal} milestones
          </span>
          <div className="w-5 h-5 rounded flex items-center justify-center text-[#71717A] group-hover:text-[#18181B]">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Expanded Phase Content */}
      {isExpanded && (
        <div className="mt-6 pt-5 border-t border-[#F5F4EE]">
          
          {/* Section 3: Weekly Subject Milestones (The most important section) */}
          <div className="space-y-6">
            {phase.subjects.map((subject, sIdx) => {
              const subCompleted = subject.milestones.filter(m => m.completed).length;
              const subTotal = subject.milestones.length;

              return (
                <div key={sIdx} className="space-y-2">
                  {/* Subject Name & Milestone Count */}
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-[#F5F4EE]">
                    <span className="font-semibold tracking-wider text-[#18181B] uppercase text-[11px]">
                      {subject.name}
                    </span>
                    <span className="text-[11px] text-[#A1A1AA] font-mono">
                      {subCompleted}/{subTotal}
                    </span>
                  </div>

                  {/* Milestones list with checkboxes */}
                  <div className="space-y-1.5 pl-1">
                    {subject.milestones.map((milestone) => (
                      <div 
                        key={milestone.id}
                        className="group flex items-start gap-2.5 text-xs leading-relaxed"
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => onToggleMilestone(phase.phase, subject.name, milestone.id)}
                          className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${
                            milestone.completed
                              ? 'bg-[#3D6B4E] border-[#3D6B4E] text-[#FAF9F6]'
                              : 'border-[#D4D4D8] bg-[#FAF9F6] hover:border-[#71717A]'
                          }`}
                          title={milestone.completed ? "Mark incomplete" : "Mark complete"}
                        >
                          {milestone.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </button>

                        {/* Milestone Text */}
                        <span className={`flex-1 ${
                          milestone.completed ? 'line-through text-[#A1A1AA]' : 'text-[#27272A]'
                        }`}>
                          {milestone.text}
                        </span>

                        {/* Edit Button */}
                        <button
                          onClick={() => onEditMilestone(phase.phase, subject.name, milestone)}
                          className="opacity-0 group-hover:opacity-100 text-[#A1A1AA] hover:text-[#18181B] transition-opacity p-0.5"
                          title="Edit milestone"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 4: Daily Study Activities (Only for expanded week on demand) */}
          {phase.dailyBreakdown && phase.dailyBreakdown.length > 0 && (
            <div className="mt-8 pt-5 border-t border-[#EFECE6]">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowDailyBreakdown(!showDailyBreakdown)}
                  className="text-xs font-mono text-[#52525B] hover:text-[#18181B] flex items-center gap-1.5 transition-colors"
                >
                  <span>{showDailyBreakdown ? 'Hide daily breakdown' : `View ${phase.name}'s daily breakdown (${phase.dailyBreakdown.length} days)`}</span>
                  {showDailyBreakdown ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>

                <span className="text-[10px] text-[#A1A1AA] font-mono">
                  Daily study view
                </span>
              </div>

              {/* Day-by-Day breakdown if user expands */}
              {showDailyBreakdown && (
                <div className="mt-5 space-y-5 pl-2 border-l border-[#EFECE6]">
                  {phase.dailyBreakdown.map((day, dIdx) => (
                    <div key={dIdx} className="space-y-1.5">
                      <div className="text-[11px] font-mono uppercase font-semibold text-[#18181B]">
                        {day.dayLabel}
                      </div>
                      <div className="space-y-2 text-xs pl-2">
                        {day.sessions.map((sess, sIdx) => (
                          <div key={sIdx} className="leading-relaxed">
                            <span className="font-medium text-[#18181B]">{sess.subject}</span>
                            <span className="text-[#A1A1AA] mx-1.5">–</span>
                            <span className="text-[#71717A] text-[11px]">{sess.duration}</span>
                            <div className="text-[#52525B]">
                              <span className="text-[#71717A]">Topic:</span> {sess.topic}
                            </div>
                            <div className="text-[#71717A] text-[11px]">
                              <span>Objective:</span> {sess.objective}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </section>
  );
};
