// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  alert("here!!!");
});

$( document ).ready(function() {
  console.log("yeh");
});

    chrome.tabs.getSelected(null, function(tab) {
        var taby = tab;
        var tabUrl = tab.url;

        console.log("hey there");
        console.log(taby);
        console.log(tabUrl);
    });

console.log("hey there!!!!");