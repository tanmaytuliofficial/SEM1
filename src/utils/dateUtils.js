// Helper utilities for date handling and formatting
import { PHASES, SUBJECTS } from '../data/academicData';

export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const formatFullDate = (dateStr) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatDayHeading = (dateStr) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const dayNum = date.getDate();
  const monthName = date.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  return `${weekday}, ${dayNum} ${monthName}`;
};

export const getDayDifference = (targetDateStr, baseDateStr) => {
  const [y1, m1, d1] = targetDateStr.split('-').map(Number);
  const [y2, m2, d2] = baseDateStr.split('-').map(Number);
  const dTarget = new Date(y1, m1 - 1, d1);
  const dBase = new Date(y2, m2 - 1, d2);
  const diffTime = dTarget.getTime() - dBase.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

export const isDateOverdue = (dateStr, currentDateStr, status) => {
  if (status === 'Completed') return false;
  return getDayDifference(dateStr, currentDateStr) < 0;
};

export const getCurrentPhase = (currentDateStr) => {
  for (const p of PHASES) {
    if (currentDateStr >= p.startDate && currentDateStr <= p.endDate) {
      return p;
    }
  }
  if (currentDateStr < PHASES[0].startDate) {
    return { ...PHASES[0], status: 'Upcoming' };
  }
  return { ...PHASES[PHASES.length - 1], status: 'Completed' };
};
