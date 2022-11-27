const nEmployees = 3;
const idDigits = 4;
const minBirthYear = 1940;
const maxBirthYear = 2020;
const minSalary = 1000;
const maxSalary = 10000;
// V.R. It bis better to declare this array inside the function createRandomEmployees()
let employees = [];

//Task 1
console.log ("Task 1", createRandomEmployees 
(nEmployees, idDigits, minBirthYear, maxBirthYear, minSalary, maxSalary));

// Task 2

 let averageAge = getAverageAge (employees);
 console.log ("Task 2:", averageAge);

   //Task 3
   const salaryFrom = 1500;
   const salaryTo = 7500;
   let emploeeysBySalary = getEmploeeysBySalary (employees,salaryFrom, salaryTo);
   console.log ("Task 3:",emploeeysBySalary);

  // Task 4
  const borderSalary = 5000;
  const percent = 10;
//version 1 - all our Emploeeys

let emploeeysIncSalary = increaseSalary1 (employees, borderSalary, percent);
console.log ("Task4, all emploeeys", emploeeysIncSalary); 

  // version 2 - only Emploeeys with increase salary
  
emploeeysIncSalary = increaseSalary2 (employees, borderSalary, percent);
console.log ("Task4, increase salary", emploeeysIncSalary);

// Task 1
   function createRandomEmployees 
(nEmployees, idDigits, minBirthYear, maxBirthYear, minSalary, maxSalary) {
    // V.R. It is the good place to declare array of employees.
    let accID = [];
    let id;
    let minID = Math.pow(10, idDigits-1);
    let maxID = Math.pow(10, idDigits)-1;
    for (let i = 0; i < nEmployees; i++) {
     do {
       id = getRandomInt (minID, maxID);
           
      } while (accID.includes(id)); 
      // every will be better
      accID.push(id);
 
      let nameEmpl = 'name'+id;
      let birhtYear = getRandomInt (minBirthYear, maxBirthYear);
      let salary = getRandomInt (minSalary, maxSalary);

employees.push (createEmployees (id, nameEmpl, birhtYear, salary));
    }
    return employees;
}


function getRandomInt (minValue, maxValue) {

    return Math.trunc (Math.random()*(maxValue-minValue)+minValue);

}

function createEmployees (id, name, birhtYear, salary) {
    return {id, name, birhtYear, salary}
}

//Task 2
// V.R. OK
function getAverageAge (employees) {
      curYear = new Date ().getFullYear();
      let res =  employees.reduce((count, el, i) => {
      count += curYear - el.birhtYear;
      return count;
   },0)
   
    return res/employees.length;
}

// Task 3
// V.R. OK
function getEmploeeysBySalary (employees,salaryFrom, salaryTo) {

return employees.filter (el =>  el.salary >= salaryFrom && el.salary <= salaryTo). 
   sort ((el1, el2) => el1.salary - el2.salary);
}

//Task 4
function increaseSalary1 (employees, borderSalary, percent) {
    return employees.map (el => {
        if (el.salary < borderSalary)
           el.salary += el.salary*percent/100;
             /* V.R. This map creates the array of arrays, not the array of employees
           with updated salary. The following will do it:
           return el;
           */
       return el;
    });
}

function increaseSalary2 (employees, borderSalary, percent) {
    let emploeeysIncSalary = employees.filter (el => el.salary < borderSalary);
   
    return emploeeysIncSalary.map (el => {
        if (el.salary < borderSalary)
           el.salary += el.salary*percent/100;
            /* V.R. This map creates the array of arrays, not the array of employees
           with updated salary. The following will do it:
           return el;
           */
      // return emploeeysIncSalary;
      return el;
    });  

}