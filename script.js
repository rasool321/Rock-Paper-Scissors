

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        body.style.backgroundColor = '#333';
        body.style.color = '#f9f9f9';
        header.style.backgroundColor = '#222';
    } else {
        body.style.backgroundColor = '#f9f9f9';
        body.style.color = '#000';
        header.style.backgroundColor = '#111112';
    }
});

let humanWins = 0;
let computerWins = 0;
let rounds = 0;
const totalRounds = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return { result: "It's a tie!", outcomeGif: "tie.gif" };
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanWins++;
        return {
            result: "You win this round!",
            outcomeGif: `${humanChoice}-beats-${computerChoice}.gif`,
        };
    }
    computerWins++;
    return {
        result: "Computer wins this round!",
        outcomeGif: `${computerChoice}-beats-${humanChoice}.gif`,
    };
}

function displayChoices(humanChoice, computerChoice) {
    document.getElementById('human-gif').src = `images/${humanChoice}-emoji.png`;
    document.getElementById('computer-gif').src = `images/${computerChoice}-emoji.png`;
}

function updateRound() {
    rounds++;
    if (rounds >= totalRounds) {
        displayFinalResult();
        document.getElementById('play-again-btn').style.display = 'inline-block';
        toggleButtons(false);
    }
}

function displayFinalResult() {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = `Out of ${totalRounds}, you got ${humanWins} wins.`;
}

function resetGame() {
    humanWins = 0;
    computerWins = 0;
    rounds = 0;
    document.getElementById('result-message').textContent = '';
    document.getElementById('human-gif').src = '';
    document.getElementById('computer-gif').src = '';
    document.getElementById('outcome-gif').src = '';
    document.getElementById('play-again-btn').style.display = 'none';
    toggleButtons(true);
}

function toggleButtons(enable) {
    const buttons = document.querySelectorAll('.card-content button');
    buttons.forEach((button) => {
        button.disabled = !enable;
        button.style.cursor = enable ? 'pointer' : 'not-allowed';
        button.style.opacity = enable ? '1' : '0.6';
    });
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const { result, outcomeGif } = determineWinner(humanChoice, computerChoice);
    displayChoices(humanChoice, computerChoice);
    document.getElementById('result-message').textContent = result;
    document.getElementById('outcome-gif').src = `images/${outcomeGif}`;
    updateRound();
}
document.getElementById('play-again-btn').addEventListener('click', resetGame);
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
