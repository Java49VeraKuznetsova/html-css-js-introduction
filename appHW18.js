
const str1 = "yellow";
const stringsAr = ['weLoly','leloyw','wolley', 'weloyl',
             'weloll', 'leloy', 'wollet', 'weloyo', 'yelloww', 'YELLOW', 'yelloq'];
            
// testing code
stringsAr.forEach((e, i) => { isAnagram (str1, stringsAr[i]) === true ? 
                    console.log (`"${stringsAr[i]}" is Anagram of "${str1}"`) :
                    console.log (`"${stringsAr[i]}" isn't Anagram of "${str1}"`); 

                });

function isAnagram (str1, str2) {


if (str1.lenght != str2.lenght)
{ return false;
}
else {
    // treatments both words
    const str1ArrayObject = str1Treatment(str1);
    const str2Array = str2Treatment (str2);
    let res = true;

    
// if letter in word2 is in word1, decrease frequancy
str2Array.forEach (el2 => {
              str1ArrayObject.forEach (el1 => {
                      if (el1[0] == el2) el1[1]-- ; });
        });

       // if all frequancies in word 1 == 0 --> Anagramm
str1ArrayObject.forEach (el1 => {
        if (el1[1] != 0) res = false;   });

       return res;
}
}

function str1Treatment (str1) {
    // main word
    const str1Object = {};
    // main word --> array with only Lower Case letters
    const str1Array = Array.from (str1.toLowerCase()); 
    // Object for main word --> element: letter + frequency
    str1Array.forEach (element => {
        str1Object[element] == true ? str1Object[element]++ : str1Object[element]=1;
            });
            // object for main word --> array: element: array letter + frequency
    return Object.entries(str1Object);
}

function str2Treatment (str2) {
  // word for test: string --> array with only Lower Case letters
    return Array.from (str2.toLowerCase());
}

