class Book {

  constructor(title, author, isbn, available) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }
  borrowBook() {
    let details;
    if (this.available) {
      details = (!this.available)
      // `${this.title} by ${this.author} is not available`;
    } else {
      details = `${this.title} by ${this.author} is available`;
    }
    return details;
  }
  returnBook() {
    return `${this.title} by ${this.author} is available`;
  }
}

const newBook = new Book(
  "Love is blind",
  "Chinua Achegbe",
  "1234-3334-7809",
  true
);

const newBook2 = new Book("Swaggans", "Nado", "1263-8990-8399", false);
console.log(newBook.borrowBook());
console.log(newBook.returnBook());

class Library extends Book {
  constructor(title, author, isbn, available) {
    super(title, author, isbn, available);
  }
}
const books = [newBook, newBook2];
const addBook = new Book(
  "love is sweeet",
  "Martina abba",
  "21289-0298-6171",
  false
);
books.push(addBook);
console.log(books);

const isbnToRemove = "1234-3334-7809";
const removeBook = books.filter((Book) => Book.isbn !== isbnToRemove);

console.log(removeBook);

const titleToFind = "love is sweeet";

const findbookbyTitle = books.find((Book) => Book.title === titleToFind);

console.log(findbookbyTitle);

class DigitalLibrary extends Library{
  constructor(title, author,isbn, available, pdf) {
   super(title, author,isbn, available); 
  
  this.pdf = true
};
downloadBook(){ let details;

if (this.available) {details= "downloading book...";
  
} else {details= "not available"
  
} return details
};

}