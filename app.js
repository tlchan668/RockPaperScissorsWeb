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
        });
    };
//call the innder functions
startGame();
//updateScore();
};

//start the game function
game();