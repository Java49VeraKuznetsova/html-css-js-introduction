console.log ("Howework 15");

// Task 1 
let arMinMax = [1, 2, 3, 4, 5, 7,4, 1, -5];
//array for checking
let arMinMax1 = [1, 2, 3, 4, 5, "a",4, 1, -5];
//first print without [], with imp.string with checking array
checkArNumbers (arMinMax) > 0 ? console.log (`Error: array ${arMinMax} not a number`) :
        console.log (`1. array Min- Max: ${arMinMax}, result: ${MinMax(arMinMax)}`);
// incorect array
        checkArNumbers (arMinMax1) > 0 ? console.log (`Error: array ${arMinMax1}: not a number`) :
        console.log (`1. array Min- Max: ${arMinMax1}, result: ${MinMax(arMinMax1)}`);
        
//second print with [], without imp.string with checking array
checkArNumbers (arMinMax) > 0 ? console.log (`Error: array ${arMinMax} not a number`) :
        console.log ("2. array Min- Max: ", arMinMax, ",  result: ", MinMax(arMinMax));

        // from Yuri:
       
        console.log ("3. array Min- Max: [5, 1, 2, 3, 4],  result: ", MinMax([5, 1, 2, 3, 4]));

        // V.R. OK
function MinMax(arMinMax) {
// Incorrected, comments of Yuri

        /* 
let array = [];
 arMinMax.reduce ((res,e) =>
            {res > e ? (res = e, array[0] = e) : res;
             res < e ? (res = e, array[1] = e) : res;   
             return res;  })
     
return array; */

// hope that is correct in according with comments from Yiri
return arMinMax.reduce ((res, e) =>
            {
                res[0] = res[0] > e ? e : res[0];
                res[1] = res[1] < e ? e : res[1];
                console.log (res, e);
                return res;
            }, [arMinMax[0], arMinMax[0]]);
}
 /* V.R. This code is very close to your code. It also works, but
        it hasn't external array, accumulator (res) plays this role
        return arMinMax.reduce((res,e) => {
                res[0] = res[0] > e ? e : res[0];
                res[1] = res[1] < e ? e : res[1];   
                return res;  
        }, [arMinMax[0],arMinMax[1]]);
        */

// Task 2
// V.R. OK
let arPrefix = ['abc', 'old_abc', 'lmn', '123', 'old_lmn', 'lmn_old'];
let prefix = "old_";
console.log ("1. Sourse array: ", arPrefix, "prefix: ", prefix, " result: ", deleteWithPrefix(arPrefix, prefix));
// Printing not correct, because of not [] in array
//console.log (`2. Sourse array:  ${arPrefix} prefix:  ${prefix} result: ${deleteWithPrefix(arPrefix, prefix)}`);

/* V.R. It is shoter.
        return strings.filter ((e) => !e.startsWith(prefix));
        */

function deleteWithPrefix (strings, prefix) {
        // return initial array with changes. Don't work without return
return strings.filter ((e) => e.startsWith(prefix) == false, prefix);
}

//Task 3
let numbers = [1,6,3,8,5,2,7,4];
checkArNumbers (numbers) > 0 ? console.log (`Error: array ${numbers} not a number`) :
       console.log ("1. Array numbers: ", numbers, "array after sort: ", getSortedEvenOdd(numbers));
// Printing not correct, because of not [] in array
       /* checkArNumbers (numbers) > 0 ? console.log (`Error: array ${numbers} not a number`) :       
console.log (`2. Array numbers:  ${numbers}  array after sort:  ${getSortedEvenOdd(numbers)}`);
*/

/* V.R. It isn't effective, we discussed this at the webinar
*/

function getSortedEvenOdd (numbers){
    let numbersNew;
    arEven = numbers.filter (e => e % 2 == 0);
    arOdd = numbers.filter (e => e % 2 != 0);
    arEven.sort ((a,b) => a-b);
    arOdd.sort ((a,b) => b-a);
    /* V.R. numbersNew is redundant.
    return arEven.concat(arOdd);
    */
    return numbersNew = arEven.concat(arOdd);
}


// checking array of numbers
function checkArNumbers (array) {
 
return array.reduce ((res,el) => typeof(el) != "number" ? res+1 : res, 0);
   
}

