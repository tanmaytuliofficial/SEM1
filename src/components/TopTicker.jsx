import React from 'react';
import { Sparkles, Target, Flame, Zap, Award } from 'lucide-react';

export const TopTicker = () => {
  const quotes = [
    { text: "Predict the future is to create it.", icon: Sparkles },
    { text: "Shipping is a feature.", icon: Target },
    { text: "Compounding > intensity. Show up every day.", icon: Flame },
    { text: "You are 6 months of consistent effort away from being unrecognizable.", icon: Zap },
    { text: "Discipline > Motivation.", icon: Award },
    { text: "138 Slots · 2 Slots/Day · Mission SGPA 9.0+", icon: Sparkles }
  ];

  return (
    <div className="w-full bg-[#050505] border-b border-neutral-900 py-1.5 px-4 overflow-hidden select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none whitespace-nowrap">
          {quotes.map((q, idx) => {
            const Icon = q.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 shrink-0 text-neutral-400 hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5 text-neutral-500" />
                <span>{q.text}</span>
              </div>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-neutral-600 shrink-0 font-sans font-mono uppercase">
          <span>PIET · First Year CSE-AIML</span>
        </div>
      </div>
    </div>
  );
};
