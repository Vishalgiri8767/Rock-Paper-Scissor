const choices = document.querySelectorAll(".images");
const msg = document.querySelector("#msg");
const round = document.querySelector("#roundCount");
const drawCount = document.querySelector("#drawCount");


const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

let uScore = 0;
let cScore = 0;
let totalRound = 0;
let drawGames =0;

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        totalRound++;

        playGame(userChoice);
        console.log("Count ",totalRound)
        round.innerText = totalRound;
        drawCount.innerHTML = drawGames;
    });
});

const total = (totalRound) => {
    round.innerText = totalRound;
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random()*3);
    return options[rndIdx];
    
}
const draw = () =>{
    msg.innerText ="Game was draw. Play again.";
    msg.style.backgroundColor="#343332";
    drawGames++;
    
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        uScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore.innerText = uScore;
        
    }else{
        msg.innerText = `You lose. ${compChoice} beats yor ${userChoice}`;
        msg.style.backgroundColor="#red";
        cScore++;
        compScore.innerText = cScore;
    }
}
const playGame = (userChoice) =>{
    
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){     //if userChoice is rock then compChoice will paper or scissors.
            //paper or scissors
            userWin = compChoice==="paper" ? false :true;
        } else if(userChoice==="paper"){
            // rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock or paper
            userWin =compChoice === "paper" ? true: false;
        };
        showWinner(userWin, userChoice, compChoice);

        
    }

};