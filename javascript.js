




function getComputerChoice() 
{
    const list = ["rock", "paper", "scissor"];

   
    const chose =  Math.floor(Math.random() * list.length)
    
    return list[chose];
   
  
}

function playGame(playerSelection, computerSelection)
{
   
   const caseInsensitive = playerSelection.toLowerCase();

   
 
        if(caseInsensitive ==="rock"&& computerSelection === "rock") 
        {

            return "Tie";
        }
        else if(caseInsensitive =="rock" && computerSelection === "paper") 
        {
            return "Computer won this round";
        }
        else if(caseInsensitive ==="rock" && computerSelection === "scissor") 
        {
            return "You won this round";
        }
        else if(caseInsensitive ==="paper"&& computerSelection === "rock") 
        {
            return "You won this round";
        }
        else if(caseInsensitive =="paper" && computerSelection === "paper") 
        {
            return "Tie";
        }
        else if(caseInsensitive ==="paper" && computerSelection === "scissor") 
        {
            return "Computer won this round";
        }
        else if(caseInsensitive ==="scissor"&& computerSelection === "rock") 
        {
            return "Computer won this round";
        }
        else if(caseInsensitive =="scissor" && computerSelection === "paper") 
        {
            return "You won this round!";
        }
        else if(caseInsensitive ==="scissor" && computerSelection === "scissor") 
        {
            return "Tie";
        }
   
}


// function Game(playerChoice, ComputerChoice) 
function Game() 
{
alert("Let's Play A Game!");
    
    for(i = 0; i <= 10; i++) 
    {
    const PlayerChoice = prompt("Choose: Rock, Paper, or Scissor?!")
    const playerChoice = PlayerChoice.toLowerCase();
    const ComputerChoice = getComputerChoice();
    let i = 0;
        
        if(playerChoice == "rock" ||playerChoice == "scissor" || playerChoice == "paper") 
        {

                const game = playGame(playerChoice, ComputerChoice);
                i++;
                console.log(game);

        }
        else 
        {
            alert("Not a valid answer");
            
        }

    }
}




//const computerChoice = getComputerChoice();
// playerChoice = prompt("Choose: Rock, Paper, or Scissor?!").toLowerCase();

// for(let i = 0; i <=10; i++)
// {
//     playerChoice.toLowerCase();
//     if(playerChoice == "rock" ||playerChoice == "scissor" || playerChoice == "paper") 
//     {
//         const game = playGame(playerChoice, computerChoice);
    
//         console.log(game);
       
      
//     }
//     else 
//     {
//       alert("Not a valid answer");
//       playerChoice = prompt("Choose: Rock, Paper, or Scissor?!");
//       const game = playGame(playerChoice, computerChoice);
//       console.log(game);
     
     
//     }
// }

    


 
    

