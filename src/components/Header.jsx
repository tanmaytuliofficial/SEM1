import React from 'react';
import { 
  Menu, 
  Plus, 
  Calendar, 
  Clock, 
  RotateCcw,
  Sun,
  Moon,
  Search,
  BookOpen
} from 'lucide-react';
import { ACADEMIC_METADATA } from '../data/academicData';
import { getCurrentPhase, getGreeting, formatFullDate } from '../utils/dateUtils';

export const Header = ({ 
  currentDate, 
  setCurrentDate, 
  onAddTask, 
  onResetDate,
  onOpenSidebar,
  isLightMode,
  setIsLightMode,
  onOpenSyllabus
}) => {
  const currentPhase = getCurrentPhase(currentDate);
  const greeting = getGreeting();

  return (
    <header className="border-b border-theme-border bg-theme-surface/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Left Greeting & Context */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSidebar}
              className="p-1.5 rounded-lg border border-theme-border text-theme-muted hover:text-theme-text md:hidden"
              title="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight text-theme-text">
                  {greeting}, Scholar
                </span>
                <span className="text-theme-muted text-xs">•</span>
                <span className="text-xs text-theme-muted font-mono">
                  {formatFullDate(currentDate)}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-theme-muted mt-0.5">
                <span>Semester 1 · B.Tech CSE-AIML</span>
                <span>•</span>
                <span className="text-theme-accent font-medium">
                  Phase {currentPhase.phase} · {currentPhase.title}
                </span>
              </div>
            </div>
          </div>

          {/* Right Tools: Date Picker, Theme Toggle, Add Task */}
          <div className="flex items-center gap-2">
            
            {/* System Date Simulation */}
            <div className="flex items-center bg-theme-card border border-theme-border rounded-lg px-2.5 py-1 text-xs text-theme-muted gap-2">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-theme-muted" />
                Date:
              </span>
              <input
                type="date"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="bg-transparent text-theme-text font-mono text-xs focus:outline-none cursor-pointer"
                title="Change simulation date"
              />
              {currentDate !== ACADEMIC_METADATA.startDate && (
                <button
                  onClick={onResetDate}
                  title="Reset date to Nov 6, 2026"
                  className="text-[11px] text-theme-accent hover:underline flex items-center gap-1 pl-1.5 border-l border-theme-border"
                >
                  <RotateCcw className="w-3 h-3" />
                  Day 1
                </button>
              )}
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="p-1.5 rounded-lg bg-theme-card border border-theme-border text-theme-muted hover:text-theme-text transition-colors"
              title={isLightMode ? "Switch to Dark" : "Switch to Light"}
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Add Task Button */}
            <button
              onClick={onAddTask}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-theme-text text-theme-bg hover:opacity-90 active:scale-98 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Task</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
