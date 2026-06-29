/* Desiree Boudreaux Week 3 JavaScript 2 06/23/2026 */

/* Raw Data Strings & arrays */

const movieData = [
    "Tucker and Dale vs. Evil, comedy horror, 9, tuckeranddalevsevil@email.com",
    "Indiana Jones, action adventure, 8, indianajones@email.com",
    "Pirates of the Caribbean,action adventure, 10, piratesofthecaribbean@email.com",
    "Scary Movie, comedy, 5", //missing email
    "Naked Gun, comedy, 7, nakedgun@email.com",
    "John Wick, action, 6, johnwick@email.com"
];

/* Movie Objects, Constructor Function, and Methods */

function Movie(title, genre, rating, reviewEmail) {
    this.title = title;
    this.genre = genre;
    this.rating = Number(rating);
    this.reviewEmail = reviewEmail;
    this.id = Symbol("movieID");

    // Returns a summary
    this.getSummary = function () {
        return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}`;
    };

    // Check if the rating is 8 or higher
    this.isHighlyRated = function () {
        return this.rating >= 8;
    };

    // Return email or none if email address is missing
    this.getReviewEmail = function () {
        return this.reviewEmail?.trim() || "none";
    };

    // Returns the Symbol ID
    this.getID = function () {
        return this.id;
    };
}

/* Convert Strings to Movie Objects & Handling of Errors */

const movies = []; //store movie objects

for (let str of movieData) {
    try {
        // Split the string
        const parts = str.split(",");

        // If the string is missing a piece throw an error
        if (parts.length < 4) {
            throw new Error("The bad movie string is: " + str);
        }

        // Pull out each property
        const title = parts[0].trim();
        const genre = parts[1].trim();
        const rating = parts[2].trim();
        const email = parts[3].trim();

        // Make new movie object
        const movieObject = new Movie(title, genre, rating, email);

        // Add movie object to array
        movies.push(movieObject);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

/* Array & String Processing */

// Show all movie summaries
console.log("*** All Movies Summaries ***");
movies.forEach(movie => {
    console.log(movie.getSummary());
});

// Make a list of highly rated movies
const topMovies = movies.filter(movie => movie.isHighlyRated());

// Show the titles of highly rated movies
console.log("*** Highly Rated Movies ***");
topMovies.forEach(movie => {
    console.log(movie.title);
});

/* Expressions */

// Email check
const emailRegex = /.+@.+\..+/;

console.log("*** Validate Email ***");
movies.forEach(movie => {
    const email = movie.reviewEmail;
    const isValid = emailRegex.test(email);
    console.log(email, isValid);
});

/* My Favorite Movie */
console.log(`My favorite movie in this list is ${movies[2].title}.`);
// This prints the title of the third movie in my array and also the one I enjoy the most of the movies I have in my list.
// This code determines it by accessing movies[2].title (index 2 which is the 3rd movie in the list) after converting the raw strings into movie objects.


/* Reflection Questions 

1. What are array methods, and how did you use them in this assignment?
   Array methods are a built in tools that help work with arrays. 
   I used split() to break the strings apart, forEach() to loop through the movies, 
   and filter() to make a list of highly rated movies.

2. What does your regular expression check for?
   Regex makes sure the email contains an "@" and a "." because those two charecters are required for email format.

3. How does try/catch help prevent errors in your program?
   try/catch stops the program from crashing when an error is present (the movie string is missing a value or incorrectly formatted.) 
   It logs an error message instead of breaking the script.
*/



