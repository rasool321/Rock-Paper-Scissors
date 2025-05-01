
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