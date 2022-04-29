let stone = ["rock","paper","scissors"]

function computerPlay() {
choose = stone[Math.floor(Math.random()*stone.length)]
return choose
}

function playRound(playerSelection, computerSelection) {
  if ( playerSelection.toLowerCase() == computerSelection ) {
    return "It`s a tie";
  } else if ( playerSelection.toLowerCase()=="rock" && computerSelection =="Scissors") {
    return "You win! Rock beats Scissors"
  } else if (playerSelection.toLowerCase()=="rock" && computerSelection =="paper"){
    return "You lose! Paper beats Rocks"
  } else if ( playerSelection.toLowerCase()=="paper" && computerSelection =="rock") {
    return "You win! Paper beats Rock"
  }  else if (playerSelection.toLowerCase()=="paper" && computerSelection =="scissors"){
  return "You lose! Scissor beats Paper"
  } else if ( playerSelection.toLowerCase()=="scissors" && computerSelection =="paper") {
    return "You win! Scissor beats Paper"
  } else if (playerSelection.toLowerCase()=="scissors" && computerSelection =="rock"){
    return "You lose! Rock beats Scissors"
  }
}

 function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock? Paper? Scissors?");;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 }
 }

 game()