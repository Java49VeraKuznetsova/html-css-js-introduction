console.log ("Homework 14");

let strings = ["abc", "lmn", "cd","abc","abc"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let arD = [10, 20, 30, 40, 50, 60, 70];
let copy, index, offset, element;
let ulSurrounding; 

//Task 1
console.log ("Task 1");
console.log ("ulSurrounding:", ulSurrounding = ulSurround(strings));

//Task 2
console.log ("Task 2");
element = "abc";
console.log ("strings:", strings, "element = ", element, "result =", count(strings,element));

element = "ab";
console.log ("strings:", strings, "element = ", element, "result =", count(strings,element));

//Task 3
console.log ("Task 3");
console.log ("arD:", arrayCopy(numbers, 3, arD, 4, 3));

//Task 4
console.log ("Task 4");
copy = numbers.slice(), index = 2, offset = 4;
console.log ("move:", numbers, "index =", index, "offset =", offset, "result:",  move(copy, index, offset));

copy = numbers.slice(), index = 3, offset = -1;
console.log ("move:", numbers, "index =", index, "offset =", offset, "result:",  move(copy, index, offset));

// Task 1
function ulSurround (strings)
{
   // add to each element new symbols, new massiv
   let array = strings.map (function(e) { 
           // V.R. </li>, not <li>
      return '<li>' + e + '</li>';
    });
    // add new elements to the beginning
    array.splice (0, 0, "<ul>" );
    // add new elements to the end
         // V.R. </ul>, not <ul>
    array.splice (array.length, 0, "</ul>");
    //.splice return deleted elements
    return array;
}

//Task 2

function count (strings, element)
{
   // if element of array == symbol, count++
   return strings.reduce (function(count, symbol){
      if (symbol == element) 
                    count++; 
     return count;
  },0);
}

//Task 3

function arrayCopy (src, srcPos, dst, dstPos, length)
{  // create new array - as a part of source array
   let array = src.slice(srcPos, srcPos+length);
   // took element from array (forEach) and put into dst (splice)
   array.forEach (function(symbol, index) {
      dst.splice(dstPos+index,0,symbol);})
       // V.R. return isn't obligatory because splice changes the array
   // Vera: try to comment, return undefined
       return dst;
}


//Task 4

function move (array, index, offset)
{

   let el = array[index];
   // 2 function splice, because of delete from one place and put into another
   // delete element from the old place
   array.splice (index, 1);
   // put the element for new place
   array.splice (index+offset, 0, el);
   //.splice return deleted elements
    // V.R. return isn't obligatory because splice changes the array
   return array;
}