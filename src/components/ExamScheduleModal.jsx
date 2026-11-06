import React from 'react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { SUBJECTS, ACADEMIC_METADATA } from '../data/academicData';
import { formatDate, formatFullDate, getDayDifference } from '../utils/dateUtils';

export const ExamScheduleModal = ({ isOpen, onClose, currentDate }) => {
  if (!isOpen) return null;

  const sortedSubjects = [...SUBJECTS].sort((a, b) => a.examDate.localeCompare(b.examDate));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-xl bg-theme-surface border border-theme-border shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-theme-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-theme-muted" />
            <div>
              <h2 className="text-sm font-semibold text-theme-text">Official Exam Timetable</h2>
              <p className="text-xs text-theme-muted font-mono">PIET Semester 01 · 2026–27</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded text-theme-muted hover:text-theme-text">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* Sessional Banner */}
          <div className="p-3 rounded-lg bg-theme-card border border-theme-border">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-theme-text">Sessional III: 7–10 December 2026</span>
              <span className="text-[10px] font-mono text-theme-muted">40 Marks Internal</span>
            </div>
            <p className="text-[11px] text-theme-muted leading-relaxed">
              Covers full syllabus. Strategic aim: deep mastery of ~3 units per subject prior to sessionals.
            </p>
          </div>

          {/* End-Semester Papers */}
          <div>
            <div className="text-[10px] font-mono text-theme-muted uppercase tracking-wider mb-2">
              End-Semester Theory Examinations (09:30 AM – 12:30 PM):
            </div>

            <div className="divide-y divide-theme-border rounded-lg border border-theme-border bg-theme-card overflow-hidden">
              {sortedSubjects.map((sub, i) => {
                const daysLeft = getDayDifference(sub.examDate, currentDate);
                const isPast = daysLeft < 0;
                const isToday = daysLeft === 0;

                return (
                  <div key={sub.id} className="p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-mono text-[10px] text-theme-muted">{sub.code}</span>
                        <span className="text-theme-border">•</span>
                        <span className="font-mono text-[10px] text-theme-muted">{sub.credits} Credits</span>
                      </div>
                      <h4 className="font-medium text-theme-text">{sub.name}</h4>
                      <span className="text-[11px] font-mono text-theme-muted mt-0.5 block">
                        {formatFullDate(sub.examDate)} · {sub.examTime}
                      </span>
                    </div>

                    <div className="text-right">
                      {isPast ? (
                        <span className="text-[10px] font-mono text-saas-success px-2 py-0.5 rounded bg-saas-success/10 border border-saas-success/20">
                          Concluded
                        </span>
                      ) : isToday ? (
                        <span className="text-[10px] font-mono text-saas-warning font-semibold px-2 py-0.5 rounded bg-saas-warning/10 border border-saas-warning/30">
                          TODAY
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-theme-text px-2 py-0.5 rounded bg-theme-border font-medium">
                          T - {daysLeft} days
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
