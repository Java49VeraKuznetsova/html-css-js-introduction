
export class BookList {
    #BookList;
    constructor (idList) {
        this.#BookList = document.getElementById (idList);
    }
    showBooksList (books) {
       this.#BookList.innerHTML = getBookItems(books);
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