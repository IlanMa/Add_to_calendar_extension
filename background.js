// chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//     // Use the token.
//     console.log(token);
//     chrome.identity.removeCachedAuthToken({token: token}, function(info) {
//     	console.log("?", info)
//     })
// });




chrome.identity.getAuthToken({
    interactive: true
}, function(token) {
    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var x = new XMLHttpRequest();
    console.log(token)
    x.open('GET', 'https://www.googleapis.com/calendar/v3/calendars?alt=json&access_token=' + token);
    x.onload = function() {
        alert(x.response);
    };
    x.send();
});