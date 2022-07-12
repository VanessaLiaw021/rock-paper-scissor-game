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

//Store the computer choice in an array 
const choices = ["Rock", "Paper", "Scissor"];

//Function that get the choices of the player and computer choice
const getComputerChoice = () => {

    //Get random computer choice 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //Display the computer choice 
    showComputerChoice.textContent = computerChoice;

    //Return the computer choice 
    return computerChoice;
};

//Function to start the game 
const startGame = (playerChoice) => {

    //Call the function to get the computer choice 
    let computerChoice = getComputerChoice();

    //Display the plater choice based on button clicked 
    showPlayerChoice.textContent = playerChoice;

    //Determine who wins, lose, or if it is a tie
    if (playerChoice === computerChoice) {

        //Display message that it's a tie
        determineWinner.textContent = "It's a Tie!";

    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {

        //Display message that player wins
        determineWinner.textContent = "You Win!";

        //Increment the player score
        playerScore++;

        //Display the player score
        displayPlayerScore.textContent = playerScore;

    } else {

        //Display message that player lost
        determineWinner.textContent = "You Lose!";

        //Increment the computer score
        computerScore++;

        //Display the computer score 
        displayComputerScore.textContent = computerScore;
    };
};

//Add event listener to determine the player choice 
rockButton.addEventListener("click", () => { playerChoice = startGame("Rock") });
paperButton.addEventListener("click", () => { playerChoice = startGame("Paper") });
scissorButton.addEventListener("click", () => { playerChoice = startGame("Scissor") });

//Add event listener to restart the game 
restartButton.addEventListener("click", () => {

    //Set the score back to zero
    playerScore = 0;
    computerScore = 0;

    //Set all the text content to empty and score to 0 
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    determineWinner.textContent = " ";
    showPlayerChoice.textContent = " ";
    showComputerChoice.textContent = " ";
});