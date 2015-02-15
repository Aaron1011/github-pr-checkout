chrome.tabs.onUpdated.addListener(function(id, change, tab) {
	console.log("Called: ", id, change, tab);
});
