const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let playerChoice = null;
const symbolRock = "rock", symbolPaper = "paper", symbolScissors = "scissors";

rockButton.addEventListener("click", ()=>{
    playerChoice = symbolRock;
});

paperButton.addEventListener("click", ()=>{
    playerChoice = symbolPaper;
});

scissorsButton.addEventListener("click", ()=>{
    playerChoice = symbolScissors;
});

function getComputerChoice()
{
    const choices = [symbolRock, symbolPaper, symbolScissors];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner()
{
    
}


