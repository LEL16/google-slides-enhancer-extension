document.getElementById("expand-slide").addEventListener("click", () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["expand.js"]
    });
  });
});

document.getElementById("convert-to-movie").addEventListener("click", () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["convert.js"]
    });
  });
});
