import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Flag } from 'lucide-react';
import { SUBJECT_INFO } from '../data/academicConfig';

export const UpcomingTimeline = ({ 
  allDates, 
  currentDate, 
  onSelectDate,
  selectedSubjectFilter 
}) => {
  const [filterType, setFilterType] = useState('all'); // all | incomplete | exams

  // Filter dates based on criteria
  let filtered = allDates;

  if (selectedSubjectFilter) {
    filtered = filtered.filter(d => 
      d.slots.some(s => s.subject === selectedSubjectFilter || s.subject.includes(selectedSubjectFilter))
    );
  }

  if (filterType === 'incomplete') {
    filtered = filtered.filter(d => d.slots.some(s => !s.completed));
  } else if (filterType === 'exams') {
    filtered = filtered.filter(d => d.isExamDay || d.isSessionalDay);
  }

  return (
    <div className="mt-12 pt-8 border-t border-neutral-800">
      
      {/* Heading & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>64-Day Study Roadmap (128 Slots)</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
              {filtered.length} days
            </span>
          </h3>
          <p className="text-xs text-neutral-400">
            Select any day below to inspect its two 90-120 min study slots
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-xl text-xs font-medium border transition-colors ${
              filterType === 'all'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            All Days
          </button>

          <button
            onClick={() => setFilterType('incomplete')}
            className={`px-3 py-1 rounded-xl text-xs font-medium border transition-colors ${
              filterType === 'incomplete'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            Pending Slots
          </button>

          <button
            onClick={() => setFilterType('exams')}
            className={`px-3 py-1 rounded-xl text-xs font-medium border transition-colors ${
              filterType === 'exams'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            Exams Only
          </button>
        </div>
      </div>

      {/* Dates List */}
      <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-800">
        {filtered.map((day) => {
          const isSelected = day.date === currentDate;
          const completedCount = day.slots.filter(s => s.completed).length;
          const isAllDone = completedCount === 2;

          return (
            <div
              key={day.date}
              onClick={() => {
                onSelectDate(day.date);
                window.scrollTo({ top: 220, behavior: 'smooth' });
              }}
              className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-neutral-900 border-white text-white shadow-md'
                  : 'bg-[#121212] border-neutral-800 hover:border-neutral-700 hover:bg-[#171717]'
              }`}
            >
              {/* Date & Weekday badge */}
              <div className="flex items-center gap-3 min-w-[200px]">
                <div className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center font-mono text-center border ${
                  isSelected
                    ? 'bg-white text-black font-bold border-white'
                    : isAllDone
                    ? 'bg-neutral-900 text-white border-neutral-700'
                    : 'bg-neutral-950 text-neutral-300 border-neutral-800'
                }`}>
                  <span className="text-[9px] uppercase leading-none">{day.dayOfWeek.slice(0, 3)}</span>
                  <span className="text-xs font-bold leading-none mt-1">{day.date.split('-')[2]}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">
                      {day.date}
                    </span>
                    {day.isExamDay && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-white border border-neutral-700 font-bold flex items-center gap-1">
                        <Flag className="w-2.5 h-2.5" /> EXAM
                      </span>
                    )}
                    {day.isSessionalDay && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-white border border-neutral-700 font-bold">
                        SESSIONAL
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {day.dayHeading.split('—')[0].trim()}
                  </div>
                </div>
              </div>

              {/* Slot 1 & Slot 2 Previews */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {/* Slot 1 */}
                <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono text-[9px] uppercase font-bold text-neutral-500">Slot 1:</span>
                      <span className="font-semibold text-[11px] truncate text-white">
                        {day.slots[0].subject.split(' ')[0]}
                      </span>
                    </div>
                    <div className={`truncate text-[11px] ${day.slots[0].completed ? 'line-through text-neutral-600' : 'text-neutral-300'}`}>
                      {day.slots[0].mainTopic}
                    </div>
                  </div>
                  {day.slots[0].completed && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                </div>

                {/* Slot 2 */}
                <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono text-[9px] uppercase font-bold text-neutral-500">Slot 2:</span>
                      <span className="font-semibold text-[11px] truncate text-white">
                        {day.slots[1].subject.split(' ')[0]}
                      </span>
                    </div>
                    <div className={`truncate text-[11px] ${day.slots[1].completed ? 'line-through text-neutral-600' : 'text-neutral-300'}`}>
                      {day.slots[1].mainTopic}
                    </div>
                  </div>
                  {day.slots[1].completed && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                </div>
              </div>

              {/* Jump Chevron */}
              <div className="shrink-0 text-neutral-500 hover:text-white">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
