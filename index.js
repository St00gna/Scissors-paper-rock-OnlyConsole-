const variants = ["scissors", "paper", "rock"];

function game(playerChoice) {
    const random = Math.floor(Math.random() * 3); 
    const computerChoice = variants[random];
    console.log (computerChoice);
    if (playerChoice === computerChoice ) {
        return "Draw";
    } else if ((playerChoice === "scissors" && computerChoice === "paper") || 
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "rock" && computerChoice === "scissors")) {
        return "Player won";
    } else if ((computerChoice === "scissors" && playerChoice === "paper") || 
    (computerChoice === "paper" && playerChoice === "rock") || 
    (computerChoice === "rock" && playerChoice === "scissors")) {
        return "Computer won";
    }
}