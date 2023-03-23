/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

let browser = window.browser || chrome;


// The various useful DOM elements in the panel.
const divSelect = document.querySelector("#divSelect");
const nodeListEl = document.querySelector("#nodes");

// Start listening for events in the panel, to handle user inputs.
divSelect.addEventListener("click", selectDiv);

// window.addEventListener("click", handleButtonClick);
// window.addEventListener("mouseover", handleNodeOver);
// window.addEventListener("mouseout", handleNodeOut);


/**
 * Clear the output.
 */
function selectDiv() {
    debugger
    console.error(666)
    browser.runtime.sendMessage({
        tabId: browser.devtools.inspectedWindow.tabId,
        action: "selectDiv"
    });
}


// Handle messages from the background script.
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.tabId !== browser.devtools.inspectedWindow.tabId) {
        return;
    }
});
