import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Flag
} from 'lucide-react';
import { ACADEMIC_CONFIG } from '../data/academicConfig';

export const DateNavigator = ({ 
  currentDate, 
  onSelectDate, 
  allDates 
}) => {
  const currentIndex = allDates.findIndex(d => d.date === currentDate);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allDates.length - 1;

  const handlePrev = () => {
    if (hasPrev) onSelectDate(allDates[currentIndex - 1].date);
  };

  const handleNext = () => {
    if (hasNext) onSelectDate(allDates[currentIndex + 1].date);
  };

  // Center a window of 7 dates around currentIndex
  const startIdx = Math.max(0, Math.min(currentIndex - 3, allDates.length - 7));
  const visibleDates = allDates.slice(startIdx, startIdx + 7);

  // Active day metadata
  const activeDay = allDates[currentIndex] || allDates[0];

  return (
    <div className="mb-8 space-y-4">
      
      {/* Top Bar: Active Date Heading + Exam Shortcuts */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121212] border border-neutral-800">
        
        {/* Left: Active Day Big Heading & Nav Buttons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 disabled:opacity-20 disabled:pointer-events-none transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 disabled:opacity-20 disabled:pointer-events-none transition-colors"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {activeDay?.dayHeading || currentDate}
              </h2>
              {activeDay?.isExamDay && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-white border border-neutral-600 font-bold flex items-center gap-1">
                  <Flag className="w-2.5 h-2.5" /> EXAM
                </span>
              )}
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-2 mt-0.5">
              <span>Day {currentIndex + 1} of 69</span>
              <span>•</span>
              <span className="text-neutral-300 font-mono">2 Slots Scheduled</span>
            </div>
          </div>
        </div>

        {/* Right: Date Picker & Quick Actions */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => onSelectDate(ACADEMIC_CONFIG.startDate)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              currentDate === ACADEMIC_CONFIG.startDate
                ? 'bg-white text-black border-white'
                : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600'
            }`}
          >
            Start (6 Nov)
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
            <CalendarIcon className="w-3.5 h-3.5 text-neutral-400" />
            <input
              type="date"
              value={currentDate}
              min={ACADEMIC_CONFIG.startDate}
              max={ACADEMIC_CONFIG.endDate}
              onChange={(e) => onSelectDate(e.target.value)}
              className="bg-transparent text-xs font-bold font-mono text-white focus:outline-none cursor-pointer"
            />
          </div>
        </div>

      </div>

      {/* Quick Exam Shortcut Pills Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold shrink-0 flex items-center gap-1">
          <Flag className="w-3 h-3 text-neutral-400" />
          EXAM TARGETS:
        </span>

        {/* Sessional III */}
        <button
          onClick={() => onSelectDate(ACADEMIC_CONFIG.sessionalDates.start)}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono shrink-0 border transition-all ${
            currentDate === ACADEMIC_CONFIG.sessionalDates.start
              ? 'bg-white text-black border-white font-bold'
              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-600'
          }`}
        >
          7 Dec · Sessional III
        </button>

        {/* End Sem Exams */}
        {ACADEMIC_CONFIG.examSchedule.map((ex) => {
          const isSel = currentDate === ex.date;
          return (
            <button
              key={ex.date}
              onClick={() => onSelectDate(ex.date)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono shrink-0 border transition-all ${
                isSel
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600'
              }`}
            >
              <span>{ex.date.slice(5).replace('-', '/')} · {ex.subject.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* 7-Day Centered Date Strip */}
      <div className="grid grid-cols-7 gap-2">
        {visibleDates.map((day) => {
          const isSelected = day.date === currentDate;
          return (
            <button
              key={day.date}
              onClick={() => onSelectDate(day.date)}
              className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                isSelected
                  ? 'bg-white text-black border-white shadow-lg'
                  : 'bg-[#121212] border-neutral-800 hover:border-neutral-700 hover:bg-[#171717] text-neutral-300'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase font-semibold ${
                isSelected ? 'text-neutral-700' : 'text-neutral-500'
              }`}>
                {day.dayOfWeek.slice(0, 3)}
              </span>

              <span className={`text-sm sm:text-base font-bold my-0.5 ${
                isSelected ? 'text-black' : 'text-white'
              }`}>
                {day.date.split('-')[2]}
              </span>

              {/* Slot Dots */}
              <div className="flex items-center gap-1 mt-1">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isSelected 
                    ? (day.slots[0]?.completed ? 'bg-black' : 'bg-neutral-300')
                    : (day.slots[0]?.completed ? 'bg-white' : 'bg-neutral-800')
                }`} />
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isSelected 
                    ? (day.slots[1]?.completed ? 'bg-black' : 'bg-neutral-300')
                    : (day.slots[1]?.completed ? 'bg-white' : 'bg-neutral-800')
                }`} />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
