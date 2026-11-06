import React from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Flag, 
  Sparkles,
  X
} from 'lucide-react';
import { ACADEMIC_CONFIG } from '../data/academicConfig';

export const Sidebar = ({ 
  isOpen, 
  onClose,
  activeView, 
  setActiveView,
  selectedSubjectFilter,
  setSelectedSubjectFilter,
  onSelectDate
}) => {
  const subjects = [
    { name: "Mathematics-I", label: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", label: "Engineering Chemistry", credits: 4 },
    { name: "Problem Solving Using C", label: "Problem Solving Using C", credits: 3 },
    { name: "Basics of Electronics Engineering", label: "Basics of Electronics Eng", credits: 3 },
    { name: "Basics of Communication Skills", label: "Basics of Communication", credits: 2 }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 transition-opacity"
      />

      <aside className="
        fixed top-16 left-0 z-50
        w-72 h-[calc(100vh-4rem)]
        bg-[#0D0D0D] border-r border-neutral-800
        flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200
      ">
        <div className="p-4 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-neutral-800">
          
          {/* Header of Sidebar with Close Button */}
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
              Navigation Menu
            </span>
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick jump to date */}
          <div>
            <button
              onClick={() => {
                onSelectDate(ACADEMIC_CONFIG.startDate);
                onClose();
              }}
              className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-left text-neutral-300 hover:text-white hover:border-neutral-700 flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <CalendarDays className="w-3.5 h-3.5 text-white" />
                <span>Jump to Start (6 Nov)...</span>
              </span>
              <span className="text-[10px] font-mono bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                Today
              </span>
            </button>
          </div>

          {/* Section: OVERVIEW */}
          <div>
            <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold px-3 mb-2">
              OVERVIEW
            </div>
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveView('today');
                  setSelectedSubjectFilter(null);
                  onClose();
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeView === 'today' && !selectedSubjectFilter
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Daily Slots (Today)</span>
              </button>

              <button
                onClick={() => {
                  setActiveView('all');
                  setSelectedSubjectFilter(null);
                  onClose();
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeView === 'all' && !selectedSubjectFilter
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                <span>All 69 Days Timeline</span>
              </button>
            </nav>
          </div>

          {/* Section: LEARN & SYLLABUS */}
          <div>
            <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold px-3 mb-2 flex items-center justify-between">
              <span>SYLLABUS (SEMESTER 1)</span>
              <span className="text-[9px] text-neutral-500 font-mono">21 CREDITS</span>
            </div>
            <div className="space-y-1">
              {subjects.map(s => {
                const isSelected = selectedSubjectFilter === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => {
                      setSelectedSubjectFilter(isSelected ? null : s.name);
                      onClose();
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-neutral-800 text-white font-semibold border border-neutral-700'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                      <span className="truncate">{s.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 shrink-0">
                      {s.credits} Cr
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: EXAMINATIONS */}
          <div>
            <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold px-3 mb-2">
              EXAMS
            </div>
            <div className="space-y-2">
              {/* Sessional III */}
              <button
                onClick={() => {
                  onSelectDate(ACADEMIC_CONFIG.sessionalDates.start);
                  onClose();
                }}
                className="w-full text-left p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Sessional III</span>
                  <span className="text-[10px] font-mono text-neutral-400">7–10 Dec</span>
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">
                  Full Sem-1 syllabus
                </div>
              </button>

              {/* End Semester Exams */}
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span className="flex items-center gap-1.5">
                    <Flag className="w-3 h-3 text-neutral-400" />
                    End Semester
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">17 Dec – 13 Jan</span>
                </div>
                
                <div className="grid grid-cols-1 gap-1 pt-1 border-t border-neutral-800 text-[10px] font-mono">
                  {ACADEMIC_CONFIG.examSchedule.map(ex => (
                    <button
                      key={ex.date}
                      onClick={() => {
                        onSelectDate(ex.date);
                        onClose();
                      }}
                      className="flex items-center justify-between text-neutral-400 hover:text-white py-0.5 transition-colors"
                    >
                      <span className="truncate">{ex.subject.split(' ')[0]}</span>
                      <span className="text-neutral-500">{ex.date.slice(5).replace('-', '/')}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Target SGPA Card */}
        <div className="p-4 border-t border-neutral-800 bg-[#0A0A0A]">
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                Target 9.0+ SGPA
              </span>
              <span className="text-[9px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.2 rounded border border-neutral-700 font-bold">
                PIET
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 leading-relaxed">
              B.Tech CSE-AIML · 2 slots daily discipline.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
