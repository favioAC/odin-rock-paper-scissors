function getComputerChoice () {
    const number = Math.floor(Math.random() * 100);
    return number > 66 ? 'rock'
        : number > 33 ? 'paper'
        : 'scissors';
}

const btn = Array.from(document.querySelectorAll('.btn'));

addListener();

function playRound(pick) {
    let computer = getComputerChoice();
    let user = pick;
    console.log(user);
    let roundWinner;
    if (user === computer) roundWinner = 'tie';
    else {
        switch (user) {
            case 'rock':
                roundWinner = computer === 'paper' ? 'computer'
                    : 'user';
                break;
            case 'paper':
                roundWinner = computer === 'scissors' ? 'computer'
                    : 'user';
                break;
            default:
                roundWinner =  computer === 'rock' ? 'computer'
                    : 'user'
                break;
        }
    }
    resultsHeader.textContent = 'Round Results:'
    resultsMsg.textContent = roundWinner === 'user' ? `You won this round!  The computer picked ${computer}.`
        : roundWinner === 'computer' ? `You lost this round.  The computer picked ${computer}.`
        : `This round is a tie!  You both picked ${computer}.`;
    scoreBoard(roundWinner);
}

function scoreBoard (winner) {
    let player;
    if (winner === 'user') userScore++;
    if (winner === 'computer') computerScore++;
    roundTracker();
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    if (userScore === 5 || computerScore === 5) {
        player = userScore > computerScore ? 'user'
            : 'computer';
        finalWinner(player);
    }
}

function roundTracker () {
    roundCounter++;
    counterDisplay.textContent = roundCounter;
}

function finalWinner (player) {
    finalResultsMsg.textContent = player === 'user' ? 'You beat the computer, congratulations!'
        : 'You lose!  Better luck next time.';
    killBtns();
}

function addListener () {
    btn.forEach(btn => btn.addEventListener('mousedown', mouseUp));
}

function mouseUp () {
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => this.classList.remove('btn-clicked'));
    playRound(this.id);
}

function killBtns () {
    btn.forEach(btn => btn.removeEventListener('mousedown', mouseUp));
    launchReset();
}

function launchReset () {
    resetBtn.style.display = 'block';
    addResetBtnEvent ();
}

function addResetBtnEvent () {
    resetBtn.addEventListener('mousedown', gameReset)

}

function gameReset () {
    userScore = 0;
    computerScore = 0;
    roundCounter = 0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    counterDisplay.textContent = roundCounter;
    resultsHeader.textContent = '';
    resultsMsg.textContent = '';
    finalResultsMsg.textContent = '';
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => {
        this.classList.remove('btn-clicked');
        resetBtn.style.display = 'none';

    });
    addListener ();
}

let userScore = 0;
let computerScore = 0;
let roundCounter = 0;

const resultsHeader = document.querySelector('.results-header');
const resultsMsg = document.querySelector('.results-msg');
const userScoreDisplay = document.querySelector('.user-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const finalResultsMsg = document.querySelector('.final-msg');
const counterDisplay = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset-btn');