const dLib = {
  library: [],
  removeBook: function (book) {
    const index = this.library.indexOf(book);
    this.library.splice(index, 1);
    console.log(this.library, this.library.length)
  },
  displayLibrary: function () {
    const displayLib = document.getElementById('display-library');
    for (const book of this.library) {
      if (!book.present) {
        const bookCard = document.createElement('div');
        const bookInfo = document.createElement('div');
        bookCard.classList.add('book-card');
        bookInfo.classList.add('book-info');

        const title = document.createElement('h2');
        title.textContent = `${book.title}`;
        bookInfo.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `${book.author}`;
        bookInfo.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookInfo.appendChild(pages);

        const isRead = document.createElement('button');
        isRead.textContent = book.isRead ? 'Read' : 'Not Read';
        isRead.addEventListener('click', () => {
          book.isRead = !book.isRead;
          isRead.textContent = book.isRead ? 'Read' : 'Not Read';
        });
        bookInfo.appendChild(isRead);

        bookCard.appendChild(bookInfo);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', (book) => {
          book.present = false;
          this.removeBook(book);
          bookCard.remove();
        });
        bookCard.appendChild(removeBtn);

        displayLib.appendChild(bookCard);
      };
    }
  },
};

// book constructor function
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.present = false;
  }
};

function addBookToLibrary(newBook) {
  dLib.library.push(newBook);
  dLib.displayLibrary();
  newBook.present = true;
};

// open popup when clicking on the add book button
document.getElementById('add-book-btn').addEventListener('click', () => {
  document.getElementById('add-book-popup').classList.toggle('active');
});

// add new book to library when form is submitted
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
});

// resets form after submission
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


// quick test case - add some books to the library
const library = [];
library.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
library.push(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, true));
library.push(new Book('The Two Towers', 'J.R.R. Tolkien', 327, true));
library.push(new Book('The Return of the King', 'J.R.R. Tolkien', 347, true));
library.push(new Book('The Silmarillion', 'J.R.R. Tolkien', 365, true));
library.push(new Book('The Children of Húrin', 'J.R.R. Tolkien', 313, true));
library.push(new Book('Unfinished Tales', 'J.R.R. Tolkien', 405, true));
library.push(new Book('The Fall of Gondolin', 'J.R.R. Tolkien', 304, true));
library.push(new Book('Beren and Lúthien', 'J.R.R. Tolkien', 288, false));
for (const newBook of library) {
  addBookToLibrary(newBook);
}