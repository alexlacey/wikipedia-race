$(document).ready(delayedChange());

function delayedChange() {
  timeoutID = window.setTimeout(updateHTML, 200);
}

function updateHTML() {
  console.log("here");
  document.getElementById("startTitle").innerHTML = startName;
  document.getElementById("endTitle").innerHTML = endName;
  document.getElementById("startButton").setAttribute('action', startURL);
}