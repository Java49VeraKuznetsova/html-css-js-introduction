import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";


const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_DATA = '1980-01-01';

const ACTIVE = "active"


const pageFormErrorElement = document.getElementById("page_form_error");
const booksListElement = document.getElementById("books-all");
const booksPageListElement = document.getElementById("books-page");
const booksAuthorListElement = document.getElementById("books-author");
const inputAuthorElements = document.querySelector(".author-form-class [name]");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/**************************** ********************************************** */
const library = new Library();

const bookForm = new BookForm({idForm: "book_form", idDateInput:"date_input",
idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
minPage: MIN_PAGE, maxPage: MAX_PAGE, minDate: MIN_DATA});

bookForm.addSubmitHandler((book) => library.addBook(book));



/************************************************************* */

/********************************************************************************** */

//functions of Pages Form

let pageFrom = 0;
let pageTo = 0;
function onSubmitPage(event) {
    event.preventDefault();
    const books = library.getBooksByPage(pageFrom, pageTo);
    booksPageListElement.innerHTML = getBookItems(books);
 
}
function onChangePageFrom(event) {
    const value = +event.target.value;
    if (pageTo && value >= pageTo) {
        showErrorMessage(event.target, "Page 'from' must be less than Page 'to'",
        pageFormErrorElement);
    } else {
        pageFrom = value;
    }
}
function onChangePageTo(event) {
    const value = +event.target.value;
    if (pageFrom && value < pageFrom) {
        showErrorMessage(event.target, "Page 'To' must be greater than Page 'From'",
        pageFormErrorElement);
    }
    pageTo = value;
}

//function of Author Form


function onSubmitAuthor(event) {
    event.preventDefault();

    const authorSearch = inputAuthorElements.value;
    const author = library.getAuthorBooks (authorSearch);
    booksAuthorListElement.innerHTML = getBookItems(author);
}


// ***********
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
       if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}
function getBookItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${e.book_title} </p>
                 <p class="books-item-paragraph">Author: ${e.author} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Publishdate: ${e.publishDate}</p>
                 <p class="books-item-paragraph">Page: ${e.page}</p>
              </div>
          </li>`).join('');
}


window.onChangePageTo = onChangePageTo;
window.showSection = showSection;
window.onChangePageFrom = onChangePageFrom;

window.onSubmitPage = onSubmitPage;
window.onSubmitAuthor = onSubmitAuthor;

