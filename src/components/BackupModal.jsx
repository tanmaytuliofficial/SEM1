import React, { useRef, useState } from 'react';
import { X, Download, Upload, RotateCcw, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { exportTasksToJson } from '../utils/storage';

export const BackupModal = ({ isOpen, onClose, tasks, onImportTasks, onResetDefault }) => {
  const fileInputRef = useRef(null);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleExport = () => {
    exportTasksToJson(tasks);
    setSuccessMessage('Roadmap exported to JSON.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        const importedTasks = json.tasks || json;
        if (Array.isArray(importedTasks) && importedTasks.length > 0) {
          onImportTasks(importedTasks);
          setSuccessMessage(`Imported ${importedTasks.length} tasks.`);
          setTimeout(() => {
            setSuccessMessage('');
            onClose();
          }, 1500);
        } else {
          alert('Invalid JSON structure.');
        }
      } catch (err) {
        alert('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-xl bg-theme-surface border border-theme-border shadow-2xl p-4 sm:p-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-theme-border mb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-theme-muted" />
            <h3 className="text-sm font-semibold text-theme-text">Data & Backup</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-theme-muted hover:text-theme-text">
            <X className="w-4 h-4" />
          </button>
        </div>

        {successMessage && (
          <div className="mb-3 p-2 rounded bg-saas-success/10 border border-saas-success/20 text-saas-success text-xs flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>{successMessage}</span>
          </div>
        )}

        <div className="space-y-2 mb-4">
          
          {/* Export */}
          <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-theme-text">Export Backup</div>
              <div className="text-[10px] text-theme-muted">Download {tasks.length} tasks as JSON</div>
            </div>
            <button
              onClick={handleExport}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-border text-theme-text hover:bg-theme-border/80 transition-colors"
            >
              Export
            </button>
          </div>

          {/* Import */}
          <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-theme-text">Import Backup</div>
              <div className="text-[10px] text-theme-muted">Restore tasks from a JSON file</div>
            </div>
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".json"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-border text-theme-text hover:bg-theme-border/80 transition-colors"
              >
                Import
              </button>
            </div>
          </div>

          {/* Reset */}
          <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-saas-danger">Reset to Standard</div>
              <div className="text-[10px] text-theme-muted">Restore default roadmap</div>
            </div>
            <div>
              {resetConfirm ? (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onResetDefault();
                      setResetConfirm(false);
                      setSuccessMessage('Reset to default roadmap.');
                      setTimeout(() => setSuccessMessage(''), 2000);
                    }}
                    className="px-2 py-0.5 text-[10px] font-semibold rounded bg-saas-danger text-white"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setResetConfirm(false)}
                    className="text-[10px] text-theme-muted"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setResetConfirm(true)}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-saas-danger hover:bg-saas-danger/10 border border-saas-danger/20 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

        </div>

        <div className="text-[10px] text-theme-muted font-mono text-center">
          All progress is automatically saved to browser localStorage.
        </div>

      </div>
    </div>
  );
};
