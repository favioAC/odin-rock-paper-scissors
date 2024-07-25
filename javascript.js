// Computer randomly selects rock, paper, or scissors
// User inputs selection from rock, paper, or scissors
// Determine round winner and print results to console
// Initialize score trackers and round tracker
// Play a total of 5 rounds and print winner to console


// Function randomly selects computer's choice
function getComputerChoice() {
    const number = Math.floor(Math.random() * 100);
    return number > 66 ? 'rock'
        : number > 33 ? 'paper'
        : 'scissors';
}

// Function captures human's choice
function getHumanChoice() {
    let humanInput = prompt('Make a selection: Rock, Paper, or Scissors.', '');
    if (humanInput === null) {
        alert(`No selection made.`);
        getHumanChoice();
    } else if (humanInput.toLowerCase() === 'rock') {
        return 'rock';
    } else if (humanInput.toLowerCase() === 'paper') {
        return 'paper';
    } else if (humanInput.toLowerCase() === 'scissors') {
        return 'scissors';
    } else {
        alert(`You entered \"${humanInput}\". Make a valid selection from Rock, Paper, or Scissors.`);
        return getHumanChoice();    
    }
}

// Function determines winner for each round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('This round is a tie!');
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('You lose! Paper beats rock.');
            computerScore++;
        } else {
            console.log('You win! Rock beats scissors.');
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('You lose! Scissors beat paper.');
            computerScore++;
        } else {
            console.log('You win! Paper beats rock.');
            humanScore++;
        }
    } else {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats scissors.');
            computerScore++;
        } else {
            console.log('You win! Paper beats rock.');
            humanScore++;
        }
    }

}

// Function plays a total of 5 rounds
function playGame() {
    ++round;
    if (round <=5) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        playGame();
    } else {
        humanScore === computerScore ? console.log(`Final Results: \n--------------  \nIt's a tie! Play again to try your luck! \nComputer score is ${computerScore}. \nYour score is ${humanScore}.`)
            : humanScore > computerScore ? console.log(`Final Results: \n--------------  \nYou win! Great job! \nComputer score is ${computerScore}. \nYour score is ${humanScore}.`)
            : console.log(`Final Results: \n-------------- \nYou lose! Better luck next time. \nComputer score is ${computerScore}. \nYour score is ${humanScore}.`)
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

playGame();