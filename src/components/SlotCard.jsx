import React from 'react';
import { 
  Check, 
  Clock, 
  Edit3, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { SUBJECT_INFO } from '../data/academicConfig';

export const SlotCard = ({ 
  slot, 
  dateStr,
  onToggleComplete, 
  onEditSlot,
  onRescheduleSlot 
}) => {
  const isExam = slot.studyType === 'Official Exam';

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative ${
      slot.completed 
        ? 'bg-[#0E0E0E] border-neutral-800 opacity-85' 
        : isExam
        ? 'bg-[#141414] border-neutral-600 ring-1 ring-neutral-500'
        : 'bg-[#121212] border-neutral-800 hover:border-neutral-700 shadow-sm'
    }`}>
      
      {/* Top Banner Tag */}
      {slot.completed && (
        <div className="absolute top-3.5 right-4 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-white bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-700">
          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          <span>COMPLETED</span>
        </div>
      )}

      <div>
        {/* Slot Number, Subject & Duration */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-xs font-black tracking-widest text-white px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
              SLOT {String(slot.slotNumber).padStart(2, '0')}
            </span>
            
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-neutral-900 text-white border-neutral-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              {slot.subject}
            </span>

            {slot.unit && (
              <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                Unit {slot.unit}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>{slot.duration}</span>
          </div>
        </div>

        {/* Main Topic & Study Type */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border tracking-wider uppercase font-semibold bg-neutral-900 text-neutral-300 border-neutral-800">
              {slot.studyType}
            </span>
          </div>

          <h3 className={`text-lg font-bold text-white tracking-tight leading-snug ${
            slot.completed ? 'line-through text-neutral-500' : ''
          }`}>
            {slot.mainTopic}
          </h3>
        </div>

        {/* Detailed Syllabus Subtopics */}
        <div className="mb-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-neutral-400" />
            <span>SYLLABUS SUBTOPICS:</span>
          </div>
          
          <div className="space-y-1.5">
            {slot.subtopics && slot.subtopics.map((sub, idx) => (
              <div 
                key={idx} 
                className={`p-2 rounded-xl text-xs flex items-start gap-2.5 transition-colors border ${
                  slot.completed
                    ? 'bg-[#101010] border-transparent text-neutral-600 line-through'
                    : 'bg-[#181818] border-neutral-800 text-neutral-200 hover:border-neutral-700'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {slot.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white block mt-1"></span>
                  )}
                </div>
                <span className="leading-relaxed">{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objective Box */}
        {slot.learningObjective && (
          <div className="p-3.5 rounded-xl bg-[#161616] border border-neutral-800 mb-5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 font-bold">
              <Sparkles className="w-3 h-3 text-neutral-300" />
              <span>KEY LEARNING OBJECTIVE</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {slot.learningObjective}
            </p>
          </div>
        )}

        {/* Notes if any */}
        {slot.notes && (
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-5">
            <span className="font-mono text-[10px] font-bold text-white block mb-0.5">Note:</span>
            {slot.notes}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
        {/* Toggle Completion */}
        <button
          onClick={() => onToggleComplete(dateStr, slot.slotNumber)}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
            slot.completed
              ? 'bg-neutral-900 text-neutral-300 border border-neutral-700 hover:bg-neutral-800'
              : 'bg-white hover:bg-neutral-200 text-black font-bold'
          }`}
        >
          <Check className="w-4 h-4" />
          <span>{slot.completed ? 'Mark Incomplete' : 'Mark as Done'}</span>
        </button>

        {/* Edit Button */}
        <button
          onClick={() => onEditSlot(dateStr, slot)}
          className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          title="Edit Topic, Subtopics or Duration"
        >
          <Edit3 className="w-4 h-4" />
        </button>

        {/* Reschedule Shortcut */}
        <button
          onClick={() => onRescheduleSlot(dateStr, slot)}
          className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          title="Reschedule to Another Date"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
