/*
function isAnagram (str1, str2) {
    return Array.from(str1).sort().join('') ==
    Array.from(str2).sort().join('');
}
*/


function isAnagram(str1, str2) {
let res = false;
if (str1.length == str2.length) {

    const str1Occurances = getSymbolOccurences(str1);
    res = checkAnagram (str1Occurances, str2);
}
return res;
}

function getSymbolOccurences (string) {
    const stringArray = Array.from (string);
    return stringArray.reduce(symbolProcessing,{});

}

function symbolProcessing (res, cur) {
    if (res[cur]) {
        res[cur]++;
    } else {
        res[cur]=1
    }
    return res;
}

function checkAnagram (occurences, string) {
    const stringArray = Array.from(string);
   
    return stringArray.every(symbol => {
        let res = false;
        if (occurrences[symbol]) {
            res = true;
            occurrences[symbol]--
        }
        return res;

    })

}
   isAnagram("yellow", 'wolley');
// const result = getSymbolOccurences ("yellow")