// Daily Academic Roadmap Data (11 November 2026 – 13 January 2027)
// Exactly 2 intelligent study slots per day, complete syllabus coverage, updated exam dates.

export const ACADEMIC_CONFIG = {
  appName: "Semester OS",
  subtitle: "My Semester 1 Study Roadmap",
  student: "B.Tech CSE-AIML · First Year",
  institution: "PIET (Panipat Institute of Engineering & Technology)",
  startDate: "2026-11-11",
  endDate: "2027-01-13",
  examSchedule: [
    { date: "2026-12-17", subject: "Engineering Mathematics-I", credits: 4, code: "BS-MTH101" },
    { date: "2026-12-30", subject: "Basics of Electronics Engineering", credits: 3, code: "ES-EE101" },
    { date: "2027-01-04", subject: "Basics of Communication Skills", credits: 2, code: "HS-ENG101" },
    { date: "2027-01-09", subject: "Engineering Chemistry", credits: 4, code: "BS-CHM101" },
    { date: "2027-01-13", subject: "Problem Solving Using C", credits: 3, code: "ES-CS101" }
  ],
  sessionalDates: {
    start: "2026-12-07",
    end: "2026-12-10",
    name: "Sessional III (Complete Sem-1 Syllabus)"
  }
};

// Pure monochrome black & white color tokens - NO PURPLE
export const SUBJECT_INFO = {
  "Mathematics-I": { short: "Math", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" },
  "Engineering Mathematics-I": { short: "Math", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" },
  "Engineering Chemistry": { short: "Chemistry", color: "#E5E5E5", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" },
  "Problem Solving Using C": { short: "C Prog", color: "#E5E5E5", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" },
  "Basics of Electronics Engineering": { short: "BEE", color: "#E5E5E5", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" },
  "Basics of Communication Skills": { short: "BOC", color: "#E5E5E5", bg: "rgba(255, 255, 255, 0.08)", border: "#525252" }
};
