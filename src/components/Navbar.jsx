import React from 'react';
import { Rocket, Search, Bell, PanelLeft, PanelLeftClose, Menu } from 'lucide-react';
import { ACADEMIC_CONFIG } from '../data/academicConfig';

export const Navbar = ({ 
  searchQuery, 
  setSearchQuery, 
  sidebarOpen, 
  setSidebarOpen,
  onResetSearch
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Sidebar Toggle + Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-1.5"
            title={sidebarOpen ? "Collapse sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
            <span className="text-[11px] font-mono hidden sm:inline text-neutral-400">
              {sidebarOpen ? "Collapse" : "Menu"}
            </span>
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer" onClick={onResetSearch}>
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
              <Rocket className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-white font-sans">
                  {ACADEMIC_CONFIG.appName}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 font-semibold">
                  v3.0
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                ENGINEERING OS
              </div>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, units, syllabus, exams... (e.g. Rank, EDTA, Loops)"
              className="w-full pl-10 pr-12 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700 transition-all font-sans"
            />
            {searchQuery ? (
              <button 
                onClick={onResetSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            ) : (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                ⌘K
              </span>
            )}
          </div>
        </div>

        {/* Right: Target Role Badge + Avatar */}
        <div className="flex items-center gap-3">
          {/* Target Role Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="text-[11px] font-mono text-neutral-500 uppercase font-semibold">TARGET</span>
            <span className="text-xs font-semibold text-white">B.Tech CSE-AIML · PIET</span>
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-1 border-l border-neutral-800">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white font-mono font-bold text-xs flex items-center justify-center border border-neutral-700">
              TT
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
