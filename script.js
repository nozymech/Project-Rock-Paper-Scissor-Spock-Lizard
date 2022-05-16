let stone = ["rock","paper","scissors"]
const result = document.getElementById("result")
// connect all three buttons to javascript as a node list 
const buttons = [].slice.call(document.querySelectorAll('button'));
const player = document.getElementById("player");
const computer = document.getElementById("computer")
let playerScore = 0 ;
let computerScore = 0 ;
let buttonClick = 0
player.innerHTML = `Player: ${playerScore} point  `;
computer.innerHTML = `Computer: ${computerScore} point`;
result.innerText= "It shows win or lose"
  //get index from forEach
buttons.map((button,index) => {
  // for each button wii have a event listener
  button.addEventListener('click',()=>{
     buttonClick =index;
  })
});

function playerAddOne()  {
  playerScore= playerScore + 1;
  player.innerHTML = `Player: ${playerScore} point  `;
}

function computerAddOne()  {
  computerScore= computerScore + 1;
  computer.innerHTML = `Computer: ${computerScore} point`;
}

function computerPlay() {
  return Math.floor(Math.random()*stone.length)
}
function playerChoose() {
  //map() is to loop through each button (have to form array)
}

function playRound(playerSelection, computerSelection) {
  //0: rock 1:paper 2:scissor
  if ( playerSelection== computerSelection ) {
    return "It`s a tie";
  } else if ( playerSelection==0 && computerSelection ==2) {
    playerAddOne();
    return "You win! Rock beats Scissors" 
  } else if (playerSelection==0 && computerSelection ==1){
    computerAddOne();
    return "You lose! Paper beats Rocks"
  } else if ( playerSelection==1 && computerSelection ==0) {
    playerAddOne()
    return "You win! Paper beats Rock"
  }  else if (playerSelection==1 && computerSelection ==2){
    computerAddOne()
    return "You lose! Scissor beats Paper"
  } else if ( playerSelection==2 && computerSelection ==1) {
    playerAddOne()
    return "You win! Scissor beats Paper"
  } else if (playerSelection==2 && computerSelection ==0){
    computerAddOne()
    return "You lose! Rock beats Scissors"
  }
}


function game() {
  let computerSelection = computerPlay();
  let playerSelection= buttonClick;
  result.innerText= playRound(playerSelection, computerSelection);
}
  



