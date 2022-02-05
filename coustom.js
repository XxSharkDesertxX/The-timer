const thetimer=document.querySelector(".timer");
const testarea=document.querySelector("#textarea");
const originsText=document.querySelector(".dark").innerHTML;;
const testWrapper=document.querySelector(".testArea");

var timer=[0,0,0,0];
var timerRunning=false;
var offsetIntervals;

function ledingZero(time) {
    if(time<=9){
        time="0"+time;
    }
    return time;
}


function runtimer() {
    let coureentTime=ledingZero(timer[0])+":"+ledingZero(timer[1])+":"+ledingZero(timer[2]);
    thetimer.innerHTML=coureentTime;
    
    timer[3]++;
    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
    
}

function spellCheack() {
    let textUser=testarea.value;
    let originTextMatch=originsText.substring(0,textUser.length);
    if(textUser == originsText){
        testWrapper.style.backgroundColor="green";
        clearInterval(offsetIntervals);
    }else{
        if(textUser==originTextMatch){
            testWrapper.style.backgroundColor="yellow";
        }else{  
            testWrapper.style.backgroundColor="red";
        }
    }
}

function start() {
    let textEnterdLenght=testarea.value.length;
    if(textEnterdLenght == 0 && !timerRunning){
        timerRunning=true;
        offsetIntervals=setInterval(runtimer,10);
    }
}



testarea.addEventListener("keypress",start);
testarea.addEventListener("keyup",spellCheack)