var initialTime;
var endURL;


chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://immense-stream-44778.herokuapp.com/";
    chrome.tabs.create({ url: newURL });
});

// then it will automatically run the content1 script because of the url

// it must listen for the message from content1 telling it to start the timer
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "start the timer") {
      initialTime = Date.now();
    } 
    else if (request.greeting == "current url") {
      // sendResponse({farewell: request.content + "!!!!!" + endURL});
      if (request.content == endURL || request.content == "https://tranquil-taiga-73034.herokuapp.com/index.html") {
        sendResponse({farewell: checkTime()});
      }
    }
    else if (request.greeting == "desired url") {
      endURL = request.content;
    }

  });

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
