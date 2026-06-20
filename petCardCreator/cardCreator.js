/* Desiree Boudreaux 6/19/2026 */

//Constructor function
function Pet(name, type, age, owner) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;
    this.id = Symbol("petID");

    this.getDescription = function () {
        return `${this.name} is a ${this.type} and is ${this.age} years old.`;
    };

    this.hasBirthday = function () {
        this.age += 1;
    };

    this.getOwnerName = function () {
        return this.owner?.name || "none";
    };

    this.getID = function () {
        return this.id;
    };
}

//Create pets
const pet1 = new Pet("Nyx", "owl", 1, { name: "Desiree" });
const pet2 = new Pet("Biscuit", "cat", 2, { name: "Arianna" });
const pet3 = new Pet("Nibbles", "velociraptor", 3, { name: "Nick" });
const pet4 = new Pet("Pip", "penguin", 4, null);
const pet5 = new Pet("Iggy", "iguana", 7, null);

//Display pet info
console.log("** Pet 1 **");
console.log("Name:", pet1.name);
console.log("Type:", pet1.type);
console.log("Age:", pet1.age);
console.log("Owner:", pet1.getOwnerName());
console.log("ID:", pet1.getID());

console.log("** Pet 2 **");
console.log("Name:", pet2.name);
console.log("Type:", pet2.type);
console.log("Age:", pet2.age);
console.log("Owner:", pet2.getOwnerName());
console.log("ID:", pet2.getID());

console.log("** Pet 3 **");
console.log("Name:", pet3.name);
console.log("Type:", pet3.type);
console.log("Age:", pet3.age);
console.log("Owner:", pet3.getOwnerName());
console.log("ID:", pet3.getID());

console.log("** Pet 4 **");
console.log("Name:", pet4.name);
console.log("Type:", pet4.type);
console.log("Age:", pet4.age);
console.log("Owner:", pet4.getOwnerName());
console.log("ID:", pet4.getID());

console.log("** Pet 5 **");
console.log("Name:", pet5.name);
console.log("Type:", pet5.type);
console.log("Age:", pet5.age);
console.log("Owner:", pet5.getOwnerName());
console.log("ID:", pet5.getID());

//Birthday calls
console.log("Nyx has a birthday!");
pet1.hasBirthday();
console.log("Updated Age:", pet1.age);
console.log(pet1.getDescription());

console.log("Nibbles has a birthday!");
pet3.hasBirthday();
console.log("Updated Age:", pet3.age);
console.log(pet3.getDescription());

//Date and Time
console.log("Current Date & Time:", new Date());


/* 
====================
Reflection Questions
====================

1.What does this refer to in your constructor and methods?
    "this" refers to the pet object that gets created when the pet constructor is used. Each pet has its own "this", so it refers to that pet’s name, type, age, owner, and method.

2. What does optional chaining do in your code?
    "this.owner?.name" checks whether the owner exists before trying to access the name. If the owner is null or undefined, it prevents errors and allows the return of "none".

3. Why might the Date object be useful in a JS program?
    The date object is useful for getting the current date and time, creating timestamps, event logging, scheduling, or tracking happenings in a program.    
*/
