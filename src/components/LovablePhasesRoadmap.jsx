import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Check, 
  Edit2, 
  Calendar, 
  Flame, 
  Clock, 
  Layers, 
  Plus,
  BookOpen
} from 'lucide-react';

export const LovablePhasesRoadmap = ({ 
  phases, 
  currentDate, 
  selectedSubject, 
  selectedPhase,
  onToggleMilestone,
  onEditMilestone,
  onAddMilestoneToPhase
}) => {
  // Track which phases are expanded (default: current phase 1 open)
  const [expandedPhases, setExpandedPhases] = useState({ 1: true });
  const [expandedDailyWeek, setExpandedDailyWeek] = useState(null);

  const togglePhase = (phaseNum) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseNum]: !prev[phaseNum]
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-1">
        <span className="text-[10px] font-mono tracking-widest text-[#8B92A7] uppercase font-bold">
          ACADEMIC MISSION ROADMAP (8 PHASES)
        </span>
        <button
          onClick={() => {
            const allOpen = Object.keys(expandedPhases).length === phases.length;
            if (allOpen) {
              setExpandedPhases({});
            } else {
              const full = {};
              phases.forEach(p => { full[p.phase] = true; });
              setExpandedPhases(full);
            }
          }}
          className="text-xs text-indigo-400 hover:text-indigo-300 font-mono"
        >
          {Object.keys(expandedPhases).length === phases.length ? 'Collapse All' : 'Expand All Phases'}
        </button>
      </div>

      {phases.map((phase) => {
        // Filter by selected phase if user clicked sidebar
        if (selectedPhase !== 'ALL' && selectedPhase !== phase.phase) {
          return null;
        }

        const isExpanded = !!expandedPhases[phase.phase];
        const isCurrent = currentDate >= phase.startDate && currentDate <= phase.endDate;

        // Count completion inside phase
        let pTotal = 0;
        let pDone = 0;
        phase.subjects.forEach(s => {
          s.milestones.forEach(m => {
            pTotal += 1;
            if (m.completed) pDone += 1;
          });
        });
        const pPct = pTotal > 0 ? Math.round((pDone / pTotal) * 100) : 0;

        return (
          <div
            key={phase.phase}
            className={`rounded-2xl transition-all border ${
              isCurrent
                ? 'bg-[#151928] border-indigo-500/50 shadow-lg shadow-indigo-500/5 ring-1 ring-indigo-500/20'
                : 'bg-[#141724] border-[#1E2337] hover:border-[#282F48]'
            }`}
          >
            {/* Phase Header Bar */}
            <div
              onClick={() => togglePhase(phase.phase)}
              className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                  isCurrent 
                    ? 'bg-indigo-600 text-white' 
                    : pDone === pTotal && pTotal > 0
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-[#1E2337] text-[#8B92A7]'
                }`}>
                  {phase.phase}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B92A7]">
                      PHASE {phase.phase} · {phase.dateRange}
                    </span>
                    {isCurrent && (
                      <span className="text-[9px] font-mono px-2 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold uppercase">
                        CURRENT FOCUS
                      </span>
                    )}
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{phase.name}</span>
                  </h2>

                  {/* One-Line Objective */}
                  <div className="mt-1 text-xs text-[#8B92A7]">
                    <span className="text-white font-medium mr-1.5 uppercase tracking-wide text-[10px]">
                      WEEKLY OBJECTIVE:
                    </span>
                    <span>{phase.objective}</span>
                  </div>
                </div>
              </div>

              {/* Right: Progress & Expand Arrow */}
              <div className="flex items-center gap-3 pt-1">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-mono font-bold text-white">{pPct}%</div>
                  <div className="text-[10px] font-mono text-[#8B92A7]">{pDone}/{pTotal} done</div>
                </div>

                <div className="w-6 h-6 rounded-lg bg-[#1E2337] flex items-center justify-center text-[#8B92A7] hover:text-white transition-colors">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Expanded Phase Content */}
            {isExpanded && (
              <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-[#1E2337]">
                
                {/* Subject Milestones Grid */}
                <div className="space-y-5 pt-3">
                  {phase.subjects.map((subject, sIdx) => {
                    // Filter if user clicked a specific subject in sidebar
                    if (selectedSubject !== 'ALL') {
                      const match = subject.name.toLowerCase().includes(selectedSubject.toLowerCase());
                      if (!match && !subject.name.includes('Examination')) return null;
                    }

                    const subCompleted = subject.milestones.filter(m => m.completed).length;
                    const subTotal = subject.milestones.length;

                    return (
                      <div key={sIdx} className="space-y-2">
                        {/* Subject Title */}
                        <div className="flex items-center justify-between text-xs pb-1 border-b border-[#1E2337]/70">
                          <span className="font-bold tracking-wider text-indigo-300 uppercase text-[11px] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {subject.name}
                          </span>
                          <span className="text-[11px] font-mono text-[#8B92A7]">
                            {subCompleted}/{subTotal}
                          </span>
                        </div>

                        {/* Milestones Checklist */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                          {subject.milestones.map((m) => (
                            <div
                              key={m.id}
                              className={`group p-2.5 rounded-xl border transition-all flex items-start justify-between gap-2.5 ${
                                m.completed
                                  ? 'bg-[#10131E]/60 border-emerald-500/20 text-[#8B92A7]'
                                  : 'bg-[#10131E] border-[#1E2337] text-white hover:border-[#282F48]'
                              }`}
                            >
                              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                                <button
                                  onClick={() => onToggleMilestone(phase.phase, subject.name, m.id)}
                                  className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                                    m.completed
                                      ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                                      : 'border-[#282F48] bg-[#141724] hover:border-indigo-400'
                                  }`}
                                  title={m.completed ? "Mark incomplete" : "Mark complete"}
                                >
                                  {m.completed && <Check className="w-3 h-3 stroke-[3]" />}
                                </button>

                                <span className={`text-xs leading-snug ${m.completed ? 'line-through text-[#8B92A7]' : 'text-slate-200'}`}>
                                  {m.text}
                                </span>
                              </div>

                              <button
                                onClick={() => onEditMilestone(phase.phase, subject.name, m)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-[#8B92A7] hover:text-white transition-opacity"
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

                {/* Section 4: Daily breakdown for that week (Only if user toggles) */}
                {phase.dailyBreakdown && phase.dailyBreakdown.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#1E2337]">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setExpandedDailyWeek(expandedDailyWeek === phase.phase ? null : phase.phase)}
                        className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors font-medium"
                      >
                        <span>
                          {expandedDailyWeek === phase.phase
                            ? 'Hide weekly daily breakdown'
                            : `View ${phase.name}'s daily schedule breakdown (${phase.dailyBreakdown.length} days)`}
                        </span>
                        {expandedDailyWeek === phase.phase ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      </button>

                      <span className="text-[10px] font-mono text-[#8B92A7]">
                        Chronological days
                      </span>
                    </div>

                    {expandedDailyWeek === phase.phase && (
                      <div className="mt-4 space-y-3 pl-3 border-l-2 border-indigo-500/30">
                        {phase.dailyBreakdown.map((day, dIdx) => (
                          <div key={dIdx} className="p-3 rounded-xl bg-[#0F121C] border border-[#1E2337]">
                            <div className="text-xs font-bold font-mono text-amber-300 uppercase mb-2">
                              {day.dayLabel}
                            </div>
                            <div className="space-y-1.5 text-xs text-[#8B92A7]">
                              {day.sessions.map((sess, sIdx) => (
                                <div key={sIdx} className="leading-relaxed">
                                  <span className="text-white font-semibold">{sess.subject}</span>
                                  <span className="text-[#1E2337] mx-1.5">•</span>
                                  <span className="text-indigo-300 font-mono text-[11px]">{sess.duration}</span>
                                  <div className="text-slate-300 text-[11px]">
                                    <span className="text-[#8B92A7]">Topic:</span> {sess.topic}
                                  </div>
                                  <div className="text-[#8B92A7] text-[10px]">
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
          </div>
        );
      })}
    </div>
  );
};
