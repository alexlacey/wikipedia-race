// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   alert("here!!!");
// });
//
// $( document ).ready(function() {
//   console.log("yeh");
// });
//
//     chrome.tabs.getSelected(null, function(tab) {
//         var taby = tab;
//         var tabUrl = tab.url;
//
//         console.log("hey there");
//         console.log(taby);
//         console.log(tabUrl);
//     });
//
// console.log("hey there!!!!");


// background.js (from https://robots.thoughtbot.com/how-to-make-a-chrome-extension)

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });


// found on http://stackoverflow.com/questions/3188384/google-chrome-extensions-open-new-tab-when-clicking-a-toolbar-icon


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
    //   start_timer(); // function to start the timer
      initialTime = Date.now();
    } 
    // else if (request.greeting == "end the timer") {
    //   sendResponse({farewell: checkTime()});
    // }
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
  console.log(timeDifference);
  var formatted = convertTime(timeDifference);
  console.log(formatted);
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

// function start_timer() {
//   console.log("function is executed")
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "background received the message"}, function(response) {
//       console.log("test message sent");
//     });
//   });
// }
