import React from 'react';
import { PHASES } from '../data/academicData';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const PhaseTimeline = ({ tasks, currentDate, selectedPhase, onSelectPhase }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span>Strategic Phases (6 Nov 2026 – 9 Jan 2027)</span>
        </h2>
        {selectedPhase !== 'ALL' && (
          <button
            onClick={() => onSelectPhase('ALL')}
            className="text-xs text-purple-400 hover:text-purple-300 font-medium"
          >
            Show All Phases
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {PHASES.map((p) => {
          const phaseTasks = tasks.filter((t) => t.phase === p.phase);
          const completedCount = phaseTasks.filter((t) => t.status === 'Completed').length;
          const totalCount = phaseTasks.length;
          const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
          
          const isCurrent = currentDate >= p.startDate && currentDate <= p.endDate;
          const isSelected = selectedPhase === p.phase;
          const isPast = currentDate > p.endDate;

          return (
            <div
              key={p.phase}
              onClick={() => onSelectPhase(isSelected ? 'ALL' : p.phase)}
              className={`p-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-left relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-purple-950/40 border-purple-500 ring-1 ring-purple-500/40'
                  : isCurrent
                  ? 'bg-[#151c30] border-amber-500/50 shadow-sm shadow-amber-500/10'
                  : 'bg-[#0f1423]/70 border-white/[0.06] hover:bg-[#141b2e] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    isCurrent 
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
                      : 'bg-white/5 text-slate-400'
                  }`}>
                    {p.shortTitle.split(':')[0]}
                  </span>
                  
                  {isCurrent && (
                    <span className="flex h-2 w-2 relative" title="Current Active Phase">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  )}

                  {isPast && pct === 100 && (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  )}
                </div>

                <div className="text-xs font-bold text-slate-200 line-clamp-1 mb-0.5" title={p.title}>
                  {p.title.split('&')[0].replace('Preparation', 'Prep')}
                </div>

                <div className="text-[10px] text-slate-400 font-mono">
                  {p.startDate.slice(5).replace('-', '/')} – {p.endDate.slice(5).replace('-', '/')}
                </div>
              </div>

              {/* Phase Completion bar */}
              <div className="mt-2 pt-1.5 border-t border-white/[0.04]">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-slate-400">{completedCount}/{totalCount}</span>
                  <span className={pct === 100 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>{pct}%</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      pct === 100 ? 'bg-emerald-400' : isCurrent ? 'bg-amber-400' : 'bg-purple-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
