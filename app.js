console.log ("Homework 13");

let teudatStrNumber = '345714521';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber), '\n');

teudatStrNumber = '345714520';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber), '\n');

teudatStrNumber = '34571452N';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber), '\n');

teudatStrNumber = '34571452';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber),'\n');

teudatStrNumber = '324505122';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber),'\n');


console.log ("Create TD:", generateRandomTeudatZehut());

// first task
function checkTeudatZehut(teudatStrNumber) 
{
   let arNumberTZ = StringToNumber (teudatStrNumber); //TZ - array of nimbers
   let check = checkInput (arNumberTZ); //check input of TZ: lenght, symbols

// if input - O.K., check control sum
  if (check == true)  
    { 
      check = false;  
         let sumTD =  arNumberTZ.reduce (sumTZ,0);
         if (sumTD % 10 == 0)
             check = true;
         else  
             console.log ("Error3: incorrect TZnumber");
    }           
  return check;
}

function StringToNumber (teudatStrNumber) //function to arrange string to array of numbers
{
  let arSymbolTZ = Array.from(teudatStrNumber); /*array of symbols: string */
  let arNumberTZ =  arSymbolTZ.map (symToNumber); /* function get array of numbers */
     return arNumberTZ;
}

function symToNumber (symbol, index) //function to arrange symbol to number
{
 
  return Number(symbol);
} 

function checkInput (arNumberTZ) //function for checking input
{
    let check = false;
    if (arNumberTZ.length == 9)
     {
      arNumberTZ.forEach(function(symbol)
      { 
        if (symbol >= 0 && symbol <= 9)
            { check = true;}
        else
            {console.log ("Error1: not a number");
              check = false;  
           } 
      });
     }
    else {
      console.log ("Error2: incorrest length");
        }
  return check;
}

function sumTZ (total, symbol, index) //function to calc. control sum
{
  if (index % 2 == 0)
     { total += symbol; 
     }
  else {
    let oddN = symbol*2;
    if (oddN >9)
      { total += (oddN % 10) + 1; 
      }     
    else  {
      total += oddN;
          }    
  }
  return total;  
}

// second task
function generateRandomTeudatZehut()
{
  // create array from 8 elements
  let arTZnumber = genArray8();
  
  // put control sum to 9-element
  arTZnumber[8] =  10 - (arTZnumber.reduce (sumTZ,0) % 10);
  // change array from number to symbol
  let arSymbolTZ =  arTZnumber.map (numberToSym); 
  // get string from array of symbols without spasee and comma
  let newTZ = arSymbolTZ.join('');
   // check new TZ
  console.log ("New TD: ", newTZ, "Answer: ", checkTeudatZehut(newTZ),'\n');

  return newTZ;
} 

function genArray8 () //function to get random array [8]
{
  let arNumberTZ8 = [];
  for (let i=0; i < 8; i++) 
     {
      arNumberTZ8[i] = Math.round(Math.random() * 9);
     }
   return arNumberTZ8;
}

function numberToSym (symbol) //function to arrange number to string
{
   return String(symbol);
} 
