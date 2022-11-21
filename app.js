
const str1 = "yellow";
const stringsAr = ['weLoly','leloyw','wolley', 'weloyl',
             'weloll', 'leloy', 'wollet', 'weloyo', 'yelloww', 'YELLOW', 'yelloq'];


stringsAr.forEach((e, i) => { isAnagram (str1, stringsAr[i]) == true ? 
                    console.log (`"${stringsAr[i]}" is Anagram of "${str1}"`) :
                    console.log (`"${stringsAr[i]}" isn't Anagram of "${str1}"`); 
                });

function isAnagram (str1, str2) {

if (str1.lenght != str2.lenght)
{ return false;
}
else {
   
    const str1ArrayObject = str1Treatment(str1);
    const str2Array = str2Treatment (str2);
    let res = true;

str2Array.forEach (el2 => {
              str1ArrayObject.forEach (el1 => {
                      if (el1[0] == el2) el1[1]-- ; });
        });
       
str1ArrayObject.forEach (el1 => {
        if (el1[1] != 0) res = false;   });
  return res;
}
}

function str1Treatment (str1) {
    const str1Object = {};
    const str1Array = Array.from (str1.toLowerCase()); 
    str1Array.forEach (element => {
        str1Object[element] == true ? str1Object[element]++ : str1Object[element]=1;
            });
    return Object.entries(str1Object);
}

function str2Treatment (str2) {
  
    return Array.from (str2.toLowerCase());
}