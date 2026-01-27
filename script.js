

function getComputerChoice(){
    // Function that returns randomized computer player choice of rock, paper, or scissors
    randNum = Math.random()
    if (randNum <= 0.33){
        return 'rock'
    } else if ( randNum > 0.33 && randNum <= 0.66 ) {
        return 'paper'
    } else if ( randNum > 0.66 ) {
        return 'scissors'
    }
}

console.log(getComputerChoice())