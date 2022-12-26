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
