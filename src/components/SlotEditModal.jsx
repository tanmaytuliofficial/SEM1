import React, { useState, useEffect } from 'react';
import { X, Check, Calendar } from 'lucide-react';
import { ACADEMIC_CONFIG } from '../data/academicConfig';

export const SlotEditModal = ({ 
  isOpen, 
  onClose, 
  slotData, 
  onSave, 
  allDates 
}) => {
  const [formData, setFormData] = useState({
    mainTopic: '',
    subtopicsText: '',
    learningObjective: '',
    duration: '90 mins',
    studyType: 'Learning',
    notes: '',
    targetDate: ''
  });

  useEffect(() => {
    if (slotData) {
      setFormData({
        mainTopic: slotData.slot.mainTopic,
        subtopicsText: (slotData.slot.subtopics || []).join('\n'),
        learningObjective: slotData.slot.learningObjective || '',
        duration: slotData.slot.duration || '90 mins',
        studyType: slotData.slot.studyType || 'Learning',
        notes: slotData.slot.notes || '',
        targetDate: slotData.dateStr
      });
    }
  }, [slotData, isOpen]);

  if (!isOpen || !slotData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSubtopics = formData.subtopicsText
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const updatedSlot = {
      ...slotData.slot,
      mainTopic: formData.mainTopic.trim(),
      subtopics: updatedSubtopics,
      learningObjective: formData.learningObjective.trim(),
      duration: formData.duration,
      studyType: formData.studyType,
      notes: formData.notes.trim()
    };

    onSave(slotData.dateStr, slotData.slot.slotNumber, updatedSlot, formData.targetDate);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl bg-[#141414] border border-neutral-800 shadow-2xl p-6 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Edit Slot {slotData.slot.slotNumber}</span>
              <span className="text-xs font-mono text-neutral-400">
                ({slotData.slot.subject} · Unit {slotData.slot.unit})
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Date: {slotData.dateStr}
            </p>
          </div>

          <button onClick={onClose} className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Main Topic */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              Main Topic *
            </label>
            <input
              type="text"
              value={formData.mainTopic}
              onChange={(e) => setFormData({ ...formData, mainTopic: e.target.value })}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600 font-medium"
              required
            />
          </div>

          {/* Subtopics (one per line) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              Syllabus Subtopics (one item per line)
            </label>
            <textarea
              rows={4}
              value={formData.subtopicsText}
              onChange={(e) => setFormData({ ...formData, subtopicsText: e.target.value })}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600 font-mono leading-relaxed resize-none"
              placeholder="Row operations&#10;Echelon form&#10;Finding rank of matrices"
            />
          </div>

          {/* Learning Objective */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              Key Learning Objective
            </label>
            <input
              type="text"
              value={formData.learningObjective}
              onChange={(e) => setFormData({ ...formData, learningObjective: e.target.value })}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600"
              placeholder="e.g. Master echelon and normal reduction for exam questions."
            />
          </div>

          {/* Duration & Study Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-200 mb-1">
                Duration
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600"
              >
                <option value="60 mins">60 mins (1 hr)</option>
                <option value="90 mins">90 mins (1.5 hrs)</option>
                <option value="120 mins">120 mins (2 hrs)</option>
                <option value="150 mins">150 mins (2.5 hrs)</option>
                <option value="180 mins">180 mins (Exam / 3 hrs)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-200 mb-1">
                Study Type
              </label>
              <select
                value={formData.studyType}
                onChange={(e) => setFormData({ ...formData, studyType: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600"
              >
                <option value="Learning">Learning</option>
                <option value="Practice">Practice</option>
                <option value="Revision">Revision</option>
                <option value="Test">Test</option>
                <option value="Official Exam">Official Exam</option>
              </select>
            </div>
          </div>

          {/* Reschedule Date (Optional shift) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              Scheduled Date
            </label>
            <input
              type="date"
              value={formData.targetDate}
              min={ACADEMIC_CONFIG.startDate}
              max={ACADEMIC_CONFIG.endDate}
              onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600 font-mono"
            />
            {formData.targetDate !== slotData.dateStr && (
              <p className="text-[11px] text-neutral-400 mt-1">
                This will move this slot to {formData.targetDate}.
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              Personal Study Notes
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Focus on row operations for echelon reduction; review textbook pg 45."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-600 resize-none leading-relaxed"
            />
          </div>

          {/* Buttons */}
          <div className="pt-3 border-t border-neutral-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-black hover:bg-neutral-200 shadow-sm transition-opacity"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Slot</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
