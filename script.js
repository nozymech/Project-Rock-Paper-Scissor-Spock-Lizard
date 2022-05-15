let stone = ["rock","paper","scissors"]

function computerPlay() {
choose = stone[Math.floor(Math.random()*stone.length)]
return choose
}

function playRound(playerSelection, computerSelection) {
  if ( playerSelection== computerSelection ) {
    return "It`s a tie";
  } else if ( playerSelection=="rock" && computerSelection =="scissors") {
    return "You win! Rock beats Scissors"
  } else if (playerSelection=="rock" && computerSelection =="paper"){
    return "You lose! Paper beats Rocks"
  } else if ( playerSelection=="paper" && computerSelection =="rock") {
    return "You win! Paper beats Rock"
  }  else if (playerSelection=="paper" && computerSelection =="scissors"){
  return "You lose! Scissor beats Paper"
  } else if ( playerSelection=="scissors" && computerSelection =="paper") {
    return "You win! Scissor beats Paper"
  } else if (playerSelection=="scissors" && computerSelection =="rock"){
    return "You lose! Rock beats Scissors"
  }
}


function game() {
  const buttons = document.querySelectorAll('button');
  playerSelection= buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      console.log(button.id);
    });
  });
  const computerSelection = computerPlay();
  const result = document.getElementById("result")
  result.innerText= playRound(playerSelection, computerSelection);
 }




