// chrome.tabs.getSelected(null, function(tab) {
//     var taby = tab;
//     var tabUrl = tab.url;

//     console.log("hey there");
//     console.log(taby);
//     console.log(tabUrl);
// });

var startID = "";
var endID = "";
var startName = "";
var endName = "";
var startURL = "";
var endURL = "";

$(document).ready(function() {
  if (startID == "") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1", true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200)  {
        var resp = JSON.parse(xhr.responseText);
        startID = resp.query.random[0].id;
        startName = resp.query.random[0].title;
        var startNameArr = startName.split([' ']);
        var startNameURL = "";
        for (var i = 0; i < startNameArr.length; i++) {
          startNameURL = startNameURL + startNameArr[i] + "_";
        }
        startNameURL = startNameURL.substring(0, startNameURL.length - 1);
        startURL = "https://en.wikipedia.org/wiki/" + startNameURL;
        console.log(startID);
        console.log(startName);
        console.log(startURL);
      }
    }
  }
});

/* This stuff below was from StackOverflow */
// function clickHandler(e) {
//     chrome.tabs.update({url: "https://example.com"});
//     window.close(); // Note: window.close(), not this.close()
// };
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('click-me').addEventListener('click', clickHandler);
// });
