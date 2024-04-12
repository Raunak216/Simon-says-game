let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"]
let started=false;
let level=0;

h2=document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started==false){    
    started = true;
    levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random
    let randidx=Math.floor(Math.random()*4);
    let randcol=btns[randidx];
    let randbtn=document.querySelector(`.${randcol}`);
    flash(randbtn);
    gameseq.push(randcol);
}
function btnpress(){
    let btn=this;
    userflash(btn);
    btncol=btn.getAttribute("id")
    userseq.push(btncol);
    checkans(userseq.length-1);

    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function checkans(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }}
    else{
        h2.innerHTML=` Game Over! score : ${level} Press any key to start`;
        gameEnd();
        resetgame();
    }
}
function resetgame(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function gameEnd(){
    document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);       
}


function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}