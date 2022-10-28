
console.log ("SumDigits");

let number = -439;
let sum = SumDigits (number);
console.log (sum);

function SumDigits (number)
{
   let rem = 0; 
   let sum = 0;
   if (number < 0)
   { 
    number = -number;
   }
       do {
        rem = number % 10;
        sum = sum + rem;
        number = number/10;
        number = Math.floor (number);
        }   while (number > 0);
       return sum;
}    

