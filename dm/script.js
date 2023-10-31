var timerElement = document.getElementById("timer");
var choicesElement = document.getElementById("choices");
var scoreElement = document.getElementById("score");
var questionElement = document.getElementById("question");
var startButton = document.getElementById("start-button");
var ulEl = document.querySelector(".choices")


var timer = 60;
var score = 0;
var currentQuestion = 0;
var timerInterval;



var questions = [
  {
      question: "Which symbol is used to open and close an array?",
      choices: ["bracket", "curly braces", "quotation","comma"],
      correctAnswer: "bracket",
  },
  {
      question: "Which operator is used to increase a value?",
      choices: ["decrementor", "incrementor", "modulus","exponentiation"],
      correctAnswer: "incrementor",
  },
  {
      question: "what is the command for showing what you logged??",
      choices: [".alert", ".prompt", ".display","console.log"],
      correctAnswer: "console.log",
  },
  {   question: "how can you get an instance to have a specific tag?",
      choices:["setAttribute","None","addEventListener","for loop"],
      correctAnswer: "setAttribute",  

  }
];



choicesElement.addEventListener("click", checkAnswer);

function showQuestion() {
  if (currentQuestion < questions.length) {
      questionElement.textContent = questions[currentQuestion].question;
      choicesElement.innerHTML = "";
      questions[currentQuestion].choices.forEach((select, index) => {
          const selectItem = document.createElement("li");
          selectItem.className = "select";
          selectItem.textContent = `${index + 1}. ${select}`;
          choicesElement.appendChild(selectItem);
      });
  } else {
      endGame();
  }
}

function checkAnswer(event) {
  var pickedChoice = event.target;
  var correctChoice = questions[currentQuestion].choices[0];

  if (pickedChoice.textContent.includes(correctChoice)) {
      score++;
      
  }else{
    timer -= 5
  }

  currentQuestion++;
  showQuestion();
}

function startTimer() {
  timerInterval = setInterval(function () {
      timer--;
      timerElement.textContent = timer;

      if (timer <= 0) {
          clearInterval(timerInterval);
          endGame();
      }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  score = timer.textContent = score;
  alert(`Game Over! Your score is ${score}`);
}

showQuestion();
startTimer();