
let timerInterval;
let timeLeft = 60;
let hss = [];
const startBtn = document.querySelector('.startEle')
const timer = document.body.querySelector(".timer");
const hs = document.querySelector(".HS");
const button = document.querySelector(".startEle");
const questionsEl = document.querySelector(".questionsEl");
let preGame = "";
let mode = preGame;
const questions = [
  {
    question: 'String statments are enclosed within __________ marks',
    choices: ['quotation', 'paragraph', 'track', 'bite', 'none of the above'],
    answer: 'quotation'
  },
  {
    question: 'The previous question was a little _________',
    choices: ['dark', 'twisted', 'inapproperiate', 'made out of frustration', 'all of the above',],
    answer: 'all of the above'
  },
  {
    question: 'An append statment adds to an element on the _________',
    choices: ['top of the listed element(ex.by reading from top to bottom "appended element then listed element"', 'bottom of the listed element', 'restraining order list',],
    answer: 'bottom of the listed element'
  },
  {
    question: 'An alert is ment to______?',
    choices: ['inform the enduser of possible problems', 'ask the enduser for input', 'annoy the enduser', 'add a element to the page', 'cause a massive surge in power so that the enduser can no longer operate their computer',],
    answer: 'inform the enduser of possible problems'
  },
  {
    question: 'A console.log() is will______',
    choices: ['log the thing in the parenths in the console', 'make an array', 'make a function', 'log your personal gaming console at home', 'take over the world',],
    answer: 'log the thing in the parenths in the console'
  }
];


let currentQuestionIndex = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  const questionEl = document.createElement("div");
  questionEl.textContent = questionObj.question;
  questionsEl.appendChild(questionEl);

  questionObj.choices.forEach(function (choice) {
    const choiceEl = document.createElement("button");
    choiceEl.textContent = choice;
    questionsEl.appendChild(choiceEl);

    choiceEl.addEventListener("click", function () {
      if (choice === questionObj.answer) {
        console.log("Correct!!")
      } else {
        console.log("Incorrect")
        timeLeft = timeLeft - 10;
      }

      currentQuestionIndex++;
      questionsEl.innerHTML = "";
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        endGame(timeLeft);
      }
    });
  });
};







function startTimer() {
   timeLeft = 60;
   timerInterval = setInterval(function () {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
    if (timeLeft == -1) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}


function hideStart() {
  startBtn.style.display = "none";
}

function renderEnder() {
  const initials = JSON.parse(localStorage.getItem("hss"));
  hs.textContent= "High Scores: " + initials[0].initials + " " + timeLeft; 
  
  
};




function endGame(timeLeft) {
 clearInterval(timerInterval);
  const initials = prompt("initials please");
  const score = { initials: initials, timeLeft: timeLeft.value };
  hss.push(score);
  localStorage.setItem("hss", JSON.stringify(hss));
  renderEnder();

}
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', hideStart);