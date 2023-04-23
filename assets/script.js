

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

//function for the questions
//function for the event listener
//function for timer intervals
// working start button
//timer-intervals
//working buttons for answers
const start = document.querySelector(".timer");
const tim = document.querySelector("#timerHT")
const quest = document.querySelector(".questions")
// let timersrt = 120;
start.addEventListener("click", function () {quizTimer() 
    let timersrt = 120;
    const timeInterval = setInterval(function () {
        timersrt--;
        start.textContent = timersrt + "seconds left.";

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);},
    console.log(start));

//     var questions = [
//         {


//             question: "My name is ____ ",
//             choices: ["Brandon", "John", "TweedleDumb", "TweedleDee", "Trump."],
//             answer: "Brandon",
//         },
//         {
//             question: "My cats name is ____",
//             choices: ["Spoiled", "Nimbus", "Spot", "Luna", "Chickie-poodle"],
//             answer: "Luna",
//         },
//         {
//             question: "I live in ______",
//             choices: ["Washingtion DC", "South Dakota", "state of denial", "Virginia", "Minnesota"],
//             Answer: "SouthDakota"
//         },
//         {
//             question: "How many dogs do I have?",
//             choices: ["0", "1", "2", "3", "to many"],
//             answer: "0",


//             question: "Where holds the Guinness books world  record for fastest recorded temperature change?",
//             choices: ["Death Vally", "Siberia", "Antartica", "South Dakota", "Alaska"],
//             Answer: "South Dakota",

//         }]

//     for (i = 0; i < questions.length[question]; i++)[
    
//         document.body.children[4].append[questions[i].question]
//     ]



    

    
//         document.body.div.

// return

// function displayMessage {
//  const endgame = ("game over")

// }
// render.endgame

// for (let i = 0; i < questions.length; i++);





