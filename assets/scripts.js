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

let start = document.querySelector(".timer")
const hs = document.getElementsByClassName("HS")
const button = document.getElementsByClassName("startEl")
let preGame = " "
let mode=preGame


timeleft=120    

button.addEventListener(
    "click",
    function () { startQuiz });


    function startQuiz() { startTimer }
return;

function startTimer() {
    let startEl = document.querySelector(".timer")
    timerInterval = setInterval(function () {
        timeLeft--;
        startEl.textContent = timeLeft;
        if (secondsLeft === 0);
        clearInterval(timerInterval);
        sendMessage();
    }
    )
} 1000;
 const question =document.createElement(questions)
  var questions = [
    {
    question1: 'String statments are enclosed within __________ marks"
    choices:['quotation', 'paragraph', 'track', 'bite', 'none of the above']
    answer: 'quotation'
    },
    {
        question2:'The previous question was a little _________',
        choices: ['dark', 'twisted','inaproperiate', 'made out of frustration', 'all of the above'],
        answer: 'all of the above'
    },
{

        question3:'An append statment adds to an element on the _________',
        choices: ['top of the listed element(ex.by reading from top to bottom "appended element then listed element"', 'bottom of the listed element', 'restraining order list', ]

 
 
    }

  ]


        
        

    
