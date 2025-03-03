let boxes=document.querySelectorAll(".boxes");
let h3=document.querySelector("h3");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".new-game");
let turnO=true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
const resetGame=()=>{
    turnO=true;
    h3.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    console.log("done");
};

function showWinner(val0){
    h3.classList.add("result");
    h3.innerText=`Congratulations! '${val0}' you are the winner.`
    for(let box of boxes){
       box.disabled=true;
    }
   
}
function checkWinner(){
    for(let Pattern of winPatterns){
        let val0=boxes[Pattern[0]].innerText;
        let val1=boxes[Pattern[1]].innerText;
        let val2=boxes[Pattern[2]].innerText; 
        
        if(val0!=""&& val1!=""&&val2!=""){
            if(val0===val1 && val1===val2){
                console.log("Winner:",val0)
                showWinner(val0);
                h3.classList.remove("hide");
            }
        }
     
    }
}

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.classList.add("child");
            box.disabled=true;
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("child");
            box.disabled=true;
            turnO=true;
        }
        checkWinner();
    })
  
};

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);