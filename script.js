const dLibrary = [];

// book constructor function
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

function addBookToLibrary(newBook) {
  dLibrary.push(newBook);
};

// open popup when clicking on the add book button
document.getElementById('add-book-btn').addEventListener('click', () => {
  document.getElementById('add-book-popup').classList.toggle('active');
});

document.getElementById('add-book-form').addEventListener('submit', (e) => { 
  e.preventDefault();
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const isRead = document.getElementById('isRead');

  const newBook = new Book(title.value, author.value, pages.value, isRead.checked);
  addBookToLibrary(newBook);
  document.getElementById('add-book-popup').classList.remove('active');
  resetForm(title, author, pages, isRead);
  console.log(dLibrary);
});

function resetForm(title, author, pages, isRead) {
  title.value = '';
  author.value = '';
  pages.value = '';
  isRead.checked = false;
};

// exits the modal when clicking anywhere off of the popup.
document.querySelector('.popup .overlay').addEventListener('click', () => {
  document.getElementById('add-book-popup').classList.remove('active');
});
