import React from 'react';
import { SUBJECTS } from '../data/academicData';

export const SubjectCards = ({ tasks, selectedSubject, onSelectSubject }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2.5">
        <h3 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-medium">
          Subject Progress
        </h3>
        {selectedSubject !== 'ALL' && (
          <button
            onClick={() => onSelectSubject('ALL')}
            className="text-xs text-theme-accent hover:underline font-mono"
          >
            Clear Subject Filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {SUBJECTS.map((sub) => {
          const subTasks = tasks.filter((t) => t.subjectId === sub.id);
          const totalSubTasks = subTasks.length;
          const completedSubTasks = subTasks.filter((t) => t.status === 'Completed').length;
          const pct = totalSubTasks > 0 ? Math.round((completedSubTasks / totalSubTasks) * 100) : 0;
          const isSelected = selectedSubject === sub.id;

          return (
            <div
              key={sub.id}
              onClick={() => onSelectSubject(isSelected ? 'ALL' : sub.id)}
              className={`p-3.5 rounded-xl bg-theme-card border cursor-pointer transition-all ${
                isSelected
                  ? 'border-theme-accent ring-1 ring-theme-accent/40'
                  : 'border-theme-border hover:border-theme-muted/40'
              }`}
            >
              {/* Title, Credits & Percentage */}
              <div className="flex items-start justify-between gap-1.5 mb-2">
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-theme-text truncate" title={sub.name}>
                    {sub.shortName}
                  </h4>
                  <span className="text-[10px] text-theme-muted font-mono block">
                    {sub.credits} credits
                  </span>
                </div>

                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-theme-surface border border-theme-border text-theme-text font-medium">
                  {pct}%
                </span>
              </div>

              {/* Thin progress indicator */}
              <div className="w-full h-1 bg-theme-border rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-theme-accent rounded-full transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Completed / Total slots count */}
              <div className="flex items-center justify-between text-[11px] font-mono text-theme-muted">
                <span>{completedSubTasks} of {totalSubTasks} slots done</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
