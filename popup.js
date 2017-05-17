var startName;
var endName;
var startURL;
var endURL;

$(document).ready(function() {
  // Grab a random wikpedia page for the start page
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200)  {
      var resp = JSON.parse(xhr.responseText);
      startName = resp.query.random[0].title;
      var startNameArr = startName.split([' ']);
      var startNameURL = "";
      for (var i = 0; i < startNameArr.length; i++) {
        startNameURL = startNameURL + startNameArr[i] + "_";
      }
      startNameURL = startNameURL.substring(0, startNameURL.length - 1);
      startURL = "https://en.wikipedia.org/wiki/" + startNameURL;
    }
  }
  // Use one of the 1000 vital topic wikipedia pages for the end page
  // Vital topics are found at https://en.wikipedia.org/wiki/User:Malerisch/views
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET", chrome.runtime.getURL("vitaltopics.txt"), true);
  xhr2.send();
  xhr2.onreadystatechange = function() {
    if(xhr2.readyState == 4 && xhr2.status == 200)  {
      var resp = JSON.parse(xhr2.responseText);
      var random = Math.floor(Math.random() * 991);
      endName = resp[random];
      var endNameArr = endName.split([' ']);
      var endNameURL = "";
      for (var i = 0; i < endNameArr.length; i++) {
        endNameURL = endNameURL + endNameArr[i] + "_";
      }
      endNameURL = endNameURL.substring(0, endNameURL.length - 1);
      endURL = "https://en.wikipedia.org/wiki/" + endNameURL;
    }
  }
});
