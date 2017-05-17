var initialTime;
var endURL;
var path = [];

// Open the start page when user clicks on browser action
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://immense-stream-44778.herokuapp.com/";
    chrome.tabs.create({ url: newURL });
});

// Start the timer, check to see if the user has finished the race, or set the end URL based on messages
// from the content script or from popup.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "start the timer") {
      initialTime = Date.now();
    } 
    else if (request.greeting == "current url") {
      path.push(request.content);
      if (request.content == endURL || request.content == "https://tranquil-taiga-73034.herokuapp.com/index.html") {
        sendResponse({farewell: checkTime(), userPath: path});
        if (request.content == "https://tranquil-taiga-73034.herokuapp.com/index.html") {
          path = [];
        }
      }
    }
    else if (request.greeting == "desired url") {
      endURL = request.content;
    }

  });

// The following three functions are code to find the time elapsed

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  return formatted;
}

function convertTime(milliseconds) {
  var totalSeconds = Math.floor(milliseconds/1000);
  var minutes = leftPad(Math.floor(totalSeconds/60),2); 
  var seconds = leftPad(totalSeconds - minutes * 60,2); 
  var milli = leftPad(milliseconds - totalSeconds * 1000, 3);
  return minutes + ":" + seconds + ":" + milli;
}

function leftPad (aNumber, aLength) { 
  if (aNumber.toString().length >= aLength) {
    return aNumber; 
  }
  return (Math.pow(10, aLength) + Math.floor(aNumber)).toString().substring(1); 
}
