// Academic Roadmap Milestones Data
// Built strictly around the 8 phases, verified syllabus, and official examination dates.

export const ROADMAP_METADATA = {
  title: "SEMESTER OS",
  subtitle: "Your Semester 1 Journey",
  dateRange: "6 November 2026 – 9 January 2027",
  course: "Semester 01 · B.Tech CSE-AIML",
  institution: "PIET"
};

export const INITIAL_PHASES = [
  {
    phase: 1,
    name: "Foundation",
    dateRange: "6–12 November",
    startDate: "2026-11-06",
    endDate: "2026-11-12",
    objective: "Build strong fundamentals across priority units.",
    subjects: [
      {
        name: "Mathematics",
        milestones: [
          { id: "m-p1-m1", text: "Rank of matrices & echelon forms", completed: false },
          { id: "m-p1-m2", text: "Normal form & Gauss-Jordan inverse", completed: false },
          { id: "m-p1-m3", text: "Linear independence & consistency tests", completed: false }
        ]
      },
      {
        name: "Chemistry",
        milestones: [
          { id: "m-p1-c1", text: "Hardness of water & EDTA method", completed: false },
          { id: "m-p1-c2", text: "Alkalinity, scale & sludge formation", completed: false },
          { id: "m-p1-c3", text: "Lime-Soda process & Ion exchange", completed: false }
        ]
      },
      {
        name: "C Programming",
        milestones: [
          { id: "m-p1-cp1", text: "Data types, operators & precedence", completed: false },
          { id: "m-p1-cp2", text: "Storage classes & input/output", completed: false },
          { id: "m-p1-cp3", text: "Control structures & loop problems", completed: false }
        ]
      },
      {
        name: "Basics of Electronics Engineering",
        milestones: [
          { id: "m-p1-b1", text: "Semiconductor fundamentals & doping", completed: false },
          { id: "m-p1-b2", text: "PN junction & half/full wave rectifiers", completed: false },
          { id: "m-p1-b3", text: "Zener diode as voltage regulator", completed: false }
        ]
      },
      {
        name: "Basics of Communication Skills",
        milestones: [
          { id: "m-p1-bc1", text: "Types of listening & active listening", completed: false },
          { id: "m-p1-bc2", text: "Listening barriers & note-making techniques", completed: false }
        ]
      }
    ],
    dailyBreakdown: [
      {
        date: "2026-11-06",
        dayLabel: "Friday, 6 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Rank of Matrices", objective: "Understand echelon form and normal form." },
          { subject: "Chemistry", duration: "60 mins", topic: "Hardness of Water", objective: "Understand hardness calculations and EDTA method." },
          { subject: "C Programming", duration: "60 mins", topic: "Data Types and Operators", objective: "Understand fundamental concepts and practise examples." }
        ]
      },
      {
        date: "2026-11-07",
        dayLabel: "Saturday, 7 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Gauss-Jordan Inverse", objective: "Master inverse calculation and linearly independent vectors." },
          { subject: "BEE", duration: "75 mins", topic: "PN Junction & Rectifiers", objective: "Derive ripple factor and efficiency for bridge rectifier." },
          { subject: "BOC", duration: "45 mins", topic: "Listening Barriers", objective: "Active listening notes and barrier mitigation strategies." }
        ]
      },
      {
        date: "2026-11-08",
        dayLabel: "Sunday, 8 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Consistency of Linear Equations", objective: "Consistency test using augmented matrix [A|B] and Gauss elimination." },
          { subject: "Chemistry", duration: "75 mins", topic: "Lime-Soda Process", objective: "Formulas and numerical problem solving for water softening." },
          { subject: "C Programming", duration: "60 mins", topic: "Looping Constructs", objective: "Implement Fibonacci, Prime check, and Armstrong numbers." }
        ]
      },
      {
        date: "2026-11-09",
        dayLabel: "Monday, 9 November",
        sessions: [
          { subject: "BEE", duration: "75 mins", topic: "Zener Diode Regulator", objective: "Circuit diagram, load resistance calculation and regulation curve." },
          { subject: "Chemistry", duration: "60 mins", topic: "Ion Exchange & RO", objective: "Demineralization plant schematic and reverse osmosis principles." },
          { subject: "BOC", duration: "45 mins", topic: "Note-making & Summarizing", objective: "Practice passage summarization and note-making formats." }
        ]
      },
      {
        date: "2026-11-10",
        dayLabel: "Tuesday, 10 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Eigenvalues & Characteristic Equation", objective: "Properties of eigenvalues: sum = trace, product = determinant." },
          { subject: "C Programming", duration: "45 mins", topic: "Computer Fundamentals", objective: "Compiler vs Interpreter, algorithm design and flowcharts." },
          { subject: "BEE", duration: "60 mins", topic: "Number Conversions & Complements", objective: "1s and 2s complement arithmetic with overflow rules." }
        ]
      },
      {
        date: "2026-11-11",
        dayLabel: "Wednesday, 11 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Cayley-Hamilton Theorem", objective: "Verify theorem for 3x3 matrices and calculate A^-1 and A^4." },
          { subject: "Chemistry", duration: "60 mins", topic: "Calorific Value of Fuels", objective: "HCV vs LCV, Dulong's formula and numerical sheet." },
          { subject: "BOC", duration: "45 mins", topic: "Speaking Skills & 7Cs", objective: "Non-verbal cues, public speaking and GD initiation." }
        ]
      },
      {
        date: "2026-11-12",
        dayLabel: "Thursday, 12 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Diagonalization & Quadratic Forms", objective: "Orthogonal transformation, modal matrix and canonical reduction." },
          { subject: "BEE", duration: "60 mins", topic: "BCD and Gray Codes", objective: "Code conversions and excess-3 arithmetic." },
          { subject: "C Programming", duration: "75 mins", topic: "2D Arrays & Matrices", objective: "Matrix addition, multiplication and transpose in C." }
        ]
      }
    ]
  },
  {
    phase: 2,
    name: "Core Development",
    dateRange: "13–19 November",
    startDate: "2026-11-13",
    endDate: "2026-11-19",
    objective: "Deepen understanding of core calculus, fuels, arrays/functions, and logic gates.",
    subjects: [
      {
        name: "Mathematics",
        milestones: [
          { id: "m-p2-m1", text: "Taylor & Maclaurin series expansions", completed: false },
          { id: "m-p2-m2", text: "Indeterminate forms (L'Hopital rule)", completed: false },
          { id: "m-p2-m3", text: "Curvature & radius of curvature (Cartesian/Polar)", completed: false },
          { id: "m-p2-m4", text: "Rolle's & Lagrange's Mean Value Theorems", completed: false }
        ]
      },
      {
        name: "Chemistry",
        milestones: [
          { id: "m-p2-c1", text: "Bomb calorimeter & numerical analysis", completed: false },
          { id: "m-p2-c2", text: "Proximate and ultimate analysis of fuels", completed: false },
          { id: "m-p2-c3", text: "Corrosion mechanisms & cathodic protection", completed: false }
        ]
      },
      {
        name: "C Programming",
        milestones: [
          { id: "m-p2-cp1", text: "Functions, parameter passing & recursion", completed: false },
          { id: "m-p2-cp2", text: "1D/2D array processing & sorting algorithms", completed: false },
          { id: "m-p2-cp3", text: "String manipulation algorithms without string.h", completed: false }
        ]
      },
      {
        name: "Basics of Electronics Engineering",
        milestones: [
          { id: "m-p2-b1", text: "BJT working principle & CE configuration curves", completed: false },
          { id: "m-p2-b2", text: "Basic & Universal logic gates implementation", completed: false },
          { id: "m-p2-b3", text: "Boolean theorems & 3/4-variable K-Map minimization", completed: false }
        ]
      },
      {
        name: "Basics of Communication Skills",
        milestones: [
          { id: "m-p2-bc1", text: "Public speaking, GD strategies & debates", completed: false },
          { id: "m-p2-bc2", text: "Descriptive & professional email writing", completed: false }
        ]
      }
    ],
    dailyBreakdown: [
      {
        date: "2026-11-13",
        dayLabel: "Friday, 13 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Taylor and Maclaurin Series", objective: "Expand sin(x), e^x, log(1+x) and Taylor series about x = a." },
          { subject: "Chemistry", duration: "75 mins", topic: "Bomb Calorimeter", objective: "Derive HCV with cooling and acid corrections; numericals." },
          { subject: "C Programming", duration: "75 mins", topic: "Functions and Recursion", objective: "Factorial, Tower of Hanoi and GCD using recursive logic." }
        ]
      },
      {
        date: "2026-11-14",
        dayLabel: "Saturday, 14 November",
        sessions: [
          { subject: "Mathematics", duration: "75 mins", topic: "Indeterminate Forms", objective: "Solve 0/0, inf/inf, 0*inf, 1^inf forms using L'Hopital rule." },
          { subject: "BEE", duration: "60 mins", topic: "Universal Gates Realization", objective: "Realize AND, OR, NOT, XOR using only NAND and only NOR gates." },
          { subject: "BOC", duration: "45 mins", topic: "Group Discussions", objective: "Structure of GD participation: initiation, moderation, summary." }
        ]
      },
      {
        date: "2026-11-15",
        dayLabel: "Sunday, 15 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Radius of Curvature", objective: "Formulas for Cartesian and Polar curves (cardioid rho)." },
          { subject: "Chemistry", duration: "75 mins", topic: "Types of Corrosion", objective: "Dry vs wet electrochemical corrosion, pitting, galvanic protection." },
          { subject: "C Programming", duration: "60 mins", topic: "String Algorithms", objective: "Manual implementation of strlen, strcpy, strcmp, strcat." }
        ]
      },
      {
        date: "2026-11-16",
        dayLabel: "Monday, 16 November",
        sessions: [
          { subject: "BEE", duration: "90 mins", topic: "K-Map Simplification", objective: "SOP and POS minimization with Don't Care conditions." },
          { subject: "Mathematics", duration: "75 mins", topic: "Asymptotes", objective: "Parallel and oblique asymptotes by equating highest degree terms." },
          { subject: "BOC", duration: "45 mins", topic: "Descriptive Writing", objective: "Draft a technical paragraph adhering to evaluation rubrics." }
        ]
      },
      {
        date: "2026-11-17",
        dayLabel: "Tuesday, 17 November",
        sessions: [
          { subject: "Chemistry", duration: "75 mins", topic: "Beer-Lambert Law", objective: "Derivation of A = e * c * l, limitations and numerical problems." },
          { subject: "CP", duration: "90 mins", topic: "Pointers & Arrays", objective: "Pointer syntax, dereferencing, passing arrays as pointers." },
          { subject: "BEE", duration: "75 mins", topic: "BJT Configurations", objective: "Input and output characteristics of CE transistor configuration." }
        ]
      },
      {
        date: "2026-11-18",
        dayLabel: "Wednesday, 18 November",
        sessions: [
          { subject: "Mathematics", duration: "90 mins", topic: "Mean Value Theorems", objective: "Verify Rolle's and Lagrange's MVT for polynomial and trig functions." },
          { subject: "BEE", duration: "60 mins", topic: "Displays & Logic", objective: "Seven-segment display, common anode vs common cathode." },
          { subject: "BOC", duration: "45 mins", topic: "Professional Emails", objective: "Format for academic emails, formal requests, and subject lines." }
        ]
      },
      {
        date: "2026-11-19",
        dayLabel: "Thursday, 19 November",
        sessions: [
          { subject: "Chemistry", duration: "75 mins", topic: "UV-Visible Spectroscopy", objective: "Electronic transitions: sigma->sigma*, pi->pi*, n->pi*." },
          { subject: "CP", duration: "75 mins", topic: "Structures & Unions", objective: "Memory alignment, sizeof comparisons, nested structures." },
          { subject: "Mathematics", duration: "75 mins", topic: "Cauchy MVT & Curve Tracing", objective: "Symmetry, origin, intercepts and asymptotes for curve sketching." }
        ]
      }
    ]
  },
  {
    phase: 3,
    name: "Priority Unit Completion",
    dateRange: "20–26 November",
    startDate: "2026-11-20",
    endDate: "2026-11-26",
    objective: "Master pre-sessional priority units with rigorous numerical and code practice.",
    subjects: [
      {
        name: "Mathematics",
        milestones: [
          { id: "m-p3-m1", text: "Advanced consistency & non-trivial AX=0 solutions", completed: false },
          { id: "m-p3-m2", text: "Diagonalization of 3x3 symmetric matrices", completed: false },
          { id: "m-p3-m3", text: "Extreme values & Lagrange multipliers (2 variables)", completed: false },
          { id: "m-p3-m4", text: "Units 1, 2, 3 formula & theorem consolidation", completed: false }
        ]
      },
      {
        name: "Chemistry",
        milestones: [
          { id: "m-p3-c1", text: "NMR spectroscopy: chemical shift & spin-spin splitting", completed: false },
          { id: "m-p3-c2", text: "Fluorescence, phosphorescence & Jablonski diagram", completed: false },
          { id: "m-p3-c3", text: "Units 1, 2, 3 reaction formulas & numerical speed test", completed: false }
        ]
      },
      {
        name: "C Programming",
        milestones: [
          { id: "m-p3-cp1", text: "Dynamic memory allocation (malloc, calloc, realloc, free)", completed: false },
          { id: "m-p3-cp2", text: "File handling: text & binary file records (fread/fwrite)", completed: false },
          { id: "m-p3-cp3", text: "Sorting (Bubble, Selection) & Binary Search algorithms", completed: false }
        ]
      },
      {
        name: "Basics of Electronics Engineering",
        milestones: [
          { id: "m-p3-b1", text: "Transistor as switch & amplifier (DC load line & Q-point)", completed: false },
          { id: "m-p3-b2", text: "Rectifier & Zener numerical problem mastery", completed: false },
          { id: "m-p3-b3", text: "BCD arithmetic (+6 rule) & complement subtraction", completed: false }
        ]
      },
      {
        name: "Basics of Communication Skills",
        milestones: [
          { id: "m-p3-bc1", text: "Literature: Francis Bacon's 'Of Studies' analysis", completed: false },
          { id: "m-p3-bc2", text: "Literature: Daniel Keyes' 'Flowers for Algernon' summary", completed: false },
          { id: "m-p3-bc3", text: "Technical article & book review writing", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  },
  {
    phase: 4,
    name: "Sessional Preparation",
    dateRange: "27 November – 3 December",
    startDate: "2026-11-27",
    endDate: "2026-12-03",
    objective: "Solve past mid-term question papers (PYQs) and timed diagnostic test simulations.",
    subjects: [
      {
        name: "Mathematics",
        milestones: [
          { id: "m-p4-m1", text: "Math Sessional Mock 1 (Matrices & Eigenvalues - 60m)", completed: false },
          { id: "m-p4-m2", text: "Calculus PYQs (Taylor, curvature, asymptotes)", completed: false },
          { id: "m-p4-m3", text: "Error log analysis & resolving missed problems", completed: false }
        ]
      },
      {
        name: "Chemistry",
        milestones: [
          { id: "m-p4-c1", text: "Chemistry PYQs (Water treatment & fuels numericals)", completed: false },
          { id: "m-p4-c2", text: "Chemistry 60-min timed sessional mock test", completed: false },
          { id: "m-p4-c3", text: "Key diagrams: Zeolite, Bomb calorimeter, UV spectrophotometer", completed: false }
        ]
      },
      {
        name: "C Programming",
        milestones: [
          { id: "m-p4-cp1", text: "C Programming 60-min timed mock test", completed: false },
          { id: "m-p4-cp2", text: "Syntax bug identification & dry-run drills", completed: false },
          { id: "m-p4-cp3", text: "10 standard C exam programs code library", completed: false }
        ]
      },
      {
        name: "Basics of Electronics Engineering",
        milestones: [
          { id: "m-p4-b1", text: "BEE Sessional PYQs (Rectifiers, Zener, K-Maps)", completed: false },
          { id: "m-p4-b2", text: "BEE 60-min timed sessional mock test", completed: false },
          { id: "m-p4-b3", text: "Complete priority units formula checklist", completed: false }
        ]
      },
      {
        name: "Basics of Communication Skills",
        milestones: [
          { id: "m-p4-bc1", text: "Short definitions compilation (barriers, 7Cs, listening)", completed: false },
          { id: "m-p4-bc2", text: "Timed writing test: Email, Report & Paragraph", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  },
  {
    phase: 5,
    name: "Final Sessional Revision",
    dateRange: "4–6 December",
    startDate: "2026-12-04",
    endDate: "2026-12-06",
    objective: "High-yield formula drilling, summary sheets rapid review, and calm mental walkthrough.",
    subjects: [
      {
        name: "All Subjects",
        milestones: [
          { id: "m-p5-1", text: "Math rapid scan: Matrices, Cayley-Hamilton, Taylor series", completed: false },
          { id: "m-p5-2", text: "BEE circuit schematics & characteristic curves rapid redraw", completed: false },
          { id: "m-p5-3", text: "C core keywords, storage classes & pointer safety review", completed: false },
          { id: "m-p5-4", text: "Chemistry Units 1, 2, 3 rapid formula drilling", completed: false },
          { id: "m-p5-5", text: "BOC exam templates & literature notes review", completed: false },
          { id: "m-p5-6", text: "Pack exam kit (calculator, admit card, stationery) & mental rest", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  },
  {
    phase: 6,
    name: "Sessional III",
    dateRange: "7–10 December",
    startDate: "2026-12-07",
    endDate: "2026-12-10",
    objective: "Execute methodically in all papers. Target 35+/40 internal marks across all 5 subjects.",
    subjects: [
      {
        name: "Sessional Examination Papers",
        milestones: [
          { id: "m-p6-1", text: "7 Dec: Engineering Mathematics-I Paper", completed: false },
          { id: "m-p6-2", text: "8 Dec: Engineering Chemistry Paper", completed: false },
          { id: "m-p6-3", text: "9 Dec: Problem Solving Using C Paper", completed: false },
          { id: "m-p6-4", text: "10 Dec: Basics of Electronics Engineering & BOC Papers", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  },
  {
    phase: 7,
    name: "Mathematics Final Preparation",
    dateRange: "11–16 December",
    startDate: "2026-12-11",
    endDate: "2026-12-16",
    objective: "Master Unit 4 and achieve comprehensive 4-unit syllabus mastery before Dec 17 Math exam.",
    subjects: [
      {
        name: "Mathematics (BS-MTH101 · 4 Credits)",
        milestones: [
          { id: "m-p7-1", text: "Beta and Gamma functions: properties & standard integrals", completed: false },
          { id: "m-p7-2", text: "Unit 1 & 2 comprehensive review (Matrices & Eigenvalues)", completed: false },
          { id: "m-p7-3", text: "Double integrals evaluation & change of order of integration", completed: false },
          { id: "m-p7-4", text: "Unit 3 review (Taylor, asymptotes, curvature & MVT)", completed: false },
          { id: "m-p7-5", text: "Triple integrals & Surface areas/volumes of revolution", completed: false },
          { id: "m-p7-6", text: "Full 3-hour timed Math mock exam (Target 55+/60 external)", completed: false },
          { id: "m-p7-7", text: "Final formula sheet review & rest before tomorrow's exam", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  },
  {
    phase: 8,
    name: "End Semester Journey",
    dateRange: "17 December – 9 January",
    startDate: "2026-12-17",
    endDate: "2027-01-09",
    objective: "Staggered subject preparation blocks synchronized with the official examination timetable.",
    subjects: [
      {
        name: "Official Examination Timetable & Preparation Blocks",
        milestones: [
          { id: "m-p8-1", text: "17 Dec: MATHEMATICS EXAM (09:30 AM – 12:30 PM) · Light C kickoff in evening", completed: false },
          { id: "m-p8-2", text: "18–25 Dec: C Programming Sprint (Full 4 units, code clinic, 3-hr mock)", completed: false },
          { id: "m-p8-3", text: "26 Dec: C PROGRAMMING EXAM (09:30 AM – 12:30 PM)", completed: false },
          { id: "m-p8-4", text: "27–29 Dec: BEE Sprint (BJT Unit 2 deep dive, biasing, logic gates & mock)", completed: false },
          { id: "m-p8-5", text: "30 Dec: BASICS OF ELECTRONICS ENGINEERING EXAM (09:30 AM – 12:30 PM)", completed: false },
          { id: "m-p8-6", text: "31 Dec – 3 Jan: BOC Sprint (Literature: The Proposal, Toba Tek Singh, essays & mock)", completed: false },
          { id: "m-p8-7", text: "4 Jan: BASICS OF COMMUNICATION SKILLS EXAM (09:30 AM – 12:30 PM)", completed: false },
          { id: "m-p8-8", text: "5–8 Jan: Chemistry Sprint (Unit 4 Polymers, Teflon, Resins, Green Chemistry & mock)", completed: false },
          { id: "m-p8-9", text: "9 Jan: ENGINEERING CHEMISTRY EXAM (09:30 AM – 12:30 PM) · SEMESTER 1 FINALE!", completed: false }
        ]
      }
    ],
    dailyBreakdown: []
  }
];
