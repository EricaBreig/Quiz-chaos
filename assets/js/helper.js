import "./styles.css";
var screen0Ele = document.querySelector("#screen0");
var screen0ButtonEle = screen0Ele.querySelector("button");
var screen1Ele = document.querySelector("#screen1");
var screen1ButtonEle = screen1Ele.querySelector("button");
var screen2Ele = document.querySelector("#screen2");
var screen2ButtonEle = screen2Ele.querySelector("button");
var doSomethingEle = document.querySelector("#doSomething");
var saySomethingEle = document.querySelector("#saySomething");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");

var HIDE_CLASS = "hide";
var questions = [
  {
    question: "What house was Harry Potter in?",
    answers: ["Gryffindoor", "Ravenclaw", "Slytherin", "Hufflepuff"],
    answer: 0
  },
  {
    question: "What was Hermione's cat's name?",
    answers: ["Crookshanks", "Peter Pettigrew", "Scabbers", "Harry"],
    answer: 0
  }
];
var currentQuestion = 0;

var dynamicElements = [
  screen0Ele,
  screen1Ele,
  screen2Ele,
  doSomethingEle,
  saySomethingEle
];

function init() {
  setEventListeners();
}

function setState(state) {
  switch (state) {
    case 1:
      populateQuestion();
      break;
    default:
      break;
  }

  dynamicElements.forEach(function (ele) {
    var possibleStatesAttr = ele.getAttribute("data-states");
    var possibleStates = JSON.parse(possibleStatesAttr);
    if (possibleStates.includes(state)) {
      ele.classList.remove(HIDE_CLASS);
    } else {
      ele.classList.add(HIDE_CLASS);
    }
  });
}

function populateQuestion() {
  var questionObj = questions[currentQuestion];
  // Remove the current list items
  answersEl.innerHTML = "";
  questionEl.textContent = questionObj.question;
  questionObj.answers.forEach(function (question) {
    var li = document.createElement("li");
    li.textContent = question;
    answersEl.appendChild(li);
  });
  if (currentQuestion === questions.length - 1) {
    currentQuestion = 0;
  } else {
    currentQuestion++;
  }
}

function setEventListeners() {
  screen0ButtonEle.addEventListener("click", function () {
    setState(1);
  });
  screen1ButtonEle.addEventListener("click", function () {
    setState(2);
  });
  screen2ButtonEle.addEventListener("click", function () {
    setState(0);
  });
  // Notice we are placing the event listener on the UL element.
  // This is because the UL element is never destroyed whereas
  // the list elements are always destroyed and re-created. We would
  // need to add the event listeners to the list items
  // every time we created one.
  answersEl.addEventListener("click", function (evt) {
    var target = evt.target;
    if (target.matches("li")) {
      window.alert(target.innerText);
    }
  });
}

init();



// ======== TIMER =======
var timeEl = document.querySelector(".time");
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
init();



// =============== original method


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