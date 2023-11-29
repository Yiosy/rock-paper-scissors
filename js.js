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

let PlayerChoice = prompt("make your choice").toUpperCase();
ComputerChoice = getComputerChoice();

function PlayGame(ComputerChoice, PlayerChoice) {
  if (PlayerChoice == ComputerChoice) {
    return "ITS A DRAW";
  } else if (PlayerChoice == "ROCK" && ComputerChoice == "PAPER") {
    return "you lose";
  } else if (PlayerChoice == "ROCK" && ComputerChoice == "SCISSORS") {
    return "you win";
  } else if (PlayerChoice == "PAPER" && ComputerChoice == "SCISSORS") {
    return "you lose";
  } else if (PlayerChoice == "PAPER" && ComputerChoice == "ROCK") {
    return "you win";
  } else if (PlayerChoice == "SCISSORS" && ComputerChoice == "ROCK") {
    return "you lose";
  } else if (PlayerChoice == "SCISSORS" && ComputerChoice == "PAPER") {
    return "you win";
  }
}
console.log(PlayGame(ComputerChoice, PlayerChoice));
console.log(PlayerChoice);
console.log(ComputerChoice);
