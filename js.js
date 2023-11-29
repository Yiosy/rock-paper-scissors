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
    return "ITS A DRAW";
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

rock.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "ROCK");
  results.innerText = "RESULT:" + " " + gameResult;
  console.log(ComputerChoice);
});

paper.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "PAPER");
  results.innerText = "RESULT:" + " " + gameResult;
  console.log(ComputerChoice);
});

scissors.addEventListener("click", () => {
  ComputerChoice = getComputerChoice();
  let gameResult = PlayGame(ComputerChoice, "SCISSORS");
  results.innerText = "RESULT:" + " " + gameResult;
  console.log(ComputerChoice);
});

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
