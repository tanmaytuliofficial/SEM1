import React from 'react';
import { getNextUpcomingExam, formatDate } from '../utils/dateUtils';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const MissionMetrics = ({ tasks, currentDate, onOpenExams }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const remainingTasks = totalTasks - completedTasks;
  const progressPercentage = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(1) : "0.0";

  const nextExam = getNextUpcomingExam(currentDate);

  return (
    <div className="space-y-4 mb-6">
      
      {/* Next Examination Countdown Banner (Subtle & Elegant) */}
      {nextExam && (
        <div 
          onClick={onOpenExams}
          className="p-3 sm:px-4 rounded-xl bg-theme-card border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 cursor-pointer hover:border-theme-muted/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-theme-border/60 text-theme-muted font-medium">
              Next Examination
            </span>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-theme-text">
                {nextExam.subject.name}
              </span>
              <span className="text-theme-muted hidden sm:inline">•</span>
              <span className="text-theme-muted font-mono hidden sm:inline">
                {formatDate(nextExam.subject.examDate)} ({nextExam.subject.examTime})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono self-start sm:self-auto">
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
              nextExam.daysLeft === 0
                ? 'bg-theme-warning/20 text-theme-warning'
                : 'bg-theme-border text-theme-text'
            }`}>
              {nextExam.daysLeft === 0 ? "EXAM TODAY" : `T - ${nextExam.daysLeft} days`}
            </span>
            <span className="text-theme-muted hover:text-theme-text text-[11px] flex items-center gap-0.5">
              View Timetable <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-theme-text">
            Your Semester Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted mt-1">
            Small daily progress. Strong semester results.
          </p>
        </div>

        {/* 3 Compact Statistics (As specified in Section 4) */}
        <div className="flex items-center gap-4 text-xs font-mono text-theme-muted">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-theme-text">{completedTasks}</span>
            <span>completed</span>
          </div>
          <span className="text-theme-border">•</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-theme-text">{remainingTasks}</span>
            <span>remaining</span>
          </div>
          <span className="text-theme-border">•</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-theme-text">{totalTasks}</span>
            <span>slots</span>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar Card (Inspired by reference image) */}
      <div className="p-4 sm:p-5 rounded-xl bg-theme-card border border-theme-border">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-theme-muted font-medium">
            OVERALL PROGRESS
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-theme-text">
            {progressPercentage}%
          </span>
        </div>

        {/* Thin, clean progress bar */}
        <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-theme-accent rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

    </div>
  );
};
