console.log("Background!");
re = /https?:\/\/github\.com\/\w+\/\w+\/pull\/(\d+)/

chrome.tabs.onUpdated.addListener(function(id, change, tab) {
    if (re.test(tab.url)) {
        console.log("Passesd");
        chrome.tabs.sendMessage(tab.id, {matches: true});
    } else {
        console.log("Failed");
        chrome.tabs.sendMessage(tab.id, {matches: false});
    }
	/*console.log("Called3:  " + id + tab.url);
	console.log("Id: " + id.toString());
        //console.log("Change: ", change.toString());
        console.log("Tab josn: ", JSON.stringify(tab));*/
});
