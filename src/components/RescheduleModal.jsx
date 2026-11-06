import React, { useState } from 'react';
import { X, CalendarClock, ArrowRight, Calendar, AlertTriangle } from 'lucide-react';
import { formatDate, getDayDifference } from '../utils/dateUtils';
import { PHASES } from '../data/academicData';

export const RescheduleModal = ({ isOpen, onClose, onReschedule, task, currentDate }) => {
  const [newDate, setNewDate] = useState(task ? task.date : currentDate);

  if (!isOpen || !task) return null;

  const addDays = (baseDateStr, days) => {
    const [y, m, d] = baseDateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    return date.toISOString().slice(0, 10);
  };

  const handleApply = (targetDate) => {
    let assignedPhase = task.phase;
    for (const p of PHASES) {
      if (targetDate >= p.startDate && targetDate <= p.endDate) {
        assignedPhase = p.phase;
        break;
      }
    }
    onReschedule(task.id, targetDate, assignedPhase);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-xl bg-theme-surface border border-theme-border shadow-2xl overflow-hidden p-4 sm:p-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-theme-border mb-3">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-theme-muted" />
            <h3 className="text-sm font-semibold text-theme-text">Reschedule Task</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-theme-muted hover:text-theme-text">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Task Info */}
        <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border mb-3 text-xs">
          <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block mb-0.5">
            {task.subjectId} · Unit {task.unit}
          </span>
          <p className="font-medium text-theme-text line-clamp-2">
            {task.topic}
          </p>
          <div className="flex items-center gap-2 text-theme-muted font-mono text-[11px] mt-1.5">
            <span>Currently: {formatDate(task.date)}</span>
            {task.date < currentDate && (
              <span className="text-saas-danger font-medium">
                ({getDayDifference(currentDate, task.date)}d overdue)
              </span>
            )}
          </div>
        </div>

        {/* Quick Buttons */}
        <div className="space-y-1.5 mb-3">
          <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">
            Quick Shift:
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <button
              onClick={() => handleApply(currentDate)}
              className="py-1.5 px-2 rounded-lg bg-theme-card hover:bg-theme-border border border-theme-border text-theme-text font-mono text-center transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => handleApply(addDays(currentDate, 1))}
              className="py-1.5 px-2 rounded-lg bg-theme-card hover:bg-theme-border border border-theme-border text-theme-text font-mono text-center transition-colors"
            >
              Tomorrow
            </button>
            <button
              onClick={() => handleApply(addDays(currentDate, 2))}
              className="py-1.5 px-2 rounded-lg bg-theme-card hover:bg-theme-border border border-theme-border text-theme-text font-mono text-center transition-colors"
            >
              +2 Days
            </button>
          </div>
        </div>

        {/* Pick Specific Date */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-theme-text mb-1 font-mono">
            Or Pick Date:
          </label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full bg-theme-card border border-theme-border rounded-lg px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent font-mono"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 pt-2.5 border-t border-theme-border">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs text-theme-muted hover:text-theme-text"
          >
            Cancel
          </button>
          <button
            onClick={() => handleApply(newDate)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-theme-text text-theme-bg hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>Apply</span>
          </button>
        </div>

      </div>
    </div>
  );
};
