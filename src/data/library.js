//functions of Library

export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.page = +book.page;
    this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }

    getAuthorBooks(authorSearch) {
    return this.books.filter(e => 
        e.author.toLowerCase() === authorSearch.toLowerCase());
        
    
    }
    getBooksByPage(pageFrom, pageTo) {
        return this.books.filter(e => e.page >= pageFrom && e.page < pageTo);
    }
}