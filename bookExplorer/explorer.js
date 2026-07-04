//Desiree Boudreaux Web 124 wk4 07/02/2026

//Book Data
let books = [
    { title: "Charlotte's Web", author: "E.B. White", pages: 192 },
    { title: "The Lion, the Witch, and the Wardrobe", author: "C.S. Lewis", pages: 208 },
    { title: "Prince Caspian", author: "C.S. Lewis", pages: 240 },
    { title: "Carrie", author: "Stephen King", pages: 199 },
    { title: "IT", author: "Stephen King", pages: 1138 }
];

//Console Output
books.forEach(book => {
    console.log(book.title, book.author, book.pages);
});

//DOM Tree
console.log(document);                     
console.log(document.body);                
console.log(document.body.firstElementChild);
console.log(document.body.children);       

//Walk the DOM
let ulElement = document.body.children[2];
console.log(ulElement);

let firstLi = ulElement.children[0];
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.nextElementSibling);

//Node Properties
console.log(firstLi.textContent);
console.log(firstLi.nodeType);

//Styles & Classes
let heading = document.body.children[0];
console.log(heading.className);

/* Reflection Questions

1. What is the DOM tree?
    The DOM tree is an organized layout representation of the HTML document, showing how elements as nodes in a hierarchy.

2. What is a node in the DOM?
    Any item in the DOM like an element, text, comment, or attribute.

3. What is the difference between a parent and a child node?
    A parent node contains child nodes inside it, and the children sit underneath the parent node.

4. What is a sibling node?
    Sibling nodes share the same parent and are on the same level in the tree.
*/