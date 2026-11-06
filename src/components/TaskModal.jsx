import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Clock, BookOpen, AlertCircle, FileText } from 'lucide-react';
import { SUBJECTS, PHASES } from '../data/academicData';

export const TaskModal = ({ isOpen, onClose, onSave, taskToEdit, defaultDate }) => {
  const [formData, setFormData] = useState({
    topic: '',
    subjectId: 'MATH',
    unit: 1,
    unitTitle: '',
    date: defaultDate || '2026-11-06',
    estimatedDuration: '90 mins',
    priority: 'High',
    status: 'Pending',
    type: 'concept',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        ...taskToEdit
      });
    } else {
      const selectedSub = SUBJECTS.find(s => s.id === 'MATH');
      const unitObj = selectedSub?.units.find(u => u.number === 1);
      setFormData({
        topic: '',
        subjectId: 'MATH',
        unit: 1,
        unitTitle: unitObj?.title || '',
        date: defaultDate || '2026-11-06',
        estimatedDuration: '90 mins',
        priority: 'High',
        status: 'Pending',
        type: 'concept',
        notes: ''
      });
    }
    setErrors({});
  }, [taskToEdit, defaultDate, isOpen]);

  if (!isOpen) return null;

  const handleSubjectChange = (newSubId) => {
    const subObj = SUBJECTS.find(s => s.id === newSubId);
    const unitObj = subObj?.units.find(u => u.number === formData.unit) || subObj?.units[0];
    setFormData(prev => ({
      ...prev,
      subjectId: newSubId,
      unit: unitObj ? unitObj.number : 1,
      unitTitle: unitObj ? unitObj.title : ''
    }));
  };

  const handleUnitChange = (newUnitNum) => {
    const subObj = SUBJECTS.find(s => s.id === formData.subjectId);
    const unitObj = subObj?.units.find(u => u.number === Number(newUnitNum));
    setFormData(prev => ({
      ...prev,
      unit: Number(newUnitNum),
      unitTitle: unitObj ? unitObj.title : prev.unitTitle
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.topic.trim()) {
      newErrors.topic = 'Task title / topic is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let assignedPhase = 1;
    for (const p of PHASES) {
      if (formData.date >= p.startDate && formData.date <= p.endDate) {
        assignedPhase = p.phase;
        break;
      }
    }
    if (formData.date > PHASES[PHASES.length - 1].endDate) {
      assignedPhase = 8;
    }

    const payload = {
      ...formData,
      id: taskToEdit ? taskToEdit.id : `task-user-${Date.now()}`,
      phase: assignedPhase
    };

    onSave(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-lg rounded-xl bg-theme-surface border border-theme-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-theme-border flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-theme-text">
              {taskToEdit ? 'Edit Academic Task' : 'Schedule New Task'}
            </h3>
            <p className="text-xs text-theme-muted font-mono mt-0.5">
              Plan concept learning, numerical practice, revision or self-testing
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-theme-muted hover:text-theme-text transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3.5 text-xs">
          
          {/* Topic */}
          <div>
            <label className="block text-xs font-medium text-theme-text mb-1">
              Task Directive / Topic *
            </label>
            <input
              type="text"
              placeholder="e.g. Cayley-Hamilton theorem inverse calculation problems"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className={`w-full bg-theme-card border rounded-lg px-3 py-2 text-xs text-theme-text placeholder-theme-muted focus:outline-none focus:border-theme-accent ${
                errors.topic ? 'border-saas-danger' : 'border-theme-border'
              }`}
            />
            {errors.topic && <p className="text-[11px] text-saas-danger mt-1">{errors.topic}</p>}
          </div>

          {/* Subject & Unit Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-theme-text mb-1">
                Subject *
              </label>
              <select
                value={formData.subjectId}
                onChange={(e) => handleSubjectChange(e.target.value)}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.shortName} ({s.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-theme-text mb-1">
                Unit *
              </label>
              <select
                value={formData.unit}
                onChange={(e) => handleUnitChange(e.target.value)}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                <option value={1}>Unit 1</option>
                <option value={2}>Unit 2</option>
                <option value={3}>Unit 3</option>
                <option value={4}>Unit 4</option>
              </select>
            </div>
          </div>

          {/* Date & Estimated Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-theme-text mb-1 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-theme-muted" />
                Schedule Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2.5 py-1.5 text-xs text-theme-text font-mono focus:outline-none focus:border-theme-accent"
              />
              {errors.date && <p className="text-[11px] text-saas-danger mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-theme-text mb-1 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-theme-muted" />
                Estimated Duration
              </label>
              <select
                value={formData.estimatedDuration}
                onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                <option value="30 mins">30 mins (Quick Review)</option>
                <option value="45 mins">45 mins (Notes / Reading)</option>
                <option value="60 mins">60 mins (Standard Concept)</option>
                <option value="75 mins">75 mins (Deep Concept)</option>
                <option value="90 mins">90 mins (Numericals / Code)</option>
                <option value="120 mins">120 mins (Intensive Session)</option>
                <option value="180 mins">180 mins (Full Mock Exam)</option>
              </select>
            </div>
          </div>

          {/* Type, Priority & Status */}
          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="block text-[11px] font-medium text-theme-text mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                <option value="concept">Concept</option>
                <option value="notes">Notes</option>
                <option value="practice">Practice</option>
                <option value="revision">Revision</option>
                <option value="testing">Testing</option>
                <option value="exam">Official Exam</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-theme-text mb-1">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-theme-text mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-theme-card border border-theme-border rounded-lg px-2 py-1.5 text-xs text-theme-text focus:outline-none focus:border-theme-accent"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Study Notes */}
          <div>
            <label className="block text-xs font-medium text-theme-text mb-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-theme-muted" />
              Directives & Formula References
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Focus on row echelon reduction steps and solving non-trivial AX=0."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-theme-card border border-theme-border rounded-lg px-3 py-2 text-xs text-theme-text placeholder-theme-muted focus:outline-none focus:border-theme-accent resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-3 border-t border-theme-border flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-theme-muted hover:text-theme-text transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium bg-theme-text text-theme-bg hover:opacity-90 transition-opacity"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{taskToEdit ? 'Save Changes' : 'Create Task'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
