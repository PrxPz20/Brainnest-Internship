/**
 * @returns Returns random string from hand array
 */
function computerSelection() {
    const hand = ['Rock', 'Paper', 'Scissors'];

    return hand[Math.floor(Math.random() * hand.length )];
}

/**
 * @param {*} playerSelection < User/Player > hand
 * @param {*} computerSelection --
 * @returns a string that says IF the < User/Player > Won or Lose.
 */
function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerSelection.toLowerCase();
    
    document.getElementById("computer-selection").textContent = `Computer Selection: ${computerSelection}`
    console.log(`Player Selection ${playerSelection}`)

    if( playerPoints == 5) {
        alert("You WON!!!");
        location.reload();      // Refresh the Website
    }
    else if(computerPoints == 5) { 
        alert("Computer WON!!!");
        location.reload();      // Refresh the Website
    }
    

    // If player and computer have the same hand
    if (playerSelection == computerSelection) {
        return "Draw!!\n";
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ) {
        playerPoints++;
        console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`);

        document.getElementById("player-score").textContent = `Player Score: ${playerPoints}`;
    }
    
    else if ( (playerSelection == "scissors" && computerSelection == "paper") ) {
        
        playerPoints++;
        console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`);

        document.getElementById("player-score").textContent = `Player Score: ${playerPoints}`;
    }

    else if ( (playerSelection == "paper" && computerSelection == "rock") ) {

        playerPoints++;
        console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`);
        
        document.getElementById("player-score").textContent = `Player Score: ${playerPoints}`;
    }

    else {
        computerPoints++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}\n`);
        document.getElementById("computer-score").textContent = `Computer Score: ${computerPoints}`;
    }

    
}

var playerPoints = 0;
var computerPoints = 0;
var winner = 0; // 

const rockButton = document.getElementById("rockButton");
const rockButtonValue = rockButton.value;

const paperButton = document.getElementById("paperButton");
const paperButtonValue = paperButton.value;

const scissorsButton = document.getElementById("scissorsButton");
const scissorsButtonValue = scissorsButton.value;

rockButton.addEventListener("click", 
    function() { playRound(rockButtonValue,computerSelection() ) }
);

paperButton.addEventListener("click", 
    function() { playRound(paperButtonValue,computerSelection() ) }
);

scissorsButton.addEventListener("click", 
    function() { playRound(scissorsButtonValue,computerSelection() ) }
);
