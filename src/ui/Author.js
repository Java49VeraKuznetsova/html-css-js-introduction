export class AuthorForm {
    #formElement;
    #authorInputElement;
    
    constructor (params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthorInput);
    }

addSubmitHandler (processAuthorFun) {
  this.#formElement.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const authorSearch = this.#authorInputElement.value;
   
    processAuthorFun (authorSearch);
  
  //  booksAuthorListElement.innerHTML = getBookItems(author);

  }) 
       
        
    
}

}
