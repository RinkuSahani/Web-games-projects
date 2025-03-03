let started=false;
let level=0;
let userInput=[];
let gameInput=[];
h3=document.querySelector("h3");
const color=["yellow","blue","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started.");
        started=true;
        levelUp();
    }

    function sysflash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
        btn.classList.remove("flash");
        },250)
        
    }
    function userBtn(btn){
        btn.classList.add("black");
        setTimeout(function(){
            btn.classList.remove("black");
        },250);
    }

    function levelUp(){
        userInput=[];
        level++;
        h3.innerText=`Level: ${level}`;
        let randomindx=Math.floor(Math.random()*3);
        let randomColor=color[randomindx];
        let btn=document.querySelector(`.${randomColor}`);
        gameInput.push(randomColor);
        console.log(randomindx);
        console.log(randomColor);
        console.dir(btn);
        sysflash(btn);
    }
    function userPress(){
        console.log(this);
        let btn=this;
        userBtn(btn);
        let userColor=btn.getAttribute("id");
        userInput.push(userColor);
        resultSeq(userInput.length-1);
    }

    let allbtns=document.querySelectorAll(".btns");
    for(btn of allbtns){
        btn.addEventListener("click",userPress);
    }
  function resultSeq(indx){
    // console.log("current level:",level);
   
    if(userInput[indx]===gameInput[indx]){
       if(userInput.length===gameInput.length){
       setTimeout(function(){
        levelUp();
       },1000)
        }
    }else{
        h3.innerHTML=`1.Game Over!<br>2.Your Level was:${level}<br>3.Press any key to start again.`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout((function(){
            body.style.backgroundColor="white";
        }),150)
        reset();
    }

  }
  function reset(){
    started=false;
    userInput=[];
    gameInput=[];
    level=0;
  }
  
})