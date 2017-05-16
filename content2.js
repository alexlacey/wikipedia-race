var tabURL = window.location.href;
var time;

chrome.runtime.sendMessage({greeting: "current url", content: tabURL}, function(response) {
  if (tabURL == "https://tranquil-taiga-73034.herokuapp.com/index.html") {
    document.getElementById("time").innerHTML = 'Your time was ' + response.farewell + ".";
  }
  else {
    time = response.farewell;
    if (time) {
      window.open('https://tranquil-taiga-73034.herokuapp.com/', '_blank');
    }
  }
});
