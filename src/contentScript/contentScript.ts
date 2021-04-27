chrome.runtime.sendMessage("Message from content script", (response) => {
    console.log(response);
})