chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, t) { // onUpdated should fire when the selected tab is changed or a link is clicked 
    console.log(t)
    chrome.tabs.getSelected(null,function(tab) {
        console.log(tab)

        if (checkURL(tab.url)) {
            chrome.tabs.remove(tabId);
        }
    });
    
});

function checkURL(url) {
    console.log(url)
    keywords = ["instagram", "facebook", "blog.jaeyoon.io", "blog.naver.com/jaeyo_on"]
    for (let i = 0; i < keywords.length; i++) {
        if (url.includes(keywords[i])) {
            return true
        }
    }
    return false
}