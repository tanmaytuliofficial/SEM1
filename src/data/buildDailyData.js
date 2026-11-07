// Generator script for 64 days (11 Nov 2026 – 13 Jan 2027) with exactly 2 slots per day
// Redesigned with start date 11 November 2026, consolidating foundation topics with higher topic density.
import fs from 'fs';
import path from 'path';

const daysData = [
  // ==========================================
  // PHASE 1: CORE FOUNDATION & EXPANDED UNITS (11 Nov – 30 Nov 2026)
  // 20 Days = 40 Slots covering Units 1, 2, 3 across all 5 subjects
  // ==========================================
  {
    date: "2026-11-11",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "100 mins", studyType: "Learning",
      mainTopic: "Matrix Rank, Canonical Reduction & Linear Independence",
      subtopics: [
        "Elementary row and column operations",
        "Echelon form and Normal form [Ir | 0] reductions",
        "Rank determination of 3x3 and 3x4 matrices",
        "Gauss-Jordan method for matrix inversion",
        "Linear dependence and independence of vectors"
      ],
      learningObjective: "Master matrix rank computation, canonical reduction, and vector independence."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Water Hardness & Complexometric EDTA Method",
      subtopics: [
        "Temporary and permanent hardness definitions",
        "Hardness units and equivalencies (ppm, mg/L, °Fr, °Cl)",
        "Disodium EDTA complexometric titration principle",
        "Buffer solution (pH 10) & Eriochrome Black T indicator",
        "Quantitative calculations of Total, Temporary, and Permanent hardness"
      ],
      learningObjective: "Understand water hardness concepts and solve EDTA titration numerical problems."
    }
  },
  {
    date: "2026-11-12",
    slot1: {
      subject: "Problem Solving Using C", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "C Program Anatomy, Tokens & Storage Classes",
      subtopics: [
        "Structure of a C program & compilation pipeline",
        "Identifiers, keywords, and fundamental primitive data types",
        "Storage classes (auto, static, extern, register) and lifetimes",
        "Arithmetic, relational, logical, and bitwise operators",
        "Operator precedence, associativity, and type casting rules"
      ],
      learningObjective: "Master C token syntax, variable lifetimes, and operator evaluation rules."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Semiconductors & Power Rectifier Circuits",
      subtopics: [
        "Intrinsic vs extrinsic semiconductors (p-type & n-type)",
        "PN junction barrier potential and forward/reverse bias",
        "Half-wave rectifier derivation (ripple factor, efficiency, PIV)",
        "Center-tapped and Bridge full-wave rectifiers",
        "Capacitor filter operation and ripple factor reduction"
      ],
      learningObjective: "Derive performance parameters for half-wave and full-wave rectifier circuits."
    }
  },
  {
    date: "2026-11-13",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "100 mins", studyType: "Practice",
      mainTopic: "System of Linear Equations & Consistency Analysis",
      subtopics: [
        "Homogeneous linear systems AX = 0 (trivial vs non-trivial solutions)",
        "Non-homogeneous linear systems AX = B and augmented matrix [A|B]",
        "Rouché-Capelli consistency conditions (unique, infinite, no solution)",
        "Gauss elimination method with back substitution",
        "Consistency problems with unknown parameters (lambda and mu)"
      ],
      learningObjective: "Determine system consistency and solve linear equations using Gauss elimination."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Communication Process, 7Cs & Active Listening",
      subtopics: [
        "Definition and 7Cs of effective professional communication",
        "Communication cycle: sender, encoding, medium, receiver, feedback",
        "Physical, psychological, and semantic barriers to communication",
        "Active, critical, and empathetic listening styles",
        "Structured note-making techniques (Cornell method) & abbreviations"
      ],
      learningObjective: "Eliminate communication barriers and apply Cornell note-taking formats."
    }
  },
  {
    date: "2026-11-14",
    slot1: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Decision Branching & Iteration Constructs",
      subtopics: [
        "if, if-else, nested if-else, and dangling-else ambiguity",
        "switch-case with fall-through and break statement control",
        "while, do-while, and for loop comparison",
        "Loop control statements: break, continue, and goto semantics",
        "Algorithmic loop drills: Prime testing, Armstrong, and Fibonacci"
      ],
      learningObjective: "Implement complex branching logic and nested iterations for numerical algorithms."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "Alkalinity, Boiler Troubles & Lime-Soda Softening",
      subtopics: [
        "Phenolphthalein (P) & Methyl Orange (M) alkalinity titrations",
        "Boiler troubles: Scale, sludge, priming, foaming, caustic embrittlement",
        "Internal conditioning: Phosphate, colloidal, and calgon conditioning",
        "Cold and Hot Lime-Soda softening processes",
        "Lime-Soda stoichiometric chemical requirement numericals"
      ],
      learningObjective: "Perform stoichiometric chemical requirement calculations for boiler feed water."
    }
  },
  {
    date: "2026-11-15",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Zener Diode Regulation & Binary Number Systems",
      subtopics: [
        "Zener diode breakdown (Zener vs Avalanche mechanism)",
        "Zener diode as a shunt voltage regulator circuit design",
        "Binary, octal, decimal, and hexadecimal conversions",
        "1's complement and 2's complement representation",
        "Signed binary subtraction using 2's complement with overflow check"
      ],
      learningObjective: "Design Zener voltage regulator circuits and master 2's complement arithmetic."
    },
    slot2: {
      subject: "Mathematics-I", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Eigenvalues & Characteristic Vectors",
      subtopics: [
        "Characteristic equation |A - lambda*I| = 0",
        "Eigenvalues computation for 2x2 and 3x3 matrices",
        "Eigenvectors calculation for distinct and repeated eigenvalues",
        "Properties: sum of eigenvalues = trace, product = det(A)",
        "Eigenvalues of symmetric, orthogonal, and triangular matrices"
      ],
      learningObjective: "Calculate characteristic roots and linearly independent eigenvectors."
    }
  },
  {
    date: "2026-11-16",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "90 mins", studyType: "Learning",
      mainTopic: "Zeolite Softening, Ion Exchange & Desalination",
      subtopics: [
        "Permutit / Zeolite softening process and NaCl regeneration",
        "Demineralization / Ion-exchange resins (cation & anion exchangers)",
        "Regeneration reactions using dilute HCl and NaOH",
        "Reverse Osmosis (RO) semi-permeable membranes",
        "Electrodialysis setup and industrial utility"
      ],
      learningObjective: "Explain ion exchange softening and compare modern desalination methods."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "1D Arrays, Searching & Sorting Algorithms",
      subtopics: [
        "Array declaration and contiguous memory mapping",
        "Element traversal and boundary checking",
        "Linear search algorithm with time complexity",
        "Binary search algorithm on sorted vectors",
        "Bubble sort and selection sort implementations in C"
      ],
      learningObjective: "Implement searching and sorting algorithms on 1D contiguous arrays."
    }
  },
  {
    date: "2026-11-17",
    slot1: {
      subject: "Mathematics-I", unit: 2, duration: "100 mins", studyType: "Practice",
      mainTopic: "Cayley-Hamilton Theorem & Matrix Diagonalization",
      subtopics: [
        "Statement and proof verification of Cayley-Hamilton theorem",
        "Finding A^-1 and higher powers (e.g., A^4) using C-H theorem",
        "Similarity transformation and modal matrix P",
        "Orthogonal diagonalization of symmetric matrices D = P^-1*A*P",
        "Index, signature, and definiteness of quadratic forms"
      ],
      learningObjective: "Apply Cayley-Hamilton theorem and diagonalize real symmetric matrices."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "BJT Fundamentals & Operating Characteristics",
      subtopics: [
        "Physical construction and operation of NPN and PNP transistors",
        "Active, saturation, and cutoff biasing conditions",
        "Common Base (CB) and Common Emitter (CE) configurations",
        "Static input and output V-I characteristics of CE amplifier",
        "Current gain relationships: derivations of alpha, beta, and gamma"
      ],
      learningObjective: "Explain BJT transistor action and derive current amplification factors."
    }
  },
  {
    date: "2026-11-18",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Modular Functions, Scope & Recursion Mechanics",
      subtopics: [
        "Function prototype, definition, and invocation",
        "Pass by value vs Pass by address/reference mechanisms",
        "Scope, lifetime, and linkage of variables",
        "Recursion mechanics and stack frame call stacks",
        "Recursive implementations: Factorial, GCD, Tower of Hanoi"
      ],
      learningObjective: "Design modular programs using functions and recursive algorithm traces."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Phonetics, Oral Delivery & Professional Speaking",
      subtopics: [
        "Speech production organs and IPA overview",
        "English vowels, diphthongs, and consonant sounds",
        "Word stress, syllable division, and sentence intonation",
        "Public speaking anxiety management strategies",
        "Non-verbal communication: kinesics, proxemics, and paralinguistics"
      ],
      learningObjective: "Master correct phonetic pronunciation, vocal pitch, and non-verbal cues."
    }
  },
  {
    date: "2026-11-19",
    slot1: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Fuels Classification & Calorific Value Determination",
      subtopics: [
        "Primary, secondary, solid, liquid, and gaseous fuels classification",
        "Gross (HCV) and Net (LCV) calorific values definition",
        "Dulong's formula for theoretical calorific value",
        "Bomb calorimeter: construction, working procedure, and corrections",
        "Combustion numericals based on mass and air-fuel ratio"
      ],
      learningObjective: "Calculate calorific values and determine HCV using bomb calorimetry."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Logic Gates & Universal NAND/NOR Synthesis",
      subtopics: [
        "Basic logic gates: AND, OR, NOT operations and truth tables",
        "Universal logic gates: NAND and NOR gate properties",
        "Realizing AND, OR, NOT, XOR, XNOR using only NAND gates",
        "Realizing fundamental logic gates using only NOR gates",
        "Boolean algebra postulates, duality principle, and De Morgan's laws"
      ],
      learningObjective: "Synthesize combinational logic circuits using universal gates."
    }
  },
  {
    date: "2026-11-20",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "100 mins", studyType: "Learning",
      mainTopic: "Taylor & Maclaurin Series Expansions",
      subtopics: [
        "Taylor's theorem for functions of single variable with remainder",
        "Maclaurin series expansions: sin(x), cos(x), e^x, ln(1+x)",
        "Taylor series expansions about x = a in powers of (x - a)",
        "Indeterminate forms: 0/0 and infinity/infinity via L'Hopital rule",
        "Exponential indeterminate limits: 0^0, 1^infinity, infinity^0"
      ],
      learningObjective: "Expand single-variable functions into power series and evaluate indeterminate limits."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "2D Arrays & Matrix Mathematics Algorithms",
      subtopics: [
        "2D array memory representation: row-major vs column-major",
        "Matrix addition, subtraction, and scalar multiplication",
        "Matrix multiplication algorithm with dimension validations",
        "Matrix transpose and symmetry verification",
        "Row sums, column sums, and diagonal element algorithms"
      ],
      learningObjective: "Write robust 2D array programs implementing matrix algebraic operations."
    }
  },
  {
    date: "2026-11-21",
    slot1: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Coal Analysis & Carbonization Technologies",
      subtopics: [
        "Proximate analysis of coal: % moisture, volatile matter, ash, fixed carbon",
        "Ultimate analysis of coal: % Carbon, Hydrogen, Nitrogen, Sulfur, Oxygen",
        "Significance of proximate and ultimate parameters in combustion",
        "Metallurgical coke manufacturing: Otto Hoffmann's by-product oven",
        "Flue gas analysis using Orsat apparatus"
      ],
      learningObjective: "Perform proximate and ultimate analysis calculations for industrial coal grading."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Karnaugh Map (K-Map) Logic Simplification",
      subtopics: [
        "Canonical SOP (minterms) and POS (maxterms) expressions",
        "2-variable, 3-variable, and 4-variable Karnaugh Maps layout",
        "Grouping rules: pairs, quads, octets, and wrap-around adjacencies",
        "Don't care conditions (X) and realization of minimal SOP circuits",
        "Logic circuit schematic drafting for minimized expressions"
      ],
      learningObjective: "Minimize multi-variable Boolean switching expressions using 4-variable K-Maps."
    }
  },
  {
    date: "2026-11-22",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Asymptotes, Curvature & Mean Value Theorems",
      subtopics: [
        "Rolle's theorem & Lagrange's Mean Value Theorem verification",
        "Cauchy's generalized mean value theorem",
        "Asymptotes parallel to coordinate axes",
        "Oblique asymptotes y = mx + c of algebraic curves",
        "Radius of curvature rho in Cartesian coordinates [1+(y')^2]^(3/2) / y''"
      ],
      learningObjective: "Verify mean value theorems and compute asymptotes and radius of curvature."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Group Discussions, Debates & Reading Comprehension",
      subtopics: [
        "Dynamics of academic Group Discussions (initiation, moderation, summary)",
        "Handling interruptions and presenting balanced counterarguments",
        "Skimming and scanning techniques for technical research papers",
        "Vocabulary enhancement: Greek/Latin roots, prefixes, suffixes",
        "Francis Bacon's 'Of Studies': aphoristic philosophy analysis"
      ],
      learningObjective: "Excel in group discussion dynamics and interpret Bacon's essays."
    }
  },
  {
    date: "2026-11-23",
    slot1: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Pointers Fundamentals & Pointer Arithmetic",
      subtopics: [
        "Pointer variable declaration, initialization, and dereferencing (* and &)",
        "Pointer arithmetic: pointer offsets, increment, decrement",
        "Pointers and 1D arrays equivalence: *(arr + i)",
        "Passing pointers to functions (call by reference implementation)",
        "Pointers to pointers (double pointers) and arrays of pointers"
      ],
      learningObjective: "Master raw pointer memory addresses, dereferencing, and pointer arithmetic."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Transistor Biasing & Operating Point Stability",
      subtopics: [
        "DC load line and Quiescent point (Q-point) stabilization",
        "Instability factors: temperature drift and beta variation",
        "Fixed bias vs Collector-to-Base bias limitations",
        "Voltage divider bias (Self-bias) circuit design & stability factor S",
        "Thermal runaway prevention and heat sink utility"
      ],
      learningObjective: "Design voltage divider transistor biasing circuits with stable Q-points."
    }
  },
  {
    date: "2026-11-24",
    slot1: {
      subject: "Mathematics-I", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "Partial Derivatives & Euler's Theorem",
      subtopics: [
        "First and second order partial derivatives of multivariable functions",
        "Euler's theorem for homogeneous functions of degree n",
        "Verification of Euler's theorem for algebraic and trigonometric forms",
        "Total differential and chain rule for partial derivatives",
        "Jacobians definition J = ∂(u,v)/∂(x,y) and chain rule properties"
      ],
      learningObjective: "Evaluate multivariable partial derivatives and verify Euler's theorem."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Lubricants, Tribology & Analytical Spectroscopy",
      subtopics: [
        "Functions and mechanisms of lubrication: Fluid-film, Boundary, Extreme-pressure",
        "Physical properties: Viscosity, Viscosity Index, Flash & Fire point",
        "Beer-Lambert law mathematical derivation and limitations",
        "UV-Visible spectroscopy: chromophores, auxochromes, bathochromic shift",
        "1H-NMR spectroscopy: chemical shift (delta scale) and TMS reference"
      ],
      learningObjective: "Explain lubrication mechanisms and analyze spectroscopic principles."
    }
  },
  {
    date: "2026-11-25",
    slot1: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "String Processing & Dynamic Memory Allocation",
      subtopics: [
        "Null-terminated character arrays in memory",
        "String functions: strlen, strcpy, strcat, strcmp, strrev",
        "Implementing custom string algorithms without string.h",
        "Dynamic memory allocation functions: malloc(), calloc(), realloc(), free()",
        "Memory leak detection and dangling pointer prevention"
      ],
      learningObjective: "Implement robust string algorithms and dynamic heap memory allocation."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Combinational Logic: Adders & Multiplexers",
      subtopics: [
        "Half Adder: truth table, Boolean equations, and logic realization",
        "Full Adder: design using two half adders and OR gate",
        "Half Subtractor and Full Subtractor logic circuits",
        "4-bit Ripple Carry Binary Parallel Adder",
        "2:1 and 4:1 Multiplexer (MUX) architecture and truth tables"
      ],
      learningObjective: "Design binary arithmetic adders, subtractors, and multiplexers."
    }
  },
  {
    date: "2026-11-26",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "100 mins", studyType: "Practice",
      mainTopic: "Multivariable Extrema & Lagrange Multipliers",
      subtopics: [
        "Taylor's expansion for functions of two variables",
        "Maxima and minima of bivariate functions f(x,y)",
        "Discriminant test: rt - s^2 condition and saddle points",
        "Lagrange's method of undetermined multipliers for constrained extrema",
        "Applied word problems: shortest distance and maximum volume"
      ],
      learningObjective: "Locate unconstrained extrema and solve constrained optimization problems."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Phase Rule & One-Component Water System",
      subtopics: [
        "Gibbs Phase Rule statement: F = C - P + 2",
        "Definitions: Phase (P), Component (C), Degrees of Freedom (F)",
        "One-Component Water (H2O) system: curves, areas, and triple point",
        "Metastable supercooled water curve",
        "Two-component Lead-Silver (Pb-Ag) eutectic system & Pattinson's process"
      ],
      learningObjective: "Interpret phase diagrams for single and two-component metallurgical systems."
    }
  },
  {
    date: "2026-11-27",
    slot1: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Structures, Unions & File I/O Processing",
      subtopics: [
        "struct declaration, member access (dot operator), memory layout",
        "Array of structures (student record management)",
        "Unions vs Structures: shared memory allocation comparison",
        "File handling modes: 'r', 'w', 'a', 'rb', 'wb'",
        "File stream operations: fopen(), fclose(), fprintf(), fscanf(), fgets()"
      ],
      learningObjective: "Implement structured records and persistent file read/write routines."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature Masterworks & Professional Writing",
      subtopics: [
        "Daniel Keyes' 'Flowers for Algernon': thematic depth and character arc",
        "Anton Chekhov's 'The Proposal': satirical elements and dialogue dynamics",
        "Saadat Hasan Manto's 'Toba Tek Singh': allegory of partition",
        "Formal business letters: inquiry, quotation, and complaint formats",
        "Resume & Curriculum Vitae design: formatting professional credentials"
      ],
      learningObjective: "Analyze required literature stories and draft formal business correspondence."
    }
  },
  {
    date: "2026-11-28",
    slot1: {
      subject: "Mathematics-I", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Vector Differential Calculus: Gradient, Divergence, Curl",
      subtopics: [
        "Vector differential operator Del (∇)",
        "Gradient of a scalar field: physical meaning and directional derivative",
        "Unit normal vector to a level surface",
        "Divergence of a vector field: solenoidal vector condition (div V = 0)",
        "Curl of a vector field: irrotational vector condition (curl V = 0) & scalar potential"
      ],
      learningObjective: "Compute gradients, directional derivatives, divergence, and curl of vector fields."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Polymers & Commercial Engineering Materials",
      subtopics: [
        "Addition (chain-growth) vs Condensation (step-growth) polymerization",
        "Thermoplastic vs Thermosetting resins comparison",
        "Preparation, properties & uses: Bakelite, Nylon-6,6, PMMA",
        "Natural rubber vulcanization with sulfur",
        "Synthetic elastomers: Buna-S and Buna-N rubber properties"
      ],
      learningObjective: "Explain polymer synthesis and compare mechanical properties of commercial plastics."
    }
  },
  {
    date: "2026-11-29",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Learning",
      mainTopic: "Field Effect Transistors (JFET & MOSFET)",
      subtopics: [
        "Junction Field Effect Transistor (JFET): construction and pinch-off voltage",
        "JFET drain and transfer characteristics, Shockley's equation",
        "MOSFET: Depletion vs Enhancement mode operations",
        "Comparison of BJT vs FET (input impedance, thermal stability, noise)",
        "CMOS inverter basics and digital logic advantage"
      ],
      learningObjective: "Analyze field effect transistor operation and compare BJT vs FET characteristics."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "Comprehensive C Code Drills & Pointer Tracing",
      subtopics: [
        "Tracing complex pointer-with-array questions",
        "Dynamic array reallocation and memory leak avoidance",
        "Bitwise operators practice: masks, setting, clearing, toggling bits",
        "Comprehensive pre-sessional code review covering complete C syllabus"
      ],
      learningObjective: "Consolidate C programming expertise across pointers, structures, and files."
    }
  },
  {
    date: "2026-11-30",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional III Math Problem Solving Drill",
      subtopics: [
        "20-mark mock paper problem solving: Rank, linear independence, Gauss elimination",
        "Cayley-Hamilton inverse and power computation",
        "Taylor series expansion and indeterminate forms evaluation",
        "Speed and accuracy timed drill"
      ],
      learningObjective: "Achieve maximum marks speed on Units 1, 2, and 3 Mathematics problems."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "100 mins", studyType: "Test",
      mainTopic: "Sessional Chemistry Numerical Speed Test",
      subtopics: [
        "EDTA hardness 10-mark numerical practice",
        "Lime-Soda stoichiometric requirement problems",
        "Bomb calorimeter GCV & LCV calculation with corrections",
        "Proximate and ultimate coal analysis quantitative formulas"
      ],
      learningObjective: "Eliminate numerical calculation errors across water and fuel chemistry."
    }
  },

  // ==========================================
  // PHASE 2: SESSIONAL III FINAL SPRINT & EXAMS (1 Dec – 10 Dec 2026)
  // 10 Days = 20 Slots
  // ==========================================
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

  // ==========================================
  // PHASE 3: MATHEMATICS FINAL PREPARATION SPRINT (11 Dec – 16 Dec 2026)
  // 6 Days = 12 Slots dedicated to Math Unit 4 and complete 4-unit integration
  // ==========================================
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
      learningObjective: "Compute surface areas and volumetric bounds for revolution geometry."
    }
  },
  {
    date: "2026-12-15",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "150 mins", studyType: "Test",
      mainTopic: "Full Mathematics Mock Exam 1 (3-Hour Timed Paper)",
      subtopics: ["Strict exam-hall timed conditions (100 marks standard)", "Section A: 10 short compulsory questions", "Sections B, C, D: 4 long-answer problems from all 4 units", "Detailed self-marking against university rubrics"],
      learningObjective: "Simulate exact end-semester testing conditions and eliminate pacing errors."
    },
    slot2: {
      subject: "Mathematics-I", unit: 4, duration: "90 mins", studyType: "Revision",
      mainTopic: "Post-Mock Error Diagnostics & Weak Area Remediation",
      subtopics: ["Review incorrect steps in integrals or matrices", "Rework ambiguous limit calculations", "Re-verify Beta-Gamma reduction formulas", "Ensure clear notation for vectors and limits"],
      learningObjective: "Diagnose point deductions from Mock 1 and solidify step-by-step mathematical presentation."
    }
  },
  {
    date: "2026-12-16",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Complete Mathematics Formula & Derivation Recap",
      subtopics: ["Review 4-page master formula sheet", "All standard integral forms and transformations", "Matrix eigenvalue shortcuts and verification rules", "Calculator configuration (matrices, degrees/radians)"],
      learningObjective: "Achieve calm, photographic recall of every theorem, proof, and formula across all 4 units."
    },
    slot2: {
      subject: "Mathematics-I", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Exam Day Protocol, Mental Calm & Early Rest",
      subtopics: ["Stationery checklist: Scientific calculator, admit card, pens, ruler", "Time management plan for 3-hour exam (50m calculus, 45m matrices, 45m integrals, 40m revision)", "Nutritious meal and early sleep by 10 PM"],
      learningObjective: "Lock in mental serenity and physical readiness for the 17 December Mathematics-I Examination."
    }
  },

  // ==========================================
  // PHASE 4: OFFICIAL EXAM 1 & ELECTRONICS SPRINT (17 Dec – 30 Dec 2026)
  // 14 Days = 28 Slots (17 Dec Exam + 12 prep days + 30 Dec Exam)
  // ==========================================
  {
    date: "2026-12-17",
    slot1: {
      subject: "Mathematics-I", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Engineering Mathematics-I",
      subtopics: ["FIRST OFFICIAL PAPER of End Semester Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Units 1, 2, 3, 4)", "Max External Marks: 60 (4 Credits)"],
      learningObjective: "Execute the Mathematics-I end-semester exam with maximum precision and structured derivations."
    },
    slot2: {
      subject: "Mathematics-I", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Exam Decompression & Electronics Roadmap Transition",
      subtopics: ["Decompress and pack away Mathematics textbooks", "Review syllabus breakdown for Basics of Electronics Engineering", "12 full days available until 30 December exam", "Light evening walk and mental reset"],
      learningObjective: "Cleanly transition mental focus from Mathematics to Basics of Electronics Engineering."
    }
  },
  {
    date: "2026-12-18",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "120 mins", studyType: "Learning",
      mainTopic: "Semiconductor Diodes & Special Devices",
      subtopics: ["Energy band diagrams (conductors, insulators, semiconductors)", "PN junction barrier potential and temperature dependence", "Zener breakdown vs Avalanche breakdown characteristics", "Varactor diode, Photodiode, Solar cell, and Schottky diode principles"],
      learningObjective: "Derive diode equations and explain operational physics of specialized junction devices."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Practice",
      mainTopic: "Rectifiers, Filters & Voltage Regulators",
      subtopics: ["Derivations: Ripple factor for Half-wave, Full-wave center-tapped and Bridge rectifiers", "Efficiency eta and Peak Inverse Voltage (PIV) comparisons", "Capacitor and LC filter smoothing analysis", "Zener shunt voltage regulator: line and load regulation numericals"],
      learningObjective: "Solve numerical problems on rectifier ripple parameters and Zener regulator circuit design."
    }
  },
  {
    date: "2026-12-19",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "120 mins", studyType: "Learning",
      mainTopic: "BJT Configurations & Small Signal Models",
      subtopics: ["NPN vs PNP construction and current flow equations (IE = IB + IC)", "Common Base (CB), Common Emitter (CE), Common Collector (CC) configurations", "Input and output static characteristics of CE amplifier", "Hybrid (h-parameter) model of CE transistor equivalent circuit"],
      learningObjective: "Analyze BJT configuration topologies and develop low-frequency h-parameter models."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Transistor Biasing & Stability Factors",
      subtopics: ["DC load line construction and Q-point selection on CE curves", "Stability factor S = dIC/dICO definition and significance", "Fixed bias and Collector-to-Base bias analysis", "Voltage divider bias (Self-bias) circuit design and stability derivation"],
      learningObjective: "Calculate exact operating points and stability factors for voltage divider bias networks."
    }
  },
  {
    date: "2026-12-20",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "120 mins", studyType: "Learning",
      mainTopic: "Field Effect Transistors: JFET & MOSFET",
      subtopics: ["Junction Field Effect Transistor (JFET): construction and operation", "Pinch-off voltage Vp and channel ohmic region", "JFET drain and transfer characteristics (Shockley's equation)", "MOSFET: Depletion type vs Enhancement type construction and V-I curves"],
      learningObjective: "Explain field effect transistor operation and compare JFET vs MOSFET performance metrics."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "FET Biasing & BJT vs FET Comparisons",
      subtopics: ["Fixed bias and Self-bias networks for JFET amplifiers", "Graphical analysis of JFET Q-point using transfer curves", "Comprehensive comparison table: BJT vs JFET vs MOSFET", "Input impedance, thermal stability, and noise figure distinctions"],
      learningObjective: "Design JFET self-bias networks and articulate comparative advantages of field-effect devices."
    }
  },
  {
    date: "2026-12-21",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "120 mins", studyType: "Practice",
      mainTopic: "Number Systems, Signed Arithmetic & Codes",
      subtopics: ["Radix conversions: Binary, Octal, Decimal, Hexadecimal, Base-r", "Signed magnitude, 1's complement, and 2's complement representations", "Binary addition, subtraction using 2's complement with overflow rules", "BCD (8421), Excess-3, Gray code, and alphanumeric ASCII codes"],
      learningObjective: "Perform conversions, signed complement arithmetic, and code translations without errors."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Boolean Algebra Theorems & Standard Forms",
      subtopics: ["Boolean postulates: Huntington's axioms and algebraic identities", "De Morgan's first and second theorems with truth table proofs", "Duality principle and Shannon's expansion theorem", "Canonical SOP (minterms) and POS (maxterms) standard representations"],
      learningObjective: "Apply Boolean algebraic postulates and transform functions into canonical minterm expansions."
    }
  },
  {
    date: "2026-12-22",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "120 mins", studyType: "Practice",
      mainTopic: "Logic Gates & Universal Circuit Synthesis",
      subtopics: ["Basic gates: AND, OR, NOT operations, symbols, and truth tables", "Universal gates: NAND and NOR synthesis of all basic and compound gates", "Exclusive-OR (XOR) and Exclusive-NOR (XNOR) properties and parity generation", "NAND-NAND and NOR-NOR two-level logic implementations"],
      learningObjective: "Synthesize arbitrary multi-variable logic functions exclusively using universal gate architectures."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "K-Map Simplification: 3 and 4 Variables",
      subtopics: ["K-Map grid layout, Gray code adjacency, and cell numbering", "Grouping rules: pairs (reduce 1 var), quads (reduce 2 vars), octets (reduce 3 vars)", "Overlapping groups, wrap-around adjacencies, and redundant group elimination", "Don't care conditions (X) and realization of minimal SOP circuits"],
      learningObjective: "Minimize complex 4-variable Boolean switching functions using systematic K-Map reduction."
    }
  },
  {
    date: "2026-12-23",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "120 mins", studyType: "Learning",
      mainTopic: "Combinational Circuits: Adders & Subtractors",
      subtopics: ["Half Adder: truth table, Boolean equations, and logic realization", "Full Adder: design using two half adders and OR gate", "Half Subtractor and Full Subtractor logic circuits", "4-bit Ripple Carry Binary Parallel Adder (7483 architecture)"],
      learningObjective: "Design and explain operation of fundamental binary addition and subtraction logic circuits."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Multiplexers, Encoders & Decoders",
      subtopics: ["Multiplexers (MUX): 2:1, 4:1, and 8:1 architecture and truth tables", "Implementing Boolean functions using multiplexers without extra gates", "Demultiplexers (DEMUX) and Decoder circuits (3-to-8 decoder)", "Priority Encoders and BCD to 7-segment display decoders"],
      learningObjective: "Design multiplexer-based data routing networks and display decoder drivers."
    }
  },
  {
    date: "2026-12-24",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Electronics Comprehensive Circuit Schematic Review",
      subtopics: ["Redraw all diode circuits: rectifiers, clippers, clampers, regulators", "Redraw CE transistor bias networks and CE amplifier circuit with capacitors", "Redraw JFET and MOSFET cross-sectional structures and symbols", "Redraw 4-bit parallel adder and 4:1 MUX internal logic diagrams"],
      learningObjective: "Memorize and reproduce exact circuit schematics, component polarities, and pin assignments."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 2, duration: "90 mins", studyType: "Revision",
      mainTopic: "Derivations & Formula Sheet Consolidation",
      subtopics: ["Assemble 3-page master formula sheet for Electronics", "Review rectifier ripple factor derivations (HWR = 1.21, FWR = 0.482)", "Review transistor alpha vs beta relations: beta = alpha / (1 - alpha)", "Review stability factor formulas S = (1+beta) / (1 - beta*(dIB/dIC))"],
      learningObjective: "Lock in all mathematical derivations and analytical parameters for Electronics Unit 1 and 2."
    }
  },
  {
    date: "2026-12-25",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "120 mins", studyType: "Practice",
      mainTopic: "Digital Logic Speed Drilling: PYQ Focus",
      subtopics: ["Solve 10 previous years' 4-variable K-Map problems under 5 minutes each", "Solve 5 universal gate realization questions", "Solve 5 complement arithmetic subtraction questions with overflow flags", "Verify Boolean identity proofs using algebraic and truth table methods"],
      learningObjective: "Achieve 100% speed and precision on Units 3 and 4 digital electronics university questions."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Special Diodes & Optoelectronic Review",
      subtopics: ["Zener vs Avalanche breakdown comparative table", "Photodiode reverse-bias operation and V-I curves", "Light Emitting Diode (LED): materials (GaAs, GaP) and direct bandgap physics", "Varactor diode capacitance-voltage relationship C proportional to V^-1/2"],
      learningObjective: "Master short-answer 5-mark theory questions on optoelectronic and specialized diode devices."
    }
  },
  {
    date: "2026-12-26",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "150 mins", studyType: "Test",
      mainTopic: "Full Electronics Mock Exam 1 (3-Hour Timed Paper)",
      subtopics: ["Full syllabus mock paper (60 external marks format)", "Section A: 10 compulsory questions covering all 4 units", "Section B: Rectifiers and BJT characteristics questions", "Section C: FET amplifiers, K-Maps, and combinational adders/multiplexers"],
      learningObjective: "Evaluate comprehensive preparation under simulated 3-hour examination constraints."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Mock 1 Error Analysis & Circuit Diagram Clean-up",
      subtopics: ["Identify dropped marks: missing axis labels, incomplete formulas, logic errors", "Redraw any messy circuit diagrams with proper ruler lines and labels", "Practice neat handwriting presentation for derivations", "Review university marking scheme criteria"],
      learningObjective: "Refine circuit drawing neatness and eliminate recurring algebraic slip-ups."
    }
  },
  {
    date: "2026-12-27",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Complete Units 1 & 2 High-Yield Question Sprint",
      subtopics: ["Bridge rectifier with capacitor filter derivation walkthrough", "CE transistor configuration input/output curves explanation walkthrough", "Voltage divider bias stability factor proof walkthrough", "JFET pinch-off and transfer characteristics derivation walkthrough"],
      learningObjective: "Rehearse comprehensive 12-mark university question answers for analog electronics."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 3, duration: "90 mins", studyType: "Revision",
      mainTopic: "Complete Units 3 & 4 High-Yield Question Sprint",
      subtopics: ["Universal NAND realization of Full Adder walkthrough", "4-variable K-Map with 3 don't cares step-by-step presentation", "8:1 MUX realization of 4-variable logic function walkthrough", "2's complement signed arithmetic boundary case walkthrough"],
      learningObjective: "Rehearse comprehensive 12-mark university question answers for digital electronics."
    }
  },
  {
    date: "2026-12-28",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Final Formula Sheet & Rapid Definition Recall",
      subtopics: ["Active recall test: recite all 25 core Electronics formulas from blank paper", "Define: PIV, Ripple factor, Alpha, Beta, Stability factor, Pinch-off, Minterm", "Review common exam traps: active region biasing polarities, inverted K-Map cells", "Final check of all question choices across previous 5 years' papers"],
      learningObjective: "Attain instant mental retrieval of every formula, definition, and circuit schematic."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Mental Serenity & Physical Preparation",
      subtopics: ["Admit card, stationery, scientific calculator checked and packed", "Restful evening review without learning new topics", "Nutritious meal and proper sleep by 10 PM"],
      learningObjective: "Attain physical rest and peak cognitive readiness for tomorrow's Electronics exam."
    }
  },
  {
    date: "2026-12-29",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "90 mins", studyType: "Revision",
      mainTopic: "Pre-Exam Formula Walkthrough & Calm Review",
      subtopics: ["Glance through master circuit diagram sheet one last time", "Review 4-variable K-Map grouping rules", "Verify calculator radix mode (HEX, DEC, BIN)", "Relaxation and confidence reinforcement"],
      learningObjective: "Calm final review of key circuit schematics and digital formulas ahead of exam morning."
    },
    slot2: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Early Rest & Exam Day Focus",
      subtopics: ["Early dinner and complete mental rest", "Mental walkthrough of exam timing: 45 min per section", "Early night for fresh morning performance"],
      learningObjective: "Arrive at optimal rest state for the 30 December Electronics Engineering exam."
    }
  },
  {
    date: "2026-12-30",
    slot1: {
      subject: "Basics of Electronics Engineering", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Basics of Electronics Engineering",
      subtopics: ["SECOND OFFICIAL PAPER of End Semester Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Units 1, 2, 3, 4)", "Max External Marks: 60 (3 Credits)"],
      learningObjective: "Deliver precise schematics, accurate derivations, and minimal K-Maps in the Electronics exam."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Electronics Decompression & BOC Roadmap Kickoff",
      subtopics: ["Pack away Electronics materials", "Review schedule for Basics of Communication Skills (Exam on 4 January)", "4 full days to master formats, vocabulary, and literature stories", "Light reading of short story summaries in the evening"],
      learningObjective: "Transition mental focus smoothly into Basics of Communication Skills preparation."
    }
  },

  // ==========================================
  // PHASE 5: BASICS OF COMMUNICATION SKILLS SPRINT (31 Dec 2026 – 4 Jan 2027)
  // 5 Days = 10 Slots (4 prep days + 4 Jan Exam)
  // ==========================================
  {
    date: "2026-12-31",
    slot1: {
      subject: "Basics of Communication Skills", unit: 1, duration: "120 mins", studyType: "Learning",
      mainTopic: "Communication Theory, Models & Barriers",
      subtopics: ["Shannon-Weaver and Berlo's SMCR communication models", "The 7Cs of professional communication in detail with examples", "Internal, external, organizational, and socio-psychological barriers", "Active vs passive listening: strategies for overcoming perceptual biases", "Note-taking and note-making: Cornell layout and summary methods"],
      learningObjective: "Master foundational communication theory, 7Cs rubrics, and structural barrier analysis."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Phonetics, Pronunciation & Oral Delivery",
      subtopics: ["International Phonetic Alphabet (IPA): 44 English speech sounds", "20 vowels (12 monophthongs + 8 diphthongs) and 24 consonants", "Syllable division and primary/secondary word stress rules", "Intonation contours: falling, rising, fall-rise in questions and statements", "Non-verbal communication: kinesics, oculesics, haptics, and proxemics"],
      learningObjective: "Write phonetic transcriptions, mark syllable stress, and explain non-verbal communication."
    }
  },
  {
    date: "2027-01-01",
    slot1: {
      subject: "Basics of Communication Skills", unit: 3, duration: "120 mins", studyType: "Learning",
      mainTopic: "Literature Masterworks: Bacon & Daniel Keyes",
      subtopics: ["Francis Bacon's 'Of Studies': aphoristic prose style, historical context, Latinisms", "Three chief functions of studies: delight, ornament, ability", "Curing mental diseases through specific studies (history, mathematics, philosophy)", "Daniel Keyes' 'Flowers for Algernon': thematic depth and narrative structure", "The Algernon-Gordon effect: psychological, ethical, and societal implications"],
      learningObjective: "Produce sophisticated textual analysis and structured long-answer literary essays."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Literature Masterworks: Chekhov & Manto",
      subtopics: ["Anton Chekhov's 'The Proposal': farce, satire, and character caricatures (Lomov, Natalya, Chubukov)", "Oxen Meadows dispute and petty bourgeois materialism", "Saadat Hasan Manto's 'Toba Tek Singh': partition trauma and asylum allegory", "Bishan Singh's symbolic identity and tragic death in no man's land", "Critical comparison of dramatic satire vs psychological tragedy"],
      learningObjective: "Analyze Chekhov's comic satire and Manto's partition allegory for examination questions."
    }
  },
  {
    date: "2027-01-02",
    slot1: {
      subject: "Basics of Communication Skills", unit: 4, duration: "120 mins", studyType: "Practice",
      mainTopic: "Professional Writing: Formal Letters & Emails",
      subtopics: ["Standard layout of formal letters: block vs semi-block format", "Business letters: inquiry letters, quotation requests, and order placement", "Sales letters and persuasive writing strategies (AIDA model)", "Complaint and adjustment letters: maintaining professional diplomacy", "Official email etiquette: subject line precision, salutations, attachments"],
      learningObjective: "Draft flawlessly formatted formal letters, business inquiries, and official correspondence."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "Technical Reports & Resume Engineering",
      subtopics: ["Structure of technical reports: title, executive summary, methodology, findings, recommendations", "Progress reports, laboratory reports, and feasibility reports", "Modern Resume vs Curriculum Vitae (CV) distinction", "Reverse chronological resume layout: crafting impactful action-verb bullet points", "Writing tailored cover letters for engineering job applications"],
      learningObjective: "Format structured technical progress reports and engineer FAANG-grade technical resumes."
    }
  },
  {
    date: "2027-01-03",
    slot1: {
      subject: "Basics of Communication Skills", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Grammar, Vocabulary & Reading Comprehension Drill",
      subtopics: ["Subject-verb agreement (concord) edge case rules", "Active vs passive voice transformation for technical scientific writing", "Direct vs indirect reported speech rules and punctuation", "Commonly confused word pairs (homophones, homonyms) and idioms", "Unseen technical passage comprehension practice: title, summary, inference"],
      learningObjective: "Ensure zero grammatical deductions and sharpen reading comprehension accuracy."
    },
    slot2: {
      subject: "Basics of Communication Skills", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Master Formats Sheet & Literature Quotes Recap",
      subtopics: ["Review 2-page cheat sheet of letter, email, report, and resume templates", "Review high-yield quotations from Bacon, Keyes, Chekhov, and Manto", "Verify stationery, pens, admit card for tomorrow morning", "Early restful sleep by 10 PM"],
      learningObjective: "Consolidate writing templates and literature quotes ahead of the 4 January examination."
    }
  },
  {
    date: "2027-01-04",
    slot1: {
      subject: "Basics of Communication Skills", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Basics of Communication Skills",
      subtopics: ["THIRD OFFICIAL PAPER of End Semester Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Theory, Phonetics, Literature, Formats)", "Max External Marks: 60 (2 Credits)"],
      learningObjective: "Deliver eloquent essay responses, precise writing formats, and sound textual analyses."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Communication Decompression & Chemistry Sprint Kickoff",
      subtopics: ["Pack away Communication Skills materials", "Review schedule for Engineering Chemistry (Exam on 9 January)", "4 full days available to master water, fuels, lubricants, phase rule, polymers", "Review high-weightage numerical formulas in the evening"],
      learningObjective: "Shift focus decisively into Engineering Chemistry preparation."
    }
  },

  // ==========================================
  // PHASE 6: ENGINEERING CHEMISTRY SPRINT (5 Jan – 9 Jan 2027)
  // 5 Days = 10 Slots (4 prep days + 9 Jan Exam)
  // ==========================================
  {
    date: "2027-01-05",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "120 mins", studyType: "Practice",
      mainTopic: "Water Technology & Industrial Softening Numericals",
      subtopics: ["Hardness calculations from EDTA titration data: standard numerical problems", "Alkalinity determinations: phenolphthalein and methyl orange relationship table", "Boiler troubles: caustic embrittlement and scale/sludge reactions", "Lime-Soda process: cold and hot process stoichiometric calculation numericals", "Zeolite process and Ion-exchange demineralization numericals"],
      learningObjective: "Solve complex numerical problems on water hardness, alkalinity, and lime-soda softening."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Fuels & Combustion Calorific Calculations",
      subtopics: ["Gross and Net calorific value calculations using Dulong's formula", "Bomb calorimeter: construction, working procedure, cooling corrections, water equivalent", "Boy's gas calorimeter for gaseous fuels", "Proximate and ultimate analysis calculations for commercial coal samples", "Theoretical air requirement and flue gas volumetric analysis (Orsat apparatus)"],
      learningObjective: "Perform quantitative calculations for calorific value, coal analysis, and combustion air requirements."
    }
  },
  {
    date: "2027-01-06",
    slot1: {
      subject: "Engineering Chemistry", unit: 3, duration: "120 mins", studyType: "Learning",
      mainTopic: "Phase Rule & Metallurgical Alloys",
      subtopics: ["Derivation of Gibbs Phase Rule F = C - P + 2", "Terms explanation: Phase, Component, Degrees of freedom with chemical examples", "One-Component Water (H2O) system: phase diagram, curves, areas, triple point, metastable curve", "Two-Component Lead-Silver (Pb-Ag) system: eutectic point, Pattinson's desilverization process", "Two-Component Zinc-Magnesium (Zn-Mg) congruent melting point system"],
      learningObjective: "Derive the Gibbs phase rule and analyze one-component and two-component phase diagrams."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 3, duration: "90 mins", studyType: "Learning",
      mainTopic: "Lubricants, Tribology & Industrial Specifications",
      subtopics: ["Mechanism of lubrication: Hydrodynamic (thick film), Boundary (thin film), Extreme pressure", "Classification of lubricants: liquid, semi-solid (greases), solid (graphite, MoS2)", "Viscosity and Viscosity Index (Dean & Davis method)", "Flash point and Fire point determination (Pensky-Martens closed cup apparatus)", "Cloud point, Pour point, Saponification number, and Acid value"],
      learningObjective: "Explain lubrication mechanisms and evaluate critical lubricant testing parameters."
    }
  },
  {
    date: "2027-01-07",
    slot1: {
      subject: "Engineering Chemistry", unit: 4, duration: "120 mins", studyType: "Learning",
      mainTopic: "Polymers & Advanced Engineering Materials",
      subtopics: ["Functionality and degree of polymerization", "Mechanism of addition (free-radical, ionic) and condensation polymerization", "Thermoplastics vs Thermosetting plastics: structural and property distinctions", "Synthesis, properties & engineering uses: Bakelite, Nylon-6,6, PMMA, Polycarbonates", "Elastomers: natural rubber structure, sulfur vulcanization chemistry, Buna-S and Buna-N"],
      learningObjective: "Explain polymerization mechanisms and compare mechanical properties of commercial plastics."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 4, duration: "90 mins", studyType: "Learning",
      mainTopic: "Corrosion Science & Protection Engineering",
      subtopics: ["Chemical (dry) corrosion: Pilling-Bedworth rule for oxide film stability", "Electrochemical (wet) corrosion mechanism: hydrogen evolution vs oxygen absorption", "Galvanic corrosion, differential aeration corrosion (pitting, waterline)", "Factors influencing corrosion: nature of metal and environmental conditions", "Cathodic protection: sacrificial anode vs impressed current cathodic methods"],
      learningObjective: "Analyze electrochemical corrosion mechanisms and design industrial cathodic protection systems."
    }
  },
  {
    date: "2027-01-08",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "120 mins", studyType: "Revision",
      mainTopic: "Chemistry Master Formula & Diagram Sheet Assembly",
      subtopics: ["Assemble 4-page master formula sheet: EDTA, Lime-Soda, Bomb, Proximate, Phase rule", "Redraw all plant diagrams: Demineralization plant, Bomb calorimeter, Otto Hoffmann's oven", "Redraw phase diagrams: Water system and Lead-Silver system with labeled axes", "Review all 25 high-frequency university exam derivations"],
      learningObjective: "Consolidate all numerical formulas, chemical reactions, and industrial schematics."
    },
    slot2: {
      subject: "Engineering Chemistry", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Pre-Exam Numerical Run & Rest",
      subtopics: ["Rework 3 standard numerical problems (one EDTA, one Lime-Soda, one Bomb calorimeter)", "Admit card, calculator, pens checked and ready", "Nutritious meal and early sleep by 10 PM"],
      learningObjective: "Achieve calm, confident mental state ahead of the 9 January Chemistry examination."
    }
  },
  {
    date: "2027-01-09",
    slot1: {
      subject: "Engineering Chemistry", unit: 1, duration: "180 mins", studyType: "Official Exam",
      mainTopic: "OFFICIAL EXAM: Engineering Chemistry",
      subtopics: ["FOURTH OFFICIAL PAPER of End Semester Examinations", "Time: 09:30 AM – 12:30 PM (3 Hours)", "Full Syllabus (Water, Fuels, Lubricants/Phase Rule, Polymers/Corrosion)", "Max External Marks: 60 (4 Credits)"],
      learningObjective: "Execute the Chemistry exam targeting full numerical marks and neat plant diagrams."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 1, duration: "60 mins", studyType: "Revision",
      mainTopic: "Chemistry Decompression & C Programming Sprint Kickoff",
      subtopics: ["Pack away Chemistry materials", "Review schedule for Problem Solving Using C (Final Exam on 13 January)", "3 full days available for intensive coding and algorithm revision", "Review core C program syntax and pointer conventions in the evening"],
      learningObjective: "Transition mental focus to the final sprint: Problem Solving Using C."
    }
  },

  // ==========================================
  // PHASE 7: PROBLEM SOLVING USING C INTENSIVE SPRINT (10 Jan – 13 Jan 2027)
  // 4 Days = 8 Slots (3 prep days + 13 Jan Final Exam)
  // ==========================================
  {
    date: "2027-01-10",
    slot1: {
      subject: "Problem Solving Using C", unit: 1, duration: "120 mins", studyType: "Learning",
      mainTopic: "Computer Architecture, Algorithms & C Syntax",
      subtopics: ["Block diagram of a computer: ALU, Control Unit, Memory, I/O devices", "Algorithms vs Flowcharts: design conventions, pseudo-code standards", "Compilation stages: Preprocessor, Compiler, Assembler, Linker, Loader", "Constants, variables, keywords, and data type ranges in 32/64-bit systems", "Operator precedence, associativity, bitwise operators, and expression evaluation"],
      learningObjective: "Master foundational computing concepts, algorithmic flowcharts, and C operator precedence."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 2, duration: "90 mins", studyType: "Practice",
      mainTopic: "Control Structures & Iteration Mechanics",
      subtopics: ["Decision making: if, if-else, nested if, and switch-case with fall-through", "Looping constructs: while, do-while, for loops comparison", "Break, continue, goto statements and infinite loop pitfalls", "Implementation: Prime testing, Armstrong numbers, Palindrome numbers, Fibonacci series", "Pattern printing logic and nested loop mechanics"],
      learningObjective: "Write bug-free conditional branching and nested iteration algorithms in clean C syntax."
    }
  },
  {
    date: "2027-01-11",
    slot1: {
      subject: "Problem Solving Using C", unit: 3, duration: "120 mins", studyType: "Practice",
      mainTopic: "Arrays & Modular Function Engineering",
      subtopics: ["1D Arrays: declaration, memory layout, linear search and binary search", "Sorting: Bubble sort, Selection sort, Insertion sort implementations", "2D Arrays: row-major vs column-major order, matrix addition, multiplication, transpose", "Functions: declaration, definition, pass-by-value vs pass-by-reference", "Recursion mechanics: stack frames, base cases, Factorial, GCD, Tower of Hanoi"],
      learningObjective: "Implement searching, sorting, matrix manipulations, and recursive algorithms in C."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 3, duration: "90 mins", studyType: "Practice",
      mainTopic: "String Algorithms & Character Arrays",
      subtopics: ["Null-terminated character arrays in memory", "Manual coding: strlen, strcpy, strcat, strcmp, strrev without string.h", "String pallindrome check, vowel counting, and word counting", "Array of strings (2D character array) and alphabetical sorting", "Command-line arguments: argc and argv processing"],
      learningObjective: "Master string manipulation algorithms and command-line argument processing."
    }
  },
  {
    date: "2027-01-12",
    slot1: {
      subject: "Problem Solving Using C", unit: 4, duration: "120 mins", studyType: "Practice",
      mainTopic: "Pointers, Dynamic Memory & Structures",
      subtopics: ["Pointer fundamentals: address-of (&) and dereference (*) operators", "Pointer arithmetic: increments, decrements, pointer subtraction", "Passing pointers to functions and dynamic memory allocation: malloc, calloc, realloc, free", "Structures: declaration, memory alignment, nested structures, array of structures", "Unions vs Structures: shared memory allocation and union access"],
      learningObjective: "Master raw pointers, heap memory allocation, and structured record engineering in C."
    },
    slot2: {
      subject: "Problem Solving Using C", unit: 4, duration: "90 mins", studyType: "Practice",
      mainTopic: "File Handling & Master Code Snippets Review",
      subtopics: ["File handling: fopen, fclose, fprintf, fscanf, fgetc, fputc, fgets, fputs", "Binary files: fread and fwrite for structure records", "Error handling: feof, ferror, and rewind functions", "Review 15 essential university C programs on paper with neat comments", "Admit card, pens, and exam kit checklist for the grand finale"],
      learningObjective: "Write persistent file processing routines and prepare for the final examination."
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
      learningObjective: "Celebrate the successful conclusion of the 64-day Semester 1 Academic Mission."
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

const content = `// Auto-generated 64 days daily roadmap (11 November 2026 – 13 January 2027)
// Exactly 2 study slots per day, verified syllabus coverage, updated exam dates.

export const DAILY_ROADMAP_DAYS = ${JSON.stringify(fullRoadmap, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'dailyRoadmapData.js'), content, 'utf8');
console.log(`Successfully generated ${fullRoadmap.length} days (${fullRoadmap.length * 2} slots) into src/data/dailyRoadmapData.js`);
