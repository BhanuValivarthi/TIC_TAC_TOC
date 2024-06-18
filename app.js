let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let container = document.querySelector(".class-container");
let newbtn =   document.querySelector("#new-btn");
let msg   = document.querySelector("#msg");


let turno = true;

let winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame = () =>{
  turno = false;
  enableBoxes();
  container.classList.add("hide");
  
}

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      console.log("box is clicked");
      if(turno){
        box.innerText = "O";
        box.classList.add("coloro");
        turno = false;
      }
      else{
        box.innerText = "X";
        box.classList.add("colorx")
        turno = true;
      }
      box.disabled = true;
      checkWinner();
   });
});
const disableBoxes = () =>{
  for(box of boxes){
    box.disabled = true;
  }
} 
const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const showwinner = (winner) =>{
  msg.innerText = `congratulations! winner is ${winner} `;
  container.classList.remove("hide");
  disableBoxes();
}

const checkWinner = ()=>{
     for(pattern of winPatterns){
      // console.log(pattern[0],pattern[1],pattern[2]);
      // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos3Val && pos2Val === pos3Val){
          console.log("winner",pos1Val);
          showwinner(pos1Val);
        }
      }
     }
};

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);

