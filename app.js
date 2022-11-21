
const str1 = "yellow";
const stringsAr = ['weLoly','leloyw','wolley', 'weloyl',
             'weloll', 'leloy', 'wollet', 'weloyo', 'yelloww', 'YELLOW'];



stringsAr.forEach((e, i) => { isAnagram (str1, stringsAr[i]) == true ? 
                    console.log (`"${stringsAr[i]}" is Anagram of "${str1}"`) :
                    console.log (`"${stringsAr[i]}" isn't Anagram of "${str1}"`); 
                });

function isAnagram (str1, str2) {
let res = true; 
if (str1.lenght != str2.lenght)
{ return res = false;
}
else {
    
    const str1ArrayObject = str1Treatment(str1);

const str1Object = {};
//console.log (str1, str2);

const str1Array = Array.from (str1.toLowerCase());

const str2Array = Array.from (str2.toLowerCase());



str1Array.forEach (element => {

  
    str1Object[element] == true ? str1Object[element]++ : str1Object[element]=1;

    });

    const str1ArrayObject = Object.entries(str1Object);


str2Array.forEach (el2 => {
              str1ArrayObject.forEach (el1 => {
           // el2 == el1[0] ? el1--;
            if (el1[0] == el2) el1[1]-- ;
            
          });
        });
       
      res = true;
       str1ArrayObject.forEach (el1 => {
       // if (el1[1] == 1) res = false;
       if (el1[1] != 0) res = false;
       });
       console.log (res);
   return res;
}
}

function str1Treatment (str1) {
    
}
