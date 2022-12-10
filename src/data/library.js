//functions of Library

export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.page = +book.page;
        book.author = book.author.toLowerCase();
        console.log("5", book);
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }

    getAuthorBooks(authorSearch) {
        authorSearch = authorSearch.toLowerCase();
       const b = this.books.filter (e => {
      
       e.author == authorSearch;
    console.log ("1")});
    console.log ("2", b);

    }
    getBooksByPage(pageFrom, pageTo) {
        return this.books.filter(e => e.page >= pageFrom && e.page < pageTo);
    }
}