const game =()=>{
    let pScore = 0;
    let cScore = 0;

    //start game function to fadein an
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

 //Play  Match
 const playMatch = () => {
     const options = document.querySelectorAll('.options button');
     const playerHand =document.querySelector(".player-hand");
     const computerHand = document.querySelector(".computer-hand");
     //Computer options
     //randomly generated # between 0, 1, 2 and associate to r,p,s
     //9/11/20
     const computerOptions= ['rock', 'paper', 'scissors'];

     //get button clicked
     options.forEach(option=>{
         option.addEventListener("click", function(){
             console.log(this);
             //computer choice 
             const computerNumber = Math.floor(Math.random() * 3);
             const computerChoice = computerOptions[computerNumber];
             console.log("Computer choice: " + computerChoice);
             //create comparison option to see who wins pass to compareHands and call compareHands
             
             compareHands(this.textContent, computerChoice);
             
             //change image based on what user picks and computer picks==Update Images
             playerHand.src = `./assets/${this.textContent}.png`;
             computerHand.src = `./assets/${computerChoice}.png`;
             //correct hand assets!!!!!!!

             
         });
     });

     const compareHands = (playerChoice, computerChoice) =>{
        //update Text
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
     }
     
     
 } 
//call the innder functions
startGame();
playMatch();
//updateScore();
};

//start the game function
game();



