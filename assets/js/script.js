// Define your quiz questions and answers here

const questions = [
    {
      question: "What is JavaScript?",
      answers: [
        "A programming language",
        "A markup language",
        "A styling language",
        "A database language"
      ],
      correctAnswer: "A programming language"
    },
    {
      question: "What is the purpose of 'console.log' in JavaScript?",
      answers: [
        "Display a message on the console",
        "Create a log file",
        "Print something on the screen",
        "Pause the code execution"
      ],
      correctAnswer: "Display a message on the console"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        "var",
        "let",
        "const",
        "variable"
      ],
      correctAnswer: "var"
    },
    {
      question: "What is the result of the expression '2 + 2 * 3'?",
      answers: [
        "8",
        "10",
        "12",
        "14"
      ],
      correctAnswer: "8"
    },
    {
      question: "Which method is used to add a new element at the end of an array in JavaScript?",
      answers: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: "push()"
    },
    {
      question: "What does the acronym 'DOM' stand for in web development?",
      answers: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Management",
        "Document Oriented Middleware"
      ],
      correctAnswer: "Document Object Model"
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Counter Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    // Add more questions as needed
  ];
  
  

  
  
  const startBtn = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const submitScoreBtn = document.getElementById('submit-score');
  let currentQuestionIndex = 0;
  
  // Event listener for the start button
  startBtn.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
  
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
      btn.innerText = currentQuestion.answers[index];
      btn.addEventListener('click', () => checkAnswer(btn.innerText));
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Correct answer logic
      // You can update the UI, increment score, etc.
    } else {
      // Incorrect answer logic
      // You can update the UI, decrement time, etc.
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // Quiz is over
      questionContainer.classList.add('hide');
      resultContainer.classList.remove('hide');
      // Display final score and allow user to submit their score
    }
  }
  
