import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { SUBJECTS } from '../data/academicData';

export const LovableMilestoneModal = ({ 
  isOpen, 
  onClose, 
  milestoneData, 
  onSave,
  onAddCustomMilestone 
}) => {
  const [text, setText] = useState('');
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  useEffect(() => {
    if (milestoneData?.milestone) {
      setText(milestoneData.milestone.text);
    } else {
      setText('');
    }
  }, [milestoneData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (milestoneData?.milestone) {
      onSave(milestoneData.phaseNumber, milestoneData.subjectName, milestoneData.milestone.id, text);
    } else {
      onAddCustomMilestone(Number(selectedPhase), selectedSubject, text);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md rounded-2xl bg-[#141724] border border-[#1E2337] shadow-2xl p-5 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1E2337] mb-4">
          <div>
            <h3 className="text-sm font-bold text-white">
              {milestoneData?.milestone ? 'Edit Milestone' : 'Add Milestone to Roadmap'}
            </h3>
            <span className="text-[10px] text-[#8B92A7] font-mono">
              Academic Roadmap Planning
            </span>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#8B92A7] hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {!milestoneData?.milestone && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#8B92A7] mb-1">
                  Phase
                </label>
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full bg-[#0F121C] border border-[#1E2337] rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(p => (
                    <option key={p} value={p}>Phase {p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8B92A7] mb-1">
                  Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full bg-[#0F121C] border border-[#1E2337] rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="C Programming">C Programming</option>
                  <option value="Basics of Electronics Engineering">Electronics (BEE)</option>
                  <option value="Basics of Communication Skills">Communication (BOC)</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-mono text-[#8B92A7] mb-1">
              Milestone Objective / Description *
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Eigenvalue diagonalization & quadratic forms reduction"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-[#0F121C] border border-[#1E2337] rounded-lg p-3 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#1E2337]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#8B92A7] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Milestone</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
