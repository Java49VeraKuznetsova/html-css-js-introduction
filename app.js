console.log ("Homework 12");

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

console.log(number1,'=',fromNumberToString(number1, base1));
console.log(number2,'=',fromNumberToString(number2, base2)); 
console.log(number3,'=',fromNumberToString(number3, base3)); 


