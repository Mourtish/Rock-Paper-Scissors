let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    rounds++;
    updateScores();

    if (rounds === 5) {
        declareWinner();
        resetGame();
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    updateScores();
    document.getElementById('choices').style.display = 'block';
    console.log("Game started. Make your choice.");
}

function updateScores() {
    document.getElementById('humanScore').textContent = `Your score: ${humanScore}`;
    document.getElementById('computerScore').textContent = `Computer score: ${computerScore}`;
    document.getElementById('rounds').textContent = `Rounds: ${rounds}`;
}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log("You win the game!");
        alert("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
        alert("You lose the game!");
    } else {
        console.log("The game is a tie!");
        alert("The game is a tie!");
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById('choices').style.display = 'none';
    updateScores();
}
