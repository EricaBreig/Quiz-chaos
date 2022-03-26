//Global Variables
var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var quizContainer = document.querySelector(".quiz");
var highScoreContainer = document.querySelector(".highscores");
var currentIndex = 0;
//Questions -- array of objects
var questions = [
    {
        question: "What is the answer?",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "A",
    },
    {
        question: "What is the answer?",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "B",
    }
];

function startQuiz () {
    var currentQuestion = questions[currentIndex];
    var questionString = document.createElement('h3');
    var questionsList = document.createElement("ul");
    var choiceA = document.createElement("li");
    var choiceB = document.createElement("li");
    var choiceC = document.createElement("li");
    var choiceD = document.createElement("li");

    questionString.innerHTML = currentQuestion.question;
    choiceA.innerHTML = currentQuestion.choiceA;
    // questionString.innerHTML = currentQuestion.question;
    // questionString.innerHTML = currentQuestion.question;
    // questionString.innerHTML = currentQuestion.question;
    questionsList.append(choiceA);
    quizContainer.append(questionString);

}
function compare (event) {
// console.log(event.target)
// check if is right or wrong
// if wrong give a penalty
// increase the currentIndex
//going to want to run start index again; when you get to the last question, have it run the high score
//for timer: resesarch set interval and clear interval, have the timer run everysecond (if current index is equal =9 if timer is equal to 0, stop the interval)
}
function timer () {

}
startButton.addEventListener("click", function () {
    startQuiz();
    timer();
});
// for (let index = 0; index < questions.length; index++) {
        // accessing an array
//     var currentQuestion = questions[index]
//         accessing an object property
//     console.log(currentQuestion.correctAnswer)
    
// }
// console.log(questions);
