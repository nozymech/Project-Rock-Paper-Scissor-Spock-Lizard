let stone = ["rock","paper","scissors"]
const result = document.getElementById("result")
const buttons = document.querySelectorAll('button');
const player = document.getElementById("player")
const computer = document.getElementById("computer")
let playerScore = 0 ;
let computerScore = 0 ;
player.innerHTML = `Player ${playerScore} point  `;
computer.innerHTML = `Computer ${computerScore} point`;
result.innerText= "It shows win or lose"

function playerAddOne()  {
  playerScore= playerScore + 1;
  player.innerHTML = `Player ${playerScore} point  `;
}

function computerAddOne()  {
  computerScore= computerScore + 1;
  computer.innerHTML = `Computer ${computerScore} point`;
}

function computerPlay() {
choose = stone[Math.floor(Math.random()*stone.length)]
return choose
}

function playRound(playerSelection, computerSelection) {
  if ( playerSelection== computerSelection ) {
    return "It`s a tie";
  } else if ( playerSelection=="rock" && computerSelection =="scissors") {
    playerAddOne();
    return "You win! Rock beats Scissors" 
  } else if (playerSelection=="rock" && computerSelection =="paper"){
    computerAddOne();
    return "You lose! Paper beats Rocks"
  } else if ( playerSelection=="paper" && computerSelection =="rock") {
    playerAddOne()
    return "You win! Paper beats Rock"
  }  else if (playerSelection=="paper" && computerSelection =="scissors"){
    computerAddOne()
    return "You lose! Scissor beats Paper"
  } else if ( playerSelection=="scissors" && computerSelection =="paper") {
    playerAddOne()
    return "You win! Scissor beats Paper"
  } else if (playerSelection=="scissors" && computerSelection =="rock"){
    computerAddOne()
    return "You lose! Rock beats Scissors"
  }
}


function game() {
  playerSelection= "paper"
  const computerSelection = computerPlay();
  result.innerText= playRound(playerSelection, computerSelection);
 }




