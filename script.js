let game = ["Rock","Paper","Scissors"]

function computerPlay() {
choose = game[Math.floor(Math.random()*game.length)]
return console.log(choose)
}

function playRound(playerSelection, computerSelection) {
   // your code here!
 }
 
 const playerSelection = "rock";
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));