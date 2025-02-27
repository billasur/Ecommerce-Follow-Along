function getComputerChoice(){
    const num = Math.random();
    if(num>0 && num<.33){
        return "rock";
    }else if(num>=.33 &&num<.66){
        return "paper";
    }else{
        return "scissors"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Please write a option Rock, Paper or Scissor");
    if(humanChoice.toLowerCase() == "rock"){
        return "rock";
    }else if(humanChoice.toLowerCase() == "paper"){
        return "paper";
    }else{
        return "scissors"
    }
}

function playRound(computerChoice,humanChoice) {
    let winner ;
    if(humanChoice == computerChoice){
        winner = "No one";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")){
        winner = "Human";
    }else{
        winner= "Computer";
    }
    console.log(`Human chose ${humanChoice} and computer chose ${computerChoice} and the winner is ${winner}`)
    return `${winner} wins`;
    
}

for(let i = 0; i<5; i++){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    alert(playRound(computerChoice,humanChoice));

}




