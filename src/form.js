const inputElements = document.querySelectorAll(".form-class [name]");
const dateElement = document.getElementById("label-info");

const dateElement1 = document.querySelector(".label-info")

const MIN_YEAR = 1950;
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;

//const HIDDEN = "hidden";

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
   // console.log (inputElements);
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        if(+event.target.value < MIN_SALARY || +event.target.value > MAX_SALARY){
            event.target.value=''
          printWarning(`<label>Salary must be from ${MIN_SALARY} to ${MAX_SALARY}`)
        }
    }
    else {
        if (event.target.name == "birthDate") {
            if(+event.target.value.substring(0,4) < 1950 ||
              +event.target.value.substring(0,4) > new Date().getFullYear()){
                event.target.value='' ;
             // dateElement1.innerHTML = printWarning(1);
               printWarning (`<label>Birthday must be from ${MIN_YEAR} to ${new Date().getFullYear()}</label>`);
                   
             }
            }
        } 
}       

function printWarning (string) {

  
       // dateElement1.classList.add();
       dateElement1.innerHTML = string
      //  `<label>Birthday must be from 1950 to ${new Date().getFullYear()}</label>`
        setTimeout(function() {
          //  dateElement1.classList.remove(HIDDEN);
         // dateElement1.classList.remove()
         dateElement1.innerHTML = '';
        },5000) 
       // const string = `<label>Birthday must be from 1950 to ${new Date().getFullYear()}</label>`
        // console.log (string);
       // return string;
    
}
