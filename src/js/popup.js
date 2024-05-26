document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const expandButton = document.getElementById("slid");
  const convertButton = document.getElementById("convert-to-movie");

  if (!expandButton) {
    console.error('Expand Slides button not found!');
  } else {
    console.log('Expand Slides button found');
    expandButton.addEventListener("click", () => {
      console.log('Expand Slides button clicked');
      chrome.tabs.query({
        active: true,
        currentWindow: true,
      }, (tabs) => {
        console.log('Tabs queried:', tabs);
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["src/js/expand.js"]  // Update this path to match your directory structure
        }, () => {
          if (chrome.runtime.lastError) {
            console.error('Script injection failed: ' + chrome.runtime.lastError.message);
          } else {
            console.log('Script injected successfully.');
          }
        });
      });
    });
  }

  if (!convertButton) {
    console.error('Convert to Movie button not found!');
  } else {
    console.log('Convert to Movie button found');
    convertButton.addEventListener("click", () => {
      console.log('Convert to Movie button clicked');
      chrome.tabs.query({
        active: true,
        currentWindow: true,
      }, (tabs) => {
        console.log('Tabs queried:', tabs);
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["src/js/convert.js"]  // Update this path to match your directory structure
        }, () => {
          if (chrome.runtime.lastError) {
            console.error('Script injection failed: ' + chrome.runtime.lastError.message);
          } else {
            console.log('Script injected successfully.');
          }
        });
      });
    });
  }
});
