/* Desiree Boudreaux 7/6/2026 Web 124 wk 5 */


/* Selecting Elements */
// getElementById()
const heading = document.getElementById("mainHeading");

// querySelector()
const paragraph = document.querySelector("p");

// Display both elements in console
console.log("Heading element:", heading);
console.log("Paragraph element:", paragraph);


/* Browser Events */
const updateButton = document.getElementById("updateBtn");

updateButton.addEventListener("click", function () {
    heading.textContent = "Playlist Updated!";
    paragraph.textContent = "Button clicked, refreshing your playlist now.";
    console.log("Button clicked!");
});


/* Event Bubbling */
const parentDiv = document.getElementById("buttonContainer");

parentDiv.addEventListener("click", function () {
    console.log("Parent DIV clicked, bubbling now.");
});

updateButton.addEventListener("click", function () {
    console.log("Button clicked, event triggered.");
});


/* Event Delegation */
const songList = document.getElementById("songList");

songList.addEventListener("click", function (event) {
    // event.target, clicked li
    console.log("You clicked:", event.target.textContent);
});


/* Browser Defaults */
const jcccLink = document.getElementById("jcccLink");

jcccLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Default action prevented, staying on current page.");
});


/*  Reflection Questions

1. What is the difference between getElementById() and querySelector()?
    getElementById() selects an element by its id only.
    querySelector() can select any element using CSS selectors #id, .class, tag, etc.

2. What is event bubbling?
    Event bubbling means an event starts at the deepest element then moves upwards to its parent elements.

3. What is event delegation?
    Event delegation is adding an event listener to a parent element and using event.target to figure out which child element was clicked.

4. Why would someone want to use preventDefault()?
    preventDefault() stops the browser from performing the normal action like form submission or clicking a link.
*/
