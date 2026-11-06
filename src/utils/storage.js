import { DAILY_ROADMAP_DAYS } from '../data/dailyRoadmapData';

const STORAGE_DAYS_KEY = 'semester_os_daily_days_v3';
const STORAGE_ACTIVE_DATE_KEY = 'semester_os_active_date_v3';
const STORAGE_APP_VERSION_KEY = 'semester_os_version_v3';
const CURRENT_VERSION = '3.0.0';

/**
 * Smart merge function:
 * Merges default template days with user's stored progress so updates never
 * wipe out existing completed slots, custom topics, notes, or durations.
 */
function mergeWithDefaults(storedDays, defaultDays) {
  if (!Array.isArray(storedDays) || storedDays.length === 0) {
    return defaultDays;
  }

  // Create a map of stored slots by date and slotNumber
  const storedSlotsMap = new Map();
  storedDays.forEach(day => {
    if (day && day.date && Array.isArray(day.slots)) {
      day.slots.forEach(slot => {
        if (slot && slot.slotNumber) {
          const key = `${day.date}_slot_${slot.slotNumber}`;
          storedSlotsMap.set(key, slot);
        }
      });
    }
  });

  // Reconcile with default days to preserve syllabus structure and user customizations
  const merged = defaultDays.map(defaultDay => {
    const mergedSlots = defaultDay.slots.map(defaultSlot => {
      const key = `${defaultDay.date}_slot_${defaultSlot.slotNumber}`;
      const userSlot = storedSlotsMap.get(key);

      if (userSlot) {
        return {
          ...defaultSlot,
          // Preserve user completion status and custom edits
          completed: Boolean(userSlot.completed),
          notes: typeof userSlot.notes === 'string' ? userSlot.notes : defaultSlot.notes,
          duration: userSlot.duration || defaultSlot.duration,
          studyType: userSlot.studyType || defaultSlot.studyType,
          mainTopic: userSlot.mainTopic || defaultSlot.mainTopic,
          subtopics: Array.isArray(userSlot.subtopics) && userSlot.subtopics.length > 0 
            ? userSlot.subtopics 
            : defaultSlot.subtopics,
          learningObjective: userSlot.learningObjective || defaultSlot.learningObjective,
        };
      }
      return defaultSlot;
    });

    return {
      ...defaultDay,
      slots: mergedSlots
    };
  });

  return merged;
}

/**
 * Loads stored days from localStorage with corrupted data safety and smart merge.
 */
export const loadStoredDays = () => {
  try {
    const raw = localStorage.getItem(STORAGE_DAYS_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_DAYS_KEY, JSON.stringify(DAILY_ROADMAP_DAYS));
      localStorage.setItem(STORAGE_APP_VERSION_KEY, CURRENT_VERSION);
      return DAILY_ROADMAP_DAYS;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      console.warn('Invalid storage format, falling back to default syllabus.');
      return DAILY_ROADMAP_DAYS;
    }

    // Merge to ensure user customizations are kept and new features are supported
    const reconciled = mergeWithDefaults(parsed, DAILY_ROADMAP_DAYS);
    return reconciled;
  } catch (error) {
    console.error('Error loading stored days from localStorage:', error);
    return DAILY_ROADMAP_DAYS;
  }
};

/**
 * Automatically persists days array to localStorage
 */
export const saveDays = (days) => {
  if (!Array.isArray(days) || days.length === 0) return;
  try {
    localStorage.setItem(STORAGE_DAYS_KEY, JSON.stringify(days));
  } catch (error) {
    console.error('Error saving days to localStorage:', error);
  }
};

/**
 * Resets days to verified defaults with safety confirmation
 */
export const resetDaysToDefault = () => {
  try {
    localStorage.setItem(STORAGE_DAYS_KEY, JSON.stringify(DAILY_ROADMAP_DAYS));
    return DAILY_ROADMAP_DAYS;
  } catch (error) {
    console.error('Error resetting days to default:', error);
    return DAILY_ROADMAP_DAYS;
  }
};

/**
 * Loads stored active date
 */
export const loadStoredActiveDate = () => {
  try {
    return localStorage.getItem(STORAGE_ACTIVE_DATE_KEY) || '2026-11-06';
  } catch (e) {
    return '2026-11-06';
  }
};

/**
 * Persists active date
 */
export const saveStoredActiveDate = (dateStr) => {
  try {
    localStorage.setItem(STORAGE_ACTIVE_DATE_KEY, dateStr);
  } catch (e) {
    console.error('Error saving active date:', e);
  }
};

/**
 * Exports complete roadmap progress and customizations as JSON backup file
 */
export const exportBackupJSON = (days, activeDate) => {
  try {
    const backupData = {
      app: "Semester OS",
      version: CURRENT_VERSION,
      exportedAt: new Date().toISOString(),
      activeDate: activeDate || '2026-11-06',
      totalDays: days.length,
      days: days
    };

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(backupData, null, 2)
    )}`;
    
    const downloadAnchor = document.createElement('a');
    const todayStr = new Date().toISOString().split('T')[0];
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `semester-os-backup-${todayStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    return { success: true };
  } catch (err) {
    console.error('Failed to export backup:', err);
    return { success: false, error: err.message };
  }
};

/**
 * Imports backup JSON and validates its structure safely
 */
export const importBackupJSON = (jsonText) => {
  try {
    const parsed = JSON.parse(jsonText);
    const importedDays = parsed.days || parsed;

    if (!Array.isArray(importedDays) || importedDays.length === 0) {
      throw new Error("Invalid backup: Missing days array");
    }

    // Basic schema check
    const isValid = importedDays.every(d => d && d.date && Array.isArray(d.slots));
    if (!isValid) {
      throw new Error("Invalid backup: Corrupted day structure");
    }

    const merged = mergeWithDefaults(importedDays, DAILY_ROADMAP_DAYS);
    saveDays(merged);

    if (parsed.activeDate) {
      saveStoredActiveDate(parsed.activeDate);
    }

    return { 
      success: true, 
      days: merged, 
      activeDate: parsed.activeDate || merged[0].date 
    };
  } catch (err) {
    console.error('Failed to import backup:', err);
    return { success: false, error: err.message };
  }
};
