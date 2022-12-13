import { Library } from "./data/library.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_PAGE = 50;
const MAX_PAGE = 2000;
//const MIN_DATA = new Date('1980-01-01');
// see V.R. remarks from Vladimir
const MIN_DATA = '1980-01-01';
const maxData = getMaxData();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"
const library = new Library();

const dateErrorElement = document.getElementById("date_error");
const pageErrorElement = document.getElementById("page_error");
const pageFormErrorElement = document.getElementById("page_form_error");
const booksListElement = document.getElementById("books-all");
const booksPageListElement = document.getElementById("books-page");
const booksAuthorListElement = document.getElementById("books-author");
const inputAuthorElements = document.querySelector(".author-form-class [name]");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */


//functions of Book Form
function onSubmit(event) {
    event.preventDefault();
    //console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
         return res;
        }, {}
    )
    console.log(book)
    library.addBook(book);
    
}
function onChange(event) {

    if (event.target.name == "page") {
        validatePage (event.target)
    } else if (event.target.name == "publishDate") {
        validatePublishDate(event.target);
    }
}

/* V.R. You compare strings to validate date. It isn't effective way. Compare:
const MIN_DATE = new Date('1980-01-01');
const MAX_DATE = new Date();
const selected-date = new Date(element.value);
if(selected-date<MIN_DATE || selected-date>MAX_DATE) {
    // and so on
}
*/
function validatePage(element) {
    const value = +element.value;
    if (value < MIN_PAGE || value > MAX_PAGE) {
        const message = value < MIN_PAGE ? `page must be ${MIN_PAGE} or greater`
            : `page must be ${MAX_PAGE} or less`;
        showErrorMessage(element, message, pageErrorElement);
    }

}
function validatePublishDate(element) {
  if (element.value < MIN_DATA || element.value > maxData) {
    const message = element.value < MIN_DATA ? `data must be ${MIN_DATA} or greater`:
             `data must be ${maxData} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxData() {
   const currentData = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
   return currentData;
}
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

window.onSubmit = onSubmit;
window.onChangePageTo = onChangePageTo;
window.showSection = showSection;
window.onChangePageFrom = onChangePageFrom;
window.onChange = onChange;
window.onSubmitPage = onSubmitPage;
window.onSubmitAuthor = onSubmitAuthor;

