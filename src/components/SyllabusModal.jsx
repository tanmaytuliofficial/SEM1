import React, { useState } from 'react';
import { X, BookOpen } from 'lucide-react';
import { SUBJECTS, PRACTICAL_SUBJECTS, ACADEMIC_METADATA } from '../data/academicData';

export const SyllabusModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('theory');
  const [selectedSub, setSelectedSub] = useState(SUBJECTS[0].id);

  if (!isOpen) return null;

  const currentSubject = SUBJECTS.find(s => s.id === selectedSub) || SUBJECTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-3xl rounded-xl bg-theme-surface border border-theme-border shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-theme-border flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-theme-muted" />
              <h2 className="text-sm font-semibold text-theme-text">Academic Syllabus & Credits</h2>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-theme-border text-theme-muted">
                {ACADEMIC_METADATA.totalCredits} Total Credits
              </span>
            </div>
            <p className="text-xs text-theme-muted mt-0.5 font-mono">
              B.Tech CSE-AIML · PIET (16 Theory + 5 Lab Credits)
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded text-theme-muted hover:text-theme-text">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-theme-border px-5 bg-theme-surface">
          <button
            onClick={() => setActiveTab('theory')}
            className={`py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'theory'
                ? 'border-theme-accent text-theme-text font-semibold'
                : 'border-transparent text-theme-muted hover:text-theme-text'
            }`}
          >
            Theory Subjects (5)
          </button>
          <button
            onClick={() => setActiveTab('practical')}
            className={`py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'practical'
                ? 'border-theme-accent text-theme-text font-semibold'
                : 'border-transparent text-theme-muted hover:text-theme-text'
            }`}
          >
            Practical Laboratories (5)
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === 'theory' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              
              {/* Subject Sidebar */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block mb-1">
                  Subjects:
                </span>
                {SUBJECTS.map((sub) => {
                  const isSelected = selectedSub === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSub(sub.id)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs ${
                        isSelected
                          ? 'bg-theme-card border-theme-accent text-theme-text font-semibold'
                          : 'bg-theme-surface border-theme-border text-theme-muted hover:text-theme-text hover:bg-theme-card/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-mono text-[10px]">{sub.code}</span>
                        <span className="font-mono text-[10px]">{sub.credits}cr</span>
                      </div>
                      <div className="truncate">{sub.shortName}</div>
                    </button>
                  );
                })}
              </div>

              {/* Units List */}
              <div className="md:col-span-8 space-y-3">
                <div className="p-3 rounded-lg bg-theme-card border border-theme-border">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-theme-text">{currentSubject.name}</h3>
                    <span className="text-[10px] font-mono text-theme-muted">{currentSubject.credits} Credits</span>
                  </div>
                  <p className="text-[11px] text-theme-muted mt-1 leading-relaxed">
                    {currentSubject.strategyNotes}
                  </p>
                </div>

                <div className="space-y-2">
                  {currentSubject.units.map((unit) => {
                    const isPre = currentSubject.preSessionalUnits.includes(unit.number);
                    return (
                      <div key={unit.number} className="p-3 rounded-lg bg-theme-card border border-theme-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-theme-text">
                            Unit {unit.number}: {unit.title}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                            isPre ? 'text-saas-accent border-saas-accent/30 bg-saas-accent/10' : 'text-theme-muted border-theme-border'
                          }`}>
                            {isPre ? 'Pre-Sessional' : 'End-Sem'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-theme-muted">
                          {unit.topics.map((t, i) => (
                            <div key={i} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-theme-card border border-theme-border text-xs text-theme-muted">
                Practical courses: 1 credit each (Total 5 credits). Evaluated on 50 Marks Internal + 50 Marks External.
              </div>

              <div className="divide-y divide-theme-border rounded-lg border border-theme-border bg-theme-card overflow-hidden">
                {PRACTICAL_SUBJECTS.map((lab, i) => (
                  <div key={i} className="p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-medium text-theme-text">{lab.name}</div>
                      <span className="text-[10px] font-mono text-theme-muted">{lab.code}</span>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <span className="text-theme-text font-semibold">{lab.credits} Credit</span>
                      <span className="text-theme-muted block">{lab.eval}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
