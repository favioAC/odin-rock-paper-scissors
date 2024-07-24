// Computer randomly selects rock, paper, or scissors
// User inputs selection from rock, paper, or scissors
// Determine round winner
// Initialize counter to keep score
// First to 5 wins


// Creating function to randomize computer's choice
function getComputerChoice() {
    const number = Math.floor(Math.random() * 100);
    return number > 66 ? 'rock'
        : number > 33 ? 'paper'
        : 'scissors';
}

// Creating function to capture human's choice
function getHumanChoice() {
    let humanInput = prompt('Make a selection: Rock, Paper, or Scissors.', '');
    if (humanInput.toLowerCase() === 'rock') {
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

// Creating function to play round
function playRound(humanChoice, computerChoice) {
    let results;
    if(humanChoice === computerChoice) {
        results = 'tie'
    } else if (humanChoice === 'rock') {
        computerChoice === 'paper' ? results = 'computer' : results = 'human';
    } else if (humanChoice === 'paper') {
        computerChoice == 'scissors' ? results = 'computer' : results = 'human';
    } else {
        computerChoice === 'rock' ? results = 'computer' : results = 'human';
    } return results;
}


const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// Declaring and initializing scores
let humanScore = 0;
let computerScore = 0;

const results = playRound(humanSelection, computerSelection);

playRound(humanSelection, computerSelection);

console.log(`The computer chose ${computerSelection}. \nYou chose ${humanSelection}.`)
console.log(`Computer score is ${computerScore}.`);
console.log(`Human score is ${humanScore}.`);
console.log(results);