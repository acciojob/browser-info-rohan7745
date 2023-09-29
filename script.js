//your JS code here. If required.
// Get the browser information from the navigator object
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// Create a message with the browser name and version
const message = "You are using " + browserName + " version " + browserVersion;

// Get the 'browser-info' div element
const browserInfoDiv = document.getElementById('browser-info');

// Display the message inside the 'browser-info' div
browserInfoDiv.textContent = message;

