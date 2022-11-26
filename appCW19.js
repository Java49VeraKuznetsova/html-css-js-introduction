function createEmployee (id,name, birthYear, salary){

    return {id, name, birthYear, salary};
}
const empl1 = createEmployee (123, "Vasya", 2000, 10000);
const empl3 = empl1;
console.log (empl3);
const empl2 = createEmployee (123, "Vasya", 2000, 10000);
console.log (empl1, empl2);
console.log (empl1 == empl2);

function updateSalery (empl, newSalary) {
  empl.salary = newSalary;
}

updateSalery(empl1, 15000);
console.log(empl1);
function updateSaleryPrimitive(salary, newSalary) {
    salary = newSalary;
   // empl = createEmployee  (123, "Vasya", 2000, newSalary);
}
let salary = 10000;
updateSaleryPrimitive(salary,20000);
console.log("salary",salary);

/*
function updateSalery (empl, newSalary) {
  empl = createEmployee (123, "Vasya", 2000, newSalary);
}
updateSalery(empl1, 15000);
console.log(empl2);
*/

/*
function updateSalery (empl1, newSalary) {
  empl1 = createEmployee (123, "Vasya", 2000, newSalary);
}
updateSalery(empl1, 15000);
console.log(empl1);
*/