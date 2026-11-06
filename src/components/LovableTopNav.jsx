import React from 'react';
import { Search, Bell, Menu, Sparkles, Calendar } from 'lucide-react';

export const LovableTopNav = ({ 
  currentDate, 
  setCurrentDate, 
  searchQuery, 
  setSearchQuery, 
  onOpenSidebar 
}) => {
  return (
    <header className="h-16 px-4 sm:px-8 border-b border-[#1E2337] bg-[#0F121C]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between gap-4">
      
      {/* Left Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onOpenSidebar}
          className="p-1.5 rounded-lg border border-[#1E2337] text-[#8B92A7] hover:text-white md:hidden"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative w-full">
          <Search className="w-4 h-4 text-[#8B92A7] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search syllabus, milestones, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141724] border border-[#1E2337] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#8B92A7] focus:outline-none focus:border-indigo-500/60 transition-colors"
          />
        </div>
      </div>

      {/* Right Tools & Avatar */}
      <div className="flex items-center gap-3">
        
        {/* Date Selector */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141724] border border-[#1E2337] text-xs text-[#8B92A7]">
          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-mono text-[11px]">Date:</span>
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="bg-transparent text-white font-mono text-xs focus:outline-none cursor-pointer"
          />
        </div>

        {/* Target Role Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#141724] border border-[#1E2337] text-xs">
          <span className="text-[10px] font-mono text-[#8B92A7] uppercase tracking-wider">
            TARGET
          </span>
          <span className="font-semibold text-white">
            Semester 1 Topper · PIET
          </span>
        </div>

        {/* Notifications */}
        <button 
          className="p-2 rounded-lg text-[#8B92A7] hover:text-white hover:bg-[#141724] transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-indigo-500/30">
          OS
        </div>

      </div>

    </header>
  );
};
