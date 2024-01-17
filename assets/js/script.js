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
  
  // Add logic for submitting score if needed