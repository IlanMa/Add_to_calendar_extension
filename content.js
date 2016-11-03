// A generic onclick callback function.
function validateDate(e) {
	alert(e.selectionText)
}

// Create one test item for each context type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    chrome.contextMenus.create({
        "title": "Add to Calendar",
        "contexts": [context],
        "onclick": validateDate
    });
}
