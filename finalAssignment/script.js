/* Desiree Boudreaux Final Wk7 7/21/2026 */

// Arrays & Objects
// Array of kitchen tools
const kitchenTools = ["Cast Iron Skillet", "Dutch Oven", "Stock Pot", "Pots", "Pans", "Knives", "Cutting Board", "Stand Mixer", "Measuring Cups", "Measuring Spoons"];

// Cooking profile object
const cookingProfile = {
  name: "Desiree",
  favoriteCuisine: "I love all types of food!",
  skillLevel: "A Creative Intermediate"
};

// Array of cookbook objects
const cookbooks = [
  {
    title: "Knife Drop",
    author: "Nick DiGiovanni",
    year: 2023
  },
  {
    title: "Max the Meat Guy Cookbook",
    author: "Max the Meat Guy (YouTube Chef)",
    year: "No known cookbook as yet"
  },
  {
    title: "Pati’s Mexican Table",
    author: "Pati Jinich (PBS Chef)",
    year: 2013
  },
  {
    title: "Kevin Belton’s Big Easy Cookbook",
    author: "Kevin Belton (PBS Chef)",
    year: 2019
  },
  {
    title: "Jose El Cook Cookbook",
    author: "Jose El Cook (YouTube Chef)",
    year: "No known cookbook as yet"
  }
];

// Array of cooking tips
const cookingTips = [
  "Always preheat your oven.",
  "Dont be afraid to try something new.",
  "Season as you cook.",
  "Taste as you go.",
  "Let meat rest before cutting.",
  "Make it fun.",
  "Keep it creative.",
  "Use flavors you love."
];

// DOM Selection
const showToolsBtn = document.getElementById("show-tools-btn");
const toolsOutput = document.getElementById("tools-output");

const tipsBtn = document.querySelector("#tip-btn");
const tipOutput = document.querySelector("#tip-output");

// Display my profile on the page
const profileOutput = document.getElementById("profile-output");
profileOutput.textContent = `My favorite cuisine: ${cookingProfile.favoriteCuisine}`;

// Events
// Show kitchen tools
showToolsBtn.addEventListener("click", () => {
  toolsOutput.textContent = kitchenTools.join(", ");
});

// Random cooking tips
tipsBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * cookingTips.length);
  tipOutput.textContent = cookingTips[random];
});

// Focus/blur event
const nameInput = document.getElementById("name-input");
nameInput.addEventListener("focus", () => nameInput.style.background = "#fff3e0");
nameInput.addEventListener("blur", () => nameInput.style.background = "white");

// Event Delegation
const cookbookList = document.getElementById("cookbook-list");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookYear = document.getElementById("book-year");

/*
Event Delegation Explanation:
Instead of adding a click event to each <li>, I added an event listener to the parent <ul>.
Because of event bubbling the clicks on the <li> elements bubble up to the <ul>.
You can check event.target to see which <li> was clicked.
*/

cookbookList.addEventListener("click", (event) => {
  const id = event.target.getAttribute("book-id");
  if (id !== null) {
    const book = cookbooks[id];
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookYear.textContent = `Year: ${book.year}`;
  }
});

// Form and Storage
const cookbookForm = document.getElementById("cookbook-form");
const submissionText = document.getElementById("submission-text");
const storedText = document.getElementById("stored-text");

cookbookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const cookbook = document.getElementById("cookbook-input").value.trim();

  submissionText.textContent = `${name}'s favorite cookbook is "${cookbook}".`;

  const data = { name, cookbook };
  localStorage.setItem("cookbookSubmission", JSON.stringify(data));

  storedText.textContent = `Stored: ${name} loves "${cookbook}".`;
});

// Load stored data
window.addEventListener("load", () => {
  const stored = localStorage.getItem("cookbookSubmission");
  if (stored) {
    const parsed = JSON.parse(stored);
    storedText.textContent = `Stored: ${parsed.name} loves "${parsed.cookbook}".`;
  }
});

// Browser Objects
// window object
console.log("Window height:", window.innerHeight);

// location object
console.log("Current URL:", location.href);

// Object usage
console.log("Cooking profile:", cookingProfile);
console.log("Favorite cuisine:", cookingProfile.favoriteCuisine);

/*
Reflection Questions:

1. Easiest Feature:
   Using arrays and objects to store cookbook data.

2. Most Challenging Feature:
   Event delegation and an understanding of how bubbling works.

3. How I Used Events:
   Clicked events for tips and tools, focus/blur on inputs, and delegated clicks on cookbook list.

4. How I Used Storage:
   I saved the user's cookbook submission in localStorage and displayed it on page load.
*/
