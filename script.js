let game = ["Rock","Paper","Scissors"]

function computerPlay() {
choose = game[Math.floor(Math.random()*game.length)]
return choose
}

function playRound(playerSelection, computerSelection) {
  if ( computerSelection == "Rock" ) {
    return "You Lose! Paper beats Rock";
  } else if ( computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors"
  } else {
    return "It`s a tie"
  }              
 }
 
 const playerSelection = "rock";
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));