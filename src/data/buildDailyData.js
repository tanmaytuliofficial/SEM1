// Generator script for 69 days (6 Nov 2026 – 13 Jan 2027) with exactly 2 slots per day
import fs from 'fs';
import path from 'path';

const daysData = [
  // WEEK 1: 6–12 Nov (Foundation Phase)
  {
    date: "2026-11-06",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Rank of Matrices",
      subtopics: ["Elementary row operations", "Echelon form", "Normal form", "Finding rank of 3x3 and 3x4 matrices"],
      learningObjective: "Understand how to calculate the rank of a matrix using echelon and normal forms."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Water Hardness",
      subtopics: ["Definition of hardness", "Temporary and permanent hardness", "Units of hardness & conversions", "Introduction to EDTA method"],
      learningObjective: "Understand water hardness principles and prepare for EDTA-based numerical problems."
    }
  },
  {
    date: "2026-11-07",
    slot1: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Data Types & Operators",
      subtopics: ["Fundamental data types", "Storage classes (auto, static, extern, register)", "Arithmetic & bitwise operators", "Operator precedence and associativity"],
      learningObjective: "Master token syntax, operator hierarchy, and storage class lifetime rules in C."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Semiconductor Fundamentals & Rectifiers",
      subtopics: ["Intrinsics & extrinsics (p-type, n-type)", "PN junction barrier potential", "Half-wave rectifier derivation", "Full-wave center-tapped and bridge rectifiers"],
      learningObjective: "Derive ripple factor, efficiency and peak inverse voltage (PIV) for rectifier circuits."
    }
  },
  {
    date: "2026-11-08",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "Gauss-Jordan Inverse & Linear Independence",
      subtopics: ["Matrix inversion via row transformations", "Definition of linear dependence & independence", "Wronskian / determinant test", "Solving for unknown scalars"],
      learningObjective: "Calculate matrix inverses by Gauss-Jordan elimination and evaluate vector linear independence."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Listening Skills & Note-Making",
      subtopics: ["Types of listening (active, critical, empathetic)", "Barriers to effective listening", "Note-making formats & abbreviations", "Paraphrasing strategies"],
      learningObjective: "Develop professional active listening habits and structured passage note-making techniques."
    }
  },
  {
    date: "2026-11-09",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "System of Linear Equations",
      subtopics: ["Homogeneous equations AX=0 (trivial vs non-trivial)", "Non-homogeneous equations AX=B", "Consistency condition using rank [A|B]", "Gauss elimination method"],
      learningObjective: "Solve systems of linear equations and determine conditions for unique, infinite, and no solutions."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "Alkalinity & Lime-Soda Process",
      subtopics: ["Phenolphthalein & Methyl orange alkalinity titration", "Scale and sludge formation in boilers", "Caustic embrittlement & priming/foaming", "Lime-Soda process stoichiometric calculations"],
      learningObjective: "Solve stoichiometric chemical requirement numericals for cold and hot Lime-Soda softening."
    }
  },
  {
    date: "2026-11-10",
    slot1: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Decision Making & Looping",
      subtopics: ["if-else & nested if statements", "switch-case fall-through behavior", "for, while, and do-while loops", "break and continue logic drills"],
      learningObjective: "Implement clean loop logic for prime testing, Fibonacci generation, and Armstrong number verification."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Zener Diode & Special Purpose Diodes",
      subtopics: ["Zener breakdown vs Avalanche breakdown", "Zener diode V-I characteristics", "Voltage regulation circuit analysis", "LED, Photodiode, and Varactor diode basics"],
      learningObjective: "Analyze Zener voltage regulator circuits under varying input voltage and load conditions."
    }
  },
  {
    date: "2026-11-11",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Ion Exchange & Desalination",
      subtopics: ["Demineralization (cation & anion exchangers)", "Regeneration reactions (HCl & NaOH)", "Reverse Osmosis (RO) semi-permeable membranes", "Electrodialysis setup and industrial utility"],
      learningObjective: "Explain advanced water purification methods and sketch industrial demineralization plants."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Binary Arithmetic & Complements",
      subtopics: ["Binary, octal, and hexadecimal conversions", "1's complement and 2's complement representation", "Signed binary numbers arithmetic", "Subtraction using 2's complement with overflow check"],
      learningObjective: "Perform binary arithmetic and verify signed subtraction using 2's complement techniques."
    }
  },
  {
    date: "2026-11-12",
    slot1: {
      subject: "Mathematics-I", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Eigenvalues & Eigenvectors",
      subtopics: ["Characteristic equation |A - lambda*I| = 0", "Eigenvalues calculation for 2x2 and 3x3 matrices", "Eigenvectors determination", "Properties: sum = trace, product = det(A)"],
      learningObjective: "Compute eigenvalues and linearly independent eigenvectors for standard square matrices."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "1D Arrays & Memory Mapping",
      subtopics: ["Array declaration and contiguous memory storage", "Element traversal and indexing arithmetic", "Linear search and Binary search implementation", "Bubble sort algorithm dry run"],
      learningObjective: "Understand array memory layouts and implement fundamental search and sort algorithms in C."
    }
  },

  // WEEK 2: 13–19 Nov (Core Development Phase)
  {
    date: "2026-11-13",
    slot1: {
      subject: "Mathematics-I", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Cayley-Hamilton Theorem & Diagonalization",
      subtopics: ["Statement & verification of Cayley-Hamilton theorem", "Finding A^-1 and higher powers A^4 using C-H", "Modal matrix P and diagonal form D = P^-1*A*P", "Orthogonal transformation of symmetric matrices"],
      learningObjective: "Apply the Cayley-Hamilton theorem to compute matrix powers and diagonalize symmetric matrices."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Fuels & Calorific Value",
      subtopics: ["Classification of primary and secondary fuels", "Gross (HCV) vs Net (LCV) calorific value", "Dulong's formula for theoretical calorific value", "Bomb calorimeter construction, operation & corrections"],
      learningObjective: "Derive the calorific value formula with cooling, fuse, and acid corrections for bomb calorimetry."
    }
  },
  {
    date: "2026-11-14",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Functions & Storage Dynamics",
      subtopics: ["Function prototype, definition, and invocation", "Pass by value vs Pass by reference mechanisms", "Scope, lifetime, and linkage of variables", "Recursion mechanics and stack frame visualization"],
      learningObjective: "Design modular C programs using user-defined functions and recursive call stacks."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Logic Gates & Universal Realization",
      subtopics: ["Basic gates: AND, OR, NOT truth tables & symbols", "Universal gates: NAND and NOR synthesis", "Realizing AND, OR, NOT, XOR, XNOR using only NAND", "Realizing gates using only NOR gates"],
      learningObjective: "Synthesize all fundamental logic circuits exclusively using universal NAND or NOR gates."
    }
  },
  {
    date: "2026-11-15",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Taylor & Maclaurin Series",
      subtopics: ["Taylor's theorem with remainder", "Maclaurin series expansion of sin(x), cos(x), e^x, log(1+x)", "Taylor expansions in powers of (x-a)", "Error estimation and truncation"],
      learningObjective: "Expand single-variable differentiable functions into infinite power series using Taylor's formula."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Speaking Skills & Professional Delivery",
      subtopics: ["Phonetics & correct pronunciation basics", "Body language and non-verbal kinesics", "Public speaking anxiety management", "7Cs of professional communication"],
      learningObjective: "Master oral delivery techniques, non-verbal cues, and principles of clear technical speech."
    }
  },
  {
    date: "2026-11-16",
    slot1: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Coal Analysis & Carbonization",
      subtopics: ["Proximate analysis (% moisture, volatile matter, ash, fixed carbon)", "Ultimate analysis (% C, H, N, S, O calculations)", "Significance of volatile matter in combustion", "Numerical problems on coal sample evaluation"],
      learningObjective: "Perform quantitative proximate and ultimate analysis calculations for industrial coal grading."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Boolean Algebra & K-Map Minimization",
      subtopics: ["Boolean postulates and De Morgan's laws", "Canonical SOP (minterms) and POS (maxterms)", "3-variable and 4-variable Karnaugh Maps (K-Map)", "Don't care conditions minimization practice"],
      learningObjective: "Minimize complex multi-variable Boolean algebraic expressions using Karnaugh Mapping."
    }
  },
  {
    date: "2026-11-17",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "2D Arrays & Matrix Algorithms",
      subtopics: ["2D array memory row-major vs column-major order", "Matrix addition and subtraction", "Matrix multiplication algorithm with dimension checks", "Transpose of square and rectangular matrices"],
      learningObjective: "Write clean matrix processing programs and verify boundary checks for array indexes in C."
    },
    slot2: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Indeterminate Forms & L'Hopital's Rule",
      subtopics: ["0/0 and infinity/infinity classical forms", "0 * infinity and infinity - infinity algebraic transformations", "0^0, 1^infinity, and infinity^0 logarithmic conversions", "Repeated differentiation guidelines"],
      learningObjective: "Evaluate indeterminate limits systematically using algebraic simplifications and L'Hopital's rule."
    }
  },
  {
    date: "2026-11-18",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Introduction to BJT Fundamentals",
      subtopics: ["NPN and PNP transistor physical construction", "Transistor biasing: forward-reverse active mode", "Common Base (CB) and Common Emitter (CE) configurations", "Input and output static characteristics of CE"],
      learningObjective: "Explain bipolar junction transistor operation and sketch CE configuration characteristic curves."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Group Discussions & Debates",
      subtopics: ["Structure of academic GDs: initiation, body, moderation", "Dealing with interruptions & concluding summaries", "Debating ethics: presenting argumentative rebuttals", "Storytelling frameworks for technical presentations"],
      learningObjective: "Prepare constructive arguments and practice structured participation in group discussion scenarios."
    }
  },
  {
    date: "2026-11-19",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Curvature & Radius of Curvature",
      subtopics: ["Curvature definition kappa = d_psi/ds", "Cartesian formula rho = [1+(y')^2]^(3/2) / y''", "Parametric form for radius of curvature", "Polar formula rho for cardioids r = a(1+cos theta)"],
      learningObjective: "Derive and calculate the radius of curvature for Cartesian, parametric, and polar plane curves."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Corrosion & Prevention",
      subtopics: ["Dry / chemical oxidation corrosion mechanism", "Wet / electrochemical corrosion (galvanic & differential aeration)", "Factors affecting corrosion rate", "Cathodic protection: Sacrificial anode vs Impressed current"],
      learningObjective: "Explain electrochemical corrosion reactions and evaluate protective metal coatings and cathodic methods."
    }
  },

  // WEEK 3: 20–26 Nov (Priority Unit Mastery & Advanced Problem Solving)
  {
    date: "2026-11-20",
    slot1: {
      subject: "Mathematics-I", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Quadratic Forms & Canonical Reduction",
      subtopics: ["Matrix representation of quadratic forms X^T*A*X", "Orthogonal transformation method", "Index, signature, and rank of quadratic form", "Definiteness: positive definite, negative definite, indefinite"],
      learningObjective: "Reduce real quadratic forms to canonical sum-of-squares forms and classify their definiteness."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Pointers Fundamentals & Pointer Arithmetic",
      subtopics: ["Address-of (&) and dereferencing (*) operators", "Pointer arithmetic: increments, decrements, pointer subtraction", "Passing pointers to functions (call by reference)", "Pointers and 1D arrays equivalence"],
      learningObjective: "Master pointer mechanics, memory address references, and indirect variable modification in C."
    }
  },
  {
    date: "2026-11-21",
    slot1: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Spectroscopy & Beer-Lambert Law",
      subtopics: ["Electromagnetic spectrum and molecular energy states", "Beer-Lambert law mathematical derivation", "Molar absorptivity epsilon and limitations", "Numerical problems on absorbance and concentration"],
      learningObjective: "Derive the Beer-Lambert law and calculate solute concentration from spectrophotometric absorbance."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Transistor Parameters & Biasing",
      subtopics: ["Relationship between alpha, beta, and gamma", "Common Collector (CC) configuration basics", "DC load line and Operating Point (Q-point)", "Transistor operating as a digital switch"],
      learningObjective: "Derive current gain relations and calculate DC load line operating points for BJT switches."
    }
  },
  {
    date: "2026-11-22",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "String Processing Algorithms",
      subtopics: ["Null-terminated character arrays in memory", "Manual coding: strlen, strcpy, strcmp without string.h", "String concatenation and substring extraction", "Checking string palindrome and anagrams"],
      learningObjective: "Implement string operations through pointer traversals and manual character manipulation."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature: Francis Bacon's 'Of Studies'",
      subtopics: ["Aphoristic essay style of Francis Bacon", "Three chief uses of studies: delight, ornament, ability", "Curing mental defects through diverse reading", "Key textual analysis and critical evaluation"],
      learningObjective: "Analyze Bacon's aphoristic philosophy of learning and draft structured analytical answers."
    }
  },
  {
    date: "2026-11-23",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Mean Value Theorems & Asymptotes",
      subtopics: ["Rolle's theorem: geometric interpretation & conditions", "Lagrange's Mean Value Theorem verification", "Cauchy's Generalized Mean Value Theorem", "Finding parallel and oblique asymptotes y = mx + c"],
      learningObjective: "Verify Rolle's, Lagrange's, and Cauchy's MVT and determine all asymptotes of algebraic curves."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "UV-Visible Spectroscopy",
      subtopics: ["Principle of electronic absorption", "Electronic transitions: sigma->sigma*, n->sigma*, pi->pi*, n->pi*", "Chromophores and auxochromes definitions", "Bathochromic (red) and hypsochromic (blue) shifts"],
      learningObjective: "Identify electronic transitions and interpret structural effects of chromophores on UV spectra."
    }
  },
  {
    date: "2026-11-24",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Codes & Digital Logic Displays",
      subtopics: ["BCD (8421) and Excess-3 codes conversions", "Gray code reflection and binary-to-Gray translation", "BCD addition with +6 correction rule", "Seven-segment displays: common anode vs common cathode"],
      learningObjective: "Perform BCD arithmetic and design display decoder circuits using 7-segment logic."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Structures, Unions & Memory Alignment",
      subtopics: ["struct declaration, member access (.) and arrow (->) operators", "Array of structures & nested structures", "unions vs structures memory allocation", "Memory alignment and sizeof comparisons"],
      learningObjective: "Construct structured data records and contrast memory sharing mechanisms in structures vs unions."
    }
  },
  {
    date: "2026-11-25",
    slot1: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "NMR Spectroscopy & Photophysics",
      subtopics: ["Basic principle of 1H-Nuclear Magnetic Resonance", "Nuclear shielding, deshielding & chemical shift (delta scale)", "Tetramethylsilane (TMS) reference standard", "Fluorescence vs Phosphorescence (Jablonski diagram)"],
      learningObjective: "Explain chemical shift principles, spin-spin splitting rules, and photophysical decay processes."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature: Daniel Keyes' 'Flowers for Algernon'",
      subtopics: ["Charlie Gordon character sketch & intellectual trajectory", "Themes: emotional maturity vs scientific hubris", "The Algernon-Gordon effect and societal alienation", "Long-form character analysis questions"],
      learningObjective: "Examine psychological and ethical themes in Flowers for Algernon for university examinations."
    }
  },
  {
    date: "2026-11-26",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Extreme Values & Lagrange Multipliers",
      subtopics: ["Maxima and minima of functions of two variables f(x, y)", "Necessary & sufficient conditions: rt - s^2 > 0 check", "Saddle points identification", "Lagrange's method of undetermined multipliers"],
      learningObjective: "Locate extrema of bivariate functions and optimize constrained objectives using Lagrange multipliers."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Dynamic Memory Allocation & Files",
      subtopics: ["stdlib functions: malloc, calloc, realloc, and free", "Dangling pointers and memory leak prevention", "File operations: fopen, fclose, fprintf, fscanf", "Binary file record processing with fread and fwrite"],
      learningObjective: "Allocate heap memory dynamically and build persistent file read/write modules in C."
    }
  },

  // WEEK 4: 27 Nov – 3 Dec (Sessional Prep & Timed Testing Phase)
  {
    date: "2026-11-27",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Test 1: Matrices & Linear Systems",
      subtopics: ["60-min timed diagnostic paper: Rank, Echelon form", "Gauss-Jordan inverse calculation problem", "Consistency determination for parameter lambda and mu", "Error logging and step-marking review"],
      learningObjective: "Simulate examination conditions for Unit 1 and attain high accuracy under time constraints."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Water Treatment Numerical Review",
      subtopics: ["Hardness calculations from titration data", "EDTA standard problem set walkthrough", "Cold and hot Lime-Soda numerical speed test", "Ion exchange regeneration equation drill"],
      learningObjective: "Reinforce rapid numerical calculations for water softening and EDTA analytical chemistry."
    }
  },
  {
    date: "2026-11-28",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Coding Test: Functions, Arrays, Pointers",
      subtopics: ["Recursive function problem (GCD / Tower of Hanoi)", "Matrix multiplication with pointer parameters", "Dynamic memory allocation problem (malloc)", "Code syntax dry-run and bug identification"],
      learningObjective: "Write bug-free, fully compiled C programs addressing university-level programming prompts."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Semiconductors & Rectifiers PYQ Drilling",
      subtopics: ["Bridge rectifier numerical calculations", "Ripple factor and efficiency derivations", "Zener diode line and load regulation problems", "Special diodes comparison table"],
      learningObjective: "Consolidate derivations and solve previous years' sessional questions on semiconductor devices."
    }
  },
  {
    date: "2026-11-29",
    slot1: {
      subject: "Mathematics-I", unit: 2, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Test 2: Eigenvalues & Quadratic Forms",
      subtopics: ["Eigenvalues and eigenvectors of 3x3 symmetric matrix", "Cayley-Hamilton theorem verification and A^-1", "Orthogonal transformation to diagonal matrix", "Definiteness classification of quadratic form"],
      learningObjective: "Score full marks in 3x3 matrix diagonalization and quadratic reduction problems."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Technical Writing Formats",
      subtopics: ["Formal email writing structure and etiquettes", "Complaint and inquiry business letters", "Writing technical project progress reports", "Paragraph development with topic sentences"],
      learningObjective: "Draft structured professional correspondence and technical reports conforming to academic formats."
    }
  },
  {
    date: "2026-11-30",
    slot1: {
      subject: "Engineering Chemistry", unit: 2, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Test: Fuels & Spectroscopy",
      subtopics: ["Bomb calorimeter calorific value numerical", "Proximate and ultimate analysis calculation", "Beer-Lambert law calculation", "Chemical shift and 1H-NMR spectrum interpretation"],
      learningObjective: "Execute timed solutions for fuel combustion numericals and spectroscopy analytical problems."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Revision",
      mainTopic: "Digital Logic & K-Map Speed Drills",
      subtopics: ["4-variable K-Map simplification with don't cares", "Universal NAND/NOR gate conversions speed drill", "Complement arithmetic edge case questions", "Seven-segment display driver truth tables"],
      learningObjective: "Solve multi-variable logic minimization and gate synthesis problems with zero arithmetic error."
    }
  },
  {
    date: "2026-12-01",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Test 3: Differential Calculus-I",
      subtopics: ["Taylor and Maclaurin expansions", "Indeterminate form limits evaluation", "Radius of curvature Cartesian and polar problems", "Constrained maxima/minima using Lagrange multipliers"],
      learningObjective: "Master differential calculus problem sets frequently tested in university mid-term papers."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Revision",
      mainTopic: "C Syntax Tracing & Standard Snippets",
      subtopics: ["Precedence and order of evaluation output questions", "Storage class scoping tricky interview questions", "Pointer increment vs value increment (*p++ vs ++*p)", "File handling error checking logic"],
      learningObjective: "Sharpen dry-run accuracy for C output-prediction and pointer address calculation questions."
    }
  },
  {
    date: "2026-12-02",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Test: BJT & Number Systems",
      subtopics: ["CE transistor input/output characteristic curves", "DC load line and active Q-point calculation", "BJT operating as an inverter switch", "Binary, Gray, and BCD conversions speed test"],
      learningObjective: "Produce accurate circuit diagrams, characteristic curves, and transistor parameter derivations."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Chemistry Complete Reaction Mechanisms",
      subtopics: ["EDTA-metal complexation equilibria & indicator action", "Lime-Soda chemical precipitation equations", "Zeolite and ion-exchange resin reactions", "Electrochemical corrosion cell half-reactions"],
      learningObjective: "Memorize and write balanced chemical equations for water treatment and corrosion processes."
    }
  },
  {
    date: "2026-12-03",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Math Comprehensive Formula Sheet Assembly",
      subtopics: ["Rank, consistency rules & echelon checklist", "Eigenvalues properties & Cayley-Hamilton steps", "Taylor, Maclaurin, L'Hopital rules", "Curvature Cartesian and polar formulas sheet"],
      learningObjective: "Synthesize all tested formulas from Units 1, 2, and 3 into an active recall revision sheet."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Communication Concepts & Literature Review",
      subtopics: ["50 rapid definitions drill (barriers, 7Cs, kinesics)", "Bacon's 'Of Studies' key quotations review", "Flowers for Algernon thematic breakdown", "Official email & letter templates walkthrough"],
      learningObjective: "Review all high-yield definitions, literature themes, and professional writing rubrics."
    }
  },

  // WEEK 5: 4–6 Dec (Final Sessional Revision)
  {
    date: "2026-12-04",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "100 mins", studyType: "Revision",
      mainTopic: "Sessional Final Rapid Scan: Mathematics",
      subtopics: ["Matrices consistency checking steps", "Characteristic equation and eigenvector calculation", "Radius of curvature polar cardioid derivation", "Lagrange multipliers constrained problem solve"],
      learningObjective: "Perform a rapid memory scan across all priority Math units prior to Sessional III."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Revision",
      mainTopic: "Sessional Final Rapid Scan: Chemistry",
      subtopics: ["Bomb calorimeter HCV/LCV formulas and corrections", "Proximate and ultimate analysis calculations", "UV-Vis electronic transitions & chromophore definitions", "Chemical shift delta values & NMR splitting"],
      learningObjective: "Review high-weightage formulas, spectrophotometric laws, and coal combustion equations."
    }
  },
  {
    date: "2026-12-05",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "100 mins", studyType: "Revision",
      mainTopic: "Sessional Final Rapid Scan: C Programming",
      subtopics: ["Recursive functions call flow (factorial, Fibonacci)", "2D array matrix multiplication logic", "Dynamic memory allocation syntax (malloc/free)", "File pointers and character reading loops"],
      learningObjective: "Reinforce standard C code snippets on paper with neat indentation and comment headers."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Sessional Final Rapid Scan: Electronics",
      subtopics: ["Rectifier circuits & wave form drawings", "Zener diode voltage regulator circuit diagram", "CE transistor output curves and regions (cutoff, active, saturation)", "4-variable K-Map grouping rules"],
      learningObjective: "Redraw circuit schematics, polarities, and characteristic graphs from memory."
    }
  },
  {
    date: "2026-12-06",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Day 1 Sessional Readiness & Mental Walkthrough",
      subtopics: ["Formula cheat sheet final inspection", "Reviewing common calculation pitfalls in matrix reduction", "Calculator functions verification (solving equations, matrices)", "Stationery and examination admit kit preparation"],
      learningObjective: "Ensure full operational preparedness and mental calm for Day 1 of Sessional III."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "60 mins", studyType: "Revision",
      mainTopic: "BOC Quick Revision & Rest",
      subtopics: ["Writing formats rapid scan (memos, emails, letters)", "Key literature summaries quick reading", "Calibrated evening rest for optimal exam focus"],
      learningObjective: "Review communicative rubrics and rest ahead of the examination week."
    }
  },

  // WEEK 6: 7–10 Dec (Sessional III Examinations Period)
  {
    date: "2026-12-07",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "120 mins", studyType: "Official Exam",
      mainTopic: "Sessional III: Mathematics-I Examination",
      subtopics: ["Full syllabus examination paper", "Attempt high-weightage matrix and eigenvalue questions", "Rigorous step-wise presentation for calculus problems", "Final revision of solutions before submission"],
      learningObjective: "Execute Sessional III Mathematics paper with composure, targeting maximum internal marks."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Targeted Revision for Tomorrow's Chemistry Paper",
      subtopics: ["Water hardness and Lime-Soda numerical formulas", "Bomb calorimeter derivation and corrections", "Beer-Lambert law numericals review", "Corrosion mechanisms recap"],
      learningObjective: "Refresh core reactions and fuel combustion numericals for Day 2 of Sessional III."
    }
  },
  {
    date: "2026-12-08",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "120 mins", studyType: "Official Exam",
      mainTopic: "Sessional III: Engineering Chemistry Examination",
      subtopics: ["Full syllabus examination paper", "Structured numerical solutions with units", "Neat chemical equations and plant diagrams", "Spectroscopy transition diagrams presentation"],
      learningObjective: "Deliver accurate numericals and clean chemical reactions in the Chemistry sessional."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Revision",
      mainTopic: "Targeted Revision for Tomorrow's C Paper",
      subtopics: ["Recursion and array processing algorithms", "Pointer syntax and function reference calls", "File handling functions (fopen, fscanf, fprintf)", "Standard program structures review"],
      learningObjective: "Review C syntax and algorithm structures ahead of Day 3 of Sessional III."
    }
  },
  {
    date: "2026-12-09",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "120 mins", studyType: "Official Exam",
      mainTopic: "Sessional III: Problem Solving Using C Examination",
      subtopics: ["Full syllabus examination paper", "Well-commented C code implementations", "Trace table and dry-run output questions", "Structure definition and pointer manipulation logic"],
      learningObjective: "Write clean, syntactically correct C programs in the sessional examination."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Targeted Revision for Tomorrow's BEE & BOC Papers",
      subtopics: ["Zener and rectifier circuit diagrams review", "CE configuration characteristics and load line", "Universal gate realization & K-Map rules", "Communication skills writing formats checklist"],
      learningObjective: "Solidify electronic schematics and communication writing formats for the final sessional day."
    }
  },
  {
    date: "2026-12-10",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "120 mins", studyType: "Official Exam",
      mainTopic: "Sessional III: BEE & BOC Examination Papers",
      subtopics: ["Electronics and Communication sessional papers", "Circuit analysis and Boolean simplification", "Technical letter and literature essay answers", "Review of answers for internal marks target 35+/40"],
      learningObjective: "Conclude Sessional III with high scores across Electronics and Communication Skills."
    },
    slot2: {
      subject: "Mathematics-I", unit: 4, duration: "60 mins", studyType: "Learning",
      mainTopic: "Post-Sessional Reset & End-Sem Strategy",
      subtopics: ["Sessional performance review & error analysis", "Shift focus to official End-Sem timetable", "Overview of Math Unit 4 (Double/Triple integrals, Beta/Gamma)", "Planning the 6-day sprint to 17 Dec Math exam"],
      learningObjective: "Transition into end-semester preparation and set syllabus completion goals for Math Unit 4."
    }
  },

  // WEEK 7: 11–16 Dec (Mathematics Final Preparation Sprint leading to 17 Dec Exam)
  {
    date: "2026-12-11",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "120 mins", studyType: "Learning",
      mainTopic: "Beta & Gamma Functions",
      subtopics: ["Definition of Beta B(m,n) and Gamma Gamma(n) functions", "Symmetry B(m,n) = B(n,m) and fundamental properties", "Relation B(m,n) = Gamma(m)*Gamma(n)/Gamma(m+n)", "Evaluation of definite integrals using Gamma functions"],
      learningObjective: "Master definitions, standard properties, and integral evaluations of Beta and Gamma functions."
    },
    slot2: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "End-Sem Review: Unit 1 Matrices & Systems",
      subtopics: ["Rank calculation using normal form", "Gauss-Jordan inverse of 3x3 matrices", "Consistency of AX=B with unknown parameters", "Solving homogeneous systems for non-trivial solutions"],
      learningObjective: "Ensure 100% exam readiness for all matrix algebra questions on the end-semester paper."
    }
  },
  {
    date: "2026-12-12",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "120 mins", studyType: "Learning",
      mainTopic: "Double Integrals & Cartesian Regions",
      subtopics: ["Geometric interpretation of double integrals", "Evaluation over rectangular domains", "Setting up limits over variable regions (horizontal vs vertical strips)", "Double integrals in polar coordinates"],
      learningObjective: "Evaluate double integrals and establish correct integration limits over non-rectangular domains."
    },
    slot2: {
      subject: "Mathematics-I", unit: 2, duration: "90 mins", studyType: "Revision",
      mainTopic: "End-Sem Review: Unit 2 Eigenvalues & Diagonalization",
      subtopics: ["Eigenvalues and eigenvectors of symmetric matrices", "Cayley-Hamilton theorem verification and inverse", "Diagonalization using orthogonal modal matrix", "Quadratic form reduction and canonical classification"],
      learningObjective: "Master 12-mark university exam questions on matrix diagonalization and quadratic forms."
    }
  },
  {
    date: "2026-12-13",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "120 mins", studyType: "Practice",
      mainTopic: "Change of Order of Integration",
      subtopics: ["Sketching the given region of integration from limits", "Identifying new integration strips (dx dy to dy dx)", "Setting up reversed integration limits", "Solving tricky standard university problems"],
      learningObjective: "Master the change of order of integration technique for complex double integrals."
    },
    slot2: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Revision",
      mainTopic: "End-Sem Review: Unit 3 Calculus & Asymptotes",
      subtopics: ["Taylor and Maclaurin expansions for trig/log functions", "Indeterminate limits using L'Hopital rule", "Radius of curvature Cartesian and polar formulas", "Rolle's and Lagrange's Mean Value Theorems"],
      learningObjective: "Achieve complete accuracy on differential calculus and mean value theorem problems."
    }
  },
  {
    date: "2026-12-14",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "120 mins", studyType: "Practice",
      mainTopic: "Triple Integrals & Volume Applications",
      subtopics: ["Evaluation of triple integrals in Cartesian coordinates", "Setting limits for bounded solid volumes (tetrahedron, sphere, cylinder)", "Volume enclosed by intersecting surfaces", "Dirichlet's integral applications"],
      learningObjective: "Calculate solid volumes using triple integrals over spatial surfaces."
    },
    slot2: {
      subject: "Mathematics-I", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Surface Areas & Volumes of Revolution",
      subtopics: ["Surface area of solids generated by revolving curves", "Volume of solids of revolution about x-axis and y-axis", "Revolution of astroid and cardioid solids", "Area between intersecting plane curves"],
      learningObjective: "Compute surface areas and volumes of revolution for standard plane curves."
    }
  },
  {
    date: "2026-12-15",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "180 mins", studyType: "Test",
      mainTopic: "Mathematics Full Syllabus 3-Hour Mock Exam",
      subtopics: ["Strict 09:30 AM – 12:30 PM exam simulation", "Section A: Compulsory short answer questions", "Sections B, C, D: Long problems from Units 1, 2, 3, 4", "Target 55+/60 external marks"],
      learningObjective: "Execute a full-length 3-hour examination paper to master time management and presentation."
    },
    slot2: {
      subject: "Mathematics-I", unit: 4, duration: "75 mins", studyType: "Revision",
      mainTopic: "Mock Paper Error Rectification",
      subtopics: ["Scoring mock paper against PIET evaluation rubrics", "Re-solving all calculation errors in double integrals", "Clarifying boundary limits for change of order", "Step-by-step presentation polish"],
      learningObjective: "Eliminate recurring errors and consolidate high-scoring problem solving methods."
    }
  },
  {
    date: "2026-12-16",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Final Mathematics Formula Scan",
      subtopics: ["Formulas across all 4 units active recall", "Rank, eigenvalues, series, curvature, and integrals cheat sheet", "Verifying theorem statements (Cayley-Hamilton, Rolle, Lagrange)", "Stationery, calculator, and admit card preparation"],
      learningObjective: "Complete a thorough formula scan and enter the examination with calm confidence."
    },
    slot2: {
      subject: "Mathematics-I", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Calibrated Rest & Pre-Exam Focus",
      subtopics: ["Light mental walkthrough of exam sequence", "Rest and early sleep for sharp cognitive alertness"],
      learningObjective: "Ensure peak cognitive energy and confidence for tomorrow morning's paper."
    }
  },

  // WEEK 8: 17–23 Dec (Exam 1: Math Day + Transition to BEE & C)
  {
    date: "2026-12-17",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Engineering Mathematics-I",
      subtopics: ["Paper 1 of Semester 1 Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Units 1, 2, 3, 4)", "Max External Marks: 60 (4 Credits)"],
      learningObjective: "Execute the first theory examination with poise and clear mathematical presentation."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "60 mins", studyType: "Learning",
      mainTopic: "Post-Exam Recovery & BEE Kick-Off",
      subtopics: ["Light mental break after Mathematics paper", "Transition to next exam: Basics of Electronics (30 Dec)", "Overview of BEE 4-unit syllabus and revision plan", "Light review of semiconductor diode rectifiers"],
      learningObjective: "Reset focus after the Mathematics paper and initiate the 13-day BEE preparation sprint."
    }
  },
  {
    date: "2026-12-18",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "100 mins", studyType: "Learning",
      mainTopic: "Semiconductors & Special Diodes",
      subtopics: ["Doping, energy band diagrams, and PN junction physics", "Half-wave and full-wave bridge rectifier derivations", "Zener diode as voltage regulator with line and load variations", "Tunnel diode, Varactor diode, and Photodiode characteristics"],
      learningObjective: "Master Unit 1 semiconductor devices, rectifier derivations, and diode regulation circuits."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "C Fundamentals & Algorithm Design",
      subtopics: ["Computer architecture and compilation workflow", "Algorithm flowcharts and pseudo-code conventions", "Number systems in computer memory", "Header files, main() anatomy, and standard I/O"],
      learningObjective: "Review foundational computer problem-solving concepts and standard algorithm representations."
    }
  },
  {
    date: "2026-12-19",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "100 mins", studyType: "Learning",
      mainTopic: "BJT Configurations & Characteristics",
      subtopics: ["Transistor action and carrier transport in CE, CB, CC", "Input and output static characteristics of CE mode", "Alpha, beta, and gamma mathematical relationships", "Base width modulation (Early effect) and punch-through"],
      learningObjective: "Understand BJT physics across CB, CE, and CC configurations and derive current amplification factors."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Operators, Storage Classes & Control",
      subtopics: ["Bitwise operations (&, |, ^, ~, <<, >>)", "Storage classes behavior: auto, extern, static, register", "Nested loops and break/continue jump logic", "Output prediction questions on tricky operator precedence"],
      learningObjective: "Code exercises on bitwise operations and master storage class lifetimes in C."
    }
  },
  {
    date: "2026-12-20",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "100 mins", studyType: "Practice",
      mainTopic: "BJT as Switch & Operating Point (Q-Point)",
      subtopics: ["DC load line equation and plotting on output curves", "Operating point (Q-point) selection for active amplification", "Thermal runaway and stabilization necessity", "Transistor working as an inverter switch in saturation and cutoff"],
      learningObjective: "Calculate DC load line parameters and design transistor digital inverter switches."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature: Anton Chekhov's 'The Proposal'",
      subtopics: ["One-act farce structure and Russian societal satire", "Characters: Lomov, Natalya Stepanovna, and Chubukov", "Petty squabbles over Oxen Meadows and hunting dogs", "Satire on marriage of convenience in 19th-century society"],
      learningObjective: "Analyze dramatic satire and character motivations in Chekhov's 'The Proposal'."
    }
  },
  {
    date: "2026-12-21",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "100 mins", studyType: "Practice",
      mainTopic: "Digital Systems & Number Systems",
      subtopics: ["Base-r conversions (binary, octal, decimal, hex)", "Signed magnitude, 1's complement, and 2's complement", "2's complement addition/subtraction and overflow detection", "BCD code, Excess-3 code, and Gray code arithmetic"],
      learningObjective: "Master all digital number systems and solve complement arithmetic problems."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Functions & Recursion Deep Dive",
      subtopics: ["Pass by value vs pass by pointer address", "Static variables inside functions", "Recursion mechanics: Fibonacci, factorial, GCD, Tower of Hanoi", "Call stack behavior and recursion termination conditions"],
      learningObjective: "Implement recursive algorithms and trace memory stack frames during execution."
    }
  },
  {
    date: "2026-12-22",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "100 mins", studyType: "Learning",
      mainTopic: "Logic Gates & Boolean Simplification",
      subtopics: ["Standard Boolean theorems and dual forms", "Canonical SOP (minterms) and POS (maxterms)", "Universal gate synthesis (NAND only and NOR only)", "XOR and XNOR gate properties and parity generator"],
      learningObjective: "Express Boolean functions in standard canonical forms and synthesize using universal gates."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Polymers & Engineering Materials",
      subtopics: ["Polymerization mechanisms (addition vs condensation)", "Preparation, properties, and applications of Teflon", "Polyethylene (LDPE vs HDPE structures)", "Urea-Formaldehyde (UF) and Phenol-Formaldehyde (Bakelite) resins"],
      learningObjective: "Explain industrial polymer synthesis and distinguish thermoplastic vs thermosetting resins."
    }
  },
  {
    date: "2026-12-23",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "100 mins", studyType: "Practice",
      mainTopic: "K-Map Minimization & Displays",
      subtopics: ["4-variable K-Map minimization with don't care conditions", "Prime implicants and essential prime implicants", "Seven-segment display driver truth table (BCD to 7-segment)", "LED vs LCD working principles and comparison"],
      learningObjective: "Simplify complex 4-variable logic functions and design display decoding logic."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Multi-Dimensional Arrays & Strings",
      subtopics: ["2D arrays: matrix addition, multiplication, transpose", "Strings in memory and manual string algorithms", "Palindrome, anagram, word count implementation", "Array of strings / char pointers"],
      learningObjective: "Code clean 2D matrix algorithms and pointer-based string manipulation routines in C."
    }
  },

  // WEEK 9: 24–30 Dec (BEE Sprint leading to 30 Dec Exam)
  {
    date: "2026-12-24",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "100 mins", studyType: "Revision",
      mainTopic: "BEE Units 1 & 2 Comprehensive Review",
      subtopics: ["Semiconductor diode rectifiers and ripple derivations", "Zener voltage regulator design calculations", "BJT CE configurations static curves and Q-point", "Transistor digital inverter switch problems"],
      learningObjective: "Consolidate Units 1 and 2 of Electronics with accurate circuit schematics and derivations."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature: Saadat Hasan Manto's 'Toba Tek Singh'",
      subtopics: ["Partition trauma and political absurdity theme", "Bishan Singh (Toba Tek Singh) character study", "Symbolism of no-man's land between the two borders", "Critical textual analysis and long essay answers"],
      learningObjective: "Analyze socio-political satire and Partition trauma in Manto's 'Toba Tek Singh'."
    }
  },
  {
    date: "2026-12-25",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "100 mins", studyType: "Revision",
      mainTopic: "BEE Units 3 & 4 Comprehensive Review",
      subtopics: ["Number system conversions and 2's complement arithmetic", "BCD addition with correction rule", "4-variable K-Map minimization problem solving", "Universal NAND/NOR gate implementations"],
      learningObjective: "Attain speed and accuracy in solving digital system arithmetic and K-Map logic minimization."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Pointers, DMA & File Handling",
      subtopics: ["Pointer arithmetic and pointer to pointer", "Dynamic memory allocation: malloc, calloc, realloc, free", "Structures and unions memory comparisons", "File handling: reading and writing text/binary records"],
      learningObjective: "Implement dynamic heap memory allocation and file persistence logic in C."
    }
  },
  {
    date: "2026-12-26",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "100 mins", studyType: "Practice",
      mainTopic: "BEE Circuit Schematics & Numerical Mastery",
      subtopics: ["Rectifier numericals: ripple factor, efficiency, PIV", "Zener diode series resistor and load current bounds", "Transistor DC load line and beta parameter calculations", "K-Map POS and SOP dual forms speed test"],
      learningObjective: "Master all numerical formulas and circuit diagram conventions in Electronics."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "BOC Writing Formats & Grammar",
      subtopics: ["Formal email writing guidelines and templates", "Business and official correspondence letters", "Technical reports and event report formats", "Précis writing and paragraph coherence"],
      learningObjective: "Produce polished formal business correspondence and technical project reports."
    }
  },
  {
    date: "2026-12-27",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "120 mins", studyType: "Test",
      mainTopic: "BEE Full Syllabus 3-Hour Timed Mock Paper",
      subtopics: ["Strict 3-hour exam simulation (Units 1, 2, 3, 4)", "Circuit diagrams, characteristic curves, derivations", "K-Map minimization and universal gate synthesis", "Target 55+/60 external marks"],
      learningObjective: "Evaluate examination pacing, presentation neatness, and accuracy on a full BEE mock paper."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "75 mins", studyType: "Revision",
      mainTopic: "BEE Mock Paper Error Analysis",
      subtopics: ["Reviewing all diagram labels and polarities", "Re-checking K-Map minimization groupings", "Correcting transistor bias calculation mistakes"],
      learningObjective: "Rectify errors and reinforce high-yield scoring sections."
    }
  },
  {
    date: "2026-12-28",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "100 mins", studyType: "Revision",
      mainTopic: "BEE Formula Flashcards & Question Bank",
      subtopics: ["Ripple factor, rectification efficiency, and form factor formulas", "Alpha-beta-gamma current amplification relations", "Boolean algebra theorems & De Morgan's laws", "Truth tables of logic gates and displays"],
      learningObjective: "Achieve instant recall of all electronic formulas, truth tables, and characteristics."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "80 mins", studyType: "Revision",
      mainTopic: "BOC Listening & Speaking Skills Review",
      subtopics: ["Active listening and barrier mitigation checklist", "7Cs of communication principles", "Phonetics and non-verbal kinesics review"],
      learningObjective: "Review foundational communication principles and definitions ahead of BOC prep."
    }
  },
  {
    date: "2026-12-29",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Final BEE Diagram & Derivations Polish",
      subtopics: ["Redrawing all core circuits from memory", "Zener regulator, Bridge rectifier, CE configuration curves", "Reviewing 4-variable K-Map groupings", "Exam kit (stationery, admit card) preparation"],
      learningObjective: "Finalize visual recall of electronic circuits and enter the examination with confidence."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Pre-Exam Calibrated Rest",
      subtopics: ["Calm mental review of question selection strategy", "Early sleep for peak analytical clarity tomorrow"],
      learningObjective: "Ensure maximum mental energy for tomorrow's Electronics examination."
    }
  },
  {
    date: "2026-12-30",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Basics of Electronics Engineering",
      subtopics: ["Paper 2 of Semester 1 Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Semiconductors, BJT, Digital, Gates)", "Max External Marks: 60 (3 Credits)"],
      learningObjective: "Execute the Electronics examination with high precision in circuit diagrams and derivations."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "60 mins", studyType: "Learning",
      mainTopic: "Post-Exam Reset & BOC Kick-Off",
      subtopics: ["Light break after Electronics paper", "Transition to next exam: Communication Skills (4 Jan)", "Literature review plan: Of Studies, Algernon, The Proposal, Toba Tek Singh"],
      learningObjective: "Reset mental state and commence the 4-day Communication Skills preparation block."
    }
  },

  // WEEK 10: 31 Dec – 6 Jan (BOC Sprint leading to 4 Jan Exam + Chemistry Kickoff)
  {
    date: "2026-12-31",
    slot1: {
      subject: "Basics of Communication Skills", unit: 3, duration: "100 mins", studyType: "Learning",
      mainTopic: "Literature Master Analysis: Essays & Short Fiction",
      subtopics: ["Francis Bacon's 'Of Studies': aphoristic wisdom & quotes", "Daniel Keyes' 'Flowers for Algernon': thematic depth & character arc", "Structuring high-scoring 10-mark literature answers", "Textual references and thematic summaries"],
      learningObjective: "Master in-depth textual analysis and essay responses for Bacon and Keyes."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Listening Skills & Note-Making Mastery",
      subtopics: ["Active, critical, and empathetic listening differences", "Overcoming psychological and environmental listening barriers", "Passage note-making with standard abbreviation key", "Drafting a concise, objective summary"],
      learningObjective: "Perfect note-making formatting and active listening barrier mitigation answers."
    }
  },
  {
    date: "2027-01-01",
    slot1: {
      subject: "Basics of Communication Skills", unit: 3, duration: "100 mins", studyType: "Learning",
      mainTopic: "Literature Master Analysis: Drama & Partition",
      subtopics: ["Anton Chekhov's 'The Proposal': farcical elements & satire", "Saadat Hasan Manto's 'Toba Tek Singh': sanity vs political madness", "Comparative character sketches (Lomov vs Bishan Singh)", "Writing structured critical commentary"],
      learningObjective: "Master dramatic satire in Chekhov and tragic allegorical analysis in Manto."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Speaking Skills & Professional Etiquettes",
      subtopics: ["Phonetics: vowels, diphthongs, and consonant articulation", "Public speaking confidence & delivery techniques", "Group discussion dynamics: roles and moderating etiquette", "7Cs of communication detailed case study"],
      learningObjective: "Consolidate oral communicative rubrics, phonetic clarity, and GD leadership techniques."
    }
  },
  {
    date: "2027-01-02",
    slot1: {
      subject: "Basics of Communication Skills", unit: 4, duration: "100 mins", studyType: "Practice",
      mainTopic: "Professional Writing Master Practice",
      subtopics: ["Writing formal emails (subject line, salutation, body, sign-off)", "Official complaint, recommendation, and inquiry letters", "Technical project report with abstract, findings, and conclusion", "Paragraph writing on contemporary engineering topics"],
      learningObjective: "Draft flawless professional correspondence and technical reports conforming to rubrics."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Précis Writing & Reading Comprehension",
      subtopics: ["Rules of précis writing (one-third length, indirect speech)", "Reading comprehension: skimming and scanning strategies", "Vocabulary building and contextual word substitution", "Eliminating grammatical redundancy"],
      learningObjective: "Master reading comprehension techniques and précis writing within word count boundaries."
    }
  },
  {
    date: "2027-01-03",
    slot1: {
      subject: "Basics of Communication Skills", unit: 1, duration: "120 mins", studyType: "Test",
      mainTopic: "BOC Full Syllabus 3-Hour Timed Mock Paper",
      subtopics: ["Complete 3-hour exam simulation (Units 1, 2, 3, 4)", "Literature questions: Bacon, Keyes, Chekhov, Manto", "Professional correspondence: letters, emails, reports", "Targeting 55+/60 external marks"],
      learningObjective: "Execute a full-length Communication Skills paper adhering to word counts and presentation rubrics."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "75 mins", studyType: "Revision",
      mainTopic: "Final BOC Review & Rest",
      subtopics: ["Reviewing all 4 literature summaries and quote sheets", "Writing format quick checklist (headers, salutations)", "Early rest for clear, expressive writing tomorrow"],
      learningObjective: "Consolidate literature themes and rest ahead of the examination."
    }
  },
  {
    date: "2027-01-04",
    slot1: {
      subject: "Basics of Communication Skills", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Basics of Communication Skills",
      subtopics: ["Paper 3 of Semester 1 Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Listening, Speaking, Reading/Literature, Writing)", "Max External Marks: 60 (2 Credits)"],
      learningObjective: "Conclude the Communication Skills examination with eloquence, neat handwriting, and structured formatting."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "60 mins", studyType: "Learning",
      mainTopic: "Post-Exam Reset & Chemistry Kick-Off",
      subtopics: ["Light break after Communication Skills exam", "Transition to next exam: Engineering Chemistry (9 Jan)", "4-day Chemistry intensive sprint overview (Units 1, 2, 3, 4)", "Reviewing water treatment formulas"],
      learningObjective: "Reset mental state and commence the 4-day intensive Engineering Chemistry sprint."
    }
  },
  {
    date: "2027-01-05",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "100 mins", studyType: "Practice",
      mainTopic: "Water Treatment Complete Mastery",
      subtopics: ["Hardness calculations and units of hardness", "EDTA complexometric titration equations and numericals", "Alkalinity determinations (P and M alkalinity)", "Lime-Soda process calculations and ion-exchange regeneration"],
      learningObjective: "Solve all numerical variations of EDTA titration and Lime-Soda water softening processes."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "100 mins", studyType: "Practice",
      mainTopic: "Fuels, Combustion & Bomb Calorimetry",
      subtopics: ["Gross vs Net calorific values and Dulong's formula", "Bomb calorimeter construction, cooling/acid corrections, calculation", "Proximate and ultimate analysis of coal numericals", "Corrosion mechanisms: wet/dry, galvanic, cathodic protection"],
      learningObjective: "Master coal analysis numericals, bomb calorimetry formulas, and corrosion control methods."
    }
  },
  {
    date: "2027-01-06",
    slot1: {
      subject: "Engineering Chemistry", unit: 3, duration: "100 mins", studyType: "Learning",
      mainTopic: "Spectroscopic Techniques Deep Dive",
      subtopics: ["Beer-Lambert law derivation and numerical problems", "UV-Visible spectroscopy: electronic transitions & shifts", "1H-NMR spectroscopy: chemical shift, TMS standard, spin-spin splitting", "Jablonski diagram: fluorescence vs phosphorescence"],
      learningObjective: "Interpret electronic and nuclear magnetic resonance spectra and solve spectrophotometric problems."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 4, duration: "100 mins", studyType: "Learning",
      mainTopic: "Material Chemistry & Green Chemistry",
      subtopics: ["Polymers: Teflon, Polyethylene (LDPE/HDPE), UF & Bakelite resins", "Biodegradable polymers: PHBV structure and applications", "Conducting polymers: Polyaniline conduction mechanism", "12 Principles of Green Chemistry & Biodiesel transesterification"],
      learningObjective: "Master industrial polymer synthesis reactions, green chemistry principles, and biodiesel preparation."
    }
  },

  // WEEK 11: 7–13 Jan (Chemistry Exam 9 Jan + C Programming Final Sprint to 13 Jan)
  {
    date: "2027-01-07",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Chemistry Comprehensive Derivations & Diagrams",
      subtopics: ["Redrawing: Bomb calorimeter, Zeolite plant, Ion exchange demineralizer", "UV-Vis spectrophotometer schematic", "EDTA-metal titration curves and equations", "Cathodic protection diagrams (sacrificial anode vs impressed current)"],
      learningObjective: "Consolidate all industrial plant schematics and chemical reaction mechanisms from memory."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Chemistry Numerical Speed Drills",
      subtopics: ["Timed solving: 4 Lime-Soda softening problems", "Timed solving: 3 Coal ultimate analysis problems", "Timed solving: 3 Beer-Lambert concentration problems"],
      learningObjective: "Ensure maximum speed and numerical precision across all mathematical topics in Chemistry."
    }
  },
  {
    date: "2027-01-08",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "120 mins", studyType: "Test",
      mainTopic: "Chemistry Full Syllabus 3-Hour Mock Paper",
      subtopics: ["Complete 3-hour exam simulation (Units 1, 2, 3, 4)", "Structured numericals, chemical equations, industrial diagrams", "Green chemistry principles and polymer applications", "Target 55+/60 external marks"],
      learningObjective: "Execute a full-length Chemistry mock examination to verify pacing and step presentation."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "75 mins", studyType: "Revision",
      mainTopic: "Final Chemistry Formula Scan & Rest",
      subtopics: ["Active recall of formulas (hardness, Dulong, bomb calorimeter, Beer-Lambert)", "Pack exam kit and scientific calculator", "Early rest for fresh mental energy tomorrow"],
      learningObjective: "Finalize formula memory and ensure physical and mental refreshment for the exam."
    }
  },
  {
    date: "2027-01-09",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Engineering Chemistry",
      subtopics: ["Paper 4 of Semester 1 Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Water, Fuels, Spectroscopy, Polymers)", "Max External Marks: 60 (4 Credits)"],
      learningObjective: "Complete the Chemistry examination with clean chemical equations and accurate numerical results."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "60 mins", studyType: "Learning",
      mainTopic: "Post-Exam Reset & Final C Sprint Kick-Off",
      subtopics: ["Short rest after Chemistry examination", "Transition to FINAL examination: C Programming (13 Jan)", "3-day intensive coding sprint plan: Syntax, Pointers, Arrays, Files", "Reviewing C compilation model and tokens"],
      learningObjective: "Reset mental state and initiate the final 3-day intensive C Programming sprint."
    }
  },
  {
    date: "2027-01-10",
    slot1: {
      subject: "Problem Solving Using C", unit: 2, duration: "100 mins", studyType: "Practice",
      mainTopic: "C Units 1 & 2 Complete Code Clinic",
      subtopics: ["Data types, type casting, and storage classes (auto, static, extern, register)", "Bitwise operators, shifts, and precedence output tracing", "Control structures: switch fall-through, while vs do-while", "Writing clean algorithms: Prime check, Armstrong, Fibonacci, Series"],
      learningObjective: "Master foundational C syntax, control flow logic, and operator precedence tracing questions."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "100 mins", studyType: "Practice",
      mainTopic: "Arrays, Sorting & Functions Mastery",
      subtopics: ["1D array sorting: Bubble sort, Selection sort implementations", "Binary search algorithm implementation with loop bounds", "2D array matrix operations: multiplication and transpose", "Passing 1D and 2D arrays to functions as pointers"],
      learningObjective: "Write clean modular C code for searching, sorting, and multi-dimensional matrix mathematics."
    }
  },
  {
    date: "2027-01-11",
    slot1: {
      subject: "Problem Solving Using C", unit: 4, duration: "100 mins", studyType: "Practice",
      mainTopic: "Pointers, Dynamic Memory & Structures",
      subtopics: ["Pointer arithmetic, dereferencing, and pointer to pointer", "Dynamic memory allocation: malloc, calloc, realloc, and free", "struct declaration, arrays of structures, and self-referential structures", "Unions vs structures memory alignment differences"],
      learningObjective: "Implement complex pointer manipulation, dynamic heap memory, and structured data records."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "100 mins", studyType: "Practice",
      mainTopic: "File Handling & 10 Golden C Programs",
      subtopics: ["fopen modes (r, w, a, r+, rb, wb) and fclose error checks", "Character, line, and formatted file I/O (fgetc, fgets, fscanf, fprintf)", "Binary file record manipulation using fread and fwrite", "Consolidating 10 golden university C programs on paper"],
      learningObjective: "Write robust file handling programs and practice handwritten code for university examinations."
    }
  },
  {
    date: "2027-01-12",
    slot1: {
      subject: "Problem Solving Using C", unit: 1, duration: "150 mins", studyType: "Test",
      mainTopic: "C Programming Full Syllabus 3-Hour Mock Paper",
      subtopics: ["Strict 3-hour exam simulation (Units 1, 2, 3, 4)", "Section A: Short syntax and output prediction questions", "Section B: Algorithm flowcharts and program writing", "Target 55+/60 external marks"],
      learningObjective: "Evaluate handwritten programming speed, syntax precision, and dry-run accuracy on a full mock exam."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "75 mins", studyType: "Revision",
      mainTopic: "Final C Code Polish & Calibrated Rest",
      subtopics: ["Reviewing standard library functions (stdio.h, stdlib.h, string.h)", "Format specifiers and escape sequences checklist", "Pack exam stationery and admit card", "Early restful sleep ahead of the final examination"],
      learningObjective: "Finalize mental program templates and rest well before tomorrow's final semester paper."
    }
  },
  {
    date: "2027-01-13",
    slot1: {
      subject: "Problem Solving Using C", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Problem Solving Using C",
      subtopics: ["FINAL PAPER of Semester 1 Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Intro, Tokens/Loops, Arrays/Functions, Pointers/Files)", "Max External Marks: 60 (3 Credits)"],
      learningObjective: "Conclude Semester 1 theory examinations with structured algorithms and clean C code."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "SEMESTER 1 MISSION ACCOMPLISHED!",
      subtopics: ["All 5 Theory Examinations Concluded (21 Credits Total)", "Engineering Mathematics-I (4cr) · Electronics (3cr) · Communication (2cr) · Chemistry (4cr) · C Programming (3cr)", "Practical laboratory assessments fulfilled", "Celebrate academic discipline and preparation excellence"],
      learningObjective: "Celebrate the successful conclusion of the 69-day Semester 1 Academic Mission."
    }
  }
];

// Helper to format days heading
function getDayHeading(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  return `${days[dt.getDay()]} — ${d} ${months[m - 1]} ${y}`;
}

function getDayOfWeek(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dt.getDay()];
}

const fullRoadmap = daysData.map((d) => {
  const isExamDay = [
    "2026-12-17",
    "2026-12-30",
    "2027-01-04",
    "2027-01-09",
    "2027-01-13"
  ].includes(d.date);

  const isSessionalDay = ["2026-12-07", "2026-12-08", "2026-12-09", "2026-12-10"].includes(d.date);

  return {
    date: d.date,
    dayHeading: getDayHeading(d.date),
    dayOfWeek: getDayOfWeek(d.date),
    isExamDay,
    isSessionalDay,
    slots: [
      {
        id: `slot-${d.date}-1`,
        slotNumber: 1,
        subject: d.slot1.subject,
        unit: d.slot1.unit,
        duration: d.slot1.duration,
        studyType: d.slot1.studyType,
        mainTopic: d.slot1.mainTopic,
        subtopics: d.slot1.subtopics,
        learningObjective: d.slot1.learningObjective,
        completed: false,
        notes: ""
      },
      {
        id: `slot-${d.date}-2`,
        slotNumber: 2,
        subject: d.slot2.subject,
        unit: d.slot2.unit,
        duration: d.slot2.duration,
        studyType: d.slot2.studyType,
        mainTopic: d.slot2.mainTopic,
        subtopics: d.slot2.subtopics,
        learningObjective: d.slot2.learningObjective,
        completed: false,
        notes: ""
      }
    ]
  };
});

const content = `// Auto-generated 69 days daily roadmap (6 November 2026 – 13 January 2027)
// Exactly 2 study slots per day, verified syllabus coverage, updated exam dates.

export const DAILY_ROADMAP_DAYS = ${JSON.stringify(fullRoadmap, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'dailyRoadmapData.js'), content, 'utf8');
console.log(`Successfully generated ${fullRoadmap.length} days (${fullRoadmap.length * 2} slots) into src/data/dailyRoadmapData.js`);
