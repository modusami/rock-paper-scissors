const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const scoreStatus = document.getElementById("status");
const playAgain = document.getElementById("play-again");
const optionSection = document.getElementById("options");
let playerChoice = null;
let computerChoice = null;
let playerIntScore = 0;
let computerIntScore = 0;
const symbolRock = "rock", symbolPaper = "paper", symbolScissors = "scissors";

rockButton.addEventListener("click", ()=>{
    if(computerIntScore !== 5 && playerIntScore !== 5)
    {
        playerChoice = symbolRock;
        playRound();
        checkScore();
    }
    
});

paperButton.addEventListener("click", ()=>{
    if(computerIntScore !== 5 && playerIntScore !== 5)
    {
        playerChoice = symbolPaper;
        playRound();
        checkScore();
    }
    
});

scissorsButton.addEventListener("click", ()=>{
    if(computerIntScore !== 5 && playerIntScore !== 5)
    {
        playerChoice = symbolScissors;
        playRound();
        checkScore();
    }
    
});

playAgain.onclick = () => {resetGame();}



function resetGame()
{
    playerChoice = null;
    computerChoice = null;
    playerIntScore = 0;
    computerIntScore = 0;
    scoreStatus.style.display = "none";
    playAgain.style.display = "none";
    optionSection.style.display = "flex";
    computerScore.innerText = `${computerIntScore}`;
    playerScore.innerText = `${playerIntScore}`;
}

function getComputerChoice()
{
    const choices = [symbolRock, symbolPaper, symbolScissors];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound()
{
    computerChoice = getComputerChoice();

    switch(playerChoice)
    {
        case symbolRock:
            switch(computerChoice)
            {
                case symbolRock:
                    handleTie();
                    break;
                case symbolPaper:
                    handleLoss();
                    break;
                case symbolScissors:
                    handleWin();
            }   
        break;

        case symbolPaper:
            switch(computerChoice)
            {
                case symbolRock:
                    handleWin();
                    break;
                case symbolPaper:
                    handleTie();
                    break;
                case symbolScissors:
                    handleLoss();
            }   
        break;

        case symbolScissors:
            switch(computerChoice)
            {
                case symbolRock:
                    handleLoss();
                    break;
                case symbolPaper:
                    handleWin();
                    break;
                case symbolScissors:
                    handleTie();
            }   
        break;
    }

    updateScore();
}

function handleTie()
{
    scoreStatus.innerText = "tie!";
    scoreStatus.style.display = "block";
}

function handleLoss()
{
    scoreStatus.innerText = `lost! computer chose: ${computerChoice}`;
    scoreStatus.style.display = "block";
    computerIntScore += 1;
}

function handleWin()
{
    scoreStatus.innerText = `won! computer chose: ${computerChoice}`;
    scoreStatus.style.display = "block";
    playerIntScore += 1;
}

function updateScore()
{
    computerScore.innerText = `${computerIntScore}`;
    playerScore.innerText = `${playerIntScore}`;
}

function checkScore()
{
    let flag = false;
    if(computerIntScore === 5)
    {
        scoreStatus.innerText = "game over. computer won!";
        flag = true;
        
    }
    else if(playerIntScore === 5)
    {
        scoreStatus.innerText = "game over. player won!";
        flag = true;
    }

    if(flag)
    {
        playAgain.style.display = "block";
        optionSection.style.display = "none";
    }

    
}

