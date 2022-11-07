console.log ("Homework 13");

let teudatStrNumber = '345714521';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber), '\n');

teudatStrNumber = '345714520';
console.log ("Teudat Zehut number: ", teudatStrNumber, "Answer: ", checkTeudatZehut(teudatStrNumber), '\n');

teudatStrNumber = '3457N4523';
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

/* V.R. May be following is easier.
  return Array.from(teudatStrNumber).map(symToNumber);
  */
function StringToNumber (teudatStrNumber) //function to arrange string to array of numbers
{
  let arSymbolTZ = Array.from(teudatStrNumber); /*array of symbols: string */
  let arNumberTZ =  arSymbolTZ.map (symToNumber); /* function get array of numbers */
     return arNumberTZ;
}

function symToNumber (symbol, index) //function to arrange symbol to number
{
   /* V.R. May be
  return +symbol;
  is easier
  */
  return Number(symbol);
} 

function checkInput (arNumberTZ) //function for checking input
{
    let check = true; 
   if (arNumberTZ.length == 9)
     {
      /* !!!!! V.R. This cycle gives true if the LAST number is OK.
      It isn't correct. It is necessary to fix.
      */
     
      arNumberTZ.forEach(function(symbol)
      { 
        if (symbol >= 0 && symbol <= 9)
            { check = true;}
        else
        /* V.R. The function like this hasn't to log.
        It returns boolean value and caller logs.
        */
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
      { 
        total += (oddN % 10) + 1; 
        // V.R. total += (oddN % 10) + Math.floor(oddN/10);
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

  //!!! for case if control sum is multiplied on 10
  // you get digit 10 
  //that can not be in the regular decimal computing system
  //arTZnumber[8] =  10 - (arTZnumber.reduce (sumTZ,0) % 10);
  // this is new code:
  let controlNumber = arTZnumber.reduce (sumTZ,0) % 10;
  controlNumber == 0 ? arTZnumber[8] = controlNumber : arTZnumber[8] = 10-controlNumber;
   
       
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
  // V.R. String.fromCharCode(cur+'0'.charCodeAt());
   return String(symbol);
} 

