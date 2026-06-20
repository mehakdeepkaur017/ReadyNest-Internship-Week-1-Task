const fs = require('fs');
const path = require('path');

const factsDB = {
  mathematics: {
    easy: [
      { t: "Arithmetic", q: "What is the result of adding two numbers called?", a: "Sum", f: ["Difference", "Product", "Quotient"] },
      { t: "Geometry", q: "What shape has exactly three sides?", a: "Triangle", f: ["Square", "Circle", "Pentagon"] },
      { t: "Fractions", q: "What is the top number of a fraction called?", a: "Numerator", f: ["Denominator", "Divisor", "Base"] },
      { t: "Geometry", q: "What is the distance around a circle called?", a: "Circumference", f: ["Diameter", "Radius", "Area"] },
      { t: "Algebra", q: "What is an unknown number represented by a letter called?", a: "Variable", f: ["Constant", "Coefficient", "Exponent"] }
    ],
    medium: [
      { t: "Geometry", q: "What theorem states a² + b² = c² for a right triangle?", a: "Pythagorean Theorem", f: ["Fermat's Theorem", "Binomial Theorem", "Euler's Formula"] },
      { t: "Algebra", q: "What is the mathematical term for the 'steepness' of a line?", a: "Slope", f: ["Intercept", "Origin", "Tangent"] },
      { t: "Statistics", q: "What is the middle value in a sorted list of numbers?", a: "Median", f: ["Mean", "Mode", "Range"] },
      { t: "Trigonometry", q: "Which trigonometric function is defined as opposite over adjacent?", a: "Tangent", f: ["Sine", "Cosine", "Secant"] },
      { t: "Number Theory", q: "What is a number divisible only by 1 and itself called?", a: "Prime Number", f: ["Composite Number", "Even Number", "Rational Number"] }
    ],
    hard: [
      { t: "Calculus", q: "What mathematical tool is used to find the rate of change of a function?", a: "Derivative", f: ["Integral", "Limit", "Matrix"] },
      { t: "Calculus", q: "What is the process of finding the area under a curve called?", a: "Integration", f: ["Differentiation", "Extrapolation", "Interpolation"] },
      { t: "Linear Algebra", q: "What is a rectangular array of numbers arranged in rows and columns?", a: "Matrix", f: ["Vector", "Determinant", "Scalar"] },
      { t: "Complex Numbers", q: "What is the square root of -1 represented by?", a: "Imaginary unit (i)", f: ["Euler's number (e)", "Pi", "Golden Ratio (Phi)"] },
      { t: "Sequences", q: "In which sequence is each number the sum of the two preceding ones?", a: "Fibonacci Sequence", f: ["Geometric Sequence", "Arithmetic Sequence", "Harmonic Sequence"] }
    ]
  },
  science: {
    easy: [
      { t: "Physics", q: "What is the force that pulls objects toward the center of the Earth?", a: "Gravity", f: ["Magnetism", "Friction", "Inertia"] },
      { t: "Biology", q: "What is the basic unit of life?", a: "Cell", f: ["Atom", "Molecule", "Organ"] },
      { t: "Chemistry", q: "What is the chemical symbol for water?", a: "H2O", f: ["CO2", "O2", "NaCl"] },
      { t: "Astronomy", q: "What is the closest planet to the Sun?", a: "Mercury", f: ["Venus", "Earth", "Mars"] },
      { t: "Biology", q: "What gas do plants primarily absorb from the atmosphere?", a: "Carbon Dioxide", f: ["Oxygen", "Nitrogen", "Hydrogen"] }
    ],
    medium: [
      { t: "Physics", q: "What is the rate of change of velocity called?", a: "Acceleration", f: ["Speed", "Momentum", "Force"] },
      { t: "Biology", q: "What is the process by which plants make their own food?", a: "Photosynthesis", f: ["Respiration", "Digestion", "Fermentation"] },
      { t: "Chemistry", q: "What is the center of an atom called?", a: "Nucleus", f: ["Electron Cloud", "Proton", "Neutron"] },
      { t: "Genetics", q: "What molecule carries genetic instructions in living organisms?", a: "DNA", f: ["RNA", "Protein", "Carbohydrate"] },
      { t: "Earth Science", q: "What is the outermost layer of the Earth called?", a: "Crust", f: ["Mantle", "Outer Core", "Inner Core"] }
    ],
    hard: [
      { t: "Physics", q: "What principle states that energy cannot be created or destroyed?", a: "Conservation of Energy", f: ["Heisenberg Uncertainty", "Pauli Exclusion", "Relativity"] },
      { t: "Chemistry", q: "What is a substance that speeds up a chemical reaction without being consumed?", a: "Catalyst", f: ["Inhibitor", "Reactant", "Product"] },
      { t: "Biology", q: "What organelle is known as the powerhouse of the cell?", a: "Mitochondria", f: ["Nucleus", "Ribosome", "Chloroplast"] },
      { t: "Physics", q: "What fundamental force is responsible for radioactive decay?", a: "Weak Nuclear Force", f: ["Strong Nuclear Force", "Electromagnetism", "Gravity"] },
      { t: "Genetics", q: "What is the process of copying DNA into RNA called?", a: "Transcription", f: ["Translation", "Replication", "Mutation"] }
    ]
  },
  english: {
    easy: [
      { t: "Grammar", q: "What part of speech describes a noun?", a: "Adjective", f: ["Verb", "Adverb", "Preposition"] },
      { t: "Grammar", q: "What part of speech represents an action or state of being?", a: "Verb", f: ["Noun", "Pronoun", "Conjunction"] },
      { t: "Punctuation", q: "What punctuation mark is used to indicate a question?", a: "Question Mark", f: ["Exclamation Point", "Period", "Comma"] },
      { t: "Vocabulary", q: "What is a word that has the opposite meaning of another word?", a: "Antonym", f: ["Synonym", "Homophone", "Acronym"] },
      { t: "Grammar", q: "What part of speech is used in place of a noun?", a: "Pronoun", f: ["Adjective", "Adverb", "Article"] }
    ],
    medium: [
      { t: "Grammar", q: "What is a word that modifies a verb, adjective, or another adverb?", a: "Adverb", f: ["Preposition", "Conjunction", "Interjection"] },
      { t: "Literature", q: "What is the main character of a story called?", a: "Protagonist", f: ["Antagonist", "Narrator", "Foil"] },
      { t: "Poetry", q: "What is a comparison between two unlike things using 'like' or 'as'?", a: "Simile", f: ["Metaphor", "Personification", "Hyperbole"] },
      { t: "Grammar", q: "What joins words, phrases, or clauses together?", a: "Conjunction", f: ["Preposition", "Interjection", "Article"] },
      { t: "Vocabulary", q: "What are words that sound the same but have different meanings and spellings?", a: "Homophones", f: ["Synonyms", "Antonyms", "Homonyms"] }
    ],
    hard: [
      { t: "Literature", q: "What is a direct comparison between two unlike things without using 'like' or 'as'?", a: "Metaphor", f: ["Simile", "Allusion", "Irony"] },
      { t: "Poetry", q: "What is the repetition of initial consonant sounds in neighboring words?", a: "Alliteration", f: ["Assonance", "Consonance", "Onomatopoeia"] },
      { t: "Literature", q: "What is the term for a character who contrasts with another character?", a: "Foil", f: ["Protagonist", "Antagonist", "Archetype"] },
      { t: "Grammar", q: "What type of clause can stand alone as a complete sentence?", a: "Independent Clause", f: ["Dependent Clause", "Subordinate Clause", "Relative Clause"] },
      { t: "Rhetoric", q: "What is the use of exaggeration for emphasis or rhetorical effect?", a: "Hyperbole", f: ["Understatement", "Oxymoron", "Paradox"] }
    ]
  },
  history: {
    easy: [
      { t: "US History", q: "Who was the first President of the United States?", a: "George Washington", f: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"] },
      { t: "World History", q: "In which ancient civilization were the Pyramids built?", a: "Egypt", f: ["Greece", "Rome", "Mesopotamia"] },
      { t: "US History", q: "What document starts with 'We the People'?", a: "The Constitution", f: ["Declaration of Independence", "Bill of Rights", "Magna Carta"] },
      { t: "World History", q: "Which famous wall was built to protect China from invasions?", a: "Great Wall of China", f: ["Berlin Wall", "Hadrian's Wall", "Western Wall"] },
      { t: "US History", q: "Who wrote the Declaration of Independence?", a: "Thomas Jefferson", f: ["George Washington", "Benjamin Franklin", "James Madison"] }
    ],
    medium: [
      { t: "World History", q: "What event triggered the start of World War I?", a: "Assassination of Archduke Franz Ferdinand", f: ["Invasion of Poland", "Bombing of Pearl Harbor", "Sinking of the Lusitania"] },
      { t: "US History", q: "Which war was fought between the North and South regions of the US?", a: "American Civil War", f: ["Revolutionary War", "War of 1812", "Spanish-American War"] },
      { t: "World History", q: "Who was the famous Queen of Ancient Egypt known for her relationships with Julius Caesar and Mark Antony?", a: "Cleopatra", f: ["Nefertiti", "Hatshepsut", "Boudicca"] },
      { t: "European History", q: "What was the period of cultural and artistic rebirth in Europe called?", a: "The Renaissance", f: ["The Enlightenment", "The Industrial Revolution", "The Middle Ages"] },
      { t: "US History", q: "Which president issued the Emancipation Proclamation?", a: "Abraham Lincoln", f: ["George Washington", "Andrew Jackson", "Theodore Roosevelt"] }
    ],
    hard: [
      { t: "World History", q: "What treaty officially ended World War I?", a: "Treaty of Versailles", f: ["Treaty of Paris", "Treaty of Tordesillas", "Treaty of Ghent"] },
      { t: "Ancient History", q: "Who was the Macedonian king who created one of the largest empires in ancient history?", a: "Alexander the Great", f: ["Julius Caesar", "Genghis Khan", "Cyrus the Great"] },
      { t: "European History", q: "Which revolution began with the storming of the Bastille in 1789?", a: "French Revolution", f: ["Russian Revolution", "American Revolution", "Industrial Revolution"] },
      { t: "US History", q: "What was the secret US project to develop the atomic bomb called?", a: "Manhattan Project", f: ["Apollo Project", "Project Mercury", "Project Gemini"] },
      { t: "World History", q: "Which ancient civilization developed in the region between the Tigris and Euphrates rivers?", a: "Mesopotamia", f: ["Egypt", "Indus Valley", "Mesoamerica"] }
    ]
  },
  geography: {
    easy: [
      { t: "Continents", q: "What is the largest continent by land area?", a: "Asia", f: ["Africa", "North America", "Europe"] },
      { t: "Oceans", q: "What is the largest ocean on Earth?", a: "Pacific Ocean", f: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"] },
      { t: "Countries", q: "Which country has the largest land area?", a: "Russia", f: ["Canada", "China", "United States"] },
      { t: "Rivers", q: "What is the longest river in the world?", a: "Nile River", f: ["Amazon River", "Yangtze River", "Mississippi River"] },
      { t: "Mountains", q: "What is the highest mountain above sea level?", a: "Mount Everest", f: ["K2", "Kangchenjunga", "Mount Kilimanjaro"] }
    ],
    medium: [
      { t: "Capitals", q: "What is the capital city of Australia?", a: "Canberra", f: ["Sydney", "Melbourne", "Perth"] },
      { t: "Deserts", q: "What is the largest hot desert in the world?", a: "Sahara Desert", f: ["Arabian Desert", "Gobi Desert", "Kalahari Desert"] },
      { t: "Countries", q: "Which country is shaped like a boot?", a: "Italy", f: ["Greece", "Spain", "Portugal"] },
      { t: "Rivers", q: "Which river flows through the Grand Canyon?", a: "Colorado River", f: ["Mississippi River", "Rio Grande", "Columbia River"] },
      { t: "Capitals", q: "What is the capital city of Canada?", a: "Ottawa", f: ["Toronto", "Vancouver", "Montreal"] }
    ],
    hard: [
      { t: "Countries", q: "Which country has the most islands?", a: "Sweden", f: ["Indonesia", "Philippines", "Canada"] },
      { t: "Seas", q: "Which sea is located between Jordan to the east and Israel to the west?", a: "Dead Sea", f: ["Red Sea", "Mediterranean Sea", "Black Sea"] },
      { t: "Capitals", q: "What is the highest capital city in the world?", a: "La Paz", f: ["Quito", "Bogota", "Kathmandu"] },
      { t: "Lakes", q: "What is the largest freshwater lake by volume?", a: "Lake Baikal", f: ["Lake Superior", "Lake Victoria", "Caspian Sea"] },
      { t: "Countries", q: "Which country is landlocked by only one other country?", a: "Lesotho", f: ["San Marino", "Vatican City", "Monaco"] }
    ]
  },
  "computer science": {
    easy: [
      { t: "Basics", q: "What does CPU stand for?", a: "Central Processing Unit", f: ["Computer Personal Unit", "Central Processor Unit", "Central Program Unit"] },
      { t: "Programming", q: "What is a sequence of instructions used to solve a problem?", a: "Algorithm", f: ["Variable", "Loop", "Syntax"] },
      { t: "Hardware", q: "Which component stores data permanently even when powered off?", a: "Hard Drive", f: ["RAM", "Cache", "Register"] },
      { t: "Basics", q: "What is the main circuit board of a computer called?", a: "Motherboard", f: ["Processor", "Power Supply", "Graphics Card"] },
      { t: "Software", q: "What program translates high-level code into machine code?", a: "Compiler", f: ["Interpreter", "Assembler", "Debugger"] }
    ],
    medium: [
      { t: "Data Representation", q: "How many bits are in a byte?", a: "8", f: ["4", "16", "32"] },
      { t: "Programming", q: "What paradigm is based on 'objects' containing data and methods?", a: "Object-Oriented Programming", f: ["Functional Programming", "Procedural Programming", "Logic Programming"] },
      { t: "Networking", q: "What protocol is used to transfer web pages over the internet?", a: "HTTP", f: ["FTP", "SMTP", "SSH"] },
      { t: "Databases", q: "What language is primarily used to query relational databases?", a: "SQL", f: ["Python", "Java", "C++"] },
      { t: "OS", q: "What acts as an intermediary between computer hardware and the user?", a: "Operating System", f: ["Application Software", "Device Driver", "Firmware"] }
    ],
    hard: [
      { t: "Algorithms", q: "What is the time complexity of a binary search?", a: "O(log n)", f: ["O(n)", "O(n^2)", "O(1)"] },
      { t: "Theory", q: "What theoretical machine can simulate any computer algorithm?", a: "Turing Machine", f: ["Von Neumann Architecture", "Finite State Machine", "Quantum Computer"] },
      { t: "Networking", q: "In the OSI model, which layer ensures reliable data transfer?", a: "Transport Layer", f: ["Network Layer", "Data Link Layer", "Physical Layer"] },
      { t: "Security", q: "What cryptographic method uses two different keys (public and private)?", a: "Asymmetric Encryption", f: ["Symmetric Encryption", "Hashing", "Salting"] },
      { t: "Architecture", q: "What memory type acts as a buffer between the CPU and main memory?", a: "Cache", f: ["Registers", "Virtual Memory", "ROM"] }
    ]
  },
  dbms: {
    easy: [
      { t: "Basics", q: "What does DBMS stand for?", a: "Database Management System", f: ["Data Base Manipulation System", "Data Bank Management System", "Database Manipulation System"] },
      { t: "SQL", q: "Which SQL clause is used to filter records?", a: "WHERE", f: ["FILTER", "HAVING", "SELECT"] },
      { t: "Concepts", q: "What uniquely identifies each record in a table?", a: "Primary Key", f: ["Foreign Key", "Unique Key", "Index"] },
      { t: "Concepts", q: "What type of key links two tables together?", a: "Foreign Key", f: ["Primary Key", "Candidate Key", "Super Key"] },
      { t: "SQL", q: "Which SQL statement is used to extract data from a database?", a: "SELECT", f: ["GET", "EXTRACT", "PULL"] }
    ],
    medium: [
      { t: "Properties", q: "Which acronym describes the properties of reliable database transactions?", a: "ACID", f: ["BASE", "SOLID", "CRUD"] },
      { t: "Design", q: "What is the process of organizing data to reduce redundancy?", a: "Normalization", f: ["Denormalization", "Indexing", "Partitioning"] },
      { t: "SQL", q: "Which SQL clause is used to sort the result set?", a: "ORDER BY", f: ["SORT BY", "GROUP BY", "ALIGN BY"] },
      { t: "Concepts", q: "What database object improves the speed of data retrieval operations?", a: "Index", f: ["View", "Trigger", "Stored Procedure"] },
      { t: "NoSQL", q: "What type of database uses documents, key-value pairs, or graphs instead of tables?", a: "NoSQL", f: ["RDBMS", "Hierarchical", "Network"] }
    ],
    hard: [
      { t: "Normalization", q: "Which normal form requires the removal of transitive dependencies?", a: "Third Normal Form (3NF)", f: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Boyce-Codd Normal Form (BCNF)"] },
      { t: "Concurrency", q: "What issue occurs when two transactions wait indefinitely for each other to release locks?", a: "Deadlock", f: ["Livelock", "Starvation", "Race Condition"] },
      { t: "Architecture", q: "What data structure is most commonly used for database indexes?", a: "B-Tree", f: ["Hash Table", "Binary Search Tree", "Linked List"] },
      { t: "SQL", q: "Which SQL operation combines rows from two tables based on a related column?", a: "JOIN", f: ["UNION", "MERGE", "COMBINE"] },
      { t: "Concepts", q: "What is a virtual table based on the result-set of an SQL statement?", a: "View", f: ["Schema", "Table", "Cursor"] }
    ]
  },
  java: {
    easy: [
      { t: "Basics", q: "What translates Java bytecode into machine code at runtime?", a: "Java Virtual Machine (JVM)", f: ["Java Compiler", "Java Runtime Environment (JRE)", "Java Development Kit (JDK)"] },
      { t: "Keywords", q: "Which keyword is used to define a class in Java?", a: "class", f: ["define", "struct", "object"] },
      { t: "Concepts", q: "What is the blueprint from which individual objects are created?", a: "Class", f: ["Method", "Variable", "Interface"] },
      { t: "Keywords", q: "Which keyword is used to create an instance of a class?", a: "new", f: ["create", "instance", "make"] },
      { t: "Basics", q: "Which method acts as the entry point for a Java application?", a: "main", f: ["start", "init", "run"] }
    ],
    medium: [
      { t: "OOP", q: "What mechanism allows a class to inherit fields and methods from another class?", a: "Inheritance", f: ["Polymorphism", "Encapsulation", "Abstraction"] },
      { t: "Keywords", q: "Which keyword refers to the current object instance?", a: "this", f: ["super", "self", "current"] },
      { t: "OOP", q: "What concept describes bundling data and methods into a single unit and hiding internal state?", a: "Encapsulation", f: ["Inheritance", "Polymorphism", "Abstraction"] },
      { t: "Memory", q: "What automatically reclaims memory by deleting unreferenced objects?", a: "Garbage Collector", f: ["Memory Manager", "Destructor", "Finalizer"] },
      { t: "Keywords", q: "Which keyword prevents a variable from being modified after initialization?", a: "final", f: ["const", "static", "sealed"] }
    ],
    hard: [
      { t: "OOP", q: "What type of class cannot be instantiated directly and may contain unimplemented methods?", a: "Abstract Class", f: ["Final Class", "Static Class", "Inner Class"] },
      { t: "Concurrency", q: "Which keyword is used to prevent thread interference and memory consistency errors?", a: "synchronized", f: ["volatile", "transient", "strictfp"] },
      { t: "Collections", q: "Which interface in the Java Collections Framework prohibits duplicate elements?", a: "Set", f: ["List", "Map", "Queue"] },
      { t: "Features", q: "What Java 8 feature allows passing behaviors as parameters concisely?", a: "Lambda Expressions", f: ["Anonymous Classes", "Method References", "Streams"] },
      { t: "OOP", q: "What allows an object to take on many forms, often achieved via method overriding?", a: "Polymorphism", f: ["Inheritance", "Encapsulation", "Abstraction"] }
    ]
  },
  python: {
    easy: [
      { t: "Keywords", q: "Which keyword is used to define a function in Python?", a: "def", f: ["func", "function", "define"] },
      { t: "Syntax", q: "What character is used to start a single-line comment in Python?", a: "#", f: ["//", "/*", "--"] },
      { t: "Data Types", q: "What data type is an ordered, mutable sequence of items?", a: "List", f: ["Tuple", "Dictionary", "Set"] },
      { t: "Data Types", q: "What data type stores key-value pairs?", a: "Dictionary", f: ["List", "Tuple", "Set"] },
      { t: "Syntax", q: "Instead of braces {}, what does Python use to define code blocks?", a: "Indentation", f: ["Parentheses", "Brackets", "Semicolons"] }
    ],
    medium: [
      { t: "Data Types", q: "What data type is an ordered, immutable sequence of items?", a: "Tuple", f: ["List", "Dictionary", "Set"] },
      { t: "Concepts", q: "What allows creating lists concisely by applying an expression to an iterable?", a: "List Comprehension", f: ["Generator", "Lambda", "Decorator"] },
      { t: "Keywords", q: "Which keyword is used to create small anonymous functions?", a: "lambda", f: ["anon", "inline", "macro"] },
      { t: "Methods", q: "What special method is used to initialize an object's attributes in a class?", a: "__init__", f: ["__start__", "__construct__", "__new__"] },
      { t: "Syntax", q: "Which keyword refers to the instance of the class inside its methods?", a: "self", f: ["this", "me", "current"] }
    ],
    hard: [
      { t: "Features", q: "What modifies the behavior of a function or class without changing its source code?", a: "Decorator", f: ["Generator", "Iterator", "Closure"] },
      { t: "Concurrency", q: "What mechanism prevents multiple native threads from executing Python bytecodes at once?", a: "Global Interpreter Lock (GIL)", f: ["Garbage Collector", "Thread Pool", "Mutex"] },
      { t: "Features", q: "What type of function uses the 'yield' keyword to return an iterator?", a: "Generator", f: ["Decorator", "Coroutine", "Closure"] },
      { t: "Types", q: "What principle assumes an object is valid if it supports the required methods, regardless of its class?", a: "Duck Typing", f: ["Strong Typing", "Static Typing", "Dynamic Typing"] },
      { t: "Modules", q: "What statement is used to bring an external module into the current namespace?", a: "import", f: ["include", "require", "using"] }
    ]
  },
  "data structures": {
    easy: [
      { t: "Basics", q: "What data structure stores elements in contiguous memory locations?", a: "Array", f: ["Linked List", "Tree", "Graph"] },
      { t: "Stack", q: "What principle governs the order of operations in a Stack?", a: "LIFO (Last In First Out)", f: ["FIFO (First In First Out)", "FILO (First In Last Out)", "Random Access"] },
      { t: "Queue", q: "What principle governs the order of operations in a Queue?", a: "FIFO (First In First Out)", f: ["LIFO (Last In First Out)", "LILO (Last In Last Out)", "Random Access"] },
      { t: "Basics", q: "What data structure consists of nodes where each node points to the next?", a: "Linked List", f: ["Array", "Stack", "Queue"] },
      { t: "Trees", q: "In a tree, what is a node with no children called?", a: "Leaf", f: ["Root", "Branch", "Internal Node"] }
    ],
    medium: [
      { t: "Hash", q: "What data structure maps keys to values using a hash function?", a: "Hash Table", f: ["Binary Tree", "Heap", "Graph"] },
      { t: "Trees", q: "What type of tree guarantees that a left child is smaller and a right child is larger than the parent?", a: "Binary Search Tree", f: ["Heap", "Trie", "B-Tree"] },
      { t: "Graphs", q: "What data structure consists of vertices (nodes) connected by edges?", a: "Graph", f: ["Tree", "Linked List", "Array"] },
      { t: "Trees", q: "What is a specialized tree-based data structure that satisfies the heap property?", a: "Heap", f: ["Binary Search Tree", "AVL Tree", "Red-Black Tree"] },
      { t: "Linked Lists", q: "What type of linked list allows traversal in both forward and backward directions?", a: "Doubly Linked List", f: ["Singly Linked List", "Circular Linked List", "Skip List"] }
    ],
    hard: [
      { t: "Trees", q: "Which self-balancing binary search tree ensures the heights of two child subtrees differ by at most one?", a: "AVL Tree", f: ["Red-Black Tree", "B-Tree", "Splay Tree"] },
      { t: "Graphs", q: "What graph traversal algorithm uses a queue to explore nodes level by level?", a: "Breadth-First Search (BFS)", f: ["Depth-First Search (DFS)", "Dijkstra's Algorithm", "A* Search"] },
      { t: "Trees", q: "What tree-like data structure is used to efficiently store and search a dynamic set of strings?", a: "Trie", f: ["Heap", "Hash Tree", "B-Tree"] },
      { t: "Graphs", q: "Which algorithm finds the shortest path between nodes in a graph with non-negative edge weights?", a: "Dijkstra's Algorithm", f: ["Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm"] },
      { t: "Hashing", q: "What technique resolves hash collisions by searching for the next empty slot?", a: "Open Addressing", f: ["Chaining", "Double Hashing", "Quadratic Probing"] }
    ]
  },
  "operating systems": {
    easy: [
      { t: "Basics", q: "What is the core component of an operating system that manages system resources?", a: "Kernel", f: ["Shell", "GUI", "Compiler"] },
      { t: "Processes", q: "What is a program in execution called?", a: "Process", f: ["Thread", "File", "Instruction"] },
      { t: "Memory", q: "What memory hierarchy level is the fastest but smallest?", a: "Registers", f: ["Cache", "RAM", "Hard Drive"] },
      { t: "Interface", q: "What provides a user interface to interact with the operating system?", a: "Shell", f: ["Kernel", "Driver", "Bootloader"] },
      { t: "Storage", q: "What logical structure manages how data is stored and retrieved on a disk?", a: "File System", f: ["Memory Manager", "Process Scheduler", "Device Driver"] }
    ],
    medium: [
      { t: "Processes", q: "What is the smallest sequence of programmed instructions managed independently by a scheduler?", a: "Thread", f: ["Process", "Job", "Task"] },
      { t: "Memory", q: "What technique allows the execution of processes that are not completely in memory?", a: "Virtual Memory", f: ["Paging", "Segmentation", "Caching"] },
      { t: "CPU", q: "What component decides which process runs next on the CPU?", a: "Scheduler", f: ["Dispatcher", "Interrupt Handler", "Memory Manager"] },
      { t: "Synchronization", q: "What is a synchronization variable used to control access to a common resource?", a: "Semaphore", f: ["Mutex", "Lock", "Monitor"] },
      { t: "Processes", q: "What is the saving of one process's state and loading of another's called?", a: "Context Switch", f: ["Interrupt", "System Call", "Trap"] }
    ],
    hard: [
      { t: "Concurrency", q: "What situation occurs when multiple processes are blocked indefinitely waiting for each other?", a: "Deadlock", f: ["Starvation", "Race Condition", "Thrashing"] },
      { t: "Memory", q: "What memory management scheme divides physical memory into fixed-sized blocks?", a: "Paging", f: ["Segmentation", "Swapping", "Fragmentation"] },
      { t: "Performance", q: "What condition occurs when a system spends more time paging than executing processes?", a: "Thrashing", f: ["Deadlock", "Starvation", "Fragmentation"] },
      { t: "File System", q: "In Unix-like systems, what data structure stores metadata about a file?", a: "Inode", f: ["Superblock", "Directory", "File Allocation Table"] },
      { t: "Hardware", q: "What mechanism allows hardware devices to signal the CPU that they require attention?", a: "Interrupt", f: ["System Call", "Trap", "Polling"] }
    ]
  },
  "computer networks": {
    easy: [
      { t: "Basics", q: "What uniquely identifies a device on a TCP/IP network?", a: "IP Address", f: ["MAC Address", "Port Number", "Subnet Mask"] },
      { t: "Protocols", q: "What protocol is used to secure web traffic?", a: "HTTPS", f: ["HTTP", "FTP", "SMTP"] },
      { t: "Hardware", q: "What device connects different networks and forwards data packets between them?", a: "Router", f: ["Switch", "Hub", "Modem"] },
      { t: "Basics", q: "What translates human-readable domain names into IP addresses?", a: "DNS", f: ["DHCP", "ARP", "NAT"] },
      { t: "Protocols", q: "Which protocol is used for sending email?", a: "SMTP", f: ["POP3", "IMAP", "FTP"] }
    ],
    medium: [
      { t: "Hardware", q: "What unique physical address is assigned to a network interface controller?", a: "MAC Address", f: ["IP Address", "Port Number", "IPv6 Address"] },
      { t: "Models", q: "How many layers are in the OSI model?", a: "7", f: ["4", "5", "6"] },
      { t: "Protocols", q: "Which protocol automatically assigns IP addresses to devices on a network?", a: "DHCP", f: ["DNS", "ARP", "ICMP"] },
      { t: "TCP/IP", q: "Which transport layer protocol provides reliable, ordered, and error-checked delivery?", a: "TCP", f: ["UDP", "IP", "ICMP"] },
      { t: "Security", q: "What network security system monitors and controls incoming and outgoing network traffic?", a: "Firewall", f: ["VPN", "Proxy", "Router"] }
    ],
    hard: [
      { t: "Models", q: "Which OSI layer is responsible for end-to-end communication and error recovery?", a: "Transport Layer", f: ["Network Layer", "Data Link Layer", "Session Layer"] },
      { t: "Protocols", q: "Which protocol resolves IP addresses to MAC addresses?", a: "ARP", f: ["DNS", "DHCP", "RARP"] },
      { t: "Routing", q: "What maps multiple private IP addresses to a single public IP address?", a: "NAT", f: ["DHCP", "DNS", "VLAN"] },
      { t: "Protocols", q: "Which transport layer protocol provides connectionless, unacknowledged communication?", a: "UDP", f: ["TCP", "IP", "ICMP"] },
      { t: "Security", q: "What creates a private, encrypted connection over a public network?", a: "VPN", f: ["VLAN", "Proxy", "Firewall"] }
    ]
  },
  "cyber security": {
    easy: [
      { t: "Basics", q: "What malicious software is designed to disrupt, damage, or gain unauthorized access to a system?", a: "Malware", f: ["Adware", "Firewall", "Antivirus"] },
      { t: "Attacks", q: "What attack involves sending fraudulent emails to trick individuals into revealing sensitive information?", a: "Phishing", f: ["Spoofing", "Sniffing", "Spamming"] },
      { t: "Protection", q: "What is a secret string of characters used to authenticate a user?", a: "Password", f: ["Token", "Certificate", "Key"] },
      { t: "Basics", q: "What is the process of converting readable text into unreadable ciphertext?", a: "Encryption", f: ["Decryption", "Hashing", "Encoding"] },
      { t: "Protection", q: "What software is designed to detect and destroy computer viruses?", a: "Antivirus", f: ["Firewall", "VPN", "Proxy"] }
    ],
    medium: [
      { t: "Attacks", q: "What attack overwhelms a target server or network with a flood of internet traffic?", a: "DDoS", f: ["Man-in-the-Middle", "SQL Injection", "Cross-Site Scripting"] },
      { t: "Cryptography", q: "What transforms data into a fixed-size string of characters that cannot be reversed?", a: "Hashing", f: ["Encryption", "Encoding", "Salting"] },
      { t: "Cryptography", q: "What is added to a password before hashing to defend against dictionary attacks?", a: "Salt", f: ["Pepper", "Key", "Token"] },
      { t: "Attacks", q: "What attack intercepts communication between two parties without their knowledge?", a: "Man-in-the-Middle", f: ["Phishing", "Spoofing", "Eavesdropping"] },
      { t: "Cryptography", q: "What type of encryption uses the same key for both encryption and decryption?", a: "Symmetric Encryption", f: ["Asymmetric Encryption", "Public Key Cryptography", "Hashing"] }
    ],
    hard: [
      { t: "Attacks", q: "What vulnerability allows an attacker to inject malicious code into database queries?", a: "SQL Injection", f: ["Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "Buffer Overflow"] },
      { t: "Attacks", q: "What attack exploits a previously unknown vulnerability before a patch is available?", a: "Zero-Day Exploit", f: ["Ransomware", "Trojan Horse", "Rootkit"] },
      { t: "Cryptography", q: "What type of encryption uses a public key for encryption and a private key for decryption?", a: "Asymmetric Encryption", f: ["Symmetric Encryption", "Block Cipher", "Stream Cipher"] },
      { t: "Attacks", q: "What vulnerability allows attackers to inject malicious scripts into web pages viewed by other users?", a: "Cross-Site Scripting (XSS)", f: ["SQL Injection", "CSRF", "Clickjacking"] },
      { t: "Testing", q: "What is the authorized simulated cyberattack performed to evaluate system security?", a: "Penetration Testing", f: ["Vulnerability Scanning", "Risk Assessment", "Threat Modeling"] }
    ]
  }
};

const questionBank = [];

// Templates for generating varied questions from facts
const mcqTemplates = [
  "[Q]",
  "Consider the following: [Q]",
  "Which of these best answers the following? [Q]"
];

const tfTemplates = [
  "True or False: [A] is the answer to the following question - [Q]",
  "Is the following statement true or false? [A] is the correct term for: [Q]",
  "True/False: When asked '[Q]', the correct answer is [A]."
];

const saTemplates = [
  "[Q]",
  "Provide the exact term: [Q]",
  "Answer the following concisely: [Q]"
];

let globalIdCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

for (const [subject, difficulties] of Object.entries(factsDB)) {
  for (const [diff, factArray] of Object.entries(difficulties)) {
    factArray.forEach((fact, idx) => {
      
      // 1. Generate MCQ
      let mcqLabel = mcqTemplates[Math.floor(Math.random() * mcqTemplates.length)].replace("[Q]", fact.q);
      let mcqOptions = [
        { label: fact.a, value: fact.a },
        { label: fact.f[0], value: fact.f[0] },
        { label: fact.f[1], value: fact.f[1] },
        { label: fact.f[2], value: fact.f[2] }
      ];
      mcqOptions = shuffle(mcqOptions);
      
      questionBank.push({
        id: `${subject.replace(/ /g, '_')}_${diff}_mcq_${globalIdCount++}`,
        subject: subject,
        topic: fact.t,
        difficulty: diff,
        type: "radio",
        label: mcqLabel,
        options: mcqOptions,
        correctAnswer: fact.a,
        explanation: `The correct term is ${fact.a}.`,
        marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3
      });

      // 2. Generate True/False
      const isTrue = Math.random() > 0.5;
      const statementSubject = isTrue ? fact.a : fact.f[Math.floor(Math.random() * fact.f.length)];
      let tfLabel = tfTemplates[Math.floor(Math.random() * tfTemplates.length)]
                      .replace("[Q]", fact.q.replace("?", "."))
                      .replace("[A]", statementSubject);
      
      questionBank.push({
        id: `${subject.replace(/ /g, '_')}_${diff}_tf_${globalIdCount++}`,
        subject: subject,
        topic: fact.t,
        difficulty: diff,
        type: "radio",
        label: tfLabel,
        options: [{ label: "True", value: "true" }, { label: "False", value: "false" }],
        correctAnswer: isTrue ? "true" : "false",
        explanation: isTrue ? `Yes, ${fact.a} is correct.` : `No, the correct answer is ${fact.a}.`,
        marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3
      });

      // 3. Generate Short Answer
      let saLabel = saTemplates[Math.floor(Math.random() * saTemplates.length)].replace("[Q]", fact.q);
      questionBank.push({
        id: `${subject.replace(/ /g, '_')}_${diff}_sa_${globalIdCount++}`,
        subject: subject,
        topic: fact.t,
        difficulty: diff,
        type: "text",
        label: saLabel,
        correctAnswer: fact.a,
        explanation: `The correct term is ${fact.a}.`,
        marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3
      });

    });
  }
}

// Write to file
const outPath = path.join(__dirname, '../src/lib/question-bank.ts');
const fileContent = `export interface BankQuestion {
  id?: string;
  subject: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  type: "radio" | "checkbox" | "text";
  label: string;
  options?: { label: string; value: string }[];
  correctAnswer: any;
  explanation: string;
  marks: number;
}

export const questionBank: BankQuestion[] = ${JSON.stringify(questionBank, null, 2)};
`;

fs.writeFileSync(outPath, fileContent);
console.log(`Generated ${questionBank.length} questions and saved to question-bank.ts`);
