import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Check, 
  Clock, 
  Calendar, 
  AlertCircle, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  CalendarClock, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { getSubjectById } from '../data/academicData';
import { formatDate, getRelativeDateLabel, isDateOverdue } from '../utils/dateUtils';

export const TaskItem = ({ 
  task, 
  currentDate, 
  onToggleStatus, 
  onEditTask, 
  onDeleteTask, 
  onRescheduleTask 
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const subject = getSubjectById(task.subjectId) || {
    name: task.subjectId,
    shortName: task.subjectId,
    color: "#8b5cf6",
    bgLight: "rgba(139, 92, 246, 0.12)"
  };

  const isCompleted = task.status === 'Completed';
  const isInProgress = task.status === 'In Progress';
  const isOverdue = isDateOverdue(task.date, currentDate, task.status);

  // Trigger confetti burst on completion
  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    const nextStatus = isCompleted ? 'Pending' : 'Completed';
    if (nextStatus === 'Completed') {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10b981', '#8b5cf6', '#06b6d4', '#f59e0b']
      });
    }
    onToggleStatus(task.id, nextStatus);
  };

  // Priority badge styling
  const getPriorityStyle = () => {
    if (task.priority === 'High') {
      return 'bg-rose-500/10 text-rose-400 border-rose-500/25';
    }
    if (task.priority === 'Medium') {
      return 'bg-amber-500/10 text-amber-300 border-amber-500/25';
    }
    return 'bg-slate-500/10 text-slate-400 border-slate-500/25';
  };

  // Type badge styling
  const getTypeStyle = () => {
    switch (task.type) {
      case 'concept':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'practice':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      case 'notes':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/20';
      case 'revision':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'testing':
      case 'self-test':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      case 'exam':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold';
      default:
        return 'bg-slate-800 text-slate-400 border-white/5';
    }
  };

  return (
    <div 
      className={`group rounded-xl border transition-all duration-200 relative ${
        isCompleted 
          ? 'bg-[#0b101c]/60 border-emerald-500/20 opacity-80 hover:opacity-100'
          : isInProgress
          ? 'bg-[#12192e] border-amber-500/30 shadow-sm shadow-amber-500/5'
          : isOverdue
          ? 'bg-[#181119] border-rose-500/40 glow-rose'
          : 'bg-[#0e1322] border-white/[0.07] hover:border-white/20 hover:bg-[#11172a]'
      }`}
    >
      <div className="p-3 sm:p-3.5 flex items-start gap-3">
        
        {/* Checkbox */}
        <button
          onClick={handleCheckboxClick}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
            isCompleted
              ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/40'
              : isInProgress
              ? 'border-amber-400 bg-amber-400/20 text-amber-300 hover:border-emerald-400'
              : 'border-white/20 bg-slate-900/50 hover:border-purple-400 hover:bg-purple-500/10'
          }`}
          title={isCompleted ? "Mark Pending" : "Mark Completed"}
        >
          {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          {isInProgress && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
        </button>

        {/* Content Body */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Subject, Unit, Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            {/* Subject badge */}
            <span
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md"
              style={{ backgroundColor: subject.bgLight, color: subject.color }}
            >
              {subject.shortName}
            </span>

            {/* Unit badge */}
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
              Unit {task.unit}
            </span>

            {/* Task Type badge */}
            <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${getTypeStyle()}`}>
              {task.type}
            </span>

            {/* Priority badge */}
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${getPriorityStyle()}`}>
              {task.priority}
            </span>

            {/* Overdue tag */}
            {isOverdue && (
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                OVERDUE
              </span>
            )}
          </div>

          {/* Task Topic / Title */}
          <div className="flex items-baseline justify-between gap-2">
            <h4 className={`text-sm font-medium leading-snug ${
              isCompleted ? 'line-through text-slate-400' : 'text-slate-100'
            }`}>
              {task.topic}
            </h4>
          </div>

          {/* Unit title subtitle */}
          <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
            {task.unitTitle}
          </div>

          {/* Footer Metadata */}
          <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-slate-400 font-mono">
            {/* Date with relative label */}
            <span className={`flex items-center gap-1 ${
              isOverdue ? 'text-rose-400 font-semibold' : task.date === currentDate ? 'text-amber-300 font-semibold' : 'text-slate-400'
            }`}>
              <Calendar className="w-3 h-3" />
              {formatDate(task.date)} ({getRelativeDateLabel(task.date, currentDate)})
            </span>

            {/* Duration */}
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-500" />
              {task.estimatedDuration}
            </span>

            {/* Status toggle pill */}
            <button
              onClick={() => {
                const cycle = {
                  'Pending': 'In Progress',
                  'In Progress': 'Completed',
                  'Completed': 'Pending'
                };
                onToggleStatus(task.id, cycle[task.status] || 'Pending');
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-all ${
                task.status === 'Completed'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : task.status === 'In Progress'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
              }`}
            >
              {task.status}
            </button>

            {/* Notes toggle */}
            {task.notes && (
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
              >
                <FileText className="w-3 h-3" />
                <span>Notes</span>
                {showNotes ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}
          </div>

          {/* Expanded Notes */}
          {showNotes && task.notes && (
            <div className="mt-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 font-sans leading-relaxed">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                Study Directive:
              </span>
              {task.notes}
            </div>
          )}
        </div>

        {/* Action Menu button & popup */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {showMenu && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowMenu(false)} 
              />
              <div className="absolute right-0 top-7 z-50 w-44 rounded-xl bg-[#141a2e] border border-white/10 shadow-2xl py-1 text-xs">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onEditTask(task);
                  }}
                  className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                  Edit Task
                </button>

                <button
                  onClick={() => {
                    setShowMenu(false);
                    onRescheduleTask(task);
                  }}
                  className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  <CalendarClock className="w-3.5 h-3.5 text-amber-400" />
                  Reschedule Task
                </button>

                <div className="border-t border-white/5 my-1" />

                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDeleteTask(task.id);
                  }}
                  className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-rose-400 hover:bg-rose-500/10"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Task
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
