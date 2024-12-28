//Returns a random string of either "rock", "paper", or "scissors"
const getComputerChoice = () => {
    //Randomly generates a number between 1-3
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};
//Prompts user to type in one of the three options
function getHumanChoice() {
    let userInput = prompt('Choose: Rock, Paper, or Scissors?').toLowerCase();
    return userInput;
}

console.log(getComputerChoice());
console.log(getHumanChoice());


//Takes both the user and computer's choice and declares a winner
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            return 'humanWin';
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
                (humanChoice === 'paper' && computerChoice === 'scissors') ||
                (humanChoice === 'scissors' && computerChoice === 'rock')) {
                    return 'computerWin';
                } else {
                    return 'Tie';
                }
}

console.log(playRound());