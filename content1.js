var initialTime;

$(document).ready(delayedChange());

function delayedChange() {
  timeoutID = window.setTimeout(updateHTML, 800);
}

function updateHTML() {
  console.log("here");
  document.getElementById("startTitle").innerHTML = "Start at: " + startName;
  document.getElementById("endTitle").innerHTML = "Try to find: " + endName;
  document.getElementById("startButton").onclick = function(){ startButton(); } ;
  document.getElementById("endButton").onclick = function(){ endButton(); } ;
}

function startButton() {
  initialTime = Date.now();
  console.log(initialTime);
  window.open(startURL,'_blank')
}

function endButton() {
  checkTime();
}

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  console.log(timeDifference);
  var formatted = convertTime(timeDifference);
  console.log(formatted);
  document.getElementsByTagName("h5").innerHTML = '' + formatted;
}

function convertTime(milliseconds) {
  var totalSeconds = Math.floor(milliseconds/1000);
  var minutes = leftPad(Math.floor(totalSeconds/60),2); 
  var seconds = leftPad(totalSeconds - minutes * 60,2); 
  where: function leftPad (aNumber, aLength) { 
    if (aNumber.toString().length >= aLength) {
      return aNumber; 
    }
    return (Math.pow(10, aLength) + Math.floor(aNumber)).toString().substring(1); 
  }
}

// it must send a message to the background to start the timer
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
