import React, { useState, useEffect, useRef } from 'react';
import { ACADEMIC_CONFIG } from './data/academicConfig';
import { TopTicker } from './components/TopTicker';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SubjectProgressRow } from './components/SubjectProgressRow';
import { SlotCard } from './components/SlotCard';
import { DateNavigator } from './components/DateNavigator';
import { UpcomingTimeline } from './components/UpcomingTimeline';
import { SlotEditModal } from './components/SlotEditModal';
import { 
  loadStoredDays, 
  saveDays, 
  resetDaysToDefault,
  loadStoredActiveDate,
  saveStoredActiveDate,
  exportBackupJSON,
  importBackupJSON
} from './utils/storage';
import { 
  Plus, 
  RotateCcw, 
  Clock, 
  Target,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  const [days, setDays] = useState(() => loadStoredDays());
  const [currentDate, setCurrentDate] = useState(() => loadStoredActiveDate());
  // Side navbar collapsed by default
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('today');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const fileInputRef = useRef(null);

  // Modal state
  const [editingSlotData, setEditingSlotData] = useState(null);

  // Always dark monochrome
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Persist days
  useEffect(() => {
    saveDays(days);
  }, [days]);

  // Persist active date
  useEffect(() => {
    saveStoredActiveDate(currentDate);
  }, [currentDate]);

  // Keyboard shortcut Ctrl+K / ⌘K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector('input[type="text"]');
        if (input) input.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Find active day
  const activeDay = days.find(d => d.date === currentDate) || days[0];

  // Calculate overall progress across 138 slots
  let totalSlots = 0;
  let completedSlots = 0;
  days.forEach(d => {
    d.slots.forEach(s => {
      totalSlots += 1;
      if (s.completed) completedSlots += 1;
    });
  });
  const remainingSlots = totalSlots - completedSlots;
  const progressPct = totalSlots > 0 ? ((completedSlots / totalSlots) * 100).toFixed(1) : "0.0";

  // Toggle slot completion
  const handleToggleComplete = (dateStr, slotNumber) => {
    setDays(prev => prev.map(d => {
      if (d.date === dateStr) {
        return {
          ...d,
          slots: d.slots.map(s => {
            if (s.slotNumber === slotNumber) {
              return { ...s, completed: !s.completed };
            }
            return s;
          })
        };
      }
      return d;
    }));
  };

  // Edit slot save / reschedule
  const handleSaveSlot = (origDateStr, slotNumber, updatedSlot, targetDateStr) => {
    setDays(prev => {
      if (!targetDateStr || targetDateStr === origDateStr) {
        return prev.map(d => {
          if (d.date === origDateStr) {
            return {
              ...d,
              slots: d.slots.map(s => s.slotNumber === slotNumber ? updatedSlot : s)
            };
          }
          return d;
        });
      }

      let slotToMove = null;
      const stripped = prev.map(d => {
        if (d.date === origDateStr) {
          const s = d.slots.find(x => x.slotNumber === slotNumber);
          slotToMove = { ...s, ...updatedSlot };
          return {
            ...d,
            slots: d.slots.map(x => x.slotNumber === slotNumber ? {
              ...x,
              mainTopic: "Slot Rescheduled (Open)",
              subtopics: ["Slot shifted to " + targetDateStr],
              learningObjective: "Use this slot for focused revision or self-study."
            } : x)
          };
        }
        return d;
      });

      return stripped.map(d => {
        if (d.date === targetDateStr && slotToMove) {
          return {
            ...d,
            slots: d.slots.map(s => s.slotNumber === slotNumber ? slotToMove : s)
          };
        }
        return d;
      });
    });

    if (targetDateStr && targetDateStr !== origDateStr) {
      setCurrentDate(targetDateStr);
    }
  };

  // Reset to default
  const handleReset = () => {
    if (window.confirm("Reset entire study roadmap to verified defaults?")) {
      const def = resetDaysToDefault();
      setDays(def);
      setCurrentDate(ACADEMIC_CONFIG.startDate);
      setSelectedSubjectFilter(null);
      setSearchQuery('');
      showToast("Reset to default syllabus successfully.");
    }
  };

  // Toast notification helper
  const showToast = (msg, isError = false) => {
    setToastMessage({ text: msg, isError });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Export backup JSON
  const handleExportBackup = () => {
    const res = exportBackupJSON(days, currentDate);
    if (res.success) {
      showToast("Backup exported successfully as JSON!");
    } else {
      showToast("Failed to export backup: " + res.error, true);
    }
  };

  // Import backup JSON
  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const res = importBackupJSON(content);
        if (res.success) {
          setDays(res.days);
          if (res.activeDate) setCurrentDate(res.activeDate);
          showToast("Backup imported & verified successfully!");
        } else {
          showToast("Import failed: " + res.error, true);
        }
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // reset file input
  };

  // Search filter across all days
  const filteredDays = searchQuery.trim() === '' 
    ? days 
    : days.filter(d => {
        const query = searchQuery.toLowerCase();
        return (
          d.date.includes(query) ||
          d.dayHeading.toLowerCase().includes(query) ||
          d.slots.some(s => 
            s.subject.toLowerCase().includes(query) ||
            s.mainTopic.toLowerCase().includes(query) ||
            (s.subtopics || []).some(sub => sub.toLowerCase().includes(query)) ||
            (s.learningObjective || '').toLowerCase().includes(query)
          )
        );
      });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black font-sans">
      
      {/* 1. Top Application Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onResetSearch={() => setSearchQuery('')}
      />

      {/* 3. Collapsible Sidebar Drawer (Hidden by default) */}
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeView={activeView}
        setActiveView={setActiveView}
        selectedSubjectFilter={selectedSubjectFilter}
        setSelectedSubjectFilter={setSelectedSubjectFilter}
        onSelectDate={(dt) => {
          setCurrentDate(dt);
          setActiveView('today');
        }}
      />

      {/* 4. Full-Width Main Workspace (Sidebar Collapsed) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Section Header (Pure Black & White) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-bold mb-1">
              EXAM PREPARATION
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Semester 1 Daily Study Roadmap
            </h1>
            
            {/* Badges / Metadata pills */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 text-white border border-neutral-800 flex items-center gap-1.5 font-medium">
                <Target className="w-3.5 h-3.5 text-white" />
                Target: Sessional III (Dec 7) & End-Sem (Dec 17)
              </span>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                2 Slots/Day (90–120 mins)
              </span>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800">
                11 Nov 2026 – 13 Jan 2027
              </span>
            </div>
          </div>

          {/* Action Buttons Top Right (Pure Black & White) */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Add / Quick Edit Slot Button (Solid White Button) */}
            <button
              onClick={() => setEditingSlotData({ dateStr: currentDate, slot: activeDay.slots[0] })}
              className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-black" />
              <span>Edit Slot</span>
            </button>

            {/* Export JSON Backup */}
            <button
              onClick={handleExportBackup}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Export complete roadmap & progress to JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Import JSON Backup */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Import JSON backup file"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImportFile} 
              accept=".json" 
              className="hidden" 
            />

            {/* Reset to Default Button */}
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
              title="Reset to default roadmap"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className={`mb-6 p-3 rounded-xl border flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-200 ${
            toastMessage.isError 
              ? 'bg-neutral-900 border-neutral-600 text-white' 
              : 'bg-neutral-900 border-neutral-700 text-white'
          }`}>
            {toastMessage.isError ? (
              <AlertTriangle className="w-4 h-4 text-white shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            )}
            <span>{toastMessage.text}</span>
          </div>
        )}

        {/* Search Active Notification */}
        {searchQuery && (
          <div className="mb-6 p-3 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-between text-xs text-white">
            <span>Showing search results for "<strong>{searchQuery}</strong>" ({filteredDays.length} days found)</span>
            <button 
              onClick={() => setSearchQuery('')}
              className="underline hover:text-neutral-300 font-mono"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* 5. OVERALL PROGRESS CARD (Pure Black & White) */}
        <div className="mb-8 p-6 rounded-2xl bg-[#121212] border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
              OVERALL PROGRESS
            </div>

            {/* Stats on the right (Black & White) */}
            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <span className="text-lg font-bold text-white mr-1.5">{completedSlots}</span>
                <span className="text-neutral-400">completed</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white mr-1.5">{remainingSlots}</span>
                <span className="text-neutral-400">remaining</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white mr-1.5">{totalSlots}</span>
                <span className="text-neutral-400">slots</span>
              </div>
            </div>
          </div>

          {/* Massive Bold Percentage Number */}
          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {progressPct}%
          </div>

          {/* Clean Solid White Progress Bar */}
          <div className="w-full h-3 rounded-full bg-neutral-900 overflow-hidden border border-neutral-800 p-0.5">
            <div 
              className="h-full rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-500"
              style={{ width: `${Math.max(parseFloat(progressPct), completedSlots > 0 ? 3 : 0)}%` }}
            />
          </div>
        </div>

        {/* 6. SUBJECT PROGRESS CARDS (Pure Black & White) */}
        <SubjectProgressRow 
          days={days}
          selectedSubjectFilter={selectedSubjectFilter}
          onSelectSubject={setSelectedSubjectFilter}
        />

        {/* Active Subject Filter Banner */}
        {selectedSubjectFilter && (
          <div className="mb-6 p-3 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Filtered by Subject:</span>
              <span className="font-bold text-white">{selectedSubjectFilter}</span>
            </div>
            <button 
              onClick={() => setSelectedSubjectFilter(null)}
              className="text-xs text-neutral-400 hover:text-white underline font-mono"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* 7. DATE NAVIGATOR & CALENDAR STRIP */}
        <DateNavigator 
          currentDate={currentDate}
          onSelectDate={setCurrentDate}
          allDates={days}
        />

        {/* 8. TODAY'S TWO STUDY SLOTS (THE CORE MANDATE) */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Scheduled Study Slots for {activeDay.dayHeading.split('—')[0].trim()}
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Exactly 2 Slots / Day
            </span>
          </div>

          {/* Grid of the 2 Slots */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeDay.slots.map((slot) => (
              <SlotCard
                key={slot.id}
                slot={slot}
                dateStr={activeDay.date}
                onToggleComplete={handleToggleComplete}
                onEditSlot={(dateStr, s) => setEditingSlotData({ dateStr, slot: s })}
                onRescheduleSlot={(dateStr, s) => setEditingSlotData({ dateStr, slot: s })}
              />
            ))}
          </div>
        </section>

        {/* 9. 69-DAY STUDY TIMELINE LIST */}
        <UpcomingTimeline 
          allDates={filteredDays}
          currentDate={currentDate}
          onSelectDate={setCurrentDate}
          selectedSubjectFilter={selectedSubjectFilter}
        />

      </div>

      {/* 10. Edit / Reschedule Slot Modal */}
      <SlotEditModal
        isOpen={Boolean(editingSlotData)}
        onClose={() => setEditingSlotData(null)}
        slotData={editingSlotData}
        onSave={handleSaveSlot}
        allDates={days}
      />

    </div>
  );
}
