let [second , min, hours ] = [0,0,0];
let dipalytime = document.getElementById('displaytime');
let timer  = null;

function stopwatch() {
    second++;
    if (second == 60) {
        second = 0
        min++;
    if(min == 60) {
        min=0;
        hours++;
    }
    }
    dipalytime.innerHTML = hours + ":" + min + ":" + second;
};

function watchstart() {
     if(timer!==null){
        clearInterval(timer);
     }
    timer = setInterval(stopwatch,1000)
    console.log("click")
};

function watchstop() {
    clearInterval(timer);
}
function watchreset() {
 clearInterval(timer);
   hours = 0;
   min = 0;
   second = 0;

    dipalytime.innerHTML = hours + ":" + min + ":" + second
}