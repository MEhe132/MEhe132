let boxes = document.querySelectorAll(".box"); 
console.dir(boxes);  
let resetButton = document.querySelector(".resetButton"); 
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg"); 
let newGame = document.querySelector("#newGame"); 
let hide = document.querySelector(".hide"); 
console.log(newGame , resetButton);

let turnO = true; // playerO

// now winning patterns in 2D arrays

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 

boxes.forEach((m)=>{
    m.addEventListener("click",()=>{
        console.log("Clicked");
        if(turnO){
            m.innerHTML="<b>O</b>";
            // m.innerText = "O";
        turnO= false; 
        }
        else{
            m.innerHTML="<b>X</b>";
            // m.innerText = "X";
            turnO= true; 
        }
        m.disabled =true; 
        checkWinners();
    }
)
    }
);

    //function

    const resetGame = ()=>{
        turnO = true; 
        enableBoxes();
        
        msgContainer.classList.add("hide");

    }

    const disableBoxes = ()=>{
        for(let box of boxes){
            box.disabled = true; 
        }
    }
        const enableBoxes = ()=>{
            for(let box of boxes){
                box.disabled = false; 
                box.innerHTML= ""; //eita niyejamelay porsilam 
            }

    }
    const showWinner = (winner)=>{
        msgContainer.classList.remove("hide"); 
        msg.innerHTML= `<ul>🐸🐸CONGRATULATIONS DUDE 🐸🐸,Winner is ${winner}</ul>`;
        disableBoxes(); 

    }

    const checkWinners= ()=>{
        for(let patterns of winPatterns){
            // console.log(patterns);
            // console.log(patterns[0],patterns[1],patterns[2]);
            // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
            // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);

            let pos1 = boxes[patterns[0]].innerText; 
            let pos2 = boxes[patterns[1]].innerText; 
            let pos3 =  boxes[patterns[2]].innerText; 

            if(pos1 != "" && pos2 !="" && pos3 != ""){
                if(pos1==pos2 && pos2==pos3){
                    console.log("Winner ",pos1); 
                    showWinner(pos1); 
                }
            }
        }
    }

newGame.addEventListener("click", resetGame); 
resetButton.addEventListener("click", resetGame); 