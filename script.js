let game = ["Rock","Paper","Scissors"]

function computerPlay() {
choose = game[Math.floor(Math.random()*game.length)]
return console.log(choose)
}

computerPlay();
