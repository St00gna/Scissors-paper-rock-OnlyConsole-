const variants = ["scissors", "paper", "rock"];

function game(playerChoice) {
    const random = Math.floor(Math.random() * 3); 
    const computerChoice = variants[random];
    console.log (computerChoice);
    switch (playerChoice) {
        case "scissors": 
        switch (computerChoice) {
            case "scissors":
                return "Draw";
            case "rock":
                return "Computer win"
            case "paper": 
                return "Player win"   
        }
        case "paper": 
        switch (computerChoice) {
            case "scissors":
                return "Computer win";
            case "rock":
                return "Player win"
            case "paper": 
                return "Draw"   
        }
        case "rock": 
        switch (computerChoice) {
            case "scissors":
                return "Draw";
            case "rock":
                return "Computer win"
            case "paper": 
                return "Player win"   
        }
        default: 
        return "Wrong choice"
    }
}