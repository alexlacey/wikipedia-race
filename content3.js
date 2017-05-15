// end timer

// Register a webRequest rule to redirect the Wikipedia end-page to our End-page.
  var wr = chrome.declarativeWebRequest;
  chrome.declarativeWebRequest.onRequest.addRules([{
    id: "0",
    conditions: [new wr.RequestMatcher({url: endURL})],
    actions: [new wr.RedirectRequest({redirectUrl: ourEndPageURL})]
  }]);
  