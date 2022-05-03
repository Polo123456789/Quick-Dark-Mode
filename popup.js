const btn = document.querySelector("button");

const addDarkMode = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
            filter: invert(1) hue-rotate(180deg);
        }
        html img {
            filter: invert(1) hue-rotate(180deg);
        }
    `;
    document.head.appendChild(style);
}

btn.addEventListener("click", async () => {
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
});
