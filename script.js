const dLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

function addBookToLibrary(newBook) {
  dLibrary.push(newBook);
};