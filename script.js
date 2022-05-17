let stone = ["rock","paper","scissors","spock", "lizard"]
const result = document.getElementById("result")
// connect all three buttons to javascript as a node list 
const buttons = [].slice.call(document.querySelectorAll('button'));
const player = document.getElementById("player");
const computer = document.getElementById("computer")
let playerScore = 0 ;
let computerScore = 0 ;
let buttonClick = 0 ;
player.innerHTML = `Player: ${playerScore} point  `;
computer.innerHTML = `Computer: ${computerScore} point`;
result.innerText= "It shows result"

buttons.map((button,index) => {
  //get index from map
  // for each button wii have a event listener
  button.addEventListener('click',()=>{
    let playerSelection= index;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    // it shows game result
    if (playerScore >=5){
      result.innerText=`You win!  Reload after 3s...`
      setTimeout(()=>{location.reload()} , 3000)
    }
    else if (computerScore >=5){
      result.innerText=`You lose ! Reload after 3s...`
      setTimeout(()=>{location.reload()} , 3000)
    }
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
  //0: rock 1:paper 2:scissor 3:spock 4:lizard
  if ( playerSelection == computerSelection ) {
    result.innerText=  "It`s a tie";
  } else if ( playerSelection==0 && computerSelection ==2) {
    playerAddOne();
    result.innerText=  "You win! Rock crushes Scissors" 
  } else if (playerSelection==2 && computerSelection ==0){
    computerAddOne()
    result.innerText=  "You lose! Rock crushes Scissors"
  } else if (playerSelection==0 && computerSelection ==1){
    computerAddOne();
    result.innerText=  "You lose! Paper covers Rock"
  } else if ( playerSelection==1 && computerSelection ==0) {
    playerAddOne()
    result.innerText=  "You win! Paper covers Rock"
  }  else if (playerSelection==1 && computerSelection ==2){
    computerAddOne()
    result.innerText=  "You lose! Scissors cuts Paper"
  } else if ( playerSelection==2 && computerSelection ==1) {
    playerAddOne()
    result.innerText=  "You win! Scissors cuts Paper"
  } else if ( playerSelection==0 && computerSelection ==4) {
    playerAddOne()
    result.innerText=  "You win! Rock crushes Lizard"
  } else if (playerSelection==4 && computerSelection ==0){
    computerAddOne()
    result.innerText=  "You lose! Rock crushes Lizard"
  } else if ( playerSelection==4 && computerSelection ==3) {
    playerAddOne()
    result.innerText=  "You win! Lizard poisons Spock"
  } else if (playerSelection==3 && computerSelection ==4){
    computerAddOne()
    result.innerText=  "You lose! Lizard poisons Spock"
  } else if ( playerSelection==3 && computerSelection ==2) {
    playerAddOne()
    result.innerText=  "You win! Spock smashes Scissors"
  } else if (playerSelection==2 && computerSelection ==3){
    computerAddOne()
    result.innerText=  "You lose! Spock smashes Scissors"
  } else if ( playerSelection==2 && computerSelection ==4) {
    playerAddOne()
    result.innerText=  "You win! Scissors decapitates Lizard"
  } else if (playerSelection==4 && computerSelection ==2){
    computerAddOne()
    result.innerText=  "You lose! Scissors decapitates Lizard"
  } else if ( playerSelection==4 && computerSelection ==1) {
    playerAddOne()
    result.innerText=  "You win! Lizard eats Paper"
  } else if (playerSelection==1 && computerSelection ==4){
    computerAddOne()
    result.innerText=  "You lose! Lizard eats Paper"
  } else if ( playerSelection==1 && computerSelection ==3) {
    playerAddOne()
    result.innerText=  "You win! Paper disproves Spock"
  } else if (playerSelection==3 && computerSelection ==1){
    computerAddOne()
    result.innerText=  "You lose! Paper disproves Spock"
  } else if ( playerSelection==3 && computerSelection ==0) {
    playerAddOne()
    result.innerText=  "You win! Spock vaporizes Rock"
  } else if (playerSelection==0 && computerSelection ==3){
    computerAddOne()
    result.innerText=  "You lose! Spock vaporizes Rock"
  } 

}





  



