/* 2.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  */
  /* 4
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());
  */

  /* 5

  
  const bird = {
    size: "small"
  };
  
  const mouse = {
    name: "Mickey",
    small: true
  };
  console.log (mouse.bird.size); - Cannot read properties of undefined (reading 'size')
  console.log (mouse[bird.size]); - true
  console.log (mouse[bird["size"]]); - true
  */

  /* 6

  
  let c = { greeting: "Hey!" };
  let d;
  
  d = c;
  c.greeting = "Hello";
  console.log(d.greeting);  Hello
  */

  /*7

  
  let a = 3;
  let b = new Number(3);
  let c = 3;
  
  console.log(a == b); true
  console.log(a === b); false
  console.log(b === c); false
  
  */

  /* 8

  
  function bark() {
    console.log("Woof!");
  }
  bark(); Woof!
  bark.animal = "dog";
  bark(); Woof!
  console.log (bark.animal); dog
  */

  /* 9

 
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person("Lydia", "Hallie");
  const sarah = Person("Sarah", "Smith");
  
  console.log(lydia); Person { firstName: 'Lydia', lastName: 'Hallie' }
  console.log(sarah); undefined
   */

  /* 10

  function sum(a, b) {
    return a + b;
  }
  
 console.log(sum(1, "2"));

 12
 */

 /* 11

 
 let number = 0;
 console.log(number++);  0
 console.log(++number);  2
 console.log(number);  2
 */

 /* 12

 
 function checkAge(data) {
    if (data === { age: 18 }) {
      console.log("You are an adult!");
    } else if (data == { age: 18 }) {
      console.log("You are still an adult.");
    } else {
      console.log(`Hmm.. You don't have an age I guess`);  !!
    }
  }
  
  checkAge({ age: 18 });
  */

  /* 15

  
  var num = 8;
  var num = 10;
  
  console.log(num);
  */

  /* 17

  
  const foo = () => console.log("First");
  const bar = () => setTimeout(() => console.log("Second"));
  const baz = () => console.log("Third");
  
  bar();
  foo();
  baz();
  */

  /* 21

  
  let person = { name: "Lydia" };
  const members = [person];
  person = null;
  
  console.log(members);
*/
/* 22
  const person = {
    name: "Lydia",
    age: 21
  };
  
  for (const item in person) { //iterates keys of an object
    console.log(item);
  }
  
  */

  /*23
 console.log(3 + 4 + "5");
  */

 /* 24 
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers.length);
A: 11
B: 4
C: Error

*/

/* 25 
const num = parseInt("7*6");
console.log (num);
*/

/* 26 

function getInfo(member, year) {
    member.name = "Lydia";
    year = "1998";
  }
  
  const person = { name: "Sarah" };
  const birthYear = "1997";
  
  getInfo(person, birthYear);
  
  console.log(person, birthYear);
  
 */

  /* 31

  
  let num = 10;

  const increaseNumber = () => num++;
  const increasePassedNumber = number => number++;
  
  const num1 = increaseNumber();
  const num2 = increasePassedNumber(num1);
  
  console.log(num);
  console.log(num1);
  console.log(num2);
  
  */
  
  /* 32

  
  [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
  */

  /*  33

  
  function addToList(item, list) {
    return list.push(item);
  }
  
  const result = addToList("apple", ["banana"]);
  console.log(result);
  
  */

/* 34
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
*/

/* 35
function sayHi(name) {
    return `Hi there, ${name}`
  }
  
  console.log(sayHi())
  
*/

/* 36
console.log("I want pizza"[0])

*/

/*  37


function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young."
    } else {
      const message = "Yay! You're old enough!"
    }
  
    return message
  }
  console.log(checkAge(21))
  */

  /* 43

  
 console.log (Boolean(0), Boolean(new Number(0)),
 Boolean (("")), Boolean ((" ")), Boolean (new Boolean(false)),
 Boolean (undefined));

 (() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

*/

/* 44
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
*/

/* 45

console.log ([[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
)
)
*/