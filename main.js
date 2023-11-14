class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < this.myLibrary.length; i++) {
      let book = this.myLibrary[i];
      let bookEl = document.createElement("div");
      bookEl.setAttribute("class", "book-card");
      bookEl.innerHTML = `
        <div class="card-header">
          <h3 class="title">${book.title}</h3>
          <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
          <p>${book.pages} pages</p>
          <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
          <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
      `;

      libraryEl.appendChild(bookEl);
    }
  }

  removeBook(index) {
    this.myLibrary.splice(index, 1);
    this.render();
  }

  addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    this.myLibrary.push(newBook);
    this.render();
  }
}

let library = new Library();

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    library.addBookToLibrary(title, author, pages, read);
  });
