"use strict";

// Open the port to communicate with the background script.
const browser = window.browser || chrome;
const port = browser.runtime.connect({name: "cs-port"});

// Handle background script messages.
port.onMessage.addListener(message => {
    switch (message.action) {
        case "selectDiv":
            selectDiv(message);
            break;
    }
});

// Helper to send messages back to the background script.
function sendResponse(message) {
    port.postMessage(message);
}


function selectDiv() {
    sendResponse({
        nodes: 666
    })
}
