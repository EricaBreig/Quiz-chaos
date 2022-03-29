//Global Variables
var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var quizContainer = document.querySelector(".quiz");
var highScoreContainer = document.querySelector(".finalscore");

//Questions -- array of objects
var questions = [
  {
    //Question 1
    question: "What is my favorite color?",
    choiceA: "Purple",
    choiceB: "Blue",
    choiceC: "Pink",
    choiceD: "All of the above",
    correctAnswer: choiceD,
  },
  {
    //Question 2
    question: "How many royal toots do I give right now?",
    choiceA: "None",
    choiceB: "Infinitely none",
    choiceC: "maybe half a toot",
    choiceD: "a quarter of a toot",
    correctAnswer: choiceB,
  },
  {
    //Question 3
    question: "How bored are you right now?",
    choiceA: "super bored",
    choiceB: "super forking bored",
    choiceC: "only a little",
    choiceD: "nah, dawg, this is fun",
    correctAnswer: choiceD,
  },
  {
    //Question 4
    question: "What is the answer to this question?",
    choiceA: "what",
    choiceB: "heck if I know, I'm just grading this quiz",
    choiceC: "cheese",
    choiceD: "I don't know, just take me to the next question",
    correctAnswer: choiceB,
  },
  {
    //Question 5
    question: "If I was a type of cheese, which one would I be?",
    choiceA: "American",
    choiceB: "cheddar",
    choiceC: "wenslydale",
    choiceD: "pickles",
    correctAnswer: choiceD,
  },
  {
    //Question 6
    question: "What does Zydrate come in?",
    choiceA: "A little glass vial",
    choiceB: "a plastic baggie",
    choiceC: "a cardboard box",
    choiceD: "what the hell is zydrate?",
    correctAnswer: choiceA,
  },
  {
    //Question 7
    question: "And the little glass vial goes into the gun like a battery;",
    choiceA: "okay...",
    choiceB: "uhhh..?",
    choiceC: "what",
    choiceD: "And the zydrate gun goes somewhere against your anatomy.",
    correctAnswer: choiceD,
  },
  {
    //Question 8
    question:
      "And when the gun goes off, it sparks, and you're ready for _____",
    choiceA: "death",
    choiceB: "sleep",
    choiceC: "surgery",
    choiceD: "hecc if I know",
    correctAnswer: choiceC,
  },
  {
    //Question 9
    question: "Ok, enough of that -- What am I thinking about right now?",
    choiceA: "Sleep, probs",
    choiceB: "eating, probs",
    choiceC: "cuddling the kitties",
    choiceD: "finishing this assignment",
    correctAnswer: choiceA,
  },
  {
    //Question 10
    question: "What is love?",
    choiceA: "oh baby don't hurt me",
    choiceB: "don't hurt me",
    choiceC: "no more",
    choiceD: "all of the above",
    correctAnswer: choiceD,
  },
];

// Start the quiz function
function startQuiz() {
  var currentQuestion = questions[currentIndex];
  var questionString = document.createElement("h3");
  var questionsList = document.createElement("ul");
  var choiceA = document.createElement("li");
  var choiceB = document.createElement("li");
  var choiceC = document.createElement("li");
  var choiceD = document.createElement("li");
  var correctAnswer = questions[currentIndex].correctAnswer;

  questionString.innerHTML = currentQuestion.question;
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;
  correctAnswer.innerHTML = currentQuestion.correctAnswer;
  quizContainer.append(questionString);
  questionsList.append(choiceA);
  questionsList.append(choiceB);
  questionsList.append(choiceC);
  questionsList.append(choiceD);
}
startButton = startQuiz(){
    startButton.addEventListener("click", function () 
   
    
}


function compare(event) {
  var userSelect = questionsList.querySelector("li");
  if (userSelect == correctAnswer)
  console.log("correct")

  // console.log(event.target)
  // check if is right or wrong
  // if wrong give a penalty
  // increase the currentIndex
  //going to want to run start index again; when you get to the last question, have it run the high score
  //for timer: resesarch set interval and clear interval, have the timer run everysecond (if current index is equal =9 if timer is equal to 0, stop the interval)
}
function timer() {}
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
