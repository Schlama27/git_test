//Returns a random string of either "rock", "paper", or "scissors"
const getComputerChoice = () => {
    //Randomly generates a number between 1-3
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};
