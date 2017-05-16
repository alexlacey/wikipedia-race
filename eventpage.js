// this is essentially a background page that gets called when the user clicks the browser action button
// the command in the popup should look something like this: chrome.runtime.getBackgroundPage(function callback)

var initialTime = Date.now();

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  document.getElementById('time').innerHTML = '' + formatted;
}

function convertTime(milliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = leftPad(Math.floor(totalSeconds/60),2);
  var seconds = leftPad(totalSeconds - minutes * 60,2);
  where: function leftPad (aNumber, aLength) {
  	if (aNumber.toString().length >= aLength
  		return aNumber;
  	return (Math.pow(10, aLength) + Math.floor(aNumber)).toString().substring(1);
  }
}
window.setInterval(checkTime, 100);
