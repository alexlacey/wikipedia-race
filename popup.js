// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  alert("here!!!");
});

$( document ).ready(function(tab) {
  var tabId = tab.id;
  console.log("hi");
  console.log(tabId);
  console.log(tab);
});

    chrome.tabs.getSelected(null, function(tab) {
        var taby = tab;
        var tabUrl = tab.url;

        console.log("hey there");
        console.log(taby);
        console.log(tabUrl);
    });