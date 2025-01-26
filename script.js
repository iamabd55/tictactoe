let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset-btn");
let newGamebtn=document.getElementById("new-btn");
let mainGame=document.querySelector(".mainGame");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let btnCount=0;
let turnO=true;
const winningPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let temp=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        btnCount++;
        box.disabled=true;

        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is: ${winner}`;
    mainGame.classList.add("hide");
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const Draw=()=>{
    msg.innerText=`Game Drawed`;
    mainGame.classList.add("hide");
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame=()=>{
    btnCount=0;
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
    btnCount=0;
    mainGame.classList.remove("hide");
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msgContainer.classList.add("hide");
}
newGamebtn.addEventListener("click",enableBoxes);
resetBtn.addEventListener("click",resetGame);
const checkWinner=()=>{
    for(let pattern of winningPos){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
            if(btnCount==9){
                Draw();
            }


        }
    }
}
