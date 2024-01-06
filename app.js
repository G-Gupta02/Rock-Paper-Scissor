const userChoiceBtn=document.querySelectorAll(".choice");

let userScore=0;
let compScore=0;

let userDispScore=document.querySelector(".user-score");
let compDispScore=document.querySelector(".comp-score");
const genCompChoice=()=>{
    let icons=["rock", "paper", "scissor"];
    let compIndex=Math.floor(Math.random()*3);
    return icons[compIndex];
}
userChoiceBtn.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        const compChoice=genCompChoice();
        if(userChoice===compChoice){
            console.log("draw");
            userScore++;
        }
        else if(userChoice==="rock" && compChoice==="scissor"){
            console.log("user won");
            userScore++;
        }
        else if(userChoice==="paper" && compChoice==="rock"){
            console.log("user won");
            userScore++;
        }
        else if(userChoice==="scissor" && compChoice==="paper"){
            console.log("user won");
            userScore++;
        }
        else{
            console.log("computer won");
            compScore++;
        }
        console.log("comp score " + compScore);
        console.log("user score " + userScore);
        userDispScore.innerText = userScore;
        compDispScore.innerText = compScore;
    })
});

let resetBtn=document.querySelector(".resetBtn");
const resetGame=()=>{
    compScore=0;
    userScore=0;
    userDispScore.innerText = 0;
    compDispScore.innerText = 0;
}

resetBtn.addEventListener("click", resetGame);
