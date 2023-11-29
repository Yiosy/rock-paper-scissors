function randomNumber(range) {
  return Math.floor(Math.random() * range);
}
function getComputerChoice() {
  if (randomNumber(2) === 0) {
    return "ROCK";
  } else if (randomNumber(2) === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function PlayGame(ComputerChoice, PlayerChoice) {
  if (PlayerChoice == ComputerChoice) {
    gameCount++;
    return "draw";
  } else if (PlayerChoice == "ROCK" && ComputerChoice == "PAPER") {
    gameCount++;
    computerScore++;
    return "you lose";
  } else if (PlayerChoice == "ROCK" && ComputerChoice == "SCISSORS") {
    gameCount++;
    playerScore++;
    return "you win";
  } else if (PlayerChoice == "PAPER" && ComputerChoice == "SCISSORS") {
    gameCount++;
    computerScore++;
    return "you lose";
  } else if (PlayerChoice == "PAPER" && ComputerChoice == "ROCK") {
    gameCount++;
    playerScore++;
    return "you win";
  } else if (PlayerChoice == "SCISSORS" && ComputerChoice == "ROCK") {
    gameCount++;
    computerScore++;
    return "you lose";
  } else if (PlayerChoice == "SCISSORS" && ComputerChoice == "PAPER") {
    gameCount++;
    playerScore++;
    return "you win";
  }
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("div");
const body = document.querySelector("#score");

const playerResult = document.createElement("div");
const computerResult = document.createElement("span");
playerResult.innerText = "Your score:" + " " + playerScore;
computerResult.innerText = "Computer's score:" + " " + computerScore;
body.append(playerResult, computerResult);

rock.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "ROCK").toUpperCase();
  results.innerText = gameResult;
  playerResult.innerText = "Your score:" + " " + playerScore;
  computerResult.innerText = "Computer's score:" + " " + computerScore;
  if (gameCount === 5) gameEnd();
});

paper.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "PAPER").toUpperCase();
  results.innerText = gameResult;
  playerResult.innerText = "Your score:" + " " + playerScore;
  computerResult.innerText = "Computer's score:" + " " + computerScore;
  if (gameCount === 5) gameEnd();
});

scissors.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "SCISSORS").toUpperCase();
  results.innerText = gameResult;
  playerResult.innerText = "Your score:" + " " + playerScore;
  computerResult.innerText = "Computer's score:" + " " + computerScore;
  if (gameCount === 5) gameEnd();
});

function gameEnd() {
  if (playerScore > computerScore) {
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    alert("grats you won");
  } else if (playerScore < computerScore) {
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    alert("oh no you lost");
  } else {
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    alert("draw");
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     PlayerChoice = prompt("make your choice").toUpperCase();
//     ComputerChoice = getComputerChoice();
//     console.log(PlayGame(ComputerChoice, PlayerChoice));
//     if (gameCount == 5) {
//       if (playerScore > computerScore) {
//         return "grats you won";
//       } else if (playerScore < computerScore) {
//         return "oh no you lost";
//       } else {
//         return "draw";
//       }
//     }
//   }
// }
// console.log(game());
