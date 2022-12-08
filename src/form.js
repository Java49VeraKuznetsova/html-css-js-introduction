/* V.R. The names of css and js files have to be 'company' or something like this.
The same is with application's title (html).
*/


const inputElements = document.querySelectorAll(".form-class [name]");

const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const company = new Company();

const dateErrorElement = document.getElementById("date_error");
const salaryErrorElement = document.getElementById("salary_error");

const sectionElements = document.querySelectorAll("section");
const allEmployess = document.querySelector(".empl-list");
const inputSalary = document.querySelectorAll(".salary-class")
const errorElement = document.querySelector(".error-info");
const printSalary = document.querySelector(".salary-list");
// ????
let salaryFrom = 0;
  let salaryTo = MAX_SALARY;

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
    company.hireEmployee(employee);
        
}
function onChange(event) {

    if (event.target.name == "salary") {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") {
        validateBirthdate(event.target);
    }
}

function onSubmitSalary(event) {
  event.preventDefault();
  const employeesBySalary = company.getEmployeesBySalary (salaryFrom, salaryTo);
    // inputSalary.hidden = true; ??
   printSalary.innerHTML= getEpmloyeesPrint(employeesBySalary);
  
}


function onChangeSal(event) {
    /* V.R. This algorithm has a hole. Enter from=7000 and to=9000. Push button RESET.
  Enter from=10000 and error appears. Do you undrstand why?
  */
 /* NECESSARY TO DO DOUBLE CHECKING */
 
  event.target.name == "salaryFrom" ?  salaryFrom = +event.target.value :
  salaryTo = +event.target.value;
  if (salaryTo <= salaryFrom)
     showErrorMessageSalary(salaryFrom, salaryTo);
 }
function validateSalary(element) {
    const value = +element.value;
    if (value < MIN_SALARY || value > MAX_SALARY) {
        const message = value < MIN_SALARY ? `salary must be ${MIN_SALARY} or greater`
            : `salary must be ${MAX_SALARY} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
   element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function showErrorMessageSalary(salaryFrom, salaryTo) {
    errorElement.innerHTML =   `Maximum salary ${salaryTo} 
     must be more then minimum salary ${salaryFrom}`;
  setTimeout(() => {
     errorElement.innerHTML = '';
}, TIME_OUT_ERROR_MESSAGE); 
}
function getMaxYear() {
    return new Date().getFullYear();
}
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    //TODO
    return company.employees.filter(empl => empl.salary >= salaryFrom
         && empl.salary <= salaryTo);   
}

function printEmployees () {

allEmployess.innerHTML = getEpmloyeesPrint(company.employees);

}

function getEpmloyeesPrint(employees){
  const prEmployees = employees.map(empl =>
    getItemEmlPrint(empl));
   
    return prEmployees.join('');
}

function getItemEmlPrint (employee) {
  return `<li class="empl-card"> ${getOneEmplPrint(employee)} </li>`
}
function getOneEmplPrint (employee) {
 
 return  `Name: ${employee.employee_name}<br>
                E-mail: ${employee.email} <br>
                Department: ${employee.department} <br>
                Birtday: ${employee.birthDate}<br>
                Salary: ${employee.salary}<br><br>`;

}
function show(index) {
  sectionElements.forEach(section => section.hidden = true);
  sectionElements[index].hidden = false;
 // ??
  if (index == 1)  printEmployees(company.employees);
}



