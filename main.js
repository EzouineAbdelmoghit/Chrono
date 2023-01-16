var box=document.querySelector(".timer-box")
var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")
let h=0;
let m=0;
let s=0;
let ms=0;
var stoper
var time
start.addEventListener("click",function(){

    function Timer() {
        ms=parseInt(ms)
        s=parseInt(s)
        m=parseInt(m)
        h=parseInt(h)
        if(ms<100)
            if(ms<9)
                ms="00"+ ++ms
            else
                ms="0"+ ++ms
        else{
            ms=0
            s++
        }
        if(s==60){
            s=0
            m++
        }   
        if(m==60){    
            m=0
            h++
        }
        if(m<10)
            m="0"+ m
        if(s<10)
            s="0"+ s
        if(h<10)
            h="0"+ h
        box.innerHTML=`${h}:${m}:${s}:${ms}`
    }
        time=setInterval(Timer,10)
        start.disabled=true
}
)

stop.addEventListener("click",function(){
    start.disabled=false
    clearInterval(time)
})
reset.addEventListener("click",function(){
    clearInterval(time)
    start.disabled=false
    box.innerHTML="00:00:00:000"
    h=0;
    m=0;
    s=0;
    ms=0;
})