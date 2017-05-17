var tabURL = window.location.href;
var time;


// Sends and receives messages with background.js
chrome.runtime.sendMessage({greeting: "current url", content: tabURL}, function(response) {
  // If the user finds the destination page, they will be reloaded to the end page hosted at
  // https://tranquil-taiga-73034.herokuapp.com. The following if statement contains code
  // that returns the time elapsed and the path taken to the user
  if (tabURL == "https://tranquil-taiga-73034.herokuapp.com/index.html") {
    var path = response.userPath;
    path.splice(-1, 1);
    var formattedPath = "";
    path.forEach(function(currentValue, index, array) {
      var url = currentValue.split("wiki/");
      var splitTitle = url[1].toString().split("_");
      var title = "";
      splitTitle.forEach(function(currentValue, index, array) {
        title = title + currentValue + " ";
      });
      title = title.substring(0, title.length - 1);
      formattedPath = formattedPath + '"' + title + '" -> ';
    });
    formattedPath = formattedPath.substring(0, formattedPath.length - 4);
    document.getElementById("path").innerHTML = 'Your path was ' + formattedPath + ".";
    document.getElementById("time").innerHTML = 'Your time was ' + response.farewell + ". You completed the race in " + path.length + " clicks.";
  }
  else {
    time = response.farewell;
    // If time is valid, this means that the user found the destination page. 
    if (time) {
      window.open('https://tranquil-taiga-73034.herokuapp.com/', '_blank');
    }
  }
});
