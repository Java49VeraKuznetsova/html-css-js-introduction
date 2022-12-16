import { showErrorMessage } from "./errorMessage.js";
export class PageForm {
#formElement;
#PageFromInputElement;
#PageToInputElement;
#PageErrorElement;
#pageFrom;
#pageTo;


constructor(paramsPages) {
    this.#formElement = document.getElementById(paramsPages.idForm);
    this.#PageFromInputElement = document.getElementById(paramsPages.idPageFrom);
    this.#PageToInputElement = document.getElementById(paramsPages.idPageTo);
    this.#PageErrorElement = document.getElementById(paramsPages.idPageError);  
    this.#pageFrom = 0;
    this.#pageTo = 0;
    this.OnClose();
}



addSubmitHandler(processPageFun) {
    this.#formElement.addEventListener ("submit", (event) => {
        event.preventDefault();
   const pageFormObg = {pageFrom: this.#pageFrom, pageTo: this.#pageTo} 
   processPageFun(pageFormObg);
})
    this.#formElement.addEventListener ("reset", (event) => {
       this.#pageFrom = 0;
       this.#pageTo = 0;  
    }) 

}

OnClose () {
    this.#PageFromInputElement.addEventListener("change", (event) => {
     this.onChangePageFrom(event);
    })
    this.#PageToInputElement.addEventListener("change", (event) => {
      this.onChangePageTo(event);
    })

}

onChangePageFrom(event) {
    const value = +event.target.value;
    if (this.#pageTo && value >= this.#pageTo) {
        showErrorMessage(event.target, "Page 'From' must be less than Page 'To'",
        this.#PageErrorElement);
    } else {
        this.#pageFrom = value;
    }
}

onChangePageTo(event) {
    const value = +event.target.value;
    if (this.#pageFrom && value < this.#pageFrom) {
        showErrorMessage(event.target, "Page 'To' must be greater than Page 'From'",
        this.#PageErrorElement);
    }
    this.#pageTo = value;
   }
}






