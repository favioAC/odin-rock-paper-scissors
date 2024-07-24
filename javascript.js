// Computer randomly selects rock, paper, or scissors
// User inputs selection from rock, paper, or scissors
// Determine round winner
// Initialize counter to keep score
// First to 5 wins

function getComputerChoice () {
    const number = Math.floor(Math.random() * 100);
    return number > 66 ? 'rock'
        : number > 33 ? 'paper'
        : 'scissors';
}

function getHumanChoice () {
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

const computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(`The computer chose ${computerChoice}.`);
console.log(`You chose ${humanChoice}.`);