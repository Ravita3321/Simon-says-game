let gameSeq = [];
let userSeq = [];
let btns =["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == fslse){
        console.log("game is started");
        started = true;
        levelUp();
    }
});
//btn flash
function btnFlash(){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }1000);
    function levelUp(){
        level++;
        h2.innerText = `level ${level}`;
        let randIdx = Math.floor(Math.random()*3);
        let randColor = btns[randIdx];
        
        let randBtn = document.querySelector(`${randColor}`)
        console.log(randIdx);
        console.log(randColor);
        console.log(randBtn);
        btnFlash(randBtn);
    }
    function btnPress(){
        console.log(this);
        let btn = this;
        btnFlash;
    }
    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click", btnPress);
    }
    
}