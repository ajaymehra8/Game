let turn="X";
let isGameover=false;
const changeTurn =() =>{
  return turn==="X"?"0" :"X"
}
// Function to check winner
const checkWin =()=>{
let boxTexts =document.getElementsByClassName("boxText");
  let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
  ]
  wins.forEach(e=>{
  if(boxTexts[e[0]].innerText=== boxTexts[e[1]].innerText &&   boxTexts[e[2]].innerText=== boxTexts[e[1]].innerText &&  boxTexts[e[0]].innerText!=""){
   isGameover=true; document.querySelector(".win").innerText=boxTexts[e[0]].innerText+" won.";
 document.querySelector(".line").style.width="20vw";  
    document.querySelector(".line").style.transform='translate(($e[3])vw,($e[4])vw) rotate( ($e[5])deg)';
  }
  })
}
// Game Logic
let boxes=document.getElementsByClassName("box");
  
Array.from(boxes).forEach(element=>{
  
  let boxText=element.querySelector(".boxText");
  
  element.addEventListener("click",()=>{
  
    if(element.innerText===""){
       if(isGameover!=true){
 document.querySelector(".turn").innerText="Turn: "+ turn;}
       turn=changeTurn();
     
    boxText.innerText=turn;
     
// Set the bac;
    
   
    checkWin();
    }
  }   )
})
// resett
let resett=document.querySelector(".resett");
resett.addEventListener("click",()=>{
  let boxTexts=document.querySelectorAll(".boxText");
Array.from(boxTexts).forEach(element=>{
  element.innerText="";
});
                        })
