const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
};
//console.log(book.title);
//console.log(book["Published Year"]);
// other way --> console.log(`${book.title} - ${book["publishedYear"]}`);

//console.log(book);

book.pageCount = 1096;
book.ISBN = "978-1491952023";
book.publishedYear = 2021;
//console.log(book);

book.author = ["David Flanagan", "BaDooRa"];

book.reviews = [
  { reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript." },
  { reviewer: "anwar", comment: "good book" },
];

//console.log(book);
// if i want to call a specific element inside the object

//console.log(book.reviews[1].reviewer);

// if i want to call specific element inside object
console.log(book.reviews[1].comment);


