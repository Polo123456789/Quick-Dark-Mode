const addDarkMode = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
            filter: invert(1) hue-rotate(180deg);
            background: white;
        }
        html img {
            filter: invert(1) hue-rotate(180deg);
        }
    `;
    document.head.appendChild(style);
}

const toggleDesingMode = () => {
    if (document.designMode === "on") {
        document.designMode = "off";
    } else {
        document.designMode = "on";
    }
}

chrome.commands.onCommand.addListener(async (command) => {
    if (command == "darkmode") {
        console.log(command);
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: addDarkMode
        });
    }
    if (command == "desingmode") {
        console.log(command);
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: toggleDesingMode
        });
    }
});
