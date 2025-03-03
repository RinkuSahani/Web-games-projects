let userScore=0;
let compScore=0;
let user=document.querySelector("#You");
let comp=document.querySelector("#Comp")
let msg=document.querySelector(".result");
const choices=document.querySelectorAll(".choice");
const option=["rock","paper","scissors"];
function gameReset(){
    userScore=0;
    compScore=0;
    user.innerText=userScore;
    comp.innerText=compScore;
    msg.innerText="Pick Your Move";
    msg.style.backgroundColor="black";
}
let button=document.querySelector("button");
button.addEventListener("click",gameReset);

function gameOut(userWin,userChoice,compChoice){
  if(userWin==true){
    userScore++;
    user.innerText=userScore;
    msg.innerText=`You won! ${userChoice} beats ${compChoice}.`
    msg.style.backgroundColor="green";
  }else{
    compScore++;
    comp.innerText=compScore;
    msg.innerText=`You lost! ${compChoice} beats ${userChoice}.`
    msg.style.backgroundColor="red";
  }
 
}

function gameResult(compChoice,userChoice){
  if(userChoice===compChoice){
    msg.innerText="Game Draw.Try again!"
    msg.style.backgroundColor="blue";
  }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors" ? false:true;
    }else{
        userWin=compChoice==="rock" ? false:true;
    }
    gameOut(userWin,userChoice,compChoice);
  }
}
function genCompChoice(userChoice){
    let randindx=Math.floor(Math.random()*2);
    let compChoice=option[randindx];
    // console.log(compChoice);
    gameResult(compChoice,userChoice);
}
 function playGame(userChoice){
    // console.log(userChoice);
    genCompChoice(userChoice);
 }
for(val of choices ){
    val.addEventListener("click",function(){
        const userChoice=val.getAttribute("id");
        playGame(userChoice);
    })
}