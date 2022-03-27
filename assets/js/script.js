//Global Variables
var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var quizContainer = document.querySelector(".quiz");
var highScoreContainer = document.querySelector(".highscores");
var currentIndex = 0;

var HIDE_CLASS = "hide";
//Questions -- array of objects
var questions = [
  {
    question: "What is my favorite color?",
    answers: ["Puple", "Blue", "Pink", "You don't have one, Erica"],
    correctAnswer: 0,
  },
  {
    question: "How many fucks do I give right now?",
    answers: [
      "None",
      "Infinitely none",
      "maybe half a fuck",
      "a quarter of a fuck",
    ],
    correctAnswer: 1,
  },
  {
    question: "How bored are you right now?",
    answers: [
      "super bored",
      "super fucking bored",
      "only a little",
      "nah, dawg, this is fun",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the answer to this question?",
    answers: [
      "what",
      "heck if I know, I'm just grading this quiz",
      "cheese",
      "I don't know, just take me to the next question",
    ],
    correctAnswer: 1,
  },
  {
    question: "If I was a type of cheese, which one would I be?",
    answers: ["American", "cheddar", "wenslydale", "pickles"],
    correctAnswer: 3,
  },
  {
    question: "What does Zydrate come in?",
    answers: [
      "A little glass vial",
      "a plastic baggie",
      "a cardboard box",
      "what the hell is zydrate?",
    ],
    correctAnswer: 0,
  },
  {
    question: "And the little glass vial goes into the gun like a battery.",
    answers: [
      "okay...",
      "uhhh..?",
      "what",
      "And the zydrate gun goes somewhere against your anatomy.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "And when the gun goes off, it sparks, and you're ready for _____",
    answers: ["death", "sleep", "surgery", "hecc if I know"],
    correctAnswer: 2,
  },
  {
    question: "What am I thinking about right now?",
    answer: [
      "Sleep, probs",
      "eating, probs",
      "cuddling the kitties",
      "finishing this assignment",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is love?",
    answers: [
      "oh baby don't hurt me",
      "don't hurt me",
      "no more",
      "D: all of the above",
    ],
    correctAnswer: 3,
  },
];
var currentQuestion = 0;

var dynamicElements = [
  startButton,
  intro,
  timerEl,
  quizContainer,
  highScoreContainer,
  currentIndex,
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
