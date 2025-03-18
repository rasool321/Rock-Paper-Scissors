console.log("Hello, Welcome to the rock paper and scissors!");

// Global score variables
var humanScore = 0;
var computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (x == 0) {
        console.log(`Computer chose: Rock`);
        return "Rock";
    } else if (x == 1) {
        console.log(`Computer chose: Paper`);
        return "Paper";
    } else {
        console.log(`Computer chose: Scissors`);
        return "Scissors";
    }
}

// Function to get human choice
function getHumanChoice() {
    let z = prompt(`Choose one: "Rock", "Paper", or "Scissors"`);
    return z;
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log(`It's a tie! Both chose ${computerChoice}`);
        return "Tie";
    } 
    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return "Human Wins";
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return "Computer Wins";
    }
}

// Run one round of the game
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// Display updated scores
console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);


// Function to play multiple rounds
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Final winner check
    if (humanScore > computerScore) {
        console.log("🏆 Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("🤖 Computer wins the game!");
    } else {
        console.log("😐 It's a tie overall!");
    }

    console.log(`Final Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

// Play a game of 5 rounds
playGame(5);