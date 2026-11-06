import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  MoreVertical, 
  Edit3, 
  CalendarClock, 
  Trash2, 
  CheckCircle2, 
  Plus,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { getSubjectById } from '../data/academicData';
import { formatFullDate } from '../utils/dateUtils';

export const TodayStudyPlan = ({ 
  tasks, 
  currentDate, 
  onToggleStatus, 
  onEditTask, 
  onRescheduleTask, 
  onDeleteTask,
  onAddTask
}) => {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [expandedNotesId, setExpandedNotesId] = useState(null);

  // Filter tasks for today
  const todayTasks = tasks.filter((t) => t.date === currentDate);
  const completedToday = todayTasks.filter((t) => t.status === 'Completed').length;
  const isAllDone = todayTasks.length > 0 && completedToday === todayTasks.length;

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-saas-danger bg-saas-danger/10 border-saas-danger/20';
      case 'Medium':
        return 'text-saas-warning bg-saas-warning/10 border-saas-warning/20';
      default:
        return 'text-theme-muted bg-theme-border/50 border-theme-border';
    }
  };

  return (
    <div className="mb-8 rounded-xl bg-theme-card border border-theme-border overflow-hidden">
      
      {/* Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-theme-border flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-theme-text tracking-tight">
              Today's Study Plan
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-theme-border text-theme-muted">
              {completedToday} of {todayTasks.length} done
            </span>
          </div>
          <p className="text-xs text-theme-muted mt-0.5 font-mono">
            Focus for {formatFullDate(currentDate)}
          </p>
        </div>

        <button
          onClick={onAddTask}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-theme-muted hover:text-theme-text hover:bg-theme-border/40 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Task Rows or Empty State */}
      {todayTasks.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-xs text-theme-muted mb-3 font-mono">
            No study tasks scheduled for today.
          </p>
          <button
            onClick={onAddTask}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-theme-border text-theme-text hover:bg-theme-border/80 transition-colors"
          >
            Schedule a Task for Today
          </button>
        </div>
      ) : isAllDone ? (
        <div>
          {/* List of completed tasks */}
          <div className="divide-y divide-theme-border/40">
            {todayTasks.map((task) => {
              const sub = getSubjectById(task.subjectId) || { shortName: task.subjectId };
              return (
                <div 
                  key={task.id}
                  className="px-4 sm:px-5 py-3 flex items-center justify-between gap-3 bg-theme-surface/30 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={() => onToggleStatus(task.id, 'Pending')}
                      className="w-4 h-4 rounded border border-saas-success bg-saas-success text-saas-darkBg flex items-center justify-center transition-all"
                      title="Mark pending"
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </button>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-theme-muted uppercase">
                          {sub.shortName} · U{task.unit}
                        </span>
                        <span className="text-xs line-through text-theme-muted truncate">
                          {task.topic}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-saas-success font-medium">
                    Completed
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-theme-surface/50 border-t border-theme-border text-center">
            <div className="inline-flex items-center gap-1.5 text-xs text-saas-success font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>All tasks for today completed. Well done!</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-theme-border/40">
          {todayTasks.map((task) => {
            const sub = getSubjectById(task.subjectId) || { shortName: task.subjectId };
            const isCompleted = task.status === 'Completed';
            const isExpanded = expandedNotesId === task.id;

            return (
              <div 
                key={task.id}
                className={`px-4 sm:px-5 py-3 transition-colors ${
                  isCompleted ? 'bg-theme-surface/20 opacity-70' : 'hover:bg-theme-surface/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  
                  {/* Left: Checkbox & Info */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    
                    {/* Checkbox */}
                    <button
                      onClick={() => onToggleStatus(task.id, isCompleted ? 'Pending' : 'Completed')}
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'border-saas-success bg-saas-success text-saas-darkBg'
                          : 'border-theme-border bg-theme-card hover:border-theme-accent'
                      }`}
                      title={isCompleted ? "Mark Pending" : "Mark Complete"}
                    >
                      {isCompleted && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>

                    {/* Metadata & Title */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-theme-border/40 text-theme-text">
                          {sub.shortName}
                        </span>
                        <span className="text-[10px] font-mono text-theme-muted">
                          Unit {task.unit}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${getPriorityStyle(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className="text-[10px] font-mono text-theme-muted flex items-center gap-1">
                          <Clock className="w-3 h-3 text-theme-muted/60" />
                          {task.estimatedDuration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <h4 className={`text-xs sm:text-sm font-medium ${
                          isCompleted ? 'line-through text-theme-muted' : 'text-theme-text'
                        }`}>
                          {task.topic}
                        </h4>
                        
                        {task.notes && (
                          <button
                            onClick={() => setExpandedNotesId(isExpanded ? null : task.id)}
                            className="text-[10px] text-theme-accent hover:underline font-mono inline-flex items-center gap-0.5"
                          >
                            <span>notes</span>
                            {isExpanded ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
                          </button>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Right Status & Action Menu */}
                  <div className="flex items-center gap-2">
                    
                    {/* Quick status pill */}
                    <button
                      onClick={() => {
                        const next = task.status === 'Completed' ? 'Pending' : task.status === 'In Progress' ? 'Completed' : 'In Progress';
                        onToggleStatus(task.id, next);
                      }}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                        task.status === 'Completed'
                          ? 'border-saas-success/30 text-saas-success bg-saas-success/10'
                          : task.status === 'In Progress'
                          ? 'border-saas-warning/30 text-saas-warning bg-saas-warning/10'
                          : 'border-theme-border text-theme-muted hover:border-theme-muted'
                      }`}
                    >
                      {task.status}
                    </button>

                    {/* Options Menu Button */}
                    <div className="relative">
                      <button
                        onClick={() => setActiveMenuId(activeMenuId === task.id ? null : task.id)}
                        className="p-1 rounded text-theme-muted hover:text-theme-text hover:bg-theme-border/40 transition-colors"
                      >
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>

                      {activeMenuId === task.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setActiveMenuId(null)} 
                          />
                          <div className="absolute right-0 top-6 z-50 w-40 rounded-lg bg-theme-surface border border-theme-border shadow-xl py-1 text-xs">
                            <button
                              onClick={() => {
                                setActiveMenuId(null);
                                onEditTask(task);
                              }}
                              className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-theme-text hover:bg-theme-card"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-theme-muted" />
                              Edit Task
                            </button>
                            <button
                              onClick={() => {
                                setActiveMenuId(null);
                                onRescheduleTask(task);
                              }}
                              className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-theme-text hover:bg-theme-card"
                            >
                              <CalendarClock className="w-3.5 h-3.5 text-theme-muted" />
                              Reschedule
                            </button>
                            <div className="border-t border-theme-border my-1" />
                            <button
                              onClick={() => {
                                setActiveMenuId(null);
                                onDeleteTask(task.id);
                              }}
                              className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-saas-danger hover:bg-theme-card"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                  </div>

                </div>

                {/* Expanded Notes Directive */}
                {isExpanded && task.notes && (
                  <div className="mt-2.5 ml-7 p-2.5 rounded bg-theme-surface border border-theme-border text-xs text-theme-muted leading-relaxed font-sans">
                    <span className="font-mono text-[10px] text-theme-accent uppercase tracking-wider block mb-0.5">
                      Notes / Study Directive:
                    </span>
                    {task.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
