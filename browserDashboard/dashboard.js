/* Desiree Boudreaux WK 6 07/16/2026 */

// Browser Info
console.log("Page URL:", window.location.href);
console.log("Browser Language:", navigator.language);
console.log("Online/Offline Status:", navigator.onLine);
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);

// Window Info
console.log("Window Inner Width:", window.innerWidth);
console.log("Window Inner Height:", window.innerHeight);

// Form Properties
const form = document.forms.userForm;
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Reload prevention

    const nameValue = form.userName.value;
    const siteValue = form.favoriteSite.value;

    if (!siteValue.startsWith("http")) {
        console.log("Please include https:// in the address when entered.");
    }

    output.innerHTML = `
        <h3>Submitted Info:</h3>
        <p>Name: ${nameValue}</p>
        <p>Favorite Website: ${siteValue}</p>
    `;


    // Local Storage
    localStorage.setItem("savedName", nameValue);
    console.log("Name has been retrieved from localStorage:", localStorage.getItem("savedName"));

    // Session Storage
    sessionStorage.setItem("savedSite", siteValue);
    console.log("Site has been retrieved from sessionStorage:", sessionStorage.getItem("savedSite"));

    // URL Object
    try {
        const siteURL = new URL(siteValue);
        console.log("URL Hostname:", siteURL.hostname);
        console.log("URL Protocol:", siteURL.protocol);
        console.log("URL Pathname:", siteURL.pathname);

        output.innerHTML += `
            <h3>URL Object Info:</h3>
            <p>Hostname: ${siteURL.hostname}</p>
            <p>Protocol: ${siteURL.protocol}</p>
            <p>Pathname: ${siteURL.pathname}</p>
        `;
    } catch (error) {
        console.log("The URL entered is invalid.");
    }
});

// Focus & Blur
const nameField = document.getElementById("userName");

nameField.addEventListener("focus", () => {
    console.log("The name field has received focus.");
});

nameField.addEventListener("blur", () => {
    console.log("The name field has lost focus.");
});

// History Object
document.getElementById("backBtn").addEventListener("click", () => {
    console.log("The back button has been clicked. Going back to the previous page.");
    history.back();
});

document.getElementById("forwardBtn").addEventListener("click", () => {
    console.log("The forward button has been clicked. Moving forward to the next page.");
    history.forward();
});


/*
Reflection Questions:

1. What is the difference between localStorage and sessionStorage?
    localStorage saves data permanently until its manually cleared.
    sessionStorage saves data for the browsers current session, then it disappears when the tab is closed.

2. What information can the Navigator object provide?
    The browsers language, online & offline status, user agent, platform, hardware concurrency, etc.

3. What happens when an input field receives focus?
    The cursor enters the field, allowing the user to type then the focus event fires.

4. Why might a website use a URL object?
    To extract parts of a url like the hostname, protocol, pathname and for validation or manipulation of urls.
*/
