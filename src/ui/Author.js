export class AuthorForm {
    #formElement;
    #authorInputElement;

    constructor (params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthorInput);
    }

addSubmitHandler (processAuthorFun) {
  this.#formElement.addEventListener ("submit", 
  this.handler.bind (this, processAuthorFun))};  
       
handler (processAuthorFun, event)  {
    event.preventDefault(); 
    const authorSearch = this.#authorInputElement.value;
    processAuthorFun (authorSearch);
  
  }     
    
}


