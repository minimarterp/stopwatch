var tens = 00;
var seconds = 00;
var minute = 00;
var isSart = true;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('second');
var appendMinute = document.getElementById('minute');
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
var btnReset = document.getElementById('reset');
var interval;
var colorChange = document.getElementById("color");

function startTimer() {

    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 60) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        minute++;
        appendMinute.innerHTML = "0" + minute;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
}
btnStart.onclick = function () {
    if (isSart) {
        isSart = false;
        interval = setInterval(startTimer, 1000);
    }
}
btnStop.onclick = function () {
    isSart = true;
    clearInterval(interval);
}
btnReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00"
    minute = "00";
    appendMinute.innerHTML = minute;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

}
colorChange.addEventListener('input', () => {
   document.body.style.background = "#f8a711";
    var color = colorChange.value;
    document.body.style.background = color;
})