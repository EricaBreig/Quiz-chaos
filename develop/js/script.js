//Global Variables
var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var quizContainer = document.querySelector("#quiz");
var finalScoreContainer = document.querySelector(".finalscore");
var score = 0;
var secondsLeft = 100;
var penalty = 5;
var delay = 3;
var currentQuestionIndex = 0;
var scoreScreen = document.querySelector(".highScores");
var scoresList = document.querySelector(".scoreslist");
var submitButton = document.querySelector(".submit");

// Countdown Timer
function timer() {
  var countDown = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time Left: " + secondsLeft + "seconds";
    if (secondsLeft === 0 || currentQuestionIndex == questions.length) {
      // Stops execution of action at set interval
      clearInterval(countDown);

      quizContainer.classList.add("hide");
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}



// Calculates time remaining and replaces it with score
  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var yourScore = document.querySelector(".your-score");
    // clearInterval(holdinterval);
    yourScore.textContent = "Your final score is: " + timeRemaining;

    scoreScreen.appendChild("your-score");
};

//Once time runs out, this sends a message with image describing that it's over and that the user has lost
function sendMessage() {
  quizContainer.classList.add("hide");
  finalScoreContainer.classList.remove("hide");
  timerEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/itsover.png");
  imgEl.style.height = "600px";
  imgEl.style.width = "750px";
  finalScoreContainer.appendChild(imgEl);
}
//Questions, typed out as an array of arrays
var questions = [
  {
    //Question 1
    question: "Which one of these Pie decimals is legit?",
    choices: [
      "3.141592653583793238",
      "3.141592653589739238",
      "3.141592565389793238",
      "3.141592653589793238",
    ],
    correctAnswer: 3,
  },
  {
    //Question 2
    question: "How many royal toots do I give right now?",
    choices: [
      "None",
      "Infinitely none",
      "maybe half a toot",
      "a quarter of a toot",
    ],
    correctAnswer: 1,
  },
  {
    //Question 3
    question: "How bored are you right now?",
    choices: [
      "super bored",
      "super forking bored",
      "only a little",
      "nah, dawg, this is fun",
    ],
    correctAnswer: 3,
  },
  {
    //Question 4
    question: "What is the answer to this question?",
    choices: [
      "what",
      "heck if I know, I'm just grading this quiz",
      "cheese",
      "I don't know, just take me to the next question",
    ],
    correctAnswer: 1,
  },
  {
    //Question 5
    question: "If I was a type of cheese, which one would I be?",
    choices: ["American", "cheddar", "wensleydale", "pickles"],
    correctAnswer: 3,
  },
  {
    //Question 6
    question: "What does Zydrate come in?",
    choices: [
      "A little glass vial",
      "a plastic baggie",
      "a cardboard box",
      "what the hell is zydrate?",
    ],
    correctAnswer: 0,
  },
  {
    //Question 7
    question: "And the little glass vial goes into the gun like a battery;",
    choices: [
      "what",
      "okay...",
      "uhhh..?",
      "And the zydrate gun goes somewhere against your anatomy.",
    ],
    correctAnswer: 3,
  },
  {
    //Question 8
    question:
      "And when the gun goes off, it sparks, and you're ready for _____",
    choices: ["death", "sleep", "surgery", "hecc if I know"],
    correctAnswer: 3,
  },
  {
    //Question 9
    question: "Ok, enough of that -- What am I thinking about right now?",
    choices: [
      "Sleep, probs",
      "eating, probs",
      "cuddling the kitties",
      "finishing this assignment",
    ],
    correctAnswer: 0,
  },
  {
    //Question 10
    choices: [
      "What is love?",
      "oh baby don't hurt me",
      "don't hurt me",
      "no more",
      "all of the above",
    ],
    correctAnswer: 3,
  },
];

// Button that starts the quiz~
startButton.addEventListener("click", function () {
  startQuiz();
  timer();
  intro.classList.add("hide");
});

// Button for submitting your initials for your score
submitButton.addEventListener("click", function () {
  finalScoreContainer.classList.add("hide");
  scoreScreen.classList.remove("hide");
});

// The function that goes through the questions
function startQuiz() {
  quizContainer.innerHTML = "";
  if (currentQuestionIndex < questions.length) {
    // for (var i = 0; i<questions.length; i++){
    var currentQuestion = questions[currentQuestionIndex];
    var questionString = document.createElement("h3");
    var questionsList = document.createElement("ul");
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    questionString.textContent = currentQuestion.question;
    quizContainer.appendChild(questionString);
    console.log(quizContainer);
    // quizContainer.style.display = "initial";
    quizContainer.appendChild(questionsList);
    console.log(currentQuestion.choices);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var liEl = document.createElement("li");
      questionsList.appendChild(liEl);
      liEl.textContent = currentQuestion.choices[i];
      // clearInterval(countDown);
      liEl.addEventListener("click", function (event) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        var target = event.target;
        var userChoice = target.textContent;
        var correctAnswerIndex = currentQuestion.correctAnswer;
        currentQuestion.choices[correctAnswerIndex];
        if (currentQuestion.choices[correctAnswerIndex] === userChoice) {
          console.log("Correct!");
          score++;
          createDiv.textContent = "HECK YES!  You're so smart!";
          quizContainer.append(createDiv);
        } else {
          console.log("WRONNNNNG");
          // Will deduct -5 seconds off the time interval of secondsLeft for wrong answers
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent =
            ">:[ Wrong! The correct answer is:  " +
            questions[correctAnswerIndex].correctAnswer;
          quizContainer.append(createDiv);
        }
       // this delay isnt working
      
        var timeBetween = setInterval(function(){
          if (delay < 0 ){
            console.log("running the delay")
            quizContainer.innerHTML="";
            clearInterval(timeBetween)
            currentQuestionIndex++;
            startQuiz();
          }
        }
        ,1000
        )
      });
    }
  }
}
// All done will append last page
function allDone() {
  finalScoreContainer.innerHTML = "";
  currentTime.innerHTML = "";
  finalScoreContainer.classList.add("hide");
  scoreScreen.classList.remove("hide");
  timerEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/itsover.png");
  imgEl.style.height = "600px";
  imgEl.style.width = "750px";
  finalScoreContainer.appendChild(imgEl);
}
// // // Heading:
var createH1 = document.createElement("h1");
createH1.setAttribute("id", "createH1");
createH1.textContent = "All Done!"

questionsDiv.appendChild(createH1);

// // Paragraph
var createP = document.createElement("p");
createP.setAttribute("id", "createP");

questionsDiv.appendChild(createP);

// Question Index determines number question user is on
 var createDiv = document.createElement("div");
 currentQuestionIndex++;

 if (currentQuestionIndex >= questions.length) {
// All done will append last page with user stats
 allDone();
 createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
 } else {
 render(questionsList);
 }
 finalScoreContainer.appendChild(createDiv);

// Event listener to clear scores
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// Retreives local stroage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    scoresList.appendChild(createLi);
    console.log(scoresList);
  }
}

//experimental janky shit ===========================================================================================
// Start the quiz function
// function startQuiz() {

//   questionString.innerHTML = currentQuestion.question;
//   choiceA.innerHTML = currentQuestion.choiceA;
//   choiceB.innerHTML = currentQuestion.choiceB;
//   choiceC.innerHTML = currentQuestion.choiceC;
//   choiceD.innerHTML = currentQuestion.choiceD;
//   correctAnswer.innerHTML = currentQuestion.correctAnswer;
//   quizContainer.append(questionString);
//   questionsList.append(choiceA);
//   questionsList.append(choiceB);
//   questionsList.append(choiceC);
//   questionsList.append(choiceD);
// }
// console.log(startQuiz());
// this is where i got stuck.
// startButton = startQuiz(){
//     startButton.addEventListener("click", function ()

// }

// function compare(event) {
//   var userSelect = questionsList.querySelector("li");
//   if (userSelect == correctAnswer)
//   console.log("correct")

// console.log(event.target)
// check if is right or wrong
// if wrong give a penalty
// increase the currentIndex
//going to want to run start index again; when you get to the last question, have it run the high score
//for timer: resesarch set interval and clear interval, have the timer run everysecond (if current index is equal =9 if timer is equal to 0, stop the interval)
// }
// function timer() {}

// });
// for (let index = 0; index < questions.length; index++) {
// accessing an array
//     var currentQuestion = questions[index]
//         accessing an object property
//     console.log(currentQuestion.correctAnswer)

// }
// console.log(questions)
