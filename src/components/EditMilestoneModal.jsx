import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

export const EditMilestoneModal = ({ isOpen, onClose, milestoneData, onSave }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (milestoneData?.milestone) {
      setText(milestoneData.milestone.text);
    }
  }, [milestoneData, isOpen]);

  if (!isOpen || !milestoneData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(milestoneData.phaseNumber, milestoneData.subjectName, milestoneData.milestone.id, text);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-lg bg-[#FAF9F6] border border-[#EFECE6] shadow-xl p-5 text-[#18181B]">
        <div className="flex items-center justify-between pb-3 border-b border-[#EFECE6] mb-3">
          <div>
            <h3 className="text-sm font-semibold font-serif text-[#18181B]">Edit Milestone</h3>
            <span className="text-[10px] text-[#71717A] uppercase font-mono">
              Phase {milestoneData.phaseNumber} · {milestoneData.subjectName}
            </span>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#71717A] hover:text-[#18181B]">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase text-[#71717A] mb-1">
              Milestone Objective
            </label>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#EFECE6] rounded-md px-3 py-2 text-xs text-[#18181B] focus:outline-none focus:border-[#71717A] resize-none"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#EFECE6]">
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
        </form>
      </div>
    </div>
  );
};
