



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
//compare question to answer array



//variable for the questions
//variable for the answers
//function for the questions
//function for the event listener
//function for timer intervals
// working start button
//timer-intervals
//working buttons for answers
const start = document.querySelector(".timer");
const tim = document.querySelector("#timerHT")
const quest=document.querySelector(".questions")
let timersrt = 120;
start.addEventListener("click", quizTimer)


function quizTimer() {

    const timeInterval = setInterval(function () {
        timesrt--;
        start.textContent = timersrt + "seconds left.";

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);
}
function questions() {

    const questionso = {


        question1: "A theory for population decline in the western countries(that needs more research) is? ",
        answers: ["A decrease in male sperm", "Feminist rights", "Ugly males", "Smoking", "Trump."],
        Correct: answers[1],
    }

    const questiont = {
        question2: "How much did a MTG Black Lotus in mint condition sell for on March 16th 2023?",
        choice: ["$540,000", "1,200,000", "$50", "$1", "$120"],
        Correct: choices[1],
    }


    const questionr = {
        question3: "What is the fungus in the show 'The Last of Us' based on?",
        retort: ["Ohiocordyceps unilateralis", "dermatophytes", "Penicillium chrysogenum", "Botrytis cinerea", "Stachybotrys chartarum"],
        Correct: retort[1]
    }

document.body.div.appendChi

}


// function displayMessage {
//  const endgame = ("game over")
 
// }
// render.endgame

for (let i = 0; i < questions.length; i++);







