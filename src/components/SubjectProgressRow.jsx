import React from 'react';

export const SubjectProgressRow = ({ 
  days, 
  selectedSubjectFilter, 
  onSelectSubject 
}) => {
  const subjects = [
    { key: "Mathematics-I", label: "Engineering Mathematics-I", units: "Unit 1 to 4" },
    { key: "Engineering Chemistry", label: "Engineering Chemistry", units: "Unit 1 to 4" },
    { key: "Problem Solving Using C", label: "Problem Solving Using \"C\"", units: "Unit 1 to 4" },
    { key: "Basics of Electronics Engineering", label: "Basics of Electronics Eng", units: "Unit 1 to 4" },
    { key: "Basics of Communication Skills", label: "Basics of Communication Skills", units: "Unit 1 to 4" }
  ];

  // Calculate subject stats dynamically
  const subjectStats = {};
  subjects.forEach(s => {
    subjectStats[s.key] = { total: 0, completed: 0 };
  });

  days.forEach(day => {
    day.slots.forEach(slot => {
      let match = subjects.find(s => s.key === slot.subject || slot.subject.includes(s.key) || s.key.includes(slot.subject));
      if (match) {
        subjectStats[match.key].total += 1;
        if (slot.completed) {
          subjectStats[match.key].completed += 1;
        }
      }
    });
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 mb-8">
      {subjects.map(s => {
        const stat = subjectStats[s.key] || { total: 0, completed: 0 };
        const pct = stat.total > 0 ? Math.round((stat.completed / stat.total) * 100) : 0;
        const isSelected = selectedSubjectFilter === s.key;

        return (
          <div
            key={s.key}
            onClick={() => onSelectSubject(isSelected ? null : s.key)}
            className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
              isSelected 
                ? 'bg-neutral-800 border-white text-white shadow-md ring-1 ring-white'
                : 'bg-[#121212] border-neutral-800 hover:border-neutral-700 hover:bg-[#171717]'
            }`}
          >
            <div>
              {/* Top row: Subject name & percentage badge */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {s.label}
                  </h4>
                  <span className="text-[10px] font-mono text-neutral-400">
                    ({s.units})
                  </span>
                </div>
                
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border bg-neutral-900 text-white border-neutral-700 whitespace-nowrap">
                  {pct}%
                </span>
              </div>

              {/* Slots done indicator */}
              <div className="text-[11px] font-mono text-neutral-400 mb-2.5">
                {stat.completed} of {stat.total} slots done
              </div>
            </div>

            {/* Mini Progress Bar (Black & White) */}
            <div className="w-full h-1.5 rounded-full bg-neutral-900 overflow-hidden border border-neutral-800">
              <div 
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${Math.max(pct, stat.completed > 0 ? 4 : 0)}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
