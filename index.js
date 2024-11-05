
//Task 1) Create an object named 'book' using curly braces {} that includes the information above.
 const book = {
    title : "JavaScript: The Definitive Guide",
    Author: "David Flanagan",
    "Published Year": 2020,
    Genre: "Programming",

}
//console.log(book.title);
//console.log(book["Published Year"]);


/*****************************************************************
Part 2: Modifying Objects

Consider you need to update the book's information and add a new property:

Task 3) Add a property 'pageCount' with the value 1096 to the 'book' object.

Task 4) The book has been assigned an ISBN number. Add a property 'ISBN' with a value "978-1491952023".
        
Task 5) Modify the 'publishedYear' to 2021 as a new edition has been released.
******************************************************************/

//console.log(book);

book.pageCount = 1096;
book.ISBN = "978-1491952023";
book["Published Year"] = 2021 ;
//console.log(book);


/*****************************************************************
Part 3: Advanced Object Operations 

Your library system needs to handle multiple authors and include reviews for the book. 
Update the 'book' object to accommodate these requirements:

Task 6) Modify the 'author' property to hold an array of two authors: "David Flanagan" and "Another Author".

Task 7) Add a 'reviews' property to the 'book' object, which will store an array of review objects. 
        Each review object should have 'reviewer' and 'comment' properties. 
        Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}.
******************************************************************/


book.Author = ["David Flanagan", "BaDooRa"];
book.reviews = ["review"];
book.review = {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}

console.log(book);