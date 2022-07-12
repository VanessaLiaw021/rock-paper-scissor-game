//Query Selectors 
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissor");
const displayPlayerScore = document.querySelector("#player-score");
const displayComputerScore = document.querySelector("#computer-score");
const determineWinner = document.querySelector("#winner");
const showPlayerChoice = document.querySelector("#displayPlayerChoice");
const showComputerChoice = document.querySelector("#displayComputerChoice");
const restartButton = document.querySelector(".restart");

//Variables to keep track of score 
let playerScore = 0;
let computerScore = 0;
let playerChoice;