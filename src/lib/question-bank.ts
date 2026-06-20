export interface BankQuestion {
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

export const questionBank: BankQuestion[] = [
  {
    "id": "mathematics_easy_mcq_0",
    "subject": "mathematics",
    "topic": "Arithmetic",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the result of adding two numbers called?",
    "options": [
      {
        "label": "Product",
        "value": "Product"
      },
      {
        "label": "Sum",
        "value": "Sum"
      },
      {
        "label": "Quotient",
        "value": "Quotient"
      },
      {
        "label": "Difference",
        "value": "Difference"
      }
    ],
    "correctAnswer": "Sum",
    "explanation": "The correct term is Sum.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_tf_1",
    "subject": "mathematics",
    "topic": "Arithmetic",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Sum is the answer to the following question - What is the result of adding two numbers called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Sum is correct.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_sa_2",
    "subject": "mathematics",
    "topic": "Arithmetic",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is the result of adding two numbers called?",
    "correctAnswer": "Sum",
    "explanation": "The correct term is Sum.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_mcq_3",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What shape has exactly three sides?",
    "options": [
      {
        "label": "Pentagon",
        "value": "Pentagon"
      },
      {
        "label": "Triangle",
        "value": "Triangle"
      },
      {
        "label": "Square",
        "value": "Square"
      },
      {
        "label": "Circle",
        "value": "Circle"
      }
    ],
    "correctAnswer": "Triangle",
    "explanation": "The correct term is Triangle.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_tf_4",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Circle is the correct term for: What shape has exactly three sides.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Triangle.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_sa_5",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "text",
    "label": "What shape has exactly three sides?",
    "correctAnswer": "Triangle",
    "explanation": "The correct term is Triangle.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_mcq_6",
    "subject": "mathematics",
    "topic": "Fractions",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the top number of a fraction called?",
    "options": [
      {
        "label": "Numerator",
        "value": "Numerator"
      },
      {
        "label": "Denominator",
        "value": "Denominator"
      },
      {
        "label": "Divisor",
        "value": "Divisor"
      },
      {
        "label": "Base",
        "value": "Base"
      }
    ],
    "correctAnswer": "Numerator",
    "explanation": "The correct term is Numerator.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_tf_7",
    "subject": "mathematics",
    "topic": "Fractions",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Numerator is the correct term for: What is the top number of a fraction called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Numerator is correct.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_sa_8",
    "subject": "mathematics",
    "topic": "Fractions",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is the top number of a fraction called?",
    "correctAnswer": "Numerator",
    "explanation": "The correct term is Numerator.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_mcq_9",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the distance around a circle called?",
    "options": [
      {
        "label": "Area",
        "value": "Area"
      },
      {
        "label": "Diameter",
        "value": "Diameter"
      },
      {
        "label": "Circumference",
        "value": "Circumference"
      },
      {
        "label": "Radius",
        "value": "Radius"
      }
    ],
    "correctAnswer": "Circumference",
    "explanation": "The correct term is Circumference.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_tf_10",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is the distance around a circle called.', the correct answer is Radius.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Circumference.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_sa_11",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What is the distance around a circle called?",
    "correctAnswer": "Circumference",
    "explanation": "The correct term is Circumference.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_mcq_12",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "type": "radio",
    "label": "What is an unknown number represented by a letter called?",
    "options": [
      {
        "label": "Constant",
        "value": "Constant"
      },
      {
        "label": "Variable",
        "value": "Variable"
      },
      {
        "label": "Coefficient",
        "value": "Coefficient"
      },
      {
        "label": "Exponent",
        "value": "Exponent"
      }
    ],
    "correctAnswer": "Variable",
    "explanation": "The correct term is Variable.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_tf_13",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is an unknown number represented by a letter called.', the correct answer is Variable.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Variable is correct.",
    "marks": 1
  },
  {
    "id": "mathematics_easy_sa_14",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "type": "text",
    "label": "What is an unknown number represented by a letter called?",
    "correctAnswer": "Variable",
    "explanation": "The correct term is Variable.",
    "marks": 1
  },
  {
    "id": "mathematics_medium_mcq_15",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What theorem states a² + b² = c² for a right triangle?",
    "options": [
      {
        "label": "Binomial Theorem",
        "value": "Binomial Theorem"
      },
      {
        "label": "Fermat's Theorem",
        "value": "Fermat's Theorem"
      },
      {
        "label": "Euler's Formula",
        "value": "Euler's Formula"
      },
      {
        "label": "Pythagorean Theorem",
        "value": "Pythagorean Theorem"
      }
    ],
    "correctAnswer": "Pythagorean Theorem",
    "explanation": "The correct term is Pythagorean Theorem.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_tf_16",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Pythagorean Theorem is the answer to the following question - What theorem states a² + b² = c² for a right triangle.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Pythagorean Theorem is correct.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_sa_17",
    "subject": "mathematics",
    "topic": "Geometry",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What theorem states a² + b² = c² for a right triangle?",
    "correctAnswer": "Pythagorean Theorem",
    "explanation": "The correct term is Pythagorean Theorem.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_mcq_18",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the mathematical term for the 'steepness' of a line?",
    "options": [
      {
        "label": "Tangent",
        "value": "Tangent"
      },
      {
        "label": "Origin",
        "value": "Origin"
      },
      {
        "label": "Intercept",
        "value": "Intercept"
      },
      {
        "label": "Slope",
        "value": "Slope"
      }
    ],
    "correctAnswer": "Slope",
    "explanation": "The correct term is Slope.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_tf_19",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Origin is the answer to the following question - What is the mathematical term for the 'steepness' of a line.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Slope.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_sa_20",
    "subject": "mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "type": "text",
    "label": "What is the mathematical term for the 'steepness' of a line?",
    "correctAnswer": "Slope",
    "explanation": "The correct term is Slope.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_mcq_21",
    "subject": "mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is the middle value in a sorted list of numbers?",
    "options": [
      {
        "label": "Range",
        "value": "Range"
      },
      {
        "label": "Mode",
        "value": "Mode"
      },
      {
        "label": "Mean",
        "value": "Mean"
      },
      {
        "label": "Median",
        "value": "Median"
      }
    ],
    "correctAnswer": "Median",
    "explanation": "The correct term is Median.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_tf_22",
    "subject": "mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is the middle value in a sorted list of numbers.', the correct answer is Median.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Median is correct.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_sa_23",
    "subject": "mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the middle value in a sorted list of numbers?",
    "correctAnswer": "Median",
    "explanation": "The correct term is Median.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_mcq_24",
    "subject": "mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which trigonometric function is defined as opposite over adjacent?",
    "options": [
      {
        "label": "Tangent",
        "value": "Tangent"
      },
      {
        "label": "Secant",
        "value": "Secant"
      },
      {
        "label": "Sine",
        "value": "Sine"
      },
      {
        "label": "Cosine",
        "value": "Cosine"
      }
    ],
    "correctAnswer": "Tangent",
    "explanation": "The correct term is Tangent.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_tf_25",
    "subject": "mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which trigonometric function is defined as opposite over adjacent.', the correct answer is Tangent.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Tangent is correct.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_sa_26",
    "subject": "mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: Which trigonometric function is defined as opposite over adjacent?",
    "correctAnswer": "Tangent",
    "explanation": "The correct term is Tangent.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_mcq_27",
    "subject": "mathematics",
    "topic": "Number Theory",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is a number divisible only by 1 and itself called?",
    "options": [
      {
        "label": "Even Number",
        "value": "Even Number"
      },
      {
        "label": "Prime Number",
        "value": "Prime Number"
      },
      {
        "label": "Rational Number",
        "value": "Rational Number"
      },
      {
        "label": "Composite Number",
        "value": "Composite Number"
      }
    ],
    "correctAnswer": "Prime Number",
    "explanation": "The correct term is Prime Number.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_tf_28",
    "subject": "mathematics",
    "topic": "Number Theory",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is a number divisible only by 1 and itself called.', the correct answer is Prime Number.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Prime Number is correct.",
    "marks": 2
  },
  {
    "id": "mathematics_medium_sa_29",
    "subject": "mathematics",
    "topic": "Number Theory",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is a number divisible only by 1 and itself called?",
    "correctAnswer": "Prime Number",
    "explanation": "The correct term is Prime Number.",
    "marks": 2
  },
  {
    "id": "mathematics_hard_mcq_30",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What mathematical tool is used to find the rate of change of a function?",
    "options": [
      {
        "label": "Limit",
        "value": "Limit"
      },
      {
        "label": "Matrix",
        "value": "Matrix"
      },
      {
        "label": "Integral",
        "value": "Integral"
      },
      {
        "label": "Derivative",
        "value": "Derivative"
      }
    ],
    "correctAnswer": "Derivative",
    "explanation": "The correct term is Derivative.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_tf_31",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Matrix is the answer to the following question - What mathematical tool is used to find the rate of change of a function.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Derivative.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_sa_32",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What mathematical tool is used to find the rate of change of a function?",
    "correctAnswer": "Derivative",
    "explanation": "The correct term is Derivative.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_mcq_33",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "radio",
    "label": "What is the process of finding the area under a curve called?",
    "options": [
      {
        "label": "Integration",
        "value": "Integration"
      },
      {
        "label": "Differentiation",
        "value": "Differentiation"
      },
      {
        "label": "Extrapolation",
        "value": "Extrapolation"
      },
      {
        "label": "Interpolation",
        "value": "Interpolation"
      }
    ],
    "correctAnswer": "Integration",
    "explanation": "The correct term is Integration.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_tf_34",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What is the process of finding the area under a curve called.', the correct answer is Extrapolation.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Integration.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_sa_35",
    "subject": "mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the process of finding the area under a curve called?",
    "correctAnswer": "Integration",
    "explanation": "The correct term is Integration.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_mcq_36",
    "subject": "mathematics",
    "topic": "Linear Algebra",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is a rectangular array of numbers arranged in rows and columns?",
    "options": [
      {
        "label": "Vector",
        "value": "Vector"
      },
      {
        "label": "Scalar",
        "value": "Scalar"
      },
      {
        "label": "Matrix",
        "value": "Matrix"
      },
      {
        "label": "Determinant",
        "value": "Determinant"
      }
    ],
    "correctAnswer": "Matrix",
    "explanation": "The correct term is Matrix.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_tf_37",
    "subject": "mathematics",
    "topic": "Linear Algebra",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Determinant is the answer to the following question - What is a rectangular array of numbers arranged in rows and columns.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Matrix.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_sa_38",
    "subject": "mathematics",
    "topic": "Linear Algebra",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is a rectangular array of numbers arranged in rows and columns?",
    "correctAnswer": "Matrix",
    "explanation": "The correct term is Matrix.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_mcq_39",
    "subject": "mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is the square root of -1 represented by?",
    "options": [
      {
        "label": "Golden Ratio (Phi)",
        "value": "Golden Ratio (Phi)"
      },
      {
        "label": "Imaginary unit (i)",
        "value": "Imaginary unit (i)"
      },
      {
        "label": "Pi",
        "value": "Pi"
      },
      {
        "label": "Euler's number (e)",
        "value": "Euler's number (e)"
      }
    ],
    "correctAnswer": "Imaginary unit (i)",
    "explanation": "The correct term is Imaginary unit (i).",
    "marks": 3
  },
  {
    "id": "mathematics_hard_tf_40",
    "subject": "mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Pi is the correct term for: What is the square root of -1 represented by.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Imaginary unit (i).",
    "marks": 3
  },
  {
    "id": "mathematics_hard_sa_41",
    "subject": "mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What is the square root of -1 represented by?",
    "correctAnswer": "Imaginary unit (i)",
    "explanation": "The correct term is Imaginary unit (i).",
    "marks": 3
  },
  {
    "id": "mathematics_hard_mcq_42",
    "subject": "mathematics",
    "topic": "Sequences",
    "difficulty": "hard",
    "type": "radio",
    "label": "In which sequence is each number the sum of the two preceding ones?",
    "options": [
      {
        "label": "Arithmetic Sequence",
        "value": "Arithmetic Sequence"
      },
      {
        "label": "Fibonacci Sequence",
        "value": "Fibonacci Sequence"
      },
      {
        "label": "Harmonic Sequence",
        "value": "Harmonic Sequence"
      },
      {
        "label": "Geometric Sequence",
        "value": "Geometric Sequence"
      }
    ],
    "correctAnswer": "Fibonacci Sequence",
    "explanation": "The correct term is Fibonacci Sequence.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_tf_43",
    "subject": "mathematics",
    "topic": "Sequences",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Arithmetic Sequence is the correct term for: In which sequence is each number the sum of the two preceding ones.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Fibonacci Sequence.",
    "marks": 3
  },
  {
    "id": "mathematics_hard_sa_44",
    "subject": "mathematics",
    "topic": "Sequences",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: In which sequence is each number the sum of the two preceding ones?",
    "correctAnswer": "Fibonacci Sequence",
    "explanation": "The correct term is Fibonacci Sequence.",
    "marks": 3
  },
  {
    "id": "science_easy_mcq_45",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the force that pulls objects toward the center of the Earth?",
    "options": [
      {
        "label": "Magnetism",
        "value": "Magnetism"
      },
      {
        "label": "Gravity",
        "value": "Gravity"
      },
      {
        "label": "Friction",
        "value": "Friction"
      },
      {
        "label": "Inertia",
        "value": "Inertia"
      }
    ],
    "correctAnswer": "Gravity",
    "explanation": "The correct term is Gravity.",
    "marks": 1
  },
  {
    "id": "science_easy_tf_46",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Friction is the correct term for: What is the force that pulls objects toward the center of the Earth.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Gravity.",
    "marks": 1
  },
  {
    "id": "science_easy_sa_47",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What is the force that pulls objects toward the center of the Earth?",
    "correctAnswer": "Gravity",
    "explanation": "The correct term is Gravity.",
    "marks": 1
  },
  {
    "id": "science_easy_mcq_48",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the basic unit of life?",
    "options": [
      {
        "label": "Atom",
        "value": "Atom"
      },
      {
        "label": "Organ",
        "value": "Organ"
      },
      {
        "label": "Molecule",
        "value": "Molecule"
      },
      {
        "label": "Cell",
        "value": "Cell"
      }
    ],
    "correctAnswer": "Cell",
    "explanation": "The correct term is Cell.",
    "marks": 1
  },
  {
    "id": "science_easy_tf_49",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Cell is the correct term for: What is the basic unit of life.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Cell is correct.",
    "marks": 1
  },
  {
    "id": "science_easy_sa_50",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "text",
    "label": "What is the basic unit of life?",
    "correctAnswer": "Cell",
    "explanation": "The correct term is Cell.",
    "marks": 1
  },
  {
    "id": "science_easy_mcq_51",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the chemical symbol for water?",
    "options": [
      {
        "label": "CO2",
        "value": "CO2"
      },
      {
        "label": "O2",
        "value": "O2"
      },
      {
        "label": "NaCl",
        "value": "NaCl"
      },
      {
        "label": "H2O",
        "value": "H2O"
      }
    ],
    "correctAnswer": "H2O",
    "explanation": "The correct term is H2O.",
    "marks": 1
  },
  {
    "id": "science_easy_tf_52",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is the chemical symbol for water.', the correct answer is H2O.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, H2O is correct.",
    "marks": 1
  },
  {
    "id": "science_easy_sa_53",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "easy",
    "type": "text",
    "label": "What is the chemical symbol for water?",
    "correctAnswer": "H2O",
    "explanation": "The correct term is H2O.",
    "marks": 1
  },
  {
    "id": "science_easy_mcq_54",
    "subject": "science",
    "topic": "Astronomy",
    "difficulty": "easy",
    "type": "radio",
    "label": "What is the closest planet to the Sun?",
    "options": [
      {
        "label": "Mercury",
        "value": "Mercury"
      },
      {
        "label": "Mars",
        "value": "Mars"
      },
      {
        "label": "Venus",
        "value": "Venus"
      },
      {
        "label": "Earth",
        "value": "Earth"
      }
    ],
    "correctAnswer": "Mercury",
    "explanation": "The correct term is Mercury.",
    "marks": 1
  },
  {
    "id": "science_easy_tf_55",
    "subject": "science",
    "topic": "Astronomy",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is the closest planet to the Sun.', the correct answer is Mercury.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Mercury is correct.",
    "marks": 1
  },
  {
    "id": "science_easy_sa_56",
    "subject": "science",
    "topic": "Astronomy",
    "difficulty": "easy",
    "type": "text",
    "label": "What is the closest planet to the Sun?",
    "correctAnswer": "Mercury",
    "explanation": "The correct term is Mercury.",
    "marks": 1
  },
  {
    "id": "science_easy_mcq_57",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "radio",
    "label": "What gas do plants primarily absorb from the atmosphere?",
    "options": [
      {
        "label": "Nitrogen",
        "value": "Nitrogen"
      },
      {
        "label": "Hydrogen",
        "value": "Hydrogen"
      },
      {
        "label": "Oxygen",
        "value": "Oxygen"
      },
      {
        "label": "Carbon Dioxide",
        "value": "Carbon Dioxide"
      }
    ],
    "correctAnswer": "Carbon Dioxide",
    "explanation": "The correct term is Carbon Dioxide.",
    "marks": 1
  },
  {
    "id": "science_easy_tf_58",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Nitrogen is the answer to the following question - What gas do plants primarily absorb from the atmosphere.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Carbon Dioxide.",
    "marks": 1
  },
  {
    "id": "science_easy_sa_59",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What gas do plants primarily absorb from the atmosphere?",
    "correctAnswer": "Carbon Dioxide",
    "explanation": "The correct term is Carbon Dioxide.",
    "marks": 1
  },
  {
    "id": "science_medium_mcq_60",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is the rate of change of velocity called?",
    "options": [
      {
        "label": "Momentum",
        "value": "Momentum"
      },
      {
        "label": "Speed",
        "value": "Speed"
      },
      {
        "label": "Force",
        "value": "Force"
      },
      {
        "label": "Acceleration",
        "value": "Acceleration"
      }
    ],
    "correctAnswer": "Acceleration",
    "explanation": "The correct term is Acceleration.",
    "marks": 2
  },
  {
    "id": "science_medium_tf_61",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Speed is the correct term for: What is the rate of change of velocity called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Acceleration.",
    "marks": 2
  },
  {
    "id": "science_medium_sa_62",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the rate of change of velocity called?",
    "correctAnswer": "Acceleration",
    "explanation": "The correct term is Acceleration.",
    "marks": 2
  },
  {
    "id": "science_medium_mcq_63",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the process by which plants make their own food?",
    "options": [
      {
        "label": "Fermentation",
        "value": "Fermentation"
      },
      {
        "label": "Photosynthesis",
        "value": "Photosynthesis"
      },
      {
        "label": "Respiration",
        "value": "Respiration"
      },
      {
        "label": "Digestion",
        "value": "Digestion"
      }
    ],
    "correctAnswer": "Photosynthesis",
    "explanation": "The correct term is Photosynthesis.",
    "marks": 2
  },
  {
    "id": "science_medium_tf_64",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Fermentation is the correct term for: What is the process by which plants make their own food.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Photosynthesis.",
    "marks": 2
  },
  {
    "id": "science_medium_sa_65",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the process by which plants make their own food?",
    "correctAnswer": "Photosynthesis",
    "explanation": "The correct term is Photosynthesis.",
    "marks": 2
  },
  {
    "id": "science_medium_mcq_66",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What is the center of an atom called?",
    "options": [
      {
        "label": "Proton",
        "value": "Proton"
      },
      {
        "label": "Nucleus",
        "value": "Nucleus"
      },
      {
        "label": "Neutron",
        "value": "Neutron"
      },
      {
        "label": "Electron Cloud",
        "value": "Electron Cloud"
      }
    ],
    "correctAnswer": "Nucleus",
    "explanation": "The correct term is Nucleus.",
    "marks": 2
  },
  {
    "id": "science_medium_tf_67",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Nucleus is the correct term for: What is the center of an atom called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Nucleus is correct.",
    "marks": 2
  },
  {
    "id": "science_medium_sa_68",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the center of an atom called?",
    "correctAnswer": "Nucleus",
    "explanation": "The correct term is Nucleus.",
    "marks": 2
  },
  {
    "id": "science_medium_mcq_69",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What molecule carries genetic instructions in living organisms?",
    "options": [
      {
        "label": "Carbohydrate",
        "value": "Carbohydrate"
      },
      {
        "label": "Protein",
        "value": "Protein"
      },
      {
        "label": "DNA",
        "value": "DNA"
      },
      {
        "label": "RNA",
        "value": "RNA"
      }
    ],
    "correctAnswer": "DNA",
    "explanation": "The correct term is DNA.",
    "marks": 2
  },
  {
    "id": "science_medium_tf_70",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? DNA is the correct term for: What molecule carries genetic instructions in living organisms.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, DNA is correct.",
    "marks": 2
  },
  {
    "id": "science_medium_sa_71",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What molecule carries genetic instructions in living organisms?",
    "correctAnswer": "DNA",
    "explanation": "The correct term is DNA.",
    "marks": 2
  },
  {
    "id": "science_medium_mcq_72",
    "subject": "science",
    "topic": "Earth Science",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the outermost layer of the Earth called?",
    "options": [
      {
        "label": "Outer Core",
        "value": "Outer Core"
      },
      {
        "label": "Crust",
        "value": "Crust"
      },
      {
        "label": "Mantle",
        "value": "Mantle"
      },
      {
        "label": "Inner Core",
        "value": "Inner Core"
      }
    ],
    "correctAnswer": "Crust",
    "explanation": "The correct term is Crust.",
    "marks": 2
  },
  {
    "id": "science_medium_tf_73",
    "subject": "science",
    "topic": "Earth Science",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is the outermost layer of the Earth called.', the correct answer is Mantle.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Crust.",
    "marks": 2
  },
  {
    "id": "science_medium_sa_74",
    "subject": "science",
    "topic": "Earth Science",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the outermost layer of the Earth called?",
    "correctAnswer": "Crust",
    "explanation": "The correct term is Crust.",
    "marks": 2
  },
  {
    "id": "science_hard_mcq_75",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What principle states that energy cannot be created or destroyed?",
    "options": [
      {
        "label": "Relativity",
        "value": "Relativity"
      },
      {
        "label": "Pauli Exclusion",
        "value": "Pauli Exclusion"
      },
      {
        "label": "Conservation of Energy",
        "value": "Conservation of Energy"
      },
      {
        "label": "Heisenberg Uncertainty",
        "value": "Heisenberg Uncertainty"
      }
    ],
    "correctAnswer": "Conservation of Energy",
    "explanation": "The correct term is Conservation of Energy.",
    "marks": 3
  },
  {
    "id": "science_hard_tf_76",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Pauli Exclusion is the correct term for: What principle states that energy cannot be created or destroyed.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Conservation of Energy.",
    "marks": 3
  },
  {
    "id": "science_hard_sa_77",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What principle states that energy cannot be created or destroyed?",
    "correctAnswer": "Conservation of Energy",
    "explanation": "The correct term is Conservation of Energy.",
    "marks": 3
  },
  {
    "id": "science_hard_mcq_78",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "hard",
    "type": "radio",
    "label": "What is a substance that speeds up a chemical reaction without being consumed?",
    "options": [
      {
        "label": "Catalyst",
        "value": "Catalyst"
      },
      {
        "label": "Inhibitor",
        "value": "Inhibitor"
      },
      {
        "label": "Reactant",
        "value": "Reactant"
      },
      {
        "label": "Product",
        "value": "Product"
      }
    ],
    "correctAnswer": "Catalyst",
    "explanation": "The correct term is Catalyst.",
    "marks": 3
  },
  {
    "id": "science_hard_tf_79",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Catalyst is the answer to the following question - What is a substance that speeds up a chemical reaction without being consumed.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Catalyst is correct.",
    "marks": 3
  },
  {
    "id": "science_hard_sa_80",
    "subject": "science",
    "topic": "Chemistry",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What is a substance that speeds up a chemical reaction without being consumed?",
    "correctAnswer": "Catalyst",
    "explanation": "The correct term is Catalyst.",
    "marks": 3
  },
  {
    "id": "science_hard_mcq_81",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What organelle is known as the powerhouse of the cell?",
    "options": [
      {
        "label": "Mitochondria",
        "value": "Mitochondria"
      },
      {
        "label": "Nucleus",
        "value": "Nucleus"
      },
      {
        "label": "Chloroplast",
        "value": "Chloroplast"
      },
      {
        "label": "Ribosome",
        "value": "Ribosome"
      }
    ],
    "correctAnswer": "Mitochondria",
    "explanation": "The correct term is Mitochondria.",
    "marks": 3
  },
  {
    "id": "science_hard_tf_82",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Mitochondria is the correct term for: What organelle is known as the powerhouse of the cell.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Mitochondria is correct.",
    "marks": 3
  },
  {
    "id": "science_hard_sa_83",
    "subject": "science",
    "topic": "Biology",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What organelle is known as the powerhouse of the cell?",
    "correctAnswer": "Mitochondria",
    "explanation": "The correct term is Mitochondria.",
    "marks": 3
  },
  {
    "id": "science_hard_mcq_84",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "radio",
    "label": "What fundamental force is responsible for radioactive decay?",
    "options": [
      {
        "label": "Electromagnetism",
        "value": "Electromagnetism"
      },
      {
        "label": "Strong Nuclear Force",
        "value": "Strong Nuclear Force"
      },
      {
        "label": "Gravity",
        "value": "Gravity"
      },
      {
        "label": "Weak Nuclear Force",
        "value": "Weak Nuclear Force"
      }
    ],
    "correctAnswer": "Weak Nuclear Force",
    "explanation": "The correct term is Weak Nuclear Force.",
    "marks": 3
  },
  {
    "id": "science_hard_tf_85",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What fundamental force is responsible for radioactive decay.', the correct answer is Weak Nuclear Force.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Weak Nuclear Force is correct.",
    "marks": 3
  },
  {
    "id": "science_hard_sa_86",
    "subject": "science",
    "topic": "Physics",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What fundamental force is responsible for radioactive decay?",
    "correctAnswer": "Weak Nuclear Force",
    "explanation": "The correct term is Weak Nuclear Force.",
    "marks": 3
  },
  {
    "id": "science_hard_mcq_87",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What is the process of copying DNA into RNA called?",
    "options": [
      {
        "label": "Translation",
        "value": "Translation"
      },
      {
        "label": "Replication",
        "value": "Replication"
      },
      {
        "label": "Transcription",
        "value": "Transcription"
      },
      {
        "label": "Mutation",
        "value": "Mutation"
      }
    ],
    "correctAnswer": "Transcription",
    "explanation": "The correct term is Transcription.",
    "marks": 3
  },
  {
    "id": "science_hard_tf_88",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Replication is the answer to the following question - What is the process of copying DNA into RNA called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Transcription.",
    "marks": 3
  },
  {
    "id": "science_hard_sa_89",
    "subject": "science",
    "topic": "Genetics",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the process of copying DNA into RNA called?",
    "correctAnswer": "Transcription",
    "explanation": "The correct term is Transcription.",
    "marks": 3
  },
  {
    "id": "english_easy_mcq_90",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "What part of speech describes a noun?",
    "options": [
      {
        "label": "Preposition",
        "value": "Preposition"
      },
      {
        "label": "Verb",
        "value": "Verb"
      },
      {
        "label": "Adjective",
        "value": "Adjective"
      },
      {
        "label": "Adverb",
        "value": "Adverb"
      }
    ],
    "correctAnswer": "Adjective",
    "explanation": "The correct term is Adjective.",
    "marks": 1
  },
  {
    "id": "english_easy_tf_91",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What part of speech describes a noun.', the correct answer is Verb.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Adjective.",
    "marks": 1
  },
  {
    "id": "english_easy_sa_92",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What part of speech describes a noun?",
    "correctAnswer": "Adjective",
    "explanation": "The correct term is Adjective.",
    "marks": 1
  },
  {
    "id": "english_easy_mcq_93",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What part of speech represents an action or state of being?",
    "options": [
      {
        "label": "Verb",
        "value": "Verb"
      },
      {
        "label": "Noun",
        "value": "Noun"
      },
      {
        "label": "Pronoun",
        "value": "Pronoun"
      },
      {
        "label": "Conjunction",
        "value": "Conjunction"
      }
    ],
    "correctAnswer": "Verb",
    "explanation": "The correct term is Verb.",
    "marks": 1
  },
  {
    "id": "english_easy_tf_94",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Verb is the correct term for: What part of speech represents an action or state of being.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Verb is correct.",
    "marks": 1
  },
  {
    "id": "english_easy_sa_95",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "text",
    "label": "What part of speech represents an action or state of being?",
    "correctAnswer": "Verb",
    "explanation": "The correct term is Verb.",
    "marks": 1
  },
  {
    "id": "english_easy_mcq_96",
    "subject": "english",
    "topic": "Punctuation",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What punctuation mark is used to indicate a question?",
    "options": [
      {
        "label": "Comma",
        "value": "Comma"
      },
      {
        "label": "Question Mark",
        "value": "Question Mark"
      },
      {
        "label": "Exclamation Point",
        "value": "Exclamation Point"
      },
      {
        "label": "Period",
        "value": "Period"
      }
    ],
    "correctAnswer": "Question Mark",
    "explanation": "The correct term is Question Mark.",
    "marks": 1
  },
  {
    "id": "english_easy_tf_97",
    "subject": "english",
    "topic": "Punctuation",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Question Mark is the correct term for: What punctuation mark is used to indicate a question.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Question Mark is correct.",
    "marks": 1
  },
  {
    "id": "english_easy_sa_98",
    "subject": "english",
    "topic": "Punctuation",
    "difficulty": "easy",
    "type": "text",
    "label": "What punctuation mark is used to indicate a question?",
    "correctAnswer": "Question Mark",
    "explanation": "The correct term is Question Mark.",
    "marks": 1
  },
  {
    "id": "english_easy_mcq_99",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is a word that has the opposite meaning of another word?",
    "options": [
      {
        "label": "Synonym",
        "value": "Synonym"
      },
      {
        "label": "Homophone",
        "value": "Homophone"
      },
      {
        "label": "Acronym",
        "value": "Acronym"
      },
      {
        "label": "Antonym",
        "value": "Antonym"
      }
    ],
    "correctAnswer": "Antonym",
    "explanation": "The correct term is Antonym.",
    "marks": 1
  },
  {
    "id": "english_easy_tf_100",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Synonym is the answer to the following question - What is a word that has the opposite meaning of another word.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Antonym.",
    "marks": 1
  },
  {
    "id": "english_easy_sa_101",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is a word that has the opposite meaning of another word?",
    "correctAnswer": "Antonym",
    "explanation": "The correct term is Antonym.",
    "marks": 1
  },
  {
    "id": "english_easy_mcq_102",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What part of speech is used in place of a noun?",
    "options": [
      {
        "label": "Article",
        "value": "Article"
      },
      {
        "label": "Pronoun",
        "value": "Pronoun"
      },
      {
        "label": "Adverb",
        "value": "Adverb"
      },
      {
        "label": "Adjective",
        "value": "Adjective"
      }
    ],
    "correctAnswer": "Pronoun",
    "explanation": "The correct term is Pronoun.",
    "marks": 1
  },
  {
    "id": "english_easy_tf_103",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Pronoun is the correct term for: What part of speech is used in place of a noun.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Pronoun is correct.",
    "marks": 1
  },
  {
    "id": "english_easy_sa_104",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What part of speech is used in place of a noun?",
    "correctAnswer": "Pronoun",
    "explanation": "The correct term is Pronoun.",
    "marks": 1
  },
  {
    "id": "english_medium_mcq_105",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is a word that modifies a verb, adjective, or another adverb?",
    "options": [
      {
        "label": "Adverb",
        "value": "Adverb"
      },
      {
        "label": "Conjunction",
        "value": "Conjunction"
      },
      {
        "label": "Preposition",
        "value": "Preposition"
      },
      {
        "label": "Interjection",
        "value": "Interjection"
      }
    ],
    "correctAnswer": "Adverb",
    "explanation": "The correct term is Adverb.",
    "marks": 2
  },
  {
    "id": "english_medium_tf_106",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Conjunction is the answer to the following question - What is a word that modifies a verb, adjective, or another adverb.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Adverb.",
    "marks": 2
  },
  {
    "id": "english_medium_sa_107",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is a word that modifies a verb, adjective, or another adverb?",
    "correctAnswer": "Adverb",
    "explanation": "The correct term is Adverb.",
    "marks": 2
  },
  {
    "id": "english_medium_mcq_108",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the main character of a story called?",
    "options": [
      {
        "label": "Foil",
        "value": "Foil"
      },
      {
        "label": "Protagonist",
        "value": "Protagonist"
      },
      {
        "label": "Antagonist",
        "value": "Antagonist"
      },
      {
        "label": "Narrator",
        "value": "Narrator"
      }
    ],
    "correctAnswer": "Protagonist",
    "explanation": "The correct term is Protagonist.",
    "marks": 2
  },
  {
    "id": "english_medium_tf_109",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is the main character of a story called.', the correct answer is Antagonist.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Protagonist.",
    "marks": 2
  },
  {
    "id": "english_medium_sa_110",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is the main character of a story called?",
    "correctAnswer": "Protagonist",
    "explanation": "The correct term is Protagonist.",
    "marks": 2
  },
  {
    "id": "english_medium_mcq_111",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is a comparison between two unlike things using 'like' or 'as'?",
    "options": [
      {
        "label": "Simile",
        "value": "Simile"
      },
      {
        "label": "Metaphor",
        "value": "Metaphor"
      },
      {
        "label": "Hyperbole",
        "value": "Hyperbole"
      },
      {
        "label": "Personification",
        "value": "Personification"
      }
    ],
    "correctAnswer": "Simile",
    "explanation": "The correct term is Simile.",
    "marks": 2
  },
  {
    "id": "english_medium_tf_112",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Hyperbole is the answer to the following question - What is a comparison between two unlike things using 'like' or 'as'.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Simile.",
    "marks": 2
  },
  {
    "id": "english_medium_sa_113",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "medium",
    "type": "text",
    "label": "What is a comparison between two unlike things using 'like' or 'as'?",
    "correctAnswer": "Simile",
    "explanation": "The correct term is Simile.",
    "marks": 2
  },
  {
    "id": "english_medium_mcq_114",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What joins words, phrases, or clauses together?",
    "options": [
      {
        "label": "Interjection",
        "value": "Interjection"
      },
      {
        "label": "Article",
        "value": "Article"
      },
      {
        "label": "Preposition",
        "value": "Preposition"
      },
      {
        "label": "Conjunction",
        "value": "Conjunction"
      }
    ],
    "correctAnswer": "Conjunction",
    "explanation": "The correct term is Conjunction.",
    "marks": 2
  },
  {
    "id": "english_medium_tf_115",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What joins words, phrases, or clauses together.', the correct answer is Interjection.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Conjunction.",
    "marks": 2
  },
  {
    "id": "english_medium_sa_116",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What joins words, phrases, or clauses together?",
    "correctAnswer": "Conjunction",
    "explanation": "The correct term is Conjunction.",
    "marks": 2
  },
  {
    "id": "english_medium_mcq_117",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What are words that sound the same but have different meanings and spellings?",
    "options": [
      {
        "label": "Synonyms",
        "value": "Synonyms"
      },
      {
        "label": "Homophones",
        "value": "Homophones"
      },
      {
        "label": "Antonyms",
        "value": "Antonyms"
      },
      {
        "label": "Homonyms",
        "value": "Homonyms"
      }
    ],
    "correctAnswer": "Homophones",
    "explanation": "The correct term is Homophones.",
    "marks": 2
  },
  {
    "id": "english_medium_tf_118",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What are words that sound the same but have different meanings and spellings.', the correct answer is Homophones.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Homophones is correct.",
    "marks": 2
  },
  {
    "id": "english_medium_sa_119",
    "subject": "english",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "type": "text",
    "label": "What are words that sound the same but have different meanings and spellings?",
    "correctAnswer": "Homophones",
    "explanation": "The correct term is Homophones.",
    "marks": 2
  },
  {
    "id": "english_hard_mcq_120",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is a direct comparison between two unlike things without using 'like' or 'as'?",
    "options": [
      {
        "label": "Metaphor",
        "value": "Metaphor"
      },
      {
        "label": "Simile",
        "value": "Simile"
      },
      {
        "label": "Allusion",
        "value": "Allusion"
      },
      {
        "label": "Irony",
        "value": "Irony"
      }
    ],
    "correctAnswer": "Metaphor",
    "explanation": "The correct term is Metaphor.",
    "marks": 3
  },
  {
    "id": "english_hard_tf_121",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Metaphor is the correct term for: What is a direct comparison between two unlike things without using 'like' or 'as'.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Metaphor is correct.",
    "marks": 3
  },
  {
    "id": "english_hard_sa_122",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What is a direct comparison between two unlike things without using 'like' or 'as'?",
    "correctAnswer": "Metaphor",
    "explanation": "The correct term is Metaphor.",
    "marks": 3
  },
  {
    "id": "english_hard_mcq_123",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is the repetition of initial consonant sounds in neighboring words?",
    "options": [
      {
        "label": "Consonance",
        "value": "Consonance"
      },
      {
        "label": "Alliteration",
        "value": "Alliteration"
      },
      {
        "label": "Assonance",
        "value": "Assonance"
      },
      {
        "label": "Onomatopoeia",
        "value": "Onomatopoeia"
      }
    ],
    "correctAnswer": "Alliteration",
    "explanation": "The correct term is Alliteration.",
    "marks": 3
  },
  {
    "id": "english_hard_tf_124",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Assonance is the answer to the following question - What is the repetition of initial consonant sounds in neighboring words.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Alliteration.",
    "marks": 3
  },
  {
    "id": "english_hard_sa_125",
    "subject": "english",
    "topic": "Poetry",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What is the repetition of initial consonant sounds in neighboring words?",
    "correctAnswer": "Alliteration",
    "explanation": "The correct term is Alliteration.",
    "marks": 3
  },
  {
    "id": "english_hard_mcq_126",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is the term for a character who contrasts with another character?",
    "options": [
      {
        "label": "Foil",
        "value": "Foil"
      },
      {
        "label": "Protagonist",
        "value": "Protagonist"
      },
      {
        "label": "Antagonist",
        "value": "Antagonist"
      },
      {
        "label": "Archetype",
        "value": "Archetype"
      }
    ],
    "correctAnswer": "Foil",
    "explanation": "The correct term is Foil.",
    "marks": 3
  },
  {
    "id": "english_hard_tf_127",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Foil is the correct term for: What is the term for a character who contrasts with another character.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Foil is correct.",
    "marks": 3
  },
  {
    "id": "english_hard_sa_128",
    "subject": "english",
    "topic": "Literature",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the term for a character who contrasts with another character?",
    "correctAnswer": "Foil",
    "explanation": "The correct term is Foil.",
    "marks": 3
  },
  {
    "id": "english_hard_mcq_129",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What type of clause can stand alone as a complete sentence?",
    "options": [
      {
        "label": "Dependent Clause",
        "value": "Dependent Clause"
      },
      {
        "label": "Subordinate Clause",
        "value": "Subordinate Clause"
      },
      {
        "label": "Independent Clause",
        "value": "Independent Clause"
      },
      {
        "label": "Relative Clause",
        "value": "Relative Clause"
      }
    ],
    "correctAnswer": "Independent Clause",
    "explanation": "The correct term is Independent Clause.",
    "marks": 3
  },
  {
    "id": "english_hard_tf_130",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Relative Clause is the answer to the following question - What type of clause can stand alone as a complete sentence.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Independent Clause.",
    "marks": 3
  },
  {
    "id": "english_hard_sa_131",
    "subject": "english",
    "topic": "Grammar",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What type of clause can stand alone as a complete sentence?",
    "correctAnswer": "Independent Clause",
    "explanation": "The correct term is Independent Clause.",
    "marks": 3
  },
  {
    "id": "english_hard_mcq_132",
    "subject": "english",
    "topic": "Rhetoric",
    "difficulty": "hard",
    "type": "radio",
    "label": "What is the use of exaggeration for emphasis or rhetorical effect?",
    "options": [
      {
        "label": "Oxymoron",
        "value": "Oxymoron"
      },
      {
        "label": "Hyperbole",
        "value": "Hyperbole"
      },
      {
        "label": "Understatement",
        "value": "Understatement"
      },
      {
        "label": "Paradox",
        "value": "Paradox"
      }
    ],
    "correctAnswer": "Hyperbole",
    "explanation": "The correct term is Hyperbole.",
    "marks": 3
  },
  {
    "id": "english_hard_tf_133",
    "subject": "english",
    "topic": "Rhetoric",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What is the use of exaggeration for emphasis or rhetorical effect.', the correct answer is Paradox.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Hyperbole.",
    "marks": 3
  },
  {
    "id": "english_hard_sa_134",
    "subject": "english",
    "topic": "Rhetoric",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the use of exaggeration for emphasis or rhetorical effect?",
    "correctAnswer": "Hyperbole",
    "explanation": "The correct term is Hyperbole.",
    "marks": 3
  },
  {
    "id": "history_easy_mcq_135",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Who was the first President of the United States?",
    "options": [
      {
        "label": "John Adams",
        "value": "John Adams"
      },
      {
        "label": "Thomas Jefferson",
        "value": "Thomas Jefferson"
      },
      {
        "label": "George Washington",
        "value": "George Washington"
      },
      {
        "label": "Abraham Lincoln",
        "value": "Abraham Lincoln"
      }
    ],
    "correctAnswer": "George Washington",
    "explanation": "The correct term is George Washington.",
    "marks": 1
  },
  {
    "id": "history_easy_tf_136",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'Who was the first President of the United States.', the correct answer is Thomas Jefferson.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is George Washington.",
    "marks": 1
  },
  {
    "id": "history_easy_sa_137",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: Who was the first President of the United States?",
    "correctAnswer": "George Washington",
    "explanation": "The correct term is George Washington.",
    "marks": 1
  },
  {
    "id": "history_easy_mcq_138",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "radio",
    "label": "In which ancient civilization were the Pyramids built?",
    "options": [
      {
        "label": "Greece",
        "value": "Greece"
      },
      {
        "label": "Mesopotamia",
        "value": "Mesopotamia"
      },
      {
        "label": "Egypt",
        "value": "Egypt"
      },
      {
        "label": "Rome",
        "value": "Rome"
      }
    ],
    "correctAnswer": "Egypt",
    "explanation": "The correct term is Egypt.",
    "marks": 1
  },
  {
    "id": "history_easy_tf_139",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Greece is the answer to the following question - In which ancient civilization were the Pyramids built.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Egypt.",
    "marks": 1
  },
  {
    "id": "history_easy_sa_140",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: In which ancient civilization were the Pyramids built?",
    "correctAnswer": "Egypt",
    "explanation": "The correct term is Egypt.",
    "marks": 1
  },
  {
    "id": "history_easy_mcq_141",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What document starts with 'We the People'?",
    "options": [
      {
        "label": "Magna Carta",
        "value": "Magna Carta"
      },
      {
        "label": "Bill of Rights",
        "value": "Bill of Rights"
      },
      {
        "label": "Declaration of Independence",
        "value": "Declaration of Independence"
      },
      {
        "label": "The Constitution",
        "value": "The Constitution"
      }
    ],
    "correctAnswer": "The Constitution",
    "explanation": "The correct term is The Constitution.",
    "marks": 1
  },
  {
    "id": "history_easy_tf_142",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Magna Carta is the correct term for: What document starts with 'We the People'.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is The Constitution.",
    "marks": 1
  },
  {
    "id": "history_easy_sa_143",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What document starts with 'We the People'?",
    "correctAnswer": "The Constitution",
    "explanation": "The correct term is The Constitution.",
    "marks": 1
  },
  {
    "id": "history_easy_mcq_144",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which famous wall was built to protect China from invasions?",
    "options": [
      {
        "label": "Berlin Wall",
        "value": "Berlin Wall"
      },
      {
        "label": "Hadrian's Wall",
        "value": "Hadrian's Wall"
      },
      {
        "label": "Great Wall of China",
        "value": "Great Wall of China"
      },
      {
        "label": "Western Wall",
        "value": "Western Wall"
      }
    ],
    "correctAnswer": "Great Wall of China",
    "explanation": "The correct term is Great Wall of China.",
    "marks": 1
  },
  {
    "id": "history_easy_tf_145",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Great Wall of China is the correct term for: Which famous wall was built to protect China from invasions.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Great Wall of China is correct.",
    "marks": 1
  },
  {
    "id": "history_easy_sa_146",
    "subject": "history",
    "topic": "World History",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: Which famous wall was built to protect China from invasions?",
    "correctAnswer": "Great Wall of China",
    "explanation": "The correct term is Great Wall of China.",
    "marks": 1
  },
  {
    "id": "history_easy_mcq_147",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? Who wrote the Declaration of Independence?",
    "options": [
      {
        "label": "Benjamin Franklin",
        "value": "Benjamin Franklin"
      },
      {
        "label": "Thomas Jefferson",
        "value": "Thomas Jefferson"
      },
      {
        "label": "George Washington",
        "value": "George Washington"
      },
      {
        "label": "James Madison",
        "value": "James Madison"
      }
    ],
    "correctAnswer": "Thomas Jefferson",
    "explanation": "The correct term is Thomas Jefferson.",
    "marks": 1
  },
  {
    "id": "history_easy_tf_148",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: George Washington is the answer to the following question - Who wrote the Declaration of Independence.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Thomas Jefferson.",
    "marks": 1
  },
  {
    "id": "history_easy_sa_149",
    "subject": "history",
    "topic": "US History",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: Who wrote the Declaration of Independence?",
    "correctAnswer": "Thomas Jefferson",
    "explanation": "The correct term is Thomas Jefferson.",
    "marks": 1
  },
  {
    "id": "history_medium_mcq_150",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What event triggered the start of World War I?",
    "options": [
      {
        "label": "Assassination of Archduke Franz Ferdinand",
        "value": "Assassination of Archduke Franz Ferdinand"
      },
      {
        "label": "Invasion of Poland",
        "value": "Invasion of Poland"
      },
      {
        "label": "Sinking of the Lusitania",
        "value": "Sinking of the Lusitania"
      },
      {
        "label": "Bombing of Pearl Harbor",
        "value": "Bombing of Pearl Harbor"
      }
    ],
    "correctAnswer": "Assassination of Archduke Franz Ferdinand",
    "explanation": "The correct term is Assassination of Archduke Franz Ferdinand.",
    "marks": 2
  },
  {
    "id": "history_medium_tf_151",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What event triggered the start of World War I.', the correct answer is Assassination of Archduke Franz Ferdinand.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Assassination of Archduke Franz Ferdinand is correct.",
    "marks": 2
  },
  {
    "id": "history_medium_sa_152",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What event triggered the start of World War I?",
    "correctAnswer": "Assassination of Archduke Franz Ferdinand",
    "explanation": "The correct term is Assassination of Archduke Franz Ferdinand.",
    "marks": 2
  },
  {
    "id": "history_medium_mcq_153",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which war was fought between the North and South regions of the US?",
    "options": [
      {
        "label": "Spanish-American War",
        "value": "Spanish-American War"
      },
      {
        "label": "War of 1812",
        "value": "War of 1812"
      },
      {
        "label": "American Civil War",
        "value": "American Civil War"
      },
      {
        "label": "Revolutionary War",
        "value": "Revolutionary War"
      }
    ],
    "correctAnswer": "American Civil War",
    "explanation": "The correct term is American Civil War.",
    "marks": 2
  },
  {
    "id": "history_medium_tf_154",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? American Civil War is the correct term for: Which war was fought between the North and South regions of the US.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, American Civil War is correct.",
    "marks": 2
  },
  {
    "id": "history_medium_sa_155",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: Which war was fought between the North and South regions of the US?",
    "correctAnswer": "American Civil War",
    "explanation": "The correct term is American Civil War.",
    "marks": 2
  },
  {
    "id": "history_medium_mcq_156",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Who was the famous Queen of Ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
    "options": [
      {
        "label": "Boudicca",
        "value": "Boudicca"
      },
      {
        "label": "Nefertiti",
        "value": "Nefertiti"
      },
      {
        "label": "Hatshepsut",
        "value": "Hatshepsut"
      },
      {
        "label": "Cleopatra",
        "value": "Cleopatra"
      }
    ],
    "correctAnswer": "Cleopatra",
    "explanation": "The correct term is Cleopatra.",
    "marks": 2
  },
  {
    "id": "history_medium_tf_157",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Boudicca is the correct term for: Who was the famous Queen of Ancient Egypt known for her relationships with Julius Caesar and Mark Antony.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Cleopatra.",
    "marks": 2
  },
  {
    "id": "history_medium_sa_158",
    "subject": "history",
    "topic": "World History",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: Who was the famous Queen of Ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
    "correctAnswer": "Cleopatra",
    "explanation": "The correct term is Cleopatra.",
    "marks": 2
  },
  {
    "id": "history_medium_mcq_159",
    "subject": "history",
    "topic": "European History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What was the period of cultural and artistic rebirth in Europe called?",
    "options": [
      {
        "label": "The Middle Ages",
        "value": "The Middle Ages"
      },
      {
        "label": "The Renaissance",
        "value": "The Renaissance"
      },
      {
        "label": "The Industrial Revolution",
        "value": "The Industrial Revolution"
      },
      {
        "label": "The Enlightenment",
        "value": "The Enlightenment"
      }
    ],
    "correctAnswer": "The Renaissance",
    "explanation": "The correct term is The Renaissance.",
    "marks": 2
  },
  {
    "id": "history_medium_tf_160",
    "subject": "history",
    "topic": "European History",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: The Enlightenment is the answer to the following question - What was the period of cultural and artistic rebirth in Europe called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is The Renaissance.",
    "marks": 2
  },
  {
    "id": "history_medium_sa_161",
    "subject": "history",
    "topic": "European History",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What was the period of cultural and artistic rebirth in Europe called?",
    "correctAnswer": "The Renaissance",
    "explanation": "The correct term is The Renaissance.",
    "marks": 2
  },
  {
    "id": "history_medium_mcq_162",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which president issued the Emancipation Proclamation?",
    "options": [
      {
        "label": "Abraham Lincoln",
        "value": "Abraham Lincoln"
      },
      {
        "label": "George Washington",
        "value": "George Washington"
      },
      {
        "label": "Andrew Jackson",
        "value": "Andrew Jackson"
      },
      {
        "label": "Theodore Roosevelt",
        "value": "Theodore Roosevelt"
      }
    ],
    "correctAnswer": "Abraham Lincoln",
    "explanation": "The correct term is Abraham Lincoln.",
    "marks": 2
  },
  {
    "id": "history_medium_tf_163",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Abraham Lincoln is the correct term for: Which president issued the Emancipation Proclamation.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Abraham Lincoln is correct.",
    "marks": 2
  },
  {
    "id": "history_medium_sa_164",
    "subject": "history",
    "topic": "US History",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: Which president issued the Emancipation Proclamation?",
    "correctAnswer": "Abraham Lincoln",
    "explanation": "The correct term is Abraham Lincoln.",
    "marks": 2
  },
  {
    "id": "history_hard_mcq_165",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "radio",
    "label": "What treaty officially ended World War I?",
    "options": [
      {
        "label": "Treaty of Versailles",
        "value": "Treaty of Versailles"
      },
      {
        "label": "Treaty of Ghent",
        "value": "Treaty of Ghent"
      },
      {
        "label": "Treaty of Tordesillas",
        "value": "Treaty of Tordesillas"
      },
      {
        "label": "Treaty of Paris",
        "value": "Treaty of Paris"
      }
    ],
    "correctAnswer": "Treaty of Versailles",
    "explanation": "The correct term is Treaty of Versailles.",
    "marks": 3
  },
  {
    "id": "history_hard_tf_166",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Treaty of Ghent is the answer to the following question - What treaty officially ended World War I.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Treaty of Versailles.",
    "marks": 3
  },
  {
    "id": "history_hard_sa_167",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What treaty officially ended World War I?",
    "correctAnswer": "Treaty of Versailles",
    "explanation": "The correct term is Treaty of Versailles.",
    "marks": 3
  },
  {
    "id": "history_hard_mcq_168",
    "subject": "history",
    "topic": "Ancient History",
    "difficulty": "hard",
    "type": "radio",
    "label": "Who was the Macedonian king who created one of the largest empires in ancient history?",
    "options": [
      {
        "label": "Genghis Khan",
        "value": "Genghis Khan"
      },
      {
        "label": "Alexander the Great",
        "value": "Alexander the Great"
      },
      {
        "label": "Julius Caesar",
        "value": "Julius Caesar"
      },
      {
        "label": "Cyrus the Great",
        "value": "Cyrus the Great"
      }
    ],
    "correctAnswer": "Alexander the Great",
    "explanation": "The correct term is Alexander the Great.",
    "marks": 3
  },
  {
    "id": "history_hard_tf_169",
    "subject": "history",
    "topic": "Ancient History",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'Who was the Macedonian king who created one of the largest empires in ancient history.', the correct answer is Genghis Khan.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Alexander the Great.",
    "marks": 3
  },
  {
    "id": "history_hard_sa_170",
    "subject": "history",
    "topic": "Ancient History",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Who was the Macedonian king who created one of the largest empires in ancient history?",
    "correctAnswer": "Alexander the Great",
    "explanation": "The correct term is Alexander the Great.",
    "marks": 3
  },
  {
    "id": "history_hard_mcq_171",
    "subject": "history",
    "topic": "European History",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which revolution began with the storming of the Bastille in 1789?",
    "options": [
      {
        "label": "American Revolution",
        "value": "American Revolution"
      },
      {
        "label": "Industrial Revolution",
        "value": "Industrial Revolution"
      },
      {
        "label": "French Revolution",
        "value": "French Revolution"
      },
      {
        "label": "Russian Revolution",
        "value": "Russian Revolution"
      }
    ],
    "correctAnswer": "French Revolution",
    "explanation": "The correct term is French Revolution.",
    "marks": 3
  },
  {
    "id": "history_hard_tf_172",
    "subject": "history",
    "topic": "European History",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'Which revolution began with the storming of the Bastille in 1789.', the correct answer is Russian Revolution.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is French Revolution.",
    "marks": 3
  },
  {
    "id": "history_hard_sa_173",
    "subject": "history",
    "topic": "European History",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Which revolution began with the storming of the Bastille in 1789?",
    "correctAnswer": "French Revolution",
    "explanation": "The correct term is French Revolution.",
    "marks": 3
  },
  {
    "id": "history_hard_mcq_174",
    "subject": "history",
    "topic": "US History",
    "difficulty": "hard",
    "type": "radio",
    "label": "What was the secret US project to develop the atomic bomb called?",
    "options": [
      {
        "label": "Project Gemini",
        "value": "Project Gemini"
      },
      {
        "label": "Project Mercury",
        "value": "Project Mercury"
      },
      {
        "label": "Apollo Project",
        "value": "Apollo Project"
      },
      {
        "label": "Manhattan Project",
        "value": "Manhattan Project"
      }
    ],
    "correctAnswer": "Manhattan Project",
    "explanation": "The correct term is Manhattan Project.",
    "marks": 3
  },
  {
    "id": "history_hard_tf_175",
    "subject": "history",
    "topic": "US History",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Manhattan Project is the correct term for: What was the secret US project to develop the atomic bomb called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Manhattan Project is correct.",
    "marks": 3
  },
  {
    "id": "history_hard_sa_176",
    "subject": "history",
    "topic": "US History",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What was the secret US project to develop the atomic bomb called?",
    "correctAnswer": "Manhattan Project",
    "explanation": "The correct term is Manhattan Project.",
    "marks": 3
  },
  {
    "id": "history_hard_mcq_177",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? Which ancient civilization developed in the region between the Tigris and Euphrates rivers?",
    "options": [
      {
        "label": "Egypt",
        "value": "Egypt"
      },
      {
        "label": "Indus Valley",
        "value": "Indus Valley"
      },
      {
        "label": "Mesoamerica",
        "value": "Mesoamerica"
      },
      {
        "label": "Mesopotamia",
        "value": "Mesopotamia"
      }
    ],
    "correctAnswer": "Mesopotamia",
    "explanation": "The correct term is Mesopotamia.",
    "marks": 3
  },
  {
    "id": "history_hard_tf_178",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Egypt is the correct term for: Which ancient civilization developed in the region between the Tigris and Euphrates rivers.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Mesopotamia.",
    "marks": 3
  },
  {
    "id": "history_hard_sa_179",
    "subject": "history",
    "topic": "World History",
    "difficulty": "hard",
    "type": "text",
    "label": "Which ancient civilization developed in the region between the Tigris and Euphrates rivers?",
    "correctAnswer": "Mesopotamia",
    "explanation": "The correct term is Mesopotamia.",
    "marks": 3
  },
  {
    "id": "geography_easy_mcq_180",
    "subject": "geography",
    "topic": "Continents",
    "difficulty": "easy",
    "type": "radio",
    "label": "What is the largest continent by land area?",
    "options": [
      {
        "label": "Europe",
        "value": "Europe"
      },
      {
        "label": "North America",
        "value": "North America"
      },
      {
        "label": "Africa",
        "value": "Africa"
      },
      {
        "label": "Asia",
        "value": "Asia"
      }
    ],
    "correctAnswer": "Asia",
    "explanation": "The correct term is Asia.",
    "marks": 1
  },
  {
    "id": "geography_easy_tf_181",
    "subject": "geography",
    "topic": "Continents",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? North America is the correct term for: What is the largest continent by land area.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Asia.",
    "marks": 1
  },
  {
    "id": "geography_easy_sa_182",
    "subject": "geography",
    "topic": "Continents",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What is the largest continent by land area?",
    "correctAnswer": "Asia",
    "explanation": "The correct term is Asia.",
    "marks": 1
  },
  {
    "id": "geography_easy_mcq_183",
    "subject": "geography",
    "topic": "Oceans",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the largest ocean on Earth?",
    "options": [
      {
        "label": "Pacific Ocean",
        "value": "Pacific Ocean"
      },
      {
        "label": "Arctic Ocean",
        "value": "Arctic Ocean"
      },
      {
        "label": "Indian Ocean",
        "value": "Indian Ocean"
      },
      {
        "label": "Atlantic Ocean",
        "value": "Atlantic Ocean"
      }
    ],
    "correctAnswer": "Pacific Ocean",
    "explanation": "The correct term is Pacific Ocean.",
    "marks": 1
  },
  {
    "id": "geography_easy_tf_184",
    "subject": "geography",
    "topic": "Oceans",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Arctic Ocean is the answer to the following question - What is the largest ocean on Earth.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Pacific Ocean.",
    "marks": 1
  },
  {
    "id": "geography_easy_sa_185",
    "subject": "geography",
    "topic": "Oceans",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is the largest ocean on Earth?",
    "correctAnswer": "Pacific Ocean",
    "explanation": "The correct term is Pacific Ocean.",
    "marks": 1
  },
  {
    "id": "geography_easy_mcq_186",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? Which country has the largest land area?",
    "options": [
      {
        "label": "Russia",
        "value": "Russia"
      },
      {
        "label": "China",
        "value": "China"
      },
      {
        "label": "United States",
        "value": "United States"
      },
      {
        "label": "Canada",
        "value": "Canada"
      }
    ],
    "correctAnswer": "Russia",
    "explanation": "The correct term is Russia.",
    "marks": 1
  },
  {
    "id": "geography_easy_tf_187",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Russia is the answer to the following question - Which country has the largest land area.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Russia is correct.",
    "marks": 1
  },
  {
    "id": "geography_easy_sa_188",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: Which country has the largest land area?",
    "correctAnswer": "Russia",
    "explanation": "The correct term is Russia.",
    "marks": 1
  },
  {
    "id": "geography_easy_mcq_189",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the longest river in the world?",
    "options": [
      {
        "label": "Nile River",
        "value": "Nile River"
      },
      {
        "label": "Amazon River",
        "value": "Amazon River"
      },
      {
        "label": "Mississippi River",
        "value": "Mississippi River"
      },
      {
        "label": "Yangtze River",
        "value": "Yangtze River"
      }
    ],
    "correctAnswer": "Nile River",
    "explanation": "The correct term is Nile River.",
    "marks": 1
  },
  {
    "id": "geography_easy_tf_190",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Nile River is the answer to the following question - What is the longest river in the world.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Nile River is correct.",
    "marks": 1
  },
  {
    "id": "geography_easy_sa_191",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is the longest river in the world?",
    "correctAnswer": "Nile River",
    "explanation": "The correct term is Nile River.",
    "marks": 1
  },
  {
    "id": "geography_easy_mcq_192",
    "subject": "geography",
    "topic": "Mountains",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is the highest mountain above sea level?",
    "options": [
      {
        "label": "Kangchenjunga",
        "value": "Kangchenjunga"
      },
      {
        "label": "Mount Kilimanjaro",
        "value": "Mount Kilimanjaro"
      },
      {
        "label": "K2",
        "value": "K2"
      },
      {
        "label": "Mount Everest",
        "value": "Mount Everest"
      }
    ],
    "correctAnswer": "Mount Everest",
    "explanation": "The correct term is Mount Everest.",
    "marks": 1
  },
  {
    "id": "geography_easy_tf_193",
    "subject": "geography",
    "topic": "Mountains",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Mount Everest is the correct term for: What is the highest mountain above sea level.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Mount Everest is correct.",
    "marks": 1
  },
  {
    "id": "geography_easy_sa_194",
    "subject": "geography",
    "topic": "Mountains",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is the highest mountain above sea level?",
    "correctAnswer": "Mount Everest",
    "explanation": "The correct term is Mount Everest.",
    "marks": 1
  },
  {
    "id": "geography_medium_mcq_195",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is the capital city of Australia?",
    "options": [
      {
        "label": "Melbourne",
        "value": "Melbourne"
      },
      {
        "label": "Perth",
        "value": "Perth"
      },
      {
        "label": "Sydney",
        "value": "Sydney"
      },
      {
        "label": "Canberra",
        "value": "Canberra"
      }
    ],
    "correctAnswer": "Canberra",
    "explanation": "The correct term is Canberra.",
    "marks": 2
  },
  {
    "id": "geography_medium_tf_196",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is the capital city of Australia.', the correct answer is Canberra.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Canberra is correct.",
    "marks": 2
  },
  {
    "id": "geography_medium_sa_197",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the capital city of Australia?",
    "correctAnswer": "Canberra",
    "explanation": "The correct term is Canberra.",
    "marks": 2
  },
  {
    "id": "geography_medium_mcq_198",
    "subject": "geography",
    "topic": "Deserts",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What is the largest hot desert in the world?",
    "options": [
      {
        "label": "Arabian Desert",
        "value": "Arabian Desert"
      },
      {
        "label": "Sahara Desert",
        "value": "Sahara Desert"
      },
      {
        "label": "Gobi Desert",
        "value": "Gobi Desert"
      },
      {
        "label": "Kalahari Desert",
        "value": "Kalahari Desert"
      }
    ],
    "correctAnswer": "Sahara Desert",
    "explanation": "The correct term is Sahara Desert.",
    "marks": 2
  },
  {
    "id": "geography_medium_tf_199",
    "subject": "geography",
    "topic": "Deserts",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Arabian Desert is the answer to the following question - What is the largest hot desert in the world.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Sahara Desert.",
    "marks": 2
  },
  {
    "id": "geography_medium_sa_200",
    "subject": "geography",
    "topic": "Deserts",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is the largest hot desert in the world?",
    "correctAnswer": "Sahara Desert",
    "explanation": "The correct term is Sahara Desert.",
    "marks": 2
  },
  {
    "id": "geography_medium_mcq_201",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: Which country is shaped like a boot?",
    "options": [
      {
        "label": "Spain",
        "value": "Spain"
      },
      {
        "label": "Italy",
        "value": "Italy"
      },
      {
        "label": "Greece",
        "value": "Greece"
      },
      {
        "label": "Portugal",
        "value": "Portugal"
      }
    ],
    "correctAnswer": "Italy",
    "explanation": "The correct term is Italy.",
    "marks": 2
  },
  {
    "id": "geography_medium_tf_202",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Greece is the answer to the following question - Which country is shaped like a boot.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Italy.",
    "marks": 2
  },
  {
    "id": "geography_medium_sa_203",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: Which country is shaped like a boot?",
    "correctAnswer": "Italy",
    "explanation": "The correct term is Italy.",
    "marks": 2
  },
  {
    "id": "geography_medium_mcq_204",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: Which river flows through the Grand Canyon?",
    "options": [
      {
        "label": "Columbia River",
        "value": "Columbia River"
      },
      {
        "label": "Mississippi River",
        "value": "Mississippi River"
      },
      {
        "label": "Rio Grande",
        "value": "Rio Grande"
      },
      {
        "label": "Colorado River",
        "value": "Colorado River"
      }
    ],
    "correctAnswer": "Colorado River",
    "explanation": "The correct term is Colorado River.",
    "marks": 2
  },
  {
    "id": "geography_medium_tf_205",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Colorado River is the answer to the following question - Which river flows through the Grand Canyon.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Colorado River is correct.",
    "marks": 2
  },
  {
    "id": "geography_medium_sa_206",
    "subject": "geography",
    "topic": "Rivers",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: Which river flows through the Grand Canyon?",
    "correctAnswer": "Colorado River",
    "explanation": "The correct term is Colorado River.",
    "marks": 2
  },
  {
    "id": "geography_medium_mcq_207",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the capital city of Canada?",
    "options": [
      {
        "label": "Vancouver",
        "value": "Vancouver"
      },
      {
        "label": "Montreal",
        "value": "Montreal"
      },
      {
        "label": "Ottawa",
        "value": "Ottawa"
      },
      {
        "label": "Toronto",
        "value": "Toronto"
      }
    ],
    "correctAnswer": "Ottawa",
    "explanation": "The correct term is Ottawa.",
    "marks": 2
  },
  {
    "id": "geography_medium_tf_208",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Ottawa is the correct term for: What is the capital city of Canada.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Ottawa is correct.",
    "marks": 2
  },
  {
    "id": "geography_medium_sa_209",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "medium",
    "type": "text",
    "label": "What is the capital city of Canada?",
    "correctAnswer": "Ottawa",
    "explanation": "The correct term is Ottawa.",
    "marks": 2
  },
  {
    "id": "geography_hard_mcq_210",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: Which country has the most islands?",
    "options": [
      {
        "label": "Indonesia",
        "value": "Indonesia"
      },
      {
        "label": "Philippines",
        "value": "Philippines"
      },
      {
        "label": "Sweden",
        "value": "Sweden"
      },
      {
        "label": "Canada",
        "value": "Canada"
      }
    ],
    "correctAnswer": "Sweden",
    "explanation": "The correct term is Sweden.",
    "marks": 3
  },
  {
    "id": "geography_hard_tf_211",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Sweden is the answer to the following question - Which country has the most islands.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Sweden is correct.",
    "marks": 3
  },
  {
    "id": "geography_hard_sa_212",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "text",
    "label": "Which country has the most islands?",
    "correctAnswer": "Sweden",
    "explanation": "The correct term is Sweden.",
    "marks": 3
  },
  {
    "id": "geography_hard_mcq_213",
    "subject": "geography",
    "topic": "Seas",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: Which sea is located between Jordan to the east and Israel to the west?",
    "options": [
      {
        "label": "Black Sea",
        "value": "Black Sea"
      },
      {
        "label": "Mediterranean Sea",
        "value": "Mediterranean Sea"
      },
      {
        "label": "Red Sea",
        "value": "Red Sea"
      },
      {
        "label": "Dead Sea",
        "value": "Dead Sea"
      }
    ],
    "correctAnswer": "Dead Sea",
    "explanation": "The correct term is Dead Sea.",
    "marks": 3
  },
  {
    "id": "geography_hard_tf_214",
    "subject": "geography",
    "topic": "Seas",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Mediterranean Sea is the answer to the following question - Which sea is located between Jordan to the east and Israel to the west.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Dead Sea.",
    "marks": 3
  },
  {
    "id": "geography_hard_sa_215",
    "subject": "geography",
    "topic": "Seas",
    "difficulty": "hard",
    "type": "text",
    "label": "Which sea is located between Jordan to the east and Israel to the west?",
    "correctAnswer": "Dead Sea",
    "explanation": "The correct term is Dead Sea.",
    "marks": 3
  },
  {
    "id": "geography_hard_mcq_216",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "hard",
    "type": "radio",
    "label": "What is the highest capital city in the world?",
    "options": [
      {
        "label": "La Paz",
        "value": "La Paz"
      },
      {
        "label": "Bogota",
        "value": "Bogota"
      },
      {
        "label": "Quito",
        "value": "Quito"
      },
      {
        "label": "Kathmandu",
        "value": "Kathmandu"
      }
    ],
    "correctAnswer": "La Paz",
    "explanation": "The correct term is La Paz.",
    "marks": 3
  },
  {
    "id": "geography_hard_tf_217",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What is the highest capital city in the world.', the correct answer is La Paz.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, La Paz is correct.",
    "marks": 3
  },
  {
    "id": "geography_hard_sa_218",
    "subject": "geography",
    "topic": "Capitals",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the highest capital city in the world?",
    "correctAnswer": "La Paz",
    "explanation": "The correct term is La Paz.",
    "marks": 3
  },
  {
    "id": "geography_hard_mcq_219",
    "subject": "geography",
    "topic": "Lakes",
    "difficulty": "hard",
    "type": "radio",
    "label": "What is the largest freshwater lake by volume?",
    "options": [
      {
        "label": "Lake Baikal",
        "value": "Lake Baikal"
      },
      {
        "label": "Lake Victoria",
        "value": "Lake Victoria"
      },
      {
        "label": "Caspian Sea",
        "value": "Caspian Sea"
      },
      {
        "label": "Lake Superior",
        "value": "Lake Superior"
      }
    ],
    "correctAnswer": "Lake Baikal",
    "explanation": "The correct term is Lake Baikal.",
    "marks": 3
  },
  {
    "id": "geography_hard_tf_220",
    "subject": "geography",
    "topic": "Lakes",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Lake Victoria is the answer to the following question - What is the largest freshwater lake by volume.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Lake Baikal.",
    "marks": 3
  },
  {
    "id": "geography_hard_sa_221",
    "subject": "geography",
    "topic": "Lakes",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What is the largest freshwater lake by volume?",
    "correctAnswer": "Lake Baikal",
    "explanation": "The correct term is Lake Baikal.",
    "marks": 3
  },
  {
    "id": "geography_hard_mcq_222",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which country is landlocked by only one other country?",
    "options": [
      {
        "label": "Monaco",
        "value": "Monaco"
      },
      {
        "label": "San Marino",
        "value": "San Marino"
      },
      {
        "label": "Lesotho",
        "value": "Lesotho"
      },
      {
        "label": "Vatican City",
        "value": "Vatican City"
      }
    ],
    "correctAnswer": "Lesotho",
    "explanation": "The correct term is Lesotho.",
    "marks": 3
  },
  {
    "id": "geography_hard_tf_223",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'Which country is landlocked by only one other country.', the correct answer is Lesotho.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Lesotho is correct.",
    "marks": 3
  },
  {
    "id": "geography_hard_sa_224",
    "subject": "geography",
    "topic": "Countries",
    "difficulty": "hard",
    "type": "text",
    "label": "Which country is landlocked by only one other country?",
    "correctAnswer": "Lesotho",
    "explanation": "The correct term is Lesotho.",
    "marks": 3
  },
  {
    "id": "computer_science_easy_mcq_225",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What does CPU stand for?",
    "options": [
      {
        "label": "Central Processing Unit",
        "value": "Central Processing Unit"
      },
      {
        "label": "Central Processor Unit",
        "value": "Central Processor Unit"
      },
      {
        "label": "Central Program Unit",
        "value": "Central Program Unit"
      },
      {
        "label": "Computer Personal Unit",
        "value": "Computer Personal Unit"
      }
    ],
    "correctAnswer": "Central Processing Unit",
    "explanation": "The correct term is Central Processing Unit.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_tf_226",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Central Processing Unit is the answer to the following question - What does CPU stand for.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Central Processing Unit is correct.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_sa_227",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "What does CPU stand for?",
    "correctAnswer": "Central Processing Unit",
    "explanation": "The correct term is Central Processing Unit.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_mcq_228",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "easy",
    "type": "radio",
    "label": "What is a sequence of instructions used to solve a problem?",
    "options": [
      {
        "label": "Syntax",
        "value": "Syntax"
      },
      {
        "label": "Algorithm",
        "value": "Algorithm"
      },
      {
        "label": "Variable",
        "value": "Variable"
      },
      {
        "label": "Loop",
        "value": "Loop"
      }
    ],
    "correctAnswer": "Algorithm",
    "explanation": "The correct term is Algorithm.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_tf_229",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is a sequence of instructions used to solve a problem.', the correct answer is Algorithm.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Algorithm is correct.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_sa_230",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is a sequence of instructions used to solve a problem?",
    "correctAnswer": "Algorithm",
    "explanation": "The correct term is Algorithm.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_mcq_231",
    "subject": "computer science",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? Which component stores data permanently even when powered off?",
    "options": [
      {
        "label": "Hard Drive",
        "value": "Hard Drive"
      },
      {
        "label": "RAM",
        "value": "RAM"
      },
      {
        "label": "Cache",
        "value": "Cache"
      },
      {
        "label": "Register",
        "value": "Register"
      }
    ],
    "correctAnswer": "Hard Drive",
    "explanation": "The correct term is Hard Drive.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_tf_232",
    "subject": "computer science",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Cache is the correct term for: Which component stores data permanently even when powered off.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Hard Drive.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_sa_233",
    "subject": "computer science",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: Which component stores data permanently even when powered off?",
    "correctAnswer": "Hard Drive",
    "explanation": "The correct term is Hard Drive.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_mcq_234",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the main circuit board of a computer called?",
    "options": [
      {
        "label": "Graphics Card",
        "value": "Graphics Card"
      },
      {
        "label": "Power Supply",
        "value": "Power Supply"
      },
      {
        "label": "Processor",
        "value": "Processor"
      },
      {
        "label": "Motherboard",
        "value": "Motherboard"
      }
    ],
    "correctAnswer": "Motherboard",
    "explanation": "The correct term is Motherboard.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_tf_235",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is the main circuit board of a computer called.', the correct answer is Motherboard.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Motherboard is correct.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_sa_236",
    "subject": "computer science",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "What is the main circuit board of a computer called?",
    "correctAnswer": "Motherboard",
    "explanation": "The correct term is Motherboard.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_mcq_237",
    "subject": "computer science",
    "topic": "Software",
    "difficulty": "easy",
    "type": "radio",
    "label": "What program translates high-level code into machine code?",
    "options": [
      {
        "label": "Debugger",
        "value": "Debugger"
      },
      {
        "label": "Compiler",
        "value": "Compiler"
      },
      {
        "label": "Assembler",
        "value": "Assembler"
      },
      {
        "label": "Interpreter",
        "value": "Interpreter"
      }
    ],
    "correctAnswer": "Compiler",
    "explanation": "The correct term is Compiler.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_tf_238",
    "subject": "computer science",
    "topic": "Software",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Debugger is the correct term for: What program translates high-level code into machine code.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Compiler.",
    "marks": 1
  },
  {
    "id": "computer_science_easy_sa_239",
    "subject": "computer science",
    "topic": "Software",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What program translates high-level code into machine code?",
    "correctAnswer": "Compiler",
    "explanation": "The correct term is Compiler.",
    "marks": 1
  },
  {
    "id": "computer_science_medium_mcq_240",
    "subject": "computer science",
    "topic": "Data Representation",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? How many bits are in a byte?",
    "options": [
      {
        "label": "4",
        "value": "4"
      },
      {
        "label": "32",
        "value": "32"
      },
      {
        "label": "8",
        "value": "8"
      },
      {
        "label": "16",
        "value": "16"
      }
    ],
    "correctAnswer": "8",
    "explanation": "The correct term is 8.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_tf_241",
    "subject": "computer science",
    "topic": "Data Representation",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'How many bits are in a byte.', the correct answer is 8.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, 8 is correct.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_sa_242",
    "subject": "computer science",
    "topic": "Data Representation",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: How many bits are in a byte?",
    "correctAnswer": "8",
    "explanation": "The correct term is 8.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_mcq_243",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "medium",
    "type": "radio",
    "label": "What paradigm is based on 'objects' containing data and methods?",
    "options": [
      {
        "label": "Procedural Programming",
        "value": "Procedural Programming"
      },
      {
        "label": "Object-Oriented Programming",
        "value": "Object-Oriented Programming"
      },
      {
        "label": "Functional Programming",
        "value": "Functional Programming"
      },
      {
        "label": "Logic Programming",
        "value": "Logic Programming"
      }
    ],
    "correctAnswer": "Object-Oriented Programming",
    "explanation": "The correct term is Object-Oriented Programming.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_tf_244",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Object-Oriented Programming is the answer to the following question - What paradigm is based on 'objects' containing data and methods.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Object-Oriented Programming is correct.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_sa_245",
    "subject": "computer science",
    "topic": "Programming",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What paradigm is based on 'objects' containing data and methods?",
    "correctAnswer": "Object-Oriented Programming",
    "explanation": "The correct term is Object-Oriented Programming.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_mcq_246",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What protocol is used to transfer web pages over the internet?",
    "options": [
      {
        "label": "SMTP",
        "value": "SMTP"
      },
      {
        "label": "SSH",
        "value": "SSH"
      },
      {
        "label": "FTP",
        "value": "FTP"
      },
      {
        "label": "HTTP",
        "value": "HTTP"
      }
    ],
    "correctAnswer": "HTTP",
    "explanation": "The correct term is HTTP.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_tf_247",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What protocol is used to transfer web pages over the internet.', the correct answer is HTTP.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, HTTP is correct.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_sa_248",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What protocol is used to transfer web pages over the internet?",
    "correctAnswer": "HTTP",
    "explanation": "The correct term is HTTP.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_mcq_249",
    "subject": "computer science",
    "topic": "Databases",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What language is primarily used to query relational databases?",
    "options": [
      {
        "label": "Java",
        "value": "Java"
      },
      {
        "label": "C++",
        "value": "C++"
      },
      {
        "label": "Python",
        "value": "Python"
      },
      {
        "label": "SQL",
        "value": "SQL"
      }
    ],
    "correctAnswer": "SQL",
    "explanation": "The correct term is SQL.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_tf_250",
    "subject": "computer science",
    "topic": "Databases",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? SQL is the correct term for: What language is primarily used to query relational databases.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, SQL is correct.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_sa_251",
    "subject": "computer science",
    "topic": "Databases",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What language is primarily used to query relational databases?",
    "correctAnswer": "SQL",
    "explanation": "The correct term is SQL.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_mcq_252",
    "subject": "computer science",
    "topic": "OS",
    "difficulty": "medium",
    "type": "radio",
    "label": "What acts as an intermediary between computer hardware and the user?",
    "options": [
      {
        "label": "Device Driver",
        "value": "Device Driver"
      },
      {
        "label": "Firmware",
        "value": "Firmware"
      },
      {
        "label": "Application Software",
        "value": "Application Software"
      },
      {
        "label": "Operating System",
        "value": "Operating System"
      }
    ],
    "correctAnswer": "Operating System",
    "explanation": "The correct term is Operating System.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_tf_253",
    "subject": "computer science",
    "topic": "OS",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Operating System is the correct term for: What acts as an intermediary between computer hardware and the user.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Operating System is correct.",
    "marks": 2
  },
  {
    "id": "computer_science_medium_sa_254",
    "subject": "computer science",
    "topic": "OS",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What acts as an intermediary between computer hardware and the user?",
    "correctAnswer": "Operating System",
    "explanation": "The correct term is Operating System.",
    "marks": 2
  },
  {
    "id": "computer_science_hard_mcq_255",
    "subject": "computer science",
    "topic": "Algorithms",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What is the time complexity of a binary search?",
    "options": [
      {
        "label": "O(1)",
        "value": "O(1)"
      },
      {
        "label": "O(log n)",
        "value": "O(log n)"
      },
      {
        "label": "O(n)",
        "value": "O(n)"
      },
      {
        "label": "O(n^2)",
        "value": "O(n^2)"
      }
    ],
    "correctAnswer": "O(log n)",
    "explanation": "The correct term is O(log n).",
    "marks": 3
  },
  {
    "id": "computer_science_hard_tf_256",
    "subject": "computer science",
    "topic": "Algorithms",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? O(1) is the correct term for: What is the time complexity of a binary search.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is O(log n).",
    "marks": 3
  },
  {
    "id": "computer_science_hard_sa_257",
    "subject": "computer science",
    "topic": "Algorithms",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the time complexity of a binary search?",
    "correctAnswer": "O(log n)",
    "explanation": "The correct term is O(log n).",
    "marks": 3
  },
  {
    "id": "computer_science_hard_mcq_258",
    "subject": "computer science",
    "topic": "Theory",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What theoretical machine can simulate any computer algorithm?",
    "options": [
      {
        "label": "Quantum Computer",
        "value": "Quantum Computer"
      },
      {
        "label": "Finite State Machine",
        "value": "Finite State Machine"
      },
      {
        "label": "Turing Machine",
        "value": "Turing Machine"
      },
      {
        "label": "Von Neumann Architecture",
        "value": "Von Neumann Architecture"
      }
    ],
    "correctAnswer": "Turing Machine",
    "explanation": "The correct term is Turing Machine.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_tf_259",
    "subject": "computer science",
    "topic": "Theory",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What theoretical machine can simulate any computer algorithm.', the correct answer is Turing Machine.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Turing Machine is correct.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_sa_260",
    "subject": "computer science",
    "topic": "Theory",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What theoretical machine can simulate any computer algorithm?",
    "correctAnswer": "Turing Machine",
    "explanation": "The correct term is Turing Machine.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_mcq_261",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? In the OSI model, which layer ensures reliable data transfer?",
    "options": [
      {
        "label": "Network Layer",
        "value": "Network Layer"
      },
      {
        "label": "Physical Layer",
        "value": "Physical Layer"
      },
      {
        "label": "Transport Layer",
        "value": "Transport Layer"
      },
      {
        "label": "Data Link Layer",
        "value": "Data Link Layer"
      }
    ],
    "correctAnswer": "Transport Layer",
    "explanation": "The correct term is Transport Layer.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_tf_262",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Network Layer is the correct term for: In the OSI model, which layer ensures reliable data transfer.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Transport Layer.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_sa_263",
    "subject": "computer science",
    "topic": "Networking",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: In the OSI model, which layer ensures reliable data transfer?",
    "correctAnswer": "Transport Layer",
    "explanation": "The correct term is Transport Layer.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_mcq_264",
    "subject": "computer science",
    "topic": "Security",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What cryptographic method uses two different keys (public and private)?",
    "options": [
      {
        "label": "Asymmetric Encryption",
        "value": "Asymmetric Encryption"
      },
      {
        "label": "Symmetric Encryption",
        "value": "Symmetric Encryption"
      },
      {
        "label": "Salting",
        "value": "Salting"
      },
      {
        "label": "Hashing",
        "value": "Hashing"
      }
    ],
    "correctAnswer": "Asymmetric Encryption",
    "explanation": "The correct term is Asymmetric Encryption.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_tf_265",
    "subject": "computer science",
    "topic": "Security",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Asymmetric Encryption is the answer to the following question - What cryptographic method uses two different keys (public and private).",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Asymmetric Encryption is correct.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_sa_266",
    "subject": "computer science",
    "topic": "Security",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What cryptographic method uses two different keys (public and private)?",
    "correctAnswer": "Asymmetric Encryption",
    "explanation": "The correct term is Asymmetric Encryption.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_mcq_267",
    "subject": "computer science",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "radio",
    "label": "What memory type acts as a buffer between the CPU and main memory?",
    "options": [
      {
        "label": "Cache",
        "value": "Cache"
      },
      {
        "label": "ROM",
        "value": "ROM"
      },
      {
        "label": "Virtual Memory",
        "value": "Virtual Memory"
      },
      {
        "label": "Registers",
        "value": "Registers"
      }
    ],
    "correctAnswer": "Cache",
    "explanation": "The correct term is Cache.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_tf_268",
    "subject": "computer science",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? ROM is the correct term for: What memory type acts as a buffer between the CPU and main memory.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Cache.",
    "marks": 3
  },
  {
    "id": "computer_science_hard_sa_269",
    "subject": "computer science",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What memory type acts as a buffer between the CPU and main memory?",
    "correctAnswer": "Cache",
    "explanation": "The correct term is Cache.",
    "marks": 3
  },
  {
    "id": "dbms_easy_mcq_270",
    "subject": "dbms",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What does DBMS stand for?",
    "options": [
      {
        "label": "Data Base Manipulation System",
        "value": "Data Base Manipulation System"
      },
      {
        "label": "Database Manipulation System",
        "value": "Database Manipulation System"
      },
      {
        "label": "Data Bank Management System",
        "value": "Data Bank Management System"
      },
      {
        "label": "Database Management System",
        "value": "Database Management System"
      }
    ],
    "correctAnswer": "Database Management System",
    "explanation": "The correct term is Database Management System.",
    "marks": 1
  },
  {
    "id": "dbms_easy_tf_271",
    "subject": "dbms",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What does DBMS stand for.', the correct answer is Database Management System.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Database Management System is correct.",
    "marks": 1
  },
  {
    "id": "dbms_easy_sa_272",
    "subject": "dbms",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What does DBMS stand for?",
    "correctAnswer": "Database Management System",
    "explanation": "The correct term is Database Management System.",
    "marks": 1
  },
  {
    "id": "dbms_easy_mcq_273",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: Which SQL clause is used to filter records?",
    "options": [
      {
        "label": "SELECT",
        "value": "SELECT"
      },
      {
        "label": "HAVING",
        "value": "HAVING"
      },
      {
        "label": "FILTER",
        "value": "FILTER"
      },
      {
        "label": "WHERE",
        "value": "WHERE"
      }
    ],
    "correctAnswer": "WHERE",
    "explanation": "The correct term is WHERE.",
    "marks": 1
  },
  {
    "id": "dbms_easy_tf_274",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? SELECT is the correct term for: Which SQL clause is used to filter records.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is WHERE.",
    "marks": 1
  },
  {
    "id": "dbms_easy_sa_275",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: Which SQL clause is used to filter records?",
    "correctAnswer": "WHERE",
    "explanation": "The correct term is WHERE.",
    "marks": 1
  },
  {
    "id": "dbms_easy_mcq_276",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "What uniquely identifies each record in a table?",
    "options": [
      {
        "label": "Unique Key",
        "value": "Unique Key"
      },
      {
        "label": "Index",
        "value": "Index"
      },
      {
        "label": "Primary Key",
        "value": "Primary Key"
      },
      {
        "label": "Foreign Key",
        "value": "Foreign Key"
      }
    ],
    "correctAnswer": "Primary Key",
    "explanation": "The correct term is Primary Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_tf_277",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Foreign Key is the answer to the following question - What uniquely identifies each record in a table.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Primary Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_sa_278",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "text",
    "label": "What uniquely identifies each record in a table?",
    "correctAnswer": "Primary Key",
    "explanation": "The correct term is Primary Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_mcq_279",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What type of key links two tables together?",
    "options": [
      {
        "label": "Candidate Key",
        "value": "Candidate Key"
      },
      {
        "label": "Foreign Key",
        "value": "Foreign Key"
      },
      {
        "label": "Primary Key",
        "value": "Primary Key"
      },
      {
        "label": "Super Key",
        "value": "Super Key"
      }
    ],
    "correctAnswer": "Foreign Key",
    "explanation": "The correct term is Foreign Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_tf_280",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Super Key is the correct term for: What type of key links two tables together.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Foreign Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_sa_281",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What type of key links two tables together?",
    "correctAnswer": "Foreign Key",
    "explanation": "The correct term is Foreign Key.",
    "marks": 1
  },
  {
    "id": "dbms_easy_mcq_282",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which SQL statement is used to extract data from a database?",
    "options": [
      {
        "label": "PULL",
        "value": "PULL"
      },
      {
        "label": "EXTRACT",
        "value": "EXTRACT"
      },
      {
        "label": "GET",
        "value": "GET"
      },
      {
        "label": "SELECT",
        "value": "SELECT"
      }
    ],
    "correctAnswer": "SELECT",
    "explanation": "The correct term is SELECT.",
    "marks": 1
  },
  {
    "id": "dbms_easy_tf_283",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'Which SQL statement is used to extract data from a database.', the correct answer is SELECT.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, SELECT is correct.",
    "marks": 1
  },
  {
    "id": "dbms_easy_sa_284",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "easy",
    "type": "text",
    "label": "Which SQL statement is used to extract data from a database?",
    "correctAnswer": "SELECT",
    "explanation": "The correct term is SELECT.",
    "marks": 1
  },
  {
    "id": "dbms_medium_mcq_285",
    "subject": "dbms",
    "topic": "Properties",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: Which acronym describes the properties of reliable database transactions?",
    "options": [
      {
        "label": "CRUD",
        "value": "CRUD"
      },
      {
        "label": "BASE",
        "value": "BASE"
      },
      {
        "label": "SOLID",
        "value": "SOLID"
      },
      {
        "label": "ACID",
        "value": "ACID"
      }
    ],
    "correctAnswer": "ACID",
    "explanation": "The correct term is ACID.",
    "marks": 2
  },
  {
    "id": "dbms_medium_tf_286",
    "subject": "dbms",
    "topic": "Properties",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which acronym describes the properties of reliable database transactions.', the correct answer is ACID.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, ACID is correct.",
    "marks": 2
  },
  {
    "id": "dbms_medium_sa_287",
    "subject": "dbms",
    "topic": "Properties",
    "difficulty": "medium",
    "type": "text",
    "label": "Which acronym describes the properties of reliable database transactions?",
    "correctAnswer": "ACID",
    "explanation": "The correct term is ACID.",
    "marks": 2
  },
  {
    "id": "dbms_medium_mcq_288",
    "subject": "dbms",
    "topic": "Design",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the process of organizing data to reduce redundancy?",
    "options": [
      {
        "label": "Normalization",
        "value": "Normalization"
      },
      {
        "label": "Partitioning",
        "value": "Partitioning"
      },
      {
        "label": "Denormalization",
        "value": "Denormalization"
      },
      {
        "label": "Indexing",
        "value": "Indexing"
      }
    ],
    "correctAnswer": "Normalization",
    "explanation": "The correct term is Normalization.",
    "marks": 2
  },
  {
    "id": "dbms_medium_tf_289",
    "subject": "dbms",
    "topic": "Design",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Indexing is the correct term for: What is the process of organizing data to reduce redundancy.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Normalization.",
    "marks": 2
  },
  {
    "id": "dbms_medium_sa_290",
    "subject": "dbms",
    "topic": "Design",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What is the process of organizing data to reduce redundancy?",
    "correctAnswer": "Normalization",
    "explanation": "The correct term is Normalization.",
    "marks": 2
  },
  {
    "id": "dbms_medium_mcq_291",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: Which SQL clause is used to sort the result set?",
    "options": [
      {
        "label": "GROUP BY",
        "value": "GROUP BY"
      },
      {
        "label": "ORDER BY",
        "value": "ORDER BY"
      },
      {
        "label": "ALIGN BY",
        "value": "ALIGN BY"
      },
      {
        "label": "SORT BY",
        "value": "SORT BY"
      }
    ],
    "correctAnswer": "ORDER BY",
    "explanation": "The correct term is ORDER BY.",
    "marks": 2
  },
  {
    "id": "dbms_medium_tf_292",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? ORDER BY is the correct term for: Which SQL clause is used to sort the result set.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, ORDER BY is correct.",
    "marks": 2
  },
  {
    "id": "dbms_medium_sa_293",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "medium",
    "type": "text",
    "label": "Which SQL clause is used to sort the result set?",
    "correctAnswer": "ORDER BY",
    "explanation": "The correct term is ORDER BY.",
    "marks": 2
  },
  {
    "id": "dbms_medium_mcq_294",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "radio",
    "label": "What database object improves the speed of data retrieval operations?",
    "options": [
      {
        "label": "Trigger",
        "value": "Trigger"
      },
      {
        "label": "View",
        "value": "View"
      },
      {
        "label": "Index",
        "value": "Index"
      },
      {
        "label": "Stored Procedure",
        "value": "Stored Procedure"
      }
    ],
    "correctAnswer": "Index",
    "explanation": "The correct term is Index.",
    "marks": 2
  },
  {
    "id": "dbms_medium_tf_295",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Index is the correct term for: What database object improves the speed of data retrieval operations.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Index is correct.",
    "marks": 2
  },
  {
    "id": "dbms_medium_sa_296",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What database object improves the speed of data retrieval operations?",
    "correctAnswer": "Index",
    "explanation": "The correct term is Index.",
    "marks": 2
  },
  {
    "id": "dbms_medium_mcq_297",
    "subject": "dbms",
    "topic": "NoSQL",
    "difficulty": "medium",
    "type": "radio",
    "label": "What type of database uses documents, key-value pairs, or graphs instead of tables?",
    "options": [
      {
        "label": "RDBMS",
        "value": "RDBMS"
      },
      {
        "label": "Network",
        "value": "Network"
      },
      {
        "label": "NoSQL",
        "value": "NoSQL"
      },
      {
        "label": "Hierarchical",
        "value": "Hierarchical"
      }
    ],
    "correctAnswer": "NoSQL",
    "explanation": "The correct term is NoSQL.",
    "marks": 2
  },
  {
    "id": "dbms_medium_tf_298",
    "subject": "dbms",
    "topic": "NoSQL",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What type of database uses documents, key-value pairs, or graphs instead of tables.', the correct answer is NoSQL.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, NoSQL is correct.",
    "marks": 2
  },
  {
    "id": "dbms_medium_sa_299",
    "subject": "dbms",
    "topic": "NoSQL",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What type of database uses documents, key-value pairs, or graphs instead of tables?",
    "correctAnswer": "NoSQL",
    "explanation": "The correct term is NoSQL.",
    "marks": 2
  },
  {
    "id": "dbms_hard_mcq_300",
    "subject": "dbms",
    "topic": "Normalization",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which normal form requires the removal of transitive dependencies?",
    "options": [
      {
        "label": "First Normal Form (1NF)",
        "value": "First Normal Form (1NF)"
      },
      {
        "label": "Boyce-Codd Normal Form (BCNF)",
        "value": "Boyce-Codd Normal Form (BCNF)"
      },
      {
        "label": "Second Normal Form (2NF)",
        "value": "Second Normal Form (2NF)"
      },
      {
        "label": "Third Normal Form (3NF)",
        "value": "Third Normal Form (3NF)"
      }
    ],
    "correctAnswer": "Third Normal Form (3NF)",
    "explanation": "The correct term is Third Normal Form (3NF).",
    "marks": 3
  },
  {
    "id": "dbms_hard_tf_301",
    "subject": "dbms",
    "topic": "Normalization",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Third Normal Form (3NF) is the correct term for: Which normal form requires the removal of transitive dependencies.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Third Normal Form (3NF) is correct.",
    "marks": 3
  },
  {
    "id": "dbms_hard_sa_302",
    "subject": "dbms",
    "topic": "Normalization",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: Which normal form requires the removal of transitive dependencies?",
    "correctAnswer": "Third Normal Form (3NF)",
    "explanation": "The correct term is Third Normal Form (3NF).",
    "marks": 3
  },
  {
    "id": "dbms_hard_mcq_303",
    "subject": "dbms",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "What issue occurs when two transactions wait indefinitely for each other to release locks?",
    "options": [
      {
        "label": "Deadlock",
        "value": "Deadlock"
      },
      {
        "label": "Starvation",
        "value": "Starvation"
      },
      {
        "label": "Race Condition",
        "value": "Race Condition"
      },
      {
        "label": "Livelock",
        "value": "Livelock"
      }
    ],
    "correctAnswer": "Deadlock",
    "explanation": "The correct term is Deadlock.",
    "marks": 3
  },
  {
    "id": "dbms_hard_tf_304",
    "subject": "dbms",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Deadlock is the correct term for: What issue occurs when two transactions wait indefinitely for each other to release locks.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Deadlock is correct.",
    "marks": 3
  },
  {
    "id": "dbms_hard_sa_305",
    "subject": "dbms",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What issue occurs when two transactions wait indefinitely for each other to release locks?",
    "correctAnswer": "Deadlock",
    "explanation": "The correct term is Deadlock.",
    "marks": 3
  },
  {
    "id": "dbms_hard_mcq_306",
    "subject": "dbms",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What data structure is most commonly used for database indexes?",
    "options": [
      {
        "label": "Hash Table",
        "value": "Hash Table"
      },
      {
        "label": "Binary Search Tree",
        "value": "Binary Search Tree"
      },
      {
        "label": "Linked List",
        "value": "Linked List"
      },
      {
        "label": "B-Tree",
        "value": "B-Tree"
      }
    ],
    "correctAnswer": "B-Tree",
    "explanation": "The correct term is B-Tree.",
    "marks": 3
  },
  {
    "id": "dbms_hard_tf_307",
    "subject": "dbms",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What data structure is most commonly used for database indexes.', the correct answer is B-Tree.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, B-Tree is correct.",
    "marks": 3
  },
  {
    "id": "dbms_hard_sa_308",
    "subject": "dbms",
    "topic": "Architecture",
    "difficulty": "hard",
    "type": "text",
    "label": "What data structure is most commonly used for database indexes?",
    "correctAnswer": "B-Tree",
    "explanation": "The correct term is B-Tree.",
    "marks": 3
  },
  {
    "id": "dbms_hard_mcq_309",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: Which SQL operation combines rows from two tables based on a related column?",
    "options": [
      {
        "label": "JOIN",
        "value": "JOIN"
      },
      {
        "label": "MERGE",
        "value": "MERGE"
      },
      {
        "label": "UNION",
        "value": "UNION"
      },
      {
        "label": "COMBINE",
        "value": "COMBINE"
      }
    ],
    "correctAnswer": "JOIN",
    "explanation": "The correct term is JOIN.",
    "marks": 3
  },
  {
    "id": "dbms_hard_tf_310",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? COMBINE is the correct term for: Which SQL operation combines rows from two tables based on a related column.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is JOIN.",
    "marks": 3
  },
  {
    "id": "dbms_hard_sa_311",
    "subject": "dbms",
    "topic": "SQL",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Which SQL operation combines rows from two tables based on a related column?",
    "correctAnswer": "JOIN",
    "explanation": "The correct term is JOIN.",
    "marks": 3
  },
  {
    "id": "dbms_hard_mcq_312",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is a virtual table based on the result-set of an SQL statement?",
    "options": [
      {
        "label": "Schema",
        "value": "Schema"
      },
      {
        "label": "Table",
        "value": "Table"
      },
      {
        "label": "Cursor",
        "value": "Cursor"
      },
      {
        "label": "View",
        "value": "View"
      }
    ],
    "correctAnswer": "View",
    "explanation": "The correct term is View.",
    "marks": 3
  },
  {
    "id": "dbms_hard_tf_313",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What is a virtual table based on the result-set of an SQL statement.', the correct answer is View.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, View is correct.",
    "marks": 3
  },
  {
    "id": "dbms_hard_sa_314",
    "subject": "dbms",
    "topic": "Concepts",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is a virtual table based on the result-set of an SQL statement?",
    "correctAnswer": "View",
    "explanation": "The correct term is View.",
    "marks": 3
  },
  {
    "id": "java_easy_mcq_315",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What translates Java bytecode into machine code at runtime?",
    "options": [
      {
        "label": "Java Development Kit (JDK)",
        "value": "Java Development Kit (JDK)"
      },
      {
        "label": "Java Virtual Machine (JVM)",
        "value": "Java Virtual Machine (JVM)"
      },
      {
        "label": "Java Runtime Environment (JRE)",
        "value": "Java Runtime Environment (JRE)"
      },
      {
        "label": "Java Compiler",
        "value": "Java Compiler"
      }
    ],
    "correctAnswer": "Java Virtual Machine (JVM)",
    "explanation": "The correct term is Java Virtual Machine (JVM).",
    "marks": 1
  },
  {
    "id": "java_easy_tf_316",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Java Compiler is the answer to the following question - What translates Java bytecode into machine code at runtime.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Java Virtual Machine (JVM).",
    "marks": 1
  },
  {
    "id": "java_easy_sa_317",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What translates Java bytecode into machine code at runtime?",
    "correctAnswer": "Java Virtual Machine (JVM)",
    "explanation": "The correct term is Java Virtual Machine (JVM).",
    "marks": 1
  },
  {
    "id": "java_easy_mcq_318",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? Which keyword is used to define a class in Java?",
    "options": [
      {
        "label": "class",
        "value": "class"
      },
      {
        "label": "object",
        "value": "object"
      },
      {
        "label": "define",
        "value": "define"
      },
      {
        "label": "struct",
        "value": "struct"
      }
    ],
    "correctAnswer": "class",
    "explanation": "The correct term is class.",
    "marks": 1
  },
  {
    "id": "java_easy_tf_319",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? class is the correct term for: Which keyword is used to define a class in Java.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, class is correct.",
    "marks": 1
  },
  {
    "id": "java_easy_sa_320",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: Which keyword is used to define a class in Java?",
    "correctAnswer": "class",
    "explanation": "The correct term is class.",
    "marks": 1
  },
  {
    "id": "java_easy_mcq_321",
    "subject": "java",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the blueprint from which individual objects are created?",
    "options": [
      {
        "label": "Variable",
        "value": "Variable"
      },
      {
        "label": "Class",
        "value": "Class"
      },
      {
        "label": "Method",
        "value": "Method"
      },
      {
        "label": "Interface",
        "value": "Interface"
      }
    ],
    "correctAnswer": "Class",
    "explanation": "The correct term is Class.",
    "marks": 1
  },
  {
    "id": "java_easy_tf_322",
    "subject": "java",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is the blueprint from which individual objects are created.', the correct answer is Class.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Class is correct.",
    "marks": 1
  },
  {
    "id": "java_easy_sa_323",
    "subject": "java",
    "topic": "Concepts",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What is the blueprint from which individual objects are created?",
    "correctAnswer": "Class",
    "explanation": "The correct term is Class.",
    "marks": 1
  },
  {
    "id": "java_easy_mcq_324",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: Which keyword is used to create an instance of a class?",
    "options": [
      {
        "label": "new",
        "value": "new"
      },
      {
        "label": "create",
        "value": "create"
      },
      {
        "label": "instance",
        "value": "instance"
      },
      {
        "label": "make",
        "value": "make"
      }
    ],
    "correctAnswer": "new",
    "explanation": "The correct term is new.",
    "marks": 1
  },
  {
    "id": "java_easy_tf_325",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? new is the correct term for: Which keyword is used to create an instance of a class.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, new is correct.",
    "marks": 1
  },
  {
    "id": "java_easy_sa_326",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "text",
    "label": "Which keyword is used to create an instance of a class?",
    "correctAnswer": "new",
    "explanation": "The correct term is new.",
    "marks": 1
  },
  {
    "id": "java_easy_mcq_327",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: Which method acts as the entry point for a Java application?",
    "options": [
      {
        "label": "main",
        "value": "main"
      },
      {
        "label": "init",
        "value": "init"
      },
      {
        "label": "run",
        "value": "run"
      },
      {
        "label": "start",
        "value": "start"
      }
    ],
    "correctAnswer": "main",
    "explanation": "The correct term is main.",
    "marks": 1
  },
  {
    "id": "java_easy_tf_328",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: main is the answer to the following question - Which method acts as the entry point for a Java application.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, main is correct.",
    "marks": 1
  },
  {
    "id": "java_easy_sa_329",
    "subject": "java",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: Which method acts as the entry point for a Java application?",
    "correctAnswer": "main",
    "explanation": "The correct term is main.",
    "marks": 1
  },
  {
    "id": "java_medium_mcq_330",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What mechanism allows a class to inherit fields and methods from another class?",
    "options": [
      {
        "label": "Polymorphism",
        "value": "Polymorphism"
      },
      {
        "label": "Encapsulation",
        "value": "Encapsulation"
      },
      {
        "label": "Abstraction",
        "value": "Abstraction"
      },
      {
        "label": "Inheritance",
        "value": "Inheritance"
      }
    ],
    "correctAnswer": "Inheritance",
    "explanation": "The correct term is Inheritance.",
    "marks": 2
  },
  {
    "id": "java_medium_tf_331",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Inheritance is the answer to the following question - What mechanism allows a class to inherit fields and methods from another class.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Inheritance is correct.",
    "marks": 2
  },
  {
    "id": "java_medium_sa_332",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What mechanism allows a class to inherit fields and methods from another class?",
    "correctAnswer": "Inheritance",
    "explanation": "The correct term is Inheritance.",
    "marks": 2
  },
  {
    "id": "java_medium_mcq_333",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which keyword refers to the current object instance?",
    "options": [
      {
        "label": "self",
        "value": "self"
      },
      {
        "label": "current",
        "value": "current"
      },
      {
        "label": "super",
        "value": "super"
      },
      {
        "label": "this",
        "value": "this"
      }
    ],
    "correctAnswer": "this",
    "explanation": "The correct term is this.",
    "marks": 2
  },
  {
    "id": "java_medium_tf_334",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: super is the answer to the following question - Which keyword refers to the current object instance.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is this.",
    "marks": 2
  },
  {
    "id": "java_medium_sa_335",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "text",
    "label": "Which keyword refers to the current object instance?",
    "correctAnswer": "this",
    "explanation": "The correct term is this.",
    "marks": 2
  },
  {
    "id": "java_medium_mcq_336",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What concept describes bundling data and methods into a single unit and hiding internal state?",
    "options": [
      {
        "label": "Abstraction",
        "value": "Abstraction"
      },
      {
        "label": "Inheritance",
        "value": "Inheritance"
      },
      {
        "label": "Encapsulation",
        "value": "Encapsulation"
      },
      {
        "label": "Polymorphism",
        "value": "Polymorphism"
      }
    ],
    "correctAnswer": "Encapsulation",
    "explanation": "The correct term is Encapsulation.",
    "marks": 2
  },
  {
    "id": "java_medium_tf_337",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Encapsulation is the answer to the following question - What concept describes bundling data and methods into a single unit and hiding internal state.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Encapsulation is correct.",
    "marks": 2
  },
  {
    "id": "java_medium_sa_338",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "medium",
    "type": "text",
    "label": "What concept describes bundling data and methods into a single unit and hiding internal state?",
    "correctAnswer": "Encapsulation",
    "explanation": "The correct term is Encapsulation.",
    "marks": 2
  },
  {
    "id": "java_medium_mcq_339",
    "subject": "java",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "radio",
    "label": "What automatically reclaims memory by deleting unreferenced objects?",
    "options": [
      {
        "label": "Finalizer",
        "value": "Finalizer"
      },
      {
        "label": "Destructor",
        "value": "Destructor"
      },
      {
        "label": "Memory Manager",
        "value": "Memory Manager"
      },
      {
        "label": "Garbage Collector",
        "value": "Garbage Collector"
      }
    ],
    "correctAnswer": "Garbage Collector",
    "explanation": "The correct term is Garbage Collector.",
    "marks": 2
  },
  {
    "id": "java_medium_tf_340",
    "subject": "java",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Garbage Collector is the correct term for: What automatically reclaims memory by deleting unreferenced objects.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Garbage Collector is correct.",
    "marks": 2
  },
  {
    "id": "java_medium_sa_341",
    "subject": "java",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "text",
    "label": "What automatically reclaims memory by deleting unreferenced objects?",
    "correctAnswer": "Garbage Collector",
    "explanation": "The correct term is Garbage Collector.",
    "marks": 2
  },
  {
    "id": "java_medium_mcq_342",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which keyword prevents a variable from being modified after initialization?",
    "options": [
      {
        "label": "final",
        "value": "final"
      },
      {
        "label": "static",
        "value": "static"
      },
      {
        "label": "sealed",
        "value": "sealed"
      },
      {
        "label": "const",
        "value": "const"
      }
    ],
    "correctAnswer": "final",
    "explanation": "The correct term is final.",
    "marks": 2
  },
  {
    "id": "java_medium_tf_343",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which keyword prevents a variable from being modified after initialization.', the correct answer is const.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is final.",
    "marks": 2
  },
  {
    "id": "java_medium_sa_344",
    "subject": "java",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "text",
    "label": "Which keyword prevents a variable from being modified after initialization?",
    "correctAnswer": "final",
    "explanation": "The correct term is final.",
    "marks": 2
  },
  {
    "id": "java_hard_mcq_345",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What type of class cannot be instantiated directly and may contain unimplemented methods?",
    "options": [
      {
        "label": "Abstract Class",
        "value": "Abstract Class"
      },
      {
        "label": "Static Class",
        "value": "Static Class"
      },
      {
        "label": "Final Class",
        "value": "Final Class"
      },
      {
        "label": "Inner Class",
        "value": "Inner Class"
      }
    ],
    "correctAnswer": "Abstract Class",
    "explanation": "The correct term is Abstract Class.",
    "marks": 3
  },
  {
    "id": "java_hard_tf_346",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What type of class cannot be instantiated directly and may contain unimplemented methods.', the correct answer is Inner Class.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Abstract Class.",
    "marks": 3
  },
  {
    "id": "java_hard_sa_347",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What type of class cannot be instantiated directly and may contain unimplemented methods?",
    "correctAnswer": "Abstract Class",
    "explanation": "The correct term is Abstract Class.",
    "marks": 3
  },
  {
    "id": "java_hard_mcq_348",
    "subject": "java",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: Which keyword is used to prevent thread interference and memory consistency errors?",
    "options": [
      {
        "label": "synchronized",
        "value": "synchronized"
      },
      {
        "label": "volatile",
        "value": "volatile"
      },
      {
        "label": "strictfp",
        "value": "strictfp"
      },
      {
        "label": "transient",
        "value": "transient"
      }
    ],
    "correctAnswer": "synchronized",
    "explanation": "The correct term is synchronized.",
    "marks": 3
  },
  {
    "id": "java_hard_tf_349",
    "subject": "java",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: synchronized is the answer to the following question - Which keyword is used to prevent thread interference and memory consistency errors.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, synchronized is correct.",
    "marks": 3
  },
  {
    "id": "java_hard_sa_350",
    "subject": "java",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: Which keyword is used to prevent thread interference and memory consistency errors?",
    "correctAnswer": "synchronized",
    "explanation": "The correct term is synchronized.",
    "marks": 3
  },
  {
    "id": "java_hard_mcq_351",
    "subject": "java",
    "topic": "Collections",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: Which interface in the Java Collections Framework prohibits duplicate elements?",
    "options": [
      {
        "label": "Set",
        "value": "Set"
      },
      {
        "label": "Queue",
        "value": "Queue"
      },
      {
        "label": "List",
        "value": "List"
      },
      {
        "label": "Map",
        "value": "Map"
      }
    ],
    "correctAnswer": "Set",
    "explanation": "The correct term is Set.",
    "marks": 3
  },
  {
    "id": "java_hard_tf_352",
    "subject": "java",
    "topic": "Collections",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Set is the answer to the following question - Which interface in the Java Collections Framework prohibits duplicate elements.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Set is correct.",
    "marks": 3
  },
  {
    "id": "java_hard_sa_353",
    "subject": "java",
    "topic": "Collections",
    "difficulty": "hard",
    "type": "text",
    "label": "Which interface in the Java Collections Framework prohibits duplicate elements?",
    "correctAnswer": "Set",
    "explanation": "The correct term is Set.",
    "marks": 3
  },
  {
    "id": "java_hard_mcq_354",
    "subject": "java",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What Java 8 feature allows passing behaviors as parameters concisely?",
    "options": [
      {
        "label": "Method References",
        "value": "Method References"
      },
      {
        "label": "Streams",
        "value": "Streams"
      },
      {
        "label": "Lambda Expressions",
        "value": "Lambda Expressions"
      },
      {
        "label": "Anonymous Classes",
        "value": "Anonymous Classes"
      }
    ],
    "correctAnswer": "Lambda Expressions",
    "explanation": "The correct term is Lambda Expressions.",
    "marks": 3
  },
  {
    "id": "java_hard_tf_355",
    "subject": "java",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Streams is the correct term for: What Java 8 feature allows passing behaviors as parameters concisely.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Lambda Expressions.",
    "marks": 3
  },
  {
    "id": "java_hard_sa_356",
    "subject": "java",
    "topic": "Features",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What Java 8 feature allows passing behaviors as parameters concisely?",
    "correctAnswer": "Lambda Expressions",
    "explanation": "The correct term is Lambda Expressions.",
    "marks": 3
  },
  {
    "id": "java_hard_mcq_357",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What allows an object to take on many forms, often achieved via method overriding?",
    "options": [
      {
        "label": "Polymorphism",
        "value": "Polymorphism"
      },
      {
        "label": "Encapsulation",
        "value": "Encapsulation"
      },
      {
        "label": "Abstraction",
        "value": "Abstraction"
      },
      {
        "label": "Inheritance",
        "value": "Inheritance"
      }
    ],
    "correctAnswer": "Polymorphism",
    "explanation": "The correct term is Polymorphism.",
    "marks": 3
  },
  {
    "id": "java_hard_tf_358",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What allows an object to take on many forms, often achieved via method overriding.', the correct answer is Polymorphism.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Polymorphism is correct.",
    "marks": 3
  },
  {
    "id": "java_hard_sa_359",
    "subject": "java",
    "topic": "OOP",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What allows an object to take on many forms, often achieved via method overriding?",
    "correctAnswer": "Polymorphism",
    "explanation": "The correct term is Polymorphism.",
    "marks": 3
  },
  {
    "id": "python_easy_mcq_360",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which keyword is used to define a function in Python?",
    "options": [
      {
        "label": "func",
        "value": "func"
      },
      {
        "label": "define",
        "value": "define"
      },
      {
        "label": "def",
        "value": "def"
      },
      {
        "label": "function",
        "value": "function"
      }
    ],
    "correctAnswer": "def",
    "explanation": "The correct term is def.",
    "marks": 1
  },
  {
    "id": "python_easy_tf_361",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? function is the correct term for: Which keyword is used to define a function in Python.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is def.",
    "marks": 1
  },
  {
    "id": "python_easy_sa_362",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "easy",
    "type": "text",
    "label": "Which keyword is used to define a function in Python?",
    "correctAnswer": "def",
    "explanation": "The correct term is def.",
    "marks": 1
  },
  {
    "id": "python_easy_mcq_363",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What character is used to start a single-line comment in Python?",
    "options": [
      {
        "label": "#",
        "value": "#"
      },
      {
        "label": "--",
        "value": "--"
      },
      {
        "label": "//",
        "value": "//"
      },
      {
        "label": "/*",
        "value": "/*"
      }
    ],
    "correctAnswer": "#",
    "explanation": "The correct term is #.",
    "marks": 1
  },
  {
    "id": "python_easy_tf_364",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What character is used to start a single-line comment in Python.', the correct answer is --.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is #.",
    "marks": 1
  },
  {
    "id": "python_easy_sa_365",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "text",
    "label": "What character is used to start a single-line comment in Python?",
    "correctAnswer": "#",
    "explanation": "The correct term is #.",
    "marks": 1
  },
  {
    "id": "python_easy_mcq_366",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What data type is an ordered, mutable sequence of items?",
    "options": [
      {
        "label": "List",
        "value": "List"
      },
      {
        "label": "Tuple",
        "value": "Tuple"
      },
      {
        "label": "Set",
        "value": "Set"
      },
      {
        "label": "Dictionary",
        "value": "Dictionary"
      }
    ],
    "correctAnswer": "List",
    "explanation": "The correct term is List.",
    "marks": 1
  },
  {
    "id": "python_easy_tf_367",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What data type is an ordered, mutable sequence of items.', the correct answer is List.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, List is correct.",
    "marks": 1
  },
  {
    "id": "python_easy_sa_368",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What data type is an ordered, mutable sequence of items?",
    "correctAnswer": "List",
    "explanation": "The correct term is List.",
    "marks": 1
  },
  {
    "id": "python_easy_mcq_369",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What data type stores key-value pairs?",
    "options": [
      {
        "label": "Set",
        "value": "Set"
      },
      {
        "label": "List",
        "value": "List"
      },
      {
        "label": "Tuple",
        "value": "Tuple"
      },
      {
        "label": "Dictionary",
        "value": "Dictionary"
      }
    ],
    "correctAnswer": "Dictionary",
    "explanation": "The correct term is Dictionary.",
    "marks": 1
  },
  {
    "id": "python_easy_tf_370",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Dictionary is the correct term for: What data type stores key-value pairs.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Dictionary is correct.",
    "marks": 1
  },
  {
    "id": "python_easy_sa_371",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What data type stores key-value pairs?",
    "correctAnswer": "Dictionary",
    "explanation": "The correct term is Dictionary.",
    "marks": 1
  },
  {
    "id": "python_easy_mcq_372",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: Instead of braces {}, what does Python use to define code blocks?",
    "options": [
      {
        "label": "Parentheses",
        "value": "Parentheses"
      },
      {
        "label": "Semicolons",
        "value": "Semicolons"
      },
      {
        "label": "Brackets",
        "value": "Brackets"
      },
      {
        "label": "Indentation",
        "value": "Indentation"
      }
    ],
    "correctAnswer": "Indentation",
    "explanation": "The correct term is Indentation.",
    "marks": 1
  },
  {
    "id": "python_easy_tf_373",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Indentation is the answer to the following question - Instead of braces {}, what does Python use to define code blocks.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Indentation is correct.",
    "marks": 1
  },
  {
    "id": "python_easy_sa_374",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: Instead of braces {}, what does Python use to define code blocks?",
    "correctAnswer": "Indentation",
    "explanation": "The correct term is Indentation.",
    "marks": 1
  },
  {
    "id": "python_medium_mcq_375",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What data type is an ordered, immutable sequence of items?",
    "options": [
      {
        "label": "List",
        "value": "List"
      },
      {
        "label": "Dictionary",
        "value": "Dictionary"
      },
      {
        "label": "Tuple",
        "value": "Tuple"
      },
      {
        "label": "Set",
        "value": "Set"
      }
    ],
    "correctAnswer": "Tuple",
    "explanation": "The correct term is Tuple.",
    "marks": 2
  },
  {
    "id": "python_medium_tf_376",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Dictionary is the correct term for: What data type is an ordered, immutable sequence of items.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Tuple.",
    "marks": 2
  },
  {
    "id": "python_medium_sa_377",
    "subject": "python",
    "topic": "Data Types",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What data type is an ordered, immutable sequence of items?",
    "correctAnswer": "Tuple",
    "explanation": "The correct term is Tuple.",
    "marks": 2
  },
  {
    "id": "python_medium_mcq_378",
    "subject": "python",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "radio",
    "label": "What allows creating lists concisely by applying an expression to an iterable?",
    "options": [
      {
        "label": "Lambda",
        "value": "Lambda"
      },
      {
        "label": "Decorator",
        "value": "Decorator"
      },
      {
        "label": "List Comprehension",
        "value": "List Comprehension"
      },
      {
        "label": "Generator",
        "value": "Generator"
      }
    ],
    "correctAnswer": "List Comprehension",
    "explanation": "The correct term is List Comprehension.",
    "marks": 2
  },
  {
    "id": "python_medium_tf_379",
    "subject": "python",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Generator is the answer to the following question - What allows creating lists concisely by applying an expression to an iterable.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is List Comprehension.",
    "marks": 2
  },
  {
    "id": "python_medium_sa_380",
    "subject": "python",
    "topic": "Concepts",
    "difficulty": "medium",
    "type": "text",
    "label": "What allows creating lists concisely by applying an expression to an iterable?",
    "correctAnswer": "List Comprehension",
    "explanation": "The correct term is List Comprehension.",
    "marks": 2
  },
  {
    "id": "python_medium_mcq_381",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which keyword is used to create small anonymous functions?",
    "options": [
      {
        "label": "inline",
        "value": "inline"
      },
      {
        "label": "anon",
        "value": "anon"
      },
      {
        "label": "lambda",
        "value": "lambda"
      },
      {
        "label": "macro",
        "value": "macro"
      }
    ],
    "correctAnswer": "lambda",
    "explanation": "The correct term is lambda.",
    "marks": 2
  },
  {
    "id": "python_medium_tf_382",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which keyword is used to create small anonymous functions.', the correct answer is lambda.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, lambda is correct.",
    "marks": 2
  },
  {
    "id": "python_medium_sa_383",
    "subject": "python",
    "topic": "Keywords",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: Which keyword is used to create small anonymous functions?",
    "correctAnswer": "lambda",
    "explanation": "The correct term is lambda.",
    "marks": 2
  },
  {
    "id": "python_medium_mcq_384",
    "subject": "python",
    "topic": "Methods",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What special method is used to initialize an object's attributes in a class?",
    "options": [
      {
        "label": "__new__",
        "value": "__new__"
      },
      {
        "label": "__start__",
        "value": "__start__"
      },
      {
        "label": "__init__",
        "value": "__init__"
      },
      {
        "label": "__construct__",
        "value": "__construct__"
      }
    ],
    "correctAnswer": "__init__",
    "explanation": "The correct term is __init__.",
    "marks": 2
  },
  {
    "id": "python_medium_tf_385",
    "subject": "python",
    "topic": "Methods",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? __init__ is the correct term for: What special method is used to initialize an object's attributes in a class.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, __init__ is correct.",
    "marks": 2
  },
  {
    "id": "python_medium_sa_386",
    "subject": "python",
    "topic": "Methods",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What special method is used to initialize an object's attributes in a class?",
    "correctAnswer": "__init__",
    "explanation": "The correct term is __init__.",
    "marks": 2
  },
  {
    "id": "python_medium_mcq_387",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which keyword refers to the instance of the class inside its methods?",
    "options": [
      {
        "label": "self",
        "value": "self"
      },
      {
        "label": "me",
        "value": "me"
      },
      {
        "label": "this",
        "value": "this"
      },
      {
        "label": "current",
        "value": "current"
      }
    ],
    "correctAnswer": "self",
    "explanation": "The correct term is self.",
    "marks": 2
  },
  {
    "id": "python_medium_tf_388",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which keyword refers to the instance of the class inside its methods.', the correct answer is current.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is self.",
    "marks": 2
  },
  {
    "id": "python_medium_sa_389",
    "subject": "python",
    "topic": "Syntax",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: Which keyword refers to the instance of the class inside its methods?",
    "correctAnswer": "self",
    "explanation": "The correct term is self.",
    "marks": 2
  },
  {
    "id": "python_hard_mcq_390",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What modifies the behavior of a function or class without changing its source code?",
    "options": [
      {
        "label": "Decorator",
        "value": "Decorator"
      },
      {
        "label": "Generator",
        "value": "Generator"
      },
      {
        "label": "Closure",
        "value": "Closure"
      },
      {
        "label": "Iterator",
        "value": "Iterator"
      }
    ],
    "correctAnswer": "Decorator",
    "explanation": "The correct term is Decorator.",
    "marks": 3
  },
  {
    "id": "python_hard_tf_391",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Generator is the correct term for: What modifies the behavior of a function or class without changing its source code.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Decorator.",
    "marks": 3
  },
  {
    "id": "python_hard_sa_392",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What modifies the behavior of a function or class without changing its source code?",
    "correctAnswer": "Decorator",
    "explanation": "The correct term is Decorator.",
    "marks": 3
  },
  {
    "id": "python_hard_mcq_393",
    "subject": "python",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What mechanism prevents multiple native threads from executing Python bytecodes at once?",
    "options": [
      {
        "label": "Mutex",
        "value": "Mutex"
      },
      {
        "label": "Garbage Collector",
        "value": "Garbage Collector"
      },
      {
        "label": "Thread Pool",
        "value": "Thread Pool"
      },
      {
        "label": "Global Interpreter Lock (GIL)",
        "value": "Global Interpreter Lock (GIL)"
      }
    ],
    "correctAnswer": "Global Interpreter Lock (GIL)",
    "explanation": "The correct term is Global Interpreter Lock (GIL).",
    "marks": 3
  },
  {
    "id": "python_hard_tf_394",
    "subject": "python",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What mechanism prevents multiple native threads from executing Python bytecodes at once.', the correct answer is Global Interpreter Lock (GIL).",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Global Interpreter Lock (GIL) is correct.",
    "marks": 3
  },
  {
    "id": "python_hard_sa_395",
    "subject": "python",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What mechanism prevents multiple native threads from executing Python bytecodes at once?",
    "correctAnswer": "Global Interpreter Lock (GIL)",
    "explanation": "The correct term is Global Interpreter Lock (GIL).",
    "marks": 3
  },
  {
    "id": "python_hard_mcq_396",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What type of function uses the 'yield' keyword to return an iterator?",
    "options": [
      {
        "label": "Closure",
        "value": "Closure"
      },
      {
        "label": "Coroutine",
        "value": "Coroutine"
      },
      {
        "label": "Decorator",
        "value": "Decorator"
      },
      {
        "label": "Generator",
        "value": "Generator"
      }
    ],
    "correctAnswer": "Generator",
    "explanation": "The correct term is Generator.",
    "marks": 3
  },
  {
    "id": "python_hard_tf_397",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Generator is the correct term for: What type of function uses the 'yield' keyword to return an iterator.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Generator is correct.",
    "marks": 3
  },
  {
    "id": "python_hard_sa_398",
    "subject": "python",
    "topic": "Features",
    "difficulty": "hard",
    "type": "text",
    "label": "What type of function uses the 'yield' keyword to return an iterator?",
    "correctAnswer": "Generator",
    "explanation": "The correct term is Generator.",
    "marks": 3
  },
  {
    "id": "python_hard_mcq_399",
    "subject": "python",
    "topic": "Types",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What principle assumes an object is valid if it supports the required methods, regardless of its class?",
    "options": [
      {
        "label": "Static Typing",
        "value": "Static Typing"
      },
      {
        "label": "Dynamic Typing",
        "value": "Dynamic Typing"
      },
      {
        "label": "Duck Typing",
        "value": "Duck Typing"
      },
      {
        "label": "Strong Typing",
        "value": "Strong Typing"
      }
    ],
    "correctAnswer": "Duck Typing",
    "explanation": "The correct term is Duck Typing.",
    "marks": 3
  },
  {
    "id": "python_hard_tf_400",
    "subject": "python",
    "topic": "Types",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What principle assumes an object is valid if it supports the required methods, regardless of its class.', the correct answer is Static Typing.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Duck Typing.",
    "marks": 3
  },
  {
    "id": "python_hard_sa_401",
    "subject": "python",
    "topic": "Types",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What principle assumes an object is valid if it supports the required methods, regardless of its class?",
    "correctAnswer": "Duck Typing",
    "explanation": "The correct term is Duck Typing.",
    "marks": 3
  },
  {
    "id": "python_hard_mcq_402",
    "subject": "python",
    "topic": "Modules",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What statement is used to bring an external module into the current namespace?",
    "options": [
      {
        "label": "using",
        "value": "using"
      },
      {
        "label": "require",
        "value": "require"
      },
      {
        "label": "include",
        "value": "include"
      },
      {
        "label": "import",
        "value": "import"
      }
    ],
    "correctAnswer": "import",
    "explanation": "The correct term is import.",
    "marks": 3
  },
  {
    "id": "python_hard_tf_403",
    "subject": "python",
    "topic": "Modules",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? using is the correct term for: What statement is used to bring an external module into the current namespace.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is import.",
    "marks": 3
  },
  {
    "id": "python_hard_sa_404",
    "subject": "python",
    "topic": "Modules",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What statement is used to bring an external module into the current namespace?",
    "correctAnswer": "import",
    "explanation": "The correct term is import.",
    "marks": 3
  },
  {
    "id": "data_structures_easy_mcq_405",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What data structure stores elements in contiguous memory locations?",
    "options": [
      {
        "label": "Tree",
        "value": "Tree"
      },
      {
        "label": "Array",
        "value": "Array"
      },
      {
        "label": "Graph",
        "value": "Graph"
      },
      {
        "label": "Linked List",
        "value": "Linked List"
      }
    ],
    "correctAnswer": "Array",
    "explanation": "The correct term is Array.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_tf_406",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Graph is the correct term for: What data structure stores elements in contiguous memory locations.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Array.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_sa_407",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What data structure stores elements in contiguous memory locations?",
    "correctAnswer": "Array",
    "explanation": "The correct term is Array.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_mcq_408",
    "subject": "data structures",
    "topic": "Stack",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What principle governs the order of operations in a Stack?",
    "options": [
      {
        "label": "FIFO (First In First Out)",
        "value": "FIFO (First In First Out)"
      },
      {
        "label": "FILO (First In Last Out)",
        "value": "FILO (First In Last Out)"
      },
      {
        "label": "LIFO (Last In First Out)",
        "value": "LIFO (Last In First Out)"
      },
      {
        "label": "Random Access",
        "value": "Random Access"
      }
    ],
    "correctAnswer": "LIFO (Last In First Out)",
    "explanation": "The correct term is LIFO (Last In First Out).",
    "marks": 1
  },
  {
    "id": "data_structures_easy_tf_409",
    "subject": "data structures",
    "topic": "Stack",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: LIFO (Last In First Out) is the answer to the following question - What principle governs the order of operations in a Stack.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, LIFO (Last In First Out) is correct.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_sa_410",
    "subject": "data structures",
    "topic": "Stack",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What principle governs the order of operations in a Stack?",
    "correctAnswer": "LIFO (Last In First Out)",
    "explanation": "The correct term is LIFO (Last In First Out).",
    "marks": 1
  },
  {
    "id": "data_structures_easy_mcq_411",
    "subject": "data structures",
    "topic": "Queue",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What principle governs the order of operations in a Queue?",
    "options": [
      {
        "label": "LILO (Last In Last Out)",
        "value": "LILO (Last In Last Out)"
      },
      {
        "label": "FIFO (First In First Out)",
        "value": "FIFO (First In First Out)"
      },
      {
        "label": "Random Access",
        "value": "Random Access"
      },
      {
        "label": "LIFO (Last In First Out)",
        "value": "LIFO (Last In First Out)"
      }
    ],
    "correctAnswer": "FIFO (First In First Out)",
    "explanation": "The correct term is FIFO (First In First Out).",
    "marks": 1
  },
  {
    "id": "data_structures_easy_tf_412",
    "subject": "data structures",
    "topic": "Queue",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: FIFO (First In First Out) is the answer to the following question - What principle governs the order of operations in a Queue.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, FIFO (First In First Out) is correct.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_sa_413",
    "subject": "data structures",
    "topic": "Queue",
    "difficulty": "easy",
    "type": "text",
    "label": "What principle governs the order of operations in a Queue?",
    "correctAnswer": "FIFO (First In First Out)",
    "explanation": "The correct term is FIFO (First In First Out).",
    "marks": 1
  },
  {
    "id": "data_structures_easy_mcq_414",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What data structure consists of nodes where each node points to the next?",
    "options": [
      {
        "label": "Linked List",
        "value": "Linked List"
      },
      {
        "label": "Stack",
        "value": "Stack"
      },
      {
        "label": "Queue",
        "value": "Queue"
      },
      {
        "label": "Array",
        "value": "Array"
      }
    ],
    "correctAnswer": "Linked List",
    "explanation": "The correct term is Linked List.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_tf_415",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Linked List is the answer to the following question - What data structure consists of nodes where each node points to the next.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Linked List is correct.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_sa_416",
    "subject": "data structures",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What data structure consists of nodes where each node points to the next?",
    "correctAnswer": "Linked List",
    "explanation": "The correct term is Linked List.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_mcq_417",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? In a tree, what is a node with no children called?",
    "options": [
      {
        "label": "Root",
        "value": "Root"
      },
      {
        "label": "Leaf",
        "value": "Leaf"
      },
      {
        "label": "Internal Node",
        "value": "Internal Node"
      },
      {
        "label": "Branch",
        "value": "Branch"
      }
    ],
    "correctAnswer": "Leaf",
    "explanation": "The correct term is Leaf.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_tf_418",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Root is the correct term for: In a tree, what is a node with no children called.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Leaf.",
    "marks": 1
  },
  {
    "id": "data_structures_easy_sa_419",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "easy",
    "type": "text",
    "label": "In a tree, what is a node with no children called?",
    "correctAnswer": "Leaf",
    "explanation": "The correct term is Leaf.",
    "marks": 1
  },
  {
    "id": "data_structures_medium_mcq_420",
    "subject": "data structures",
    "topic": "Hash",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What data structure maps keys to values using a hash function?",
    "options": [
      {
        "label": "Graph",
        "value": "Graph"
      },
      {
        "label": "Binary Tree",
        "value": "Binary Tree"
      },
      {
        "label": "Heap",
        "value": "Heap"
      },
      {
        "label": "Hash Table",
        "value": "Hash Table"
      }
    ],
    "correctAnswer": "Hash Table",
    "explanation": "The correct term is Hash Table.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_tf_421",
    "subject": "data structures",
    "topic": "Hash",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Hash Table is the correct term for: What data structure maps keys to values using a hash function.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Hash Table is correct.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_sa_422",
    "subject": "data structures",
    "topic": "Hash",
    "difficulty": "medium",
    "type": "text",
    "label": "What data structure maps keys to values using a hash function?",
    "correctAnswer": "Hash Table",
    "explanation": "The correct term is Hash Table.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_mcq_423",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What type of tree guarantees that a left child is smaller and a right child is larger than the parent?",
    "options": [
      {
        "label": "B-Tree",
        "value": "B-Tree"
      },
      {
        "label": "Trie",
        "value": "Trie"
      },
      {
        "label": "Heap",
        "value": "Heap"
      },
      {
        "label": "Binary Search Tree",
        "value": "Binary Search Tree"
      }
    ],
    "correctAnswer": "Binary Search Tree",
    "explanation": "The correct term is Binary Search Tree.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_tf_424",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: B-Tree is the answer to the following question - What type of tree guarantees that a left child is smaller and a right child is larger than the parent.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Binary Search Tree.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_sa_425",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What type of tree guarantees that a left child is smaller and a right child is larger than the parent?",
    "correctAnswer": "Binary Search Tree",
    "explanation": "The correct term is Binary Search Tree.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_mcq_426",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What data structure consists of vertices (nodes) connected by edges?",
    "options": [
      {
        "label": "Graph",
        "value": "Graph"
      },
      {
        "label": "Linked List",
        "value": "Linked List"
      },
      {
        "label": "Array",
        "value": "Array"
      },
      {
        "label": "Tree",
        "value": "Tree"
      }
    ],
    "correctAnswer": "Graph",
    "explanation": "The correct term is Graph.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_tf_427",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Graph is the correct term for: What data structure consists of vertices (nodes) connected by edges.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Graph is correct.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_sa_428",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What data structure consists of vertices (nodes) connected by edges?",
    "correctAnswer": "Graph",
    "explanation": "The correct term is Graph.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_mcq_429",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What is a specialized tree-based data structure that satisfies the heap property?",
    "options": [
      {
        "label": "AVL Tree",
        "value": "AVL Tree"
      },
      {
        "label": "Heap",
        "value": "Heap"
      },
      {
        "label": "Red-Black Tree",
        "value": "Red-Black Tree"
      },
      {
        "label": "Binary Search Tree",
        "value": "Binary Search Tree"
      }
    ],
    "correctAnswer": "Heap",
    "explanation": "The correct term is Heap.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_tf_430",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Heap is the correct term for: What is a specialized tree-based data structure that satisfies the heap property.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Heap is correct.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_sa_431",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is a specialized tree-based data structure that satisfies the heap property?",
    "correctAnswer": "Heap",
    "explanation": "The correct term is Heap.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_mcq_432",
    "subject": "data structures",
    "topic": "Linked Lists",
    "difficulty": "medium",
    "type": "radio",
    "label": "What type of linked list allows traversal in both forward and backward directions?",
    "options": [
      {
        "label": "Skip List",
        "value": "Skip List"
      },
      {
        "label": "Doubly Linked List",
        "value": "Doubly Linked List"
      },
      {
        "label": "Singly Linked List",
        "value": "Singly Linked List"
      },
      {
        "label": "Circular Linked List",
        "value": "Circular Linked List"
      }
    ],
    "correctAnswer": "Doubly Linked List",
    "explanation": "The correct term is Doubly Linked List.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_tf_433",
    "subject": "data structures",
    "topic": "Linked Lists",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Doubly Linked List is the correct term for: What type of linked list allows traversal in both forward and backward directions.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Doubly Linked List is correct.",
    "marks": 2
  },
  {
    "id": "data_structures_medium_sa_434",
    "subject": "data structures",
    "topic": "Linked Lists",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What type of linked list allows traversal in both forward and backward directions?",
    "correctAnswer": "Doubly Linked List",
    "explanation": "The correct term is Doubly Linked List.",
    "marks": 2
  },
  {
    "id": "data_structures_hard_mcq_435",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which self-balancing binary search tree ensures the heights of two child subtrees differ by at most one?",
    "options": [
      {
        "label": "Splay Tree",
        "value": "Splay Tree"
      },
      {
        "label": "Red-Black Tree",
        "value": "Red-Black Tree"
      },
      {
        "label": "AVL Tree",
        "value": "AVL Tree"
      },
      {
        "label": "B-Tree",
        "value": "B-Tree"
      }
    ],
    "correctAnswer": "AVL Tree",
    "explanation": "The correct term is AVL Tree.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_tf_436",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Splay Tree is the answer to the following question - Which self-balancing binary search tree ensures the heights of two child subtrees differ by at most one.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is AVL Tree.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_sa_437",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Which self-balancing binary search tree ensures the heights of two child subtrees differ by at most one?",
    "correctAnswer": "AVL Tree",
    "explanation": "The correct term is AVL Tree.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_mcq_438",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What graph traversal algorithm uses a queue to explore nodes level by level?",
    "options": [
      {
        "label": "Breadth-First Search (BFS)",
        "value": "Breadth-First Search (BFS)"
      },
      {
        "label": "Depth-First Search (DFS)",
        "value": "Depth-First Search (DFS)"
      },
      {
        "label": "A* Search",
        "value": "A* Search"
      },
      {
        "label": "Dijkstra's Algorithm",
        "value": "Dijkstra's Algorithm"
      }
    ],
    "correctAnswer": "Breadth-First Search (BFS)",
    "explanation": "The correct term is Breadth-First Search (BFS).",
    "marks": 3
  },
  {
    "id": "data_structures_hard_tf_439",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What graph traversal algorithm uses a queue to explore nodes level by level.', the correct answer is Breadth-First Search (BFS).",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Breadth-First Search (BFS) is correct.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_sa_440",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What graph traversal algorithm uses a queue to explore nodes level by level?",
    "correctAnswer": "Breadth-First Search (BFS)",
    "explanation": "The correct term is Breadth-First Search (BFS).",
    "marks": 3
  },
  {
    "id": "data_structures_hard_mcq_441",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "radio",
    "label": "What tree-like data structure is used to efficiently store and search a dynamic set of strings?",
    "options": [
      {
        "label": "B-Tree",
        "value": "B-Tree"
      },
      {
        "label": "Hash Tree",
        "value": "Hash Tree"
      },
      {
        "label": "Heap",
        "value": "Heap"
      },
      {
        "label": "Trie",
        "value": "Trie"
      }
    ],
    "correctAnswer": "Trie",
    "explanation": "The correct term is Trie.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_tf_442",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Trie is the answer to the following question - What tree-like data structure is used to efficiently store and search a dynamic set of strings.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Trie is correct.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_sa_443",
    "subject": "data structures",
    "topic": "Trees",
    "difficulty": "hard",
    "type": "text",
    "label": "What tree-like data structure is used to efficiently store and search a dynamic set of strings?",
    "correctAnswer": "Trie",
    "explanation": "The correct term is Trie.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_mcq_444",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which algorithm finds the shortest path between nodes in a graph with non-negative edge weights?",
    "options": [
      {
        "label": "Dijkstra's Algorithm",
        "value": "Dijkstra's Algorithm"
      },
      {
        "label": "Bellman-Ford Algorithm",
        "value": "Bellman-Ford Algorithm"
      },
      {
        "label": "Floyd-Warshall Algorithm",
        "value": "Floyd-Warshall Algorithm"
      },
      {
        "label": "Kruskal's Algorithm",
        "value": "Kruskal's Algorithm"
      }
    ],
    "correctAnswer": "Dijkstra's Algorithm",
    "explanation": "The correct term is Dijkstra's Algorithm.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_tf_445",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'Which algorithm finds the shortest path between nodes in a graph with non-negative edge weights.', the correct answer is Floyd-Warshall Algorithm.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Dijkstra's Algorithm.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_sa_446",
    "subject": "data structures",
    "topic": "Graphs",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Which algorithm finds the shortest path between nodes in a graph with non-negative edge weights?",
    "correctAnswer": "Dijkstra's Algorithm",
    "explanation": "The correct term is Dijkstra's Algorithm.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_mcq_447",
    "subject": "data structures",
    "topic": "Hashing",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What technique resolves hash collisions by searching for the next empty slot?",
    "options": [
      {
        "label": "Open Addressing",
        "value": "Open Addressing"
      },
      {
        "label": "Chaining",
        "value": "Chaining"
      },
      {
        "label": "Double Hashing",
        "value": "Double Hashing"
      },
      {
        "label": "Quadratic Probing",
        "value": "Quadratic Probing"
      }
    ],
    "correctAnswer": "Open Addressing",
    "explanation": "The correct term is Open Addressing.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_tf_448",
    "subject": "data structures",
    "topic": "Hashing",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What technique resolves hash collisions by searching for the next empty slot.', the correct answer is Double Hashing.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Open Addressing.",
    "marks": 3
  },
  {
    "id": "data_structures_hard_sa_449",
    "subject": "data structures",
    "topic": "Hashing",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What technique resolves hash collisions by searching for the next empty slot?",
    "correctAnswer": "Open Addressing",
    "explanation": "The correct term is Open Addressing.",
    "marks": 3
  },
  {
    "id": "operating_systems_easy_mcq_450",
    "subject": "operating systems",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the core component of an operating system that manages system resources?",
    "options": [
      {
        "label": "Compiler",
        "value": "Compiler"
      },
      {
        "label": "Shell",
        "value": "Shell"
      },
      {
        "label": "GUI",
        "value": "GUI"
      },
      {
        "label": "Kernel",
        "value": "Kernel"
      }
    ],
    "correctAnswer": "Kernel",
    "explanation": "The correct term is Kernel.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_tf_451",
    "subject": "operating systems",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? GUI is the correct term for: What is the core component of an operating system that manages system resources.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Kernel.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_sa_452",
    "subject": "operating systems",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What is the core component of an operating system that manages system resources?",
    "correctAnswer": "Kernel",
    "explanation": "The correct term is Kernel.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_mcq_453",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What is a program in execution called?",
    "options": [
      {
        "label": "Thread",
        "value": "Thread"
      },
      {
        "label": "Process",
        "value": "Process"
      },
      {
        "label": "File",
        "value": "File"
      },
      {
        "label": "Instruction",
        "value": "Instruction"
      }
    ],
    "correctAnswer": "Process",
    "explanation": "The correct term is Process.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_tf_454",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is a program in execution called.', the correct answer is Process.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Process is correct.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_sa_455",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is a program in execution called?",
    "correctAnswer": "Process",
    "explanation": "The correct term is Process.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_mcq_456",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What memory hierarchy level is the fastest but smallest?",
    "options": [
      {
        "label": "Cache",
        "value": "Cache"
      },
      {
        "label": "Registers",
        "value": "Registers"
      },
      {
        "label": "RAM",
        "value": "RAM"
      },
      {
        "label": "Hard Drive",
        "value": "Hard Drive"
      }
    ],
    "correctAnswer": "Registers",
    "explanation": "The correct term is Registers.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_tf_457",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Hard Drive is the correct term for: What memory hierarchy level is the fastest but smallest.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Registers.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_sa_458",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What memory hierarchy level is the fastest but smallest?",
    "correctAnswer": "Registers",
    "explanation": "The correct term is Registers.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_mcq_459",
    "subject": "operating systems",
    "topic": "Interface",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What provides a user interface to interact with the operating system?",
    "options": [
      {
        "label": "Driver",
        "value": "Driver"
      },
      {
        "label": "Shell",
        "value": "Shell"
      },
      {
        "label": "Kernel",
        "value": "Kernel"
      },
      {
        "label": "Bootloader",
        "value": "Bootloader"
      }
    ],
    "correctAnswer": "Shell",
    "explanation": "The correct term is Shell.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_tf_460",
    "subject": "operating systems",
    "topic": "Interface",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Kernel is the correct term for: What provides a user interface to interact with the operating system.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Shell.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_sa_461",
    "subject": "operating systems",
    "topic": "Interface",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What provides a user interface to interact with the operating system?",
    "correctAnswer": "Shell",
    "explanation": "The correct term is Shell.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_mcq_462",
    "subject": "operating systems",
    "topic": "Storage",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What logical structure manages how data is stored and retrieved on a disk?",
    "options": [
      {
        "label": "Process Scheduler",
        "value": "Process Scheduler"
      },
      {
        "label": "File System",
        "value": "File System"
      },
      {
        "label": "Memory Manager",
        "value": "Memory Manager"
      },
      {
        "label": "Device Driver",
        "value": "Device Driver"
      }
    ],
    "correctAnswer": "File System",
    "explanation": "The correct term is File System.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_tf_463",
    "subject": "operating systems",
    "topic": "Storage",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: File System is the answer to the following question - What logical structure manages how data is stored and retrieved on a disk.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, File System is correct.",
    "marks": 1
  },
  {
    "id": "operating_systems_easy_sa_464",
    "subject": "operating systems",
    "topic": "Storage",
    "difficulty": "easy",
    "type": "text",
    "label": "What logical structure manages how data is stored and retrieved on a disk?",
    "correctAnswer": "File System",
    "explanation": "The correct term is File System.",
    "marks": 1
  },
  {
    "id": "operating_systems_medium_mcq_465",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "radio",
    "label": "What is the smallest sequence of programmed instructions managed independently by a scheduler?",
    "options": [
      {
        "label": "Process",
        "value": "Process"
      },
      {
        "label": "Thread",
        "value": "Thread"
      },
      {
        "label": "Job",
        "value": "Job"
      },
      {
        "label": "Task",
        "value": "Task"
      }
    ],
    "correctAnswer": "Thread",
    "explanation": "The correct term is Thread.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_tf_466",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Process is the answer to the following question - What is the smallest sequence of programmed instructions managed independently by a scheduler.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Thread.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_sa_467",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is the smallest sequence of programmed instructions managed independently by a scheduler?",
    "correctAnswer": "Thread",
    "explanation": "The correct term is Thread.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_mcq_468",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What technique allows the execution of processes that are not completely in memory?",
    "options": [
      {
        "label": "Paging",
        "value": "Paging"
      },
      {
        "label": "Virtual Memory",
        "value": "Virtual Memory"
      },
      {
        "label": "Caching",
        "value": "Caching"
      },
      {
        "label": "Segmentation",
        "value": "Segmentation"
      }
    ],
    "correctAnswer": "Virtual Memory",
    "explanation": "The correct term is Virtual Memory.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_tf_469",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Virtual Memory is the answer to the following question - What technique allows the execution of processes that are not completely in memory.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Virtual Memory is correct.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_sa_470",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What technique allows the execution of processes that are not completely in memory?",
    "correctAnswer": "Virtual Memory",
    "explanation": "The correct term is Virtual Memory.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_mcq_471",
    "subject": "operating systems",
    "topic": "CPU",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What component decides which process runs next on the CPU?",
    "options": [
      {
        "label": "Dispatcher",
        "value": "Dispatcher"
      },
      {
        "label": "Scheduler",
        "value": "Scheduler"
      },
      {
        "label": "Interrupt Handler",
        "value": "Interrupt Handler"
      },
      {
        "label": "Memory Manager",
        "value": "Memory Manager"
      }
    ],
    "correctAnswer": "Scheduler",
    "explanation": "The correct term is Scheduler.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_tf_472",
    "subject": "operating systems",
    "topic": "CPU",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What component decides which process runs next on the CPU.', the correct answer is Scheduler.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Scheduler is correct.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_sa_473",
    "subject": "operating systems",
    "topic": "CPU",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What component decides which process runs next on the CPU?",
    "correctAnswer": "Scheduler",
    "explanation": "The correct term is Scheduler.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_mcq_474",
    "subject": "operating systems",
    "topic": "Synchronization",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is a synchronization variable used to control access to a common resource?",
    "options": [
      {
        "label": "Lock",
        "value": "Lock"
      },
      {
        "label": "Semaphore",
        "value": "Semaphore"
      },
      {
        "label": "Mutex",
        "value": "Mutex"
      },
      {
        "label": "Monitor",
        "value": "Monitor"
      }
    ],
    "correctAnswer": "Semaphore",
    "explanation": "The correct term is Semaphore.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_tf_475",
    "subject": "operating systems",
    "topic": "Synchronization",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Semaphore is the correct term for: What is a synchronization variable used to control access to a common resource.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Semaphore is correct.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_sa_476",
    "subject": "operating systems",
    "topic": "Synchronization",
    "difficulty": "medium",
    "type": "text",
    "label": "What is a synchronization variable used to control access to a common resource?",
    "correctAnswer": "Semaphore",
    "explanation": "The correct term is Semaphore.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_mcq_477",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is the saving of one process's state and loading of another's called?",
    "options": [
      {
        "label": "System Call",
        "value": "System Call"
      },
      {
        "label": "Context Switch",
        "value": "Context Switch"
      },
      {
        "label": "Trap",
        "value": "Trap"
      },
      {
        "label": "Interrupt",
        "value": "Interrupt"
      }
    ],
    "correctAnswer": "Context Switch",
    "explanation": "The correct term is Context Switch.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_tf_478",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What is the saving of one process's state and loading of another's called.', the correct answer is Interrupt.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Context Switch.",
    "marks": 2
  },
  {
    "id": "operating_systems_medium_sa_479",
    "subject": "operating systems",
    "topic": "Processes",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is the saving of one process's state and loading of another's called?",
    "correctAnswer": "Context Switch",
    "explanation": "The correct term is Context Switch.",
    "marks": 2
  },
  {
    "id": "operating_systems_hard_mcq_480",
    "subject": "operating systems",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "What situation occurs when multiple processes are blocked indefinitely waiting for each other?",
    "options": [
      {
        "label": "Starvation",
        "value": "Starvation"
      },
      {
        "label": "Deadlock",
        "value": "Deadlock"
      },
      {
        "label": "Thrashing",
        "value": "Thrashing"
      },
      {
        "label": "Race Condition",
        "value": "Race Condition"
      }
    ],
    "correctAnswer": "Deadlock",
    "explanation": "The correct term is Deadlock.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_tf_481",
    "subject": "operating systems",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What situation occurs when multiple processes are blocked indefinitely waiting for each other.', the correct answer is Deadlock.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Deadlock is correct.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_sa_482",
    "subject": "operating systems",
    "topic": "Concurrency",
    "difficulty": "hard",
    "type": "text",
    "label": "What situation occurs when multiple processes are blocked indefinitely waiting for each other?",
    "correctAnswer": "Deadlock",
    "explanation": "The correct term is Deadlock.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_mcq_483",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What memory management scheme divides physical memory into fixed-sized blocks?",
    "options": [
      {
        "label": "Segmentation",
        "value": "Segmentation"
      },
      {
        "label": "Swapping",
        "value": "Swapping"
      },
      {
        "label": "Fragmentation",
        "value": "Fragmentation"
      },
      {
        "label": "Paging",
        "value": "Paging"
      }
    ],
    "correctAnswer": "Paging",
    "explanation": "The correct term is Paging.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_tf_484",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Swapping is the answer to the following question - What memory management scheme divides physical memory into fixed-sized blocks.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Paging.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_sa_485",
    "subject": "operating systems",
    "topic": "Memory",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What memory management scheme divides physical memory into fixed-sized blocks?",
    "correctAnswer": "Paging",
    "explanation": "The correct term is Paging.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_mcq_486",
    "subject": "operating systems",
    "topic": "Performance",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What condition occurs when a system spends more time paging than executing processes?",
    "options": [
      {
        "label": "Deadlock",
        "value": "Deadlock"
      },
      {
        "label": "Starvation",
        "value": "Starvation"
      },
      {
        "label": "Thrashing",
        "value": "Thrashing"
      },
      {
        "label": "Fragmentation",
        "value": "Fragmentation"
      }
    ],
    "correctAnswer": "Thrashing",
    "explanation": "The correct term is Thrashing.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_tf_487",
    "subject": "operating systems",
    "topic": "Performance",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Starvation is the answer to the following question - What condition occurs when a system spends more time paging than executing processes.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Thrashing.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_sa_488",
    "subject": "operating systems",
    "topic": "Performance",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What condition occurs when a system spends more time paging than executing processes?",
    "correctAnswer": "Thrashing",
    "explanation": "The correct term is Thrashing.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_mcq_489",
    "subject": "operating systems",
    "topic": "File System",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: In Unix-like systems, what data structure stores metadata about a file?",
    "options": [
      {
        "label": "File Allocation Table",
        "value": "File Allocation Table"
      },
      {
        "label": "Directory",
        "value": "Directory"
      },
      {
        "label": "Superblock",
        "value": "Superblock"
      },
      {
        "label": "Inode",
        "value": "Inode"
      }
    ],
    "correctAnswer": "Inode",
    "explanation": "The correct term is Inode.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_tf_490",
    "subject": "operating systems",
    "topic": "File System",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Inode is the answer to the following question - In Unix-like systems, what data structure stores metadata about a file.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Inode is correct.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_sa_491",
    "subject": "operating systems",
    "topic": "File System",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: In Unix-like systems, what data structure stores metadata about a file?",
    "correctAnswer": "Inode",
    "explanation": "The correct term is Inode.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_mcq_492",
    "subject": "operating systems",
    "topic": "Hardware",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What mechanism allows hardware devices to signal the CPU that they require attention?",
    "options": [
      {
        "label": "Trap",
        "value": "Trap"
      },
      {
        "label": "Interrupt",
        "value": "Interrupt"
      },
      {
        "label": "System Call",
        "value": "System Call"
      },
      {
        "label": "Polling",
        "value": "Polling"
      }
    ],
    "correctAnswer": "Interrupt",
    "explanation": "The correct term is Interrupt.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_tf_493",
    "subject": "operating systems",
    "topic": "Hardware",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What mechanism allows hardware devices to signal the CPU that they require attention.', the correct answer is Interrupt.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Interrupt is correct.",
    "marks": 3
  },
  {
    "id": "operating_systems_hard_sa_494",
    "subject": "operating systems",
    "topic": "Hardware",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What mechanism allows hardware devices to signal the CPU that they require attention?",
    "correctAnswer": "Interrupt",
    "explanation": "The correct term is Interrupt.",
    "marks": 3
  },
  {
    "id": "computer_networks_easy_mcq_495",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What uniquely identifies a device on a TCP/IP network?",
    "options": [
      {
        "label": "IP Address",
        "value": "IP Address"
      },
      {
        "label": "Subnet Mask",
        "value": "Subnet Mask"
      },
      {
        "label": "MAC Address",
        "value": "MAC Address"
      },
      {
        "label": "Port Number",
        "value": "Port Number"
      }
    ],
    "correctAnswer": "IP Address",
    "explanation": "The correct term is IP Address.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_tf_496",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: IP Address is the answer to the following question - What uniquely identifies a device on a TCP/IP network.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, IP Address is correct.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_sa_497",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What uniquely identifies a device on a TCP/IP network?",
    "correctAnswer": "IP Address",
    "explanation": "The correct term is IP Address.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_mcq_498",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "radio",
    "label": "What protocol is used to secure web traffic?",
    "options": [
      {
        "label": "HTTP",
        "value": "HTTP"
      },
      {
        "label": "SMTP",
        "value": "SMTP"
      },
      {
        "label": "FTP",
        "value": "FTP"
      },
      {
        "label": "HTTPS",
        "value": "HTTPS"
      }
    ],
    "correctAnswer": "HTTPS",
    "explanation": "The correct term is HTTPS.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_tf_499",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? HTTPS is the correct term for: What protocol is used to secure web traffic.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, HTTPS is correct.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_sa_500",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What protocol is used to secure web traffic?",
    "correctAnswer": "HTTPS",
    "explanation": "The correct term is HTTPS.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_mcq_501",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What device connects different networks and forwards data packets between them?",
    "options": [
      {
        "label": "Router",
        "value": "Router"
      },
      {
        "label": "Modem",
        "value": "Modem"
      },
      {
        "label": "Hub",
        "value": "Hub"
      },
      {
        "label": "Switch",
        "value": "Switch"
      }
    ],
    "correctAnswer": "Router",
    "explanation": "The correct term is Router.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_tf_502",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Hub is the answer to the following question - What device connects different networks and forwards data packets between them.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Router.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_sa_503",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "easy",
    "type": "text",
    "label": "What device connects different networks and forwards data packets between them?",
    "correctAnswer": "Router",
    "explanation": "The correct term is Router.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_mcq_504",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What translates human-readable domain names into IP addresses?",
    "options": [
      {
        "label": "DNS",
        "value": "DNS"
      },
      {
        "label": "NAT",
        "value": "NAT"
      },
      {
        "label": "ARP",
        "value": "ARP"
      },
      {
        "label": "DHCP",
        "value": "DHCP"
      }
    ],
    "correctAnswer": "DNS",
    "explanation": "The correct term is DNS.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_tf_505",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: DNS is the answer to the following question - What translates human-readable domain names into IP addresses.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, DNS is correct.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_sa_506",
    "subject": "computer networks",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What translates human-readable domain names into IP addresses?",
    "correctAnswer": "DNS",
    "explanation": "The correct term is DNS.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_mcq_507",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? Which protocol is used for sending email?",
    "options": [
      {
        "label": "FTP",
        "value": "FTP"
      },
      {
        "label": "SMTP",
        "value": "SMTP"
      },
      {
        "label": "IMAP",
        "value": "IMAP"
      },
      {
        "label": "POP3",
        "value": "POP3"
      }
    ],
    "correctAnswer": "SMTP",
    "explanation": "The correct term is SMTP.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_tf_508",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: POP3 is the answer to the following question - Which protocol is used for sending email.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is SMTP.",
    "marks": 1
  },
  {
    "id": "computer_networks_easy_sa_509",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: Which protocol is used for sending email?",
    "correctAnswer": "SMTP",
    "explanation": "The correct term is SMTP.",
    "marks": 1
  },
  {
    "id": "computer_networks_medium_mcq_510",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What unique physical address is assigned to a network interface controller?",
    "options": [
      {
        "label": "MAC Address",
        "value": "MAC Address"
      },
      {
        "label": "IPv6 Address",
        "value": "IPv6 Address"
      },
      {
        "label": "IP Address",
        "value": "IP Address"
      },
      {
        "label": "Port Number",
        "value": "Port Number"
      }
    ],
    "correctAnswer": "MAC Address",
    "explanation": "The correct term is MAC Address.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_tf_511",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What unique physical address is assigned to a network interface controller.', the correct answer is MAC Address.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, MAC Address is correct.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_sa_512",
    "subject": "computer networks",
    "topic": "Hardware",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What unique physical address is assigned to a network interface controller?",
    "correctAnswer": "MAC Address",
    "explanation": "The correct term is MAC Address.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_mcq_513",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: How many layers are in the OSI model?",
    "options": [
      {
        "label": "6",
        "value": "6"
      },
      {
        "label": "5",
        "value": "5"
      },
      {
        "label": "7",
        "value": "7"
      },
      {
        "label": "4",
        "value": "4"
      }
    ],
    "correctAnswer": "7",
    "explanation": "The correct term is 7.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_tf_514",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'How many layers are in the OSI model.', the correct answer is 4.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is 7.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_sa_515",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "medium",
    "type": "text",
    "label": "How many layers are in the OSI model?",
    "correctAnswer": "7",
    "explanation": "The correct term is 7.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_mcq_516",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? Which protocol automatically assigns IP addresses to devices on a network?",
    "options": [
      {
        "label": "ARP",
        "value": "ARP"
      },
      {
        "label": "ICMP",
        "value": "ICMP"
      },
      {
        "label": "DNS",
        "value": "DNS"
      },
      {
        "label": "DHCP",
        "value": "DHCP"
      }
    ],
    "correctAnswer": "DHCP",
    "explanation": "The correct term is DHCP.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_tf_517",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: DHCP is the answer to the following question - Which protocol automatically assigns IP addresses to devices on a network.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, DHCP is correct.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_sa_518",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "medium",
    "type": "text",
    "label": "Which protocol automatically assigns IP addresses to devices on a network?",
    "correctAnswer": "DHCP",
    "explanation": "The correct term is DHCP.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_mcq_519",
    "subject": "computer networks",
    "topic": "TCP/IP",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: Which transport layer protocol provides reliable, ordered, and error-checked delivery?",
    "options": [
      {
        "label": "IP",
        "value": "IP"
      },
      {
        "label": "UDP",
        "value": "UDP"
      },
      {
        "label": "ICMP",
        "value": "ICMP"
      },
      {
        "label": "TCP",
        "value": "TCP"
      }
    ],
    "correctAnswer": "TCP",
    "explanation": "The correct term is TCP.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_tf_520",
    "subject": "computer networks",
    "topic": "TCP/IP",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'Which transport layer protocol provides reliable, ordered, and error-checked delivery.', the correct answer is UDP.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is TCP.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_sa_521",
    "subject": "computer networks",
    "topic": "TCP/IP",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: Which transport layer protocol provides reliable, ordered, and error-checked delivery?",
    "correctAnswer": "TCP",
    "explanation": "The correct term is TCP.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_mcq_522",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What network security system monitors and controls incoming and outgoing network traffic?",
    "options": [
      {
        "label": "VPN",
        "value": "VPN"
      },
      {
        "label": "Firewall",
        "value": "Firewall"
      },
      {
        "label": "Proxy",
        "value": "Proxy"
      },
      {
        "label": "Router",
        "value": "Router"
      }
    ],
    "correctAnswer": "Firewall",
    "explanation": "The correct term is Firewall.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_tf_523",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "medium",
    "type": "radio",
    "label": "True/False: When asked 'What network security system monitors and controls incoming and outgoing network traffic.', the correct answer is Firewall.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Firewall is correct.",
    "marks": 2
  },
  {
    "id": "computer_networks_medium_sa_524",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What network security system monitors and controls incoming and outgoing network traffic?",
    "correctAnswer": "Firewall",
    "explanation": "The correct term is Firewall.",
    "marks": 2
  },
  {
    "id": "computer_networks_hard_mcq_525",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? Which OSI layer is responsible for end-to-end communication and error recovery?",
    "options": [
      {
        "label": "Session Layer",
        "value": "Session Layer"
      },
      {
        "label": "Data Link Layer",
        "value": "Data Link Layer"
      },
      {
        "label": "Network Layer",
        "value": "Network Layer"
      },
      {
        "label": "Transport Layer",
        "value": "Transport Layer"
      }
    ],
    "correctAnswer": "Transport Layer",
    "explanation": "The correct term is Transport Layer.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_tf_526",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'Which OSI layer is responsible for end-to-end communication and error recovery.', the correct answer is Transport Layer.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Transport Layer is correct.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_sa_527",
    "subject": "computer networks",
    "topic": "Models",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: Which OSI layer is responsible for end-to-end communication and error recovery?",
    "correctAnswer": "Transport Layer",
    "explanation": "The correct term is Transport Layer.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_mcq_528",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which protocol resolves IP addresses to MAC addresses?",
    "options": [
      {
        "label": "ARP",
        "value": "ARP"
      },
      {
        "label": "DHCP",
        "value": "DHCP"
      },
      {
        "label": "RARP",
        "value": "RARP"
      },
      {
        "label": "DNS",
        "value": "DNS"
      }
    ],
    "correctAnswer": "ARP",
    "explanation": "The correct term is ARP.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_tf_529",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? DNS is the correct term for: Which protocol resolves IP addresses to MAC addresses.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is ARP.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_sa_530",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "text",
    "label": "Which protocol resolves IP addresses to MAC addresses?",
    "correctAnswer": "ARP",
    "explanation": "The correct term is ARP.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_mcq_531",
    "subject": "computer networks",
    "topic": "Routing",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What maps multiple private IP addresses to a single public IP address?",
    "options": [
      {
        "label": "NAT",
        "value": "NAT"
      },
      {
        "label": "DNS",
        "value": "DNS"
      },
      {
        "label": "VLAN",
        "value": "VLAN"
      },
      {
        "label": "DHCP",
        "value": "DHCP"
      }
    ],
    "correctAnswer": "NAT",
    "explanation": "The correct term is NAT.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_tf_532",
    "subject": "computer networks",
    "topic": "Routing",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What maps multiple private IP addresses to a single public IP address.', the correct answer is DNS.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is NAT.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_sa_533",
    "subject": "computer networks",
    "topic": "Routing",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What maps multiple private IP addresses to a single public IP address?",
    "correctAnswer": "NAT",
    "explanation": "The correct term is NAT.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_mcq_534",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which transport layer protocol provides connectionless, unacknowledged communication?",
    "options": [
      {
        "label": "UDP",
        "value": "UDP"
      },
      {
        "label": "TCP",
        "value": "TCP"
      },
      {
        "label": "ICMP",
        "value": "ICMP"
      },
      {
        "label": "IP",
        "value": "IP"
      }
    ],
    "correctAnswer": "UDP",
    "explanation": "The correct term is UDP.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_tf_535",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: UDP is the answer to the following question - Which transport layer protocol provides connectionless, unacknowledged communication.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, UDP is correct.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_sa_536",
    "subject": "computer networks",
    "topic": "Protocols",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: Which transport layer protocol provides connectionless, unacknowledged communication?",
    "correctAnswer": "UDP",
    "explanation": "The correct term is UDP.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_mcq_537",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What creates a private, encrypted connection over a public network?",
    "options": [
      {
        "label": "Firewall",
        "value": "Firewall"
      },
      {
        "label": "VPN",
        "value": "VPN"
      },
      {
        "label": "Proxy",
        "value": "Proxy"
      },
      {
        "label": "VLAN",
        "value": "VLAN"
      }
    ],
    "correctAnswer": "VPN",
    "explanation": "The correct term is VPN.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_tf_538",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? Firewall is the correct term for: What creates a private, encrypted connection over a public network.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is VPN.",
    "marks": 3
  },
  {
    "id": "computer_networks_hard_sa_539",
    "subject": "computer networks",
    "topic": "Security",
    "difficulty": "hard",
    "type": "text",
    "label": "What creates a private, encrypted connection over a public network?",
    "correctAnswer": "VPN",
    "explanation": "The correct term is VPN.",
    "marks": 3
  },
  {
    "id": "cyber_security_easy_mcq_540",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What malicious software is designed to disrupt, damage, or gain unauthorized access to a system?",
    "options": [
      {
        "label": "Antivirus",
        "value": "Antivirus"
      },
      {
        "label": "Firewall",
        "value": "Firewall"
      },
      {
        "label": "Malware",
        "value": "Malware"
      },
      {
        "label": "Adware",
        "value": "Adware"
      }
    ],
    "correctAnswer": "Malware",
    "explanation": "The correct term is Malware.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_tf_541",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What malicious software is designed to disrupt, damage, or gain unauthorized access to a system.', the correct answer is Antivirus.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Malware.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_sa_542",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What malicious software is designed to disrupt, damage, or gain unauthorized access to a system?",
    "correctAnswer": "Malware",
    "explanation": "The correct term is Malware.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_mcq_543",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "easy",
    "type": "radio",
    "label": "Consider the following: What attack involves sending fraudulent emails to trick individuals into revealing sensitive information?",
    "options": [
      {
        "label": "Phishing",
        "value": "Phishing"
      },
      {
        "label": "Spoofing",
        "value": "Spoofing"
      },
      {
        "label": "Spamming",
        "value": "Spamming"
      },
      {
        "label": "Sniffing",
        "value": "Sniffing"
      }
    ],
    "correctAnswer": "Phishing",
    "explanation": "The correct term is Phishing.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_tf_544",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "easy",
    "type": "radio",
    "label": "True or False: Sniffing is the answer to the following question - What attack involves sending fraudulent emails to trick individuals into revealing sensitive information.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Phishing.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_sa_545",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "easy",
    "type": "text",
    "label": "Answer the following concisely: What attack involves sending fraudulent emails to trick individuals into revealing sensitive information?",
    "correctAnswer": "Phishing",
    "explanation": "The correct term is Phishing.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_mcq_546",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is a secret string of characters used to authenticate a user?",
    "options": [
      {
        "label": "Password",
        "value": "Password"
      },
      {
        "label": "Key",
        "value": "Key"
      },
      {
        "label": "Token",
        "value": "Token"
      },
      {
        "label": "Certificate",
        "value": "Certificate"
      }
    ],
    "correctAnswer": "Password",
    "explanation": "The correct term is Password.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_tf_547",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What is a secret string of characters used to authenticate a user.', the correct answer is Key.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Password.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_sa_548",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "text",
    "label": "Provide the exact term: What is a secret string of characters used to authenticate a user?",
    "correctAnswer": "Password",
    "explanation": "The correct term is Password.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_mcq_549",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What is the process of converting readable text into unreadable ciphertext?",
    "options": [
      {
        "label": "Encryption",
        "value": "Encryption"
      },
      {
        "label": "Encoding",
        "value": "Encoding"
      },
      {
        "label": "Decryption",
        "value": "Decryption"
      },
      {
        "label": "Hashing",
        "value": "Hashing"
      }
    ],
    "correctAnswer": "Encryption",
    "explanation": "The correct term is Encryption.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_tf_550",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "radio",
    "label": "Is the following statement true or false? Hashing is the correct term for: What is the process of converting readable text into unreadable ciphertext.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Encryption.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_sa_551",
    "subject": "cyber security",
    "topic": "Basics",
    "difficulty": "easy",
    "type": "text",
    "label": "What is the process of converting readable text into unreadable ciphertext?",
    "correctAnswer": "Encryption",
    "explanation": "The correct term is Encryption.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_mcq_552",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "radio",
    "label": "Which of these best answers the following? What software is designed to detect and destroy computer viruses?",
    "options": [
      {
        "label": "Firewall",
        "value": "Firewall"
      },
      {
        "label": "VPN",
        "value": "VPN"
      },
      {
        "label": "Proxy",
        "value": "Proxy"
      },
      {
        "label": "Antivirus",
        "value": "Antivirus"
      }
    ],
    "correctAnswer": "Antivirus",
    "explanation": "The correct term is Antivirus.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_tf_553",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "radio",
    "label": "True/False: When asked 'What software is designed to detect and destroy computer viruses.', the correct answer is Antivirus.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Antivirus is correct.",
    "marks": 1
  },
  {
    "id": "cyber_security_easy_sa_554",
    "subject": "cyber security",
    "topic": "Protection",
    "difficulty": "easy",
    "type": "text",
    "label": "What software is designed to detect and destroy computer viruses?",
    "correctAnswer": "Antivirus",
    "explanation": "The correct term is Antivirus.",
    "marks": 1
  },
  {
    "id": "cyber_security_medium_mcq_555",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What attack overwhelms a target server or network with a flood of internet traffic?",
    "options": [
      {
        "label": "DDoS",
        "value": "DDoS"
      },
      {
        "label": "Man-in-the-Middle",
        "value": "Man-in-the-Middle"
      },
      {
        "label": "SQL Injection",
        "value": "SQL Injection"
      },
      {
        "label": "Cross-Site Scripting",
        "value": "Cross-Site Scripting"
      }
    ],
    "correctAnswer": "DDoS",
    "explanation": "The correct term is DDoS.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_tf_556",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: DDoS is the answer to the following question - What attack overwhelms a target server or network with a flood of internet traffic.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, DDoS is correct.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_sa_557",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "text",
    "label": "What attack overwhelms a target server or network with a flood of internet traffic?",
    "correctAnswer": "DDoS",
    "explanation": "The correct term is DDoS.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_mcq_558",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "What transforms data into a fixed-size string of characters that cannot be reversed?",
    "options": [
      {
        "label": "Encryption",
        "value": "Encryption"
      },
      {
        "label": "Salting",
        "value": "Salting"
      },
      {
        "label": "Encoding",
        "value": "Encoding"
      },
      {
        "label": "Hashing",
        "value": "Hashing"
      }
    ],
    "correctAnswer": "Hashing",
    "explanation": "The correct term is Hashing.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_tf_559",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Encoding is the answer to the following question - What transforms data into a fixed-size string of characters that cannot be reversed.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Hashing.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_sa_560",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What transforms data into a fixed-size string of characters that cannot be reversed?",
    "correctAnswer": "Hashing",
    "explanation": "The correct term is Hashing.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_mcq_561",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "Which of these best answers the following? What is added to a password before hashing to defend against dictionary attacks?",
    "options": [
      {
        "label": "Key",
        "value": "Key"
      },
      {
        "label": "Pepper",
        "value": "Pepper"
      },
      {
        "label": "Salt",
        "value": "Salt"
      },
      {
        "label": "Token",
        "value": "Token"
      }
    ],
    "correctAnswer": "Salt",
    "explanation": "The correct term is Salt.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_tf_562",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Salt is the correct term for: What is added to a password before hashing to defend against dictionary attacks.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Salt is correct.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_sa_563",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "text",
    "label": "Answer the following concisely: What is added to a password before hashing to defend against dictionary attacks?",
    "correctAnswer": "Salt",
    "explanation": "The correct term is Salt.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_mcq_564",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "radio",
    "label": "What attack intercepts communication between two parties without their knowledge?",
    "options": [
      {
        "label": "Man-in-the-Middle",
        "value": "Man-in-the-Middle"
      },
      {
        "label": "Eavesdropping",
        "value": "Eavesdropping"
      },
      {
        "label": "Spoofing",
        "value": "Spoofing"
      },
      {
        "label": "Phishing",
        "value": "Phishing"
      }
    ],
    "correctAnswer": "Man-in-the-Middle",
    "explanation": "The correct term is Man-in-the-Middle.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_tf_565",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "radio",
    "label": "Is the following statement true or false? Spoofing is the correct term for: What attack intercepts communication between two parties without their knowledge.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Man-in-the-Middle.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_sa_566",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "medium",
    "type": "text",
    "label": "What attack intercepts communication between two parties without their knowledge?",
    "correctAnswer": "Man-in-the-Middle",
    "explanation": "The correct term is Man-in-the-Middle.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_mcq_567",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "Consider the following: What type of encryption uses the same key for both encryption and decryption?",
    "options": [
      {
        "label": "Public Key Cryptography",
        "value": "Public Key Cryptography"
      },
      {
        "label": "Asymmetric Encryption",
        "value": "Asymmetric Encryption"
      },
      {
        "label": "Symmetric Encryption",
        "value": "Symmetric Encryption"
      },
      {
        "label": "Hashing",
        "value": "Hashing"
      }
    ],
    "correctAnswer": "Symmetric Encryption",
    "explanation": "The correct term is Symmetric Encryption.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_tf_568",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "radio",
    "label": "True or False: Hashing is the answer to the following question - What type of encryption uses the same key for both encryption and decryption.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Symmetric Encryption.",
    "marks": 2
  },
  {
    "id": "cyber_security_medium_sa_569",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "medium",
    "type": "text",
    "label": "Provide the exact term: What type of encryption uses the same key for both encryption and decryption?",
    "correctAnswer": "Symmetric Encryption",
    "explanation": "The correct term is Symmetric Encryption.",
    "marks": 2
  },
  {
    "id": "cyber_security_hard_mcq_570",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What vulnerability allows an attacker to inject malicious code into database queries?",
    "options": [
      {
        "label": "Cross-Site Request Forgery (CSRF)",
        "value": "Cross-Site Request Forgery (CSRF)"
      },
      {
        "label": "SQL Injection",
        "value": "SQL Injection"
      },
      {
        "label": "Cross-Site Scripting (XSS)",
        "value": "Cross-Site Scripting (XSS)"
      },
      {
        "label": "Buffer Overflow",
        "value": "Buffer Overflow"
      }
    ],
    "correctAnswer": "SQL Injection",
    "explanation": "The correct term is SQL Injection.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_tf_571",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "Is the following statement true or false? SQL Injection is the correct term for: What vulnerability allows an attacker to inject malicious code into database queries.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, SQL Injection is correct.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_sa_572",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "text",
    "label": "What vulnerability allows an attacker to inject malicious code into database queries?",
    "correctAnswer": "SQL Injection",
    "explanation": "The correct term is SQL Injection.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_mcq_573",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "What attack exploits a previously unknown vulnerability before a patch is available?",
    "options": [
      {
        "label": "Zero-Day Exploit",
        "value": "Zero-Day Exploit"
      },
      {
        "label": "Ransomware",
        "value": "Ransomware"
      },
      {
        "label": "Rootkit",
        "value": "Rootkit"
      },
      {
        "label": "Trojan Horse",
        "value": "Trojan Horse"
      }
    ],
    "correctAnswer": "Zero-Day Exploit",
    "explanation": "The correct term is Zero-Day Exploit.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_tf_574",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "True or False: Zero-Day Exploit is the answer to the following question - What attack exploits a previously unknown vulnerability before a patch is available.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Zero-Day Exploit is correct.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_sa_575",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "text",
    "label": "What attack exploits a previously unknown vulnerability before a patch is available?",
    "correctAnswer": "Zero-Day Exploit",
    "explanation": "The correct term is Zero-Day Exploit.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_mcq_576",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What type of encryption uses a public key for encryption and a private key for decryption?",
    "options": [
      {
        "label": "Symmetric Encryption",
        "value": "Symmetric Encryption"
      },
      {
        "label": "Stream Cipher",
        "value": "Stream Cipher"
      },
      {
        "label": "Block Cipher",
        "value": "Block Cipher"
      },
      {
        "label": "Asymmetric Encryption",
        "value": "Asymmetric Encryption"
      }
    ],
    "correctAnswer": "Asymmetric Encryption",
    "explanation": "The correct term is Asymmetric Encryption.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_tf_577",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What type of encryption uses a public key for encryption and a private key for decryption.', the correct answer is Asymmetric Encryption.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Asymmetric Encryption is correct.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_sa_578",
    "subject": "cyber security",
    "topic": "Cryptography",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What type of encryption uses a public key for encryption and a private key for decryption?",
    "correctAnswer": "Asymmetric Encryption",
    "explanation": "The correct term is Asymmetric Encryption.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_mcq_579",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "Consider the following: What vulnerability allows attackers to inject malicious scripts into web pages viewed by other users?",
    "options": [
      {
        "label": "Cross-Site Scripting (XSS)",
        "value": "Cross-Site Scripting (XSS)"
      },
      {
        "label": "Clickjacking",
        "value": "Clickjacking"
      },
      {
        "label": "SQL Injection",
        "value": "SQL Injection"
      },
      {
        "label": "CSRF",
        "value": "CSRF"
      }
    ],
    "correctAnswer": "Cross-Site Scripting (XSS)",
    "explanation": "The correct term is Cross-Site Scripting (XSS).",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_tf_580",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.', the correct answer is SQL Injection.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "false",
    "explanation": "No, the correct answer is Cross-Site Scripting (XSS).",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_sa_581",
    "subject": "cyber security",
    "topic": "Attacks",
    "difficulty": "hard",
    "type": "text",
    "label": "Answer the following concisely: What vulnerability allows attackers to inject malicious scripts into web pages viewed by other users?",
    "correctAnswer": "Cross-Site Scripting (XSS)",
    "explanation": "The correct term is Cross-Site Scripting (XSS).",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_mcq_582",
    "subject": "cyber security",
    "topic": "Testing",
    "difficulty": "hard",
    "type": "radio",
    "label": "Which of these best answers the following? What is the authorized simulated cyberattack performed to evaluate system security?",
    "options": [
      {
        "label": "Vulnerability Scanning",
        "value": "Vulnerability Scanning"
      },
      {
        "label": "Penetration Testing",
        "value": "Penetration Testing"
      },
      {
        "label": "Risk Assessment",
        "value": "Risk Assessment"
      },
      {
        "label": "Threat Modeling",
        "value": "Threat Modeling"
      }
    ],
    "correctAnswer": "Penetration Testing",
    "explanation": "The correct term is Penetration Testing.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_tf_583",
    "subject": "cyber security",
    "topic": "Testing",
    "difficulty": "hard",
    "type": "radio",
    "label": "True/False: When asked 'What is the authorized simulated cyberattack performed to evaluate system security.', the correct answer is Penetration Testing.",
    "options": [
      {
        "label": "True",
        "value": "true"
      },
      {
        "label": "False",
        "value": "false"
      }
    ],
    "correctAnswer": "true",
    "explanation": "Yes, Penetration Testing is correct.",
    "marks": 3
  },
  {
    "id": "cyber_security_hard_sa_584",
    "subject": "cyber security",
    "topic": "Testing",
    "difficulty": "hard",
    "type": "text",
    "label": "Provide the exact term: What is the authorized simulated cyberattack performed to evaluate system security?",
    "correctAnswer": "Penetration Testing",
    "explanation": "The correct term is Penetration Testing.",
    "marks": 3
  }
];
