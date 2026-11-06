export const ACADEMIC_METADATA = {
  appName: "Semester OS",
  subtitle: "Semester 01 | Academic Mission 2026–27",
  student: "B.Tech CSE-AIML • First Year",
  institution: "PIET (Panipat Institute of Engineering & Technology)",
  startDate: "2026-11-06",
  sessionalDates: {
    start: "2026-12-07",
    end: "2026-12-10",
    name: "Sessional III (All Sem-1 Syllabus)"
  },
  endSemDates: {
    start: "2026-12-17",
    end: "2027-01-09",
    name: "End Semester Examinations"
  },
  totalCredits: 21,
  theoryCredits: 16,
  practicalCredits: 5,
  evaluation: {
    theory: { internal: 40, external: 60, total: 100 },
    practical: { internal: 50, external: 50, total: 100 }
  }
};

export const SUBJECTS = [
  {
    id: "MATH",
    code: "BS-MTH101",
    name: "Engineering Mathematics-I",
    shortName: "Mathematics",
    credits: 4,
    type: "Theory",
    examDate: "2026-12-17",
    examTime: "09:30 AM – 12:30 PM",
    color: "#7895C9",
    bgLight: "rgba(120, 149, 201, 0.1)",
    borderColor: "rgba(120, 149, 201, 0.25)",
    preSessionalUnits: [1, 2, 3],
    postSessionalUnits: [4],
    strategyNotes: "Master Units 1, 2 and 3 deeply before sessionals. Unit 4 scheduled after sessionals (Phase 7: Dec 11–16).",
    units: [
      {
        number: 1,
        title: "Matrices and System of Linear Equations",
        topics: [
          "Rank of matrices",
          "Echelon and normal form",
          "Gauss-Jordan inverse",
          "Linear independence and dependence",
          "Homogeneous and non-homogeneous equations",
          "Consistency using rank",
          "Gauss elimination"
        ]
      },
      {
        number: 2,
        title: "Eigen Values and Eigen Vectors",
        topics: [
          "Eigenvalues and eigenvectors",
          "Linear and orthogonal transformations",
          "Diagonalization",
          "Cayley-Hamilton theorem",
          "Quadratic forms",
          "Canonical forms"
        ]
      },
      {
        number: 3,
        title: "Differential Calculus-I",
        topics: [
          "Indeterminate forms",
          "Taylor and Maclaurin series",
          "Extreme values",
          "Asymptotes",
          "Curvature and radius of curvature",
          "Tracing curves",
          "Rolle's theorem",
          "Lagrange's and Cauchy's mean value theorems"
        ]
      },
      {
        number: 4,
        title: "Differential Calculus-II",
        topics: [
          "Beta and Gamma functions",
          "Surface areas and volumes of revolution",
          "Double integrals",
          "Change of order of integration",
          "Triple integrals",
          "Area and volume applications"
        ]
      }
    ]
  },
  {
    id: "CHEM",
    code: "BS-CHM101",
    name: "Engineering Chemistry",
    shortName: "Chemistry",
    credits: 4,
    type: "Theory",
    examDate: "2027-01-09",
    examTime: "09:30 AM – 12:30 PM",
    color: "#81A88A", // Muted Sage Green
    bgLight: "rgba(129, 168, 138, 0.1)",
    borderColor: "rgba(129, 168, 138, 0.25)",
    preSessionalUnits: [1, 2, 3],
    postSessionalUnits: [4],
    strategyNotes: "Master Units 1, 2 and 3 deeply before sessionals. Unit 4 (Materials & Green Chem) prepped in Phase 8 before Jan 9 exam.",
    units: [
      {
        number: 1,
        title: "Water Treatment",
        topics: [
          "Hardness and units",
          "EDTA method",
          "Alkalinity",
          "Scale and sludge",
          "Lime-Soda process",
          "Ion exchange",
          "Reverse osmosis",
          "Electrodialysis"
        ]
      },
      {
        number: 2,
        title: "Fuels, Combustion and Corrosion",
        topics: [
          "Classification of fuels",
          "Calorific value",
          "Bomb calorimeter",
          "Proximate and ultimate analysis",
          "Flash point and fire point",
          "Types of corrosion",
          "Corrosion prevention"
        ]
      },
      {
        number: 3,
        title: "Spectroscopic Technique and Application",
        topics: [
          "Spectroscopy principles",
          "Beer-Lambert law",
          "UV-Visible spectroscopy",
          "Electronic transitions",
          "Fluorescence",
          "NMR",
          "Shielding and deshielding",
          "Chemical shift"
        ]
      },
      {
        number: 4,
        title: "Material Chemistry and Green Chemistry",
        topics: [
          "Polymers",
          "Teflon",
          "Polyethylene",
          "UF resin",
          "Phenol formaldehyde resin",
          "PHBV",
          "Conducting polymers",
          "Green chemistry principles",
          "Biodiesel"
        ]
      }
    ]
  },
  {
    id: "CP",
    code: "ES-CS101",
    name: "Problem Solving Using C",
    shortName: "C Programming",
    credits: 3,
    type: "Theory",
    examDate: "2026-12-26",
    examTime: "09:30 AM – 12:30 PM",
    color: "#8B95A5", // Muted Slate
    bgLight: "rgba(139, 149, 165, 0.1)",
    borderColor: "rgba(139, 149, 165, 0.25)",
    preSessionalUnits: [2, 3, 4],
    postSessionalUnits: [1],
    strategyNotes: "Master Units 2, 3 and 4 deeply (Tokens, Arrays/Funcs, Pointers/Files); Cover Unit 1 foundations. Intensive revision in Phase 8 (Dec 18–25).",
    units: [
      {
        number: 1,
        title: "Introduction to Computers & Problem Solving",
        topics: [
          "Computer fundamentals",
          "Hardware",
          "Number systems",
          "Programming languages",
          "Compiler and interpreter",
          "Algorithms",
          "Pseudocode",
          "Flowcharts"
        ]
      },
      {
        number: 2,
        title: "Tokens, Operators and Decision Making",
        topics: [
          "Data types",
          "Storage classes",
          "Operators",
          "Precedence and associativity",
          "Input/output",
          "If-else",
          "Switch",
          "Loops",
          "Break and continue"
        ]
      },
      {
        number: 3,
        title: "Arrays and Functions",
        topics: [
          "Functions",
          "Function prototypes",
          "Parameter passing",
          "Recursion",
          "Arrays",
          "Strings",
          "Array processing"
        ]
      },
      {
        number: 4,
        title: "Pointers and Data Files",
        topics: [
          "Structures",
          "Unions",
          "Pointers",
          "Pointer arithmetic",
          "Dynamic memory allocation",
          "Pointers and arrays",
          "File handling"
        ]
      }
    ]
  },
  {
    id: "BEE",
    code: "ES-EE101",
    name: "Basics of Electronics Engineering",
    shortName: "BEE",
    credits: 3,
    type: "Theory",
    examDate: "2026-12-30",
    examTime: "09:30 AM – 12:30 PM",
    color: "#C6A46A", // Muted Amber
    bgLight: "rgba(198, 164, 106, 0.1)",
    borderColor: "rgba(198, 164, 106, 0.25)",
    preSessionalUnits: [1, 3, 4],
    postSessionalUnits: [2],
    strategyNotes: "Master Units 1, 3 and 4 deeply (Semiconductors, Digital Systems, Logic Gates); Cover Unit 2 fundamentals. Intensive revision in Phase 8 (Dec 27–29).",
    units: [
      {
        number: 1,
        title: "Semiconductor Family and Applications",
        topics: [
          "Semiconductor fundamentals",
          "Doping",
          "PN junction",
          "Breakdown",
          "Half-wave and full-wave rectifiers",
          "Zener diode",
          "Voltage regulator",
          "Special-purpose diodes"
        ]
      },
      {
        number: 2,
        title: "Introduction to BJT",
        topics: [
          "Types of transistors",
          "Working principle",
          "CE, CB and CC configurations",
          "Input and output characteristics",
          "Alpha, beta and gamma",
          "Operating point",
          "Transistor as switch and amplifier"
        ]
      },
      {
        number: 3,
        title: "Digital Systems and Binary Numbers",
        topics: [
          "Analog and digital signals",
          "Number system conversions",
          "Binary arithmetic",
          "Complement arithmetic",
          "Signed binary numbers",
          "BCD and Gray codes"
        ]
      },
      {
        number: 4,
        title: "Logic Gates and Boolean Algebra",
        topics: [
          "Logic gates",
          "Universal gates",
          "Boolean algebra",
          "Boolean functions",
          "Expression minimization",
          "Canonical and standard forms",
          "Seven-segment display",
          "LED and LCD displays"
        ]
      }
    ]
  },
  {
    id: "BOC",
    code: "HS-ENG101",
    name: "Basics of Communication Skills",
    shortName: "BOC",
    credits: 2,
    type: "Theory",
    examDate: "2027-01-04",
    examTime: "09:30 AM – 12:30 PM",
    color: "#B497A8", // Muted Mauve
    bgLight: "rgba(180, 151, 168, 0.1)",
    borderColor: "rgba(180, 151, 168, 0.25)",
    preSessionalUnits: [1, 2, 4],
    postSessionalUnits: [3],
    strategyNotes: "Master Units 1, 2 and 4 deeply (Listening, Speaking, Writing); Cover Unit 3 literature texts. Final prep in Phase 8 (Dec 31–Jan 3).",
    units: [
      {
        number: 1,
        title: "Listening Skills",
        topics: [
          "Types of listening",
          "Active listening",
          "Note-making",
          "Summarizing",
          "Paraphrasing",
          "Listening barriers"
        ]
      },
      {
        number: 2,
        title: "Speaking Skills",
        topics: [
          "Confidence",
          "Pronunciation",
          "Vocabulary",
          "Body language",
          "Public speaking",
          "Debates",
          "Discussions",
          "Storytelling"
        ]
      },
      {
        number: 3,
        title: "Reading Skills & Literature",
        topics: [
          "Skimming and scanning",
          "Comprehension",
          "Flowers for Algernon",
          "Of Studies",
          "The Proposal",
          "Toba Tek Singh"
        ]
      },
      {
        number: 4,
        title: "Writing Skills",
        topics: [
          "Descriptive writing",
          "Narrative writing",
          "Expository writing",
          "Argumentative writing",
          "Creative writing",
          "Emails",
          "Blogs",
          "Editorials",
          "Reviews"
        ]
      }
    ]
  }
];

export const PRACTICAL_SUBJECTS = [
  { name: "C Programming Lab", credits: 1, code: "ES-CS151", eval: "50 Int + 50 Ext" },
  { name: "Electronics Lab", credits: 1, code: "ES-EE151", eval: "50 Int + 50 Ext" },
  { name: "Chemistry Lab", credits: 1, code: "BS-CHM151", eval: "50 Int + 50 Ext" },
  { name: "Communication Skills Lab", credits: 1, code: "HS-ENG151", eval: "50 Int + 50 Ext" },
  { name: "Internet of Things Lab", credits: 1, code: "ES-IOT151", eval: "50 Int + 50 Ext" }
];

export const PHASES = [
  {
    phase: 1,
    title: "Foundation",
    datesLabel: "6 to 12 November",
    startDate: "2026-11-06",
    endDate: "2026-11-12",
    description: "Establish strong foundations across priority semester units and core notation.",
    objective: "Master baseline theory and key definitions in Math (Matrices), Chemistry (Water treatment), C (Data types/operators), BEE (Semiconductors), and BOC (Listening).",
    completionTarget: "Complete foundational conceptual notes and initial problem sets for Units 1 & 2."
  },
  {
    phase: 2,
    title: "Core Development",
    datesLabel: "13 to 19 November",
    startDate: "2026-11-13",
    endDate: "2026-11-19",
    description: "Deepen understanding of core calculus, fuels, functions, logic gates and professional writing.",
    objective: "Master Taylor series, curvature, fuels & corrosion, functions/recursion in C, K-Map simplification in BEE, and speaking skills in BOC.",
    completionTarget: "Complete all textbook solved examples and derive core mathematical & electronic formulas."
  },
  {
    phase: 3,
    title: "Priority Unit Completion",
    datesLabel: "20 to 26 November",
    startDate: "2026-11-20",
    endDate: "2026-11-26",
    description: "Finalize pre-sessional priority units with rigorous numerical and code practice.",
    objective: "Achieve deep mastery of Eigenvalue diagonalization, UV-Vis/NMR spectroscopy, pointers & file handling in C, and BJT transistor characteristics.",
    completionTarget: "Complete priority units (~3 units per major subject) to ensure 35+/40 readiness for Sessional III."
  },
  {
    phase: 4,
    title: "Sessional Preparation",
    datesLabel: "27 November to 3 December",
    startDate: "2026-11-27",
    endDate: "2026-12-03",
    description: "Targeted problem solving, previous year questions (PYQs) and timed diagnostic test simulations.",
    objective: "Solve past mid-term question papers under timed conditions, build formula cheat sheets, and identify weak spots.",
    completionTarget: "Complete 5 timed diagnostic papers and rectify error logs across all subjects."
  },
  {
    phase: 5,
    title: "Final Sessional Revision",
    datesLabel: "4 to 6 December",
    startDate: "2026-12-04",
    endDate: "2026-12-06",
    description: "High-yield formula drilling, summary sheet rapid reviews, and question pattern walkthroughs.",
    objective: "Consolidate all derivations, reaction mechanisms, syntax structures, and circuit schematics into memory.",
    completionTarget: "Rapid review of all priority units; complete mental walk-through before Sessional III."
  },
  {
    phase: 6,
    title: "Sessional III",
    datesLabel: "7 to 10 December",
    startDate: "2026-12-07",
    endDate: "2026-12-10",
    description: "Official Sessional III Examination period covering Semester 1 portion.",
    objective: "Execute methodically in all papers. Maximize internal marks score toward 40/40 internal weightage.",
    completionTarget: "Target 35+ marks out of 40 across all 5 theory sessional papers."
  },
  {
    phase: 7,
    title: "Mathematics Final Preparation",
    datesLabel: "11 to 16 December",
    startDate: "2026-12-11",
    endDate: "2026-12-16",
    description: "Intensive 6-day preparation for Engineering Mathematics-I end-semester examination.",
    objective: "Master remaining Unit 4 (Beta & Gamma functions, Surface areas, Volumes of revolution, Double/Triple integrals, Change of order) and conduct comprehensive 4-unit mock tests.",
    completionTarget: "Achieve 100% syllabus mastery in Mathematics before the December 17 exam."
  },
  {
    phase: 8,
    title: "End Semester Journey",
    datesLabel: "17 December to 9 January",
    startDate: "2026-12-17",
    endDate: "2027-01-09",
    description: "Staggered subject sprints synchronized with official examination dates.",
    objective: "Systematic preparation and revision tailored to each paper: Mathematics (Dec 17), C Programming (Dec 26), BEE (Dec 30), BOC (Jan 4), and Chemistry (Jan 9).",
    completionTarget: "Conclude all Semester 1 theory examinations (60 external marks per subject) with top distinction."
  }
];

export const getSubjectById = (id) => SUBJECTS.find(s => s.id === id);
