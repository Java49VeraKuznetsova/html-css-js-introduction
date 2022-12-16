import { Library } from "./data/library.js";
import { AuthorForm } from "./ui/Author.js";
import { BookForm } from "./ui/BookForm.js";
import { BookList } from "./ui/BookList.js";
import { PageForm } from "./ui/PageForm.js";


const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_DATA = '1980-01-01';
const ACTIVE = "active"

const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/**************************** ********************************************** */
// const for printing

const listAllBooks = new BookList ("books-all");
const listAuthorBooks = new BookList("books-author");
const listPageBooks = new BookList("books-page");

// function of Main Book Form

const library = new Library();

const bookForm = new BookForm({idForm: "book_form", idDateInput:"date_input",
idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
minPage: MIN_PAGE, maxPage: MAX_PAGE, minDate: MIN_DATA,
addBookFn: book => library.addBook(book)});

//function of Author Form


const authorForm = new AuthorForm ({idForm: "author-form", idAuthorInput: "authorSearch"});

authorForm.addSubmitHandler((authorSearch) => {
    const author = library.getAuthorBooks (authorSearch);
    listAuthorBooks.showBooksList(author);
})

//functions of Pages Form
       

const pageForm = new PageForm ({idForm: "page-form", idPageFrom: "pageFrom",
idPageTo: "pageTo",  idPageError: "page_form_error"});

pageForm.addSubmitHandler((pageFormObg) => {
    const pages = library.getBooksByPage (pageFormObg.pageFrom, pageFormObg.pageTo);
    listPageBooks.showBooksList(pages);
})


// ***********
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
       if (index == 1) {
        const books = library.getAllBooks();
             listAllBooks.showBooksList(books);
    }
}

window.showSection = showSection;
