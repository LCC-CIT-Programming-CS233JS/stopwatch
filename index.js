/*
    Create 3 global variables, isRunning, timer and timerTime.
    Initialize them to false, null and 0 respectively.
*/

let isRunning = false;
let timer = null;
let timerTime = 0;

function init()
{
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button

    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let resetBtn = document.getElementById("reset");

    // Add an onclick handler to each of the buttons
    // Use the functions startTimer, stopTimer and resetTimer 

    startBtn.onclick = startTimer;
    stopBtn.onclick = stopTimer;
    resetBtn.onclick = resetTimer;

}


function startTimer() {
    //console.log("start");
    // if the timer is NOT running, start it
    // call the function incrementTimer every second
    // save the timer in a the timer variable
    if (isRunning == false) {
        isRunning = true;
        timer = setInterval (incrementTimer, 1000);
    }
    

}

function incrementTimer() {
    console.log("increment");
    // increment the timerTime
    // calculate the number of minutes and seconds

    timerTime++;
    let minutes = Math.floor(timerTime / 60);
    let seconds = Math.floor(timerTime % 60);

    // write the minutes and seconds to the elements on the page
    // use the function pad to make sure there's a leading 0 if necessary

    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);
}

function pad(number) {
    // add a leading 0 if the number is < 10
    if (number < 10)
        return "0" + number;

    else   
        return number;
}

function stopTimer() {
    //console.log("stop");
    // if the timer is running, stop it
    if (isRunning == true) {
        isRunning = false;
        clearInterval(timer);
    }

    
}

function resetTimer() {
    console.log("reset");
    // stop the timer
    stopTimer();
    // set the timerTime back to 0
    timerTime = 0;
    // write 00 to the elements on the page for minutes and seconds
    document.getElementById("minutes").innerHTML = pad(0);
    document.getElementById("seconds").innerHTML = pad(0);

}

// When the page has finished loading, call the function init
window.onload = init;