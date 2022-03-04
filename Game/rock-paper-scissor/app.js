const computerDisplay = document.getElementById("computer-choice");
const userDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const cCount = document.getElementById("cc");
const uCount = document.getElementById("uc");
const comp_ = document.getElementById("comp");
const use_ = document.getElementById("us");
let cc = 0;
let uc = 0;

let userGuess;
let computerGuess;
let resultDisplay;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userGuess = e.target.id;
    userDisplay.innerHTML = userGuess;
    comp_.innerHTML = "Computer";
    use_.innerHTML = "User";
    generateRandomChoice();
  })
);

function generateRandomChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissor"];
  computerGuess = choices[randomNumber];
  computerDisplay.innerHTML = computerGuess;

  if (userGuess.includes(computerGuess)) {
    result.innerHTML = "Oops...Retry !";
  } else {
    start();
  }
}

function start() {
  if (computerGuess === "rock" && userGuess === "scissor") {
    resultDisplay = " You Lost";
  }
  if (computerGuess === "rock" && userGuess === "paper") {
    resultDisplay = " You Win";
  }
  if (computerGuess === "paper" && userGuess === "scissor") {
    resultDisplay = " You Win";
  }
  if (computerGuess === "paper" && userGuess === "rock") {
    resultDisplay = " You Lost";
  }
  if (computerGuess === "scissor" && userGuess === "rock") {
    resultDisplay = " You Win";
  }
  if (computerGuess === "scissor" && userGuess === "paper") {
    resultDisplay = " You Lost";
  }
  result.innerHTML = resultDisplay;
  if (resultDisplay === " You Win") {
    uc += 1;
    uCount.innerHTML = uc;
  } else {
    cc += 1;
    cCount.innerHTML = cc;
  }
}
