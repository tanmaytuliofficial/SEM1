import React, { useState, useEffect } from 'react';
import { X, Check, Trash2 } from 'lucide-react';
import { SUBJECTS } from '../data/academicData';

export const ActivityEditModal = ({ 
  isOpen, 
  onClose, 
  activityToEdit, 
  onSave, 
  onDelete,
  initialDate,
  initialPhase 
}) => {
  const [formData, setFormData] = useState({
    subjectId: 'MATH',
    topic: '',
    notes: '',
    estimatedDuration: '90 minutes',
    date: initialDate || '2026-11-06',
    status: 'Pending',
    unit: 1
  });

  useEffect(() => {
    if (activityToEdit) {
      setFormData({
        ...activityToEdit
      });
    } else {
      setFormData({
        subjectId: 'MATH',
        topic: '',
        notes: '',
        estimatedDuration: '60 minutes',
        date: initialDate || '2026-11-06',
        status: 'Pending',
        unit: 1,
        phase: initialPhase || 1
      });
    }
  }, [activityToEdit, initialDate, initialPhase, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic.trim()) return;

    onSave({
      ...formData,
      id: activityToEdit ? activityToEdit.id : `task-${Date.now()}`
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-lg bg-[#FAF9F6] border border-[#EFECE6] shadow-xl p-5 sm:p-6 text-[#18181B]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EFECE6] mb-4">
          <h3 className="text-sm font-semibold font-serif text-[#18181B]">
            {activityToEdit ? 'Edit Study Activity' : 'Add Study Activity'}
          </h3>
          <button onClick={onClose} className="p-1 rounded text-[#71717A] hover:text-[#18181B]">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          
          {/* Subject */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
              Subject
            </label>
            <select
              value={formData.subjectId}
              onChange={(e) => setFormData({ ...formData, subjectId: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-2.5 py-1.5 text-xs text-[#18181B] focus:outline-none focus:border-[#71717A]"
            >
              {SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.shortName})
                </option>
              ))}
            </select>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
              Topic *
            </label>
            <input
              type="text"
              placeholder="e.g. Rank of Matrices, Echelon form"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-2.5 py-1.5 text-xs text-[#18181B] focus:outline-none focus:border-[#71717A]"
              required
            />
          </div>

          {/* Objective / Directives */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
              Objective
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Understand echelon form and normal form."
              value={formData.notes || ''}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-2.5 py-1.5 text-xs text-[#18181B] focus:outline-none focus:border-[#71717A] resize-none leading-relaxed"
            />
          </div>

          {/* Duration & Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
                Duration
              </label>
              <input
                type="text"
                placeholder="e.g. 90 minutes"
                value={formData.estimatedDuration}
                onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-2.5 py-1.5 text-xs text-[#18181B] focus:outline-none focus:border-[#71717A]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-2.5 py-1.5 text-xs text-[#18181B] font-mono focus:outline-none focus:border-[#71717A]"
              />
            </div>
          </div>

          {/* Status Checkbox */}
          <div className="pt-1 flex items-center gap-2">
            <input
              type="checkbox"
              id="modal-complete"
              checked={formData.status === 'Completed'}
              onChange={(e) => setFormData({ ...formData, status: e.target.checked ? 'Completed' : 'Pending' })}
              className="rounded border-[#D4D4D8] text-[#3D6B4E] focus:ring-0"
            />
            <label htmlFor="modal-complete" className="text-xs text-[#52525B] cursor-pointer">
              Mark as completed
            </label>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#EFECE6] flex items-center justify-between">
            {activityToEdit ? (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Remove this study activity?")) {
                    onDelete(activityToEdit.id);
                    onClose();
                  }
                }}
                className="text-xs text-[#A1A1AA] hover:text-[#DC2626] flex items-center gap-1 font-mono transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>delete</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs text-[#71717A] hover:text-[#18181B]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-[#18181B] text-[#FAF9F6] hover:bg-[#3F3F46] transition-colors"
              >
                Save
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
