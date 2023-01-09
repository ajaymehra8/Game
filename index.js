 let k=true;
let clicked=false;
let turn="X";

let clickAudio=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3");
let winAudio=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-cheering-crowd-loud-whistle-610.mp3");
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
    [0,4,8,5,12,40],
    [2,4,6,5,15,135]
  ]
  wins.forEach(e=>{
  if(boxTexts[e[0]].innerText=== boxTexts[e[1]].innerText &&   boxTexts[e[2]].innerText=== boxTexts[e[1]].innerText &&  boxTexts[e[0]].innerText!=""){
     document.querySelector(".typed-out").innerText=boxTexts[e[0]].innerText+" is winner.";
      document.querySelector(".main-head").style.display="none";
    
   
     document.querySelector(".turn").innerText="";
   winAudio.load();
   winAudio.play(); 
   document.querySelector(".typed-out").style. animation="typing 20s steps(150, end) forwards";
    document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate( ${e[5]}deg)`;
    clicked=false;
    if(clicked===false){
    setTimeout("reset()",15000);}
  }
  })
}
// Game Logic
let boxes=document.getElementsByClassName("box");
  
Array.from(boxes).forEach(element=>{
 
  let boxText=element.querySelector(".boxText");
  
  element.addEventListener("click",()=>{
    if(k==true){
  turn="0";
    k=false;}
    if(element.innerText===""){
      clickAudio.play();
       document.querySelector(".turn").innerText="Turn: "+ turn;
       if(isGameover!=true){
}
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
reset();
                        })
function reset(){
    let boxTexts=document.querySelectorAll(".boxText");
Array.from(boxTexts).forEach(element=>{
  element.innerText="";
k=true;
   document.querySelector(".turn").innerText="Turn: X";
  document.querySelector(".typed-out").innerText="";
  document.querySelector(".main-head").style.display="inherit";
  clicked=true;
  winAudio.pause();
    document.querySelector(".typed-out").style. animation="none";

});
}
