const inputElements = document.querySelectorAll(".form-class [name]");
const errorElement = document.querySelector(".error-info");


const MIN_YEAR = 1950;
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const CURRENT_YEAR = new Date().getFullYear();


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
   const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
  let currentEventValue = event.target.value;
    if (event.target.name == "salary") {
       /* V.R. The following will do your code more effective
          const salary = +event.target.value;
          */
        if(+event.target.value < MIN_SALARY || +event.target.value > MAX_SALARY){
          event.target.value='' ;
          printError(`Error: salary must be from ${MIN_SALARY} to ${MAX_SALARY}`)
        }
    }
    // from Yuri: better else if(event.target.name == "birthDate"){...
     // V.R. 'else' is redundant. It will be the same without it.
    else {
        if (event.target.name == "birthDate") {
             /* V.R. The following will do your code more effective
          const year = +event.target.value.substring(0,4);
          */
          if(+event.target.value.substring(0,4) < MIN_YEAR ||
              +event.target.value.substring(0,4) > CURRENT_YEAR){
                event.target.value='' ;    
            printError (`Error: birthday must be from ${MIN_YEAR} to ${CURRENT_YEAR}`);  
             }
            }
        } 
}       

function printError (string) {
           errorElement.innerHTML = string
      setTimeout(function() {
            errorElement.innerHTML = '';
        },5000) 
     }
