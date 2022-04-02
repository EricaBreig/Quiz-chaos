//Global Variables
var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var quizContainer = document.querySelector("#quiz");
var finalScoreContainer = document.querySelector(".finalscore");
var secondsLeft = 5;
var currentQuestionIndex = 0;
var scoreScreen = document.querySelector(".highScores");
var submitButton = document.querySelector(".submit");

// Countdown Timer
function timer() {
  var countDown = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(countDown);
      // quizContainer.classList.add("hide");
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
//Once time runs out, this sends a message with image describing that it's over and that the user has lost
function sendMessage() {
  quizContainer.classList.add("hide");
  finalScoreContainer.classList.remove("hide");
  timerEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/timeisup.jpeg");
  finalScoreContainer.appendChild(imgEl);
}
//Questions -- array of objects
var questions = [
  {
    //Question 1
    question: "What is my favorite color?",
    // choiceA: "Purple",
    // choiceB: "Blue",
    // choiceC: "Pink",
    // choiceD: "All of the above",
    choices: ["Purple", "Blue", "Pink", "All of the above"],
    correctAnswer: 3,
  },
  {
    //Question 2
    question: "How many royal toots do I give right now?",
    // choiceA: "None",
    // choiceB: "Infinitely none",
    // choiceC: "maybe half a toot",
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
  // {
  //   //Question 6
  //   question: "What does Zydrate come in?",
  //   choiceA: "A little glass vial",
  //   choiceB: "a plastic baggie",
  //   choiceC: "a cardboard box",
  //   choiceD: "what the hell is zydrate?",
  //   correctAnswer: "choiceA",
  // },
  // {
  //   //Question 7
  //   question: "And the little glass vial goes into the gun like a battery;",
  //   choiceA: "okay...",
  //   choiceB: "uhhh..?",
  //   choiceC: "what",
  //   choiceD: "And the zydrate gun goes somewhere against your anatomy.",
  //   correctAnswer: "choiceD",
  // },
  // {
  //   //Question 8
  //   question:
  //     "And when the gun goes off, it sparks, and you're ready for _____",
  //   choiceA: "death",
  //   choiceB: "sleep",
  //   choiceC: "surgery",
  //   choiceD: "hecc if I know",
  //   correctAnswer: "choiceC",
  // },
  // {
  //   //Question 9
  //   question: "Ok, enough of that -- What am I thinking about right now?",
  //   choiceA: "Sleep, probs",
  //   choiceB: "eating, probs",
  //   choiceC: "cuddling the kitties",
  //   choiceD: "finishing this assignment",
  //   correctAnswer: "choiceA",
  // },
  // {
  //   //Question 10
  //   question: "What is love?",
  //   choiceA: "oh baby don't hurt me",
  //   choiceB: "don't hurt me",
  //   choiceC: "no more",
  //   choiceD: "all of the above",
  //   correctAnswer: "choiceD",
  // },
];

// Button that starts the quiz~
startButton.addEventListener("click", function () {
  startQuiz();
  timer();
  console.log("it's working");
  intro.classList.add("hide");
});

// Button for submitting your initials for your score
submitButton.addEventListener("click", function () {
  finalScoreContainer.classList.add("hide");
  scoreScreen.classList.remove("hide");
});

// Make the intro disappear, and the first question appear
function startQuiz() {
  if (currentQuestionIndex < questions.length) {
    // for (var i = 0; i<questions.length; i++){
    var currentQuestion = questions[currentQuestionIndex];
    var questionString = document.createElement("h3");
    var questionsList = document.createElement("ul");
    // var choiceA = document.createElement("li");
    // var choiceB = document.createElement("li");
    // var choiceC = document.createElement("li");
    // var choiceD = document.createElement("li");
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    questionString.textContent = currentQuestion.question;
    quizContainer.appendChild(questionString);
    console.log(quizContainer);
    // quizContainer.style.display = "initial";
    quizContainer.appendChild(questionsList);
    console.log(currentQuestion.choices);

    for (var j = 0; j < currentQuestion.choices.length; j++) {
      var liEl = document.createElement("li");
      questionsList.appendChild(liEl);
      liEl.textContent = currentQuestion.choices[j];
    }
    questionsList.addEventListener("click", function (event) {
      var target = event.target;
      var userChoice = target.textContent;
      var correctAnswerIndex = currentQuestion.correctAnswer;
      currentQuestion.choices[correctAnswerIndex];
      if (currentQuestion.choices[correctAnswerIndex] === userChoice) {
        console.log("Correct!");
      } else {
        console.log("WRONNNNNG");
        //decrease time here
      }
      quizContainer.innerHTML = "";
      currentQuestionIndex++;
      startQuiz();
    });
  } else {
  }
}

//Answer selection, changing screen, and affecting the timer

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
// console.log(questions);
