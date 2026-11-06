import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Check, 
  Edit2, 
  Plus, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { getSubjectById } from '../data/academicData';
import { formatDayHeading } from '../utils/dateUtils';

export const PhaseSection = ({ 
  phase, 
  tasks, 
  currentDate, 
  isExpanded, 
  onToggleExpand, 
  onToggleStatus, 
  onEditActivity, 
  onAddActivity 
}) => {
  // Tasks belonging to this phase
  const phaseTasks = useMemo(() => {
    return tasks.filter((t) => t.phase === phase.phase);
  }, [tasks, phase.phase]);

  const completedCount = phaseTasks.filter((t) => t.status === 'Completed').length;
  const totalCount = phaseTasks.length;
  const isAllPhaseDone = totalCount > 0 && completedCount === totalCount;
  const isCurrentPhase = currentDate >= phase.startDate && currentDate <= phase.endDate;

  // Group tasks by day (sorted chronologically)
  const daysGrouped = useMemo(() => {
    const map = {};
    phaseTasks.forEach((task) => {
      if (!map[task.date]) {
        map[task.date] = [];
      }
      map[task.date].push(task);
    });

    return Object.keys(map).sort().map((date) => ({
      date,
      heading: formatDayHeading(date),
      tasks: map[date],
      isToday: date === currentDate
    }));
  }, [phaseTasks, currentDate]);

  // Section 5: Weekly / Phase Summary Calculation
  const subjectSessionsSummary = useMemo(() => {
    const counts = {};
    phaseTasks.forEach((task) => {
      const sub = getSubjectById(task.subjectId) || { shortName: task.subjectId };
      counts[sub.shortName] = (counts[sub.shortName] || 0) + 1;
    });

    return Object.keys(counts).map((name) => ({
      name,
      count: counts[name]
    }));
  }, [phaseTasks]);

  return (
    <section className="py-8 border-b border-[#EFECE6] last:border-b-0">
      
      {/* Phase Editorial Header (Clickable) */}
      <div 
        onClick={onToggleExpand}
        className="cursor-pointer group flex items-start justify-between gap-4 select-none"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 text-[11px] font-mono tracking-wider text-[#71717A] uppercase">
            <span>PHASE {String(phase.phase).padStart(2, '0')}</span>
            <span>·</span>
            <span>{phase.datesLabel}</span>
            {isCurrentPhase && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#EFECE6] text-[#18181B] font-semibold lowercase">
                current
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-normal font-serif tracking-tight text-[#18181B] group-hover:text-[#52525B] transition-colors flex items-center gap-2">
            <span>{phase.title}</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#71717A] mt-1 max-w-2xl leading-relaxed">
            {phase.description}
          </p>
        </div>

        {/* Right side: Phase progress & Expand toggle */}
        <div className="flex items-center gap-3 pt-1 text-xs font-mono text-[#71717A]">
          <span className={isAllPhaseDone ? 'text-[#3D6B4E] font-medium' : ''}>
            {completedCount}/{totalCount} completed
          </span>
          <div className="w-5 h-5 rounded flex items-center justify-center text-[#71717A] group-hover:text-[#18181B] transition-colors">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Expanded Phase Content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-[#F5F4EE]">
          
          {/* Preparation Objective & Completion Target */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#52525B] bg-[#FAF9F6] p-4 rounded-lg border border-[#EFECE6]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">
                PREPARATION OBJECTIVE
              </span>
              <p className="leading-relaxed text-[#27272A]">
                {phase.objective}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">
                COMPLETION TARGET
              </span>
              <p className="leading-relaxed text-[#27272A]">
                {phase.completionTarget}
              </p>
            </div>
          </div>

          {/* Section 5: Weekly Overview Summary (clean, typographic, not a dashboard) */}
          <div className="mb-8 pb-5 border-b border-[#EFECE6]">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#A1A1AA] block mb-2">
              THIS PHASE STUDY SESSIONS
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#52525B] font-mono">
              {subjectSessionsSummary.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#A1A1AA]">•</span>
                  <span>{sub.name}:</span>
                  <span className="text-[#18181B] font-medium">{sub.count} {sub.count === 1 ? 'session' : 'sessions'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chronological Days List */}
          <div className="space-y-8">
            {daysGrouped.map((day) => (
              <div key={day.date} className="relative">
                
                {/* Day Header */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#EFECE6]">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-xs font-mono font-bold tracking-wider uppercase ${
                      day.isToday ? 'text-[#18181B]' : 'text-[#52525B]'
                    }`}>
                      {day.heading}
                    </h3>
                    {day.isToday && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#18181B] text-[#FAF9F6] font-medium">
                        TODAY
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddActivity(day.date, phase.phase)}
                    className="text-[11px] font-mono text-[#71717A] hover:text-[#18181B] flex items-center gap-1 transition-colors"
                    title="Add a study activity to this day"
                  >
                    <Plus className="w-3 h-3" />
                    <span>add activity</span>
                  </button>
                </div>

                {/* Day Study Activities */}
                <div className="space-y-3.5 pl-1 sm:pl-2">
                  {day.tasks.map((activity) => {
                    const sub = getSubjectById(activity.subjectId) || { name: activity.subjectId, shortName: activity.subjectId };
                    const isDone = activity.status === 'Completed';

                    return (
                      <div 
                        key={activity.id}
                        className="group flex items-start gap-3 text-xs leading-relaxed"
                      >
                        {/* Checkbox with subtle green check */}
                        <button
                          onClick={() => onToggleStatus(activity.id, isDone ? 'Pending' : 'Completed')}
                          className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isDone 
                              ? 'bg-[#3D6B4E] border-[#3D6B4E] text-[#FAF9F6]' 
                              : 'border-[#D4D4D8] bg-[#FAF9F6] hover:border-[#71717A]'
                          }`}
                          title={isDone ? "Mark incomplete" : "Mark completed"}
                        >
                          {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                        </button>

                        {/* Activity Body */}
                        <div className="flex-1 min-w-0">
                          {/* Subject & Duration line */}
                          <div className="flex items-baseline justify-between gap-2">
                            <div className="font-semibold text-[#18181B]">
                              <span>{sub.name}</span>
                              <span className="text-[#A1A1AA] font-normal mx-1.5">–</span>
                              <span className="text-[#71717A] font-normal font-mono text-[11px]">{activity.estimatedDuration}</span>
                            </div>

                            {/* Edit action */}
                            <button
                              onClick={() => onEditActivity(activity)}
                              className="opacity-0 group-hover:opacity-100 text-[#71717A] hover:text-[#18181B] text-[11px] font-mono flex items-center gap-1 transition-opacity"
                              title="Edit activity"
                            >
                              <Edit2 className="w-3 h-3" />
                              <span>edit</span>
                            </button>
                          </div>

                          {/* Topic line */}
                          <div className={`mt-0.5 ${isDone ? 'line-through text-[#A1A1AA]' : 'text-[#27272A]'}`}>
                            <span className="text-[#71717A] font-medium mr-1.5">Topic:</span>
                            <span>{activity.topic}</span>
                          </div>

                          {/* Objective line */}
                          {activity.notes && (
                            <div className={`mt-0.5 ${isDone ? 'text-[#A1A1AA]' : 'text-[#52525B]'}`}>
                              <span className="text-[#71717A] font-medium mr-1.5">Objective:</span>
                              <span>{activity.notes}</span>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
};
