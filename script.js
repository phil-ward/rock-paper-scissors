

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

function getHumanChoice(){
    // Function that takes the human player choice and returns the value
    let humanChoice = parseInt(prompt(`What would you like to play?\n
         1. Rock\n
         2. Paper\n
         3. Scissors\n
         Please enter the number of your choice:`))

    switch (humanChoice) {
        case 1:
            return 'rock'
        case 2: 
            return 'paper'
        case 3:
            return 'scissors'
    }

}

console.log(getHumanChoice())