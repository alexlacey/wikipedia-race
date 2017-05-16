var initialTime;

$(document).ready(delayedChange());

function delayedChange() {
  timeoutID = window.setTimeout(updateHTML, 800);
}

function updateHTML() {
  document.getElementById("startTitle").innerHTML = "Start at: " + startName;
  document.getElementById("endTitle").innerHTML = "Try to find: " + endName;
  document.getElementById("startButton").onclick = function(){ startButton(); } ;
}

function startButton() {
  initialTime = Date.now();
  window.open(startURL,'_blank')
  chrome.runtime.sendMessage({greeting: "start the timer"});
  chrome.runtime.sendMessage({greeting: "desired url", content: endURL});
}
