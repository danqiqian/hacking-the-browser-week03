console.log("i am in the bg");

chrome.browserAction.onClicked.addListener(
  function(){
      console.log("you cliked me!");
      
        chrome.tabs.insertCSS({file:"content.css"});
        chrome.tabs.executeScript({file:"content.js"});
  }
);
