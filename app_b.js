const nEmployees = 2;
const idDigits = 4;
const minSalary = 1000;
const maxSalary = 10000;
const minBirthYear = 1940;
const maxBirthYear = 2020;


function 
createRandomEmployees (nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
  let employees = [];
  let accID = [0];
  let id;
  console.log (nEmployees);
                   let e = {};
  
  let minID = Math.pow (10, idDigits-1);
  let maxID = Math.pow (10, idDigits)-1;


  for (i = 0; i < nEmployees; i++) {
    do {
       id = getRandomIntegerInt (minID, maxID);  
    } while (accID.every (el => el == id));
  accID.push (id); 

  let nameEmpl = 'name'+id;
  let birthYear = getRandomIntegerInt (minBirthYear, maxBirthYear);
  let salary = getRandomIntegerInt (minSalary, maxSalary);
  console.log (id, nameEmpl, birthYear, salary)
 // e = createEmployee(id,nameEmpl,birthYear,salary);
 // console.log (e);
  //employees.push (createEmployee(id,nameEmpl,birthYear,salary));
 // console.log (employees);
  // return employees;
  }
}
/*
console.log (`Task 1, ${createRabdomEmployees
  (nEmployees, idDigits, minSalary, maxSalary,minBirthYear,maxBirthYear)}`);
  */
/*
let e = createRabdomEmployees (nEmployees,idDigits,minSalary,maxSalary,minBirthYear,maxBirthYear);
console.log (`Task 1, ${e}`);
*/

// console.log (`Task 2: avarage age:, ${getAverageAge(employees)}`);

// Task 1
/*
function createRabdomEmployees (nEmployees,idDigits,minSalary,maxSalary,minBirthYear,maxBirthYear) {
  
  let employees = [];

let id;
let IDacc = [0];

   for (let i = 0; i < nEmployees; i++)
   {   
      let IDmin = Math.pow(10,idDigits-1);
      let IDmax = Math.pow(10,idDigits) -1;
     // console.log (IDmin, IDmax); 
      do {
        id = getRandomIntegerInt (IDmin, IDmax);
      } while (IDacc.every(el => el == id) );
      IDacc.push (id);
      console.log (IDacc);
      
      let nameEmpl = 'name'+id;
      let birthYear = getRandomIntegerInt (minBirthYear,maxBirthYear)
      let salary = getRandomIntegerInt (minSalary, maxSalary);  
      console.log (nameEmpl, birthYear, salary);    
      employees.push (createEmployee (id, nameEmpl, birthYear, salary));
  
     console.log (employees);
  
   }
    return employees;
}

*/
function createEmployee (id,name, birthYear, salary){

    return {id, name, birthYear, salary};
}


  function getRandomIntegerInt (minValue, maxValue) { 
    return Math.trunc(Math.random() * (maxValue-minValue)+minValue);
  }

 // Task 2 
 /*
 function getAverageAge (employees) {
  let year = new Date().getFullYear();
  let res =
  employees.reduce ((count, birth, index) => {
   count +=(year-birth)/(index+1)}, 0) 
 console.log (res);
 return res;
  }
*/
/*
  function getEmployeesBySalary (employees, salaryFrom, payTo) {
      let employeesSalary = employees.filter ((element, index) =>
         {let res =  employees[index].salary > salaryFrom && 
          employees[index].salary < payTo;
           console.log (res); 
          return res});
          console.log (employeesSalary);

         
         employeesSalary.sort((element1, element2) => 
                           element1.salary - element2.salary);
                           
                      
                           
        console.log (employeesSalary);
       

  }
*/

/*
  function increaseSalary (employees, borderSalary, percent) {
    let employeesNewSalary = 
       employees.map = (element => {
        if (employees.salary < borderSalary)
         employeesNewSalary.salary = employees.salary*percent
       })
       console.log (employeesNewSalary);
       return employeesNewSalary;
  }
*/

  //console.log (getSalary(345, 415));


  //////
//console.log (getID(4));
/*
function genArray8 () //function to get random array [8]
{
  let arNumberTZ8 = [];
  for (let i=0; i < 8; i++) 
     {
      arNumberTZ8[i] = Math.round(Math.random() * 9);
     }
   return arNumberTZ8;
} */

//if (colors.includes('black') == false)

/*
function getID (nID) {

    return Math.trunc(Math.random() * Math.pow(10,nID))
  }

  function getSalary (minSalary, maxSalary) {
    return Math.trunc(Math.random() * (maxSalary-minSalary)+minSalary);

  }
*/