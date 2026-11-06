import React from 'react';
import { 
  Compass, 
  Calendar, 
  BookOpen, 
  Clock, 
  Layers, 
  Search, 
  Award, 
  ChevronRight,
  Flame,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

export const LovableSidebar = ({ 
  selectedSubject, 
  setSelectedSubject, 
  selectedPhase, 
  setSelectedPhase,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          onClick={onClose} 
          className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-xs" 
        />
      )}

      <aside className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#0F121C] border-r border-[#1E2337] flex flex-col transition-transform duration-200 md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Brand Header */}
        <div className="h-16 px-5 border-b border-[#1E2337] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Semester OS</span>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#8B92A7]">
              ENGINEERING OS · PIET
            </div>
          </div>
        </div>

        {/* Quick Search trigger */}
        <div className="p-3">
          <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs bg-[#141724] border border-[#1E2337] text-[#8B92A7]">
            <span className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              <span>Jump to...</span>
            </span>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1E2337] text-slate-300">
              Ctrl+K
            </kbd>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4 text-xs">
          
          {/* Section: OVERVIEW */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8B92A7]/70 font-semibold">
              OVERVIEW
            </div>
            <div className="space-y-0.5">
              <button
                onClick={() => {
                  setSelectedPhase('ALL');
                  setSelectedSubject('ALL');
                  if (onClose) onClose();
                }}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-medium transition-colors ${
                  selectedPhase === 'ALL' && selectedSubject === 'ALL'
                    ? 'bg-[#181C2B] text-white font-semibold border border-[#282F48]'
                    : 'text-[#8B92A7] hover:text-white hover:bg-[#141724]'
                }`}
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Roadmap Overview</span>
              </button>

              <button
                onClick={() => {
                  setSelectedPhase(6); // Sessional III
                  if (onClose) onClose();
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-colors ${
                  selectedPhase === 6
                    ? 'bg-indigo-950/40 text-indigo-300 border border-indigo-500/40 font-semibold'
                    : 'text-[#8B92A7] hover:text-white hover:bg-[#141724]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Sessional III Prep</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                  Dec 7
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedPhase(8); // End Sem
                  if (onClose) onClose();
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-colors ${
                  selectedPhase === 8
                    ? 'bg-indigo-950/40 text-indigo-300 border border-indigo-500/40 font-semibold'
                    : 'text-[#8B92A7] hover:text-white hover:bg-[#141724]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>End-Sem Journey</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">
                  Dec 17
                </span>
              </button>
            </div>
          </div>

          {/* Section: SUBJECTS FOCUS */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8B92A7]/70 font-semibold">
              THEORY SUBJECTS
            </div>
            <div className="space-y-0.5">
              {[
                { id: 'MATH', name: 'Mathematics-I', credits: '4cr' },
                { id: 'CHEM', name: 'Chemistry', credits: '4cr' },
                { id: 'CP', name: 'C Programming', credits: '3cr' },
                { id: 'BEE', name: 'Electronics (BEE)', credits: '3cr' },
                { id: 'BOC', name: 'Communication Skills', credits: '2cr' },
              ].map((sub) => {
                const isSel = selectedSubject === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedSubject(isSel ? 'ALL' : sub.id);
                      if (onClose) onClose();
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                      isSel
                        ? 'bg-[#181C2B] text-white border border-[#282F48] font-semibold'
                        : 'text-[#8B92A7] hover:text-white hover:bg-[#141724]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-1.5 h-1.5 rounded-full ${isSel ? 'bg-indigo-400' : 'bg-[#1E2337]'}`} />
                      <span className="truncate">{sub.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8B92A7]">{sub.credits}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: LABS & EXAM SCHEME */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8B92A7]/70 font-semibold">
              ACADEMIC SPECS
            </div>
            <div className="p-2.5 rounded-lg bg-[#141724] border border-[#1E2337] space-y-1.5 text-[11px] font-mono text-[#8B92A7]">
              <div className="flex items-center justify-between">
                <span>Total Credits:</span>
                <strong className="text-white">21 Credits</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Theory:</span>
                <span>16 Credits (5 Sub)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Practical Labs:</span>
                <span>5 Credits (5 Labs)</span>
              </div>
              <div className="pt-1 border-t border-[#1E2337] flex items-center justify-between text-[10px]">
                <span>Evaluation:</span>
                <span className="text-indigo-300">40 Int + 60 Ext</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom User / Institution Pill */}
        <div className="p-3 border-t border-[#1E2337] bg-[#0F121C]">
          <div className="p-2.5 rounded-lg bg-[#141724] border border-[#1E2337]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-0.5">
              TARGET 9.0+ SGPA
            </div>
            <div className="text-xs font-semibold text-white truncate">
              B.Tech CSE-AIML · PIET
            </div>
            <div className="text-[10px] text-[#8B92A7] font-mono mt-0.5">
              Mission 2026–27
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};
