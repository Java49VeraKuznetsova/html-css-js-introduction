console.log ("Homework 14");

let strings = ["abc", "lmn", "cd","abc","abc"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let arD = [10, 20, 30, 40, 50, 60, 70];
let copy, index, offset, element;
let ulSurrounding; 

console.log ("ulSurrounding:", ulSurrounding = ulSurround(strings));

element = "abc";
console.log ("strings:", strings, "element = ", element, "result =", count(strings,element));

element = "ab";
console.log ("strings:", strings, "element = ", element, "result =", count(strings,element));

console.log ("arD:", arrayCopy(numbers, 3, arD, 4, 3));

copy = numbers.slice(), index = 2, offset = 4;
console.log ("move:", numbers, "index =", index, "offset =", offset, "result:",  move(copy, index, offset));

copy = numbers.slice(), index = 3, offset = -1;
console.log ("move:", numbers, "index =", index, "offset =", offset, "result:",  move(copy, index, offset));

// Task 1
function ulSurround (strings)
{
   let array = strings.map (function(e) { 
        return '<li>' + e + '<li>';
    });
    array.splice (0, 0, "<ul>" );
    array.splice (array.length, 0, "<ul>");
    //!! not return array.splice
    return array;
}

//Task 2

function count (strings, element)
{
   return strings.reduce (function(res, symbol){
      if (symbol == element) 
                    res++; 
      return res;
  },0);
}

//Task 3

function arrayCopy (src, srcPos, dst, dstPos, length)
{  // 2 string of code: not correct. Why slice don't work??
   let array = src.slice(srcPos);
   array.splice (length, src.length-length);
   for (let i = 0; i<length; i++)
   {
    dst.splice(dstPos+i,0,array[i]);
   }
   return dst;
}

//Task 4

function move (array, index, offset)
{
   //let ar = array.splice (index, 1, array[index], index+offset);
   let el = array[index];
   array.splice (index, 1);
   array.splice (index+offset, 0, el);
   // see ? in task 1 - return
   return array;
}