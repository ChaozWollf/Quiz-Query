// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


//function for the timer
//variable for the questions
//start button linked to timer in JS and question const
//question textContent and a button for possible the answers
//if else statment for wrong answers to take off time
//end game variable when the timer reaches 0
//object pushed to local storage with initials tied to highscore
const startBtn = document.querySelector('.startEle')
const timer = document.body.querySelector(".timer");
const hs = document.querySelector(".HS");
const button = document.querySelector(".startEle");
const questionsEl = document.querySelector(".questionsEl");
let preGame = "";
let mode = preGame;

const questions = [
  {
    questions: 'String statments are enclosed within __________ marks',
    choices: ['quotation', 'paragraph', 'track', 'bite', 'none of the above'],
    answer: 'quotation'
  },
  {
    questions: 'The previous question was a little _________',
    choices: ['dark', 'twisted', 'inaproperiate', 'made out of frustration', 'all of the above'],
    answer: 'all of the above'
  },
  {
    questions: 'An append statment adds to an element on the _________',
    choices: ['top of the listed element(ex.by reading from top to bottom "appended element then listed element"', 'bottom of the listed element', 'restraining order list'],
    answer: 'bottom of the listed element'
  },
  {
    questions: 'An alert is ment to______?',
    choices: ['inform the enduser of possible problems', 'ask the enduser for input', 'annoy the enduser', 'add a element to the page', 'cause a massive surge in power so that the enduser can no longer operate their computer'],
    answer: 'inform the enduser of possible problems'
  },
  {
    questions: 'A console.log() is will______',
    choices: ['log the thing in the parenths in the console', 'make an array', 'make a function', 'log your personal gaming console at home', 'take over the world'],
    answer: 'log the thing in the parenths in the console'
  }
];

function startQuiz() {
  questions.forEach(function (questionObj) {
    const questionEl = document.createElement("div");
    questionEl.textContent = questionObj.questions;
    questionsEl.appendChild(questionEl);
  });
}

function startTimer() {
  let timeLeft = 60;
  const timerInterval = setInterval(function () {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  const hss = prompt("initials please");}

 startBtn.addEventListener('click', startQuiz);
  startBtn.addEventListener('click', startTimer);