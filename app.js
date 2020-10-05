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
     const hands = document.querySelectorAll('.hands img');
 
     hands.forEach(hand =>{
         hand.addEventListener('animationend', function(){
             this.style.animation = '';
         })
     })
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
             
             setTimeout(() => {
                 //create comparison option to see who wins pass to compareHands and call compareHands
                //do action of shake and update at end
                compareHands(this.textContent, computerChoice);
             
                //change image based on what user picks and computer picks==Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                //correct hand assets!!!!!!
             }, 2000);

             //Animation
             playerHand.style.animation = "shakePlayer 2s ease";
             computerHand.style.animation = "shakeComputer 2s ease";
         });
     });

     //update score
     const updateScore = () =>{
         const playerScore = document.querySelector('.player-score p');
         const ComputerScore = document.querySelector('.computer-score p');
         playerScore.textContent = pScore;
         ComputerScore.textContent = cScore;
     }

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
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
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



