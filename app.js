console.log ("Homework 12");

/* !!! validation for numbers, base, string and negative numbers! */

let string1 = 'java', string2 = 'react', string3 = '10110011011011';
let base1 = 36, base2 = 36, base3 = 2;
let number1 = 900550, number2 = 46016237, number3 = 11483;

function FromStringToNumber(string, base)
{
   let result = 0; 
  
  for (let i = 0; i < string.length; i++)
   {
      let code =  string.charCodeAt(i); /* sumbol --> ACKII */
  if (code >= 48 && code <= 57) /* ASKII -> 10, numbers */
  {
    code -= 48;
  }
  if (code >=97 && code <= 122) /* ASKII -> 10, letters */
  {
    code -=87;
  }
   result = result*base + code; /* turn number in base to 10-number */
  }
  return result;
}

function fromNumberToString (number, base)
{
  number = Math.abs(number);
   let result = '';
      
   do{
    let digit = number % base;
    if (digit >= 0 && digit <= 9) /* 10 -> ASKII, numbers */
    {
      digit += 48;
    }
    if (digit >=10 && digit <= 35) /* 10 -> ASKII, letters */
    {
      digit +=87;
    }
    char = String.fromCharCode(digit); /*turn ACCII to symbol */
    result = char + result; /* !! += - reverse order - error */
    number = Math.floor (number/base);
   
   } while (number != 0);
   return result;
}


console.log(string1, '=', FromStringToNumber(string1, base1));
console.log(string2, '=', FromStringToNumber(string2, base2)); 
console.log(string3, '=', FromStringToNumber(string3, base3)); 

console.log(number1,'=', fromNumberToString(number1, base1));
console.log(number2,'=', fromNumberToString(number2, base2)); 
console.log(number3,'=', fromNumberToString(number3, base3)); 

/* console.log("Hello world"); */
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
 // i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)
/************************************************** */
//HW #11
// function sumDigits(number) {
//     //compute sum of digits for the integer numbers
//    number = Math.abs(number);
//    let sum = 0;
//    number = Math.trunc(number); //get rid of the fractional part
//    do {
//         let digit = number % 10;
//         number = (number - digit) / 10;
//         sum += digit;
//    }while(number != 0);
//   return sum;

// }
// //Example
// let sum = sumDigits(123)
// console.log(sum); //should be printed out 6


/*********************************CW 12 */
// let strNum1 = "123";
// let strNum2 = '9';
// console.log(strNum1 + strNum2); //=> 1239
// console.log(strNum1 - strNum2); //=> 114
// console.log(strNum1 > strNum2);
//conversions from string to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); //=> 132
// console.log(num1 - num2); //=> 114
// console.log(num1 > num2); //true
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// if (isNaN(numStr)) {
//     console.log("numStr is NaN")
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(36);
// console.log(strNum10, strNum16);

//conversion from Morse code to number
//symbol "." -> 0 ; "-" -> 1
// function  fromMorseToNumber(morseCode) {
//     let result = 0;
//     for (let i = 0; i < morseCode.length; i++) {
//         let code = morseCode[i] == '.' ? 0 : 1;
//         result = result * 2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber('-.-...-.---.-.-..--'));
// function fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.trunc(number / 2);

//     } while(number != 0);
//     return res;
// }
// console.log(fromNumberToMorse(333651));

/* Code from Yuri */

function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    if (digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10);
    }
      
   return digit;
    //31 - 10 + 97
}
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);
  

 
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
} 

//getting code from symbol 
//console.log('abc'.charCodeAt(2))



