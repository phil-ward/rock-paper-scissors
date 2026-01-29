
let humanScore = 0
let computerScore = 0

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
    let humanChoice = prompt(`What would you like to play?\n
         1. Rock\n
         2. Paper\n
         3. Scissors\n
         Please enter your choice:`)
    
     return humanChoice

}

function playRound(humanChoice, computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase()
    let computerChoiceLower = computerChoice.toLowerCase()

    if (humanChoiceLower === computerChoice) {
        return "Its a tie! Lets play another round" 
    }
    else if ( (humanChoiceLower === 'rock' && computerChoiceLower === 'paper')|| (humanChoiceLower === 'paper' && computerChoiceLower === 'scissors') || (humanChoiceLower === 'scissors' && computerChoiceLower === 'rock')) {
        computerScore += 1
        return `You lose this round! Their ${computerChoice} beats your ${humanChoice}`
    } else {
        humanScore += 1
        return `You win this round! Your ${humanChoice} beats their ${computerChoice}`
    }

}

function playGame(){
    let winner
    while (!winner){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log(playRound(humanSelection, computerSelection))
        if (humanScore >= 3){
            winner = 'human'
        } else if (computerScore >= 3) {
            winner = 'computer'
        }
    }
    console.log(`The ${winner} player wins the game!`)
}

console.log(playGame())
