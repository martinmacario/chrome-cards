var LS_LASTASKED = 'last-asked'
var DAY_MS = 86400000;
  
function sync() {
    var lastAsked = localStorage.getItem(LS_LASTASKED);
    if (lastAsked) {
      var rightNow = (new Date()).getTime();
      var timeDiff = (rightNow - lastAsked);
      if (timeDiff > DAY_MS) {
        chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 0, 255]});
        var numDays = Math.floor(timeDiff/DAY_MS);
        chrome.browserAction.setBadgeText({text: numDays + ''});
      }
    }
}
  
// Once an hour, check if it's been too long
sync();
var time = 1000 * 60 * 60;
window.setInterval(function() { sync(); }, time);
