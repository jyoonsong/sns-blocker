
window.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.remove(tab.id, function() { });
    });
});
