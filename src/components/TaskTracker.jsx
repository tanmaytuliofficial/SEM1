import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Calendar, 
  Check, 
  Clock, 
  MoreVertical, 
  Edit3, 
  CalendarClock, 
  Trash2,
  FileText,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  CalendarDays
} from 'lucide-react';
import { SUBJECTS, getSubjectById } from '../data/academicData';
import { formatDate, getDayDifference, getDateBucket, isDateOverdue } from '../utils/dateUtils';

export const TaskTracker = ({ 
  tasks, 
  currentDate, 
  selectedSubject, 
  setSelectedSubject,
  selectedPhase,
  setSelectedPhase,
  filterType,
  setFilterType,
  onToggleStatus,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onRescheduleTask
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [timelineGrouping, setTimelineGrouping] = useState('buckets'); // 'buckets' | 'by_date' | 'flat'
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [expandedNotesId, setExpandedNotesId] = useState(null);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // 1. Subject Filter
      if (selectedSubject !== 'ALL' && task.subjectId !== selectedSubject) {
        return false;
      }

      // 2. Phase Filter
      if (selectedPhase !== 'ALL' && task.phase !== selectedPhase) {
        return false;
      }

      // 3. Status Filter
      if (filterType === 'pending' && task.status === 'Completed') return false;
      if (filterType === 'completed' && task.status !== 'Completed') return false;
      if (filterType === 'in_progress' && task.status !== 'In Progress') return false;
      if (filterType === 'today' && task.date !== currentDate) return false;
      if (filterType === 'overdue' && (task.date >= currentDate || task.status === 'Completed')) return false;

      // 4. Priority Filter
      if (priorityFilter !== 'ALL' && task.priority !== priorityFilter) return false;

      // 5. Search Filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTopic = task.topic.toLowerCase().includes(q);
        const matchNotes = (task.notes || '').toLowerCase().includes(q);
        const matchUnit = (task.unitTitle || '').toLowerCase().includes(q);
        const matchSub = (task.subjectId || '').toLowerCase().includes(q);
        if (!matchTopic && !matchNotes && !matchUnit && !matchSub) return false;
      }

      return true;
    });
  }, [tasks, selectedSubject, selectedPhase, filterType, priorityFilter, searchQuery, currentDate]);

  // Group by SaaS Buckets: Today, Tomorrow, This Week, Next Week, Upcoming, Overdue
  const bucketedTasks = useMemo(() => {
    const buckets = {
      overdue: { label: 'Overdue Tasks', tasks: [], alert: true },
      today: { label: 'Today', tasks: [] },
      tomorrow: { label: 'Tomorrow', tasks: [] },
      this_week: { label: 'This Week', tasks: [] },
      next_week: { label: 'Next Week', tasks: [] },
      upcoming: { label: 'Upcoming', tasks: [] }
    };

    filteredTasks.forEach((task) => {
      if (task.date < currentDate && task.status !== 'Completed') {
        buckets.overdue.tasks.push(task);
      } else {
        const bucketInfo = getDateBucket(task.date, currentDate);
        if (buckets[bucketInfo.key]) {
          buckets[bucketInfo.key].tasks.push(task);
        } else {
          buckets.upcoming.tasks.push(task);
        }
      }
    });

    // Sort tasks inside each bucket by date
    Object.keys(buckets).forEach((key) => {
      buckets[key].tasks.sort((a, b) => a.date.localeCompare(b.date));
    });

    return buckets;
  }, [filteredTasks, currentDate]);

  // Priority badge styling
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
    <div className="rounded-xl bg-theme-card border border-theme-border overflow-hidden mb-12">
      
      {/* Filter & Search Header */}
      <div className="p-4 sm:p-5 border-b border-theme-border space-y-3.5">
        
        {/* Row 1: Search, Grouping Mode, Add Task */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-3.5 h-3.5 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter topics, units, or notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-theme-surface border border-theme-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-theme-text placeholder-theme-muted focus:outline-none focus:border-theme-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] text-theme-muted hover:text-theme-text absolute right-2.5 top-1/2 -translate-y-1/2 font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Grouping Mode & Add */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-theme-surface border border-theme-border rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setTimelineGrouping('buckets')}
                className={`px-2.5 py-1 rounded-md transition-colors text-[11px] font-medium ${
                  timelineGrouping === 'buckets' ? 'bg-theme-card text-theme-text shadow-xs' : 'text-theme-muted hover:text-theme-text'
                }`}
                title="Group into Today, Tomorrow, This Week, Next Week, Upcoming"
              >
                Timeline
              </button>
              <button
                onClick={() => setTimelineGrouping('flat')}
                className={`px-2.5 py-1 rounded-md transition-colors text-[11px] font-medium ${
                  timelineGrouping === 'flat' ? 'bg-theme-card text-theme-text shadow-xs' : 'text-theme-muted hover:text-theme-text'
                }`}
                title="All tasks in a single list"
              >
                Flat List
              </button>
            </div>

            <button
              onClick={onAddTask}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-theme-border/60 hover:bg-theme-border text-theme-text transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>

        </div>

        {/* Row 2: Subject Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
          <span className="text-theme-muted font-mono text-[10px] uppercase tracking-wider mr-1">
            Subject:
          </span>

          <button
            onClick={() => setSelectedSubject('ALL')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap text-xs font-medium transition-colors ${
              selectedSubject === 'ALL'
                ? 'bg-theme-text text-theme-bg'
                : 'bg-theme-surface text-theme-muted border border-theme-border hover:text-theme-text'
            }`}
          >
            All Subjects ({tasks.length})
          </button>

          {SUBJECTS.map((sub) => {
            const count = tasks.filter((t) => t.subjectId === sub.id).length;
            const isSel = selectedSubject === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap text-xs font-medium transition-colors ${
                  isSel
                    ? 'bg-theme-border text-theme-text border border-theme-accent font-semibold'
                    : 'bg-theme-surface text-theme-muted border border-theme-border hover:text-theme-text'
                }`}
              >
                <span>{sub.shortName}</span>
                <span className="text-[10px] opacity-60 ml-1 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Row 3: Status & Priority Filters */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-theme-border/50 text-xs">
          
          {/* Status Tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-theme-muted font-mono text-[10px] uppercase tracking-wider mr-1">
              Status:
            </span>
            {[
              { id: 'all', label: 'All' },
              { id: 'pending', label: 'Pending' },
              { id: 'in_progress', label: 'In Progress' },
              { id: 'completed', label: 'Completed' },
              { id: 'overdue', label: 'Overdue', alert: true },
            ].map((f) => {
              const active = filterType === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilterType(f.id)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    active
                      ? f.alert 
                        ? 'bg-saas-danger/20 text-saas-danger border border-saas-danger/40' 
                        : 'bg-theme-border text-theme-text font-semibold'
                      : f.alert
                      ? 'text-saas-danger hover:bg-saas-danger/10'
                      : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Priority dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-theme-muted">
            <span className="font-mono text-[10px] uppercase tracking-wider">Priority:</span>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="bg-theme-surface border border-theme-border text-theme-text rounded-md px-2 py-0.5 text-xs focus:outline-none"
            >
              <option value="ALL">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

        </div>

      </div>

      {/* Task List Section */}
      <div className="p-0">
        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-xs text-theme-muted mb-2 font-mono">
              No tasks match your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedSubject('ALL');
                setFilterType('all');
                setPriorityFilter('ALL');
                setSearchQuery('');
              }}
              className="text-xs text-theme-accent hover:underline font-mono"
            >
              Reset all filters
            </button>
          </div>
        ) : timelineGrouping === 'buckets' ? (
          
          /* Grouped by Saas Buckets (Today, Tomorrow, This Week, Next Week, Upcoming) */
          <div className="divide-y divide-theme-border">
            {['overdue', 'today', 'tomorrow', 'this_week', 'next_week', 'upcoming'].map((bKey) => {
              const bucket = bucketedTasks[bKey];
              if (!bucket || bucket.tasks.length === 0) return null;

              return (
                <div key={bKey} className="py-2">
                  
                  {/* Bucket Header */}
                  <div className="px-4 sm:px-5 py-2 flex items-center justify-between bg-theme-surface/40">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                        bucket.alert ? 'text-saas-danger' : 'text-theme-text'
                      }`}>
                        {bucket.label}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-theme-border text-theme-muted">
                        {bucket.tasks.length}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-theme-muted">
                      {bucket.tasks.filter(t => t.status === 'Completed').length} / {bucket.tasks.length} done
                    </span>
                  </div>

                  {/* Tasks inside bucket */}
                  <div className="divide-y divide-theme-border/40">
                    {bucket.tasks.map((task) => (
                      <TaskRowItem
                        key={task.id}
                        task={task}
                        currentDate={currentDate}
                        onToggleStatus={onToggleStatus}
                        onEditTask={onEditTask}
                        onRescheduleTask={onRescheduleTask}
                        onDeleteTask={onDeleteTask}
                        activeMenuId={activeMenuId}
                        setActiveMenuId={setActiveMenuId}
                        expandedNotesId={expandedNotesId}
                        setExpandedNotesId={setExpandedNotesId}
                        getPriorityStyle={getPriorityStyle}
                      />
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        ) : (
          
          /* Flat List */
          <div className="divide-y divide-theme-border/40">
            {filteredTasks.map((task) => (
              <TaskRowItem
                key={task.id}
                task={task}
                currentDate={currentDate}
                onToggleStatus={onToggleStatus}
                onEditTask={onEditTask}
                onRescheduleTask={onRescheduleTask}
                onDeleteTask={onDeleteTask}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                expandedNotesId={expandedNotesId}
                setExpandedNotesId={setExpandedNotesId}
                getPriorityStyle={getPriorityStyle}
              />
            ))}
          </div>

        )}
      </div>

    </div>
  );
};

// Extracted Sub-Component for a single Task Row
const TaskRowItem = ({
  task,
  currentDate,
  onToggleStatus,
  onEditTask,
  onRescheduleTask,
  onDeleteTask,
  activeMenuId,
  setActiveMenuId,
  expandedNotesId,
  setExpandedNotesId,
  getPriorityStyle
}) => {
  const isCompleted = task.status === 'Completed';
  const isOverdue = isDateOverdue(task.date, currentDate, task.status);
  const isExpanded = expandedNotesId === task.id;
  const sub = getSubjectById(task.subjectId) || { shortName: task.subjectId };

  return (
    <div className={`px-4 sm:px-5 py-2.5 transition-colors ${
      isCompleted ? 'bg-theme-surface/20 opacity-70' : 'hover:bg-theme-surface/40'
    }`}>
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

          {/* Details */}
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
                <Calendar className="w-3 h-3 text-theme-muted/60" />
                {formatDate(task.date)}
              </span>
              <span className="text-[10px] font-mono text-theme-muted hidden sm:inline">
                {task.estimatedDuration}
              </span>
              {isOverdue && (
                <span className="text-[10px] font-mono font-semibold text-saas-danger bg-saas-danger/10 px-1.5 py-0.2 rounded border border-saas-danger/30">
                  Overdue
                </span>
              )}
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
};
