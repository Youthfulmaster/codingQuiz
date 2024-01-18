// Define your quiz questions and answers here
let highScores = [];
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

  ];
  
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  // Call the shuffleQuestions function before starting the quiz
  shuffleQuestions();
  


  const startBtn = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const submitScoreBtn = document.getElementById('submitInitialsBtn');
  let currentQuestionIndex = 0;
  let time = 60; // Initial time in seconds

  let correctAnswersCount = 0;
  let timerInterval;

  // Event listener for the start button
  startBtn.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
    // Start the timer interval
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
  
    const answerButtons = document.querySelectorAll('.answer-btn');
  
    // Remove previous event listeners
    answerButtons.forEach(btn => {
      btn.removeEventListener('click', () => checkAnswer(btn.innerText));
    });
  
    // Add new event listeners
    answerButtons.forEach((btn, index) => {
      btn.innerText = currentQuestion.answers[index];
      btn.addEventListener('click', () => checkAnswer(btn.innerText));
    });
  }
  
  
  // Function to update the timer display
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Time: ${time}s`;
  }



  function checkAnswer(selectedAnswer) {
    console.log("Selected Answer:", selectedAnswer);
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Current Question:", currentQuestion);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Correct answer logic
      correctAnswersCount++;
    } else {
      // Incorrect answer logic
      time -= 10; // Deduct 10 seconds for incorrect answers
    }
  
    if (currentQuestionIndex < questions.length - 1) {
      // If there are more questions, increment the index and show the next question
      currentQuestionIndex++;
      showQuestion();
    } else {
      // If it's the last question, end the quiz
      clearInterval(timerInterval); // Stop the timer
      calculateScore(); // Calculate and display the score
      questionContainer.classList.add('hide');
      resultContainer.classList.remove('hide');
    }
  }
  
  
  
  

    

    function updateTimer() {
        document.getElementById('timer').innerText = `Time: ${time}s`;
      
        if (time <= 0) {
          // Quiz time is up
          clearInterval(timerInterval); // Stop the timer
          calculateScore(); // Call the function to calculate the score
          questionContainer.classList.add('hide');
          resultContainer.classList.remove('hide');
          // Display final score and allow the user to submit their score
        } else {
          time--;
        }
      }


    
      function calculateScore() {
        const userScore = correctAnswersCount; // Calculate score based on the count of correct answers
        console.log("User Score:", userScore);
        return userScore;
      }
      
  
  
  // Event listener for submitting score
  submitScoreBtn.addEventListener('click', openSubmitModal);
  
  function openSubmitModal() {
    // Bootstrap modal for submitting initials
    const initialsModal = `
      <div class="modal fade" id="initialsModal" tabindex="-1" role="dialog" aria-labelledby="initialsModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="initialsModalLabel">Submit Initials</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <label for="initials">Enter your initials:</label>
              <input type="text" id="initials" class="form-control" placeholder="ABC">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="submitInitialsBtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', initialsModal);
  
    // Show the modal
    $('#initialsModal').modal('show');
  }
  
// Function to handle the submission of initials from the modal
function submitInitials() {
  const initials = document.getElementById('initials').value;

  // Close the modal
  $('#initialsModal').modal('hide');

  // Continue with your scoring logic using the obtained initials
  const score = calculateScore();

  // Add the score to the high scores array
  highScores.push({ initials, score });

  highScores.sort((a, b) => b.score - a.score);

  // Display or store the high scores as needed
  console.log("High Scores:", highScores);

  // Display the score on the resultContainer
  document.getElementById('score').innerText = `Your Score: ${score} out of ${questions.length}`;
}
document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'submitInitialsBtn') {
    // Call submitInitials function here
    submitInitials();
  }
});
  
  //  event listener for the submitInitialsBtn
  document.getElementById('submitInitialsBtn').addEventListener('click', submitInitials);
  