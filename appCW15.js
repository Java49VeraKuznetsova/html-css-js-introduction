function ulSurround(strings) {
  /*  let res = strings.map (function (str) {
    return '<li>${str}</li>'
    })
*/
let res = strings.map (str => '<li>${str}</li>')
    //res.splice(0, 0, "<ul>");
    res.unshift("<ul>");
    res.push('</ul>');
    return res;
}

let ar = ["123", "abc", "lmn", "lmn"];

console.log (`input: ${ar} output: ${ulSurround(ar)}`);


function count (array, element) {
    return array.reduce ((res, cur) => cur == element ? res +1 : res, 0);
}
let str = "lmn";
console.log(`input: ${ar}, counter of ${str} is ${count(ar,str)}`)


function arrayCopy(src, srcPos, dst, dstPos, length)
{
    let arForCopy = src.slice(srcPos, srcPos+length);
    //dst.splice(dstPos, 0, arForCopy) - MISTAKE!!!
   
    // this is correct
    //arForCopy.forEach((e, i) =>
      //     dst.splice(dstPos + i, 0, e));

      // NEW!!
      dst.splice(dstPos, 0, ...arForCopy);
      return dst;
      //return desirable
}

let ar1 = [1,2,3,4,5,6];
let ar2 = [10, 30,40,50];
arrayCopy(ar1, 2, ar2, 1, 3);
console.log (ar2);
console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1, 2, ar2, 1, 3): ${ar2}`)

function move (array, index2, offset) {
    let movedElem = array.splice (index, 1)[0];
    array.splice(index + offset, 0, movedElem);
    return array;
}

//NEW!!
function getEvenNumbers(numbers) {

    return numbers.filter(n => n % 2 == 0);
    //numbers.filter((n,i)  => i % 2 == 0);
}

let arSort = [2, -10, 3, 1999];
let arSort2 = ["abc", "a", "lmn", "y"];
//arSort.sort((a,b) => a-b);
//arSort2.sort((a,b) => a-b);
// arSort2.sort((a, b)=> a<b ? -1: 1);
arSort.sort((a, b)=> a<b ? -1: 1);
arSort2.sort((a,b)=>a.length - b.length);
console.log(arSort);
console.log(arSort2);




