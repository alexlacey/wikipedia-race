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
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=2", true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200)  {
        var resp = JSON.parse(xhr.responseText);
        startID = resp.query.random[0].id;
        endID = resp.query.random[1].id;
        startName = resp.query.random[0].title;
        endName = resp.query.random[1].title;
        var startNameArr = startName.split([' ']);
        var endNameArr = endName.split([' ']);
        var startNameURL = "";
        var endNameURL = "";
        for (var i = 0; i < startNameArr.length; i++) {
          startNameURL = startNameURL + startNameArr[i] + "_";
        }
        startNameURL = startNameURL.substring(0, startNameURL.length - 1);
        for (var i = 0; i < endNameArr.length; i++) {
          endNameURL = endNameURL + endNameArr[i] + "_";
        }
        endNameURL = endNameURL.substring(0, endNameURL.length - 1);
        startURL = "https://en.wikipedia.org/wiki/" + startNameURL;
        endURL = "https://en.wikipedia.org/wiki/" + endNameURL;
        console.log(startID);
        console.log(endID);
        console.log(startName);
        console.log(endName);
        console.log(startURL);
        console.log(endURL);
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

