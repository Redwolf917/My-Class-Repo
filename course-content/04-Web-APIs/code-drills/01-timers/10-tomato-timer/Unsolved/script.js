const statusSpan = document.querySelector("#status");
const statusToggle = document.querySelector("#status-toggle");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const workMinutesInput = document.querySelector("#work-minutes");
const restMinutesInput = document.querySelector("#rest-minutes");

let totalSeconds = 0;
let secondsElapsed = 0;
let interval;

function startTimer() {
  // Write code to start the timer here
}

playButton.addEventListener("click", startTimer);
