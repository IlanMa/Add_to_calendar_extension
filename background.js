chrome.identity.getAuthToken({
    interactive: true
}, function(token) {

    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() { //Call a function when the state changes.
        if (x.readyState == 4 && x.status == 200) {
            alert(x.responseText);
        }
    }
    x.open('POST', 'https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=' + token, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var event = { "data": {"title": "AAA","when": [{"start": "2010-04-17T15:00:00.000Z","end": "2010-04-17T17:00:00.000Z"}]}};
    x.send({body: event});
});
